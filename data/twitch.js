const GAME_IDS = {
  lol: "21779",
  valorant: "516575",
  cs2: "32399"
};

// Variable interna para evitar recargar el iFrame si el directo no ha cambiado
let currentEmbeddedChannel = null;

async function updateLiveStreams(currentGameKey) {
  try {
    // 1. Resetear el estado 'isLive' y espectadores de todos los jugadores
    if (typeof gameData !== 'undefined' && Array.isArray(gameData.players)) {
      gameData.players.forEach(p => {
        p.isLive = false;
        p.viewers = 0;
      });
    }

    // 2. Cargar los datos generados por GitHub Actions (evitando caché HTTP)
    const response = await fetch('data/live.json?t=' + Date.now());
    if (!response.ok) throw new Error("No se pudo cargar data/live.json");

    const data = await response.json();
    const liveStreams = data.data || [];

    // 3. Filtrar los streams activos para el juego seleccionado
    const targetGameId = GAME_IDS[currentGameKey];
    const activeStreamers = liveStreams.filter(stream => stream.game_id === targetGameId);

    // 4. Cruzar los datos de Twitch con el array local (gameData.players)
    if (typeof gameData !== 'undefined' && Array.isArray(gameData.players)) {
      activeStreamers.forEach(stream => {
        const player = gameData.players.find(
          p => p.twitch && p.twitch.trim().toLowerCase() === stream.user_login.toLowerCase()
        );

        if (player) {
          player.isLive = true;
          player.viewers = stream.viewer_count || 0;
        }
      });
    }

    // 5. Re-renderizar la interfaz principal para actualizar insignias/estados
    if (typeof renderUI === 'function') {
      renderUI(gameData);
    }

    // 6. Gestionar la visualización del reproductor Embed de Twitch
    const livePlayers = gameData.players.filter(p => p.isLive);

    if (livePlayers.length === 0) {
      clearTwitchEmbed("Ningún streamer está transmitiendo este juego ahora mismo.");
    } else {
      // Cargar por defecto el primer streamer activo en la lista si no hay uno activo
      const activePlayer = livePlayers[0];
      loadTwitchStream(activePlayer.twitch, activePlayer.name);
    }

  } catch (error) {
    console.error("Error al actualizar streams:", error);
    
    // Forzar renderizado en fallo de red para evitar falsos positivos
    if (typeof renderUI === 'function' && typeof gameData !== 'undefined') {
      renderUI(gameData);
    }
  }
}

/**
 * Inserta el iframe de Twitch de un canal
 */
function loadTwitchStream(channelName, displayName) {
  const streamContainer = document.getElementById("twitch-embed");
  const nameElem = document.getElementById("streamer-current-name");

  if (nameElem) {
    nameElem.textContent = displayName || channelName;
  }

  if (!streamContainer || currentEmbeddedChannel === channelName) return;

  // Obtiene tu subdominio de GitHub Pages (ej: tuusuario.github.io)
  const parentDomain = window.location.hostname || "localhost";

  // Se añade &muted=true para permitir el Autoplay sin bloqueos del navegador
  streamContainer.innerHTML = `
    <iframe
      src="https://player.twitch.tv/?channel=${channelName}&parent=${parentDomain}&autoplay=true&muted=true"
      height="100%"
      width="100%"
      allowfullscreen="true"
      allow="autoplay; fullscreen"
      frameborder="0">
    </iframe>
  `;

  currentEmbeddedChannel = channelName;
}

/**
 * Limpia el reproductor cuando no hay directos disponibles
 */
function clearTwitchEmbed(message) {
  const streamContainer = document.getElementById("twitch-embed");
  const nameElem = document.getElementById("streamer-current-name");

  if (nameElem) {
    nameElem.textContent = "Sin directo activo";
  }

  if (streamContainer) {
    streamContainer.innerHTML = `
      <div class="flex items-center justify-center h-full text-slate-500 font-semibold text-xs p-4 text-center">
        ${message}
      </div>
    `;
  }

  currentEmbeddedChannel = null;
}
