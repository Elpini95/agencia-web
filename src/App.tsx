import { useState } from "react";
import {
  Route,
  Bot,
  CalendarClock,
  RefreshCw,
  LayoutTemplate,
  Building2,
  Newspaper,
  LayoutDashboard,
  ShoppingCart,
  Workflow,
  Smartphone,
  ListChecks,
  Wrench,
  UtensilsCrossed,
  Hammer,
  Dumbbell,
  Scissors,
  Music2,
  Check,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import KineticGrid from "@/components/ui/kinetic-grid";
import { FeatureCard } from "@/components/ui/grid-feature-cards";
import CatalogMarquee, {
  type RuixenCardProps,
} from "@/components/ui/catalog-marquee";
import WhatsappBubble from "@/components/ui/whatsapp-bubble";
import AutodiagnosticoForm from "@/components/ui/autodiagnostico";
import FaqAccordion, { type FaqItem } from "@/components/ui/faq-accordion";

const SERVICE_FEATURES = [
  {
    title: "Landing page",
    icon: LayoutTemplate,
    description:
      "Una página, un objetivo: que te escriban o te compren. Ideal para lanzar rápido.",
  },
  {
    title: "Sitio institucional",
    icon: Building2,
    description:
      "Quiénes son, qué hacen, dónde están. La carta de presentación de tu negocio.",
  },
  {
    title: "Blog",
    icon: Newspaper,
    description:
      "Artículos organizados, buscador y buena base para que te encuentren en Google.",
  },
  {
    title: "Panel de administrador",
    icon: LayoutDashboard,
    description:
      "Un lugar propio para cargar productos, turnos o novedades sin tocar código.",
  },
  {
    title: "Ecommerce",
    icon: ShoppingCart,
    description: "Catálogo, carrito, checkout y stock. Tu vidriera abierta las 24 horas.",
  },
  {
    title: "Sistema a medida",
    icon: Workflow,
    description:
      "Gestión de turnos, pedidos, reservas o lo que tu operación necesite resolver.",
  },
  {
    title: "App a medida",
    icon: Smartphone,
    description: "Una herramienta propia, pensada para cómo trabajás vos y tu equipo.",
  },
  {
    title: "Consultoría de procesos",
    icon: ListChecks,
    description:
      "Relevamos cómo trabaja tu equipo hoy y ordenamos lo que se puede simplificar o digitalizar.",
  },
  {
    title: "Mantenimiento mensual",
    icon: Wrench,
    description:
      "Cambios, contenido al día y que el sitio nunca se caiga. Vos avisás, nosotros lo resolvemos.",
  },
];

function ServiceFeatureGrid() {
  const shouldReduceMotion = useReducedMotion();
  const grid = (
    <div className="feature-grid services-grid grid grid-cols-1 divide-x divide-y divide-dashed border border-dashed sm:grid-cols-2 md:grid-cols-3">
      {SERVICE_FEATURES.map((feature) => (
        <FeatureCard key={feature.title} feature={feature} className="service-tile" />
      ))}
    </div>
  );

  if (shouldReduceMotion) return grid;

  return (
    <motion.div
      initial={{ filter: "blur(4px)", translateY: -8, opacity: 0 }}
      whileInView={{ filter: "blur(0px)", translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2, duration: 0.8 }}
    >
      {grid}
    </motion.div>
  );
}

const CATALOG: RuixenCardProps[] = [
  {
    href: "https://gastronomia-demo.vercel.app/",
    title: "Restaurantes y bares",
    subtitle:
      "Carta online, fotos que dan hambre y reserva de mesa por WhatsApp en dos toques.",
    icon: UtensilsCrossed,
    image: "/catalogo/gastronomia.jpg",
    badge: { text: "Gastronomía", variant: "red" },
  },
  {
    href: "https://corralon-demo.vercel.app/",
    title: "Materiales y ferretería",
    subtitle:
      "Catálogo por categorías, precios claros y pedidos que llegan directo por WhatsApp.",
    icon: Hammer,
    image: "/catalogo/corralon.jpg",
    badge: { text: "Corralón / Ferretería", variant: "blue" },
  },
  {
    href: "https://gym-demo-ten-rosy.vercel.app/",
    title: "Gimnasios y boxes",
    subtitle:
      "Planes, horarios de clases y alta de socios nuevos sin planillas ni vueltas.",
    icon: Dumbbell,
    image: "/catalogo/gimnasio.jpg",
    badge: { text: "Gimnasio", variant: "mustard" },
  },
  {
    href: "https://mecanico-demo.vercel.app/",
    title: "Talleres mecánicos",
    subtitle:
      "Servicios, turnos y presupuesto rápido para que el cliente no tenga que llamar.",
    icon: Wrench,
    image: "/catalogo/mecanico.jpg",
    badge: { text: "Mecánico", variant: "teal" },
  },
  {
    href: "https://salon-demo-web-tau.vercel.app/",
    title: "Peluquerías y estética",
    subtitle:
      "Reserva de turnos, galería de trabajos y contacto directo con la profesional.",
    icon: Scissors,
    image: "/catalogo/salon.jpg",
    badge: { text: "Salón / Belleza", variant: "red" },
  },
  {
    href: "https://lilianacarro.vercel.app/",
    title: "Tienda online",
    subtitle:
      "Catálogo, carrito y checkout completo. Para marcas que quieren vender online en serio.",
    icon: ShoppingCart,
    image: "/catalogo/ecommerce.jpg",
    badge: { text: "Ecommerce", variant: "blue" },
  },
  {
    href: "https://djs-demo.vercel.app/",
    title: "DJs y música en vivo",
    subtitle:
      "Portfolio de sets, disponibilidad de fechas y cotización de eventos directo por WhatsApp.",
    icon: Music2,
    image: "/catalogo/dj.jpg",
    badge: { text: "DJ / Eventos", variant: "mustard" },
  },
];

type SistemaData = {
  href: string;
  label: string;
  color: string;
  title: string;
};

const SISTEMAS: SistemaData[] = [
  {
    href: "https://crm-fjoralabs.vercel.app/",
    label: "Sistema de gestión",
    color: "var(--stamp-teal)",
    title: "Sistema de Gestión para PYMES",
  },
  {
    href: "https://fjoraconsultorios.vercel.app/",
    label: "Consultorios",
    color: "var(--stamp-red)",
    title: "Sistema Consultorios",
  },
];

function SistemaPanel({ href, label, color, title }: SistemaData) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="sistema-panel">
      <div className="sistema-top">
        <span className="stamp" style={{ color }}>
          {label}
        </span>
        <a
          className="sistema-open"
          href={href}
          target="_blank"
          rel="noopener noreferrer"
        >
          Abrir en pestaña nueva
          <span className="arrow">↗</span>
        </a>
      </div>
      <h3>{title}</h3>
      <div className="sistema-frame-wrap">
        {loaded ? (
          <iframe src={href} title={title} />
        ) : (
          <button
            type="button"
            className="sistema-load"
            onClick={() => setLoaded(true)}
          >
            <span>Cargar demo en vivo</span>
            <span className="arrow">→</span>
          </button>
        )}
      </div>
    </div>
  );
}

