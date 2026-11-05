<<<<<<< HEAD
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
=======
// Ejemplo para data/lolEquiposData.js
const lolEquiposData = {
  teams: [
    {
      id: "team-lol-1",
      name: "Barón Kills",
      tag: "BK",
      type: "CLASH", // "CLASH", "AMATEUR" o "PRO"
      division: "Tier I - Clash",
      members: [
        { name: "SerXa08", tag: "#1197", role: "Top", twitch: "s3rxa8" },
        { name: "Player2", tag: "#EUW", role: "Jungle", twitch: "" },
        { name: "Player3", tag: "#EUW", role: "Mid", twitch: "" },
        { name: "Player4", tag: "#EUW", role: "ADC", twitch: "" },
        { name: "Player5", tag: "#EUW", role: "Support", twitch: "" }
      ]
    }
  ],
>>>>>>> 6f58aad6c3204978efbcf6277de1815a81935104
  lftPlayers: [
    {
      name: "JavierLoL",
      tag: "#EUW",
<<<<<<< HEAD
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
=======
      rank: "Challenger",
      primaryRole: "Mid",
      secondaryRole: "Top",
      notes: "Busco equipo para Clash Tier 1 y ligas amateur.",
      twitter: "https://twitter.com/javierlol",
      twitch: "javierlol"
    }
  ]
};
>>>>>>> 6f58aad6c3204978efbcf6277de1815a81935104
