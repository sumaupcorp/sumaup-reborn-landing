// Mapa central de assets locales de SUMAUP360.
//
// Reglas:
// - Solo assets locales (nunca imágenes externas).
// - Cada asset declara `available`. Si un asset no existe físicamente,
//   `available: false` y el componente debe mostrar un fallback con
//   lucide-react (ver `fallbackIcon`).
// - Todas las imágenes se sirven con next/image y `alt` en español.
//
// Estado real de carpetas detectado:
// - public/suma: 15 ilustraciones de la mascota (disponibles).
// - public/icons: solo el logo (sumaup_logo.png).
// - public/illustrations, public/brand, public/mockups: aún sin archivos
//   -> se usan fallbacks con lucide-react.

export interface AssetEntry {
  src: string;
  alt: string;
  available: boolean;
  /** Icono lucide-react a usar como fallback si no hay imagen. */
  fallbackIcon?: string;
}

// Dimensiones cuadradas por defecto para la mascota (se usa object-contain
// para no deformar la ilustración).
export const SUMA_BOX = 560;

// ----- Mascota Suma (public/suma) -----

export const suma = {
  principal: {
    src: "/suma/Suma_Saludando_Bienvenida.png",
    alt: "Suma, la mascota de SUMAUP360, dando la bienvenida",
    available: true,
    fallbackIcon: "Bot",
  },
  saludando: {
    src: "/suma/Suma_saludo.png",
    alt: "Suma saludando con energía",
    available: true,
    fallbackIcon: "Hand",
  },
  analizando: {
    src: "/suma/Suma_Analizando tu actividad .png",
    alt: "Suma analizando tu actividad financiera",
    available: true,
    fallbackIcon: "LineChart",
  },
  conLaptop: {
    src: "/suma/suma_revisando_su_tablet.png",
    alt: "Suma revisando información en su tablet",
    available: true,
    fallbackIcon: "Laptop",
  },
  celebrando: {
    src: "/suma/Suma_Celebrando_meta o registro exitoso..png",
    alt: "Suma celebrando una meta cumplida",
    available: true,
    fallbackIcon: "PartyPopper",
  },
  soporte: {
    src: "/suma/Suma_Soporte.png",
    alt: "Suma brindando soporte y ayuda",
    available: true,
    fallbackIcon: "Headset",
  },
  diagnostico: {
    src: "/suma/Suma_Pensando_Analizando datos.png",
    alt: "Suma pensando y analizando datos para tu diagnóstico",
    available: true,
    fallbackIcon: "Stethoscope",
  },
  recomendando: {
    src: "/suma/Suma_Recomendando.png",
    alt: "Suma recomendando un plan a tu medida",
    available: true,
    fallbackIcon: "ThumbsUp",
  },
  confirmando: {
    src: "/suma/Suma_confirmando_con_like.png",
    alt: "Suma confirmando con un gesto de aprobación",
    available: true,
    fallbackIcon: "CheckCircle2",
  },
  esperando: {
    src: "/suma/Suma_ Esperando .png",
    alt: "Suma esperando mientras se procesa tu información",
    available: true,
    fallbackIcon: "Loader",
  },
  errorAmigable: {
    src: "/suma/Suma_Error amigable.png",
    alt: "Suma con un gesto amable indicando que algo salió distinto",
    available: true,
    fallbackIcon: "CircleAlert",
  },
  alertaSuave: {
    src: "/suma/Suma_Alerta suave .png",
    alt: "Suma dando un aviso suave",
    available: true,
    fallbackIcon: "Bell",
  },
  alertaUrgente: {
    src: "/suma/Suma_Alerta urgente .png",
    alt: "Suma señalando una alerta importante",
    available: true,
    fallbackIcon: "BellRing",
  },
  calma: {
    src: "/suma/Suma_calma_en_posicion_joga.png",
    alt: "Suma en calma, transmitiendo tranquilidad",
    available: true,
    fallbackIcon: "Sparkles",
  },
  calendario: {
    src: "/suma/suma_con_calendario_check.png",
    alt: "Suma con un calendario marcando tus vencimientos al día",
    available: true,
    fallbackIcon: "CalendarCheck",
  },
} as const satisfies Record<string, AssetEntry>;

export type SumaKey = keyof typeof suma;

