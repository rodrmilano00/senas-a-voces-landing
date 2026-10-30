# Señas a Voces Academy — Landing

Landing page de Señas a Voces Academy (LSM + IA) migrada de un `index.html` estático a
**Vite + React + Tailwind CSS v4**, con animaciones GSAP.

## Stack

- [Vite](https://vite.dev) + React 19
- [Tailwind CSS v4](https://tailwindcss.com) (vía `@tailwindcss/vite`)
- [GSAP](https://gsap.com) + ScrollTrigger para animaciones

## Scripts

```bash
npm install      # instala dependencias
npm run dev      # servidor de desarrollo
npm run build    # build de producción a dist/
npm run preview  # sirve el build de producción
npm run lint     # ESLint
```

## Estructura

```
src/
  components/     # Nav, Hero, Products, Community, Team, Contact, Footer, Button, Eyebrow, SectionHeading
  lib/            # content.js (datos), gsap.js (registro de plugin)
  index.css       # tokens de diseño (variables CSS) y base Tailwind
  App.jsx
```

## Tema

Los colores se definen como variables CSS en `src/index.css` bajo `:root`
y se exponen a Tailwind con `@theme inline` (`bg-bg`, `text-fg`, `text-primary`, etc.).

## Logo

`public/logo.svg` es un **placeholder**. Reemplázalo por el logo real (o ajusta `LOGO_SRC`
en `src/lib/content.js`).
