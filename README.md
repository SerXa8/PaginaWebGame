# 🏆 SoloQ Challenge Multijuego (LoL / Valorant / CS2)

Dashboard web en tiempo real que recopila las clasificaciones, estadísticas detalladas y directos de Twitch automatizados para los participantes del **SoloQ Challenge** de League of Legends, Valorant y Counter-Strike 2.

![SoloQ Challenge Banner](https://images.contentstack.io/v3/assets/blt731acb42bb07e10e/blt3f269a9b75204481/5e73ef13103e620f32f3e823/LOL_PROMO_ART.jpg)

---

## 🌟 Características Principales

* **🎮 Multijuego Dinámico:** Páginas dedicadas e independientes para **League of Legends**, **Valorant** y **Counter-Strike 2**.
* **🔴 Integración Estricta con Twitch:** 
  * Detección automatizada de estados en directo (`EN DIRECTO` / `DESCONECTADO`).
  * **Filtro estricto de categoría por juego:** Los streamers solo se muestran como "En Directo" y se embeben en el reproductor si están transmitiendo bajo la categoría exacta del juego activo (evita cruce de directos entre LoL y Valorant).
  * Contador global de espectadores en tiempo real y selector de canal mediante clic.
* **📊 Tabla de Clasificación & Podio:**
  * Algoritmo de ordenación absoluta por rango (Elo / RR / LP).
  * Indicadores de estado visuales, rachas, Winrate, K/D y sparklines de tendencia.
* **🔍 Filtros & Buscador:** Búsqueda en tiempo real por nombre/tag y filtrado por roles (Top, Jg, Mid, Adc, Supp / Duelista, Iniciador, etc.).
* **👤 Modal con Telemetría Avanzada:** Análisis de rendimiento por jugador con métricas avanzadas (CSD@10, ACS, Headshot %, Visión, fortalezas/debilidades y partidas recientes).
* **🔄 Automatización Backend con GitHub Actions:** Tareas programadas (*Cron cada 10 min*) para refrescar `data/live.json` y los datos de la API de Twitch sin necesidad de servidor dedicado.

---

## 📁 Estructura del Proyecto

```text
├── index.html              # Portada de selección de juego
├── lol.html                # Dashboard de League of Legends
├── valorant.html           # Dashboard de Valorant
├── cs2.html                # Dashboard de Counter-Strike 2
├── data/
│   ├── live.json           # JSON generado automáticamente con los directos activos de Twitch
│   ├── lolData.js          # Datos estáticos y jugadores de LoL
│   ├── valorantData.js     # Datos estáticos y jugadores de Valorant
│   └── twitch.js           # Lógica global / aux de Twitch
└── .github/
    └── workflows/          # GitHub Actions para actualización automatizada cada 10 min