// ----- Ilustración hero del ecosistema (public/illustrations) -----
// Composición transparente (1920x1080) con Suma entre la App y la Web SaaS,
// más cards de métricas. Es el visual principal del hero de la home.

export const heroEcosistema = {
  src: "/illustrations/suma-hero-ecosistem.png",
  alt: "Suma muestra el ecosistema SUMAUP360: la app móvil para RUC 10 y la Web SaaS con ERP y facturación SUNAT, con métricas de comprobantes y cumplimiento",
  available: true,
  fallbackIcon: "Sparkles",
} as const satisfies AssetEntry;

// ----- Suma en acción (public/suma/actions) -----
// PNG cuadrados (900x900) transparentes de Suma realizando acciones. Se
// integran como figuras flotantes (halo + blob + sombra suave), nunca dentro
// de cajas duras. Cada imagen tiene una intención visual y se usa en UNA sola
// sección principal para no repetir (ver mapa de uso en cada sección).

export const sumaActions = {
  // CTA final / bienvenida: descubrimiento y valor inicial.
  gift: {
    src: "/suma/actions/suma abriendo regalo sorpresa que es sumaup.png",
    alt: "Suma abriendo un regalo sorpresa que representa empezar con SUMAUP360",
    available: true,
    fallbackIcon: "PartyPopper",
  },
  // SUNAT / evitar multas y vencimientos.
  fireExtinguisher: {
    src: "/suma/actions/suma apagando con el fuego de las multas.png",
    alt: "Suma apagando el fuego de las multas, evitando recargos y vencimientos con SUNAT",
    available: true,
    fallbackIcon: "ShieldCheck",
  },
  // ERP para restaurantes.
  chefErp: {
    src: "/suma/actions/suma cocinero con su tablet y su erp de restaurante.png",
    alt: "Suma vestido de cocinero usando el ERP de restaurante en su tablet: comandas, caja e inventario",
    available: true,
    fallbackIcon: "UtensilsCrossed",
  },
  // Página 404.
  notFound404: {
    src: "/suma/actions/suma codigo 404 pagina no encontrada.png",
    alt: "Suma junto a un código 404 indicando que la página no fue encontrada",
    available: true,
    fallbackIcon: "CircleAlert",
  },
  // SUNAT / cumplimiento tributario.
  sunat: {
    src: "/suma/actions/suma como superman a lado del logo de sunat.png",
    alt: "Suma con capa de héroe junto al logo de SUNAT, acompañándote en tus obligaciones tributarias",
    available: true,
    fallbackIcon: "Landmark",
  },
  // Cómo funciona / guía tecnológica.
  laptop: {
    src: "/suma/actions/suma con su laptop mirando defrente.png",
    alt: "Suma frente a su laptop, listo para guiarte paso a paso en SUMAUP360",
    available: true,
    fallbackIcon: "Laptop",
  },
  // Crecimiento / automatización.
  rocket: {
    src: "/suma/actions/suma con un cohete en la mano.png",
    alt: "Suma sosteniendo un cohete, símbolo de crecimiento e impulso para tu negocio",
    available: true,
    fallbackIcon: "Rocket",
  },
  // Segmento taxistas (App).
  carRelaxed: {
    src: "/suma/actions/suma dentro de su auto relajado.png",
    alt: "Suma relajado dentro de su auto, representando a los taxistas que usan la App",
    available: true,
    fallbackIcon: "Car",
  },
  // Beneficio emocional / tranquilidad.
  beach: {
    src: "/suma/actions/suma descansando en una amaca y palmeras.png",
    alt: "Suma descansando en una hamaca entre palmeras, con la tranquilidad de tener todo en orden",
    available: true,
    fallbackIcon: "PiggyBank",
  },
  // Aprende / educación financiera.
  financeBoard: {
    src: "/suma/actions/suma enselando finanzas en una pizzara.png",
    alt: "Suma enseñando finanzas en una pizarra, explicando tributación de forma simple",
    available: true,
    fallbackIcon: "BarChart3",
  },
  // Problema real / fechas que se vencen.
  stressedDeadline: {
    src: "/suma/actions/suma estresado por no saber que se vence su fecha.png",
    alt: "Suma estresado por no recordar una fecha de vencimiento tributaria",
    available: true,
    fallbackIcon: "CircleAlert",
  },
  // Segmento delivery (App).
  deliveryMoto: {
    src: "/suma/actions/suma haciendo delivery en moto.png",
    alt: "Suma haciendo delivery en moto, representando a los repartidores que usan la App",
    available: true,
    fallbackIcon: "Bike",
  },
  // Elección de producto: App + ERP en un mismo ecosistema.
  erpTablet: {
    src: "/suma/actions/suma levantando la mano con la aplicacion y el ERP en su tablet.png",
    alt: "Suma levantando la mano mostrando la App y el ERP web de SUMAUP360 en su tablet",
    available: true,
    fallbackIcon: "MonitorSmartphone",
  },
  // FAQ / dudas / diagnóstico.
  question: {
    src: "/suma/actions/suma señalando un signo de interrogacion.png",
    alt: "Suma señalando un signo de interrogación, listo para resolver tus dudas",
    available: true,
    fallbackIcon: "MessageCircle",
  },
} as const satisfies Record<string, AssetEntry>;

