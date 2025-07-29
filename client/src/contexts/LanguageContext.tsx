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
    "hero.title1": "Leads to",
    "hero.title2": "Loyal Customers",
    "hero.subtitle": "Prime Enroll's ACA Kick Starter delivers real, CMS-compliant ACA customers not leads. No spam, no follow-up chase. Just guaranteed, ready-to-enroll clients delivered straight to your CRM.",
    "hero.getStarted": "Get Started Today",
    "hero.viewDemo": "View System Demo",
    "hero.trustedBy": "Trusted By 700+ ACA Agents & ACA Agencies",
    
    // Trust indicators
    "trust.topAgents": "Trusted by Top Agents",
    "trust.compliance": "100% CMS Compliance",
    "trust.noColdCalls": "No Cold Calls",
    
    // Services
    "services.title1": "Where Smart Systems Meet",
    "services.title2": "Seamless Enrollments",
    "services.subtitle": "We combine ACA marketing expertise with performance-driven systems to help insurance agents scale effortlessly and stay compliant.",
    
    "service.aca.title": "ACA Kick Starter",
    "service.aca.description": "A complete DFY (Done-For-You) system that delivers exclusive ACA leads from compliant ad funnels with real-time delivery backed by a guaranteed minimum enrollment.",
    
    "service.acaLive.title": "ACA Live Transfers",
    "service.acaLive.description": "We connect you live with pre-screened ACA prospects actively seeking coverage — no cold calls, no chasing, just real conversations with ready-to-enroll clients.",
    
    "service.medicare.title": "Medicare Live Transfers",
    "service.medicare.description": "We generate high-quality, aged-to-perfection Medicare and Life Insurance calls, tailored to your licensing state, with detailed caller insights and peak contact times.",
    
    "service.finalExpense.title": "Final Expense Live Transfers",
    "service.finalExpense.description": "Speak directly with interested prospects over 50 actively looking for final expense plans. Each transfer is real-time, TCPA compliant, and exclusive to you.",
    
    "service.va.title": "Virtual Assistance for Agents",
    "service.va.description": "Your own trained VA team to help with quoting, CRM management, appointment setting, follow-ups, and more — so you close more with less effort.",
    
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
    "hero.title1": "Clientes Potenciales a",
    "hero.title2": "Clientes Leales",
    "hero.subtitle": "El ACA Kick Starter de Prime Enroll entrega clientes ACA reales y compatibles con CMS, no solo clientes potenciales. Sin spam, sin persecución de seguimiento. Solo clientes garantizados y listos para inscribirse entregados directamente a su CRM.",
    "hero.getStarted": "Comenzar Hoy",
    "hero.viewDemo": "Ver Demo del Sistema",
    "hero.trustedBy": "Confiado por 700+ Agentes ACA y Agencias ACA",
    
    // Trust indicators
    "trust.topAgents": "Confiado por Mejores Agentes",
    "trust.compliance": "100% Cumplimiento CMS",
    "trust.noColdCalls": "Sin Llamadas Frías",
    
    // Services
    "services.title1": "Donde los Sistemas Inteligentes se Encuentran",
    "services.title2": "Inscripciones Sin Problemas",
    "services.subtitle": "Combinamos experiencia en marketing ACA con sistemas orientados al rendimiento para ayudar a los agentes de seguros a escalar sin esfuerzo y mantenerse conformes.",
    
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
