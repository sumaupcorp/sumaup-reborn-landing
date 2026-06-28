import type { AppFeature, AppSegment } from "@/types";

export const appFeatures: AppFeature[] = [
  {
    id: "diagnostico",
    name: "Diagnóstico tributario",
    description:
      "Conoce tu situación frente a SUNAT en minutos y recibe una orientación inicial según tu actividad.",
    icon: "Stethoscope",
  },
  {
    id: "ingresos",
    name: "Registro de ingresos",
    description:
      "Registra tus ingresos de forma ordenada y mantén tu información lista para declarar.",
    icon: "TrendingUp",
  },
  {
    id: "gastos",
    name: "Registro de gastos",
    description:
      "Controla tus gastos deducibles y entiende cuánto puedes ahorrar cada mes.",
    icon: "Receipt",
  },
  {
    id: "declaraciones",
    name: "Declaraciones SUNAT",
    description:
      "Prepara y organiza tus declaraciones mensuales y anuales sin complicaciones.",
    icon: "FileCheck2",
  },
  {
    id: "alertas",
    name: "Alertas SUNAT",
    description:
      "Recibe avisos de vencimientos y obligaciones para no pagar multas innecesarias.",
    icon: "BellRing",
  },
  {
    id: "asistente",
    name: "Asistente IA Suma",
    description:
      "Resuelve tus dudas tributarias con Suma, tu asistente inteligente disponible cuando lo necesites.",
    icon: "Sparkles",
  },
  {
    id: "soporte",
    name: "Soporte WhatsApp",
    description:
      "Habla con nuestro equipo por WhatsApp y recibe ayuda cuando más lo necesitas.",
    icon: "MessageCircle",
  },
];

export const appSegments: AppSegment[] = [
  {
    id: "taxistas",
    name: "Taxistas corporativos",
    description:
      "Organiza tus ingresos por viajes y cumple con SUNAT desde el celular.",
    icon: "Car",
  },
  {
    id: "repartidores",
    name: "Repartidores",
    description:
      "Lleva el control de tus ganancias de delivery y declara sin perder tiempo.",
    icon: "Bike",
  },
  {
    id: "freelancers",
    name: "Freelancers",
    description:
      "Emite recibos por honorarios y ordena tus finanzas como independiente.",
    icon: "Laptop",
  },
  {
    id: "profesionales",
    name: "Profesionales independientes",
    description:
      "Gestiona tus honorarios, gastos y declaraciones en un solo lugar.",
    icon: "Briefcase",
  },
  {
    id: "nuevo-rus",
    name: "Nuevo RUS",
    description:
      "Cumple con tu cuota mensual y mantén tu negocio en regla fácilmente.",
    icon: "Store",
  },
];
