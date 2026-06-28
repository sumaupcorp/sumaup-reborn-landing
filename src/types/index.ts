// Tipos centrales de SUMAUP360

export type Route =
  | "/"
  | "/app"
  | "/web-saas"
  | "/precios"
  | "/diagnostico"
  | "/diagnostico/procesando"
  | "/diagnostico/resultado"
  | "/diagnostico/plan-recomendado"
  | "/aprende"
  | "/contacto"
  | "/home"
  | "/privacidad"
  | "/terminos"
  | "/cookies";

export type ProductLine = "app" | "web-saas";

// ----- Diagnóstico -----

export type DiagnosisStatus =
  | "NOT_STARTED"
  | "IN_PROGRESS"
  | "COMPLETED"
  | "SKIPPED";

export type Segment =
  | "HONORARIOS"
  | "TAXISTA"
  | "DELIVERY"
  | "NEGOCIO_RUS"
  | "ALQUILERES"
  | "NO_SE"
  | "UNKNOWN";

export interface DiagnosisOption {
  value: string;
  label: string;
  description?: string;
  /** Solo en la pregunta 1: define el segmento del usuario. */
  segment?: Segment;
}

export interface DiagnosisQuestion {
  id: string;
  title: string;
  help?: string;
  options: DiagnosisOption[];
}

export type DiagnosisAnswers = Record<string, string>;

export interface DiagnosisResult {
  segment: Segment;
  segmentLabel: string;
  profile: string;
  confidence: "alta" | "media" | "inicial";
  recommendedPlanId: string;
  recommendedProduct: ProductLine;
  highlights: string[];
}

export interface DiagnosisState {
  status: DiagnosisStatus;
  segment: Segment;
  step: number;
  answers: DiagnosisAnswers;
  result: DiagnosisResult | null;
  updatedAt: number;
}

// ----- Precios -----

export interface PlanFeature {
  label: string;
  included?: boolean;
}

export interface Plan {
  id: string;
  product: ProductLine;
  name: string;
  tagline: string;
  priceMonthly: string;
  priceAnnual?: string;
  priceNote?: string;
  features: string[];
  highlighted?: boolean;
  badge?: string;
  ctaLabel: string;
  ctaHref: Route;
}

// ----- ERP -----

export interface ErpCategory {
  id: string;
  name: string;
  description: string;
  icon: string; // nombre de icono lucide-react
}

export interface ErpModule {
  id: string;
  name: string;
  description: string;
  icon: string;
}

// ----- App -----

export interface AppFeature {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface AppSegment {
  id: string;
  name: string;
  description: string;
  icon: string;
}

// ----- FAQ -----

export type FaqCategory = "App" | "ERP" | "SUNAT" | "Facturación";

export interface FaqItem {
  category: FaqCategory;
  question: string;
  answer: string;
}

// ----- Aprende -----

export interface LearnCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
}
