export const SITE = {
  name: "SOLCA Decoraciones",
  shortName: "SOLCA",
  tagline: "Diseñamos espacios que inspiran.",
  description:
    "Decoración de interiores, eventos y reformas decorativas con acabados de alta calidad. Diseño personalizado en cada detalle.",
  url: "https://solcadecoraciones.com",
  locale: "es_ES",
  instagram: "https://www.instagram.com/solcamila_manualidades",
  instagramHandle: "@solcamila_manualidades",
  phone: "+34 600 000 000",
  phoneHref: "tel:+34600000000",
  whatsapp: "https://wa.me/34600000000",
  email: "hola@solcadecoraciones.com",
  location: "España",
};

export const NAV_LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" },
];

export type Service = {
  title: string;
  description: string;
  icon: "sofa" | "sparkles" | "hammer" | "compass";
};

export const SERVICES: Service[] = [
  {
    title: "Decoración de interiores",
    description:
      "Proyectos integrales de interiorismo que combinan estética, funcionalidad y confort para transformar cada estancia.",
    icon: "sofa",
  },
  {
    title: "Decoración de eventos",
    description:
      "Ambientaciones a medida para celebraciones y eventos, cuidando cada detalle para crear momentos memorables.",
    icon: "sparkles",
  },
  {
    title: "Reformas decorativas",
    description:
      "Renovamos espacios con acabados de alta calidad, integrando diseño y arquitectura de interiores con precisión.",
    icon: "hammer",
  },
  {
    title: "Asesoramiento personalizado",
    description:
      "Acompañamiento cercano en cada etapa del proyecto, desde la primera idea hasta la última pieza colocada.",
    icon: "compass",
  },
];

export type GalleryItem = {
  title: string;
  category: string;
  image: string;
};

export const GALLERY: GalleryItem[] = [
  { title: "Salón contemporáneo", category: "Interiorismo", image: "/images/gallery-1.jpg" },
  { title: "Celebración íntima", category: "Eventos", image: "/images/gallery-2.jpg" },
  { title: "Suite principal", category: "Reforma decorativa", image: "/images/gallery-3.jpg" },
  { title: "Rincón de lectura", category: "Interiorismo", image: "/images/gallery-4.jpg" },
  { title: "Mesa de gala", category: "Eventos", image: "/images/gallery-5.jpg" },
  { title: "Estudio boutique", category: "Interiorismo", image: "/images/gallery-6.jpg" },
];

export const PROCESS_STEPS = [
  {
    number: "01",
    title: "Consulta",
    description: "Escuchamos tu visión, tus necesidades y el espíritu del espacio que quieres crear.",
  },
  {
    number: "02",
    title: "Diseño",
    description: "Desarrollamos una propuesta a medida, con moodboards, materiales y una dirección clara.",
  },
  {
    number: "03",
    title: "Ejecución",
    description: "Coordinamos cada detalle de la producción con proveedores y artesanos de confianza.",
  },
  {
    number: "04",
    title: "Entrega",
    description: "Presentamos el espacio terminado, cuidado hasta el último detalle.",
  },
];

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Próximamente compartiremos aquí las experiencias de nuestros clientes.",
    author: "Espacio reservado",
    role: "Reseña próximamente",
  },
];

export const SERVICE_OPTIONS = [
  "Decoración de interiores",
  "Decoración de eventos",
  "Reformas decorativas",
  "Asesoramiento personalizado",
];
