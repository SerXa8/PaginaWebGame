const fs = require('fs');
const path = require('path');

// Clave de la API de HenrikDev (nunca debe ir en el código ni en el frontend)
const HENRIK_KEY = process.env.VALORANT_API_KEY_HENRY;

if (!HENRIK_KEY) {
  console.error('❌ Falta la variable de entorno VALORANT_API_KEY_HENRY.');
  console.error('   Local:  $env:VALORANT_API_KEY_HENRY = "HDEV-..."');
  console.error('   GitHub: Settings > Secrets and variables > Actions');
  process.exit(1);
}

const REGION = 'eu';
const MATCH_SAMPLE_SIZE = 10;
const REQUEST_DELAY_MS = 3000;

// Lista de jugadores de Valorant
const PLAYERS = [
  {
    name: "SerXa08",
    riotName: "SerXa08",
    tag: "1197",
    role: "duelista",
    twitch: "s3rxa8"
  },
  {
    name: "mamielizabeth",
    riotName: "mamielizabeth",
    tag: "fdm",
    role: "duelista",
    twitch: "" // Vacío si no hace streaming
  },
  {
    name: "AkariNeko",
    riotName: "AkariNeko",
    tag: "1935",
    role: "iniciador",
    twitch: ""
  },
  {
    name: "FakeeDanii",
    riotName: "FakeeDanii",
    tag: "LCLM",
    role: "",
    twitch: "fakeedanii"
  },
  {
    name: "Puchi",
    riotName: "Puchi",
    tag: "7447",
    role: "",
    twitch: ""
  },
  {
    name: "TH Chici",
    riotName: "TH Chici",
    tag: "MMVGA",
    role: "",
    twitch: ""
  },
];

// Mapeo de rangos de Valorant a RR Base acumulados
const TIER_BASE_RR = {
  'IRON': 0, 'BRONZE': 300, 'SILVER': 600, 'GOLD': 900,
  'PLATINUM': 1200, 'DIAMOND': 1500, 'ASCENDANT': 1800,
  'IMMORTAL': 2100, 'RADIANT': 2400
};

const DIVISION_RR = { '1': 0, '2': 100, '3': 200 };

const sleep = (ms) => new Promise(r => setTimeout(r, ms));

// Espacia todas las peticiones para respetar el rate limit de HenrikDev.
let lastRequestAt = 0;
async function throttle() {
  const elapsed = Date.now() - lastRequestAt;
  if (elapsed < REQUEST_DELAY_MS) {
    await sleep(REQUEST_DELAY_MS - elapsed);
  }
  lastRequestAt = Date.now();
}

async function henrikFetch(url, { retries = 3, baseDelay = 2000 } = {}) {
  for (let attempt = 0; attempt <= retries; attempt++) {
    await throttle();
    const res = await fetch(url, { headers: { Authorization: HENRIK_KEY } });

    if (res.status === 429) {
      const retryAfter = Number(res.headers.get('retry-after'))
        || Number(res.headers.get('x-ratelimit-reset'))
        || 60;
      console.warn(`⏳ Rate limit (429). Reintentando en ${retryAfter + 1}s...`);
      await sleep((retryAfter + 1) * 1000);
      continue;
    }

    if (res.status >= 500 && attempt < retries) {
      await sleep(baseDelay * (attempt + 1));
      continue;
    }

    return res;
  }

  throw new Error('Rate limit persistente tras varios reintentos');
}

// Cargar y parsear el archivo live.json generado por la GitHub Action
function getLiveTwitchStreams() {
  const liveFilePath = path.join('./data', 'live.json');
  try {
    if (fs.existsSync(liveFilePath)) {
      const rawData = fs.readFileSync(liveFilePath, 'utf8');
      const parsed = JSON.parse(rawData);
      return parsed.data || [];
    }
  } catch (err) {
    console.error('⚠️ Error leyendo data/live.json:', err.message);
  }
  return [];
}

// Verifica si un jugador está en directo JUGANDO A VALORANT según live.json
function isStreamingValorant(twitchUser, liveStreams) {
  if (!twitchUser) return false;

  const stream = liveStreams.find(
    s => s.user_login.toLowerCase() === twitchUser.toLowerCase()
  );

  if (!stream) return false;

  // Comprueba que la categoría/juego sea exactamente "VALORANT"
  return stream.game_name?.toLowerCase() === 'valorant';
}

function calculateAbsoluteRR(tierName, rankTier, rrInTier) {
  const tierKey = (tierName || 'IRON').toUpperCase();
  const divKey = String(rankTier || '1');
  const base = TIER_BASE_RR[tierKey] || 0;
  const divBase = (tierKey === 'RADIANT') ? 0 : (DIVISION_RR[divKey] || 0);
  return base + divBase + (Number(rrInTier) || 0);
}

