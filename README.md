# JAIR SBA — Portafolio

Portafolio personal de **Jair Steven Ballesteros Amaya**, estudiante de Ingeniería de Software en la Universidad de Cundinamarca. Es la evolución del proyecto final del curso de maquetación web: conserva su identidad (fondo oscuro, degradado turquesa, Kode Mono + Raleway, botones píldora y logo) y la amplía a un portafolio completo.

## Estructura

```
index.html            Página one-page (inicio, sobre mí, tecnologías, proyectos, formación, enfoque, contacto)
style.css             Estilos organizados por secciones, con variables CSS
js/config.js          TUS DATOS: correo, LinkedIn, CV y enlaces de proyectos
js/main.js            Menú móvil, enlaces configurables, animaciones, año automático
assets/               Logo original (y aquí van el CV y las capturas)
```

Sin frameworks ni dependencias: HTML, CSS y JavaScript. Iconos con Remix Icon (interfaz) y Devicon (logos de tecnologías), cargados por CDN.

## Ejecutar en local

Opción 1: abre `index.html` con doble clic.

Opción 2 (recomendada, simula un servidor real):

```bash
python -m http.server 8000
# luego abre http://localhost:8000
```

O usa la extensión **Live Server** de VS Code.

## Datos por completar

Edita `js/config.js`. Si un valor queda vacío, su botón **no se muestra**, así que nunca hay botones rotos.

| Campo | Qué poner |
|---|---|
| `email` | Tu correo de contacto |
| `linkedin` | URL completa de tu perfil |
| `cv` | Ruta del PDF, p. ej. `assets/cv/CV-Jair-Steven-Ballesteros.pdf` (crea la carpeta y copia el archivo) |
| `projects.lifeos.repo` / `demo` | Repositorio público y enlace de descarga o demo de LifeOS |
| `projects.proagro.repo` / `demo` | Documento, repositorio o demo de PROAGRO |
| `projects.portafolio.demo` | URL de GitHub Pages, si lo publicas |
| `certificates.english` | Ruta del PDF de tu certificado de inglés B2, p. ej. `assets/certificados/ingles-b2.pdf` |

## Capturas de proyectos

Las capturas están en `assets/projects/` (formato `.webp`). Cada tarjeta muestra una portada (`*-cover.webp`) y el botón «Ver capturas» abre las pantallas listadas en `galleries` dentro de `js/config.js`.

Para añadir una captura: guárdala en `assets/projects/` (unos 540 px de ancho) y agrega `{ src, alt }` a la galería del proyecto. Antes de publicarla, oculta datos personales de terceros.

## Añadir un proyecto nuevo

En `index.html` hay una plantilla comentada (`PLANTILLA PARA UN NUEVO PROYECTO`). Cópiala, cambia los textos y agrega sus enlaces en `js/config.js`.

## Publicar con GitHub Pages

Repositorio → **Settings → Pages** → Source: `Deploy from a branch` → rama `main`, carpeta `/ (root)`. La web quedará en `https://jairsstevenball.github.io/Proyecto-final-maquetaci-n-web/`.
