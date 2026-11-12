const fs = require('fs');
const path = require('path');

const API_KEY = process.env.RIOT_API_KEY;

// Número de partidas para las que se descarga el timeline (CSD@10 / GD@10).
// Con dev key conviene bajarlo (p. ej. LOL_TIMELINE_MATCHES=5) por rate limit.
const TIMELINE_MATCH_LIMIT = Math.max(0, Math.min(10, Number(process.env.LOL_TIMELINE_MATCHES) || 10));
const sleep = (ms) => new Promise(r => setTimeout(r, ms));

// Riot ID y tag deben coincidir con la cuenta actual en el juego.
const STREAMERS = [
  { name: "SerXa08", riotName: "SerXa08", tag: "1197", role: "top", twitch: "s3rxa8" },
  { name: "mamielizabeth", riotName: "mamielizabeth", tag: "fdm", role: "mid", twitch: "" },
  { name: "Send0o", riotName: "Madres Enjoyer", tag: "MILK", role: "top", twitch: "send0o" },
  { name: "AkariNeko", riotName: "AkariNeko", tag: "1935", role: "support", twitch: "" }
];

const STATE_FILE = path.join('./data', 'lolState.json');
let CHAMPION_MAP = {};

async function loadChampionMap() {
  try {
    const versionsRes = await fetch('https://ddragon.leagueoflegends.com/api/versions.json');
    const versions = await versionsRes.json();
    const latestVersion = versions[0] || '14.1.1';

    const champRes = await fetch(`https://ddragon.leagueoflegends.com/cdn/${latestVersion}/data/en_US/champion.json`);
    const champData = await champRes.json();

    Object.values(champData.data).forEach(c => {
      CHAMPION_MAP[c.key] = c.name;
    });
    console.log(`✅ Cargadas ${Object.keys(CHAMPION_MAP).length} definiciones de campeones.`);
  } catch (err) {
    console.error('⚠️️ Error al cargar DataDragon:', err.message);
  }
}

async function checkStreamingLol(twitchUser) {
  if (!twitchUser) return false;
  try {
    const res = await fetch(`https://decapi.me/twitch/game/${encodeURIComponent(twitchUser)}`);
    if (!res.ok) return false;
    
    const currentGame = (await res.text()).trim();
    // Twitch registra LoL como "League of Legends"
    return currentGame.toLowerCase() === 'league of legends';
  } catch (err) {
    return false;
  }
}

function getAbsoluteLp(tier, rank, lp) {
  const tiers = {
    'IRON': 0, 'BRONZE': 400, 'SILVER': 800, 'GOLD': 1200,
    'PLATINUM': 1600, 'EMERALD': 2000, 'DIAMOND': 2400,
    'MASTER': 2800, 'GRANDMASTER': 2800, 'CHALLENGER': 2800
  };
  const ranks = { 'IV': 0, 'III': 100, 'II': 200, 'I': 300 };

  return (tiers[tier?.toUpperCase()] || 0) + (ranks[rank?.toUpperCase()] || 0) + (lp || 0);
}

function estimateLpByWinrate(wins, losses) {
  const totalGames = wins + losses;
  if (totalGames === 0) return { gain: 20, loss: 20 };

  const wrRatio = wins / totalGames;
  const baseGain = 20;
  const baseLoss = 20;

  if (wrRatio >= 0.50) {
    const boost = Math.round((wrRatio - 0.50) * 35);
    return {
      gain: baseGain + boost,
      loss: Math.max(13, baseLoss - Math.round(boost * 0.7))
    };
  } else {
    const penalty = Math.round((0.50 - wrRatio) * 35);
    return {
      gain: Math.max(13, baseGain - Math.round(penalty * 0.7)),
      loss: baseLoss + penalty
    };
  }
}

function loadPreviousState() {
  try {
    if (fs.existsSync(STATE_FILE)) {
      return JSON.parse(fs.readFileSync(STATE_FILE, 'utf8'));
    }
  } catch (err) {
    console.error('⚠️ Error al leer lolState.json:', err.message);
  }
  return {};
}

