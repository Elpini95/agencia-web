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
  Stethoscope,
  Coffee,
  Building,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import KineticGrid from "@/components/ui/kinetic-grid";
import { FeatureCard } from "@/components/ui/grid-feature-cards";
import CatalogMarquee, {
  type RuixenCardProps,
} from "@/components/ui/catalog-marquee";
import WhatsappBubble from "@/components/ui/whatsapp-bubble";
import CalendarBubble from "@/components/ui/calendar-bubble";
import AutodiagnosticoForm from "@/components/ui/autodiagnostico";
import FaqAccordion from "@/components/ui/faq-accordion";
import DemoModal, { type DemoModalData } from "@/components/ui/demo-modal";
import FeatureModal, { type FeatureModalData } from "@/components/ui/feature-modal";
import LanguageSwitcher from "@/components/ui/language-switcher";
import { useLanguage } from "@/i18n/LanguageContext";

const SERVICE_META = [
  { id: "landing", icon: LayoutTemplate, category: "presencia" },
  { id: "institucional", icon: Building2, category: "presencia" },
  { id: "blog", icon: Newspaper, category: "presencia" },
  { id: "panel", icon: LayoutDashboard, category: "herramientas" },
  { id: "ecommerce", icon: ShoppingCart, category: "herramientas" },
  { id: "sistemaMedida", icon: Workflow, category: "herramientas" },
  { id: "appMedida", icon: Smartphone, category: "herramientas" },
  { id: "consultoria", icon: ListChecks, category: "acompanamiento" },
  { id: "mantenimiento", icon: Wrench, category: "acompanamiento" },
] as const;

const SERVICE_CATEGORY_META = [
  { key: "presencia", cols: "sm:grid-cols-3" },
  { key: "herramientas", cols: "sm:grid-cols-2 lg:grid-cols-4" },
  { key: "acompanamiento", cols: "sm:grid-cols-2" },
] as const;

function ServiceCategoryGroup({
  category,
}: {
  category: (typeof SERVICE_CATEGORY_META)[number];
}) {
  const { t } = useLanguage();
  const items = SERVICE_META.filter((f) => f.category === category.key);
  return (
    <div className="services-group">
      <p className="services-group-label mono">{t.servicios.categories[category.key]}</p>
      <div
        className={`feature-grid services-grid grid grid-cols-1 divide-x divide-y divide-dashed border border-dashed ${category.cols}`}
      >
        {items.map((meta) => {
          const text = t.servicios.items[meta.id];
          return (
            <FeatureCard
              key={meta.id}
              feature={{ title: text.title, icon: meta.icon, description: text.description }}
              className="service-tile"
            />
          );
        })}
      </div>
    </div>
  );
}

function ServiceFeatureGrid() {
  const shouldReduceMotion = useReducedMotion();
  const content = (
    <div className="services-groups">
      {SERVICE_CATEGORY_META.map((category) => (
        <ServiceCategoryGroup key={category.key} category={category} />
      ))}
    </div>
  );

  if (shouldReduceMotion) return content;

  return (
    <motion.div
      initial={{ filter: "blur(4px)", translateY: -8, opacity: 0 }}
      whileInView={{ filter: "blur(0px)", translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2, duration: 0.8 }}
    >
      {content}
    </motion.div>
  );
}

const CATALOG_META = [
  {
    id: "gastronomia",
    href: "https://gastronomia-demo.vercel.app/",
    icon: UtensilsCrossed,
    image: "/catalogo/gastronomia.jpg",
    variant: "red",
  },
  {
    id: "ferreteria",
    href: "https://corralon-demo.vercel.app/",
    icon: Hammer,
    image: "/catalogo/corralon.jpg",
    variant: "blue",
  },
  {
    id: "gimnasio",
    href: "https://gym-demo-ten-rosy.vercel.app/",
    icon: Dumbbell,
    image: "/catalogo/gimnasio.jpg",
    variant: "mustard",
  },
  {
    id: "mecanico",
    href: "https://mecanico-demo.vercel.app/",
    icon: Wrench,
    image: "/catalogo/mecanico.jpg",
    variant: "teal",
  },
  {
    id: "salon",
    href: "https://salon-demo-web-tau.vercel.app/",
    icon: Scissors,
    image: "/catalogo/salon.jpg",
    variant: "red",
  },
  {
    id: "ecommerce",
    href: "https://lilianacarro.vercel.app/",
    icon: ShoppingCart,
    image: "/catalogo/ecommerce.jpg",
    variant: "blue",
  },
  {
    id: "dj",
    href: "https://djs-demo.vercel.app/",
    icon: Music2,
    image: "/catalogo/dj.jpg",
    variant: "mustard",
  },
] as const;

type SistemaData = {
  href: string;
  label: string;
  color: string;
  title: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  image: string;
};

