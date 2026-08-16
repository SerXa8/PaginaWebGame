const fs = require('fs');

// GitHub Actions insertará la clave automáticamente aquí
const API_KEY = process.env.RIOT_API_KEY;

const STREAMERS = [
  { name: "JavierLoL", 
   riotName: "JavierLoL", 
   tag: "eMonkeyz", 
   role: "mid", 
   twitch: "javierrlol" },
  
  { name: "SerXa8", 
   riotName: "SerXa08", 
   tag: "1197", 
   role: "top", 
   twitch: "s3rxa8" },

  { name: "mamielizabeth", 
   riotName: "mamielizabeth", 
   tag: "fdm", 
   role: "mid", 
   twitch: "" }
  
];

async function getPlayerData(player) {
  try {
    const accountUrl = `https://europe.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${encodeURIComponent(player.riotName)}/${encodeURIComponent(player.tag)}?api_key=${API_KEY}`;
    const accountRes = await fetch(accountUrl);
    if (!accountRes.ok) throw new Error(`Error cuenta: ${accountRes.statusText}`);
    const accountData = await accountRes.json();

    const leagueUrl = `https://euw1.api.riotgames.com/lol/league/v4/entries/by-summoner/${accountData.puuid}?api_key=${API_KEY}`;
    const leagueRes = await fetch(leagueUrl);
    if (!leagueRes.ok) throw new Error(`Error liga: ${leagueRes.statusText}`);
    const leagueData = await leagueRes.json();

    const soloQ = leagueData.find(q => q.queueType === 'RANKED_SOLO_5x5') || {};
    const wins = soloQ.wins || 0;
    const losses = soloQ.losses || 0;
    const totalGames = wins + losses;
    const winrate = totalGames > 0 ? ((wins / totalGames) * 100).toFixed(0) + '%' : '0%';

    return {
      name: player.name,
      tag: `${player.riotName}#${player.tag}`,
      role: player.role,
      elo: soloQ.leaguePoints || 0,
      win: wins,
      loss: losses,
      wr: winrate,
      gain: 25,
      lossLp: 20,
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
  const playersData = [];

  for (const player of STREAMERS) {
    const data = await getPlayerData(player);
    if (data) playersData.push(data);
  }

  playersData.sort((a, b) => b.elo - a.elo);
  playersData.forEach((p, index) => p.rank = index + 1);

  const fileContent = `const gameData = ${JSON.stringify({ players: playersData }, null, 2)};`;
  fs.writeFileSync('./data/lol.js', fileContent);
  console.log("¡data/lol.js actualizado correctamente!");
}

main();