async function getMmrData(player, name = player.riotName, tag = player.tag) {
  const url = `https://api.henrikdev.xyz/valorant/v2/mmr/${REGION}/${encodeURIComponent(name)}/${encodeURIComponent(tag)}`;
  const response = await henrikFetch(url);

  if (response.status === 401) {
    throw new Error('401: key inválida, ausente o caducada');
  }
  if (response.status === 404) {
    throw new Error(`404: Riot ID o región incorrectos (${name}#${tag})`);
  }
  if (!response.ok) {
    throw new Error(`HTTP error ${response.status}`);
  }

  const json = await response.json();
  return json.data?.current_data || {};
}

async function getAccountData(player) {
  const url = `https://api.henrikdev.xyz/valorant/v1/account/${encodeURIComponent(player.riotName)}/${encodeURIComponent(player.tag)}`;
  const response = await henrikFetch(url);
  if (!response.ok) return null;

  const json = await response.json();
  return json.data || null;
}

async function getRecentMatches(name, tag) {
  const url = `https://api.henrikdev.xyz/valorant/v3/matches/${REGION}/${encodeURIComponent(name)}/${encodeURIComponent(tag)}?mode=competitive&size=${MATCH_SAMPLE_SIZE}`;
  const response = await henrikFetch(url);
  if (!response.ok) return [];

  const json = await response.json();
  const matches = Array.isArray(json.data) ? json.data : [];

  return matches.filter(match =>
    match.is_available !== false &&
    match.metadata?.mode_id === 'competitive' &&
    Number(match.metadata?.rounds_played) > 0
  );
}

async function getMmrHistory(name, tag) {
  const url = `https://api.henrikdev.xyz/valorant/v1/mmr-history/${REGION}/${encodeURIComponent(name)}/${encodeURIComponent(tag)}`;
  const response = await henrikFetch(url);
  if (!response.ok) return [];

  const json = await response.json();
  return Array.isArray(json.data) ? json.data : [];
}

function countFirstBloods(kills, puuid) {
  if (!Array.isArray(kills) || !puuid) return 0;

  const firstKillByRound = new Map();
  for (const kill of kills) {
    if (typeof kill.round !== 'number') continue;
    const current = firstKillByRound.get(kill.round);
    if (!current || kill.kill_time_in_round < current.kill_time_in_round) {
      firstKillByRound.set(kill.round, kill);
    }
  }

  let firstBloods = 0;
  for (const kill of firstKillByRound.values()) {
    if (kill.killer_puuid === puuid) firstBloods++;
  }
  return firstBloods;
}

function buildTopAgents(recentMatches) {
  const agents = new Map();

  for (const match of recentMatches) {
    const key = match.agentName;
    const entry = agents.get(key) || {
      agentName: key,
      games: 0,
      wins: 0,
      kills: 0,
      deaths: 0
    };

    entry.games++;
    if (match.win) entry.wins++;
    entry.kills += match.kills;
    entry.deaths += match.deaths;
    agents.set(key, entry);
  }

  return [...agents.values()]
    .sort((a, b) => b.games - a.games || b.wins - a.wins)
    .slice(0, 3)
    .map(agent => ({
      agentName: agent.agentName,
      games: agent.games,
      kd: agent.deaths > 0 ? (agent.kills / agent.deaths).toFixed(2) : String(agent.kills),
      winrate: `${Math.round((agent.wins / agent.games) * 100)}%`
    }));
}

function generateSparkline(history) {
  const points = (Array.isArray(history) ? history : [])
    .slice()
    .sort((a, b) => (Number(a.date_raw) || 0) - (Number(b.date_raw) || 0))
    .slice(-10)
    .map(item => Number(item.elo))
    .filter(Number.isFinite);

  if (points.length < 2) return null;

  const min = Math.min(...points);
  const max = Math.max(...points);
  const range = max - min || 1;

  return points.map((value, index) => {
    const x = (index / (points.length - 1)) * 75;
    const y = 28 - ((value - min) / range) * 26;
    return `${index === 0 ? 'M' : 'L'}${x.toFixed(1)},${y.toFixed(1)}`;
  }).join(' ');
}

