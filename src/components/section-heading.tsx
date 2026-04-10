import { cn } from "@/lib/utils";
import { ChevronRightIcon } from "@/components/icons";

type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: Props) {
  return (
    <div className={cn("max-w-3xl", className)}>
      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300/90">
        <ChevronRightIcon className="h-4 w-4" />
        <p>{eyebrow}</p>
      </div>
      <h2 className="gradient-heading mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}
