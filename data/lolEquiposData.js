// Obtiene el rango automáticamente si el jugador existe en lolData.js
function getPlayerRankLoL(playerName, fallbackRank = "Unranked") {
  if (typeof gameData !== 'undefined' && Array.isArray(gameData.players)) {
    const p = gameData.players.find(player => player.name.toLowerCase() === playerName.toLowerCase());
    if (p) return `${p.tierName || p.tier || ''} ${p.rankTier || ''} (${p.elo || 0} LP)`.replace(/\s+/g, ' ').trim();
  }
  return fallbackRank;
}

const lolEquiposData = {
  // Sin equipos ni jugadores LFT de ejemplo por ahora.
  teams: [],
  lftPlayers: []
};