import { cn } from "@/lib/utils";
import type { PropsWithChildren } from "react";

type IconProps = {
  className?: string;
};

function Svg({ className, children }: PropsWithChildren<IconProps>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("h-5 w-5 shrink-0", className)}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export function ArrowUpRightIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M7 17L17 7" />
      <path d="M9 7h8v8" />
    </Svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </Svg>
  );
}

export function GithubIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M9 19c-4.5 1.5-4.5-1.8-6-2" />
      <path d="M15 19v-3.5c0-1 .3-1.8 1-2.5 2.3-.3 4.8-1.1 4.8-5.2 0-1.1-.4-2.1-1.1-2.9.1-.3.5-1.4-.1-2.9 0 0-.9-.3-2.8 1.1-1.6-.4-3.3-.4-4.9 0C10 2.6 9.1 2.9 9.1 2.9c-.6 1.5-.2 2.6-.1 2.9-.7.8-1.1 1.8-1.1 2.9 0 4.1 2.5 4.9 4.8 5.2.7.7 1 1.5 1 2.5V19" />
    </Svg>
  );
}

export function LinkedinIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v6h-4v-5.5a2.5 2.5 0 0 0-5 0V20h-4V8h4v1.8A4.6 4.6 0 0 1 16 8Z" />
      <path d="M2 9h4v11H2z" />
      <circle cx="4" cy="4" r="2" />
    </Svg>
  );
}

export function SparkIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8L12 2Z" />
    </Svg>
  );
}

export function TerminalIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M4 6h16v12H4z" />
      <path d="m7 10 3 2-3 2" />
      <path d="M13 14h4" />
    </Svg>
  );
}

export function GridIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M4 4h6v6H4z" />
      <path d="M14 4h6v6h-6z" />
      <path d="M4 14h6v6H4z" />
      <path d="M14 14h6v6h-6z" />
    </Svg>
  );
}

export function BoltIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />
    </Svg>
  );
}