function SistemasSplit() {
  const shouldReduceMotion = useReducedMotion();
  const grid = (
    <div className="sistemas-split">
      {SISTEMAS.map((sistema) => (
        <SistemaPanel key={sistema.href} {...sistema} />
      ))}
    </div>
  );

  if (shouldReduceMotion) return grid;

  return (
    <motion.div
      initial={{ filter: "blur(4px)", translateY: -8, opacity: 0 }}
      whileInView={{ filter: "blur(0px)", translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2, duration: 0.8 }}
    >
      {grid}
    </motion.div>
  );
}

function CatalogCarousel() {
  const shouldReduceMotion = useReducedMotion();
  const carousel = <CatalogMarquee cards={CATALOG} />;

  if (shouldReduceMotion) return carousel;

  return (
    <motion.div
      initial={{ filter: "blur(4px)", translateY: -8, opacity: 0 }}
      whileInView={{ filter: "blur(0px)", translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2, duration: 0.8 }}
    >
      {carousel}
    </motion.div>
  );
}

const AUTO_FEATURES = [
  {
    title: "Relevamiento",
    icon: Route,
    description: "Cómo se hacen las cosas hoy, paso a paso.",
  },
  {
    title: "Chatbot IA",
    icon: Bot,
    description: "Responde consultas frecuentes y toma pedidos las 24 horas.",
  },
  {
    title: "Agenda automática",
    icon: CalendarClock,
    description: "Integrada a WhatsApp o al sitio, sin cruces de turnos.",
  },
  {
    title: "Automatización",
    icon: RefreshCw,
    description: "Avisos y seguimientos que hoy se hacen a mano, resueltos solos.",
  },
];

