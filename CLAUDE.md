# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website built with React, TypeScript, Vite, and Material-UI. It showcases professional information including an about section, work experience, certifications, and contact information. The application supports internationalization (i18n) with English and Spanish translations.

## Development Commands

### Essential Commands
- `npm run dev` - Start development server with hot module replacement
- `npm run build` - Build for production (runs TypeScript compiler followed by Vite build)
- `npm run lint` - Run ESLint on TypeScript files with strict rules (max 0 warnings)
- `npm run preview` - Preview production build locally on port 8080

### Development Workflow
- For local development, use `npm run dev`
- Before committing, run `npm run lint` to catch issues
- Build process requires TypeScript compilation to succeed first (`tsc && vite build`)

## Architecture

### Application Structure
The app follows a simple single-page application (SPA) architecture with client-side routing:

1. **Entry Point**: [src/main.tsx](src/main.tsx) initializes React with `BrowserRouter` and `Suspense` for i18n lazy loading
2. **Root Component**: [src/App.tsx](src/App.tsx) renders the persistent `Header` component and `RoutesPage` for route-based content
3. **Routing**: [src/Routes.tsx](src/Routes.tsx) defines all application routes centrally using `react-router-dom`
4. **Navigation**: [src/components/Header.tsx](src/components/Header.tsx) contains the navigation bar with responsive drawer for mobile

### Routing Pattern
Routes are defined as an array of objects in [src/Routes.tsx](src/Routes.tsx):
```typescript
{name:"Home", path:"/", componet:<HomePage/>}
```
Note: The property is misspelled as "componet" (not "component") throughout the routing configuration.

Available routes:
- `/` - Home page with skills showcase
- `/about` - About information
- `/contact` - Contact information
- `/experience` - Work experience timeline
- `/certificates` - Certification gallery with category filtering
- `/projects` - Route defined but not yet implemented

### Internationalization (i18n)
- Configuration: [src/i18n.js](src/i18n.js) using `i18next` with HTTP backend and browser language detection
- Translation files: `public/locales/{en,es}/translation.json`
- Default fallback: English (`en`)
- Translations are loaded asynchronously via HTTP backend from the public folder

### Styling Approach
- Primary: Material-UI's `sx` prop for component-level styling
- Theme: Custom dark theme with `#212129` as the primary background color
- Responsive: Material-UI breakpoints (`xs`, `md`) for responsive layouts
- CSS files: [src/App.css](src/App.css) and [src/index.css](src/index.css) for global styles

### Certificate Management
Certificates are managed through [src/components/certifications/utils.ts](src/components/certifications/utils.ts):
- All certificate data is hardcoded in a `files` array with paths and tags
- Categories: "Amazon Aws", "Data Science", "Programming", "Mathematics", "Machine Learning"
- Utility functions: `getTags()`, `getCertificates(tag)`, `getFileName(path)`
- Images stored in `public/certificates/` directory

## TypeScript Configuration
- Target: ES2020 with strict mode enabled
- Module resolution: bundler mode (Vite-specific)
- Strict linting: `noUnusedLocals`, `noUnusedParameters`, `noFallthroughCasesInSwitch` all enabled
- JSX: `react-jsx` (new JSX transform, no React import needed)

## Key Dependencies
- **UI Framework**: Material-UI v5 with Emotion for styling
- **Routing**: React Router DOM v6
- **Internationalization**: i18next with React bindings, HTTP backend, and language detector
- **Build Tool**: Vite with React plugin
- **PDF Viewer**: `pdf-viewer-reactjs` for certificate viewing

## Navigation Consistency
The navigation paths are duplicated in two files and must be kept in sync:
- [src/components/Header.tsx](src/components/Header.tsx) - Navigation menu items
- [src/Routes.tsx](src/Routes.tsx) - Route definitions

When adding/removing routes, update both files to maintain consistency.

## Deployment
- Base path configured as `/` in [vite.config.ts](vite.config.ts)
- `_redirects` file in public folder suggests deployment to a platform like Netlify
