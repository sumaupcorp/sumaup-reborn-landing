import type { ErpCategory, ErpModule } from "@/types";

export const erpCategories: ErpCategory[] = [
  {
    id: "restaurantes",
    name: "Restaurantes",
    description: "Comandas, mesas y cocina conectadas con tu facturación.",
    icon: "UtensilsCrossed",
  },
  {
    id: "minimarkets",
    name: "Minimarkets",
    description: "Control de stock y ventas rápidas en caja.",
    icon: "ShoppingCart",
  },
  {
    id: "bodegas",
    name: "Bodegas",
    description: "Ventas al día, inventario simple y comprobantes al instante.",
    icon: "Store",
  },
  {
    id: "ferreterias",
    name: "Ferreterías",
    description: "Miles de productos organizados con precios y stock al día.",
    icon: "Wrench",
  },
  {
    id: "belleza",
    name: "Belleza",
    description: "Citas, servicios y ventas de productos en un solo sistema.",
    icon: "Scissors",
  },
  {
    id: "lavanderias",
    name: "Lavanderías",
    description: "Órdenes de servicio, entregas y cobros bajo control.",
    icon: "WashingMachine",
  },
];

export const erpModules: ErpModule[] = [
  {
    id: "facturacion",
    name: "Facturación electrónica",
    description: "Emite comprobantes certificados y válidos ante SUNAT.",
    icon: "FileText",
  },
  {
    id: "caja-pos",
    name: "Caja POS",
    description: "Cobra rápido y cierra caja sin errores.",
    icon: "Calculator",
  },
  {
    id: "inventario",
    name: "Inventario",
    description: "Controla stock, kardex y alertas de reposición.",
    icon: "Boxes",
  },
  {
    id: "crm",
    name: "CRM",
    description: "Gestiona clientes y oportunidades de venta.",
    icon: "Users",
  },
  {
    id: "compras",
    name: "Compras",
    description: "Registra compras y mantén tus costos al día.",
    icon: "ShoppingBag",
  },
  {
    id: "proveedores",
    name: "Proveedores",
    description: "Administra a tus proveedores y sus condiciones.",
    icon: "Truck",
  },
  {
    id: "reportes",
    name: "Reportes",
    description: "Decisiones con datos claros y en tiempo real.",
    icon: "BarChart3",
  },
  {
    id: "sunat",
    name: "SUNAT",
    description: "Cumplimiento tributario integrado a tu operación.",
    icon: "Landmark",
  },
  {
    id: "multiusuario",
    name: "Multiusuario",
    description: "Roles y permisos para todo tu equipo.",
    icon: "UsersRound",
  },
  {
    id: "sucursales",
    name: "Sucursales",
    description: "Administra varios locales desde un solo panel.",
    icon: "Building2",
  },
  {
    id: "cobranzas",
    name: "Cobranzas",
    description: "Controla cuentas por cobrar y recordatorios de pago.",
    icon: "HandCoins",
  },
  {
    id: "whatsapp",
    name: "WhatsApp",
    description: "Envía comprobantes y mensajes a tus clientes.",
    icon: "MessageCircle",
  },
  {
    id: "ia-erp",
    name: "Asistente IA ERP",
    description: "Consulta tu negocio y recibe ayuda con lenguaje natural.",
    icon: "Sparkles",
  },
  {
    id: "ia-crm",
    name: "Asistente IA CRM",
    description: "Automatiza la captación y el seguimiento de clientes.",
    icon: "Bot",
  },
];
