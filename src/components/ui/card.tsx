import { cn } from "@/lib/utils";
import type { HTMLAttributes, PropsWithChildren } from "react";

export function Card({
  className,
  children,
  ...props
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) {
  return (
    <div
      className={cn(
        "glass noise rounded-3xl p-5 shadow-2xl shadow-slate-950/35",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
