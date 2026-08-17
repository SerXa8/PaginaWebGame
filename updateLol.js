const fs = require('fs');

const API_KEY = process.env.RIOT_API_KEY;

const STREAMERS = [
  { name: "JavierLoL", 
   riotName: "eMonkeyz Run", 
   tag: "514", 
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
   twitch: "" },

  { name: "Maiiser", 
   riotName: "Jabon de Hamster", 
   tag: "WIWI", 
   role: "top", 
   twitch: "maiiser" }


  
];

async function getPlayerData(player) {
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

    return {
      name: player.name,
      tag: `#${player.tag}`,
      role: player.role,
      elo: soloQ.leaguePoints || 0,
      tierName: soloQ.tier || "UNRANKED",
      rankTier: soloQ.rank || "",
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
    // Pausa de seguridad para respetar el límite de llamadas a la API de Riot
    await new Promise(r => setTimeout(r, 1200));
  }

  // Ordenar de mayor a menor LP/elo
  playersData.sort((a, b) => b.elo - a.elo);
  playersData.forEach((p, index) => p.rank = index + 1);

  // Crear directorio si no existe
  fs.mkdirSync('./data', { recursive: true });

  const fileContent = `const gameData = ${JSON.stringify({ players: playersData }, null, 2)};`;
  fs.writeFileSync('./data/lolData.js', fileContent);
  console.log("¡data/lolData.js actualizado correctamente!");
}

main();
