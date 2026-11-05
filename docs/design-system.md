# SoloQ Challenge - Design System

Este documento define la identidad visual, los tokens y los componentes reales del proyecto. Aplica a todas las vistas:

| Vista | Archivo | Rol |
|---|---|---|
| Hub | `index.html` | Selección de juego |
| League of Legends | `lol.html` | Ranking + modal de jugador |
| Valorant | `valorant.html` | Ranking + modal de jugador |
| CS2 | `cs2.html` | Ranking + filtros de plataforma |
| Equipos LoL | `equiposLol.html` | Equipos/Clash + LFT |
| Equipos Valorant | `equiposValorant.html` | Equipos/Premier + LFT |
| Lineups Valorant | `valorantLineups.html` | Base de datos de lineups |

---

## 1. Stack y base técnica

- **CSS:** Tailwind CSS por CDN (`cdn.tailwindcss.com`).
- **Iconos:** Lucide (`unpkg.com/lucide`), inicializados con `lucide.createIcons()`.
- **Twitch:** iframes de `player.twitch.tv` y el script de embed.
- **Datos:** archivos JS/JSON locales (`data/*.js`, `data/live.json`).
- **Tipografía:** `'Inter', system-ui, sans-serif`. No se carga ninguna webfont; si Inter no está instalada, se usa la fuente del sistema.
- **Tema:** oscuro. No hay modo claro.

---

## 2. Tokens de color reales

### 2.1 Base compartida

| Token | Valor | Implementación / uso |
|---|---|---|
| Fondo base | `#0b0d12` | `body` (las vistas de equipos usan `#0b0e14`) |
| Fondo header | `#080a0e` | Header sticky |
| Fondo header translúcido | `#080a0e` al 80% + `backdrop-blur` | Solo en `index.html` |
| Fondo card | `#121620` | Clase `.bg-card` |
| Hover card/fila | `#1a202c` | `.bg-card-hover`, hover de tablas |
| Borde | `#1e2638` | Clase `.border-custom` |
| Texto base | `#e2e8f0` | `body` |
| Texto secundario | `slate-400` (`#94a3b8`) | Descripciones, metadatos |
| Texto apagado | `slate-500` (`#64748b`) | Placeholders y estados offline |
| Éxito | `#22c55e` | Rachas positivas, winrate, sparklines |
| Peligro | `#ef4444` | Derrotas, alertas, estados live |

### 2.2 Acentos por juego

| Juego | Acento principal | Variantes usadas |
|---|---|---|
| League of Legends | `yellow-500` (`#eab308`) | `yellow-400` (`#facc15`), `yellow-300`, activo de rol `#f59e0b` |
| Valorant | `red-500` (`#ef4444`) | `red-600` (`#dc2626`), `red-400` (`#f87171`) |
| CS2 | `orange-500` (`#f97316`) | `orange-400` (`#fb923c`) |

### 2.3 Variante de las vistas de equipos

`equiposLol.html` y `equiposValorant.html` usan una variante muy cercana:

- Fondo `#0b0e14` (en lugar de `#0b0d12`).
- Bordes `slate-800` (`#1e293b`) en lugar de `.border-custom`.
- Cards `#121620`, igual que el resto.

---

## 3. Layout, radios y patrones

- **Contenedor:** `max-w-7xl mx-auto px-4` (el hub usa `px-6`).
- **Header:** altura `h-20` en el hub y `h-16` en las vistas de juego/equipos.
- **Radios:**
  - Cards del hub: `rounded-3xl`.
  - Paneles, tablas, cards y modales: `rounded-2xl`.
  - Controles pequeños: `rounded-lg` / `rounded-xl`.
- **Grid de stream:** `grid-cols-1 lg:grid-cols-12`, con paneles de 3 / 6 / 3 columnas.
- **Grid de podio:** `grid-cols-1 md:grid-cols-3`.
- **Tablas:** `w-full text-left border-collapse text-xs`, con scroll horizontal.
- **Estados activos:** fondos de acento al 10–20% de opacidad, texto del acento y borde del acento.

---

## 4. Navegación y header

### 4.1 Hub (`index.html`)

- Logo `SQ` + wordmark `SOLOQCHALLENGE`.
- Badge de directos activos con punto rojo pulsante.
- Header `h-20`, sticky y con desenfoque.

