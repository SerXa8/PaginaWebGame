# SoloQ Challenge - Multi-Game Design System

Este documento define la identidad visual y los tokens de diseño oficiales para las tres vistas independientes del proyecto (`index.html`, `lol.html`, `valorant.html`).

## 1. Global / Hub Principal (`index.html`)
- **Estética:** Hub central de selección de juegos con cabecera oscura (`#0B0F19`), logotipo corporativo `SOLOQCHALLENGE` y badge flotante de directos activos (`#FF4655`).
- **Cards de Selección:** Tarjetas con bordes sutiles redondeados, fondo oscuro translúcido y preview de contenido (como la tarjeta táctica de CS2/juegos).

## 2. League of Legends View (`lol.html`)
- **Temática:** Fantasía épica, mística y competitiva (Hextech / ELO).
- **Paleta de Colores:**
  - Background General: `#0B0F19` a `#010A13` (Oscuro profundo).
  - Cards / Contenedores: `#111827` con bordes finos oscuros (`#1F2937`).
  - Acentos & Destacados: Dorado clásico de LoL (`#C89B3C`) para ligas, trofeos y botones (`OP.GG`).
  - Badges / Texto: Tonos crema y azules sutiles.
- **Componentes Clave:**
  - Podio superior para el Top 3 (con medallas de oro, plata y bronce).
  - Tabla con métricas específicas de LoL: **ELO / LP (Master, Emerald, Bronze)**, **V / D**, **Racha**, **±LP (Media)**, columnas de **Aegis** y **Shells**, y botón directo a **OP.GG**.

## 3. Valorant View (`valorant.html`)
- **Temática:** Táctica, industrial, futurista y agresiva (HUD / Radiante).
- **Paleta de Colores:**
  - Background General: `#0F1923` (Dark Navy industrial).
  - Cards / Contenedores: `#151D2A` con bordes afilados.
  - Acentos & Destacados: Rojo Valorant (`#FF4655`) para alertas, estados "EN DIRECTO" y botones de acción.
- **Componentes Clave:**
  - Podio superior para el Top 3 (con corona y diseño táctico).
  - Barra de herramientas especializada: Filtros por ELO (`HIGH ELO`, `LOW ELO`), buscador de jugadores y acceso a **Guía de Lineups**.
  - Tabla con métricas específicas de Valorant: **Rango / RR**, **V / D**, **±RR**, **K/D**, y botón directo a **Tracker**.

## 4. Elementos Comunes (Widgets de Stream)
- Ambas páginas de juegos (`lol.html` y `valorant.html`) comparten una estructura superior idéntica:
  - Panel izquierdo: Contador de espectadores totales y descripción del reto.
  - Panel central: Reproductor de Twitch embebido para los directos de los creadores.
  - Panel derecho: Listado lateral de streams activos.
