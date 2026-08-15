(() => {
  const GAME_ID_LOL = "21779";

  async function cargarStreamLol() {
    const contenedor = document.getElementById("twitch-embed");
    const listaStreamers = document.getElementById("streamers-list");
    const totalViewersElem = document.getElementById("total-viewers");
    
    if (!contenedor) return;

    try {
      const response = await fetch('live.json?t=' + Date.now());
      const data = await response.json();
      const streams = data.data || [];

      // Filtrar únicamente streamers en directo jugando a LoL
      const streamsJuego = streams.filter(s => s.game_id === GAME_ID_LOL);

      // 1. Contador total de espectadores
      const totalEspectadores = streamsJuego.reduce((sum, s) => sum + s.viewer_count, 0);
      if (totalViewersElem) {
        totalViewersElem.textContent = totalEspectadores.toLocaleString('es-ES');
      }

      // 2. Renderizar lista lateral de streamers en directo
      if (listaStreamers) {
        if (streamsJuego.length > 0) {
          listaStreamers.innerHTML = streamsJuego.map(s => {
            const viewersFormatted = s.viewer_count >= 1000 
              ? (s.viewer_count / 1000).toFixed(1) + 'k' 
              : s.viewer_count;

            return `
              <button onclick="setStream('${s.user_login}')" class="w-full flex items-center justify-between p-2.5 rounded-xl bg-slate-900/60 hover:bg-slate-800 transition border border-transparent hover:border-purple-500/30 text-left group">
                <div class="flex items-center gap-3">
                  <div class="w-8 h-8 rounded-full bg-purple-900/50 border border-purple-500/40 flex items-center justify-center font-bold text-xs text-purple-300">
                    ${s.user_name.substring(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <div class="text-xs font-bold text-slate-200 group-hover:text-purple-300 transition">${s.user_name}</div>
                    <div class="text-[10px] text-slate-500">Twitch</div>
                  </div>
                </div>
                <div class="flex items-center gap-1.5">
                  <span class="text-xs font-bold text-slate-300">${viewersFormatted}</span>
                  <span class="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                </div>
              </button>
            `;
          }).join('');
        } else {
          listaStreamers.innerHTML = `
            <p class="text-xs text-slate-500 text-center py-4">No hay streamers en directo en este juego.</p>
          `;
        }
      }

      // 3. Incrustar reproductor SIN CHAT (layout: "video")
      if (streamsJuego.length > 0) {
        const streamActivo = streamsJuego[0];
        contenedor.innerHTML = "";
        const parentDomain = window.location.hostname || "localhost";
        
        new Twitch.Embed("twitch-embed", {
          width: "100%",
          height: "100%",
          channel: streamActivo.user_login,
          layout: "video", // <-- Desactiva el chat completamente
          parent: [parentDomain]
        });

        const nameElem = document.getElementById("streamer-current-name");
        if (nameElem) nameElem.textContent = streamActivo.user_name;
      } else {
        contenedor.innerHTML = `
          <div class="flex flex-col items-center justify-center h-full text-slate-400 p-6 text-center">
            <p class="font-bold text-base">Ningún participante está jugando a League of Legends ahora mismo.</p>
            <p class="text-xs text-slate-500 mt-1">El directo se activará automáticamente cuando inicien partida en este juego.</p>
          </div>
        `;
        const nameElem = document.getElementById("streamer-current-name");
        if (nameElem) nameElem.textContent = "Sin directo activo";
      }

    } catch (error) {
      console.error("Error al cargar los streams de LoL:", error);
    }
  }

  document.addEventListener("DOMContentLoaded", cargarStreamLol);
})();