### 4.2 Vistas de juego (`lol.html`, `valorant.html`, `cs2.html`)

- Logo `SQ` enlazando a `index.html`.
- Nav con `League of Legends`, `Valorant` y `CS2`.
- La pestaña del juego activo se resalta con su acento (amarillo, rojo u naranja).
- Badge `EN DIRECTO` en el lado derecho.

### 4.3 Vistas de equipos y lineups

- Mismo header y nav.
- En las vistas de equipos, sub-pestañas para alternar entre ranking y equipos.
- En lineups, el header incluye el botón `VER RANKING`.

---

## 5. Hub principal (`index.html`)

- **Título:** “Selecciona un Juego”, con degradado amarillo → rojo → naranja.
- **Grid:** 3 cards (`h-96`, `rounded-3xl`) con imagen de fondo, degradado a `#0b0d12` y hover con elevación.
- **Badge de directos:** `#live-badge` se alimenta de `data/live.json` y cuenta los streams de LoL (`21779`), Valorant (`516575`) y CS2 (`32399`). Sin streams muestra `SIN DIRECTOS AHORA`; si falla la carga, `ESTADO NO DISPONIBLE`.
- **Cards:**
  - League of Legends: badge `MOBA`, acento amarillo.
  - Valorant: badge `TACTICAL SHOOTER`, acento rojo.
  - CS2: badge `FPS FACEIT`, acento naranja.
- Cada card muestra una descripción corta y el CTA `Ver Ranking`.
- **Footer:** texto de copyright y aviso de proyecto de entretenimiento.

---

## 6. League of Legends (`lol.html`)

### 6.1 Estructura

1. Header + nav.
2. Sub-pestañas: `SOLOQ RANKING` (activa) y `EQUIPOS & CLASH`.
3. Widgets de stream en 3 paneles.
4. Podio Top 3.
5. Barra de herramientas.
6. Tabla de ranking.
7. Modal de jugador.

### 6.2 Podio

- 3 cards con `👑`, `🥈`, `🥉`.
- Bordes `yellow-500/50`, `slate-400/50` y `amber-600/50`.
- Muestra nombre, tag, tier, LP, winrate y V/D.

### 6.3 Barra de herramientas

- Buscador por nombre o tag (`#search-input`, `applyFilters()`).
- Contador de jugadores (`#player-count`).
- Filtros de rol: `TODOS`, `TOP`, `JUNGLE`, `MID`, `ADC`, `SUPPORT`.
- El filtro activo usa `#f59e0b`.

### 6.4 Tabla

Columnas reales (10):

`#` · `Streamer` · `Rol` · `Elo` · `V / D` · `Racha` · `±LP (Media)` · `Aegis` · `Shells` · `Stats`

- `Elo` muestra LP y tier/división.
- `V / D` incluye winrate y barra de progreso.
- `Racha` es una sparkline SVG.
- `±LP (Media)` muestra ganancia y pérdida.
- `Aegis` y `Shells` son **valores estáticos** de la maqueta (`24` y `0h`) y todavía no se alimentan de datos.
- `Stats` enlaza a OP.GG.

### 6.5 Modal de jugador

Dos pestañas:

- **Stats & Historial:** campeones más jugados y últimas partidas.
- **Diagnóstico de Errores (Ficha Pro):**
  - Puntos fuertes y débiles.
  - Métricas: `CSD@10`, `GD@10`, eficiencia oro/daño y visión/min.
  - Tabla de telemetría: campeón, KDA, CS/m, CSD@10, KP%, daño% y visión/m.

El modal muestra rank, nombre, tag y tier/LP.

---

## 7. Valorant (`valorant.html`)

### 7.1 Estructura

1. Header + nav.
2. Sub-pestañas: `SOLOQ RANKING` (activa) y `EQUIPOS & PREMIER`.
3. Widgets de stream en 3 paneles.
4. Podio Top 3.
5. Barra de herramientas.
6. Tabla de ranking.
7. Modal de jugador.

### 7.2 Podio

- 3 cards con `👑`, `🥈`, `🥉`.
- Muestra nombre, tag, rango/RR, winrate y V/D.

### 7.3 Barra de herramientas

- Botón `GUÍA DE LINEUPS` → `valorantLineups.html`.
- Filtros de ELO: `TODOS`, `HIGH ELO`, `LOW ELO`.
  - `HIGH ELO`: RR absoluto ≥ 1800 (Ascendente o superior).
  - `LOW ELO`: RR absoluto < 1800.
