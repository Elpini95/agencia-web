import { CalendarCheck } from "lucide-react";

export default function CalendarBubble({ href }: { href: string }) {
  return (
    <a
      className="bubble-btn bubble-btn--calendar"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agendar una consulta"
    >
      <CalendarCheck strokeWidth={1.75} aria-hidden="true" />
    </a>
  );
}
