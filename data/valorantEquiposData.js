// Obtiene el rango automáticamente si el jugador existe en valorantData.js
function getPlayerRankVal(playerName, fallbackRank = "Sin Rango") {
  if (typeof valorantData !== 'undefined' && Array.isArray(valorantData)) {
    const p = valorantData.find(player => player.name.toLowerCase() === playerName.toLowerCase());
    if (p) return `${p.rank || p.tier || ''} (${p.rr || 0} RR)`.trim();
  }
  return fallbackRank;
}

const valorantEquiposData = {
  teams: [
    {
      id: "team-val-1",
      name: "Alpha Esports",
      tag: "ALP",
      type: "PREMIER",
      status: "TRYOUTS",
      seekingRoles: ["Controlador", "Flex"],
      division: "División 5 - Premier",
      members: [
        { name: "SerXa08", tag: "#1197", role: "duelista", twitch: "s3rxa8" }
      ]
    }
  ],
  lftPlayers: [
    {
      name: "SerXa08",
      tag: "#1197",
      // Sincroniza automáticamente con valorantData.js si existe
      get rank() { return getPlayerRankVal(this.name, "Inmortal 2"); },
      primaryRole: "Duelista",
      secondaryRole: "Iniciador",
      status: "BUSCANDO",
      notes: "Busco equipo serio para Premier Div 4-5.",
      twitter: "https://twitter.com/",
      twitch: "s3rxa8"
    }
  ]
};
