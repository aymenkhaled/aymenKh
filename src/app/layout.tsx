import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Aymen Khaled - Full-Stack Developer",
  description:
    "Full-stack developer building SaaS, web, mobile, Windows desktop, AI, and automation products with React, TypeScript, Node.js, FastAPI, Tauri, Rust, and PostgreSQL.",
  keywords: [
    "Full Stack Developer",
    "SaaS Development",
    "AI SaaS Developer",
    "AI Integration",
    "OpenAI Developer",
    "Automation Developer",
    "React Developer",
    "Node.js Developer",
    "Next.js",
    "Tauri",
    "Windows Desktop Development",
    "Freelancer",
  ],
  openGraph: {
    title: "Aymen Khaled - Full-Stack Developer",
    description:
      "Building SaaS, web, mobile, Windows desktop, AI, and automation products.",
    type: "website",
  },
  other: {
    "autoseo-site-verification": "Yt7dMWqDUrRT7smbYK3Wwzf0BxyJoKXE",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.variable}>
        <ThemeProvider>
          {children}
          {process.env.VERCEL ? <Analytics /> : null}
        </ThemeProvider>
      </body>
    </html>
  );
}
