const GAME_ID_VALORANT = "516575";

async function cargarStreamValorant() {
  const contenedor = document.getElementById("twitch-embed");
  if (!contenedor) return;

  try {
    const response = await fetch('live.json?t=' + Date.now());
    const data = await response.json();
    const streams = data.data || [];

    const streamActivo = streams.find(s => s.game_id === GAME_ID_VALORANT);

    if (streamActivo) {
      contenedor.innerHTML = "";
      new Twitch.Embed("twitch-embed", {
        width: "100%",
        height: "100%",
        channel: streamActivo.user_login,
        parent: [window.location.hostname]
      });
    } else {
      contenedor.innerHTML = `
        <div class="flex flex-col items-center justify-center h-full text-slate-400 p-6 text-center">
          <i data-lucide="tv-off" class="w-12 h-12 mb-3 text-slate-600"></i>
          <p class="font-bold text-base">Ningún participante está jugando a Valorant ahora mismo.</p>
        </div>
      `;
      if (window.lucide) lucide.createIcons();
    }
  } catch (error) {
    console.error("Error al cargar los streams de Valorant:", error);
  }
}

document.addEventListener("DOMContentLoaded", cargarStreamValorant);
