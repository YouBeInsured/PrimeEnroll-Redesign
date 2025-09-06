import { createContext, useContext, useState } from "react";

type Language = "en" | "es";

type Translations = {
  [key in Language]: {
    [key: string]: string;
  };
};

const translations: Translations = {
  en: {
    // Header
    "nav.services": "Services",
    "nav.testimonials": "Testimonials",
    "nav.about": "About",
    "nav.agentPortal": "Agent Portal",
    
    // Hero
    "hero.title1": "Better Lead Pricing Through",
    "hero.title2": "Multi-Vendor Networks",
    "hero.subtitle": "Access premium lead suppliers across Medicare, ACA, Final Expense, Auto Insurance, and Life Insurance with 20-30% better pricing than going direct. Professional growth partnership with month-to-month flexibility.",
    "hero.getStarted": "Free Consultation",
    "hero.viewDemo": "See Our Network",
    "hero.trustedBy": "Trusted by Insurance Agents Converting 100+ Monthly",
    
    // Trust indicators
    "trust.topAgents": "Multi-Vendor Network",
    "trust.compliance": "TCPA & CMS Compliant",
    "trust.noColdCalls": "Month-to-Month Terms",
    
    // Services
    "services.title1": "Premium Lead Sources Across",
    "services.title2": "All Insurance Verticals",
    "services.subtitle": "Access our curated network of high-volume suppliers across Medicare, ACA, Final Expense, Auto Insurance, and Life Insurance with professional VA support for scaling operations.",
    
    "service.aca.title": "ACA Health Insurance",
    "service.aca.description": "Connect with premium ACA suppliers offering competitive pricing and reliable daily transfer volumes. Access multiple backup vendors for consistent lead flow during peak seasons.",
    
    "service.medicare.title": "Medicare Advantage & Supplements",
    "service.medicare.description": "Tap into our network of Medicare specialists providing aged leads and live transfers. Better pricing than direct relationships with built-in redundancy across vendors.",
    
    "service.finalExpense.title": "Final Expense Life Insurance",
    "service.finalExpense.description": "Access high-converting final expense leads from multiple premium suppliers. Consistent daily volumes with transparent pricing and month-to-month flexibility.",
    
    "service.auto.title": "Auto Insurance",
    "service.auto.description": "Connect with our auto insurance lead network offering competitive rates and reliable daily delivery. Multiple vendor options ensure consistent lead flow for your business.",
    
    "service.life.title": "Life Insurance",
    "service.life.description": "Premium life insurance leads from our curated supplier network. Better economics than going direct with the reliability of multiple vendor relationships.",
    
    "service.va.title": "Professional VA Support",
    "service.va.description": "Scale your operations with professional virtual assistance for CRM management, appointment setting, follow-ups, and administrative tasks. Focus on closing while we handle the infrastructure.",
    
    "common.learnMore": "Learn More",
    
    // About
    "about.title1": "Our Work",
    "about.title2": "Principles",
    "about.description1": "At Prime Enroll, everything we do is rooted in one mission: empowering ACA agents with real results. We don't believe in fluff, outdated lead models, or overpromises.",
    "about.description2": "We focus on delivering ready-to-enroll ACA customers, built through transparent processes, CMS-aligned practices, and relentless innovation.",
    "about.clientsServed": "Clients Served",
    "about.experience": "Years Experience",
    "about.clarity.title": "Built for Clarity & Performance",
    "about.clarity.description": "We make ACA marketing clear, honest, and conversion-focused.",
    "about.support.title": "Success Doesn't Stick to Office Hours",
    "about.support.description": "Our system works 24/7 with real-time CRM syncing and always-on support.",
    
    // Features
    "features.title1": "A System That",
    "features.title2": "Delivers",
    "features.title3": "Not Just",
    "features.title4": "Promises",
    "features.subtitle": "We built Prime Enroll to solve real problems ACA agents face — unreliable leads, poor ROI, and lack of control. Our data-backed strategy + human-first execution ensures every lead counts.",
    
    "feature.compliance.title": "100% CMS Compliant",
    "feature.compliance.description": "Our campaigns and systems follow all CMS marketing guidelines, so you're always safe, compliant, and secure.",
    
    "feature.agents.title": "Built for Busy Agents",
    "feature.agents.description": "No tech stress. No fluff. We set everything up from ad creatives to lead delivery so you can focus on closing enrollments.",
    
    "feature.performance.title": "Proven Performance",
    "feature.performance.description": "Data-backed strategies with real-time tracking, CRM integration, and performance analytics that actually matter.",
    
    // Testimonials
    "testimonials.title": "Client Feedback &",
    "testimonials.title2": "Reviews",
    "testimonials.subtitle": "Showcase what clients say about our products and services. Read authentic feedback and reviews from satisfied customers.",
    
    // CTA
    "cta.title": "Experience the Prime Enroll Edge",
    "cta.subtitle": "Maximize your enrollments with Prime Enroll where compliance, automation, and real-time lead delivery fuel your growth.",
    "cta.feature1": "Scale your enrollments faster",
    "cta.feature2": "Built-in CMS-compliance",
    "cta.feature3": "No wasted ad spend",
    "cta.button": "VIEW OUR SYSTEM IN ACTION",
    
    // Stats
    "stats.leadsGenerated": "50K+",
    "stats.happyClients": "700+",
    "stats.experience": "5+",
    "stats.rating": "4.9",
    "stats.labels.leadsGenerated": "Leads Generated",
    "stats.labels.happyClients": "Happy Clients",
    "stats.labels.experience": "Years Experience",
    "stats.labels.rating": "Client Rating",
  },
  es: {
    // Header
    "nav.services": "Servicios",
    "nav.testimonials": "Testimonios",
    "nav.about": "Acerca",
    "nav.agentPortal": "Portal de Agente",
    
    // Hero
    "hero.title1": "Mejor Precio de Clientes Potenciales A Través de",
    "hero.title2": "Redes Multi-Proveedor",
    "hero.subtitle": "Acceso a proveedores premium de clientes potenciales en Medicare, ACA, Gastos Finales, Seguro de Auto y Seguro de Vida con precios 20-30% mejores que ir directo. Asociación profesional de crecimiento con flexibilidad mes a mes.",
    "hero.getStarted": "Consulta Gratuita",
    "hero.viewDemo": "Ver Nuestra Red",
    "hero.trustedBy": "Confiado por Agentes de Seguros que Convierten 100+ Mensualmente",
    
    // Trust indicators
    "trust.topAgents": "Red Multi-Proveedor",
    "trust.compliance": "Cumple TCPA y CMS",
    "trust.noColdCalls": "Términos Mes a Mes",
    
    // Services
    "services.title1": "Fuentes Premium de Clientes Potenciales en",
    "services.title2": "Todas las Verticales de Seguros",
    "services.subtitle": "Accede a nuestra red curada de proveedores de alto volumen en Medicare, ACA, Gastos Finales, Seguro de Auto y Seguro de Vida con soporte profesional de VA para escalar operaciones.",
    
    "service.aca.title": "ACA Kick Starter",
    "service.aca.description": "Un sistema DFY (Hecho Para Usted) completo que entrega clientes potenciales ACA exclusivos de embudos de anuncios compatibles con entrega en tiempo real respaldada por una inscripción mínima garantizada.",
    
    "service.acaLive.title": "Transferencias en Vivo ACA",
    "service.acaLive.description": "Lo conectamos en vivo con prospectos ACA preseleccionados que buscan activamente cobertura: sin llamadas frías, sin persecución, solo conversaciones reales con clientes listos para inscribirse.",
    
    "service.medicare.title": "Transferencias en Vivo Medicare",
    "service.medicare.description": "Generamos llamadas de Medicare y Seguro de Vida de alta calidad, envejecidas a la perfección, adaptadas a su estado de licencia, con información detallada del llamador y horarios de contacto pico.",
    
    "service.finalExpense.title": "Transferencias en Vivo Gastos Finales",
    "service.finalExpense.description": "Hable directamente con prospectos interesados mayores de 50 años que buscan activamente planes de gastos finales. Cada transferencia es en tiempo real, compatible con TCPA y exclusiva para usted.",
    
    "service.va.title": "Asistencia Virtual para Agentes",
    "service.va.description": "Su propio equipo de VA capacitado para ayudar con cotizaciones, gestión de CRM, programación de citas, seguimientos y más, para que cierre más con menos esfuerzo.",
    
    "common.learnMore": "Aprende Más",
    
    // About
    "about.title1": "Nuestros Principios",
    "about.title2": "de Trabajo",
    "about.description1": "En Prime Enroll, todo lo que hacemos está arraigado en una misión: empoderar a los agentes ACA con resultados reales. No creemos en relleno, modelos de clientes potenciales obsoletos o promesas excesivas.",
    "about.description2": "Nos enfocamos en entregar clientes ACA listos para inscribirse, construidos a través de procesos transparentes, prácticas alineadas con CMS e innovación implacable.",
    "about.clientsServed": "Clientes Atendidos",
    "about.experience": "Años de Experiencia",
    "about.clarity.title": "Construido para Claridad y Rendimiento",
    "about.clarity.description": "Hacemos que el marketing ACA sea claro, honesto y enfocado en conversiones.",
    "about.support.title": "El Éxito No Se Limita al Horario de Oficina",
    "about.support.description": "Nuestro sistema funciona 24/7 con sincronización de CRM en tiempo real y soporte siempre activo.",
    
    // Features
    "features.title1": "Un Sistema Que",
    "features.title2": "Entrega",
    "features.title3": "No Solo",
    "features.title4": "Promesas",
    "features.subtitle": "Construimos Prime Enroll para resolver problemas reales que enfrentan los agentes ACA: clientes potenciales poco confiables, ROI deficiente y falta de control. Nuestra estrategia respaldada por datos + ejecución centrada en humanos asegura que cada cliente potencial cuente.",
    
    "feature.compliance.title": "100% Compatible con CMS",
    "feature.compliance.description": "Nuestras campañas y sistemas siguen todas las pautas de marketing de CMS, por lo que siempre está seguro, conforme y protegido.",
    
    "feature.agents.title": "Construido para Agentes Ocupados",
    "feature.agents.description": "Sin estrés tecnológico. Sin relleno. Configuramos todo desde creatividades de anuncios hasta entrega de clientes potenciales para que pueda enfocarse en cerrar inscripciones.",
    
    "feature.performance.title": "Rendimiento Comprobado",
    "feature.performance.description": "Estrategias respaldadas por datos con seguimiento en tiempo real, integración de CRM y análisis de rendimiento que realmente importan.",
    
    // Testimonials
    "testimonials.title": "Comentarios y",
    "testimonials.title2": "Reseñas de Clientes",
    "testimonials.subtitle": "Muestre lo que los clientes dicen sobre nuestros productos y servicios. Lea comentarios auténticos y reseñas de clientes satisfechos.",
    
    // CTA
    "cta.title": "Experimente la Ventaja de Prime Enroll",
    "cta.subtitle": "Maximice sus inscripciones con Prime Enroll donde el cumplimiento, la automatización y la entrega de clientes potenciales en tiempo real alimentan su crecimiento.",
    "cta.feature1": "Escale sus inscripciones más rápido",
    "cta.feature2": "Cumplimiento CMS incorporado",
    "cta.feature3": "Sin gasto publicitario desperdiciado",
    "cta.button": "VER NUESTRO SISTEMA EN ACCIÓN",
    
    // Stats
    "stats.leadsGenerated": "50K+",
    "stats.happyClients": "700+",
    "stats.experience": "5+",
    "stats.rating": "4.9",
    "stats.labels.leadsGenerated": "Clientes Potenciales Generados",
    "stats.labels.happyClients": "Clientes Satisfechos",
    "stats.labels.experience": "Años de Experiencia",
    "stats.labels.rating": "Calificación del Cliente",
  },
};

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
