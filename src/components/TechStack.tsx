"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { data } from "@/data/portfolio";
import { SectionHeader } from "@/components/ui/SectionHeader";

const TECH_ICONS: Record<string, string> = {
  "React":          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  "Next.js":        "https://cdn.simpleicons.org/nextdotjs/FFFFFF",
  "React Native":   "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  "Redux":          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",
  "Tailwind CSS":   "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  "TypeScript":     "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  "Python":         "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  "JavaScript":     "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  "Node.js":        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
  "Express.js":     "https://cdn.simpleicons.org/express/FFFFFF",
  "FastAPI":        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg",
  "Django":         "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-original.svg",
  "LangChain":      "https://cdn.simpleicons.org/langchain/1C3C3C",
  "OpenAI":         "https://cdn.simpleicons.org/openai/FFFFFF",
  "Groq":           "https://cdn.simpleicons.org/groq/F5504E",
  "PostgreSQL":     "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
  "MongoDB":        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
  "Docker":         "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
  "Git":            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  "AWS":            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
};

function TechIcon({ name, category }: { name: string; category: string }) {
  const [failed, setFailed] = useState(false);
  const color = CAT_COLORS[category] ?? "#10b981";
  const iconUrl = TECH_ICONS[name];

  if (!iconUrl || failed) {
    return (
      <span
        className="w-4 h-4 rounded-full shrink-0"
        style={{ background: color }}
      />
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={iconUrl}
      alt={name}
      width={16}
      height={16}
      className="w-4 h-4 shrink-0 object-contain"
      onError={() => setFailed(true)}
    />
  );
}

const CAT_COLORS: Record<string, string> = {
  frontend: "#3b82f6",
  backend:  "#8b5cf6",
  language: "#f59e0b",
  styling:  "#ec4899",
  database: "#10b981",
  orm:      "#06b6d4",
  api:      "#f97316",
  devops:   "#6366f1",
  cache:    "#14b8a6",
  cloud:    "#0ea5e9",
  deploy:   "#84cc16",
  payments: "#facc15",
  automation:"#f97316",
  ai:       "#c084fc",
  animation:"#fb923c",
  design:   "#e879f9",
  ci:       "#4ade80",
  testing:  "#fb7185",
  validation:"#67e8f9",
};

function StackRow({
  items,
  direction,
  speed,
}: {
  items: (typeof data.stack)[0][];
  direction: "left" | "right";
  speed: number;
}) {
  const doubled = [...items, ...items, ...items, ...items];
  return (
    <div className="relative overflow-hidden my-1.5">
      <div
        className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, var(--bg3), transparent)" }}
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, var(--bg3), transparent)" }}
      />
      <div
        className="flex gap-2.5"
        style={{
          width: "max-content",
          animation: `marquee-${direction} ${speed}s linear infinite`,
        }}
      >
        {doubled.map((t, i) => {
          return (
            <div
              key={i}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border whitespace-nowrap text-sm font-semibold transition-all duration-200 cursor-default hover:scale-105"
              style={{
                background: "var(--surface)",
                borderColor: "var(--border)",
                color: "var(--text-muted)",
              }}
            >
              <TechIcon name={t.name} category={t.category} />
              {t.name}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function TechStack() {
  const chunkSize = Math.ceil(data.stack.length / 3);
  const rows = [
    data.stack.slice(0, chunkSize),
    data.stack.slice(chunkSize, chunkSize * 2),
    data.stack.slice(chunkSize * 2),
  ] as const;

  return (
    <section
      id="stack"
      className="py-20 overflow-hidden border-y"
      style={{ background: "var(--bg3)", borderColor: "var(--border)" }}
      aria-label="Tech stack"
    >
      <div className="max-w-6xl mx-auto px-6 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true }}
        >
          <SectionHeader
            label="Tech Stack"
            title="Tools I build with"
            subtitle="Modern, battle-tested technologies chosen for performance, developer experience, and scalability."
          />
        </motion.div>
      </div>

      <StackRow items={[...rows[0]]} direction="left"  speed={22} />
      <StackRow items={[...rows[1]]} direction="right" speed={26} />
      <StackRow items={[...rows[2]]} direction="left"  speed={20} />
    </section>
  );
}
