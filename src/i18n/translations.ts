export type Lang = "es" | "en" | "no";

export type Translations = {
  header: { whatsapp: string; agendar: string };
  hero: {
    eyebrow: string;
    titlePre: string;
    titleEm: string;
    titlePost: string;
    sub: string;
    ctaSolid: string;
    ctaAgendar: string;
    ctaCatalogo: string;
  };
  servicios: {
    sectionNum: string;
    title: string;
    note: string;
    categories: Record<"presencia" | "herramientas" | "acompanamiento", string>;
    items: Record<string, { title: string; description: string }>;
  };
  catalogo: {
    sectionNum: string;
    title: string;
    note: string;
    items: Record<string, { title: string; subtitle: string; badge: string }>;
  };
  sistemas: {
    sectionNum: string;
    title: string;
    note: string;
    items: Record<string, { label: string; title: string; description: string }>;
  };
  automatizaciones: {
    eyebrow: string;
    title: string;
    intro: string;
    paraQuienEs: string[];
    features: Record<
      string,
      { title: string; headline: string; before: string; after: string; improves: string[] }
    >;
    comoTrabajo: string;
    workSteps: Record<string, { title: string; description: string }>;
    presupuestoTitle: string;
    presupuestoText: string;
  };
  autodiagnostico: {
    sectionNum: string;
    title: string;
    note: string;
    scale: { label: string; hours: number }[];
    questions: string[];
    resultPre: string;
    resultHoursWeek: string;
    resultMid: string;
    resultHoursMonth: string;
    ctaWhatsapp: string;
    waTemplate: (total: number) => string;
  };
  faq: {
    sectionNum: string;
    title: string;
    note: string;
    items: { question: string; answer: string }[];
  };
  ctaFinal: { sectionNum: string; title: string; ctaWhatsapp: string; ctaAgendar: string };
  footer: string;
  modales: {
    abrirPestana: string;
    quieroEsto: string;
    cerrarVolver: string;
    loQueMejora: string;
    antes: string;
    despues: string;
    verDemo: string;
    verMas: string;
    demoWaTemplate: (title: string) => string;
    featureWaTemplate: (title: string) => string;
    ariaCerrarDemo: string;
    ariaCerrar: string;
    ariaWhatsapp: string;
    ariaAgendar: string;
  };
  heroWaMessage: string;
};

