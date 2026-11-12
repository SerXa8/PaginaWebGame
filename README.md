# 🏆 SoloQ Challenge Multijuego (LoL / Valorant / CS2 / Deadlock)

Dashboard web en tiempo real que recopila las clasificaciones, estadísticas detalladas y directos de Twitch automatizados para los participantes del **SoloQ Challenge** de League of Legends, Valorant, Counter-Strike 2 y Deadlock.

![SoloQ Challenge Banner](https://images.contentstack.io/v3/assets/blt731acb42bb07e10e/blt3f269a9b75204481/5e73ef13103e620f32f3e823/LOL_PROMO_ART.jpg)

---

## 🌟 Características Principales

* **🎮 Multijuego Dinámico:** Páginas dedicadas e independientes para **League of Legends**, **Valorant**, **Counter-Strike 2** y **Deadlock** (CS2 y Deadlock en modo demo/próximamente, con datos de ejemplo en el ranking).
* **🔴 Integración Estricta con Twitch:**
  * Detección automatizada de estados en directo (`EN DIRECTO` / `DESCONECTADO`).
  * **Filtro estricto de categoría por juego:** Los streamers solo se muestran como "En Directo" y se embeben en el reproductor si están transmitiendo bajo la categoría exacta del juego activo (evita cruce de directos entre juegos).
  * Contador global de espectadores en tiempo real y selector de canal mediante clic.
* **📊 Tabla de Clasificación & Podio:**
  * Algoritmo de ordenación absoluta por rango (Elo / RR / LP / MMR).
  * Indicadores de estado visuales, rachas, Winrate, K/D y sparklines de tendencia.
* **🔍 Filtros & Buscador:** Búsqueda en tiempo real por nombre/tag y filtrado por roles (Top, Jg, Mid, Adc, Supp / Duelista, Iniciador, etc.).
* **👤 Modal con Telemetría Avanzada:** Análisis de rendimiento por jugador con métricas avanzadas (CSD@10, ACS, Headshot %, Visión, fortalezas/debilidades y partidas recientes).
* **🧙 Compendio de Deadlock:** 44 héroes con habilidades, estadísticas, objetos recomendados y builds; tierlist híbrida (editorial + winrate/pickrate reales), base de datos de 156 objetos y guías en español.
* **🔄 Automatización Backend con GitHub Actions:** Tareas programadas para refrescar `data/live.json` (cada 15 min) y los snapshots de datos de LoL, Valorant y Deadlock.

---

## 📁 Estructura del Proyecto

```text
├── index.html              # Portada de selección de juego
├── lol.html                # Dashboard de League of Legends
├── valorant.html           # Dashboard de Valorant
├── cs2.html                # Dashboard de Counter-Strike 2 (demo/próximamente)
├── deadlock.html           # Ranking demo de Deadlock + directos
├── deadlockHeroes.html     # Héroes, tierlist, objetos y guías de Deadlock
├── equiposLol.html         # Equipos / Clash y jugadores LFT de LoL
├── equiposValorant.html    # Equipos / Premier y jugadores LFT de Valorant
├── valorantLineups.html    # Guía de lineups de Valorant
├── updateLol.js            # Generador de datos de LoL
├── updateValorant.js       # Generador de datos de Valorant
├── updateDeadlock.js       # Genera snapshots de Deadlock desde deadlock-api.com
├── data/
│   ├── live.json           # JSON generado automáticamente con los directos activos de Twitch
│   ├── lolData.js          # Datos estáticos y jugadores de LoL
│   ├── valorantData.js     # Datos estáticos y jugadores de Valorant
│   ├── cs2Data.js          # Datos de ejemplo de jugadores de CS2 (demo: true)
│   ├── cs2.js              # Carga de directos y estado live de CS2
│   ├── deadlockData.js     # Datos de ejemplo del ranking de Deadlock (demo: true)
│   ├── deadlock.js         # Carga de directos y estado live de Deadlock
│   ├── deadlockHeroesData.js  # Snapshot de héroes, habilidades y stats (generado)
│   ├── deadlockItemsData.js   # Snapshot de objetos de tienda (generado)
│   ├── deadlockGuidesData.js  # Tierlist, builds, consejos y guías (editorial)
│   ├── lolEquiposData.js   # Equipos y LFT de LoL
│   ├── valorantEquiposData.js # Equipos y LFT de Valorant
│   └── twitch.js           # Lógica global / aux de Twitch
├── Valorant/
│   └── ValorantLineups/    # JSON de lineups por mapa/agente
├── docs/
│   └── design-system.md    # Tokens, componentes y mapa de páginas
└── .github/
    └── workflows/          # GitHub Actions para actualización automatizada
```

---

## 🧙 Deadlock: datos y mantenimiento

* **Fuente:** [deadlock-api.com](https://deadlock-api.com) (proyecto no oficial). La web **no llama a la API en tiempo de visita**: lee los snapshots locales.
* **Generar/actualizar datos:**

  ```bash
  node updateDeadlock.js
  ```

  El script descarga héroes, objetos y estadísticas en inglés y en español, y escribe:
  * `data/deadlockHeroesData.js`: 44 héroes jugables con habilidades, stats base, ítems populares, winrate y pickrate.
  * `data/deadlockItemsData.js`: 156 objetos de tienda (tiers 1–4) con estadísticas y descripciones en español.
* **Contenido editorial:** `data/deadlockGuidesData.js` contiene la tierlist, las 44 fichas de héroe (resumen, build por fases, orden de habilidades, consejos, counters y sinergias) y 6 guías generales. Se edita a mano.
* **Automatización:** `.github/workflows/update-deadlock.yml` ejecuta el script cada lunes y hace commit de los snapshots.
* **Ranking:** `data/deadlockData.js` usa 6 jugadores de ejemplo (`demo: true`) para no atribuir estadísticas falsas a personas reales. El banner de demo se oculta automáticamente cuando `demo` pasa a `false`.
* **Directos:** `data/deadlock.js` filtra `data/live.json` por `game_id` de Twitch `2132205352` o por `game_name === 'deadlock'`.