- Buscador por nombre o tag (`#search-input`).
- Contador de jugadores (`#player-count`).
- Filtros de estado: `LIVE` y `EN PARTIDA`.
  - `LIVE` usa `isLive`.
  - `EN PARTIDA` usa `inGame`; si el dato no existe, no devuelve jugadores.
  - Son conmutables: al volver a pulsar el filtro activo se desactiva y se muestran todos.
- Filtros de rol: `TODOS`, `Duelista`, `Iniciador`, `Controlador`, `Centinela`.

### 7.4 Tabla

Columnas reales (9):

`#` · `Streamer` · `Rol` · `Rango / RR` · `V / D` · `Racha` · `±RR` · `K/D` · `Stats`

- `Rango / RR` muestra RR y tier/división.
- `Racha` es una sparkline SVG.
- `K/D` se muestra en una píldora.
- `Stats` enlaza a Tracker.gg.

### 7.5 Modal de jugador

Dos pestañas:

- **Stats & Historial:** agentes más jugados y últimas partidas.
- **Diagnóstico de Errores (Ficha Pro):**
  - Puntos fuertes y débiles.
  - Métricas: K/D promedio, ACS, headshot % y ADR.
  - Tabla de telemetría: agente, KDA, ACS, mapa, HS%, ADR y first bloods.

El modal muestra rank, nombre, tag y tier/RR.

---

## 8. CS2 (`cs2.html`)

### 8.1 Estructura

1. Header + nav con acento naranja.
2. Widgets de stream en 3 paneles.
3. Podio Top 3.
4. Barra de herramientas.
5. Tabla de ranking.

### 8.2 Datos

- `data/cs2Data.js` define el `gameData` de CS2 con 3 jugadores de ejemplo.
- `data/cs2.js` carga `data/live.json`, filtra streams de CS2 por `game_id` (`32399`) o `game_name`, sincroniza `isLive`/`viewers` y actualiza la interfaz.

### 8.3 Barra de herramientas

- Buscador por nombre o tag.
- Contador de jugadores.
- Filtros de ELO: `TODOS`, `HIGH ELO` (≥ 18.000 pts), `LOW ELO` (< 18.000 pts).
- Filtros de estado: `LIVE` y `EN PARTIDA` (usan `isLive` / `inGame`; conmutables).
- Filtros de plataforma: `TODAS`, `PREMIER`, `FACEIT`.

### 8.4 Tabla

Columnas reales (9):

`#` · `Streamer` · `Rating 2.0` · `Rating CS / Elo` · `V / D` · `Racha` · `±Rating` · `ADR` · `Stats`

- `Stats` enlaza a CSStats (`statsUrl` o `https://csstats.gg/`).
- El estado `LIVE`/`OFFLINE` se pinta según `isLive`.

---

## 9. Vistas de equipos

### 9.1 `equiposLol.html` y `equiposValorant.html`

- Header + nav.
- Sub-pestañas: ranking y equipos.
- Control interno: `EQUIPOS` / `BUSCO EQUIPO (LFT)`.
- Buscador por nombre, tag o nota.
- Filtro por rol.
- Filtro por estado: `Todos`, `Buscando Jugadores (Tryouts)`, `Roster Completo`. En la pestaña LFT, `Tryouts` equivale a jugadores con estado `BUSCANDO`.
- **Equipos:** cards con tag, nombre, división, estado, roles buscados y roster.
- **LFT:** tabla con jugador, estado, rango, rol principal, rol secundario, notas y contacto (Twitter/Twitch).

### 9.2 Sincronización de rango

- `getPlayerRankLoL` y `getPlayerRankVal` leen de `gameData.players` (`tierName`, `rankTier`, `elo`).
- Si el jugador no existe, usan el rango de respaldo.

### 9.3 Datos de ejemplo

- `data/lolEquiposData.js` incluye un equipo de ejemplo y un jugador LFT.
- `data/valorantEquiposData.js` incluye un equipo de ejemplo y un jugador LFT.

---

## 10. Guía de lineups (`valorantLineups.html`)

