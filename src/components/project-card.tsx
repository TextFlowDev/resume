import { Card } from "@/components/ui/card";
import { StarIcon } from "@/components/icons";

type Props = {
  name: string;
  category: string;
  summary: string;
  impact: string;
};

export function ProjectCard({ name, category, summary, impact }: Props) {
  return (
    <Card className="group flex h-full flex-col justify-between gap-5 p-5 transition-transform duration-300 hover:-translate-y-1">
      <div>
        <div className="flex items-center justify-between gap-3">
          <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-200">
            {category}
          </span>
          <StarIcon className="h-5 w-5 text-emerald-300" />
        </div>
        <h3 className="gradient-card-title mt-4 text-lg font-semibold tracking-tight">{name}</h3>
        <p className="mt-3 text-sm leading-7 text-slate-300">{summary}</p>
      </div>
      <div className="rounded-2xl border border-slate-700/70 bg-slate-950/50 p-4 text-sm leading-6 text-slate-200">
        <span className="text-cyan-300">Impact:</span> {impact}
      </div>
    </Card>
  );
}
