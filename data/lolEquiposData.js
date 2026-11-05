// Obtiene el rango automáticamente si el jugador existe en lolData.js
function getPlayerRankLoL(playerName, fallbackRank = "Unranked") {
  if (typeof gameData !== 'undefined' && Array.isArray(gameData.players)) {
    const p = gameData.players.find(player => player.name.toLowerCase() === playerName.toLowerCase());
    if (p) return `${p.tierName || p.tier || ''} ${p.rankTier || ''} (${p.elo || 0} LP)`.replace(/\s+/g, ' ').trim();
  }
  return fallbackRank;
}

const lolEquiposData = {
  teams: [
    {
      id: "team-lol-1",
      name: "SoloQ Titans",
      tag: "SQT",
      type: "CLASH",
      status: "TRYOUTS",
      seekingRoles: ["Top", "Support"],
      division: "Clash Tier 1",
      members: [
        { name: "JavierLoL", tag: "#EUW", role: "Mid" }
      ]
    }
  ],
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