const SISTEMAS_META = [
  {
    id: "gestion",
    href: "https://crm-fjoralabs.vercel.app/",
    color: "var(--stamp-teal)",
    icon: Workflow,
    image: "/sistemas/gestion.jpg",
  },
  {
    id: "consultorios",
    href: "https://fjoraconsultorios.vercel.app/",
    color: "var(--stamp-red)",
    icon: Stethoscope,
    image: "/sistemas/consultorios.jpg",
  },
  {
    id: "cafe",
    href: "https://fjoracoffe.vercel.app/login",
    color: "var(--stamp-mustard)",
    icon: Coffee,
    image: "/sistemas/cafe.jpg",
  },
  {
    id: "propiedades",
    href: "https://fjorapropiedades.vercel.app",
    color: "var(--stamp-blue)",
    icon: Building,
    image: "/sistemas/propiedades.jpg",
  },
] as const;

function SistemaPanel({
  href,
  label,
  color,
  title,
  description,
  icon: Icon,
  image,
  onOpen,
}: SistemaData & { onOpen: (demo: DemoModalData) => void }) {
  const { t } = useLanguage();
  return (
    <button
      type="button"
      className="sistema-panel"
      onClick={() => onOpen({ title, url: href })}
    >
      <div
        className="sistema-art"
        style={{
          background: `linear-gradient(155deg, color-mix(in srgb, ${color} 22%, var(--marino)) 0%, var(--marino) 78%)`,
        }}
      >
        <img src={image} alt="" loading="lazy" />
        <Icon
          className="sistema-icon sistema-icon--badge"
          style={{ color }}
          strokeWidth={1.5}
          aria-hidden="true"
        />
      </div>
      <div className="sistema-body">
        <span className="stamp" style={{ color }}>
          {label}
        </span>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="sistema-cta">
          <span>{t.modales.verDemo}</span>
          <span className="arrow">→</span>
        </div>
      </div>
    </button>
  );
}

