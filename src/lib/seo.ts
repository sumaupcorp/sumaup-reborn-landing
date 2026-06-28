import type { Metadata } from "next";

export const siteConfig = {
  name: "SUMAUP360",
  description:
    "Ecosistema fintech y legaltech peruano. App para independientes y ERP web para negocios. Cumple con SUNAT y haz crecer tu actividad.",
  url: "https://sumaup360.pe",
};

const titles: Record<string, { title: string; description: string }> = {
  "/": {
    title: "SUMAUP360 | Gestiona tus impuestos y negocio en Perú",
    description:
      "App para independientes con RUC 10 y ERP web para negocios peruanos. Diagnóstico tributario, facturación y cumplimiento SUNAT en un solo ecosistema.",
  },
  "/app": {
    title: "SUMAUP360 App | Declara a SUNAT desde tu celular",
    description:
      "Diagnóstico tributario, registro de ingresos y gastos, declaraciones y alertas SUNAT con el asistente IA Suma. Para taxistas, repartidores y profesionales independientes.",
  },
  "/web-saas": {
    title: "SUMAUP360 ERP | Sistema para bodegas, restaurantes y más",
    description:
      "ERP modular en la nube con facturación electrónica certificada, Caja POS, inventario, CRM y cumplimiento SUNAT para negocios peruanos.",
  },
  "/precios": {
    title: "Precios SUMAUP360 | Planes App y ERP web",
    description:
      "Conoce los planes de SUMAUP360 App y del ERP web. Empieza gratis o solicita una demo del ERP para tu negocio.",
  },
  "/diagnostico": {
    title: "Diagnóstico tributario | SUMAUP360",
    description:
      "Responde 5 preguntas y recibe una orientación inicial sobre tu situación tributaria y el plan recomendado para ti.",
  },
  "/aprende": {
    title: "Aprende | Tributación y finanzas para emprendedores en Perú",
    description:
      "Guías sobre formalización, SUNAT, Nuevo RUS, RER, MYPE, recibos por honorarios, finanzas personales y emprendimiento.",
  },
  "/contacto": {
    title: "Contacto SUMAUP360 | Solicita una demo o escríbenos",
    description:
      "Solicita una demo del ERP, únete a la lista de espera de la App o escríbenos. Estamos para ayudarte a crecer.",
  },
  "/home": {
    title: "Mi inicio | SUMAUP360",
    description:
      "Tu inicio personalizado en SUMAUP360 según tu diagnóstico tributario.",
  },
  "/privacidad": {
    title: "Política de Privacidad | SUMAUP360",
    description:
      "Conoce cómo SUMAUP360 recopila, usa y protege tus datos personales conforme a la Ley N.° 29733 del Perú.",
  },
  "/terminos": {
    title: "Términos y Condiciones | SUMAUP360",
    description:
      "Términos y condiciones de uso del sitio web, la app y la plataforma Web SaaS de SUMAUP360.",
  },
  "/cookies": {
    title: "Política de Cookies | SUMAUP360",
    description:
      "Información sobre el uso de cookies en el sitio web de SUMAUP360 y cómo gestionarlas.",
  },
};

export function pageMetadata(path: keyof typeof titles): Metadata {
  const entry = titles[path] ?? titles["/"];
  return {
    title: entry.title,
    description: entry.description,
    openGraph: {
      title: entry.title,
      description: entry.description,
      type: "website",
      locale: "es_PE",
      siteName: siteConfig.name,
    },
  };
}
