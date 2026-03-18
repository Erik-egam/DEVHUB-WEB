# DEVHUB Landing Page

Landing page oficial de DEVHUB, una comunidad de desarrolladores enfocada en el aprendizaje práctico mediante proyectos reales.

## Tech Stack

- **React** 18.2.0
- **Vite** 5.1.6
- **Tailwind CSS** 3.4.1
- **Lucide React** (iconos)

## Requisitos

- Node.js 18+
- pnpm (recomendado) o npm

## Instalación

```bash
pnpm install
# o con npm
npm install
```

## Scripts Disponibles

| Comando | Descripción |
|---------|-------------|
| `pnpm dev` | Inicia el servidor de desarrollo |
| `pnpm build` | Construye la app para producción |
| `pnpm preview` | Previsualiza la build de producción |
| `pnpm lint` | Ejecuta el linter |

## Estructura del Proyecto

```
src/
├── components/
│   ├── ui/              # Componentes UI reutilizables
│   │   ├── GradientText.jsx
│   │   ├── PrimaryButton.jsx
│   │   ├── Card.jsx
│   │   └── index.js
│   └── sections/        # Secciones de la página
│       ├── Navbar.jsx
│       ├── Hero.jsx
│       ├── About.jsx
│       ├── HowItWorks.jsx
│       ├── Benefits.jsx
│       ├── Projects.jsx
│       ├── Community.jsx
│       ├── CTA.jsx
│       ├── Footer.jsx
│       └── index.js
├── hooks/               # Hooks personalizados
│   ├── useScrollPosition.js
│   └── index.js
├── constants/           # Constantes y datos
│   ├── app.js
│   └── index.js
├── App.jsx              # Componente principal
└── main.jsx            # Entry point
```

## Arquitectura

### Componentes UI (`src/components/ui/`)
Componentes genéricos y reutilizables:
- `GradientText` - Texto con gradiente
- `PrimaryButton` - Botón principal con variantes
- `Card` - Tarjeta con efectos hover

### Secciones (`src/components/sections/`)
Secciones específicas de la landing page. Cada sección es un componente independiente.

### Hooks (`src/hooks/`)
Lógica reutilizable:
- `useScrollPosition` - Detecta posición del scroll

### Constantes (`src/constants/`)
Datos estáticos separados de la lógica:
- `app.js` - Configuración general, textos, links

## Tecnologías

- React 18
- Tailwind CSS
- Lucide React (iconos)

## Contribución

1. Fork del repositorio
2. Crear branch (`git checkout -b feature/nueva-feature`)
3. Commit (`git commit -m 'Add nueva feature'`)
4. Push (`git push origin feature/nueva-feature`)
5. Abrir Pull Request

## Licencia

MIT
