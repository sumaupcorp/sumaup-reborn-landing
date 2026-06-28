import { SumaFigure } from "@/components/common/suma-figure";
import { suma } from "@/lib/assets";

export function DiagnosisHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <SumaFigure
        asset={suma.diagnostico}
        glow="soft"
        blob={false}
        className="w-12 shrink-0"
        sizes="48px"
      />
      <div>
        <h1 className="text-lg font-bold text-brand-ink sm:text-xl">{title}</h1>
        {subtitle ? (
          <p className="text-xs text-muted-foreground">{subtitle}</p>
        ) : null}
      </div>
    </div>
  );
}
