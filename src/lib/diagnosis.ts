import type {
  DiagnosisAnswers,
  DiagnosisQuestion,
  DiagnosisResult,
  Segment,
} from "@/types";

export const TOTAL_STEPS = 5;

export const segmentLabels: Record<Segment, string> = {
  HONORARIOS: "Recibos por honorarios",
  TAXISTA: "Taxista",
  DELIVERY: "Delivery",
  NEGOCIO_RUS: "Negocio Nuevo RUS",
  ALQUILERES: "Alquileres",
  NO_SE: "Aún no estoy seguro",
  UNKNOWN: "Sin definir",
};

export const LEGAL_NOTICE =
  "Esta es una orientación inicial y no reemplaza la evaluación de un contador.";

// ----- Pregunta 1: define el segmento -----

export const segmentQuestion: DiagnosisQuestion = {
  id: "q1_segmento",
  title: "¿Cuál describe mejor tu actividad hoy?",
  help: "Con esto adaptamos las siguientes preguntas a tu caso.",
  options: [
    {
      value: "honorarios",
      label: "Emito recibos por honorarios",
      description: "Profesional o freelance independiente",
      segment: "HONORARIOS",
    },
    {
      value: "taxista",
      label: "Soy taxista",
      description: "Transporte de pasajeros",
      segment: "TAXISTA",
    },
    {
      value: "delivery",
      label: "Hago delivery o reparto",
      description: "Reparto por aplicaciones o propio",
      segment: "DELIVERY",
    },
    {
      value: "negocio_rus",
      label: "Tengo un negocio o local",
      description: "Bodega, minimarket, restaurante u otro",
      segment: "NEGOCIO_RUS",
    },
    {
      value: "alquileres",
      label: "Recibo ingresos por alquileres",
      description: "Arriendo de inmuebles",
      segment: "ALQUILERES",
    },
    {
      value: "no_se",
      label: "Aún no estoy seguro",
      description: "Quiero orientarme",
      segment: "NO_SE",
    },
  ],
};

// ----- Preguntas 2 a 5 por segmento -----

const ingresosOptions = [
  { value: "menos_1500", label: "Menos de S/1,500 al mes" },
  { value: "1500_3000", label: "Entre S/1,500 y S/3,000" },
  { value: "3000_8000", label: "Entre S/3,000 y S/8,000" },
  { value: "mas_8000", label: "Más de S/8,000" },
];

const siNoNoSe = [
  { value: "si", label: "Sí" },
  { value: "no", label: "No" },
  { value: "no_se", label: "No estoy seguro" },
];

const branchedQuestions: Record<Segment, DiagnosisQuestion[]> = {
  HONORARIOS: [
    {
      id: "h_ingresos",
      title: "¿Cuánto facturas aproximadamente al mes?",
      options: ingresosOptions,
    },
    {
      id: "h_recibos",
      title: "¿Emites recibos por honorarios electrónicos?",
      options: siNoNoSe,
    },
    {
      id: "h_clientes",
      title: "¿A quién le emites con más frecuencia?",
      options: [
        { value: "empresas", label: "A empresas" },
        { value: "personas", label: "A personas" },
        { value: "ambos", label: "A ambos" },
      ],
    },
    {
      id: "h_orden",
      title: "¿Llevas un control ordenado de tus ingresos y gastos?",
      options: siNoNoSe,
    },
  ],
  TAXISTA: [
    {
      id: "t_ingresos",
      title: "¿Cuánto ganas aproximadamente al mes?",
      options: ingresosOptions,
    },
    {
      id: "t_modalidad",
      title: "¿Cómo trabajas principalmente?",
      options: [
        { value: "app", label: "Por aplicación" },
        { value: "propio", label: "Por mi cuenta" },
        { value: "empresa", label: "Para una empresa" },
      ],
    },
    {
      id: "t_comprobantes",
      title: "¿Te piden comprobantes por tus servicios?",
      options: siNoNoSe,
    },
    {
      id: "t_ruc",
      title: "¿Tienes RUC activo?",
      options: siNoNoSe,
    },
  ],
  DELIVERY: [
    {
      id: "d_ingresos",
      title: "¿Cuánto ganas aproximadamente al mes?",
      options: ingresosOptions,
    },
    {
      id: "d_plataformas",
      title: "¿Con cuántas plataformas trabajas?",
      options: [
        { value: "una", label: "Una" },
        { value: "varias", label: "Varias" },
        { value: "propio", label: "Reparto propio" },
      ],
    },
    {
      id: "d_comprobantes",
      title: "¿Emites algún comprobante por tus ingresos?",
      options: siNoNoSe,
    },
    {
      id: "d_ruc",
      title: "¿Tienes RUC activo?",
      options: siNoNoSe,
    },
  ],
  NEGOCIO_RUS: [
    {
      id: "n_ventas",
      title: "¿Cuánto vendes aproximadamente al mes?",
      options: ingresosOptions,
    },
    {
      id: "n_comprobantes",
      title: "¿Entregas boletas o facturas a tus clientes?",
      options: siNoNoSe,
    },
    {
      id: "n_local",
      title: "¿Cuántos locales tienes?",
      options: [
        { value: "uno", label: "Uno" },
        { value: "dos_tres", label: "Entre dos y tres" },
        { value: "mas", label: "Más de tres" },
      ],
    },
    {
      id: "n_inventario",
      title: "¿Llevas control de tu inventario?",
      options: siNoNoSe,
    },
  ],
  ALQUILERES: [
    {
      id: "a_ingresos",
      title: "¿Cuánto recibes por alquileres al mes?",
      options: ingresosOptions,
    },
    {
      id: "a_inmuebles",
      title: "¿Cuántos inmuebles alquilas?",
      options: [
        { value: "uno", label: "Uno" },
        { value: "dos_tres", label: "Entre dos y tres" },
        { value: "mas", label: "Más de tres" },
      ],
    },
    {
      id: "a_declara",
      title: "¿Declaras estos ingresos actualmente?",
      options: siNoNoSe,
    },
    {
      id: "a_ruc",
      title: "¿Tienes RUC activo?",
      options: siNoNoSe,
    },
  ],
  NO_SE: [
    {
      id: "x_actividad",
      title: "¿De dónde provienen tus ingresos principales?",
      options: [
        { value: "servicios", label: "Servicios profesionales" },
        { value: "ventas", label: "Venta de productos" },
        { value: "transporte", label: "Transporte o reparto" },
        { value: "otros", label: "Otros" },
      ],
    },
    {
      id: "x_ingresos",
      title: "¿Cuánto ganas aproximadamente al mes?",
      options: ingresosOptions,
    },
    {
      id: "x_ruc",
      title: "¿Tienes RUC activo?",
      options: siNoNoSe,
    },
    {
      id: "x_meta",
      title: "¿Qué buscas principalmente?",
      options: [
        { value: "formalizar", label: "Formalizarme" },
        { value: "ordenar", label: "Ordenar mis finanzas" },
        { value: "declarar", label: "Declarar a tiempo" },
      ],
    },
  ],
  UNKNOWN: [],
};