function computeMatchStats(matches, puuid) {
  let wins = 0;
  let losses = 0;
  let draws = 0;
  let kills = 0;
  let deaths = 0;
  let assists = 0;
  let headshots = 0;
  let bodyshots = 0;
  let legshots = 0;
  let totalScore = 0;
  let totalRounds = 0;
  let totalDamage = 0;
  let firstBloods = 0;
  const recentMatches = [];

  for (const match of matches) {
    const players = match.players?.all_players || [];
    const player = players.find(p => p.puuid === puuid);
    if (!player || !player.stats) continue;

    const teamKey = String(player.team || '').toLowerCase();
    const team = match.teams?.[teamKey];
    if (!team) continue;

    const rounds = Number(match.metadata?.rounds_played) || match.rounds?.length || 0;
    if (rounds <= 0) continue;

    const isDraw = !team.has_won && team.rounds_won === team.rounds_lost;
    if (team.has_won) wins++;
    else if (isDraw) draws++;
    else losses++;

    const matchKills = Number(player.stats.kills) || 0;
    const matchDeaths = Number(player.stats.deaths) || 0;
    const matchAssists = Number(player.stats.assists) || 0;
    const matchHeadshots = Number(player.stats.headshots) || 0;
    const matchBodyshots = Number(player.stats.bodyshots) || 0;
    const matchLegshots = Number(player.stats.legshots) || 0;
    const matchScore = Number(player.stats.score) || 0;
    const matchDamage = Number(player.damage_made) || 0;
    const matchFirstBloods = countFirstBloods(match.kills, puuid);
    const matchShots = matchHeadshots + matchBodyshots + matchLegshots;

    kills += matchKills;
    deaths += matchDeaths;
    assists += matchAssists;
    headshots += matchHeadshots;
    bodyshots += matchBodyshots;
    legshots += matchLegshots;
    totalScore += matchScore;
    totalRounds += rounds;
    totalDamage += matchDamage;
    firstBloods += matchFirstBloods;

    recentMatches.push({
      win: Boolean(team.has_won),
      draw: isDraw,
      agentName: player.character || 'Agente',
      map: match.metadata?.map || 'Mapa',
      kills: matchKills,
      deaths: matchDeaths,
      assists: matchAssists,
      acs: Math.round(matchScore / rounds),
      hsPct: matchShots > 0 ? `${((matchHeadshots / matchShots) * 100).toFixed(1)}%` : null,
      adr: Number((matchDamage / rounds).toFixed(1)),
      firstBloods: matchFirstBloods,
      gameDurationMinutes: Math.round((Number(match.metadata?.game_length) || 0) / 60)
    });
  }

  const totalGames = wins + losses;
  const totalShots = headshots + bodyshots + legshots;
  const kd = deaths > 0 ? kills / deaths : (kills > 0 ? kills : null);
  const hsPct = totalShots > 0 ? (headshots / totalShots) * 100 : null;
  const acs = totalRounds > 0 ? Math.round(totalScore / totalRounds) : null;
  const adr = totalRounds > 0 ? Number((totalDamage / totalRounds).toFixed(1)) : null;
  const wr = totalGames > 0 ? Math.round((wins / totalGames) * 100) : null;

  return {
    win: wins,
    loss: losses,
    draws,
    wr: wr === null ? null : `${wr}%`,
    kd: kd === null ? null : kd.toFixed(2),
    performanceMetrics: {
      kd: kd === null ? null : Number(kd.toFixed(2)),
      headshotPct: hsPct === null ? null : `${hsPct.toFixed(1)}%`,
      acs,
      adr,
      firstBloods,
      sampleSize: recentMatches.length,
      wins,
      losses,
      draws
    },
    recentMatches,
    topAgents: buildTopAgents(recentMatches)
  };
}

