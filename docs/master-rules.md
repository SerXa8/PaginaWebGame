# SOLOQ CHALLENGE - MASTER RULES & GUIDELINES

Este documento agrupa todas las directrices técnicas, de diseño y de animación obligatorias para el desarrollo y modificación de las vistas del proyecto (`index.html`, `lol.html`, `valorant.html`).

---

## 1. ARCHITECTURE & CODE QUALITY STANDARDS
Dado que el proyecto utiliza archivos independientes autocontenidos con CSS y JS integrados, se debe cumplir estrictamente lo siguiente:

- **Estructura HTML5:** Uso de etiquetas semánticas (`<header>`, `<main>`, `<section>`, `<table>`, `<footer>`) y metadatos de responsive obligatorios en el `<head>` (`viewport`).
- **CSS Interno:** Uso estricto de variables CSS `:root` para los colores principales de cada juego, evitando hardcodear valores repetidos. Diseño responsivo probado desde móvil (`375px`) hasta pantallas panorámicas (`1440px+`).
- **JavaScript Seguro:** Todo el código interactivo (como el cambio de streams en Twitch o filtros de búsqueda) debe estar protegido mediante `DOMContentLoaded` y comprobaciones de existencia de elementos:
  ```javascript
  document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('#buscadorJugador');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        // Lógica de filtrado
      });
    }
  });```

  
- **Dependencias:** No introducir librerías externas pesadas de JavaScript a menos que sea estrictamente necesario.


## 2. MULTI-GAME DESIGN SYSTEM

### A. Global / Hub Principal (`index.html`)
- **Estética:** Hub central de selección de juegos con cabecera oscura (`#0B0F19`), logotipo corporativo `SOLOQCHALLENGE` y badge flotante de directos activos (`#FF4655`).
- **Cards:** Tarjetas con bordes sutiles redondeados, fondo oscuro translúcido y preview de contenido.

### B. League of Legends View (`lol.html`)
- **Temática:** Fantasía épica, mística y competitiva (Hextech / ELO).
- **Paleta de Colores:**
  - Background General: `#0B0F19` a `#010A13` (Oscuro profundo).
  - Cards / Contenedores: `#111827` con bordes finos oscuros (`#1F2937`).
  - Acentos & Destacados: Dorado clásico de LoL (`#C89B3C`) para ligas, trofeos y botones (`OP.GG`).
- **Componentes Clave:** Podio superior para el Top 3 y tabla con métricas específicas: **ELO / LP (Master, Emerald, Bronze)**, **V / D**, **Racha**, **±LP (Media)**, columnas de **Aegis** y **Shells**, y enlace a **OP.GG**.

### C. Valorant View (`valorant.html`)
- **Temática:** Táctica, industrial, futurista y agresiva (HUD / Radiante).
- **Paleta de Colores:**
  - Background General: `#0F1923` (Dark Navy industrial).
  - Cards / Contenedores: `#151D2A` con bordes afilados.
  - Acentos & Destacados: Rojo Valorant (`#FF4655`) para alertas, estados "EN DIRECTO" y botones de acción.
- **Componentes Clave:** Podio superior para el Top 3, barra de herramientas especializada (Filtros `HIGH ELO`/`LOW ELO`, buscador y **Guía de Lineups**), y tabla con métricas: **Rango / RR**, **V / D**, **±RR**, **K/D** y enlace a **Tracker**.

### D. Componentes Comunes de Stream
- **Estructura superior:** Compartida en vistas de juego con panel de espectadores total, reproductor de Twitch embebido en el centro y listado lateral de streams activos.

---

## 3. MOTION & ANIMATION GUIDELINES (EMIL KOWALSKI STANDARDS)

- **Rendimiento 60 FPS:** Animar exclusivamente propiedades de alto rendimiento (`transform` y `opacity`). Prohibido animar `width`, `height`, `top` o `left`.
- **Curvas Easing Naturales:**
  - Paneles, modales y cargas: `transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);`
  - Micro-interacciones y hovers: `transition: all 0.15s cubic-bezier(0.2, 0, 0, 1);`
- **Comportamiento Visual:**
  - *Valorant:* Transiciones rápidas, mecánicas y punzantes con destellos rojos.
  - *League of Legends:* Transiciones fluidas y elegantes con halos dorados/hextech sutiles.
- **Accesibilidad Obligatoria:**
  ```css
  @media (prefers-reduced-motion: reduce) {
    *, ::before, ::after {
      animation-duration: 0.01ms !important;
      transition-duration: 0.01ms !important;
    }
  }