- Header + nav + botón `VER RANKING`.
- Buscador de lineups y contador.
- Filtros:
  - Mapa: Ascent, Bind, Haven, Lotus, Sunset, Icebox, Breeze, Abyss.
  - Bando: Todos, Ataque, Defensa.
  - Agente: selector.
  - Sitio: Todos, A, B, C, MID.
- Grid de cards con imagen, bando, sitio, mapa, agente y tipo de habilidad.
- Modal con:
  - Título, mapa, agente, bando y descripción.
  - Vídeo embebido de TikTok, YouTube o Twitch; si no hay vídeo, imagen.
  - Soporte para vídeo MP4 directo.
- Datos: `Valorant/ValorantLineups/Mapas/<Mapa>/<mapa><Agente>.json`.
- Los archivos que no existen se ignoran (404 tolerado).

---

## 11. Widgets de stream (comunes)

Las vistas de juego comparten un bloque de 3 paneles:

1. **Izquierdo:** contador de espectadores (`#total-viewers`) y descripción del reto.
2. **Central:** reproductor de Twitch (`#twitch-embed`) y nombre del streamer actual (`#streamer-current-name`).
3. **Derecho:** lista de streams activos (`#streamers-list`), con clic para cambiar de canal.

### 11.1 Fuente de datos

- `data/live.json` contiene `{ "data": [...] }`.
- Cada stream puede incluir `user_login`, `user_name`, `viewer_count`, `game_name` y `game_id`.
- Filtros por juego:
  - LoL: `game_name === 'league of legends'`.
  - Valorant: `game_name === 'valorant'`.
  - CS2: `game_id === '32399'` o `game_name === 'counter-strike 2'`.
- Si no hay streams, el reproductor muestra un mensaje y el contador queda en 0.
- `data/live.json` está actualmente vacío (`{"data":[]}`), por lo que las vistas muestran el estado sin directo hasta que el workflow lo rellene.

---

## 12. Datos y limitaciones conocidas

- **Aegis / Shells (LoL):** valores estáticos de maqueta.
- **`EN PARTIDA` (Valorant/CS2):** requiere que el jugador tenga `inGame: true`; los datos actuales no siempre incluyen ese campo.
- **`gameData` de Valorant:** algunos jugadores pueden aparecer como `Sin datos` si la API no devuelve rango.
- **CS2:** los 3 jugadores de `data/cs2Data.js` son datos de ejemplo; no hay integración automática de ranking como en LoL/Valorant.
- **Equipos LoL:** el roster de ejemplo es mínimo; los equipos reales deben añadirse en `data/lolEquiposData.js`.
- **Lineups:** se hacen muchas peticiones (mapas × agentes); los 404 se toleran. Ahora mismo solo existe `Valorant/ValorantLineups/Mapas/Ascent/ascentSova.json`; las imágenes referenciadas pueden no existir y se sustituyen por un SVG local de respaldo.

---

## 13. Reglas de consistencia

1. Usar `#0b0d12` como fondo base y `#080a0e` para headers.
2. Usar `#121620` para cards y `#1e2638` para bordes en las vistas principales.
3. Usar el acento del juego para tabs activas, badges y CTAs.
4. Mantener `rounded-2xl` en paneles/tablas y `rounded-3xl` en las cards del hub.
5. Los estados activos deben combinar fondo translúcido, borde y texto del acento.
6. Las tablas deben incluir scroll horizontal y columnas alineadas al centro cuando son métricas.
7. Los modales deben abrirse con `flex` y cerrarse con `hidden`, y permitir cierre por botón, fondo y `Escape` cuando aplique.

---

## 14. Mapa de archivos

```text
index.html                  Hub de selección
lol.html                    Ranking LoL + modal
valorant.html               Ranking Valorant + modal
cs2.html                    Ranking CS2
equiposLol.html             Equipos/Clash + LFT LoL
equiposValorant.html        Equipos/Premier + LFT Valorant
valorantLineups.html        Guía de lineups

data/live.json              Streams activos de Twitch
data/lolData.js             Datos de jugadores LoL
data/valorantData.js        Datos de jugadores Valorant
data/cs2Data.js             Datos de ejemplo CS2
data/cs2.js                 Carga de streams CS2
data/twitch.js              Utilidades de Twitch
data/lolEquiposData.js      Equipos/LFT LoL
data/valorantEquiposData.js Equipos/LFT Valorant
Valorant/ValorantLineups/   JSON de lineups por mapa/agente
```
