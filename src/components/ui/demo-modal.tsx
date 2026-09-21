import { useEffect } from "react";
import { ExternalLink, X } from "lucide-react";

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

  if (!demo) return null;

  const waUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    `Hola! Vi la demo de ${demo.title} y quiero algo así para mi negocio.`,
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
          <p className="demo-modal-title mono">FJORA · Demo de {demo.title}</p>
          <button
            type="button"
            className="demo-modal-close"
            onClick={onClose}
            aria-label="Cerrar demo"
          >
            <X size={16} aria-hidden="true" />
          </button>
        </div>

        <div className="demo-modal-frame">
          <iframe src={demo.url} title={`Demo de ${demo.title}`} loading="lazy" />
        </div>

        <div className="demo-modal-footer">
          <a
            className="demo-modal-link"
            href={demo.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink size={15} aria-hidden="true" />
            Abrir en pestaña nueva
          </a>
          <a className="btn btn-solid" href={waUrl} target="_blank" rel="noopener noreferrer">
            Quiero esto en mi negocio →
          </a>
        </div>
      </div>
    </div>
  );
}
