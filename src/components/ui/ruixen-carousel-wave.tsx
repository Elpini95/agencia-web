import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import gsap from "gsap";

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

export default function RuixenCarouselWave({ cards }: { cards: RuixenCardProps[] }) {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const shift = (direction: "next" | "prev") => {
    const nextIndex =
      direction === "next"
        ? (currentIndex + 1) % cards.length
        : (currentIndex - 1 + cards.length) % cards.length;
    setCurrentIndex(nextIndex);
  };

  useEffect(() => {
    cardRefs.current.forEach((card, i) => {
      if (!card) return;

      let position = i - currentIndex;
      if (position < -Math.floor(cards.length / 2)) {
        position += cards.length;
      } else if (position > Math.floor(cards.length / 2)) {
        position -= cards.length;
      }

      const x = position * 320;
      const y = position === 0 ? 20 : 0;
      const scale = position === 0 ? 1.03 : 0.95;

      if (Math.abs(position) > 2) {
        gsap.set(card, { x, y, scale });
      } else {
        gsap.to(card, {
          x,
          y,
          scale,
          duration: 0.6,
          ease: "power2.out",
        });
      }
    });
  }, [currentIndex, cards.length]);

  return (
    <div className="relative h-full w-full overflow-hidden px-6 py-12">
      <div className="relative flex h-[400px] items-center justify-center">
        {cards.map((card, index) => {
          const accent = card.badge ? variantColors[card.badge.variant] : "var(--celeste)";
          const Icon = card.icon;

          return (
            <div
              key={card.href}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              className="absolute transition-transform"
            >
              <div className="group flex flex-col">
                <a
                  href={card.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block overflow-hidden rounded-2xl shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-[1.02]"
                  style={{ border: "1px solid var(--line-strong)" }}
                >
                  <div
                    className="relative flex h-[300px] w-[260px] items-center justify-center overflow-hidden"
                    style={{
                      background: `linear-gradient(155deg, color-mix(in srgb, ${accent} 22%, var(--marino)) 0%, var(--marino) 78%)`,
                    }}
                  >
                    {card.image ? (
                      <img
                        src={card.image}
                        alt=""
                        className="absolute inset-0 h-full w-full object-cover"
                        loading="lazy"
                      />
                    ) : Icon ? (
                      <Icon
                        className="h-24 w-24"
                        style={{ color: "var(--arena)" }}
                        strokeWidth={1}
                        aria-hidden="true"
                      />
                    ) : null}
                  </div>

                  {card.badge && (
                    <div className="absolute -left-10 top-4 -rotate-45 transform">
                      <div
                        className="px-3 py-0.5 text-xs font-bold shadow-md"
                        style={{ background: accent, color: "var(--marino)" }}
                      >
                        {card.badge.text}
                      </div>
                    </div>
                  )}

                  <div
                    className="absolute bottom-4 left-4 right-4 transform rounded-xl p-4 shadow-md backdrop-blur-md transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:scale-[1.01]"
                    style={{
                      background: "color-mix(in srgb, var(--tile-bg) 88%, var(--marino) 12%)",
                      border: "1px solid var(--line-strong)",
                    }}
                  >
                    <div className="flex flex-col gap-1">
                      <h3
                        className="text-base font-semibold"
                        style={{
                          color: "var(--arena)",
                          fontFamily: '"Big Shoulders Display", sans-serif',
                        }}
                      >
                        {card.title}
                      </h3>
                      <p className="text-sm leading-snug" style={{ color: "var(--ink-soft)" }}>
                        {card.subtitle}
                      </p>
                      <div className="mt-2 flex justify-end">
                        <div
                          className="relative flex h-7 w-7 items-center justify-center rounded-full transition-all duration-300 hover:scale-110"
                          style={{ background: "color-mix(in srgb, var(--celeste) 20%, transparent)" }}
                        >
                          <ArrowUpRight
                            className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-45"
                            style={{ color: "var(--celeste)" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          );
        })}
      </div>

      <div className="absolute bottom-6 right-6 flex gap-2">
        <button
          type="button"
          onClick={() => shift("prev")}
          aria-label="Demo anterior"
          className="rounded-full p-2 transition hover:scale-110"
          style={{ border: "1px solid var(--line-strong)", background: "var(--tile-bg)" }}
        >
          <ChevronLeft className="h-5 w-5" style={{ color: "var(--arena)" }} />
        </button>
        <button
          type="button"
          onClick={() => shift("next")}
          aria-label="Siguiente demo"
          className="rounded-full p-2 transition hover:scale-110"
          style={{ border: "1px solid var(--line-strong)", background: "var(--tile-bg)" }}
        >
          <ChevronRight className="h-5 w-5" style={{ color: "var(--arena)" }} />
        </button>
      </div>
    </div>
  );
}
