import { useEffect } from "react";
import { ExternalLink, X } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

export type DemoModalData = {
  title: string;
  url: string;
};

export default function DemoModal({
  demo,
  onClose,
  whatsappNumber,
}: {
  demo: DemoModalData | null;
  onClose: () => void;
  whatsappNumber: string;
}) {
  useEffect(() => {
    if (!demo) return;

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
  }, [demo, onClose]);

  const { t } = useLanguage();

  if (!demo) return null;

  const waUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    t.modales.demoWaTemplate(demo.title),
  )}`;

  return (
    <div
      className="demo-modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Demo: ${demo.title}`}
    >
      <div className="demo-modal" onClick={(event) => event.stopPropagation()}>
        <div className="demo-modal-chrome">
          <div className="demo-modal-dots" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <p className="demo-modal-title mono">FJORA · Demo: {demo.title}</p>
          <button
            type="button"
            className="demo-modal-close"
            onClick={onClose}
            aria-label={t.modales.ariaCerrarDemo}
          >
            <X size={16} aria-hidden="true" />
          </button>
        </div>

        <div className="demo-modal-frame">
          <iframe src={demo.url} title={`Demo: ${demo.title}`} loading="lazy" />
        </div>

        <div className="demo-modal-footer">
          <a
            className="demo-modal-link"
            href={demo.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink size={15} aria-hidden="true" />
            {t.modales.abrirPestana}
          </a>
          <a className="btn btn-solid" href={waUrl} target="_blank" rel="noopener noreferrer">
            {t.modales.quieroEsto}
          </a>
        </div>
      </div>
    </div>
  );
}
