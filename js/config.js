/*
 * ============================================================
 *  CONFIGURACIÓN DEL PORTAFOLIO — JAIR SBA
 *  Completa aquí tus datos. No hace falta tocar el HTML.
 *
 *  Regla: si un valor queda vacío (""), el botón o enlace
 *  correspondiente NO se muestra. Así nunca hay botones rotos.
 * ============================================================
 */
window.PORTFOLIO_CONFIG = {
    // Correo de contacto, p. ej. "nombre@correo.com"  → PENDIENTE
    email: "ballesterosamayaj@gmail.com",

    // URL completa de LinkedIn, p. ej. "https://www.linkedin.com/in/tu-usuario" → PENDIENTE
    linkedin: "https://www.linkedin.com/in/jair-steven-ballesteros-amaya-76a493310",

    // Ruta a tu hoja de vida dentro del proyecto. → PENDIENTE
    // Coloca el PDF en assets/cv/ y escribe su ruta, p. ej. "assets/cv/CV-Jair-Steven-Ballesteros.pdf"
    cv: "assets/cv/CV-Jair-Steven-Ballesteros.pdf",

    // Certificados. Si subes el PDF a assets/certificados/, escribe su ruta aquí
    // y aparecerá el enlace «Ver certificado».
    certificates: {
        english: ""   // PENDIENTE, p. ej. "assets/certificados/ingles-b2.pdf"
    },

    // GitHub (real)
    github: "https://github.com/Jairsstevenball",

    // Enlaces de cada proyecto. demo = «Ver proyecto», repo = «Ver código».
    projects: {
        lifeos: {
            demo: "",   // PENDIENTE: enlace de descarga, tienda o demo
            repo: ""    // PENDIENTE: repositorio público de LifeOS
        },
        pediamotion: {
            demo: "",   // PENDIENTE
            repo: ""    // PENDIENTE
        },
        proagro: {
            demo: "",   // PENDIENTE: APK, video o demo
            repo: ""    // PENDIENTE
        },
        portafolio: {
            // Si activas GitHub Pages, sería:
            // "https://jairsstevenball.github.io/Proyecto-final-maquetaci-n-web/"
            demo: "",
            repo: "https://github.com/Jairsstevenball/Proyecto-final-maquetaci-n-web"
        }
    },

    // Capturas que se muestran con el botón «Ver capturas».
    // Para añadir una: guarda la imagen en assets/projects/ y agrega { src, alt }.
    galleries: {
        lifeos: {
            title: "LifeOS",
            shots: [
                { src: "assets/projects/lifeos-inicio.webp", alt: "Inicio de LifeOS con el resumen del día, accesos rápidos y hábitos" },
                { src: "assets/projects/lifeos-gym.webp", alt: "Módulo Gym con la rutina del día y sus ejercicios" },
                { src: "assets/projects/lifeos-estudios.webp", alt: "Módulo Estudios con materias y su avance" }
            ]
        },
        pediamotion: {
            title: "PediaMotion",
            shots: [
                { src: "assets/projects/pediamotion-inicio.webp", alt: "Inicio de PediaMotion con evaluaciones y actividad reciente" },
                { src: "assets/projects/pediamotion-reportes.webp", alt: "Reportes con el promedio por factor psicomotor" }
            ]
        },
        proagro: {
            title: "PROAGRO",
            shots: [
                { src: "assets/projects/proagro-inicio-sesion.webp", alt: "Pantalla de bienvenida de PROAGRO" },
                { src: "assets/projects/proagro-inicio.webp", alt: "Inicio de PROAGRO con Mi cultivo, AgroBot, Riego, Producción y Mercado" },
                { src: "assets/projects/proagro-mercado.webp", alt: "Mercado de cosechas e insumos" }
            ]
        }
    }
};
