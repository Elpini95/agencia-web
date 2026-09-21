import { useState } from "react";

type DiagOption = { label: string; hours: number };

type DiagQuestion = {
  text: string;
  options: DiagOption[];
};

const SCALE: DiagOption[] = [
  { label: "Casi nada (0-1h)", hours: 0.5 },
  { label: "Un rato (2-4h)", hours: 3 },
  { label: "Bastante (5-8h)", hours: 6.5 },
  { label: "Un montón (+8h)", hours: 10 },
];

const QUESTIONS: DiagQuestion[] = [
  {
    text: "¿Cuántas horas por semana perdés respondiendo las mismas preguntas por WhatsApp (precios, horarios, disponibilidad)?",
    options: SCALE,
  },
  {
    text: "¿Cuánto tiempo te lleva armar presupuestos o cotizaciones a mano?",
    options: SCALE,
  },
  {
    text: "¿Cuánto tiempo se va en coordinar turnos, pedidos o reservas manualmente?",
    options: SCALE,
  },
  {
    text: "¿Cuánto tiempo dedicás a cargar o actualizar la misma información en varios lugares (stock, redes, planillas)?",
    options: SCALE,
  },
];

export default function AutodiagnosticoForm({
  whatsappNumber,
}: {
  whatsappNumber: string;
}) {
  const [answers, setAnswers] = useState<(number | null)[]>(
    QUESTIONS.map(() => null),
  );

  const allAnswered = answers.every((a) => a !== null);
  const total = allAnswered
    ? answers.reduce((sum, h) => sum + (h ?? 0), 0)
    : 0;

  const resultMessage = `Hola! Hice el autodiagnóstico de la web y estimo que pierdo unas ${total} horas por semana en tareas manuales. Quiero que revisemos mi caso.`;
  const resultUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(resultMessage)}`;

  function selectAnswer(questionIndex: number, hours: number) {
    setAnswers((prev) => {
      const next = [...prev];
      next[questionIndex] = hours;
      return next;
    });
  }

  return (
    <div className="diag-card">
      {QUESTIONS.map((question, qi) => (
        <div className="diag-question" key={question.text}>
          <p>{question.text}</p>
          <div className="diag-options">
            {question.options.map((option) => (
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
            Estás perdiendo unas <strong>{total} horas por semana</strong> en
            tareas que se podrían automatizar. Eso es cerca de{" "}
            <strong>{total * 4} horas al mes</strong>.
          </p>
          <a
            className="btn btn-solid"
            href={resultUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Contame tu caso por WhatsApp →
          </a>
        </div>
      )}
    </div>
  );
}
