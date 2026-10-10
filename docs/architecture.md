# Architecture & Code Quality Standards

Dado que el proyecto utiliza archivos independientes autocontenidos (`index.html`, `lol.html`, `valorant.html`) con el CSS y JS integrados, se debe cumplir lo siguiente en cada modificación o generación:

## 1. Estructura del Documento HTML
- Uso de HTML5 semántico (`<header>`, `<main>`, `<section>`, `<table>`, `<footer>`).
- Metadatos de responsive obligatorios en el `<head>` (`viewport`).
- Enlaces correctos de fuentes tipográficas en Google Fonts (como fuentes sans-serif modernas para Valorant y serifas/títulos elegantes para LoL).

## 2. Bloques CSS Internos
- Uso estricto de variables CSS `:root` para los colores principales de cada juego (evitando hardcodear valores repetidos).
- Estilos responsivos probados para resoluciones desde móvil (`375px`) hasta pantallas panorámicas (`1440px+`), asegurando que las tablas colapsen o hagan scroll horizontal limpio sin romper el diseño.

## 3. Bloques JavaScript Internos
- Todo el código interactivo (como el cambio de streams en Twitch al hacer clic en un jugador o los filtros de búsqueda) debe estar protegido mediante `DOMContentLoaded` y comprobaciones de existencia de elementos:
  ```javascript
  document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('#buscadorJugador');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        // Lógica de filtrado de la tabla
      });
    }
  });
