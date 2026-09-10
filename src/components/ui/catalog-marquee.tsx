export interface RuixenCardProps {
  title: string;
  subtitle: string;
  href: string;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  image?: string;
  badge?: {
    text: string;
    variant: "red" | "blue" | "mustard" | "teal";
  };
}

const variantColors: Record<NonNullable<RuixenCardProps["badge"]>["variant"], string> = {
  red: "var(--stamp-red)",
  blue: "var(--stamp-blue)",
  mustard: "var(--stamp-mustard)",
  teal: "var(--stamp-teal)",
};

function MarqueeCard({ card }: { card: RuixenCardProps }) {
  const accent = card.badge ? variantColors[card.badge.variant] : "var(--celeste)";
  const Icon = card.icon;

  return (
    <a
      href={card.href}
      target="_blank"
      rel="noopener noreferrer"
      className="marquee-card"
      style={{ borderColor: "var(--line-strong)" }}
    >
      <div
        className="marquee-card-art"
        style={{
          background: `linear-gradient(155deg, color-mix(in srgb, ${accent} 22%, var(--marino)) 0%, var(--marino) 78%)`,
        }}
      >
        {card.image ? (
          <img src={card.image} alt="" loading="eager" />
        ) : Icon ? (
          <Icon
            className="marquee-card-icon"
            style={{ color: "var(--arena)" }}
            strokeWidth={1}
            aria-hidden="true"
          />
        ) : null}

        {card.badge && (
          <span
            className="marquee-card-badge"
            style={{ background: accent, color: "var(--marino)" }}
          >
            {card.badge.text}
          </span>
        )}
      </div>

      <div className="marquee-card-body">
        <h3>{card.title}</h3>
        <p>{card.subtitle}</p>
        <div className="marquee-card-cta">
          <span>Ver demo</span>
          <span className="arrow">→</span>
        </div>
      </div>
    </a>
  );
}

function MarqueeRow({
  cards,
  direction,
  duration,
}: {
  cards: RuixenCardProps[];
  direction: "left" | "right";
  duration: number;
}) {
  const looped = [...cards, ...cards];

  return (
    <div className="marquee-row-viewport">
      <div
        className={`marquee-row-track marquee-row-track--${direction}`}
        style={{ animationDuration: `${duration}s` }}
      >
        {looped.map((card, i) => (
          <MarqueeCard key={`${card.href}-${i}`} card={card} />
        ))}
      </div>
    </div>
  );
}

export default function CatalogMarquee({ cards }: { cards: RuixenCardProps[] }) {
  const reversed = [...cards].reverse();

  return (
    <div className="marquee-stack">
      <MarqueeRow cards={cards} direction="left" duration={48} />
      <MarqueeRow cards={reversed} direction="right" duration={58} />
    </div>
  );
}
