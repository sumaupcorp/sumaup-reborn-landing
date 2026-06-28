// Contenido de las páginas legales de SUMAUP360 (en español).
// Nota: este contenido es una base profesional general. Antes de un
// lanzamiento comercial, conviene que un asesor legal lo revise y lo
// ajuste a la realidad de la empresa (razón social, RUC, domicilio).

export interface LegalSection {
  heading: string;
  paragraphs: string[];
}

export interface LegalDoc {
  slug: "privacidad" | "terminos" | "cookies";
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
}

const UPDATED = "28 de junio de 2026";

export const privacidad: LegalDoc = {
  slug: "privacidad",
  title: "Política de Privacidad",
  updated: UPDATED,
  intro:
    "En SUMAUP360 valoramos tu confianza. Esta política explica qué datos personales recopilamos, con qué finalidad los usamos y qué derechos tienes sobre ellos, conforme a la Ley N.° 29733, Ley de Protección de Datos Personales del Perú, y su reglamento.",
  sections: [
    {
      heading: "1. Responsable del tratamiento",
      paragraphs: [
        "SUMAUP360 es responsable del tratamiento de los datos personales que nos proporcionas a través de nuestro sitio web, la aplicación móvil y la plataforma web (Web SaaS).",
        "Puedes contactarnos por nuestros canales oficiales de atención para cualquier consulta sobre el tratamiento de tus datos.",
      ],
    },
    {
      heading: "2. Datos que recopilamos",
      paragraphs: [
        "Datos de identificación y contacto: nombre, número de RUC o DNI, correo electrónico y número de teléfono cuando los proporcionas voluntariamente.",
        "Datos de uso: información sobre cómo interactúas con nuestros productos, como páginas visitadas, funciones utilizadas y datos técnicos del dispositivo.",
        "Datos tributarios y de negocio: la información que registras para gestionar tus ingresos, gastos, comprobantes y obligaciones, necesaria para prestarte el servicio.",
      ],
    },
    {
      heading: "3. Finalidad del tratamiento",
      paragraphs: [
        "Usamos tus datos para crear y administrar tu cuenta, prestar y mejorar nuestros servicios, brindarte soporte, enviarte información relevante sobre vencimientos y novedades, y cumplir con obligaciones legales.",
        "No vendemos tus datos personales a terceros.",
      ],
    },
    {
      heading: "4. Conservación de los datos",
      paragraphs: [
        "Conservamos tus datos personales mientras mantengas una relación con SUMAUP360 y durante los plazos que exija la normativa aplicable. Luego, los eliminamos o anonimizamos de forma segura.",
      ],
    },
    {
      heading: "5. Tus derechos",
      paragraphs: [
        "Puedes ejercer tus derechos de acceso, rectificación, cancelación y oposición (derechos ARCO) sobre tus datos personales.",
        "Para ejercerlos, escríbenos por nuestros canales oficiales indicando tu solicitud. Responderemos en los plazos previstos por la ley.",
      ],
    },
    {
      heading: "6. Seguridad",
      paragraphs: [
        "Aplicamos medidas técnicas y organizativas razonables para proteger tus datos frente a accesos no autorizados, pérdida o alteración.",
      ],
    },
    {
      heading: "7. Cambios en esta política",
      paragraphs: [
        "Podemos actualizar esta política para reflejar cambios legales o de nuestros servicios. Publicaremos la versión vigente en esta misma página, indicando la fecha de última actualización.",
      ],
    },
  ],
};

export const terminos: LegalDoc = {
  slug: "terminos",
  title: "Términos y Condiciones",
  updated: UPDATED,
  intro:
    "Estos Términos y Condiciones regulan el uso del sitio web, la aplicación móvil y la plataforma Web SaaS de SUMAUP360. Al usar nuestros servicios, aceptas estos términos.",
  sections: [
    {
      heading: "1. Descripción del servicio",
      paragraphs: [
        "SUMAUP360 es un ecosistema fintech y legaltech que ofrece herramientas digitales para organizar finanzas, gestionar comprobantes y apoyar el cumplimiento de obligaciones tributarias.",
        "Nuestras herramientas son un apoyo para tu gestión. No reemplazan a SUNAT ni constituyen asesoría tributaria, contable o legal personalizada.",
      ],
    },
    {
      heading: "2. Registro y cuenta",
      paragraphs: [
        "Para usar ciertas funciones debes crear una cuenta y proporcionar información veraz y actualizada.",
        "Eres responsable de mantener la confidencialidad de tus credenciales y de toda actividad realizada desde tu cuenta.",
      ],
    },
    {
      heading: "3. Uso adecuado",
      paragraphs: [
        "Te comprometes a usar los servicios conforme a la ley y a no realizar actividades que afecten su funcionamiento, seguridad o a otros usuarios.",
      ],
    },
    {
      heading: "4. Planes y pagos",
      paragraphs: [
        "Algunos servicios son gratuitos y otros requieren un plan de pago. Las condiciones, precios y alcances de cada plan se informan antes de la contratación.",
      ],
    },
    {
      heading: "5. Responsabilidad",
      paragraphs: [
        "Hacemos nuestro mejor esfuerzo para que los servicios funcionen de forma continua y correcta, pero no garantizamos que estén libres de interrupciones o errores.",
        "La responsabilidad final sobre tus declaraciones y obligaciones ante SUNAT recae en ti. SUMAUP360 es una herramienta de apoyo.",
      ],
    },
    {
      heading: "6. Propiedad intelectual",
      paragraphs: [
        "La marca, el logotipo, la mascota Suma, los contenidos y el software de SUMAUP360 están protegidos. No se permite su uso sin autorización.",
      ],
    },
    {
      heading: "7. Modificaciones",
      paragraphs: [
        "Podemos actualizar estos términos en cualquier momento. La versión vigente se publicará en esta página con su fecha de actualización.",
      ],
    },
  ],
};

export const cookies: LegalDoc = {
  slug: "cookies",
  title: "Política de Cookies",
  updated: UPDATED,
  intro:
    "Esta política explica qué son las cookies y cómo las utilizamos en el sitio web de SUMAUP360 para mejorar tu experiencia.",
  sections: [
    {
      heading: "1. ¿Qué son las cookies?",
      paragraphs: [
        "Las cookies son pequeños archivos que se almacenan en tu dispositivo cuando visitas un sitio web. Permiten recordar tus preferencias y entender cómo usas el sitio.",
      ],
    },
    {
      heading: "2. Tipos de cookies que usamos",
      paragraphs: [
        "Cookies necesarias: imprescindibles para que el sitio funcione correctamente.",
        "Cookies de rendimiento y análisis: nos ayudan a entender cómo se usa el sitio para mejorarlo.",
        "Cookies de preferencia: recuerdan tus elecciones para una mejor experiencia.",
      ],
    },
    {
      heading: "3. Gestión de cookies",
      paragraphs: [
        "Puedes configurar o deshabilitar las cookies desde los ajustes de tu navegador. Ten en cuenta que algunas funciones podrían dejar de estar disponibles.",
      ],
    },
    {
      heading: "4. Cambios",
      paragraphs: [
        "Podemos actualizar esta política de cookies. La versión vigente estará siempre disponible en esta página.",
      ],
    },
  ],
};

export const legalDocs = { privacidad, terminos, cookies };
