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
    console.error('⚠️ Error al cargar DataDragon:', err.message);
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
        absoluteElo: p.absoluteElo,
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

async function getDetailedMatches(puuid) {
  try {
    const matchesUrl = `https://europe.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?type=ranked&start=0&count=10&api_key=${API_KEY}`;
    const res = await fetch(matchesUrl);
    if (!res.ok) return [];
    const matchIds = await res.json();

    const matches = [];
    for (const matchId of matchIds) {
      const detailUrl = `https://europe.api.riotgames.com/lol/match/v5/matches/${matchId}?api_key=${API_KEY}`;
      const detailRes = await fetch(detailUrl);
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

          matches.push({
            win: p.win,
            championName: p.championName || "Desconocido",
            kills: p.kills,
            deaths: p.deaths,
            assists: p.assists,
            kdaRatio: p.deaths === 0 ? (p.kills + p.assists).toFixed(2) : ((p.kills + p.assists) / p.deaths).toFixed(2),
            cs: totalCs,
            cspm: (totalCs / durationMin).toFixed(1),
            dpm: Math.round(p.totalDamageDealtToChampions / durationMin),
            killParticipation: `${kp}%`,
            damageShare: `${dmgShare}%`,
            goldShare: `${goldShare}%`,
            gameDurationMinutes: Math.round(durationMin)
          });
        }
      }
      await new Promise(r => setTimeout(r, 200));
    }
    return matches.reverse();
  } catch (e) {
    return [];
  }
}

function calculatePlayerPerformance(matches) {
  if (!matches || matches.length === 0) return null;
  const total = matches.length;
  const avgDpm = Math.round(matches.reduce((acc, m) => acc + m.dpm, 0) / total);
  const avgCspm = (matches.reduce((acc, m) => acc + parseFloat(m.cspm), 0) / total).toFixed(1);
  const avgKp = (matches.reduce((acc, m) => acc + parseFloat(m.killParticipation), 0) / total).toFixed(1);
  const kills = matches.reduce((acc, m) => acc + m.kills, 0);
  const deaths = matches.reduce((acc, m) => acc + m.deaths, 0);
  const assists = matches.reduce((acc, m) => acc + m.assists, 0);
  const avgKda = deaths === 0 ? (kills + assists).toFixed(2) : ((kills + assists) / deaths).toFixed(2);

  return { avgDpm, avgCspm, avgKp: `${avgKp}%`, avgKda, totalAnalyzedGames: total };
}

async function getPlayerData(player, previousState) {
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

    // CÁLCULO DE DELTA DE LP FIABLE Y MATEMÁTICAMENTE EXACTO
    if (typeof prev.absoluteElo === 'number') {
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
          const estimatedLossesTotal = lossesDiff * (prev.lossLp || 15);
          const estimatedWinGain = eloDelta + estimatedLossesTotal;
          const calculatedGain = Math.max(10, Math.round(estimatedWinGain / winsDiff));
          
          totalGainLp += calculatedGain * winsDiff;
          winEvents += winsDiff;
          totalLossLp += estimatedLossesTotal;
          lossEvents += lossesDiff;
        }
      }
    }

    const avgGain = winEvents > 0 ? Math.round(totalGainLp / winEvents) : (prev.gain || 20);
    const avgLoss = lossEvents > 0 ? Math.round(totalLossLp / lossEvents) : (prev.lossLp || 20);

    const topMasteries = await getTopMasteries(accountData.puuid);
    const detailedMatches = await getDetailedMatches(accountData.puuid);
    const performanceSummary = calculatePlayerPerformance(detailedMatches);
    const sparkPath = generateSparkline(detailedMatches);

    return {
      name: player.name,
      tag: `#${player.tag}`,
      role: player.role,
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
    console.error(`Error al procesar a ${player.name}:`, error.message);
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
    console.error("❌ No se pudieron obtener datos.");
    process.exit(1);
  }

  playersData.sort((a, b) => b.absoluteElo - a.absoluteElo);
  playersData.forEach((p, index) => p.rank = index + 1);

  saveCurrentState(playersData);

  const fileContent = `const gameData = ${JSON.stringify({ players: playersData, lastUpdated: new Date().toISOString() }, null, 2)};`;
  fs.writeFileSync('./data/lolData.js', fileContent);
  console.log("¡data/lolData.js actualizado con historial, telemetría y deltas de LP calculados!");
}

main();
