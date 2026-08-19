const GAME_IDS = {
  lol: "21779",
  valorant: "516575",
  cs2: "32399"
};

async function updateLiveStreams(currentGameKey) {
  try {
    // Carga los datos generados por la GitHub Action sin guardar en caché
    const response = await fetch('data/live.json?t=' + Date.now());
    if (!response.ok) throw new Error("No se pudo cargar data/live.json");

    const data = await response.json();
    const liveStreams = data.data || [];

    // Filtra los streams activos para el juego actual
    const targetGameId = GAME_IDS[currentGameKey];
    const activeStreamers = liveStreams.filter(stream => stream.game_id === targetGameId);

    const streamContainer = document.getElementById("twitch-embed");

    if (activeStreamers.length > 0) {
      // Pone en el reproductor el primer directo encontrado
      setStream(activeStreamers[0].user_login);
    } else if (streamContainer) {
      // Mensaje cuando no hay directos activos
      streamContainer.innerHTML = `
        <div class="flex items-center justify-center h-full text-slate-500 font-semibold text-xs p-4 text-center">
          Ningún streamer está transmitiendo este juego ahora mismo.
        </div>
      `;
      
      const nameElem = document.getElementById("streamer-current-name");
      if (nameElem) nameElem.textContent = "Sin directo activo";
    }

  } catch (error) {
    console.error("Error al actualizar streams:", error);
  }
}
