import Link from "next/link";
import { cn } from "@/lib/utils";
import type { PropsWithChildren } from "react";

type ButtonProps = PropsWithChildren<{
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  target?: string;
  download?: boolean;
}>;

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 cursor-pointer";

const variants = {
  primary:
    "bg-gradient-to-r from-cyan-400 via-sky-500 to-indigo-500 text-slate-950 shadow-lg shadow-cyan-500/20 hover:-translate-y-0.5 hover:shadow-cyan-500/30",
  secondary:
    "border border-slate-700/80 bg-slate-900/70 text-slate-100 hover:border-cyan-400/40 hover:bg-slate-900",
  ghost:
    "text-slate-200 hover:bg-white/5 hover:text-white border border-transparent hover:border-slate-700/60",
};

export function Button({
  href,
  variant = "primary",
  className,
  children,
  target,
  download,
}: ButtonProps) {
  const classes = cn(base, variants[variant], className);

  if (href) {
    return (
      <Link href={href} className={classes} target={target} download={download}>
        {children}
      </Link>
    );
  }

  return <button className={classes}>{children}</button>;
}
