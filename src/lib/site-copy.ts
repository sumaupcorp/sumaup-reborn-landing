// Textos centrales de la landing (en español, sin lorem ipsum).

export const hero = {
  badge: "Ecosistema fintech y legaltech peruano",
  titleLead: "Gestiona tus impuestos, finanzas y negocio desde",
  titleAccent: "un solo ecosistema",
  title: "Gestiona tus impuestos, finanzas y negocio desde un solo ecosistema",
  subtitle:
    "SUMAUP360 ayuda a trabajadores independientes y negocios a organizar sus operaciones, cumplir con SUNAT y crecer con herramientas digitales.",
  badges: [
    "App para RUC 10",
    "ERP web para negocios",
    "Diagnóstico tributario",
    "SUNAT y facturación",
  ],
  ctas: {
    app: "Ver App",
    webSaas: "Ver Web SaaS",
    diagnostico: "Hacer diagnóstico gratis",
  },
  social: "Confianza de independientes y negocios en todo el Perú",
  metrics: [
    { value: 120, suffix: "K+", label: "Comprobantes emitidos", icon: "FileText" },
    { value: 98, suffix: "%", label: "Cumplimiento a tiempo", icon: "CheckCircle2" },
    { value: 5000, suffix: "+", label: "Usuarios activos", icon: "Users" },
  ] as const,
};

export const productChoice = {
  title: "Dos productos, un mismo ecosistema",
  subtitle:
    "Elige la herramienta que se ajusta a tu actividad. Ambas comparten el respaldo de SUMAUP360 y el asistente IA Suma.",
  app: {
    name: "SUMAUP360 App",
    description:
      "Aplicación móvil para personas naturales con RUC 10. Cumple con SUNAT desde tu celular.",
    segments:
      "Taxistas corporativos, repartidores, freelancers, profesionales independientes y Nuevo RUS.",
    cta: "Ver planes App",
  },
  webSaas: {
    name: "SUMAUP360 Web SaaS",
    description:
      "ERP modular basado en web para negocios. Gestiona ventas, inventario y facturación electrónica.",
    segments:
      "Restaurantes, bodegas, minimarkets, ferreterías, belleza y lavandería.",
    cta: "Ver planes ERP",
  },
};

export const webSaasIntro = {
  title: "Un ERP modular para negocios peruanos",
  description:
    "ERP modular basado en la nube diseñado para negocios peruanos. Cumplimiento SUNAT integrado. Facturación electrónica certificada. Escalable desde una bodega hasta una cadena de minimarkets.",
};

export const testimonials = [
  {
    quote:
      "Antes perdía horas tratando de entender mis declaraciones. Ahora registro todo desde el celular y voy tranquilo.",
    author: "Carlos M.",
    role: "Taxista corporativo",
  },
  {
    quote:
      "El ERP nos ordenó las ventas y el inventario de las dos sucursales. La facturación electrónica fue lo que más nos ayudó.",
    author: "Lucía R.",
    role: "Dueña de minimarket",
  },
  {
    quote:
      "Como freelance, emitir mis recibos por honorarios y llevar mis gastos en un solo lugar me cambió la rutina.",
    author: "Andrea P.",
    role: "Diseñadora independiente",
  },
];

export const finalCta = {
  title: "Empieza hoy con SUMAUP360",
  subtitle:
    "Haz tu diagnóstico tributario gratis o solicita una demo del ERP. Suma te acompaña en cada paso.",
  primary: "Hacer diagnóstico gratis",
  secondary: "Solicitar demo ERP",
};

export const legalDisclaimer =
  "SUMAUP360 no es una entidad oficial ni está afiliada a SUNAT. La información presentada es de carácter orientativo.";
