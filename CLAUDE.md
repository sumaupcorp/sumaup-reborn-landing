@AGENTS.md

# SUMAUP360 — Contexto principal del proyecto

## Qué es SUMAUP360

SUMAUP360 es un ecosistema **fintech / legaltech peruano**. El objetivo de este repositorio
es construir su **landing corporativa** y la base del producto web.

## Líneas de negocio

SUMAUP360 tiene dos líneas de negocio claramente diferenciadas:

1. **SUMAUP360 App** — la aplicación móvil del ecosistema.
2. **SUMAUP360 Web SaaS** — la plataforma web en formato SaaS.

La comunicación, la arquitectura de la información y la landing deben dejar claras ambas líneas
sin mezclarlas ni confundir al usuario.

## Objetivo de la landing

La landing debe ser **corporativa, moderna, responsive, clara y profesional**. Debe transmitir
confianza (es fintech/legaltech) y a la vez verse juvenil, fresca y premium.

## Reglas de diseño obligatorias

- **Fondo principal: blanco puro.**
- **No** modo oscuro.
- **No** theme switcher.
- **No** emojis (en UI ni en contenido).
- **No** lorem ipsum: todo el texto debe ser contenido real en español.
- **No** imágenes externas: solo assets locales del repositorio.
- Usar la mascota **Suma** como guía visual a lo largo de la experiencia.
  - Suma es un **mono azul**: amigable, inteligente, moderno y energético.

## Assets

Todos los recursos visuales se sirven desde carpetas locales en `public/`:

- `public/suma` — mascota Suma (poses, expresiones, variantes).
- `public/illustrations` — ilustraciones de apoyo.
- `public/icons` — iconografía propia.
- `public/brand` — logos, isotipos y material de marca.
- `public/mockups` — capturas y mockups de App y Web SaaS.

No se permiten imágenes externas (URLs de terceros, CDNs de stock, etc.).

## Stack técnico

- **Next.js** (lee los docs en `node_modules/next/dist/docs/` antes de escribir código: esta
  versión tiene breaking changes respecto a lo conocido).
- **TypeScript**
- **Tailwind CSS**
- **shadcn/ui**
- **lucide-react** (iconos)
- **Framer Motion** (animaciones)

## Tipografía

- **Manrope** — fuente base (cuerpo, UI, párrafos).
- **Sora** — H1 y titulares grandes.

## Responsive

- **Prioridad absoluta: mobile first.**
- La web debe verse perfecta en **móvil, tablet y desktop**.
- Breakpoints de referencia: 360px, 390px, 768px, 1280px.
- Cero overflow horizontal.

## Flujo de trabajo

- Ejecutar `npm run build` al terminar cambios importantes.
- Ejecutar `npm run lint` cuando exista.
- Mantener código limpio y componentes reutilizables.

## Subagentes disponibles (`.claude/agents/`)

- `product-architect` — arquitectura, rutas, flujos, secciones, precios, diagnóstico, SEO.
- `ui-pro-max` — diseño de interfaces premium, modernas y no genéricas.
- `suma-assets-director` — escaneo y mapeo de uso de assets.
- `frontend-builder` — implementación en Next.js + TS + Tailwind + shadcn/ui.
- `qa-web-tester` — QA de build, lint, responsive, accesibilidad y consistencia.

## Paleta (implementada en `globals.css` como tokens shadcn)

- Negro corporativo `#05070D` → `text-brand-ink` / `--foreground`
- Azul corporativo `#0B5BFF` → `bg-brand-blue` / `--primary`
- Azul eléctrico `#1E8FFF` → `brand-electric` / `--ring`
- Celeste `#33D1FF` → `brand-sky`
- Blanco `#FFFFFF` → `--background`
- Fondo alterno `#F8FAFC` → `bg-brand-soft` / `--secondary` / `--muted`
- Texto secundario `#64748B` → `--muted-foreground`
- Borde claro `#E2E8F0` → `--border`
- Acento `#EAF2FF` → `bg-accent` (con `accent-foreground` azul)

## Rutas implementadas

`/` · `/app` · `/web-saas` · `/precios` · `/diagnostico` ·
`/diagnostico/procesando` · `/diagnostico/resultado` ·
`/diagnostico/plan-recomendado` · `/aprende` · `/contacto` · `/home`

## Mapa de carpetas (src)

- `app/` — rutas (App Router, Next 16).
- `components/layout/` — Navbar, MobileNav, Footer, PageShell.
- `components/sections/` — Hero, ProductChoice, AppModule, AppPricing, WebSaasModule, ERPCategories, ERPModules, ERPPricing, AICRMAddon, LearnPreview, Testimonials, FAQ, FinalCTA.
- `components/diagnosis/` — flujo de diagnóstico (5 pasos) + resultado + plan.
- `components/forms/` — DemoForm, WaitlistForm (react-hook-form + zod + honeypot).
- `components/home/` — HomeWithDiagnosis, HomeWithoutDiagnosis, RecommendedPlanBanner, HomeView.
- `components/common/` — SumaImage, Icon, Container/Section, Reveal (Framer Motion), PlanCard, etc.
- `lib/` — assets, site-copy, pricing, diagnosis, storage, faq, learn, erp, app-features, seo, routes.
- `types/` — tipos centrales.

Nota: `lib/assets.ts` es la única fuente de rutas de imagen. Assets inexistentes
(`illustrations/`, `brand/`, `mockups/`) usan fallback con lucide-react.

## Skills disponibles (`.claude/skills/`)

- `sumaup-design-system` — reglas del sistema de diseño.
- `suma-assets-map` — uso de la mascota Suma e ilustraciones.
- `sumaup-diagnostico-web` — lógica del diagnóstico web de 5 pasos.
- `sumaup-web-test` — checklist de testing.
- `caveman-context` — resumen corto del estado del proyecto para ahorrar tokens.
