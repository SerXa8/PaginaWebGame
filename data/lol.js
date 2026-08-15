(() => {
  const GAME_ID_LOL = "21779";

  async function cargarStreamLol() {
    const contenedor = document.getElementById("twitch-embed");
    if (!contenedor) return;

    try {
      const response = await fetch('live.json?t=' + Date.now());
      const data = await response.json();
      const streams = data.data || [];

      // Buscar si algún streamer está jugando a League of Legends
      const streamActivo = streams.find(s => s.game_id === GAME_ID_LOL);

      if (streamActivo) {
        contenedor.innerHTML = "";
        const parentDomain = window.location.hostname || "localhost";
        new Twitch.Embed("twitch-embed", {
          width: "100%",
          height: "100%",
          channel: streamActivo.user_login,
          parent: [parentDomain]
        });
        const nameElem = document.getElementById("streamer-current-name");
        if (nameElem) nameElem.textContent = streamActivo.user_login;
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