function saveCurrentState(playersData) {
  try {
    const state = {};
    playersData.forEach(p => {
      state[p.name] = {
        ...p, // Guardamos el objeto completo como respaldo
        timestamp: Date.now()
      };
    });
    fs.writeFileSync(STATE_FILE, JSON.stringify(state, null, 2), 'utf8');
  } catch (err) {
    console.error('⚠️ Error al guardar lolState.json:', err.message);
  }
}

function generateSparkline(history) {
  if (!history || history.length === 0) return "M 0 15 L 75 15";
  let y = 15;
  let pathStr = `M 0 ${y}`;
  const stepX = 75 / Math.max(history.length, 1);
  history.forEach((match, index) => {
    const x = (index + 1) * stepX;
    y = match.win ? Math.max(2, y - 3) : Math.min(28, y + 3);
    pathStr += ` L ${x.toFixed(1)} ${y}`;
  });
  return pathStr;
}

async function getActiveGame(puuid) {
  try {
    const spectatorUrl = `https://euw1.api.riotgames.com/lol/spectator/v5/active-games/by-summoner/${puuid}?api_key=${API_KEY}`;
    const res = await fetch(spectatorUrl);
    if (res.status === 404 || !res.ok) return { inGame: false, champion: null };

    const gameData = await res.json();
    const participant = gameData.participants?.find(p => p.puuid === puuid);
    if (participant) {
      const champName = CHAMPION_MAP[participant.championId] || "En Partida";
      return { inGame: true, champion: champName };
    }
    return { inGame: false, champion: null };
  } catch (e) {
    return { inGame: false, champion: null };
  }
}

async function getTopMasteries(puuid) {
  try {
    const masteryUrl = `https://euw1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-puuid/${puuid}/top?count=3&api_key=${API_KEY}`;
    const res = await fetch(masteryUrl);
    if (!res.ok) return [];
    const masteries = await res.json();

    return masteries.map(m => ({
      championName: CHAMPION_MAP[m.championId] || `Champ ${m.championId}`,
      championLevel: m.championLevel,
      championPoints: m.championPoints
    }));
  } catch (e) {
    return [];
  }
}

/**
 * fetch con reintentos para 429 (rate limit) y errores 5xx de Riot.
 */
