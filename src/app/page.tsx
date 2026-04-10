import { BadgeGroup } from "@/components/badge-group";
import { ExperienceItem } from "@/components/experience-item";
import { FloatingNav } from "@/components/floating-nav";
import {
  ArrowUpRightIcon,
  BoltIcon,
  GithubIcon,
  GridIcon,
  LinkedinIcon,
  MailIcon,
  SparkIcon,
  TerminalIcon,
} from "@/components/icons";
import { MetricCard } from "@/components/metric-card";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { TerminalCard } from "@/components/terminal-card";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  credentials,
  expertise,
  experience,
  metrics,
  positioning,
  projects,
  site,
  stack,
} from "@/data/resume";
import type { PropsWithChildren } from "react";

function SectionShell({
  id,
  children,
}: PropsWithChildren<{ id: string }>) {
  return (
    <section id={id} className="scroll-mt-28 py-16 sm:py-20 lg:py-24">
      {children}
    </section>
  );
}

export default function Home() {
  return (
    <div id="top" className="relative overflow-hidden section-soft">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 mx-auto h-[32rem] max-w-7xl bg-[radial-gradient(circle_at_top,rgba(103,232,249,0.15),transparent_30%),radial-gradient(circle_at_80%_10%,rgba(129,140,248,0.15),transparent_24%)]" />
      <FloatingNav />

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <section className="grid items-center gap-8 py-14 sm:py-20 lg:grid-cols-[1.25fr_0.95fr] lg:py-24">
          <div className="space-y-6 animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.22em] text-cyan-200">
              <SparkIcon className="h-4 w-4" />
              Hybrid Growth Operator
            </div>

            <div className="space-y-4">
              <h1 className="gradient-heading max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-7xl">
                {site.name}
              </h1>
              <p className="max-w-3xl text-base font-medium leading-8 text-cyan-200 sm:text-lg lg:text-xl">
                {site.role}
              </p>
              <p className="max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
                Founder-minded consultant bridging AI systems, growth strategy, UI/UX, and web execution for brands that want measurable outcomes.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button href="#projects">
                View Projects <ArrowUpRightIcon className="h-4 w-4" />
              </Button>
              <Button href="#contact" variant="secondary">
                Contact Me <MailIcon className="h-4 w-4" />
              </Button>
              <Button href="/ahmad-al-bukhary-resume.txt" variant="ghost" download>
                Download Resume <TerminalIcon className="h-4 w-4" />
              </Button>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              <Card className="p-4">
                <p className="text-xs uppercase tracking-[0.22em] text-slate-400">Focus</p>
                <p className="gradient-card-title mt-2 text-sm font-medium">Growth, automation, conversion</p>
              </Card>
              <Card className="p-4">
                <p className="text-xs uppercase tracking-[0.22em] text-slate-400">Location</p>
                <p className="gradient-card-title mt-2 text-sm font-medium">Malaysia / Remote</p>
              </Card>
              <Card className="p-4">
                <p className="text-xs uppercase tracking-[0.22em] text-slate-400">Current</p>
                <p className="gradient-card-title mt-2 text-sm font-medium">Growth Marketing Manager</p>
              </Card>
            </div>
          </div>

            <div className="grid gap-4 lg:justify-self-end">
              <TerminalCard />
            <Card className="grid gap-4 p-5 md:grid-cols-2">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-slate-400">Now building</p>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  Systems that make marketing operations feel lighter and smarter.
                </p>
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-slate-700/70 bg-slate-950/50 p-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-indigo-500 text-slate-950">
                  <GridIcon className="h-5 w-5" />
                </span>
                <div>
                  <p className="gradient-card-title text-sm font-medium">Founder-grade systems</p>
                  <p className="text-xs text-slate-400">strategy + execution + design</p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        <SectionShell id="about">
          <SectionHeading
            eyebrow="About / Profile"
            title="A rare hybrid operator who connects growth strategy with technical execution."
            description={positioning.join(" ")}
          />
          <div className="mt-8 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
            <Card className="p-6">
              <p className="text-sm leading-8 text-slate-300 sm:text-base">
                With 7+ years of experience across marketing, operations, automation, and digital product delivery, I help brands move from fragmented execution to clear, measurable systems. I work across AI automation, UI/UX, web experiences, paid media, and lifecycle marketing so teams can ship faster and convert better.
              </p>
            </Card>
            <Card className="p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-200">
                  <BoltIcon className="h-5 w-5" />
                </span>
                <div>
                  <p className="gradient-card-title text-sm font-medium">Hybrid advantage</p>
                  <p className="text-xs text-slate-400">Growth + automation + design + web</p>
                </div>
              </div>
              <Separator />
              <p className="text-sm leading-7 text-slate-300">
                I think like a founder, build like an operator, and communicate like a consultant.
              </p>
            </Card>
          </div>
        </SectionShell>

        <SectionShell id="expertise">
          <SectionHeading
            eyebrow="Core Expertise"
            title="The stack of capabilities I bring into one operating system."
            description="Each capability is selected to support the next: strategy feeds execution, execution feeds measurement, and measurement feeds optimization."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {expertise.map((item, index) => (
              <Card
                key={item}
                className="group p-5 transition-transform duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 70}ms` }}
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400/15 via-indigo-400/15 to-emerald-400/15 ring-1 ring-white/5">
                  <SparkIcon className="h-4 w-4 text-cyan-200" />
                </div>
                <h3 className="text-base font-semibold text-white">{item}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  Technical enough to implement. Strategic enough to connect to revenue.
                </p>
              </Card>
            ))}
          </div>
        </SectionShell>

        <SectionShell id="impact">
          <SectionHeading
            eyebrow="Impact Metrics"
            title="Signals that show how systems translated into business outcomes."
            description="These are directional performance indicators used to communicate the kind of lift I aim to create across growth and operations."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
            {metrics.map((metric, index) => (
              <MetricCard key={metric.label} {...metric} delay={index * 80} />
            ))}
          </div>
        </SectionShell>

        <SectionShell id="experience">
          <SectionHeading
            eyebrow="Experience Timeline"
            title="Growth, marketing, and training roles across brands and retail operations."
          />
          <div className="mt-8 grid gap-4">
            {experience.map((item) => (
              <ExperienceItem key={`${item.company}-${item.period}`} {...item} />
            ))}
          </div>
        </SectionShell>

        <SectionShell id="projects">
          <SectionHeading
            eyebrow="Selected Projects"
            title="Practical systems and founder-led work that show the technical edge."
          />
          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.name} {...project} />
            ))}
          </div>
        </SectionShell>

        <SectionShell id="stack">
          <SectionHeading
            eyebrow="Tech Stack"
            title="Tools I use to move from idea to implementation fast."
          />
          <Card className="mt-8 p-5">
            <BadgeGroup items={stack} className="flex flex-wrap gap-2" />
          </Card>
        </SectionShell>

        <SectionShell id="credentials">
          <SectionHeading
            eyebrow="Credentials / Education"
            title="Formal signals plus hands-on partner experience."
          />
          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {credentials.map((item) => (
              <Card key={item} className="p-5">
                <div className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-gradient-to-br from-cyan-400 to-emerald-400" />
                  <p className="text-sm leading-7 text-slate-200">{item}</p>
                </div>
              </Card>
            ))}
          </div>
        </SectionShell>

        <SectionShell id="contact">
          <Card className="relative overflow-hidden p-6 sm:p-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(103,232,249,0.16),transparent_25%),radial-gradient(circle_at_bottom_right,rgba(129,140,248,0.12),transparent_24%)]" />
            <div className="relative grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.26em] text-cyan-300/90">
                  Contact / Footer
                </p>
                <h2 className="gradient-heading mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                  Let’s build systems that make growth easier to scale.
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
                  Open to roles, consulting, and technical growth collaborations.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <Button href={`mailto:${site.email}`}>
                  <MailIcon className="h-4 w-4" /> {site.email}
                </Button>
                <Button href={site.linkedin} variant="secondary" target="_blank">
                  <LinkedinIcon className="h-4 w-4" /> LinkedIn
                </Button>
                <Button href={site.github} variant="secondary" target="_blank">
                  <GithubIcon className="h-4 w-4" /> GitHub
                </Button>
                <Button href={site.website} variant="ghost" target="_blank">
                  <ArrowUpRightIcon className="h-4 w-4" /> Website
                </Button>
              </div>
            </div>
          </Card>

          <footer className="py-10 text-center text-xs uppercase tracking-[0.24em] text-slate-500">
            Ahmad Al Bukhary Bin Ibrahim · AI Growth Marketing Manager · {site.dashboard}
          </footer>
        </SectionShell>
      </main>
    </div>
  );
}
