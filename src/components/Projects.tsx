"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { ExternalLink, GitBranch, ArrowRight, Briefcase, BarChart3, Eye } from "lucide-react";
import { data } from "@/data/portfolio";
import { SectionHeader } from "@/components/ui/SectionHeader";

const TECH_SLUG: Record<string, string> = {
  React: "react",
  "Next.js": "nextdotjs",
  "Node.js": "nodedotjs",
  Python: "python",
  TypeScript: "typescript",
  JavaScript: "javascript",
  "Express.js": "express",
  PostgreSQL: "postgresql",
  MongoDB: "mongodb",
  Docker: "docker",
  "Tailwind CSS": "tailwindcss",
  OpenAI: "openai",
  WebSocket: "websocket",
  Stripe: "stripe",
  Puppeteer: "puppeteer",
  Cheerio: "cheerio",
  Lighthouse: "googlelighthouse",
  LangChain: "langchain",
  Redux: "redux",
  FastAPI: "fastapi",
  Django: "django",
  Groq: "groq",
  AWS: "amazonaws",
  Git: "git",
};

function TechIcon({ tag }: { tag: string }) {
  const slug = TECH_SLUG[tag];
  const [err, setErr] = useState(false);
  if (!slug || err) return null;
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`https://api.iconify.design/simple-icons:${slug}.svg?color=%23a8a8a8`}
      alt={tag}
      width={12}
      height={12}
      className="shrink-0"
      onError={() => setErr(true)}
    />
  );
}

const CAT_GRADIENT: Record<string, string> = {
  SaaS: "from-emerald-400/20 via-teal-400/10 to-blue-400/10",
  "E-commerce": "from-purple-400/20 via-pink-400/10 to-rose-400/10",
  "Web App": "from-blue-400/20 via-cyan-400/10 to-sky-400/10",
  "AI Tool": "from-cyan-400/20 via-blue-400/10 to-indigo-400/10",
  Automation: "from-amber-400/20 via-orange-400/10 to-red-400/10",
  Education: "from-lime-400/20 via-green-400/10 to-teal-400/10",
};

type Project = (typeof data.projects)[0];

function ProjectCard({ project, delay }: { project: Project; delay: number }) {
  const [imgErr, setImgErr] = useState(false);
  const grad = CAT_GRADIENT[project.category] ?? "from-emerald-400/20 to-teal-400/10";

  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1], delay }}
      className="group relative rounded-2xl border overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl flex flex-col"
      style={{
        background: "var(--surface)",
        borderColor: "var(--border)",
        boxShadow: "var(--shadow)",
      }}
    >
      <div className={`relative aspect-video bg-gradient-to-br ${grad} overflow-hidden`}>
        {project.thumbnail && !imgErr ? (
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className="object-cover object-top"
            onError={() => setImgErr(true)}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span
              className="text-7xl font-black opacity-10 select-none"
              style={{ color: "var(--accent)" }}
            >
              {project.title[0]}
            </span>
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage:
                  "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
          </div>
        )}

        <div
          className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: "linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)",
          }}
        >
          <div className="flex gap-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-white transition-all hover:opacity-90"
                style={{ background: "var(--accent)" }}
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink size={11} /> Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-white transition-all hover:opacity-90"
                style={{ background: "rgba(255,255,255,0.18)" }}
                onClick={(e) => e.stopPropagation()}
              >
                <GitBranch size={11} /> Code
              </a>
            )}
          </div>
        </div>

        <div className="absolute top-3 right-3">
          <span
            className="text-xs font-bold px-2.5 py-1 rounded-full"
            style={{ background: "var(--accent-dim)", color: "var(--accent)" }}
          >
            {project.category}
          </span>
        </div>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h3
          className="text-base font-bold mb-1.5 leading-tight"
          style={{ color: "var(--text)", letterSpacing: "-0.01em" }}
        >
          {project.title}
        </h3>
        <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-muted)" }}>
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1.5 text-xs font-medium px-2 py-0.5 rounded-md border"
              style={{
                borderColor: "var(--border)",
                color: "var(--text-dim)",
                background: "var(--surface)",
              }}
            >
              <TechIcon tag={tag} />
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-4 space-y-2 text-xs" style={{ color: "var(--text-dim)" }}>
          <p className="inline-flex items-center gap-1.5">
            <Briefcase size={12} />
            <span>{project.role}</span>
          </p>
          <p className="inline-flex items-center gap-1.5">
            <BarChart3 size={12} />
            <span>{project.impact}</span>
          </p>
          <p className="inline-flex items-center gap-1.5">
            <Eye size={12} />
            <span>{project.visibility}</span>
          </p>
        </div>

        <div
          className="mt-auto pt-4 border-t"
          style={{ marginTop: "auto", paddingTop: "1rem", borderTop: "1px solid var(--border)" }}
        >
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold transition-opacity hover:opacity-70"
              style={{ color: "var(--accent)" }}
            >
              View Live Project <ArrowRight size={11} />
            </a>
          ) : project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold transition-opacity hover:opacity-70"
              style={{ color: "var(--accent)" }}
            >
              View GitHub <ArrowRight size={11} />
            </a>
          ) : (
            <span
              className="inline-flex items-center gap-1.5 text-xs font-bold"
              style={{ color: "var(--text-dim)" }}
            >
              Private client project
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export function Projects() {
  const categories = ["All", ...Array.from(new Set(data.projects.map((p) => p.category)))];
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? data.projects : data.projects.filter((p) => p.category === active);

  return (
    <section
      id="projects"
      className="py-24"
      style={{ background: "var(--bg2)" }}
      aria-label="Projects"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true, margin: "-40px" }}
        >
          <SectionHeader
            label="Portfolio"
            title="Featured Projects"
            subtitle="A curated selection of recent work, each focused on solving business problems with measurable outcomes."
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1], delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-2 mb-10"
          role="tablist"
          aria-label="Filter projects by category"
        >
          {categories.map((cat) => {
            const isActive = cat === active;
            return (
              <button
                key={cat}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(cat)}
                className="px-4 py-1.5 rounded-full text-sm font-semibold border transition-all duration-200"
                style={{
                  background: isActive ? "var(--accent)" : "var(--surface)",
                  color: isActive ? "#fff" : "var(--text-muted)",
                  borderColor: isActive ? "var(--accent)" : "var(--border)",
                  transform: isActive ? "scale(1.03)" : "scale(1)",
                }}
              >
                {cat}
              </button>
            );
          })}
        </motion.div>

        <LayoutGroup>
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <AnimatePresence mode="popLayout">
              {filtered.map((project, i) => (
                <ProjectCard key={project.title} project={project} delay={i * 0.05} />
              ))}
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>
      </div>
    </section>
  );
}
