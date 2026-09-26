import { useEffect } from "react";
import { Check, X } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

export type FeatureModalData = {
  title: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  headline: string;
  before: string;
  after: string;
  improves: string[];
};

export default function FeatureModal({
  feature,
  onClose,
  whatsappNumber,
}: {
  feature: FeatureModalData | null;
  onClose: () => void;
  whatsappNumber: string;
}) {
  useEffect(() => {
    if (!feature) return;

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [feature, onClose]);

  const { t } = useLanguage();

  if (!feature) return null;

  const Icon = feature.icon;
  const waUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    t.modales.featureWaTemplate(feature.title),
  )}`;

  return (
    <div
      className="feature-modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={feature.title}
    >
      <div className="feature-modal" onClick={(event) => event.stopPropagation()}>
        <button
          type="button"
          className="feature-modal-close"
          onClick={onClose}
          aria-label={t.modales.ariaCerrar}
        >
          <X size={18} aria-hidden="true" />
        </button>

        <div className="feature-modal-icon">
          <Icon strokeWidth={1.5} aria-hidden="true" />
        </div>
        <p className="eyebrow">{feature.title}</p>
        <h3>{feature.headline}</h3>

        <div className="auto-before-after">
          <div className="auto-feature-row">
            <span className="tag tag--antes">{t.modales.antes}</span>
            <p>{feature.before}</p>
          </div>
          <div className="auto-feature-row">
            <span className="tag tag--despues">{t.modales.despues}</span>
            <p>{feature.after}</p>
          </div>
        </div>

        <div className="feature-modal-improves">
          <p className="mono feature-modal-label">{t.modales.loQueMejora}</p>
          <ul>
            {feature.improves.map((item) => (
              <li key={item}>
                <Check size={16} aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="feature-modal-footer">
          <a className="btn btn-solid" href={waUrl} target="_blank" rel="noopener noreferrer">
            {t.modales.quieroEsto}
          </a>
          <button type="button" className="btn btn-ghost" onClick={onClose}>
            {t.modales.cerrarVolver}
          </button>
        </div>
      </div>
    </div>
  );
}
