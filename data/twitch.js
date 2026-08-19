const GAME_IDS = {
  lol: "21779",
  valorant: "516575",
  cs2: "32399"
};

async function updateLiveStreams(currentGameKey) {
  try {
    // 1. Resetear el estado 'isLive' de todos los jugadores a false por defecto
    if (typeof gameData !== 'undefined' && gameData.players) {
      gameData.players.forEach(p => {
        p.isLive = false;
        p.viewers = 0;
      });
    }

    // 2. Cargar los datos generados por la GitHub Action sin guardar en caché
    const response = await fetch('data/live.json?t=' + Date.now());
    if (!response.ok) throw new Error("No se pudo cargar data/live.json");

    const data = await response.json();
    const liveStreams = data.data || [];

    // 3. Filtrar los streams activos para el juego actual
    const targetGameId = GAME_IDS[currentGameKey];
    const activeStreamers = liveStreams.filter(stream => stream.game_id === targetGameId);

    // 4. Cruzar los datos de Twitch con tu array local (gameData.players)
    if (typeof gameData !== 'undefined' && gameData.players) {
      activeStreamers.forEach(stream => {
        // Busca al jugador por su canal de twitch (sin importar mayúsculas)
        const player = gameData.players.find(
          p => p.twitch && p.twitch.toLowerCase() === stream.user_login.toLowerCase()
        );

        if (player) {
          player.isLive = true;
          player.viewers = stream.viewer_count || 0;
        }
      });
    }

    // 5. Volver a renderizar toda la interfaz con el estado de directo real
    if (typeof renderUI === 'function') {
      renderUI(gameData);
    }

    // 6. Si no hay directos activos, limpiar el reproductor de Twitch
    if (activeStreamers.length === 0) {
      const streamContainer = document.getElementById("twitch-embed");
      if (streamContainer) {
        streamContainer.innerHTML = `
          <div class="flex items-center justify-center h-full text-slate-500 font-semibold text-xs p-4 text-center">
            Ningún streamer está transmitiendo este juego ahora mismo.
          </div>
        `;
      }

      const nameElem = document.getElementById("streamer-current-name");
      if (nameElem) nameElem.textContent = "Sin directo activo";
    }

  } catch (error) {
    console.error("Error al actualizar streams:", error);
    
    // En caso de fallo de red/JSON, forzar actualización para evitar falsos positivos
    if (typeof renderUI === 'function' && typeof gameData !== 'undefined') {
      renderUI(gameData);
    }
  }
}
