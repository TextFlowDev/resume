import { Card } from "@/components/ui/card";
import { BriefcaseIcon } from "@/components/icons";

type Props = {
  company: string;
  title: string;
  period: string;
  summary: string;
};

export function ExperienceItem({ company, title, period, summary }: Props) {
  return (
    <Card className="group relative overflow-hidden p-5 transition-transform duration-300 hover:-translate-y-1">
      <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-cyan-400 via-sky-500 to-indigo-500 opacity-80" />
      <div className="relative pl-2">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
          <div>
            <div className="flex items-center gap-2">
              <BriefcaseIcon className="h-4 w-4 text-cyan-300" />
              <h3 className="text-base font-semibold text-white">{company}</h3>
            </div>
            <p className="text-sm text-cyan-300">{title}</p>
          </div>
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{period}</p>
        </div>
        <p className="mt-4 text-sm leading-7 text-slate-300">{summary}</p>
      </div>
    </Card>
  );
}
