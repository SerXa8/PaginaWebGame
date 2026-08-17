const fs = require('fs');
const path = require('path');

const API_KEY = process.env.RIOT_API_KEY;

const STREAMERS = [
  { name: "JavierLoL", riotName: "eMonkeyz Run", tag: "514", role: "mid", twitch: "javierrlol" },
  { name: "SerXa8", riotName: "SerXa08", tag: "1197", role: "top", twitch: "s3rxa8" },
  { name: "mamielizabeth", riotName: "mamielizabeth", tag: "fdm", role: "mid", twitch: "" },
  { name: "Maiiser", riotName: "Jabon de Hamster", tag: "WIWI", role: "top", twitch: "maiiser" }
];

const STATE_FILE = path.join('./data', 'lolState.json');

// Cargar estado anterior (si existe)
function loadPreviousState() {
  try {
    if (fs.existsSync(STATE_FILE)) {
      const raw = fs.readFileSync(STATE_FILE, 'utf8');
      return JSON.parse(raw);
    }
  } catch (err) {
    console.error('⚠️ Error al leer lolState.json:', err.message);
  }
  return {};
}

// Guardar el estado actual
function saveCurrentState(playersData) {
  try {
    const state = {};
    playersData.forEach(p => {
      state[p.name] = {
        elo: p.elo,
        tierName: p.tierName,
        rankTier: p.rankTier,
        gain: p.gain,
        lossLp: p.lossLp,
        timestamp: Date.now()
      };
    });
    fs.writeFileSync(STATE_FILE, JSON.stringify(state, null, 2), 'utf8');
  } catch (err) {
    console.error('⚠️ Error al guardar lolState.json:', err.message);
  }
}

async function getPlayerData(player, previousState) {
  try {
    // 1. Obtener PUUID con Riot ID + Tag
    const accountUrl = `https://europe.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${encodeURIComponent(player.riotName)}/${encodeURIComponent(player.tag)}?api_key=${API_KEY}`;
    const accountRes = await fetch(accountUrl);
    if (!accountRes.ok) throw new Error(`Error cuenta (${accountRes.status}): ${accountRes.statusText}`);
    const accountData = await accountRes.json();

    // 2. Obtener ligas usando /by-puuid/
    const leagueUrl = `https://euw1.api.riotgames.com/lol/league/v4/entries/by-puuid/${accountData.puuid}?api_key=${API_KEY}`;
    const leagueRes = await fetch(leagueUrl);
    if (!leagueRes.ok) throw new Error(`Error liga (${leagueRes.status}): ${leagueRes.statusText}`);
    const leagueData = await leagueRes.json();

    const soloQ = leagueData.find(q => q.queueType === 'RANKED_SOLO_5x5') || {};
    const wins = soloQ.wins || 0;
    const losses = soloQ.losses || 0;
    const totalGames = wins + losses;
    const winrate = totalGames > 0 ? ((wins / totalGames) * 100).toFixed(0) + '%' : '0%';

    const currentElo = soloQ.leaguePoints || 0;
    const prev = previousState[player.name];

    let gain = 0;
    let lossLp = 0;

    // Calcular la ganancia/pérdida real de LP respecto al estado anterior
    if (prev && typeof prev.elo === 'number') {
      const diff = currentElo - prev.elo;
      if (diff > 0) {
        gain = diff;
        lossLp = 0;
      } else if (diff < 0) {
        gain = 0;
        lossLp = Math.abs(diff);
      } else {
        // Si no varió en esta consulta, mantenemos los últimos registrados
        gain = prev.gain || 0;
        lossLp = prev.lossLp || 0;
      }
    }

    return {
      name: player.name,
      tag: `#${player.tag}`,
      role: player.role,
      elo: currentElo,
      tierName: soloQ.tier || "UNRANKED",
      rankTier: soloQ.rank || "",
      win: wins,
      loss: losses,
      wr: winrate,
      gain: gain,
      lossLp: lossLp,
      spark: "M 0 25 L 15 18 L 30 22 L 45 10 L 60 14 L 75 2",
      twitch: player.twitch
    };
  } catch (error) {
    console.error(`Error al procesar a ${player.name}:`, error.message);
    return null;
  }
}

async function main() {
  console.log("Actualizando datos desde Riot API en GitHub Actions...");
  
  // Asegurar directorio
  fs.mkdirSync('./data', { recursive: true });

  const previousState = loadPreviousState();
  const playersData = [];

  for (const player of STREAMERS) {
    const data = await getPlayerData(player, previousState);
    if (data) playersData.push(data);
    
    // Pausa de seguridad para respetar el límite de llamadas a la API de Riot
    await new Promise(r => setTimeout(r, 1200));
  }

  // Ordenar de mayor a menor LP/elo
  playersData.sort((a, b) => b.elo - a.elo);
  playersData.forEach((p, index) => p.rank = index + 1);

  // Guardar estado para la siguiente ejecución
  saveCurrentState(playersData);

  // Guardar resultado final para el frontend
  const fileContent = `const gameData = ${JSON.stringify({ players: playersData }, null, 2)};`;
  fs.writeFileSync('./data/lolData.js', fileContent);
  console.log("¡data/lolData.js y data/lolState.json actualizados correctamente!");
}

main();
