import { Card } from "@/components/ui/card";

type Props = {
  value: string;
  label: string;
  delay?: number;
};

export function MetricCard({ value, label, delay = 0 }: Props) {
  return (
    <Card
      className="relative overflow-hidden p-5 transition-transform duration-300 hover:-translate-y-1"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent to-indigo-500/10" />
      <div className="relative">
        <p className="text-3xl font-semibold tracking-tight text-white">{value}</p>
        <p className="mt-2 text-sm leading-6 text-slate-300">{label}</p>
      </div>
    </Card>
  );
}