function AutoFeatureGrid() {
  const shouldReduceMotion = useReducedMotion();
  const grid = (
    <div className="feature-grid auto-grid grid grid-cols-1 divide-x divide-y divide-dashed border border-dashed sm:grid-cols-2">
      {AUTO_FEATURES.map((feature) => (
        <FeatureCard key={feature.title} feature={feature} />
      ))}
    </div>
  );

  if (shouldReduceMotion) return grid;

  return (
    <motion.div
      initial={{ filter: "blur(4px)", translateY: -8, opacity: 0 }}
      whileInView={{ filter: "blur(0px)", translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2, duration: 0.8 }}
    >
      {grid}
    </motion.div>
  );
}

const WHATSAPP_NUMBER = "5491173728937";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hola! Vi la página y quiero hacer una consulta para mi negocio.",
)}`;

const CALENDAR_URL = "https://calendar.app.google/zB6YdjedCFZqJmwo6";

const PARA_QUIEN_ES = [
  "Atendés muchas consultas repetidas (precios, turnos, disponibilidad)",
  "Coordinás turnos o pedidos a mano, por WhatsApp o papel",
  "Cargás la misma información en más de un lugar",
];

const WORK_STEPS = [
  {
    title: "Diagnóstico inicial",
    description: "Relevamos cómo trabaja tu equipo hoy, paso a paso.",
  },
  {
    title: "Un sistema a la vez",
    description: "Empezamos por el que genere mayor ahorro de tiempo.",
  },
  {
    title: "Implementación y prueba",
    description: "Lo ponemos a funcionar y lo probamos junto a tu equipo.",
  },
  {
    title: "Capacitación breve",
    description: "Para que todos sepan usarlo desde el primer día.",
  },
  {
    title: "Ajuste y soporte",
    description: "Acompañamos hasta que funcione como tiene que funcionar.",
  },
];

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "¿Cuánto tarda en estar lista mi página?",
    answer:
      "Depende del alcance: una landing simple puede estar en pocos días. Un sistema a medida lleva más, y el plazo se define en el diagnóstico inicial.",
  },
  {
    question: "¿El precio incluye hosting y dominio?",
    answer:
      "El dominio y el hosting corren por separado (son servicios de terceros, con costo anual bajo). Te ayudamos a contratarlos y configurarlos sin vueltas.",
  },
  {
    question: "¿Puedo pedir cambios después de la entrega?",
    answer:
      "Sí. Los primeros ajustes post-entrega están contemplados, y después podés sumar el mantenimiento mensual para cambios continuos.",
  },
  {
    question: "¿Tienen mantenimiento mensual?",
    answer:
      "Sí, es uno de los servicios del catálogo: cambios, contenido al día y que el sitio nunca se caiga.",
  },
  {
    question: "¿Qué pasa si no tengo fotos o contenido propio?",
    answer:
      "No pasa nada. Te ayudamos a definir qué contenido necesitás y de dónde sacarlo, o lo resolvemos juntos en el diagnóstico inicial.",
  },
  {
    question: "¿Cómo es la forma de pago?",
    answer:
      "Se coordina caso a caso después del presupuesto, según el tamaño del proyecto. Lo conversamos directo por WhatsApp o en la consulta.",
  },
];

export default function App() {
  const [year] = useState(() => new Date().getFullYear());

  return (
    <KineticGrid globalColor="monochrome">
      <header>
        <div className="wrap header-row">
          <a className="brand" href="#top">
            <img className="brand-mark" src="/logo-mark.png" alt="" width={30} height={30} />
            <span className="brand-name">
              FJORA<em>labs</em>
            </span>
          </a>
          <a
            className="btn btn-ghost"
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Hablar por WhatsApp
          </a>
        </div>
      </header>

      <main id="top">
        <section className="hero wrap">
          <p className="eyebrow">
            Agencia de desarrollo web &amp; consultoría de procesos
          </p>
          <h1>
            Hacemos <em>visible</em> lo que tu negocio tiene para ofrecer
          </h1>
          <p className="hero-sub">
            Diseño y desarrollo de páginas, tiendas online y sistemas a
            medida — y consultoría para ordenar y digitalizar procesos que
            hoy se manejan a mano. Más abajo tenés el catálogo completo, con
            demos reales que podés recorrer.
          </p>
          <div className="hero-ctas">
            <a
              className="btn btn-solid"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Contame tu negocio →
            </a>
            <a className="btn btn-ghost" href="#catalogo">
              Ver el catálogo de demos
            </a>
          </div>
        </section>

        <section className="wrap" id="servicios">
          <div className="section-head">
            <p className="section-num">01 — Servicios</p>
            <h2>Lo que hacemos</h2>
            <p className="section-note">
              Desde una landing de una sola pantalla hasta un sistema con
              login y base de datos. Se define según lo que tu negocio
              necesita, no al revés.
            </p>
          </div>
          <ServiceFeatureGrid />
        </section>

        <section className="wrap" id="catalogo">
          <div className="section-head">
            <p className="section-num">02 — Catálogo</p>
            <h2>Demos por rubro</h2>
            <p className="section-note">
              Cada ficha abre un sitio real y funcionando. Entrá, recorrelo,
              y si algo se parece a lo que necesitás, hablamos.
            </p>
          </div>
          <CatalogCarousel />
        </section>

        <section className="wrap" id="sistemas">
          <div className="section-head">
            <p className="section-num">03 — Sistemas a medida</p>
            <h2>Recorré el sistema en vivo</h2>
            <p className="section-note">
              Esto no es una captura de pantalla: es la app real, corriendo.
              Navegá, hacé clic, probá — sin salir de esta página.
            </p>
          </div>
          <SistemasSplit />
        </section>

        <section className="wrap" id="automatizaciones">
          <div className="auto-panel">
            <div>
              <p className="eyebrow">Consultoría de procesos</p>
              <h2>Ordenamos el proceso antes de automatizarlo</h2>
              <p>
                Antes de sumar tecnología, miramos cómo trabaja tu equipo
                hoy: dónde se pierde tiempo, qué se repite a mano, qué
                información se cae entre un paso y otro. Después, si tiene
                sentido, se resuelve con automatizaciones — y si hace falta
                atención inmediata, con un chatbot con inteligencia
                artificial.
              </p>
              <ul className="para-quien-list">
                {PARA_QUIEN_ES.map((item) => (
                  <li key={item} className="para-quien-item">
                    <Check size={16} aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <AutoFeatureGrid />
          </div>

          <div className="work-steps">
            <h3>Cómo trabajo</h3>
            <ol>
              {WORK_STEPS.map((step, index) => (
                <li className="work-step" key={step.title}>
                  <span className="work-step-num mono">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h4>{step.title}</h4>
                    <p>{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="budget-note">
            <h3>¿Y el presupuesto?</h3>
            <p>
              Depende de la cantidad de sistemas a implementar y de la
              complejidad de cada uno. Por eso el presupuesto se entrega
              después del diagnóstico inicial, no antes — así cotizamos lo
              que realmente necesitás, ni de más ni de menos.
            </p>
          </div>
        </section>

        <section className="wrap" id="autodiagnostico">
          <div className="section-head">
            <p className="section-num">04 — Autodiagnóstico</p>
            <h2>¿Cuánto tiempo estás perdiendo?</h2>
            <p className="section-note">
              Respondé estas cuatro preguntas y te decimos, en horas, cuánto
              podrías estar ahorrando.
            </p>
          </div>
          <AutodiagnosticoForm whatsappNumber={WHATSAPP_NUMBER} />
        </section>

        <section className="wrap" id="faq">
          <div className="section-head">
            <p className="section-num">05 — Preguntas frecuentes</p>
            <h2>Antes de escribirnos</h2>
            <p className="section-note">
              Las dudas más comunes antes de arrancar un proyecto.
            </p>
          </div>
          <FaqAccordion items={FAQ_ITEMS} />
        </section>

        <section className="wrap cta-block">
          <div>
            <p className="section-num">06 — Contacto</p>
            <h2>Contanos tu idea y nosotros armamos tu sistema.</h2>
          </div>
          <div className="cta-actions">
            <a
              className="btn btn-solid"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Escribinos por WhatsApp →
            </a>
            <a
              className="btn btn-ghost"
              href={CALENDAR_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Agendar consulta gratuita (20 min) →
            </a>
          </div>
        </section>
      </main>

      <footer className="wrap">
        <div className="footer-row">
          <span>FJORA LABS — DESARROLLO WEB &amp; CONSULTORÍA DE PROCESOS</span>
          <span>© {year}</span>
        </div>
      </footer>

      <WhatsappBubble href={WHATSAPP_URL} />
    </KineticGrid>
  );
}
