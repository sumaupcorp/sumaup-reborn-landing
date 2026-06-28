import { cn } from "@/lib/utils";

export function DiagnosisProgress({
  current,
  total,
}: {
  current: number;
  total: number;
}) {
  const percent = Math.round((current / total) * 100);

  return (
    <div>
      <div className="flex items-center justify-between text-xs font-medium text-muted-foreground">
        <span>
          Paso {current} de {total}
        </span>
        <span>{percent}%</span>
      </div>
      <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-brand-blue/10">
        <div
          className={cn(
            "h-full rounded-full bg-gradient-to-r from-brand-blue to-brand-sky transition-all duration-500 ease-out",
          )}
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
