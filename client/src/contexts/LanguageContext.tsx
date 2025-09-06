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
    
    // Why Choose Us
    "about.title1": "Why Choose",
    "about.title2": "Prime Enroll",
    "about.description1": "Access to multiple premium suppliers means better pricing, backup options, and reliable volumes. Our network relationships provide 20-30% better economics than going direct to vendors.",
    "about.description2": "Professional infrastructure with month-to-month terms, TCPA/CMS compliance, and dedicated growth support. Confidential partnership approach designed for serious agents ready to scale.",
    "about.clientsServed": "Agent Partners",
    "about.experience": "Years Experience", 
    "about.clarity.title": "Multi-Vendor Advantage",
    "about.clarity.description": "Never depend on a single supplier. Our network provides backup options and consistent lead flow across all verticals.",
    "about.support.title": "Better Economics & Flexibility",
    "about.support.description": "Month-to-month terms with 20-30% pricing advantages over direct vendor relationships. Professional growth partnership without long-term commitments.",
    
    // Growth Partnership
    "growth.title1": "Scale from 100 Monthly to",
    "growth.title2": "500+ Daily Transfers",
    "growth.subtitle": "Our growth partnership approach helps agents systematically scale their operations with professional infrastructure and multi-vendor reliability.",
    "growth.step1.title": "Starting Point: 100+ Monthly",
    "growth.step1.description": "Solo agents converting 100+ monthly ready for consistent daily lead flow with professional support infrastructure.",
    "growth.step2.title": "Growth Phase: 5-50 Daily",
    "growth.step2.description": "Systematic scaling with VA support, CRM optimization, and multi-vendor access for reliable daily volumes.",
    "growth.step3.title": "Scale Target: 500+ Daily",
    "growth.step3.description": "Enterprise-level volumes with full infrastructure support, compliance management, and dedicated account management.",
    
    // Qualification Requirements  
    "qualification.title": "Professional Consultation Requirements",
    "qualification.subtitle": "We partner with serious agents ready for consistent daily lead volumes. Our 5 daily minimum ensures mutual success and professional operations.",
    "qualification.requirement1": "5 Daily Transfer Minimum",
    "qualification.requirement2": "Active Insurance License",
    "qualification.requirement3": "Professional CRM System",
    "qualification.requirement4": "Proven Conversion History",
    "qualification.consultation": "Free Professional Assessment",
    "qualification.consultationDesc": "We'll assess your current lead costs, conversion rates, and growth potential to determine if our network is the right fit for your operations.",
    
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
    
    "service.aca.title": "Seguro de Salud ACA",
    "service.aca.description": "Conéctese con proveedores premium de ACA que ofrecen precios competitivos y volúmenes diarios de transferencia confiables. Acceso a múltiples proveedores de respaldo para flujo constante de clientes potenciales durante temporadas pico.",
    
    "service.medicare.title": "Medicare Advantage y Suplementos",
    "service.medicare.description": "Aproveche nuestra red de especialistas en Medicare que proporcionan clientes potenciales envejecidos y transferencias en vivo. Mejores precios que las relaciones directas con redundancia incorporada en todos los proveedores.",
    
    "service.finalExpense.title": "Seguro de Vida de Gastos Finales",
    "service.finalExpense.description": "Acceso a clientes potenciales de gastos finales de alta conversión de múltiples proveedores premium. Volúmenes diarios consistentes con precios transparentes y flexibilidad mes a mes.",
    
    "service.auto.title": "Seguro de Auto",
    "service.auto.description": "Conéctese con nuestra red de clientes potenciales de seguro de auto ofreciendo tarifas competitivas y entrega diaria confiable. Múltiples opciones de proveedores aseguran flujo constante de clientes potenciales para su negocio.",
    
    "service.life.title": "Seguro de Vida",
    "service.life.description": "Clientes potenciales premium de seguro de vida de nuestra red curada de proveedores. Mejor economía que ir directo con la confiabilidad de múltiples relaciones de proveedores.",
    
    "service.va.title": "Soporte Profesional de VA",
    "service.va.description": "Escale sus operaciones con asistencia virtual profesional para gestión de CRM, programación de citas, seguimientos y tareas administrativas. Enfóquese en cerrar mientras nosotros manejamos la infraestructura.",
    
    "common.learnMore": "Aprende Más",
    
    // About
    "about.title1": "Por Qué Elegir",
    "about.title2": "Prime Enroll",
    "about.description1": "Acceso a múltiples proveedores premium significa mejores precios, opciones de respaldo y volúmenes confiables. Nuestras relaciones de red proporcionan 20-30% mejor economía que ir directo a los proveedores.",
    "about.description2": "Infraestructura profesional con términos mes a mes, cumplimiento TCPA/CMS y soporte de crecimiento dedicado. Enfoque de asociación confidencial diseñado para agentes serios listos para escalar.",
    "about.clientsServed": "Clientes Atendidos",
    "about.experience": "Años de Experiencia",
    "about.clarity.title": "Ventaja Multi-Proveedor",
    "about.clarity.description": "Nunca dependa de un solo proveedor. Nuestra red proporciona opciones de respaldo y flujo constante de clientes potenciales en todas las verticales.",
    "about.support.title": "Mejor Economía y Flexibilidad",
    "about.support.description": "Términos mes a mes con ventajas de precios del 20-30% sobre las relaciones directas con proveedores. Asociación profesional de crecimiento sin compromisos a largo plazo.",
    
    // Growth Partnership
    "growth.title1": "Escale de 100 Mensuales a",
    "growth.title2": "500+ Transferencias Diarias",
    "growth.subtitle": "Nuestro enfoque de asociación de crecimiento ayuda a los agentes a escalar sistemáticamente sus operaciones con infraestructura profesional y confiabilidad multi-proveedor.",
    "growth.step1.title": "Punto de Partida: 100+ Mensuales",
    "growth.step1.description": "Agentes solo convirtiendo 100+ mensuales listos para flujo diario constante de clientes potenciales con infraestructura de soporte profesional.",
    "growth.step2.title": "Fase de Crecimiento: 5-50 Diarios",
    "growth.step2.description": "Escalado sistemático con soporte de VA, optimización de CRM y acceso multi-proveedor para volúmenes diarios confiables.",
    "growth.step3.title": "Objetivo de Escala: 500+ Diarios",
    "growth.step3.description": "Volúmenes a nivel empresarial con soporte completo de infraestructura, gestión de cumplimiento y gestión de cuentas dedicada.",
    
    // Qualification Requirements  
    "qualification.title": "Requisitos de Consulta Profesional",
    "qualification.subtitle": "Nos asociamos con agentes serios listos para volúmenes diarios consistentes de clientes potenciales. Nuestro mínimo de 5 diarios asegura el éxito mutuo y operaciones profesionales.",
    "qualification.requirement1": "Mínimo de 5 Transferencias Diarias",
    "qualification.requirement2": "Licencia de Seguro Activa",
    "qualification.requirement3": "Sistema CRM Profesional",
    "qualification.requirement4": "Historial de Conversión Comprobado",
    "qualification.consultation": "Evaluación Profesional Gratuita",
    "qualification.consultationDesc": "Evaluaremos sus costos actuales de clientes potenciales, tasas de conversión y potencial de crecimiento para determinar si nuestra red es la opción correcta para sus operaciones.",
    
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
