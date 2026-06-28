import type { Route } from "@/types";

export const routes = {
  home: "/",
  app: "/app",
  webSaas: "/web-saas",
  precios: "/precios",
  diagnostico: "/diagnostico",
  diagnosticoProcesando: "/diagnostico/procesando",
  diagnosticoResultado: "/diagnostico/resultado",
  diagnosticoPlan: "/diagnostico/plan-recomendado",
  aprende: "/aprende",
  contacto: "/contacto",
  miInicio: "/home",
} as const satisfies Record<string, Route>;

export interface NavLink {
  label: string;
  href: Route;
}

export const mainNav: NavLink[] = [
  { label: "Inicio", href: "/" },
  { label: "App", href: "/app" },
  { label: "Web SaaS", href: "/web-saas" },
  { label: "Aprende", href: "/aprende" },
  { label: "Precios", href: "/precios" },
  { label: "Contacto", href: "/contacto" },
];

export const footerNav: { title: string; links: NavLink[] }[] = [
  {
    title: "Producto",
    links: [
      { label: "SUMAUP360 App", href: "/app" },
      { label: "Web SaaS ERP", href: "/web-saas" },
      { label: "Precios", href: "/precios" },
      { label: "Diagnóstico tributario", href: "/diagnostico" },
    ],
  },
  {
    title: "Aprende",
    links: [
      { label: "Centro Aprende", href: "/aprende" },
      { label: "Formalización", href: "/aprende" },
      { label: "SUNAT", href: "/aprende" },
      { label: "Finanzas personales", href: "/aprende" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { label: "Inicio", href: "/" },
      { label: "Mi inicio", href: "/home" },
      { label: "Contacto", href: "/contacto" },
    ],
  },
  {
    title: "Contacto",
    links: [
      { label: "Solicitar demo", href: "/contacto" },
      { label: "Lista de espera App", href: "/contacto" },
      { label: "Escríbenos", href: "/contacto" },
    ],
  },
];

export const legalNav: NavLink[] = [
  { label: "Política de Privacidad", href: "/privacidad" },
  { label: "Términos y Condiciones", href: "/terminos" },
  { label: "Política de Cookies", href: "/cookies" },
];
