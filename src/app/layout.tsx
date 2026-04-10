import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ahmad Al Bukhary Bin Ibrahim | AI Growth Marketing Manager",
  description:
    "Premium resume and portfolio for Ahmad Al Bukhary Bin Ibrahim — AI growth marketing, automation, UI/UX, and web solutions builder.",
  metadataBase: new URL("https://www.ahmad-ai.com"),
  openGraph: {
    title: "Ahmad Al Bukhary Bin Ibrahim",
    description:
      "Founder-minded AI growth marketing manager and automation developer.",
    url: "https://www.ahmad-ai.com/",
    siteName: "Ahmad AI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahmad Al Bukhary Bin Ibrahim",
    description:
      "Founder-minded AI growth marketing manager and automation developer.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-slate-950 text-slate-100">
        {children}
      </body>
    </html>
  );
}