async function getValorantData(player, liveStreams) {
  // Verificamos el estado en vivo desde el archivo oficial data/live.json
  const isLive = isStreamingValorant(player.twitch, liveStreams);

  try {
    const account = await getAccountData(player);
    const puuid = account?.puuid || null;
    const matchName = account?.name || player.riotName;
    const matchTag = account?.tag || player.tag;

    const currentData = await getMmrData(player, matchName, matchTag);

    const rawTierPatched = currentData.currenttierpatched || "Unranked 1";
    const tierParts = rawTierPatched.split(' ');
    const tierName = tierParts[0] || "Unranked";
    const rankTier = tierParts[1] || "1";
    const elo = currentData.ranking_in_tier || 0;

    const matches = puuid ? await getRecentMatches(matchName, matchTag) : [];
    const history = await getMmrHistory(matchName, matchTag);
    const stats = computeMatchStats(matches, puuid);

    return {
      name: player.name,
      riotName: player.riotName,
      tag: `#${player.tag}`,
      role: player.role,
      twitch: player.twitch,
      isLive: isLive, // Solo será true si en Twitch la categoría elegida es "VALORANT"
      rank: 0,
      elo: elo,
      tierName: tierName,
      rankTier: rankTier,
      absoluteRR: calculateAbsoluteRR(tierName, rankTier, elo),
      win: stats.win,
      loss: stats.loss,
      draws: stats.draws,
      wr: stats.wr,
      gain: Number.isFinite(Number(currentData.mmr_change_to_last_game))
        ? Number(currentData.mmr_change_to_last_game)
        : null,
      lossLp: null,
      kd: stats.kd,
      spark: generateSparkline(history),
      performanceMetrics: stats.performanceMetrics,
      recentMatches: stats.recentMatches,
      topAgents: stats.topAgents
    };
  } catch (err) {
    console.error(`Error con ${player.name}:`, err.message);
    return {
      name: player.name,
      riotName: player.riotName,
      tag: `#${player.tag}`,
      role: player.role,
      twitch: player.twitch,
      isLive: isLive,
      rank: 0,
      elo: 0,
      tierName: "Sin datos",
      rankTier: "",
      absoluteRR: 0,
      win: 0,
      loss: 0,
      draws: 0,
      wr: null,
      gain: null,
      lossLp: null,
      kd: null,
      spark: null,
      performanceMetrics: null,
      recentMatches: [],
      topAgents: []
    };
  }
}

// Lee el valorantData.js anterior para poder conservar datos si la API falla
function loadPreviousData() {
  try {
    const raw = fs.readFileSync(path.join('./data', 'valorantData.js'), 'utf8');
    const json = raw.replace(/^\s*const\s+gameData\s*=\s*/, '').replace(/;\s*$/, '');
    return JSON.parse(json);
  } catch (err) {
    console.warn('⚠️ No se pudo leer el valorantData.js anterior:', err.message);
    return null;
  }
}

function mergePreviousStats(player, previous) {
  if (!previous) return;

  // Si el MMR falló, recuperamos el bloque completo anterior.
  if (!player.tierName || player.tierName === 'Sin datos') {
    console.log(`🔄 Conservando datos anteriores de ${player.name}`);
    Object.assign(player, previous, {
      isLive: player.isLive,
      twitch: player.twitch,
      role: player.role
    });
    return;
  }

  // Si el MMR funcionó pero no hubo partidas, conservamos la telemetría previa.
  if ((!player.performanceMetrics || player.performanceMetrics.sampleSize === 0) && previous.performanceMetrics) {
    console.log(`🔄 Conservando telemetría anterior de ${player.name}`);
    player.win = previous.win ?? 0;
    player.loss = previous.loss ?? 0;
    player.draws = previous.draws ?? 0;
    player.wr = previous.wr ?? null;
    player.kd = previous.kd ?? null;
    player.spark = previous.spark ?? player.spark;
    player.performanceMetrics = previous.performanceMetrics;
    player.recentMatches = previous.recentMatches || [];
    player.topAgents = previous.topAgents || [];
  }
}

async function updateAll() {
  const liveStreams = getLiveTwitchStreams();
  const results = [];

  for (const p of PLAYERS) {
    const data = await getValorantData(p, liveStreams);
    results.push(data);
    await sleep(REQUEST_DELAY_MS);
  }

  const previous = loadPreviousData();
  const previousByName = new Map(
    ((previous && previous.players) || []).map(p => [p.name.toLowerCase(), p])
  );

  for (const p of results) {
    mergePreviousStats(p, previousByName.get(p.name.toLowerCase()));
  }

  const conDatos = results.filter(r => r.tierName && r.tierName !== 'Sin datos');

  // Si nadie devolvió datos, no machacamos el archivo que ya funcionaba
  if (conDatos.length === 0) {
    console.error('❌ Ningún jugador devolvió datos. No se sobrescribe data/valorantData.js');
    process.exit(1);
  }

  if (conDatos.length < results.length) {
    console.warn(`⚠️ ${results.length - conDatos.length} jugador(es) siguen sin datos.`);
  }

  // Ordenar por el RR absoluto acumulado
  results.sort((a, b) => b.absoluteRR - a.absoluteRR);
  results.forEach((p, index) => {
    p.rank = index + 1;
  });

  const outputData = {
    updatedAt: new Date().toISOString(),
    players: results
  };

  fs.mkdirSync('./data', { recursive: true });
  fs.writeFileSync(
    './data/valorantData.js',
    `const gameData = ${JSON.stringify(outputData, null, 2)};`
  );
  console.log("¡Datos de Valorant actualizados con éxito!");
}

updateAll();