function SistemasSplit({ onOpen }: { onOpen: (demo: DemoModalData) => void }) {
  const { t } = useLanguage();
  const shouldReduceMotion = useReducedMotion();
  const grid = (
    <div className="sistemas-split">
      {SISTEMAS_META.map((meta) => {
        const text = t.sistemas.items[meta.id];
        return (
          <SistemaPanel
            key={meta.id}
            href={meta.href}
            color={meta.color}
            icon={meta.icon}
            image={meta.image}
            label={text.label}
            title={text.title}
            description={text.description}
            onOpen={onOpen}
          />
        );
      })}
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

function CatalogCarousel({ onOpen }: { onOpen: (demo: DemoModalData) => void }) {
  const { t } = useLanguage();
  const shouldReduceMotion = useReducedMotion();
  const cards: RuixenCardProps[] = CATALOG_META.map((meta) => {
    const text = t.catalogo.items[meta.id];
    return {
      href: meta.href,
      icon: meta.icon,
      image: meta.image,
      title: text.title,
      subtitle: text.subtitle,
      badge: { text: text.badge, variant: meta.variant },
    };
  });
  const carousel = <CatalogMarquee cards={cards} onOpen={onOpen} />;

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

const AUTO_META = [
  { id: "relevamiento", icon: Route },
  { id: "chatbot", icon: Bot },
  { id: "agenda", icon: CalendarClock },
  { id: "automatizacion", icon: RefreshCw },
] as const;

function AutoFeatureCard({
  meta,
  onOpen,
}: {
  meta: (typeof AUTO_META)[number];
  onOpen: (feature: FeatureModalData) => void;
}) {
  const { t } = useLanguage();
  const text = t.automatizaciones.features[meta.id];
  const Icon = meta.icon;
  return (
    <button
      type="button"
      className="auto-feature-card"
      onClick={() => onOpen({ ...text, icon: meta.icon })}
    >
      <Icon className="auto-feature-icon" strokeWidth={1} aria-hidden="true" />
      <h3>{text.title}</h3>
      <p className="auto-feature-teaser">{text.after}</p>
      <span className="auto-feature-link">
        {t.modales.verMas} <span className="arrow">→</span>
      </span>
    </button>
  );
}

function AutoFeatureGrid({ onOpen }: { onOpen: (feature: FeatureModalData) => void }) {
  const shouldReduceMotion = useReducedMotion();
  const grid = (
    <div className="feature-grid auto-grid grid grid-cols-1 divide-x divide-y divide-dashed border border-dashed sm:grid-cols-2">
      {AUTO_META.map((meta) => (
        <AutoFeatureCard key={meta.id} meta={meta} onOpen={onOpen} />
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
const CALENDAR_URL = "https://calendar.app.google/zB6YdjedCFZqJmwo6";

const WORK_STEP_IDS = [
  "diagnostico",
  "unSistema",
  "implementacion",
  "capacitacion",
  "ajuste",
] as const;

export default function App() {
  const { t } = useLanguage();
  const [year] = useState(() => new Date().getFullYear());
  const [demo, setDemo] = useState<DemoModalData | null>(null);
  const [feature, setFeature] = useState<FeatureModalData | null>(null);

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    t.heroWaMessage,
  )}`;

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
          <div className="header-ctas">
            <LanguageSwitcher />
            <a
              className="btn btn-ghost"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.header.whatsapp}
            </a>
            <a
              className="btn btn-ghost"
              href={CALENDAR_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.header.agendar}
            </a>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="hero wrap">
          <p className="eyebrow">{t.hero.eyebrow}</p>
          <h1>
            {t.hero.titlePre}
            <em>{t.hero.titleEm}</em>
            {t.hero.titlePost}
          </h1>
          <p className="hero-sub">{t.hero.sub}</p>
          <div className="hero-ctas">
            <a
              className="btn btn-solid"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.hero.ctaSolid}
            </a>
            <a
              className="btn btn-ghost"
              href={CALENDAR_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.hero.ctaAgendar}
            </a>
            <a className="btn btn-ghost" href="#catalogo">
              {t.hero.ctaCatalogo}
            </a>
          </div>
        </section>

        <section className="wrap" id="servicios">
          <div className="section-head">
            <p className="section-num">{t.servicios.sectionNum}</p>
            <h2>{t.servicios.title}</h2>
            <p className="section-note">{t.servicios.note}</p>
          </div>
          <ServiceFeatureGrid />
        </section>

        <section className="wrap" id="catalogo">
          <div className="section-head">
            <p className="section-num">{t.catalogo.sectionNum}</p>
            <h2>{t.catalogo.title}</h2>
            <p className="section-note">{t.catalogo.note}</p>
          </div>
          <CatalogCarousel onOpen={setDemo} />
        </section>

        <section className="wrap" id="sistemas">
          <div className="section-head">
            <p className="section-num">{t.sistemas.sectionNum}</p>
            <h2>{t.sistemas.title}</h2>
            <p className="section-note">{t.sistemas.note}</p>
          </div>
          <SistemasSplit onOpen={setDemo} />
        </section>

        <section className="wrap" id="automatizaciones">
          <div className="auto-panel">
            <div>
              <p className="eyebrow">{t.automatizaciones.eyebrow}</p>
              <h2>{t.automatizaciones.title}</h2>
              <p>{t.automatizaciones.intro}</p>
              <ul className="para-quien-list">
                {t.automatizaciones.paraQuienEs.map((item) => (
                  <li key={item} className="para-quien-item">
                    <Check size={16} aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <AutoFeatureGrid onOpen={setFeature} />
          </div>

          <div className="process-panel">
            <div className="work-steps">
              <h3>{t.automatizaciones.comoTrabajo}</h3>
              <ol>
                {WORK_STEP_IDS.map((id, index) => {
                  const step = t.automatizaciones.workSteps[id];
                  return (
                    <li className="work-step" key={id}>
                      <span className="work-step-num mono">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h4>{step.title}</h4>
                        <p>{step.description}</p>
                      </div>
                    </li>
                  );
                })}
              </ol>
            </div>

            <div className="budget-note">
              <h3>{t.automatizaciones.presupuestoTitle}</h3>
              <p>{t.automatizaciones.presupuestoText}</p>
            </div>
          </div>
        </section>

        <section className="wrap" id="autodiagnostico">
          <div className="section-head">
            <p className="section-num">{t.autodiagnostico.sectionNum}</p>
            <h2>{t.autodiagnostico.title}</h2>
            <p className="section-note">{t.autodiagnostico.note}</p>
          </div>
          <AutodiagnosticoForm whatsappNumber={WHATSAPP_NUMBER} />
        </section>

        <section className="wrap" id="faq">
          <div className="section-head">
            <p className="section-num">{t.faq.sectionNum}</p>
            <h2>{t.faq.title}</h2>
            <p className="section-note">{t.faq.note}</p>
          </div>
          <FaqAccordion items={t.faq.items} />
        </section>

        <section className="wrap cta-block">
          <div>
            <p className="section-num">{t.ctaFinal.sectionNum}</p>
            <h2>{t.ctaFinal.title}</h2>
          </div>
          <div className="cta-actions">
            <a
              className="btn btn-solid"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.ctaFinal.ctaWhatsapp}
            </a>
            <a
              className="btn btn-ghost"
              href={CALENDAR_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.ctaFinal.ctaAgendar}
            </a>
          </div>
        </section>
      </main>

      <footer className="wrap">
        <div className="footer-row">
          <span>{t.footer}</span>
          <span>© {year}</span>
        </div>
      </footer>

      <div className="floating-actions">
        <CalendarBubble href={CALENDAR_URL} />
        <WhatsappBubble href={whatsappUrl} />
      </div>

      <DemoModal
        demo={demo}
        onClose={() => setDemo(null)}
        whatsappNumber={WHATSAPP_NUMBER}
      />
      <FeatureModal
        feature={feature}
        onClose={() => setFeature(null)}
        whatsappNumber={WHATSAPP_NUMBER}
      />
    </KineticGrid>
  );
}
