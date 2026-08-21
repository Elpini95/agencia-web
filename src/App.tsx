import { useMemo, useState } from "react";
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
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import KineticGrid from "@/components/ui/kinetic-grid";
import {
  FeatureCard,
  GridPattern,
  genRandomPattern,
} from "@/components/ui/grid-feature-cards";

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

type FichaData = {
  href: string;
  rubro: string;
  color: string;
  index: string;
  title: string;
  description: string;
};

const CATALOG: FichaData[] = [
  {
    href: "https://gastronomia-demo.vercel.app/",
    rubro: "Gastronomía",
    color: "var(--stamp-red)",
    index: "RUBRO 01",
    title: "Restaurantes y bares",
    description:
      "Carta online, fotos que dan hambre y reserva de mesa por WhatsApp en dos toques.",
  },
  {
    href: "https://corralon-demo.vercel.app/",
    rubro: "Corralón / Ferretería",
    color: "var(--stamp-blue)",
    index: "RUBRO 02",
    title: "Materiales y ferretería",
    description:
      "Catálogo por categorías, precios claros y pedidos que llegan directo por WhatsApp.",
  },
  {
    href: "https://gym-demo-ten-rosy.vercel.app/",
    rubro: "Gimnasio",
    color: "var(--stamp-mustard)",
    index: "RUBRO 03",
    title: "Gimnasios y boxes",
    description:
      "Planes, horarios de clases y alta de socios nuevos sin planillas ni vueltas.",
  },
  {
    href: "https://mecanico-demo.vercel.app/",
    rubro: "Mecánico",
    color: "var(--stamp-teal)",
    index: "RUBRO 04",
    title: "Talleres mecánicos",
    description:
      "Servicios, turnos y presupuesto rápido para que el cliente no tenga que llamar.",
  },
  {
    href: "https://salon-demo-web-tau.vercel.app/",
    rubro: "Salón / Belleza",
    color: "var(--stamp-red)",
    index: "RUBRO 05",
    title: "Peluquerías y estética",
    description:
      "Reserva de turnos, galería de trabajos y contacto directo con la profesional.",
  },
  {
    href: "https://liliana-m-carro.vercel.app/",
    rubro: "Ecommerce",
    color: "var(--stamp-blue)",
    index: "RUBRO 06",
    title: "Tienda online",
    description:
      "Catálogo, carrito y checkout completo. Para marcas que quieren vender online en serio.",
  },
  {
    href: "https://djs-demo.vercel.app/",
    rubro: "DJ / Eventos",
    color: "var(--stamp-mustard)",
    index: "RUBRO 07",
    title: "DJs y música en vivo",
    description:
      "Portfolio de sets, disponibilidad de fechas y cotización de eventos directo por WhatsApp.",
  },
];

function FichaCard({ href, rubro, color, index, title, description }: FichaData) {
  const pattern = useMemo(() => genRandomPattern(), []);

  return (
    <a className="ficha" href={href} target="_blank" rel="noopener noreferrer">
      <div className="ficha-pattern" aria-hidden="true">
        <div className="ficha-pattern-fade">
          <GridPattern
            width={20}
            height={20}
            x="-12"
            y="4"
            squares={pattern}
            className="ficha-pattern-svg"
          />
        </div>
      </div>
      <div className="ficha-top">
        <span className="stamp" style={{ color }}>
          {rubro}
        </span>
        <span className="ficha-index mono">{index}</span>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="ficha-cta">
        <span>Ver demo</span>
        <span className="arrow">→</span>
      </div>
    </a>
  );
}

function CatalogGrid() {
  const shouldReduceMotion = useReducedMotion();
  const grid = (
    <div className="feature-grid catalog-grid grid grid-cols-1 divide-x divide-y divide-dashed border border-dashed sm:grid-cols-2 lg:grid-cols-3">
      {CATALOG.map((item) => (
        <FichaCard key={item.href} {...item} />
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

const WHATSAPP_URL =
  "https://wa.me/5491130358596?text=Hola!%20Vi%20la%20p%C3%A1gina%20y%20quiero%20hacer%20una%20consulta%20para%20mi%20negocio.";

export default function App() {
  const [year] = useState(() => new Date().getFullYear());

  return (
    <KineticGrid globalColor="monochrome">
      <header>
        <div className="wrap header-row">
          <a className="brand" href="#top">
            <span className="brand-mark" aria-hidden="true">
              ＋
            </span>
            AGENCIA WEB
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
            Un sitio distinto
            <br />
            para cada <em>rubro.</em>
            <br />
            Elegí el que se
            <br />
            parece al tuyo.
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
          <CatalogGrid />
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
            </div>
            <AutoFeatureGrid />
          </div>
        </section>

        <section className="wrap cta-block">
          <div>
            <p className="section-num">03 — Contacto</p>
            <h2>Contanos tu idea y nosotros armamos tu sistema.</h2>
          </div>
          <a
            className="btn btn-solid"
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Escribinos por WhatsApp →
          </a>
        </section>
      </main>

      <footer className="wrap">
        <div className="footer-row">
          <span>DESARROLLO WEB &amp; CONSULTORÍA DE PROCESOS</span>
          <span>© {year}</span>
        </div>
      </footer>
    </KineticGrid>
  );
}