async function riotFetch(url, { retries = 3, baseDelay = 1500 } = {}) {
  for (let attempt = 0; attempt <= retries; attempt++) {
    const res = await fetch(url);
    if (res.status === 429) {
      const retryAfter = Number(res.headers.get('retry-after')) || 2;
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

/**
 * Extrae CSD@10 y GD@10 comparando al jugador con su rival de línea.
 */
async function getTimelineStats(matchId, playerId, opponentId) {
  try {
    const res = await riotFetch(`https://europe.api.riotgames.com/lol/match/v5/matches/${matchId}/timeline?api_key=${API_KEY}`);
    if (!res.ok) return { csd10: null, gd10: null };

    const timeline = await res.json();
    const frames = timeline.info?.frames || [];

    // El frame 10 equivale al minuto 10 (timestamp 600000).
    if (frames.length <= 10) return { csd10: null, gd10: null };

    const frame = frames[10];
    const playerFrame = frame.participantFrames?.[String(playerId)];
    const opponentFrame = opponentId != null
      ? frame.participantFrames?.[String(opponentId)]
      : null;

    if (!playerFrame) return { csd10: null, gd10: null };

    const playerCs = (playerFrame.minionsKilled || 0) + (playerFrame.jungleMinionsKilled || 0);
    const opponentCs = opponentFrame
      ? (opponentFrame.minionsKilled || 0) + (opponentFrame.jungleMinionsKilled || 0)
      : null;

    return {
      csd10: opponentFrame ? playerCs - opponentCs : null,
      gd10: opponentFrame ? (playerFrame.totalGold || 0) - (opponentFrame.totalGold || 0) : null
    };
  } catch (err) {
    console.warn(`⚠️ No se pudo leer el timeline de ${matchId}: ${err.message}`);
    return { csd10: null, gd10: null };
  }
}

async function getDetailedMatches(puuid) {
  try {
    // queue=420 = Ranked Solo/Duo (evita mezclar Flex con SoloQ)
    const matchesUrl = `https://europe.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?queue=420&start=0&count=10&api_key=${API_KEY}`;
    const res = await riotFetch(matchesUrl);
    if (!res.ok) return [];
    const matchIds = await res.json();

    const matches = [];
    for (const matchId of matchIds) {
      const detailUrl = `https://europe.api.riotgames.com/lol/match/v5/matches/${matchId}?api_key=${API_KEY}`;
      const detailRes = await riotFetch(detailUrl);
      if (detailRes.ok) {
        const detail = await detailRes.json();
        const p = detail.info?.participants?.find(part => part.puuid === puuid);
        if (p) {
          const durationMin = Math.max((detail.info.gameDuration || 0) / 60, 1);
          const sameTeam = detail.info.participants.filter(part => part.teamId === p.teamId);
          const teamKills = sameTeam.reduce((acc, curr) => acc + curr.kills, 0);
          const teamDamage = sameTeam.reduce((acc, curr) => acc + curr.totalDamageDealtToChampions, 0);
          const teamGold = sameTeam.reduce((acc, curr) => acc + curr.goldEarned, 0);

          const totalCs = (p.totalMinionsKilled || 0) + (p.neutralMinionsKilled || 0);
          const kp = teamKills > 0 ? (((p.kills + p.assists) / teamKills) * 100).toFixed(1) : "0.0";
          const dmgShare = teamDamage > 0 ? ((p.totalDamageDealtToChampions / teamDamage) * 100).toFixed(1) : "0.0";
          const goldShare = teamGold > 0 ? ((p.goldEarned / teamGold) * 100).toFixed(1) : "0.0";
          const visionPerMin = Number(((p.visionScore || 0) / durationMin).toFixed(2));

          // Rival de línea: mismo teamPosition en el equipo contrario.
          const laneOpponent = detail.info.participants.find(part =>
            part.teamId !== p.teamId &&
            p.teamPosition && part.teamPosition === p.teamPosition
          );

          let csd10 = null;
          let gd10 = null;
          if (matches.length < TIMELINE_MATCH_LIMIT) {
            const timelineStats = await getTimelineStats(
              matchId,
              p.participantId,
              laneOpponent?.participantId
            );
            csd10 = timelineStats.csd10;
            gd10 = timelineStats.gd10;
          }

          matches.push({
            win: p.win,
            championName: p.championName || "Desconocido",
            laneOpponent: laneOpponent?.championName || null,
            kills: p.kills,
            deaths: p.deaths,
            assists: p.assists,
            kdaRatio: p.deaths === 0 ? (p.kills + p.assists).toFixed(2) : ((p.kills + p.assists) / p.deaths).toFixed(2),
            cs: totalCs,
            cspm: (totalCs / durationMin).toFixed(1),
            csd10,
            gd10,
            visionScore: p.visionScore || 0,
            visionPerMin,
            dpm: Math.round(p.totalDamageDealtToChampions / durationMin),
            killParticipation: `${kp}%`,
            damageShare: `${dmgShare}%`,
            goldShare: `${goldShare}%`,
            gameDurationMinutes: Math.round(durationMin)
          });
        }
      }
      // 1.2s entre partidas para respetar el rate limit (detalle + timeline)
      await sleep(1200);
    }
    return matches.reverse();
  } catch (e) {
    console.error(`⚠️ Error al leer partidas: ${e.message}`);
    return [];
  }
}

function calculatePlayerPerformance(matches) {
  if (!matches || matches.length === 0) return null;
  const total = matches.length;

  const avgOf = (list, getter) => list.length
    ? list.reduce((acc, item) => acc + getter(item), 0) / list.length
    : null;

  const withCsd = matches.filter(m => typeof m.csd10 === 'number');
  const withGd = matches.filter(m => typeof m.gd10 === 'number');

  const avgDpm = Math.round(avgOf(matches, m => m.dpm) || 0);
  const avgCspm = (avgOf(matches, m => parseFloat(m.cspm)) || 0).toFixed(1);
  const avgKp = (avgOf(matches, m => parseFloat(m.killParticipation)) || 0).toFixed(1);
  const kills = matches.reduce((acc, m) => acc + m.kills, 0);
  const deaths = matches.reduce((acc, m) => acc + m.deaths, 0);
  const assists = matches.reduce((acc, m) => acc + m.assists, 0);
  const avgKda = deaths === 0 ? (kills + assists).toFixed(2) : ((kills + assists) / deaths).toFixed(2);

  const avgCsd10 = avgOf(withCsd, m => m.csd10);
  const avgGd10 = avgOf(withGd, m => m.gd10);
  const avgVisionPerMin = avgOf(matches, m => m.visionPerMin);
  const avgGoldShare = avgOf(matches, m => parseFloat(m.goldShare));
  const avgDamageShare = avgOf(matches, m => parseFloat(m.damageShare));
  const avgDeaths = avgOf(matches, m => m.deaths);

  return {
    avgDpm,
    avgCspm,
    avgKp: `${avgKp}%`,
    avgKda,
    avgCsd10: avgCsd10 === null ? null : Number(avgCsd10.toFixed(1)),
    avgGd10: avgGd10 === null ? null : Math.round(avgGd10),
    avgVisionPerMin: avgVisionPerMin === null ? null : Number(avgVisionPerMin.toFixed(2)),
    avgGoldShare: avgGoldShare === null ? null : Number(avgGoldShare.toFixed(1)),
    avgDamageShare: avgDamageShare === null ? null : Number(avgDamageShare.toFixed(1)),
    avgDeaths: avgDeaths === null ? null : Number(avgDeaths.toFixed(1)),
    csdSample: withCsd.length,
    totalAnalyzedGames: total
  };
}

async function getPlayerData(player, previousState) {
  // Comprobamos en Twitch si está streameando League of Legends en este momento
  const isLive = await checkStreamingLol(player.twitch);

  try {
    const accountUrl = `https://europe.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${encodeURIComponent(player.riotName)}/${encodeURIComponent(player.tag)}?api_key=${API_KEY}`;
    const accountRes = await fetch(accountUrl);
    if (!accountRes.ok) throw new Error(`Error cuenta (${accountRes.status})`);
    const accountData = await accountRes.json();

    const activeGame = await getActiveGame(accountData.puuid);

    const leagueUrl = `https://euw1.api.riotgames.com/lol/league/v4/entries/by-puuid/${accountData.puuid}?api_key=${API_KEY}`;
    const leagueRes = await fetch(leagueUrl);
    if (!leagueRes.ok) throw new Error(`Error liga (${leagueRes.status})`);
    const leagueData = await leagueRes.json();

    const soloQ = leagueData.find(q => q.queueType === 'RANKED_SOLO_5x5') || {};
    const wins = soloQ.wins || 0;
    const losses = soloQ.losses || 0;
    const totalGames = wins + losses;
    const winrate = totalGames > 0 ? ((wins / totalGames) * 100).toFixed(0) + '%' : '0%';

    const currentElo = soloQ.leaguePoints || 0;
    const currentAbsoluteElo = getAbsoluteLp(soloQ.tier, soloQ.rank, currentElo);
    const prev = previousState[player.name] || {};

    let totalGainLp = prev.totalGainLp || 0;
    let winEvents = prev.winEvents || 0;
    let totalLossLp = prev.totalLossLp || 0;
    let lossEvents = prev.lossEvents || 0;

    const fallbackLp = estimateLpByWinrate(wins, losses);
    const currentLossEstimate = prev.lossLp || fallbackLp.loss;

    if (typeof prev.absoluteElo === 'number' && (prev.win !== wins || prev.loss !== losses)) {
      const winsDiff = wins - (prev.win || wins);
      const lossesDiff = losses - (prev.loss || losses);
      const totalMatchesDiff = winsDiff + lossesDiff;

      if (totalMatchesDiff > 0) {
        const eloDelta = currentAbsoluteElo - prev.absoluteElo;

        if (winsDiff > 0 && lossesDiff === 0) {
          totalGainLp += eloDelta;
          winEvents += winsDiff;
        } else if (lossesDiff > 0 && winsDiff === 0) {
          totalLossLp += Math.abs(eloDelta);
          lossEvents += lossesDiff;
        } else if (winsDiff > 0 && lossesDiff > 0) {
          const estimatedLossesTotal = lossesDiff * currentLossEstimate;
          const estimatedWinGain = eloDelta + estimatedLossesTotal;
          const calculatedGain = Math.max(10, Math.round(estimatedWinGain / winsDiff));
          
          totalGainLp += calculatedGain * winsDiff;
          winEvents += winsDiff;
          totalLossLp += estimatedLossesTotal;
          lossEvents += lossesDiff;
        }
      }
    }

    const avgGain = winEvents > 0 ? Math.round(totalGainLp / winEvents) : fallbackLp.gain;
    const avgLoss = lossEvents > 0 ? Math.round(totalLossLp / lossEvents) : fallbackLp.loss;

    const topMasteries = await getTopMasteries(accountData.puuid);
    const detailedMatches = await getDetailedMatches(accountData.puuid);
    const performanceSummary = calculatePlayerPerformance(detailedMatches);
    const sparkPath = generateSparkline(detailedMatches);

    return {
      puuid: accountData.puuid,
      name: player.name,
      riotName: player.riotName,
      tag: `#${player.tag}`,
      role: player.role,
      isLive: isLive, // <-- Campo que indica si está streameando LoL
      elo: currentElo,
      absoluteElo: currentAbsoluteElo,
      tierName: soloQ.tier || "UNRANKED",
      rankTier: soloQ.rank || "",
      win: wins,
      loss: losses,
      wr: winrate,
      gain: avgGain,
      lossLp: avgLoss,
      totalGainLp: totalGainLp,
      winEvents: winEvents,
      totalLossLp: totalLossLp,
      lossEvents: lossEvents,
      spark: sparkPath,
      twitch: player.twitch,
      inGame: activeGame.inGame,
      champion: activeGame.champion,
      topMasteries: topMasteries,
      performanceMetrics: performanceSummary,
      recentMatches: detailedMatches
    };
  } catch (error) {
    console.error(`⚠️ Error al procesar a ${player.name}:`, error.message);
    
    // Si falla la API pero tenemos datos anteriores guardados en lolState.json, los reutiliza
    if (previousState[player.name]) {
      console.log(`🔄 Usando datos guardados en caché para ${player.name}`);
      return {
        ...previousState[player.name],
        riotName: player.riotName,
        tag: `#${player.tag}`,
        isLive: isLive // Mantiene el estado de Twitch fresco incluso usando caché de Riot
      };
    }
    
    return null;
  }
}

async function main() {
  console.log("Iniciando actualización automática desde Riot API...");
  fs.mkdirSync('./data', { recursive: true });

  await loadChampionMap();
  const previousState = loadPreviousState();
  const playersData = [];

  for (const player of STREAMERS) {
    console.log(`Consultando datos de ${player.name} (${player.riotName}#${player.tag})...`);
    const data = await getPlayerData(player, previousState);
    if (data) playersData.push(data);
    await new Promise(r => setTimeout(r, 1000));
  }

  if (playersData.length === 0) {
    console.error("❌ No se pudieron obtener datos de ningún jugador.");
    process.exit(1);
  }

  playersData.sort((a, b) => b.absoluteElo - a.absoluteElo);
  playersData.forEach((p, index) => p.rank = index + 1);

  saveCurrentState(playersData);

  const fileContent = `const gameData = ${JSON.stringify({ players: playersData, lastUpdated: new Date().toISOString() }, null, 2)};`;
  fs.writeFileSync('./data/lolData.js', fileContent);
  console.log("¡data/lolData.js actualizado con éxito!");
}

main();
