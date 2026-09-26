import { CalendarCheck } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

export default function CalendarBubble({ href }: { href: string }) {
  const { t } = useLanguage();
  return (
    <a
      className="bubble-btn bubble-btn--calendar"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.modales.ariaAgendar}
    >
      <CalendarCheck strokeWidth={1.75} aria-hidden="true" />
    </a>
  );
}
