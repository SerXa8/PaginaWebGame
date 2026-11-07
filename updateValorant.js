const fs = require('fs');
const path = require('path');

// Clave de la API de HenrikDev (se inyecta como secret en GitHub Actions)
const HENRIK_KEY = process.env.VALORANT_API_KEY_HENRY;

if (!HENRIK_KEY) {
  console.error('❌ Falta la variable de entorno VALORANT_API_KEY_HENRY');
  console.error('   En local: $env:VALORANT_API_KEY_HENRY = "HDEV-..."');
  process.exit(1);
}

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
];

// Mapeo de rangos de Valorant a RR Base acumulados
const TIER_BASE_RR = {
  'IRON': 0, 'BRONZE': 300, 'SILVER': 600, 'GOLD': 900,
  'PLATINUM': 1200, 'DIAMOND': 1500, 'ASCENDANT': 1800,
  'IMMORTAL': 2100, 'RADIANT': 2400
};

const DIVISION_RR = { '1': 0, '2': 100, '3': 200 };

/**
 * Llama a la API de HenrikDev añadiendo la key y reintentando si hay rate limit.
 */
async function fetchHenrik(url, intentos = 3) {
  for (let i = 1; i <= intentos; i++) {
    const response = await fetch(url, {
      headers: { Authorization: HENRIK_KEY }
    });

    if (response.status === 429 && i < intentos) {
      const espera = Number(response.headers.get('retry-after')) || 5;
      console.warn(`⏳ Rate limit (429). Reintentando en ${espera}s...`);
      await new Promise(r => setTimeout(r, espera * 1000));
      continue;
    }

    if (response.status === 401) throw new Error('401: key inválida o ausente');
    if (response.status === 403) throw new Error('403: key sin permisos');
    if (response.status === 404) throw new Error('404: Riot ID o región incorrectos');
    if (response.status === 429) throw new Error('429: límite de peticiones alcanzado');
    if (!response.ok) throw new Error(`HTTP ${response.status}`);

    return response;
  }
}

/**
 * Lee el último valorantData.js generado para no perder datos buenos
 * cuando la API falla para un jugador concreto.
 */
function cargarDatosPrevios() {
  try {
    const raw = fs.readFileSync('./data/valorantData.js', 'utf8');
    const json = raw.slice(raw.indexOf('{'), raw.lastIndexOf('}') + 1);
    return JSON.parse(json).players || [];
  } catch {
    return [];
  }
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

async function getValorantData(player, liveStreams) {
  // Verificamos el estado en vivo desde el archivo oficial data/live.json
  const isLive = isStreamingValorant(player.twitch, liveStreams);

  // Región de la plataforma: eu, na, latam, br, ap, kr
  const region = (player.region || 'eu').toLowerCase();

  try {
    const response = await fetchHenrik(
      `https://api.henrikdev.xyz/valorant/v2/mmr/${region}/${encodeURIComponent(player.riotName)}/${encodeURIComponent(player.tag)}`
    );

    const res = await response.json();
    const currentData = res.data?.current_data || {};

    const rawTierPatched = currentData.currenttierpatched || "Unranked 1";
    const tierParts = rawTierPatched.split(' ');
    const tierName = tierParts[0] || "Unranked";
    const rankTier = tierParts[1] || "1";

    const win = currentData.wins || 0;
    const loss = currentData.losses || 0;
    const totalGames = win + loss;
    const wr = totalGames > 0 ? `${Math.round((win / totalGames) * 100)}%` : '0%';
    const elo = currentData.ranking_in_tier || 0;

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
      win: win,
      loss: loss,
      wr: wr,
      gain: currentData.mmr_change_to_last_game || 0,
      lossLp: 18,
      kd: "1.15",
      spark: "M0,15 L15,10 L30,20 L45,5 L60,12 L75,2"
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
      wr: "0%",
      gain: 0,
      lossLp: 0,
      kd: "0.0",
      spark: "M0,15 L75,15"
    };
  }
}

async function updateAll() {
  const liveStreams = getLiveTwitchStreams();
  const results = [];

  for (const p of PLAYERS) {
    const data = await getValorantData(p, liveStreams);
    results.push(data);
    await new Promise(r => setTimeout(r, 1200));
  }

  // Si un jugador falla, se conserva su último dato bueno en lugar de ponerlo a cero
  const previos = cargarDatosPrevios();
  const mapaPrevios = new Map(previos.map(p => [p.name.toLowerCase(), p]));

  const finales = results.map(r => {
    if (r.tierName && r.tierName !== 'Sin datos') return r;

    const previo = mapaPrevios.get(r.name.toLowerCase());
    if (previo && previo.tierName && previo.tierName !== 'Sin datos') {
      console.warn(`⚠️ ${r.name} sin datos: se conserva el último dato bueno.`);
      return { ...previo, isLive: r.isLive };
    }

    return r;
  });

  const conDatos = finales.filter(r => r.tierName && r.tierName !== 'Sin datos');

  if (conDatos.length === 0) {
    console.error('❌ Ningún jugador devolvió datos. No se sobrescribe data/valorantData.js');
    process.exit(1);
  }

  // Ordenar por el RR absoluto acumulado
  finales.sort((a, b) => b.absoluteRR - a.absoluteRR);
  finales.forEach((p, index) => {
    p.rank = index + 1;
  });

  const outputData = {
    updatedAt: new Date().toISOString(),
    players: finales
  };

  fs.mkdirSync('./data', { recursive: true });
  fs.writeFileSync(
    './data/valorantData.js', 
    `const gameData = ${JSON.stringify(outputData, null, 2)};`
  );
  console.log("¡Datos de Valorant actualizados con éxito!");
}

updateAll();