export type SumaActionKey = keyof typeof sumaActions;

// ----- Marca / logo (public/icons) -----

export const brand = {
  logo: {
    src: "/icons/sumaup_logo.png",
    alt: "Logo de SUMAUP360",
    available: true,
    fallbackIcon: "Sparkles",
  },
} as const satisfies Record<string, AssetEntry>;

// ----- Onboarding de la App (public/illustrations) -----
// Mockups (mano + teléfono) que muestran pantallas de la app. Tienen fondo
// propio, por eso van en tarjetas (no como PNG transparente flotante).

export const onboarding = [
  {
    src: "/illustrations/suma_onboardin1.png",
    alt: "Pantalla de la app SUMAUP360: registra tus comprobantes desde el celular",
    available: true,
    fallbackIcon: "Receipt",
  },
  {
    src: "/illustrations/suma_onboardin2.png",
    alt: "Pantalla de la app SUMAUP360: deja que Suma, el asistente IA, te ayude",
    available: true,
    fallbackIcon: "Sparkles",
  },
  {
    src: "/illustrations/suma_onboardin3.png",
    alt: "Pantalla de la app SUMAUP360: llega preparado al cierre del mes",
    available: true,
    fallbackIcon: "CalendarCheck",
  },
] as const satisfies AssetEntry[];

export const onboardingCaptions = [
  "Registra tus comprobantes",
  "Deja que Suma te ayude",
  "Llega preparado al cierre",
] as const;

// ----- Ilustraciones de apoyo (public/illustrations) -----
// No existen aún: se usan fallbacks con lucide-react.

export const illustrations = {
  finanzas: {
    src: "/illustrations/finanzas.png",
    alt: "Ilustración sobre finanzas ordenadas",
    available: false,
    fallbackIcon: "PiggyBank",
  },
  seguridad: {
    src: "/illustrations/seguridad.png",
    alt: "Ilustración sobre seguridad de tu información",
    available: false,
    fallbackIcon: "ShieldCheck",
  },
  soporte: {
    src: "/illustrations/soporte.png",
    alt: "Ilustración sobre soporte cercano",
    available: false,
    fallbackIcon: "Headset",
  },
} as const satisfies Record<string, AssetEntry>;

// ----- Mockups de producto (public/mockups) -----
// No existen aún: las secciones usan composiciones propias con shadcn/ui.

export const mockups = {
  app: {
    src: "/mockups/app.png",
    alt: "Vista previa de la SUMAUP360 App",
    available: false,
    fallbackIcon: "Smartphone",
  },
  erp: {
    src: "/mockups/erp.png",
    alt: "Vista previa del ERP web de SUMAUP360",
    available: false,
    fallbackIcon: "MonitorSmartphone",
  },
} as const satisfies Record<string, AssetEntry>;

// ----- Grupos de iconos (public/icons) -----
// Solo existe el logo; los conjuntos temáticos usan lucide-react.

export const iconSets = {
  app: { available: false, fallbackIcon: "Smartphone" },
  erp: { available: false, fallbackIcon: "Building2" },
  sunat: { available: false, fallbackIcon: "Landmark" },
  planes: { available: false, fallbackIcon: "BadgeCheck" },
} as const;
