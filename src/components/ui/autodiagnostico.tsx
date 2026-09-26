import { useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

export default function AutodiagnosticoForm({
  whatsappNumber,
}: {
  whatsappNumber: string;
}) {
  const { t } = useLanguage();
  const { scale, questions } = t.autodiagnostico;
  const [answers, setAnswers] = useState<(number | null)[]>(
    questions.map(() => null),
  );

  const allAnswered = answers.every((a) => a !== null);
  const total = allAnswered
    ? answers.reduce((sum, h) => sum + (h ?? 0), 0)
    : 0;

  const resultUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    t.autodiagnostico.waTemplate(total),
  )}`;

  function selectAnswer(questionIndex: number, hours: number) {
    setAnswers((prev) => {
      const next = [...prev];
      next[questionIndex] = hours;
      return next;
    });
  }

  return (
    <div className="diag-card">
      {questions.map((question, qi) => (
        <div className="diag-question" key={question}>
          <p>{question}</p>
          <div className="diag-options">
            {scale.map((option) => (
              <button
                key={option.label}
                type="button"
                className={
                  answers[qi] === option.hours
                    ? "diag-option diag-option--active"
                    : "diag-option"
                }
                onClick={() => selectAnswer(qi, option.hours)}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      ))}

      {allAnswered && (
        <div className="diag-result">
          <p>
            {t.autodiagnostico.resultPre}{" "}
            <strong>
              {total} {t.autodiagnostico.resultHoursWeek}
            </strong>{" "}
            {t.autodiagnostico.resultMid}{" "}
            <strong>
              {total * 4} {t.autodiagnostico.resultHoursMonth}
            </strong>
            .
          </p>
          <a
            className="btn btn-solid"
            href={resultUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.autodiagnostico.ctaWhatsapp}
          </a>
        </div>
      )}
    </div>
  );
}