export const TRANSLATIONS: Record<Lang, Translations> = {
  es: {
    header: { whatsapp: "WhatsApp", agendar: "Agendar" },
    hero: {
      eyebrow: "Agencia de desarrollo web & consultoría de procesos",
      titlePre: "Hacemos ",
      titleEm: "visible",
      titlePost: " lo que tu negocio tiene para ofrecer",
      sub: "Diseño y desarrollo de páginas, tiendas online y sistemas a medida — y consultoría para ordenar y digitalizar procesos que hoy se manejan a mano. Más abajo tenés el catálogo completo, con demos reales que podés recorrer.",
      ctaSolid: "Contame tu negocio →",
      ctaAgendar: "Agendar consulta gratuita",
      ctaCatalogo: "Ver el catálogo de demos",
    },
    servicios: {
      sectionNum: "01 — Servicios",
      title: "Lo que hacemos",
      note: "Desde una landing de una sola pantalla hasta un sistema con login y base de datos. Se define según lo que tu negocio necesita, no al revés.",
      categories: {
        presencia: "Presencia online",
        herramientas: "Herramientas para tu negocio",
        acompanamiento: "Acompañamiento",
      },
      items: {
        landing: {
          title: "Landing page",
          description:
            "Una página, un objetivo: que te escriban o te compren. Ideal para lanzar rápido.",
        },
        institucional: {
          title: "Sitio institucional",
          description:
            "Quiénes son, qué hacen, dónde están. La carta de presentación de tu negocio.",
        },
        blog: {
          title: "Blog",
          description:
            "Artículos organizados, buscador y buena base para que te encuentren en Google.",
        },
        panel: {
          title: "Panel de administrador",
          description:
            "Un lugar propio para cargar productos, turnos o novedades sin tocar código.",
        },
        ecommerce: {
          title: "Ecommerce",
          description: "Catálogo, carrito, checkout y stock. Tu vidriera abierta las 24 horas.",
        },
        sistemaMedida: {
          title: "Sistema a medida",
          description:
            "Gestión de turnos, pedidos, reservas o lo que tu operación necesite resolver.",
        },
        appMedida: {
          title: "App a medida",
          description: "Una herramienta propia, pensada para cómo trabajás vos y tu equipo.",
        },
        consultoria: {
          title: "Consultoría de procesos",
          description:
            "Relevamos cómo trabaja tu equipo hoy y ordenamos lo que se puede simplificar o digitalizar.",
        },
        mantenimiento: {
          title: "Mantenimiento mensual",
          description:
            "Cambios, contenido al día y que el sitio nunca se caiga. Vos avisás, nosotros lo resolvemos.",
        },
      },
    },
    catalogo: {
      sectionNum: "02 — Catálogo",
      title: "Demos por rubro",
      note: "Cada ficha abre un sitio real y funcionando. Entrá, recorrelo, y si algo se parece a lo que necesitás, hablamos.",
      items: {
        gastronomia: {
          title: "Restaurantes y bares",
          subtitle:
            "Carta online, fotos que dan hambre y reserva de mesa por WhatsApp en dos toques.",
          badge: "Gastronomía",
        },
        ferreteria: {
          title: "Materiales y ferretería",
          subtitle:
            "Catálogo por categorías, precios claros y pedidos que llegan directo por WhatsApp.",
          badge: "Corralón / Ferretería",
        },
        gimnasio: {
          title: "Gimnasios y boxes",
          subtitle:
            "Planes, horarios de clases y alta de socios nuevos sin planillas ni vueltas.",
          badge: "Gimnasio",
        },
        mecanico: {
          title: "Talleres mecánicos",
          subtitle:
            "Servicios, turnos y presupuesto rápido para que el cliente no tenga que llamar.",
          badge: "Mecánico",
        },
        salon: {
          title: "Peluquerías y estética",
          subtitle:
            "Reserva de turnos, galería de trabajos y contacto directo con la profesional.",
          badge: "Salón / Belleza",
        },
        ecommerce: {
          title: "Tienda online",
          subtitle:
            "Catálogo, carrito y checkout completo. Para marcas que quieren vender online en serio.",
          badge: "Ecommerce",
        },
        dj: {
          title: "DJs y música en vivo",
          subtitle:
            "Portfolio de sets, disponibilidad de fechas y cotización de eventos directo por WhatsApp.",
          badge: "DJ / Eventos",
        },
      },
    },
    sistemas: {
      sectionNum: "03 — Sistemas a medida",
      title: "Recorré el sistema en vivo",
      note: "Esto no es una captura de pantalla: es la app real, funcionando. Entrá y recorrela con datos de ejemplo.",
      items: {
        gestion: {
          label: "Sistema de gestión",
          title: "Sistema de Gestión para PYMES",
          description:
            "Financiero, cobranzas, stock, presupuestos y CRM en un solo panel, todo conectado.",
        },
        consultorios: {
          label: "Consultorios",
          title: "Sistema Consultorios",
          description:
            "Agenda, turnos, pacientes y recordatorios para consultorios y centros de salud.",
        },
        cafe: {
          label: "Café / Gastronomía",
          title: "Sistema Punto de Venta Café",
          description:
            "Pedidos, cocina, stock e ingresos del día en un solo panel, pensado para cafeterías y locales gastronómicos.",
        },
        propiedades: {
          label: "Inmobiliaria / Alquileres",
          title: "Sistema de Propiedades y Alquileres",
          description:
            "Ocupación, mantenimiento, cobros y vencimientos de contrato en un solo panel, para inmobiliarias y administradores de alquileres.",
        },
      },
    },
    automatizaciones: {
      eyebrow: "Consultoría de procesos",
      title: "Ordenamos el proceso antes de automatizarlo",
      intro:
        "Antes de sumar tecnología, miramos cómo trabaja tu equipo hoy: dónde se pierde tiempo, qué se repite a mano, qué información se cae entre un paso y otro. Después, si tiene sentido, se resuelve con automatizaciones — y si hace falta atención inmediata, con un chatbot con inteligencia artificial.",
      paraQuienEs: [
        "Atendés muchas consultas repetidas (precios, turnos, disponibilidad)",
        "Coordinás turnos o pedidos a mano, por WhatsApp o papel",
        "Cargás la misma información en más de un lugar",
      ],
      features: {
        relevamiento: {
          title: "Relevamiento",
          headline: "Un mapa claro de en qué se te va el tiempo",
          before: "No sabés bien cuánto tiempo se va en tareas repetidas.",
          after: "Un diagnóstico claro de qué automatizar primero.",
          improves: [
            "Un relevamiento de cómo trabaja tu equipo hoy, paso a paso.",
            "Prioridad clara: qué conviene automatizar primero.",
            "Diagnóstico sin compromiso, antes de gastar en nada.",
          ],
        },
        chatbot: {
          title: "Chatbot IA",
          headline: "Alguien atendiendo, aunque vos no estés",
          before: "Contestás las mismas preguntas veinte veces por día.",
          after: "El chatbot responde y toma pedidos las 24 horas.",
          improves: [
            "Responde consultas y toma pedidos a cualquier hora, incluso de madrugada.",
            "Menos tiempo tuyo respondiendo lo mismo una y otra vez.",
            "Deriva a una persona cuando la consulta lo necesita.",
          ],
        },
        agenda: {
          title: "Agenda automática",
          headline: "Turnos que se acomodan solos",
          before: "Turnos coordinados a mano, con cruces y olvidos.",
          after: "Agenda integrada a WhatsApp o al sitio, sin superposiciones.",
          improves: [
            "Turnos y reservas sin choques ni doble reserva.",
            "Recordatorios automáticos que bajan el ausentismo.",
            "Se integra a WhatsApp o a tu sitio, sin planillas sueltas.",
          ],
        },
        automatizacion: {
          title: "Automatización",
          headline: "Lo repetitivo, resuelto sin que lo pienses",
          before: "Avisos y seguimientos que hacés uno por uno, a mano.",
          after: "Se disparan solos, en el momento justo.",
          improves: [
            "Avisos y seguimientos que se disparan solos, en el momento justo.",
            "Menos tareas manuales repetitivas para el equipo.",
            "Todo queda registrado, sin depender de que alguien se acuerde.",
          ],
        },
      },
      comoTrabajo: "Cómo trabajo",
      workSteps: {
        diagnostico: {
          title: "Diagnóstico inicial",
          description: "Relevamos cómo trabaja tu equipo hoy, paso a paso.",
        },
        unSistema: {
          title: "Un sistema a la vez",
          description: "Empezamos por el que genere mayor ahorro de tiempo.",
        },
        implementacion: {
          title: "Implementación y prueba",
          description: "Lo ponemos a funcionar y lo probamos junto a tu equipo.",
        },
        capacitacion: {
          title: "Capacitación breve",
          description: "Para que todos sepan usarlo desde el primer día.",
        },
        ajuste: {
          title: "Ajuste y soporte",
          description: "Acompañamos hasta que funcione como tiene que funcionar.",
        },
      },
      presupuestoTitle: "¿Y el presupuesto?",
      presupuestoText:
        "Depende de la cantidad de sistemas a implementar y de la complejidad de cada uno. Por eso el presupuesto se entrega después del diagnóstico inicial, no antes — así cotizamos lo que realmente necesitás, ni de más ni de menos.",
    },
    autodiagnostico: {
      sectionNum: "04 — Autodiagnóstico",
      title: "¿Cuánto tiempo estás perdiendo?",
      note: "Respondé estas cuatro preguntas y te decimos, en horas, cuánto podrías estar ahorrando.",
      scale: [
        { label: "Casi nada (0-1h)", hours: 0.5 },
        { label: "Un rato (2-4h)", hours: 3 },
        { label: "Bastante (5-8h)", hours: 6.5 },
        { label: "Un montón (+8h)", hours: 10 },
      ],
      questions: [
        "¿Cuántas horas por semana perdés respondiendo las mismas preguntas por WhatsApp (precios, horarios, disponibilidad)?",
        "¿Cuánto tiempo te lleva armar presupuestos o cotizaciones a mano?",
        "¿Cuánto tiempo se va en coordinar turnos, pedidos o reservas manualmente?",
        "¿Cuánto tiempo dedicás a cargar o actualizar la misma información en varios lugares (stock, redes, planillas)?",
      ],
      resultPre: "Estás perdiendo unas",
      resultHoursWeek: "horas por semana",
      resultMid: "en tareas que se podrían automatizar. Eso es cerca de",
      resultHoursMonth: "horas al mes",
      ctaWhatsapp: "Contame tu caso por WhatsApp →",
      waTemplate: (total) =>
        `Hola! Hice el autodiagnóstico de la web y estimo que pierdo unas ${total} horas por semana en tareas manuales. Quiero que revisemos mi caso.`,
    },
    faq: {
      sectionNum: "05 — Preguntas frecuentes",
      title: "Antes de escribirnos",
      note: "Las dudas más comunes antes de arrancar un proyecto.",
      items: [
        {
          question: "¿Cuánto tarda en estar lista mi página?",
          answer:
            "Depende del alcance, no hay un número único: una landing simple puede estar en pocos días, un sistema a medida lleva más. El plazo exacto se lo decimos en el diagnóstico inicial, cuando ya sabemos qué estamos construyendo.",
        },
        {
          question: "¿Me podés pasar un precio sin hacer la consulta?",
          answer:
            "Prefiero no tirar un número al aire y después decepcionarte con la propuesta real. En 20 minutos entendemos tu caso y ahí sí te doy una cifra que se sostiene, sin sorpresas después.",
        },
        {
          question: "¿El precio incluye hosting y dominio?",
          answer:
            "El dominio y el hosting corren por separado (son servicios de terceros, con costo anual bajo). Te ayudamos a contratarlos y configurarlos, no tenés que resolverlo solo.",
        },
        {
          question: "¿Puedo pedir cambios después de la entrega?",
          answer:
            "Sí. Los primeros ajustes post-entrega están contemplados en el proyecto, y después podés sumar el mantenimiento mensual para cambios continuos sin tener que renegociar cada vez.",
        },
        {
          question: "¿Tienen mantenimiento mensual?",
          answer:
            "Sí, es uno de los servicios del catálogo: cambios, contenido al día y que el sitio nunca se caiga. Vos avisás qué necesitás, nosotros lo resolvemos.",
        },
        {
          question: "¿Pierdo el trato personal con mis clientes si automatizo algo?",
          answer:
            "Al revés: el chatbot o la agenda automática se ocupan de lo repetitivo (horarios, precios, turnos), y a vos te queda más tiempo para la atención que realmente necesita a una persona.",
        },
        {
          question: "¿Qué pasa si no tengo fotos o contenido propio?",
          answer:
            "No pasa nada. Definimos juntos qué contenido hace falta y de dónde sacarlo en el diagnóstico inicial — no es algo que tengas que resolver antes de hablar con nosotros.",
        },
        {
          question: "¿Cómo es la forma de pago?",
          answer:
            "Se coordina caso a caso después del presupuesto, según el tamaño del proyecto. Lo conversamos directo por WhatsApp o en la consulta, sin letra chica.",
        },
      ],
    },
    ctaFinal: {
      sectionNum: "06 — Contacto",
      title: "Contanos tu idea y nosotros armamos tu sistema.",
      ctaWhatsapp: "Escribinos por WhatsApp →",
      ctaAgendar: "Agendar consulta gratuita (20 min) →",
    },
    footer: "FJORA LABS — DESARROLLO WEB & CONSULTORÍA DE PROCESOS",
    modales: {
      abrirPestana: "Abrir en pestaña nueva",
      quieroEsto: "Quiero esto en mi negocio →",
      cerrarVolver: "Cerrar y volver",
      loQueMejora: "Lo que mejora",
      antes: "Antes",
      despues: "Después",
      verDemo: "Ver demo",
      verMas: "Ver más",
      demoWaTemplate: (title) =>
        `Hola! Vi la demo de ${title} y quiero algo así para mi negocio.`,
      featureWaTemplate: (title) => `Hola! Vi lo de ${title} y quiero esto para mi negocio.`,
      ariaCerrarDemo: "Cerrar demo",
      ariaCerrar: "Cerrar",
      ariaWhatsapp: "Hablar por WhatsApp",
      ariaAgendar: "Agendar una consulta",
    },
    heroWaMessage: "Hola! Vi la página y quiero hacer una consulta para mi negocio.",
  },

  en: {
    header: { whatsapp: "WhatsApp", agendar: "Book a call" },
    hero: {
      eyebrow: "Web development agency & process consulting",
      titlePre: "We make ",
      titleEm: "visible",
      titlePost: " what your business has to offer",
      sub: "Design and development of websites, online stores and custom systems — plus consulting to organize and digitize processes that are still handled by hand today. Below you'll find the full catalog, with real demos you can explore.",
      ctaSolid: "Tell us about your business →",
      ctaAgendar: "Book a free consultation",
      ctaCatalogo: "Browse the demo catalog",
    },
    servicios: {
      sectionNum: "01 — Services",
      title: "What we do",
      note: "From a single-screen landing page to a system with login and a database. It's defined by what your business needs, not the other way around.",
      categories: {
        presencia: "Online presence",
        herramientas: "Tools for your business",
        acompanamiento: "Ongoing support",
      },
      items: {
        landing: {
          title: "Landing page",
          description:
            "One page, one goal: get people to message you or buy. Ideal for launching fast.",
        },
        institucional: {
          title: "Corporate website",
          description: "Who you are, what you do, where you are. Your business card online.",
        },
        blog: {
          title: "Blog",
          description:
            "Organized articles, a search bar, and a solid base to get found on Google.",
        },
        panel: {
          title: "Admin panel",
          description: "Your own place to load products, bookings or updates without touching code.",
        },
        ecommerce: {
          title: "Ecommerce",
          description: "Catalog, cart, checkout and stock. Your storefront, open 24 hours a day.",
        },
        sistemaMedida: {
          title: "Custom system",
          description:
            "Booking, order and reservation management — or whatever your operation needs to solve.",
        },
        appMedida: {
          title: "Custom app",
          description: "A tool of your own, built around how you and your team actually work.",
        },
        consultoria: {
          title: "Process consulting",
          description:
            "We map how your team works today and sort out what can be simplified or digitized.",
        },
        mantenimiento: {
          title: "Monthly maintenance",
          description:
            "Changes, up-to-date content, and a site that never goes down. You flag it, we handle it.",
        },
      },
    },
    catalogo: {
      sectionNum: "02 — Catalog",
      title: "Demos by industry",
      note: "Each card opens a real, working site. Go in, explore it, and if something looks like what you need, let's talk.",
      items: {
        gastronomia: {
          title: "Restaurants and bars",
          subtitle:
            "Online menu, mouth-watering photos, and table bookings via WhatsApp in two taps.",
          badge: "Food & Drink",
        },
        ferreteria: {
          title: "Building supplies & hardware",
          subtitle:
            "Catalog by category, clear pricing, and orders that land straight in WhatsApp.",
          badge: "Hardware Store",
        },
        gimnasio: {
          title: "Gyms and boxes",
          subtitle: "Plans, class schedules, and new member sign-up without spreadsheets or hassle.",
          badge: "Gym",
        },
        mecanico: {
          title: "Auto repair shops",
          subtitle: "Services, bookings, and quick quotes so the customer doesn't have to call.",
          badge: "Auto Shop",
        },
        salon: {
          title: "Salons and beauty studios",
          subtitle: "Appointment booking, a work gallery, and direct contact with the professional.",
          badge: "Salon / Beauty",
        },
        ecommerce: {
          title: "Online store",
          subtitle: "Full catalog, cart and checkout. For brands that want to sell online for real.",
          badge: "Ecommerce",
        },
        dj: {
          title: "DJs and live music",
          subtitle: "Set portfolio, date availability, and event quotes straight over WhatsApp.",
          badge: "DJ / Events",
        },
      },
    },
    sistemas: {
      sectionNum: "03 — Custom systems",
      title: "Take the system for a spin",
      note: "This isn't a screenshot — it's the real app, running live. Go in and explore it with sample data.",
      items: {
        gestion: {
          label: "Management system",
          title: "Management System for SMBs",
          description:
            "Finance, collections, stock, quotes and CRM in a single panel, all connected.",
        },
        consultorios: {
          label: "Medical practices",
          title: "Medical Practice System",
          description: "Schedule, appointments, patients and reminders for clinics and health centers.",
        },
        cafe: {
          label: "Café / Food service",
          title: "Café Point-of-Sale System",
          description:
            "Orders, kitchen, stock and daily revenue in a single panel, built for cafés and food spots.",
        },
        propiedades: {
          label: "Real estate / Rentals",
          title: "Property & Rental Management System",
          description:
            "Occupancy, maintenance, payments and lease renewals in a single panel, for property managers and landlords.",
        },
      },
    },
    automatizaciones: {
      eyebrow: "Process consulting",
      title: "We organize the process before automating it",
      intro:
        "Before adding technology, we look at how your team works today: where time gets lost, what gets repeated by hand, what information falls through the cracks between steps. Then, if it makes sense, we solve it with automation — and if immediate attention is needed, with an AI-powered chatbot.",
      paraQuienEs: [
        "You handle a lot of repeat questions (prices, availability, bookings)",
        "You coordinate bookings or orders by hand, over WhatsApp or on paper",
        "You enter the same information in more than one place",
      ],
      features: {
        relevamiento: {
          title: "Assessment",
          headline: "A clear map of where your time is going",
          before: "You're not sure how much time goes into repetitive tasks.",
          after: "A clear diagnosis of what to automate first.",
          improves: [
            "A step-by-step assessment of how your team works today.",
            "Clear priority: what's worth automating first.",
            "A no-commitment diagnosis, before spending anything.",
          ],
        },
        chatbot: {
          title: "AI Chatbot",
          headline: "Someone's answering, even when you're not there",
          before: "You answer the same questions twenty times a day.",
          after: "The chatbot replies and takes orders around the clock.",
          improves: [
            "Answers questions and takes orders any time, even at 3 a.m.",
            "Less of your time spent repeating the same answers.",
            "Hands off to a person when the question actually needs one.",
          ],
        },
        agenda: {
          title: "Automatic scheduling",
          headline: "Bookings that sort themselves out",
          before: "Bookings coordinated by hand, with clashes and missed slots.",
          after: "Scheduling built into WhatsApp or your site, with no overlaps.",
          improves: [
            "Bookings and reservations with no clashes or double-booking.",
            "Automatic reminders that cut down no-shows.",
            "Plugs into WhatsApp or your site — no loose spreadsheets.",
          ],
        },
        automatizacion: {
          title: "Automation",
          headline: "The repetitive stuff, handled without a second thought",
          before: "Reminders and follow-ups you send one by one, by hand.",
          after: "They fire off on their own, at just the right time.",
          improves: [
            "Reminders and follow-ups that fire on their own, right on time.",
            "Fewer repetitive manual tasks for the team.",
            "Everything gets logged, without relying on someone remembering.",
          ],
        },
      },
      comoTrabajo: "How I work",
      workSteps: {
        diagnostico: {
          title: "Initial diagnosis",
          description: "We map how your team works today, step by step.",
        },
        unSistema: {
          title: "One system at a time",
          description: "We start with whichever saves you the most time.",
        },
        implementacion: {
          title: "Implementation and testing",
          description: "We get it running and test it together with your team.",
        },
        capacitacion: {
          title: "Short training",
          description: "So everyone knows how to use it from day one.",
        },
        ajuste: {
          title: "Fine-tuning and support",
          description: "We stick around until it works exactly the way it should.",
        },
      },
      presupuestoTitle: "What about the budget?",
      presupuestoText:
        "It depends on how many systems need to go in and how complex each one is. That's why the quote comes after the initial diagnosis, not before — so we price exactly what you need, no more and no less.",
    },
    autodiagnostico: {
      sectionNum: "04 — Self-assessment",
      title: "How much time are you losing?",
      note: "Answer these four questions and we'll tell you, in hours, how much you could be saving.",
      scale: [
        { label: "Almost none (0-1h)", hours: 0.5 },
        { label: "A bit (2-4h)", hours: 3 },
        { label: "Quite a lot (5-8h)", hours: 6.5 },
        { label: "A ton (8h+)", hours: 10 },
      ],
      questions: [
        "How many hours a week do you lose answering the same questions on WhatsApp (prices, hours, availability)?",
        "How long does it take you to put together quotes by hand?",
        "How much time goes into coordinating bookings, orders or reservations manually?",
        "How much time do you spend loading or updating the same information in several places (stock, social media, spreadsheets)?",
      ],
      resultPre: "You're losing about",
      resultHoursWeek: "hours per week",
      resultMid: "on tasks that could be automated. That's roughly",
      resultHoursMonth: "hours a month",
      ctaWhatsapp: "Tell us about your case on WhatsApp →",
      waTemplate: (total) =>
        `Hi! I did the website self-assessment and I estimate I'm losing about ${total} hours a week on manual tasks. I'd like you to take a look at my case.`,
    },
    faq: {
      sectionNum: "05 — Frequently asked questions",
      title: "Before you reach out",
      note: "The most common questions before starting a project.",
      items: [
        {
          question: "How long until my site is ready?",
          answer:
            "It depends on the scope — there's no single number: a simple landing page can be ready in a few days, a custom system takes longer. We give you the exact timeline in the initial diagnosis, once we know what we're building.",
        },
        {
          question: "Can you give me a price without a call first?",
          answer:
            "I'd rather not throw out a number and then disappoint you with the real proposal. In 20 minutes we understand your case, and that's when I give you a figure that actually holds up, with no surprises later.",
        },
        {
          question: "Does the price include hosting and domain?",
          answer:
            "Domain and hosting run separately (they're third-party services, with a low annual cost). We help you set them up and configure them — you don't have to figure it out alone.",
        },
        {
          question: "Can I request changes after delivery?",
          answer:
            "Yes. The first round of post-delivery tweaks is included in the project, and after that you can add monthly maintenance for ongoing changes without renegotiating every time.",
        },
        {
          question: "Do you offer monthly maintenance?",
          answer:
            "Yes, it's one of the services in the catalog: changes, up-to-date content, and a site that never goes down. You flag what you need, we take care of it.",
        },
        {
          question: "Do I lose the personal touch with my customers if I automate something?",
          answer:
            "The opposite: the chatbot or automatic scheduling handles the repetitive stuff (hours, prices, bookings), which frees up more of your time for the interactions that actually need a person.",
        },
        {
          question: "What if I don't have photos or my own content?",
          answer:
            "That's fine. We figure out together what content is needed and where to get it during the initial diagnosis — it's not something you need to solve before talking to us.",
        },
        {
          question: "How does payment work?",
          answer:
            "It's arranged case by case after the quote, depending on the size of the project. We talk it through directly on WhatsApp or during the call, no fine print.",
        },
      ],
    },
    ctaFinal: {
      sectionNum: "06 — Contact",
      title: "Tell us your idea and we'll build your system.",
      ctaWhatsapp: "Message us on WhatsApp →",
      ctaAgendar: "Book a free consultation (20 min) →",
    },
    footer: "FJORA LABS — WEB DEVELOPMENT & PROCESS CONSULTING",
    modales: {
      abrirPestana: "Open in a new tab",
      quieroEsto: "I want this for my business →",
      cerrarVolver: "Close and go back",
      loQueMejora: "What gets better",
      antes: "Before",
      despues: "After",
      verDemo: "View demo",
      verMas: "See more",
      demoWaTemplate: (title) =>
        `Hi! I saw the ${title} demo and I'd like something like that for my business.`,
      featureWaTemplate: (title) =>
        `Hi! I saw the ${title} feature and I'd like this for my business.`,
      ariaCerrarDemo: "Close demo",
      ariaCerrar: "Close",
      ariaWhatsapp: "Chat on WhatsApp",
      ariaAgendar: "Book a consultation",
    },
    heroWaMessage: "Hi! I saw the website and I'd like to ask about a project for my business.",
  },

  no: {
    header: { whatsapp: "WhatsApp", agendar: "Bestill møte" },
    hero: {
      eyebrow: "Byrå for webutvikling og prosessrådgivning",
      titlePre: "Vi gjør ",
      titleEm: "synlig",
      titlePost: " det bedriften din har å tilby",
      sub: "Design og utvikling av nettsider, nettbutikker og skreddersydde systemer — pluss rådgivning for å organisere og digitalisere prosesser som i dag gjøres for hånd. Lenger ned finner du hele katalogen, med ekte demoer du kan utforske.",
      ctaSolid: "Fortell om bedriften din →",
      ctaAgendar: "Book en gratis samtale",
      ctaCatalogo: "Se demokatalogen",
    },
    servicios: {
      sectionNum: "01 — Tjenester",
      title: "Det vi gjør",
      note: "Fra en enkel landingsside til et system med innlogging og database. Det bestemmes av det bedriften din trenger, ikke omvendt.",
      categories: {
        presencia: "Synlighet på nett",
        herramientas: "Verktøy for bedriften din",
        acompanamiento: "Løpende oppfølging",
      },
      items: {
        landing: {
          title: "Landingsside",
          description:
            "Én side, ett mål: at folk skriver til deg eller kjøper. Ideelt for en rask lansering.",
        },
        institucional: {
          title: "Bedriftsnettside",
          description: "Hvem dere er, hva dere gjør, hvor dere holder til. Bedriftens ansikt utad.",
        },
        blog: {
          title: "Blogg",
          description:
            "Organiserte artikler, søkefunksjon og et godt grunnlag for å bli funnet på Google.",
        },
        panel: {
          title: "Administrasjonspanel",
          description:
            "Et eget sted for å legge inn produkter, timer eller nyheter uten å røre kode.",
        },
        ecommerce: {
          title: "Nettbutikk",
          description: "Katalog, handlekurv, kasse og lager. Utstillingsvinduet ditt, åpent døgnet rundt.",
        },
        sistemaMedida: {
          title: "Skreddersydd system",
          description:
            "Håndtering av timer, bestillinger, reservasjoner — eller det driften din trenger å løse.",
        },
        appMedida: {
          title: "Skreddersydd app",
          description: "Et eget verktøy, bygget rundt måten du og teamet ditt faktisk jobber på.",
        },
        consultoria: {
          title: "Prosessrådgivning",
          description:
            "Vi kartlegger hvordan teamet ditt jobber i dag, og finner ut hva som kan forenkles eller digitaliseres.",
        },
        mantenimiento: {
          title: "Månedlig vedlikehold",
          description:
            "Endringer, oppdatert innhold, og en side som aldri går ned. Du sier ifra, vi løser det.",
        },
      },
    },
    catalogo: {
      sectionNum: "02 — Katalog",
      title: "Demoer per bransje",
      note: "Hvert kort åpner et ekte, fungerende nettsted. Gå inn, utforsk det, og hvis noe ligner på det du trenger, tar vi en prat.",
      items: {
        gastronomia: {
          title: "Restauranter og barer",
          subtitle: "Meny på nett, appetittvekkende bilder og bordbestilling via WhatsApp på to trykk.",
          badge: "Restaurant",
        },
        ferreteria: {
          title: "Byggevarer og jernvare",
          subtitle:
            "Katalog etter kategori, tydelige priser og bestillinger som kommer rett inn på WhatsApp.",
          badge: "Byggevarer",
        },
        gimnasio: {
          title: "Treningssentre",
          subtitle: "Medlemskap, timeplaner og påmelding av nye medlemmer uten regneark eller styr.",
          badge: "Treningssenter",
        },
        mecanico: {
          title: "Bilverksteder",
          subtitle: "Tjenester, timebestilling og rask prisoverslag, uten at kunden må ringe.",
          badge: "Bilverksted",
        },
        salon: {
          title: "Frisører og skjønnhetssalonger",
          subtitle: "Timebestilling, bildegalleri og direkte kontakt med den ansvarlige.",
          badge: "Salong / Skjønnhet",
        },
        ecommerce: {
          title: "Nettbutikk",
          subtitle: "Full katalog, handlekurv og kasse. For merker som vil selge seriøst på nett.",
          badge: "Nettbutikk",
        },
        dj: {
          title: "DJ-er og liveunderholdning",
          subtitle: "Portefølje av sett, tilgjengelige datoer og pristilbud rett over WhatsApp.",
          badge: "DJ / Arrangement",
        },
      },
    },
    sistemas: {
      sectionNum: "03 — Skreddersydde systemer",
      title: "Utforsk systemet live",
      note: "Dette er ikke et skjermbilde — det er den ekte appen, i drift. Gå inn og utforsk den med eksempeldata.",
      items: {
        gestion: {
          label: "Styringssystem",
          title: "Styringssystem for SMB-er",
          description:
            "Økonomi, purringer, lager, tilbud og CRM i ett samlet panel, alt koblet sammen.",
        },
        consultorios: {
          label: "Klinikker",
          title: "System for legekontor",
          description: "Timebok, avtaler, pasienter og påminnelser for klinikker og helsesentre.",
        },
        cafe: {
          label: "Kafé / Servering",
          title: "Kassesystem for kafé",
          description:
            "Bestillinger, kjøkken, lager og dagens inntekter i ett panel, laget for kaféer og serveringssteder.",
        },
        propiedades: {
          label: "Eiendom / Utleie",
          title: "System for eiendom og utleie",
          description:
            "Belegg, vedlikehold, betalinger og kontraktsfornyelser i ett panel, for utleiere og eiendomsforvaltere.",
        },
      },
    },
    automatizaciones: {
      eyebrow: "Prosessrådgivning",
      title: "Vi rydder i prosessen før vi automatiserer den",
      intro:
        "Før vi legger til teknologi, ser vi på hvordan teamet ditt jobber i dag: hvor tiden forsvinner, hva som gjentas for hånd, hvilken informasjon som faller mellom stolene. Deretter, hvis det gir mening, løser vi det med automatisering — og hvis det trengs rask respons, med en chatbot med kunstig intelligens.",
      paraQuienEs: [
        "Du svarer på mange av de samme spørsmålene (priser, ledig tid, timer)",
        "Du koordinerer timer eller bestillinger for hånd, via WhatsApp eller på papir",
        "Du legger inn den samme informasjonen flere steder",
      ],
      features: {
        relevamiento: {
          title: "Kartlegging",
          headline: "Et tydelig bilde av hvor tiden din går",
          before: "Du er ikke sikker på hvor mye tid som går med til repeterende oppgaver.",
          after: "En tydelig diagnose av hva som bør automatiseres først.",
          improves: [
            "En kartlegging av hvordan teamet ditt jobber i dag, steg for steg.",
            "Tydelig prioritet: hva som lønner seg å automatisere først.",
            "En uforpliktende diagnose, før du bruker penger på noe.",
          ],
        },
        chatbot: {
          title: "KI-chatbot",
          headline: "Noen svarer, selv når du ikke er der",
          before: "Du svarer på de samme spørsmålene tjue ganger om dagen.",
          after: "Chatboten svarer og tar imot bestillinger døgnet rundt.",
          improves: [
            "Svarer på spørsmål og tar imot bestillinger når som helst, selv midt på natten.",
            "Mindre av din tid går med til å svare det samme om og om igjen.",
            "Sender saken videre til en person når spørsmålet faktisk krever det.",
          ],
        },
        agenda: {
          title: "Automatisk timebok",
          headline: "Timer som ordner seg selv",
          before: "Timer koordinert for hånd, med kollisjoner og glipp.",
          after: "Timebok integrert med WhatsApp eller nettsiden, uten overlapp.",
          improves: [
            "Timer og reservasjoner uten kollisjoner eller dobbeltbooking.",
            "Automatiske påminnelser som reduserer uteblivelser.",
            "Kobles til WhatsApp eller nettsiden din, uten løse regneark.",
          ],
        },
        automatizacion: {
          title: "Automatisering",
          headline: "Det repeterende, løst uten at du tenker på det",
          before: "Varsler og oppfølging du gjør én etter én, for hånd.",
          after: "De sendes ut av seg selv, akkurat i rett øyeblikk.",
          improves: [
            "Varsler og oppfølging som sendes ut av seg selv, i rett øyeblikk.",
            "Færre repeterende manuelle oppgaver for teamet.",
            "Alt blir registrert, uten å være avhengig av at noen husker det.",
          ],
        },
      },
      comoTrabajo: "Slik jobber jeg",
      workSteps: {
        diagnostico: {
          title: "Innledende diagnose",
          description: "Vi kartlegger hvordan teamet ditt jobber i dag, steg for steg.",
        },
        unSistema: {
          title: "Ett system om gangen",
          description: "Vi starter med det som sparer deg mest tid.",
        },
        implementacion: {
          title: "Implementering og testing",
          description: "Vi setter det i drift og tester det sammen med teamet ditt.",
        },
        capacitacion: {
          title: "Kort opplæring",
          description: "Slik at alle kan bruke det fra dag én.",
        },
        ajuste: {
          title: "Justering og support",
          description: "Vi følger opp til det fungerer akkurat slik det skal.",
        },
      },
      presupuestoTitle: "Hva med budsjettet?",
      presupuestoText:
        "Det avhenger av hvor mange systemer som skal på plass og hvor komplekst hvert av dem er. Derfor kommer tilbudet etter den innledende diagnosen, ikke før — slik prissetter vi akkurat det du trenger, verken mer eller mindre.",
    },
    autodiagnostico: {
      sectionNum: "04 — Selvdiagnose",
      title: "Hvor mye tid taper du?",
      note: "Svar på disse fire spørsmålene, så forteller vi deg, i timer, hvor mye du kan spare.",
      scale: [
        { label: "Nesten ingenting (0-1t)", hours: 0.5 },
        { label: "Litt (2-4t)", hours: 3 },
        { label: "En del (5-8t)", hours: 6.5 },
        { label: "Mye (8t+)", hours: 10 },
      ],
      questions: [
        "Hvor mange timer i uken taper du på å svare på de samme spørsmålene på WhatsApp (priser, åpningstider, ledig tid)?",
        "Hvor lang tid tar det å lage tilbud eller prisoverslag for hånd?",
        "Hvor mye tid går med til å koordinere timer, bestillinger eller reservasjoner manuelt?",
        "Hvor mye tid bruker du på å legge inn eller oppdatere den samme informasjonen flere steder (lager, sosiale medier, regneark)?",
      ],
      resultPre: "Du taper omtrent",
      resultHoursWeek: "timer i uken",
      resultMid: "på oppgaver som kunne vært automatisert. Det er rundt",
      resultHoursMonth: "timer i måneden",
      ctaWhatsapp: "Fortell om saken din på WhatsApp →",
      waTemplate: (total) =>
        `Hei! Jeg gjorde selvdiagnosen på nettsiden og anslår at jeg taper omtrent ${total} timer i uken på manuelle oppgaver. Jeg vil gjerne at dere ser på saken min.`,
    },
    faq: {
      sectionNum: "05 — Ofte stilte spørsmål",
      title: "Før du tar kontakt",
      note: "De vanligste spørsmålene før man starter et prosjekt.",
      items: [
        {
          question: "Hvor lang tid tar det før siden min er klar?",
          answer:
            "Det avhenger av omfanget — det finnes ikke ett svar: en enkel landingsside kan være klar på noen dager, et skreddersydd system tar lengre tid. Vi gir deg en nøyaktig tidsramme i den innledende diagnosen, når vi vet hva vi bygger.",
        },
        {
          question: "Kan du gi meg en pris uten en samtale først?",
          answer:
            "Jeg foretrekker å ikke kaste ut et tall og deretter skuffe deg med det reelle forslaget. På 20 minutter forstår vi saken din, og da gir jeg deg et tall som faktisk holder, uten overraskelser senere.",
        },
        {
          question: "Inkluderer prisen hosting og domene?",
          answer:
            "Domene og hosting kommer separat (det er tredjepartstjenester, med lav årlig kostnad). Vi hjelper deg å bestille og sette dem opp — du trenger ikke løse det alene.",
        },
        {
          question: "Kan jeg be om endringer etter levering?",
          answer:
            "Ja. De første justeringene etter levering er inkludert i prosjektet, og etterpå kan du legge til månedlig vedlikehold for løpende endringer uten å reforhandle hver gang.",
        },
        {
          question: "Tilbyr dere månedlig vedlikehold?",
          answer:
            "Ja, det er en av tjenestene i katalogen: endringer, oppdatert innhold, og en side som aldri går ned. Du sier ifra hva du trenger, vi løser det.",
        },
        {
          question: "Mister jeg den personlige kontakten med kundene mine hvis jeg automatiserer noe?",
          answer:
            "Tvert imot: chatboten eller den automatiske timeboken tar seg av det repeterende (åpningstider, priser, timer), og du får mer tid til den kontakten som faktisk trenger et menneske.",
        },
        {
          question: "Hva om jeg ikke har egne bilder eller eget innhold?",
          answer:
            "Ingen problem. Vi finner sammen ut hvilket innhold som trengs og hvor det kan hentes fra i den innledende diagnosen — det er ikke noe du trenger å løse før du snakker med oss.",
        },
        {
          question: "Hvordan fungerer betalingen?",
          answer:
            "Det avtales fra sak til sak etter tilbudet, avhengig av prosjektets størrelse. Vi tar det direkte på WhatsApp eller i samtalen, uten liten skrift.",
        },
      ],
    },
    ctaFinal: {
      sectionNum: "06 — Kontakt",
      title: "Fortell oss om ideen din, så bygger vi systemet ditt.",
      ctaWhatsapp: "Skriv til oss på WhatsApp →",
      ctaAgendar: "Book en gratis samtale (20 min) →",
    },
    footer: "FJORA LABS — WEBUTVIKLING OG PROSESSRÅDGIVNING",
    modales: {
      abrirPestana: "Åpne i ny fane",
      quieroEsto: "Jeg vil ha dette i bedriften min →",
      cerrarVolver: "Lukk og gå tilbake",
      loQueMejora: "Det som blir bedre",
      antes: "Før",
      despues: "Etter",
      verDemo: "Se demo",
      verMas: "Se mer",
      demoWaTemplate: (title) =>
        `Hei! Jeg så demoen av ${title} og vil gjerne ha noe lignende i bedriften min.`,
      featureWaTemplate: (title) =>
        `Hei! Jeg så funksjonen ${title} og vil gjerne ha dette i bedriften min.`,
      ariaCerrarDemo: "Lukk demo",
      ariaCerrar: "Lukk",
      ariaWhatsapp: "Snakk på WhatsApp",
      ariaAgendar: "Book en samtale",
    },
    heroWaMessage: "Hei! Jeg så nettsiden og vil gjerne spørre om et prosjekt for bedriften min.",
  },
};
