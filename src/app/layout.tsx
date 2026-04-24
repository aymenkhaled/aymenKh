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
  title: "Aymen Khaled - AI SaaS & Full-Stack Developer",
  description:
    "AI SaaS and full-stack developer building production SaaS platforms, AI integrations, automation systems, and web/mobile apps with React, Node.js, Python, OpenAI, and Groq.",
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
    "Freelancer",
  ],
  openGraph: {
    title: "Aymen Khaled - AI SaaS & Full-Stack Developer",
    description:
      "Building production SaaS platforms, AI integrations, automation systems, and real-time full-stack products.",
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
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
