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
  title: "Aymen Khaled - Full Stack Web and Mobile Developer",
  description:
    "Full Stack Web and Mobile Developer specialized in SaaS and AI integrations. 15+ delivered projects with production experience in React, Node.js, and Python.",
  keywords: [
    "Full Stack Developer",
    "SaaS Development",
    "AI Integration",
    "React Developer",
    "Node.js Developer",
    "Next.js",
    "Freelancer",
  ],
  openGraph: {
    title: "Aymen Khaled - Full Stack Web and Mobile Developer",
    description: "Building production SaaS platforms with AI integrations and real-time systems.",
    type: "website",
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
