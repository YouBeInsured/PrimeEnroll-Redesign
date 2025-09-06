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
    "hero.title1": "We Fill Your Pipeline",
    "hero.title2": "With Ready-to-Enroll Clients",
    "hero.subtitle": "High-Intent, Pre-Qualified Live Call Transfers across Medicare, ACA, Final Expense, Auto, and Life Insurance. Scale your business from 100 monthly to 500+ daily transfers with serious prospects who call YOU.",
    "hero.getStarted": "Free Consultation",
    "hero.viewDemo": "See Our Network",
    "hero.trustedBy": "Trusted by Insurance Agents Converting 100+ Monthly",
    
    // Trust indicators
    "trust.topAgents": "Growth Focused",
    "trust.compliance": "Fully Compliant",
    "trust.noColdCalls": "Professional Support",
    
    // Services
    "services.title1": "Ready-to-Enroll Clients",
    "services.title2": "Across Every Vertical",
    "services.subtitle": "High-Intent Live Call Transfers from Pre-Qualified prospects ready to enroll. Multiple suppliers ensure consistent daily volume.",
    
    "service.aca.title": "ACA",
    "service.aca.description": "Better prices than going direct. Multiple suppliers mean consistent daily leads and backup options during busy seasons.",
    
    "service.medicare.title": "Medicare",
    "service.medicare.description": "Quality Medicare leads from specialists. Aged leads and live transfers with better pricing than direct relationships.",
    
    "service.finalExpense.title": "Final Expense",
    "service.finalExpense.description": "High-converting final expense leads from top suppliers. Consistent daily volume with transparent pricing and no long-term contracts.",
    
    "service.auto.title": "Auto",
    "service.auto.description": "Competitive auto insurance leads with reliable daily delivery. Multiple vendor options keep your pipeline full.",
    
    "service.life.title": "Life",
    "service.life.description": "Premium life insurance leads from proven suppliers. Better pricing and more reliability than going direct.",
    
    "service.va.title": "VA Support Services",
    "service.va.description": "Professional VAs handle your CRM, appointments, and follow-ups. You focus on closing deals while we handle the rest.",
    
    "common.learnMore": "Learn More",
    
    // Why Choose Us
    "about.title1": "Business Problems",
    "about.title2": "We Solve",
    "about.description1": "Inconsistent lead flow? Supplier reliability issues? Scaling bottlenecks? We solve growth problems.",
    "about.description2": "Multiple suppliers, month-to-month terms, full compliance, dedicated support. No contracts.",
    "about.clientsServed": "Agent Partners",
    "about.experience": "Years Experience", 
    "about.clarity.title": "Reliable Pipeline",
    "about.clarity.description": "Never worry about your pipeline drying up. Multiple suppliers mean consistent high-intent transfers every day.",
    "about.support.title": "Scale Fast",
    "about.support.description": "From 100 monthly to 500+ daily transfers. We provide the infrastructure and support to scale without bottlenecks.",
    
    // Growth Partnership
    "growth.title1": "Scale",
    "growth.title2": "from 100 Monthly to 500+ Daily Transfers",
    "growth.subtitle": "Scale systematically with High-Intent transfers and dedicated support.",
    "growth.step1.title": "You're Converting 100+ Monthly",
    "growth.step1.description": "Ready for consistent daily leads with professional support.",
    "growth.step2.title": "Scale to 5-50 Daily",
    "growth.step2.description": "Add VA support, optimize your CRM, and access multiple suppliers for reliable daily volume.",
    "growth.step3.title": "Reach 500+ Daily",
    "growth.step3.description": "Enterprise-level volume with full support, compliance management, and dedicated account management.",
    
    // Qualification Requirements  
    "qualification.title": "Are You Ready?",
    "qualification.subtitle": "For serious agents ready for daily volume. 5 daily minimum ensures mutual success.",
    "qualification.requirement1": "5 Daily Transfer Minimum",
    "qualification.requirement2": "Active Insurance License",
    "qualification.requirement3": "Professional CRM System",
    "qualification.requirement4": "Proven Conversion History",
    "qualification.consultation": "Free Professional Assessment",
    "qualification.consultationDesc": "We'll assess your operations, conversion rates, and growth potential for mutual fit.",
    
    // Features
    "features.title1": "Real Results",
    "features.title2": "Not Just",
    "features.title3": "Empty",
    "features.title4": "Promises",
    "features.subtitle": "We solve real problems: unreliable leads, poor ROI, lack of control. Better transfers, better support.",
    
    "feature.compliance.title": "Fully Compliant",
    "feature.compliance.description": "All campaigns follow CMS guidelines. You're always safe and compliant.",
    
    "feature.agents.title": "Easy Setup",
    "feature.agents.description": "We handle the setup. You focus on closing deals. No tech stress.",
    
    "feature.performance.title": "Real Tracking",
    "feature.performance.description": "Real-time tracking, CRM integration, and analytics that actually matter.",
    
    // Testimonials
    "testimonials.title": "Client Feedback &",
    "testimonials.title2": "Reviews",
    "testimonials.subtitle": "Showcase what clients say about our products and services. Read authentic feedback and reviews from satisfied customers.",
    
    // CTA
    "cta.title": "Ready to Scale?",
    "cta.subtitle": "Better transfers, dedicated support, scale fast.",
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
    "hero.title1": "Escale Su Negocio de Seguros con",
    "hero.title2": "Asociación Profesional de Crecimiento",
    "hero.subtitle": "Acceso a proveedores premium de clientes potenciales en Medicare, ACA, Gastos Finales, Seguro de Auto y Seguro de Vida. Infraestructura profesional y relaciones multi-proveedor diseñadas para escalar sus operaciones de 100 mensuales a niveles empresariales.",
    "hero.getStarted": "Consulta Gratuita",
    "hero.viewDemo": "Ver Nuestra Red",
    "hero.trustedBy": "Confiado por Agentes de Seguros que Convierten 100+ Mensualmente",
    
    // Trust indicators
    "trust.topAgents": "Asociación de Crecimiento",
    "trust.compliance": "Cumple TCPA y CMS",
    "trust.noColdCalls": "Infraestructura Profesional",
    
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
    "about.description1": "Acceso a múltiples proveedores premium significa crecimiento confiable, opciones de respaldo y volúmenes consistentes. Nuestras relaciones de red proporcionan la infraestructura y confiabilidad necesarias para escalar su negocio sistemáticamente.",
    "about.description2": "Asociación profesional de crecimiento con flexibilidad mes a mes, cumplimiento TCPA/CMS y soporte de escalamiento dedicado. Enfoque confidencial diseñado para agentes serios listos para hacer crecer sus operaciones.",
    "about.clientsServed": "Clientes Atendidos",
    "about.experience": "Años de Experiencia",
    "about.clarity.title": "Ventaja Multi-Proveedor",
    "about.clarity.description": "Nunca dependa de un solo proveedor. Nuestra red proporciona opciones de respaldo y flujo constante de clientes potenciales en todas las verticales.",
    "about.support.title": "Infraestructura Profesional de Crecimiento",
    "about.support.description": "Flexibilidad mes a mes con soporte de escalamiento dedicado e infraestructura profesional. Asociación de crecimiento diseñada para ayudarle a alcanzar volúmenes a nivel empresarial sin compromisos a largo plazo.",
    
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
    "qualification.consultationDesc": "Evaluaremos sus operaciones actuales, tasas de conversión y potencial de crecimiento para determinar si nuestra red es la opción correcta para escalar su negocio.",
    
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
