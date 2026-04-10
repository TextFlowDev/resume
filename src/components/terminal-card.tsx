import { Card } from "@/components/ui/card";
import { terminalLines } from "@/data/resume";

export function TerminalCard() {
  return (
    <Card className="animate-floaty overflow-hidden p-0">
      <div className="flex items-center gap-2 border-b border-slate-700/70 bg-slate-950/80 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-red-400" />
        <span className="h-3 w-3 rounded-full bg-amber-400" />
        <span className="h-3 w-3 rounded-full bg-emerald-400" />
        <span className="ml-2 text-xs uppercase tracking-[0.3em] text-slate-400">
          operator.log
        </span>
      </div>
      <div className="space-y-2 px-4 py-5 font-mono text-sm leading-7 text-slate-200">
        {terminalLines.map((line, index) => (
          <div key={line} className="flex gap-4">
            <span className="w-6 shrink-0 text-right text-slate-500">
              {String(index + 1).padStart(2, "0")}
            </span>
            <pre className="whitespace-pre-wrap text-slate-200">{line}</pre>
          </div>
        ))}
      </div>
      <div className="border-t border-slate-700/70 px-4 py-4">
        <div className="flex flex-wrap gap-2 text-xs text-slate-300">
          <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1">
            growth systems
          </span>
          <span className="rounded-full border border-indigo-400/20 bg-indigo-400/10 px-3 py-1">
            AI workflows
          </span>
          <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1">
            conversion design
          </span>
        </div>
      </div>
    </Card>
  );
}