export function getQuestionsForSegment(segment: Segment): DiagnosisQuestion[] {
  return branchedQuestions[segment] ?? [];
}

export function segmentFromOption(value: string): Segment {
  const option = segmentQuestion.options.find((o) => o.value === value);
  return option?.segment ?? "UNKNOWN";
}

// ----- Cálculo de resultado y plan recomendado -----

function isHighIncome(answers: DiagnosisAnswers): boolean {
  return Object.values(answers).some(
    (v) => v === "mas_8000" || v === "3000_8000",
  );
}

export function computeResult(
  segment: Segment,
  answers: DiagnosisAnswers,
): DiagnosisResult {
  const high = isHighIncome(answers);

  switch (segment) {
    case "HONORARIOS":
      return {
        segment,
        segmentLabel: segmentLabels[segment],
        profile:
          "Trabajas de forma independiente emitiendo recibos por honorarios.",
        confidence: "alta",
        recommendedProduct: "app",
        recommendedPlanId: "app-honorario",
        highlights: [
          "Emisión y control de recibos por honorarios",
          "Declaración anual ordenada",
          "Consultas IA ilimitadas con Suma",
        ],
      };
    case "TAXISTA":
    case "DELIVERY":
      return {
        segment,
        segmentLabel: segmentLabels[segment],
        profile:
          "Generas ingresos por servicios de transporte o reparto y necesitas orden tributario simple.",
        confidence: "alta",
        recommendedProduct: "app",
        recommendedPlanId: high ? "app-app" : "app-basico",
        highlights: [
          "Registro rápido de ingresos",
          "Alertas SUNAT para no pagar multas",
          "Soporte por WhatsApp",
        ],
      };
    case "NEGOCIO_RUS":
      return {
        segment,
        segmentLabel: segmentLabels[segment],
        profile:
          "Tienes un negocio con ventas frecuentes y necesitas facturación y control de inventario.",
        confidence: high ? "alta" : "media",
        recommendedProduct: "web-saas",
        recommendedPlanId: high ? "erp-pyme" : "erp-emprende",
        highlights: [
          "Facturación electrónica certificada",
          "Caja POS e inventario",
          "Reportes para decidir mejor",
        ],
      };
    case "ALQUILERES":
      return {
        segment,
        segmentLabel: segmentLabels[segment],
        profile:
          "Recibes ingresos por alquileres y necesitas declarar de forma ordenada.",
        confidence: "media",
        recommendedProduct: "app",
        recommendedPlanId: "app-basico",
        highlights: [
          "Registro de ingresos por alquiler",
          "Declaraciones organizadas",
          "Orientación tributaria con Suma",
        ],
      };
    case "NO_SE":
    default:
      return {
        segment: "NO_SE",
        segmentLabel: segmentLabels.NO_SE,
        profile:
          "Estás empezando a ordenar tu situación. Te recomendamos validar tu caso sin costo.",
        confidence: "inicial",
        recommendedProduct: "app",
        recommendedPlanId: "app-free",
        highlights: [
          "Diagnóstico tributario gratuito",
          "10 consultas IA al mes",
          "Acompañamiento para dar el primer paso",
        ],
      };
  }
}
