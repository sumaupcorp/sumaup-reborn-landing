import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import type { DiagnosisOption } from "@/types";

export function DiagnosisOptionCard({
  option,
  selected,
  onSelect,
}: {
  option: DiagnosisOption;
  selected: boolean;
  onSelect: (value: string) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onSelect(option.value)}
      aria-pressed={selected}
      className={cn(
        "flex w-full items-center gap-3.5 rounded-2xl border p-4 text-left transition-all duration-200 sm:p-5",
        selected
          ? "border-brand-blue bg-accent shadow-sm ring-2 ring-brand-blue/25"
          : "border-border bg-white hover:-translate-y-0.5 hover:border-brand-electric/60 hover:shadow-sm",
      )}
    >
      <span
        className={cn(
          "flex size-6 shrink-0 items-center justify-center rounded-full border transition-colors",
          selected
            ? "border-brand-blue bg-brand-blue text-white"
            : "border-border bg-white text-transparent",
        )}
      >
        <Check className="size-4" strokeWidth={3} />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-sm font-semibold text-brand-ink sm:text-[0.95rem]">
          {option.label}
        </span>
        {option.description ? (
          <span className="mt-0.5 block text-xs leading-snug text-muted-foreground">
            {option.description}
          </span>
        ) : null}
      </span>
    </button>
  );
}
