// Obtiene el rango automáticamente si el jugador existe en lolData.js
function getPlayerRankLoL(playerName, fallbackRank = "Unranked") {
  if (typeof lolData !== 'undefined' && Array.isArray(lolData)) {
    const p = lolData.find(player => player.name.toLowerCase() === playerName.toLowerCase());
    if (p) return `${p.tier || p.rank || ''} ${p.rankDivision || ''} (${p.lp || 0} LP)`.trim();
  }
  return fallbackRank;
}

const lolEquiposData = {
  teams: [ /* tus equipos */ ],
  lftPlayers: [
    {
      name: "JavierLoL",
      tag: "#EUW",
      // Lee el rango automáticamente en tiempo real
      get rank() { return getPlayerRankLoL(this.name, "Challenger"); },
      primaryRole: "Mid",
      secondaryRole: "Top",
      status: "BUSCANDO",
      notes: "Busco equipo para Clash Tier 1.",
      twitter: "https://twitter.com/",
      twitch: "javierrlol"
    }
  ]
};