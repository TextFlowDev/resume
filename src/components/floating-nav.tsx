import Link from "next/link";
import { Button } from "@/components/ui/button";
import { navItems, site } from "@/data/resume";
import { SparkIcon } from "@/components/icons";

export function FloatingNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-slate-950/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="#top"
          className="flex min-w-0 items-center gap-3 rounded-full border border-slate-700/80 bg-slate-900/70 px-3 py-2 text-sm font-semibold text-white transition-colors hover:border-cyan-400/40"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-indigo-500 text-slate-950">
            <SparkIcon className="h-4 w-4" />
          </span>
          <span className="truncate">Ahmad AI</span>
        </Link>

        <nav className="hidden flex-1 items-center justify-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-sm text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <Button href={`mailto:${site.email}`} variant="secondary" className="hidden sm:inline-flex">
            Contact
          </Button>
          <Button href={site.github} variant="ghost" target="_blank">
            GitHub
          </Button>
        </div>
      </div>

      <div className="border-t border-white/5 px-4 py-2 md:hidden sm:px-6 lg:px-8">
        <div className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="shrink-0 rounded-full border border-slate-700/70 bg-slate-900/80 px-3 py-2 text-xs font-medium uppercase tracking-[0.18em] text-slate-300"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
