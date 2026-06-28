import { DiagnosisOptionCard } from "@/components/diagnosis/DiagnosisOptionCard";
import type { DiagnosisQuestion as Question } from "@/types";

export function DiagnosisQuestion({
  question,
  value,
  onSelect,
}: {
  question: Question;
  value: string | undefined;
  onSelect: (value: string) => void;
}) {
  return (
    <div>
      <h2 className="text-xl font-bold text-balance text-brand-ink sm:text-2xl">
        {question.title}
      </h2>
      {question.help ? (
        <p className="mt-2 text-sm text-muted-foreground">{question.help}</p>
      ) : null}

      <div className="mt-6 grid gap-3">
        {question.options.map((option) => (
          <DiagnosisOptionCard
            key={option.value}
            option={option}
            selected={value === option.value}
            onSelect={onSelect}
          />
        ))}
      </div>
    </div>
  );
}
