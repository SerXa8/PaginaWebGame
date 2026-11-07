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

  try {
    const response = await fetch(
      `https://api.henrikdev.xyz/valorant/v2/mmr/eu/${encodeURIComponent(player.riotName)}/${encodeURIComponent(player.tag)}`,
      { headers: { Authorization: HENRIK_KEY } }
    );

    if (response.status === 401) {
      throw new Error('401: key inválida, ausente o caducada');
    }
    if (response.status === 404) {
      throw new Error(`404: Riot ID o región incorrectos (${player.riotName}#${player.tag})`);
    }
    if (response.status === 429) {
      throw new Error('429: límite de peticiones alcanzado');
    }
    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}`);
    }
    
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

async function updateAll() {
  const liveStreams = getLiveTwitchStreams();
  const results = [];

  for (const p of PLAYERS) {
    const data = await getValorantData(p, liveStreams);
    results.push(data);
    await new Promise(r => setTimeout(r, 1200));
  }

  // Si un jugador falló, conservamos sus datos anteriores en lugar de escribir "Sin datos"
  const previous = loadPreviousData();
  const previousByName = new Map(
    ((previous && previous.players) || []).map(p => [p.name.toLowerCase(), p])
  );

  for (const p of results) {
    if (!p.tierName || p.tierName === 'Sin datos') {
      const prev = previousByName.get(p.name.toLowerCase());
      if (prev && prev.tierName && prev.tierName !== 'Sin datos') {
        console.log(`🔄 Conservando datos anteriores de ${p.name}`);
        Object.assign(p, prev, {
          isLive: p.isLive,
          twitch: p.twitch,
          role: p.role
        });
      }
    }
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
