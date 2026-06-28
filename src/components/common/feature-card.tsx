import { Icon } from "@/components/common/icon";
import { cn } from "@/lib/utils";

export function FeatureCard({
  icon,
  title,
  description,
  className,
}: {
  icon: string;
  title: string;
  description: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "group glass-panel h-full p-6 transition-all hover:-translate-y-0.5 hover:shadow-md",
        className,
      )}
    >
      <div className="flex size-12 items-center justify-center rounded-xl bg-accent text-brand-blue">
        <Icon name={icon} className="size-6" />
      </div>
      <h3 className="mt-5 text-lg font-semibold text-brand-ink">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
    </div>
  );
}
