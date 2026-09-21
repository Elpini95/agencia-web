import { useState } from "react";
import { ChevronDown } from "lucide-react";

export type FaqItem = { question: string; answer: string };

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="faq-list">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div className="faq-item" key={item.question}>
            <button
              type="button"
              className="faq-question"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              <span>{item.question}</span>
              <ChevronDown
                className={isOpen ? "faq-chevron faq-chevron--open" : "faq-chevron"}
                size={18}
                aria-hidden="true"
              />
            </button>
            {isOpen && <p className="faq-answer">{item.answer}</p>}
          </div>
        );
      })}
    </div>
  );
}
