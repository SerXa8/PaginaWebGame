<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nueva Página Web</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        header {
            background-color: #333;
            color: #fff;
            padding: 1rem;
            text-align: center;
        }
        nav {
            display: flex;
            justify-content: center;
            background-color: #444;
        }
        nav a {
            color: #fff;
            text-decoration: none;
            padding: 0.5rem 1rem;
            transition: background-color 0.3s;
        }
        nav a:hover {
            background-color: #555;
        }
        main {
            padding: 2rem;
        }
        footer {
            background-color: #333;
            color: #fff;
            text-align: center;
            padding: 1rem;
            position: fixed;
            bottom: 0;
            width: 100%;
        }
        @media (prefers-reduced-motion: reduce) {
            * {
                transition: none !important;
                animation: none !important;
            }
        }
    </style>
</head>
<body>
    <header>
        <h1>Nueva Página Web</h1>
    </header>
    <nav>
        <a href="#home">Inicio</a>
        <a href="#about">Acerca de</a>
        <a href="#services">Servicios</a>
        <a href="#contact">Contacto</a>
    </nav>
    <main>
        <section id="home">
            <h2>Bienvenido</h2>
            <p>Esta es una nueva página web con diseño responsive y visualmente atractivo.</p>
        </section>
        <section id="about">
            <h2>Acerca de Nosotros</h2>
            <p>Nos dedicamos a crear sitios web profesionales y funcionales.</p>
        </section>
        <section id="services">
            <h2>Servicios</h2>
            <p>Ofrecemos diseño web, desarrollo web y marketing digital.</p>
        </section>
        <section id="contact">
            <h2>Contacto</h2>
            <p>Para más información, contáctenos a través de nuestro formulario de contacto.</p>
        </section>
    </main>
    <footer>
        <p>&copy; 2023 Nueva Página Web. Todos los derechos reservados.</p>
    </footer>
</body>
</html>