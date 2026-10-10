# Motion & Animation Guidelines (Emil Kowalski Standards)

Las animaciones y micro-interacciones en `index.html`, `lol.html` y `valorant.html` deben priorizar la fluidez y la respuesta visual inmediata.

## 1. Reglas de Rendimiento (60 FPS)
- Animar exclusivamente propiedades de alto rendimiento: `transform` y `opacity`.
- **Prohibido** animar `width`, `height`, `top` o `left` en bucles o transiciones de hover para evitar tirones (*layout shifts*).

## 2. Curvas de Aceleración (Easing)
- Para modales, apertura de paneles o transiciones de carga: 
  `transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);`
- Para micro-interacciones de botones, hovers en filas de tablas o iconos: 
  `transition: all 0.15s cubic-bezier(0.2, 0, 0, 1);`

## 3. Comportamientos Visuales por Juego
- **Valorant:** Transiciones mecánicas, rápidas y punzantes. Efectos hover con desplazamiento leve en diagonal y destellos rojos característicos.
- **League of Legends:** Transiciones más sobrias y elegantes, con halos sutiles en tonos dorados/hextech al interactuar con las filas del ranking o las tarjetas de podio.

## 4. Accesibilidad
- Incluir obligatoriamente la directiva de reducción de movimiento:
  ```css
  @media (prefers-reduced-motion: reduce) {
    *, ::before, ::after {
      animation-duration: 0.01ms !important;
      transition-duration: 0.01ms !important;
    }
  }
