const fs = require('fs');

// Lista de jugadores de Valorant
const PLAYERS = [
  { 
    name: "SerXa8", 
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
  }
];

async function getValorantData(player) {
  try {
    // Consulta a la API de HenrikDev para obtener Rango, RR y Victorias/Derrotas
    const response = await fetch(
      `https://api.henrikdev.xyz/valorant/v2/mmr/eu/${encodeURIComponent(player.riotName)}/${encodeURIComponent(player.tag)}`
    );

    if (!response.ok) throw new Error(`HTTP error ${response.status}`);
    
    const res = await response.json();
    const currentData = res.data?.current_data || {};

    const win = currentData.wins || 0;
    const loss = currentData.losses || 0;
    const totalGames = win + loss;
    const wr = totalGames > 0 ? `${Math.round((win / totalGames) * 100)}%` : '0%';

    return {
      name: player.name,
      riotName: player.riotName,
      tag: `#${player.tag}`,
      role: player.role,
      twitch: player.twitch,
      rank: 0, // Se asigna al ordenar
      elo: currentData.ranking_in_tier || 0, // RR actuales
      tierName: currentData.currenttierpatched || "Unranked",
      win: win,
      loss: loss,
      wr: wr,
      gain: currentData.mmr_change_to_last_game || 0,
      lossLp: 18,
      kd: "1.15",
      spark: "M0,15 L15,10 L30,20 L45,5 L60,12 L75,2" // SVG de racha genérico
    };
  } catch (err) {
    console.error(`Error con ${player.name}:`, err.message);
    return {
      name: player.name,
      riotName: player.riotName,
      tag: `#${player.tag}`,
      role: player.role,
      twitch: player.twitch,
      rank: 0,
      elo: 0,
      tierName: "Sin datos",
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
  const results = [];
  for (const p of PLAYERS) {
    const data = await getValorantData(p);
    results.push(data);
    // Pausa para no saturar el rate-limit de la API
    await new Promise(r => setTimeout(r, 1200));
  }

  // Ordenar por RR de mayor a menor y asignar ranking
  results.sort((a, b) => b.elo - a.elo);
  results.forEach((p, index) => {
    p.rank = index + 1;
  });

  const outputData = {
    updatedAt: new Date().toISOString(),
    players: results
  };

  // Guardar en data/valorantData.js para el frontend
  fs.mkdirSync('./data', { recursive: true });
  fs.writeFileSync(
    './data/valorantData.js', 
    `const gameData = ${JSON.stringify(outputData, null, 2)};`
  );
  console.log("¡Datos de Valorant actualizados con éxito!");
}

updateAll();
