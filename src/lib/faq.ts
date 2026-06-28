import type { FaqCategory, FaqItem } from "@/types";

export const faqCategories: FaqCategory[] = [
  "App",
  "ERP",
  "SUNAT",
  "Facturación",
];

export const faqItems: FaqItem[] = [
  // ----- App -----
  {
    category: "App",
    question: "¿Para quién es SUMAUP360 App?",
    answer:
      "Es para personas naturales con RUC 10: taxistas, repartidores, freelancers, profesionales independientes y negocios del Nuevo RUS que quieren ordenar sus finanzas y cumplir con SUNAT desde el celular.",
  },
  {
    category: "App",
    question: "¿Necesito conocimientos de contabilidad para usarla?",
    answer:
      "No. La app está pensada para personas sin experiencia contable. Te guía paso a paso y el asistente IA Suma resuelve tus dudas en lenguaje sencillo.",
  },
  {
    category: "App",
    question: "¿La app tiene un plan gratuito?",
    answer:
      "Sí. El plan Free incluye el diagnóstico tributario, 10 consultas IA al mes, asesoría básica y soporte por WhatsApp, sin costo.",
  },
  {
    category: "App",
    question: "¿Qué es el asistente IA Suma?",
    answer:
      "Suma es el asistente inteligente de SUMAUP360. Responde tus dudas tributarias, te orienta sobre tus obligaciones y te ayuda a registrar tu actividad de forma más rápida.",
  },
  {
    category: "App",
    question: "¿Puedo usar la app si soy del Nuevo RUS?",
    answer:
      "Sí. La app te ayuda a llevar el control de tu cuota mensual y a mantener tu negocio en regla de forma simple.",
  },
  {
    category: "App",
    question: "¿En qué dispositivos funciona?",
    answer:
      "SUMAUP360 App está diseñada para tu celular, para que gestiones tus impuestos y finanzas estés donde estés.",
  },
  // ----- ERP -----
  {
    category: "ERP",
    question: "¿Qué es SUMAUP360 Web SaaS?",
    answer:
      "Es un ERP modular en la nube para negocios peruanos como restaurantes, bodegas, minimarkets, ferreterías, belleza y lavanderías. Gestiona ventas, inventario, facturación y más desde la web.",
  },
  {
    category: "ERP",
    question: "¿Qué módulos incluye el ERP?",
    answer:
      "Incluye facturación electrónica, Caja POS, inventario, CRM, compras, proveedores, reportes, SUNAT, multiusuario, sucursales, cobranzas, WhatsApp y asistentes IA para ERP y CRM.",
  },
  {
    category: "ERP",
    question: "¿Puedo gestionar varias sucursales?",
    answer:
      "Sí. Desde el plan Emprende puedes administrar varios locales y, en planes superiores, ampliar el número de sucursales y usuarios.",
  },
  {
    category: "ERP",
    question: "¿El ERP sirve para mi rubro?",
    answer:
      "El ERP es modular y se adapta a restaurantes, minimarkets, bodegas, ferreterías, negocios de belleza y lavanderías, entre otros. Activas solo los módulos que necesitas.",
  },
  {
    category: "ERP",
    question: "¿Qué es el complemento de Asistente IA para CRM?",
    answer:
      "Es un add-on independiente que potencia tu CRM con captación de leads, seguimiento automatizado, WhatsApp, chatbot web y gestión de clientes. Va desde S/99 hasta S/150 al mes.",
  },
  {
    category: "ERP",
    question: "¿Necesito instalar algo?",
    answer:
      "No. Al ser un ERP en la nube, trabajas desde el navegador. Solo necesitas conexión a internet.",
  },
  {
    category: "ERP",
    question: "¿Puedo empezar con un plan pequeño y crecer después?",
    answer:
      "Sí. Puedes iniciar con Starter y escalar a Emprende, Pyme o Enterprise a medida que tu negocio crece.",
  },
  // ----- SUNAT -----
  {
    category: "SUNAT",
    question: "¿SUMAUP360 está afiliada a SUNAT?",
    answer:
      "No. SUMAUP360 no es una entidad oficial ni está afiliada a SUNAT. La información que ofrecemos es de carácter orientativo y te ayuda a cumplir con tus obligaciones.",
  },
  {
    category: "SUNAT",
    question: "¿El diagnóstico reemplaza a un contador?",
    answer:
      "No. El diagnóstico es una orientación inicial y no reemplaza la evaluación de un contador. Te da un punto de partida claro sobre tu situación tributaria.",
  },
  {
    category: "SUNAT",
    question: "¿Me ayuda a no pagar multas?",
    answer:
      "Las alertas SUNAT te avisan de vencimientos y obligaciones para que declares a tiempo y reduzcas el riesgo de multas por olvido.",
  },
  {
    category: "SUNAT",
    question: "¿Sirve para declaraciones mensuales y anuales?",
    answer:
      "Sí. Según tu plan, puedes preparar y organizar tus declaraciones mensuales y la declaración anual de forma ordenada.",
  },
  {
    category: "SUNAT",
    question: "¿Qué regímenes contempla?",
    answer:
      "Contemplamos casos frecuentes como recibos por honorarios, Nuevo RUS y actividades de negocio. El diagnóstico te orienta según tu actividad.",
  },
  // ----- Facturación -----
  {
    category: "Facturación",
    question: "¿La facturación electrónica está certificada?",
    answer:
      "Sí. El ERP emite comprobantes electrónicos certificados y válidos ante SUNAT, integrados a tu operación diaria.",
  },
  {
    category: "Facturación",
    question: "¿Qué comprobantes puedo emitir?",
    answer:
      "Puedes emitir facturas y boletas, según tu plan y tu actividad. La app también permite emitir recibos por honorarios.",
  },
  {
    category: "Facturación",
    question: "¿Hay un límite de comprobantes?",
    answer:
      "Cada plan ERP incluye una cantidad de comprobantes al mes (100 en Starter, 300 en Emprende, 1000 en Pyme e ilimitados en Enterprise).",
  },
  {
    category: "Facturación",
    question: "¿Puedo enviar comprobantes por WhatsApp?",
    answer:
      "Sí. El módulo de WhatsApp te permite enviar comprobantes y mensajes a tus clientes de forma rápida.",
  },
];
