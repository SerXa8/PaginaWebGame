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
        elo: p.elo,
        win: p.win,
        loss: p.loss,
        tierName: p.tierName,
        rankTier: p.rankTier,
        gain: p.gain,
        lossLp: p.lossLp,
        totalGainLp: p.totalGainLp || 0,
        winEvents: p.winEvents || 0,
        totalLossLp: p.totalLossLp || 0,
        lossEvents: p.lossEvents || 0,
        timestamp: Date.now()
      };
    });
    fs.writeFileSync(STATE_FILE, JSON.stringify(state, null, 2), 'utf8');
  } catch (err) {
    console.error('⚠️ Error al guardar lolState.json:', err.message);
  }
}

function generateSparkline(history) {
  if (!history || history.length === 0) {
    return "M 0 15 L 75 15";
  }

  let y = 15;
  let pathStr = `M 0 ${y}`;
  const stepX = 75 / Math.max(history.length, 1);

  history.forEach((isWin, index) => {
    const x = (index + 1) * stepX;
    y = isWin ? Math.max(2, y - 3) : Math.min(28, y + 3);
    pathStr += ` L ${x.toFixed(1)} ${y}`;
  });

  return pathStr;
}

async function getRecentMatches(puuid) {
  try {
    const matchesUrl = `https://europe.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?type=ranked&start=0&count=10&api_key=${API_KEY}`;
    const res = await fetch(matchesUrl);
    if (!res.ok) return [];
    const matchIds = await res.json();

    const history = [];
    for (const matchId of matchIds) {
      const detailUrl = `https://europe.api.riotgames.com/lol/match/v5/matches/${matchId}?api_key=${API_KEY}`;
      const detailRes = await fetch(detailUrl);
      if (detailRes.ok) {
        const detail = await detailRes.json();
        const participant = detail.info?.participants?.find(p => p.puuid === puuid);
        if (participant) {
          history.push(participant.win);
        }
      }
      await new Promise(r => setTimeout(r, 300));
    }
    return history.reverse();
  } catch (e) {
    console.error("Error al obtener partidas recientes:", e.message);
    return [];
  }
}

async function getPlayerData(player, previousState) {
  try {
    // 1. Datos de cuenta
    const accountUrl = `https://europe.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${encodeURIComponent(player.riotName)}/${encodeURIComponent(player.tag)}?api_key=${API_KEY}`;
    const accountRes = await fetch(accountUrl);
    if (!accountRes.ok) throw new Error(`Error cuenta (${accountRes.status}): ${accountRes.statusText}`);
    const accountData = await accountRes.json();

    // 2. Liga y clasificatorias
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
    const prev = previousState[player.name] || {};

    // Cargar historial de acumulados o inicializar
    let totalGainLp = prev.totalGainLp || 0;
    let winEvents = prev.winEvents || 0;
    let totalLossLp = prev.totalLossLp || 0;
    let lossEvents = prev.lossEvents || 0;

    // Calcular variaciones respecto a la última ejecución
    if (typeof prev.elo === 'number') {
      const winsDiff = wins - (prev.win || wins);
      const lossesDiff = losses - (prev.loss || losses);
      const eloDiff = currentElo - prev.elo;

      // Si ha ganado partidas y ha sumado LP
      if (winsDiff > 0 && eloDiff > 0) {
        totalGainLp += eloDiff;
        winEvents += winsDiff;
      }

      // Si ha perdido partidas y ha bajado LP
      if (lossesDiff > 0 && eloDiff < 0) {
        totalLossLp += Math.abs(eloDiff);
        lossEvents += lossesDiff;
      }
    }

    // Calcular medias adaptativas (o usar defaults si no hay partidas registradas aún)
    const avgGain = winEvents > 0 ? Math.round(totalGainLp / winEvents) : (prev.gain || 20);
    const avgLoss = lossEvents > 0 ? Math.round(totalLossLp / lossEvents) : (prev.lossLp || 19);

    // 3. Racha de las últimas 10 partidas
    const recentHistory = await getRecentMatches(accountData.puuid);
    const sparkPath = generateSparkline(recentHistory);

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
      gain: avgGain,               // Media adaptativa de ganancia de LP
      lossLp: avgLoss,             // Media adaptativa de pérdida de LP
      totalGainLp: totalGainLp,
      winEvents: winEvents,
      totalLossLp: totalLossLp,
      lossEvents: lossEvents,
      spark: sparkPath,
      twitch: player.twitch
    };
  } catch (error) {
    console.error(`Error al procesar a ${player.name}:`, error.message);
    return null;
  }
}

async function main() {
  console.log("Actualizando datos desde Riot API con cálculo de media de LP...");
  fs.mkdirSync('./data', { recursive: true });

  const previousState = loadPreviousState();
  const playersData = [];

  for (const player of STREAMERS) {
    const data = await getPlayerData(player, previousState);
    if (data) playersData.push(data);
    await new Promise(r => setTimeout(r, 1200));
  }

  if (playersData.length === 0) {
    console.error("❌ No se pudieron obtener datos. Revisa la API KEY.");
    process.exit(1);
  }

  playersData.sort((a, b) => b.elo - a.elo);
  playersData.forEach((p, index) => p.rank = index + 1);

  saveCurrentState(playersData);

  const fileContent = `const gameData = ${JSON.stringify({ players: playersData }, null, 2)};`;
  fs.writeFileSync('./data/lolData.js', fileContent);
  console.log("¡data/lolData.js y data/lolState.json actualizados con medias adaptativas!");
}

main();
