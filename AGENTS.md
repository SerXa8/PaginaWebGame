# AGENTS.md - PaginaWebGame Project Guidelines

## 🚀 Project Overview
This repository (**PaginaWebGame**) contains multi-game web views (`index.html`, `lol.html`, `valorant.html`, `torneoValorant.html`) built as self-contained single files with embedded CSS and vanilla JavaScript.

## 📁 Repository Structure
- `docs/master-rules.md`: Centralized master design system, architecture guidelines, and motion rules.
- `*.html`: Standalone web views containing their own HTML, CSS styles, and JS logic.

## 🎨 Design Systems & Theme Guidelines
- **Global Hub (`index.html`):** Dark hub aesthetics (`#0B0F19`), corporate branding, and live badges (`#FF4655`).
- **League of Legends (`lol.html`):** Epic fantasy aesthetic, Hextech theme, dark backgrounds (`#0B0F19` to `#010A13`), and classic gold accents (`#C89B3C`).
- **Valorant (`torneoValorant.html`, `valorant.html`):** Tactical, industrial, futuristic HUD. Dark navy background (`#0F1923`), sharp-edged containers (`#151D2A`), and Valorant red accents (`#FF4655`).

## ⚡ Motion & Animation Standards (60 FPS)
- Strictly animate high-performance properties: `transform` and `opacity`.
- **Prohibited:** Never animate `width`, `height`, `top`, `left`, or `margin`.
- **Easing:** Use natural curves like `cubic-bezier(0.16, 1, 0.3, 1)` for panels/modals and `cubic-bezier(0.2, 0, 0, 1)` for micro-interactions.
- **Accessibility:** Always include `@media (prefers-reduced-motion: reduce)` to disable animations when requested.

## 💻 JavaScript Best Practices
- Protect all interactive logic with `DOMContentLoaded` and safety checks for element existence (e.g., search inputs like `#buscadorEquipo`).
- Do not introduce heavy external JavaScript libraries unless explicitly requested.
- Avoid `eval()` and prefer safe DOM manipulation methods.

## 🛠️ Development & Workflow Rules
- When modifying or creating views, ensure code remains entirely self-contained within the HTML file unless structured otherwise.
- Respect responsive design principles (testing from mobile `375px` upwards).
- Keep code clean, modular, and performant.