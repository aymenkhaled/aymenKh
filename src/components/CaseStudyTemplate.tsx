"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, GitBranch } from "lucide-react";
import type { CaseStudy } from "@/data/caseStudies";
import type { Project } from "@/types";

const TECH_SLUG: Record<string, string> = {
  "React":          "react",
  "Next.js":        "nextdotjs",
  "Node.js":        "nodedotjs",
  "Python":         "python",
  "TypeScript":     "typescript",
  "JavaScript":     "javascript",
  "Express.js":     "express",
  "PostgreSQL":     "postgresql",
  "MongoDB":        "mongodb",
  "Docker":         "docker",
  "Tailwind CSS":   "tailwindcss",
  "OpenAI":         "openai",
  "Stripe":         "stripe",
  "Puppeteer":      "puppeteer",
  "Cheerio":        "cheerio",
  "Lighthouse":     "googlelighthouse",
  "LangChain":      "langchain",
  "Redux":          "redux",
  "FastAPI":        "fastapi",
  "Django":         "django",
  "Groq":           "groq",
  "AWS":            "amazonaws",
  "Git":            "git",
};

function TechPill({ tag }: { tag: string }) {
  const slug = TECH_SLUG[tag];
  const [err, setErr] = useState(false);
  return (
    <span
      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium border"
      style={{
        background: "var(--surface)",
        borderColor: "var(--border)",
        color: "var(--text-muted)",
      }}
    >
      {slug && !err && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={`https://api.iconify.design/simple-icons:${slug}.svg?color=%23a8a8a8`}
          alt=""
          width={13}
          height={13}
          className="shrink-0"
          onError={() => setErr(true)}
        />
      )}
      {tag}
    </span>
  );
}

const SECTIONS: readonly { num: string; label: string; key: keyof CaseStudy }[] = [
  { num: "01", label: "The Problem",  key: "problem"  },
  { num: "02", label: "The Solution", key: "solution" },
  { num: "03", label: "The Results",  key: "results"  },
];

const ease = [0.4, 0, 0.2, 1] as const;

interface Props {
  study: CaseStudy;
  project: Project | undefined;
}

export function CaseStudyTemplate({ study, project }: Props) {
  const [imgErr, setImgErr] = useState(false);

  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh", color: "var(--text)" }}>
      {/* Sticky nav */}
      <header
        className="sticky top-0 z-40 border-b"
        style={{ background: "var(--bg)", borderColor: "var(--border)" }}
      >
        <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-semibold transition-opacity hover:opacity-70"
            style={{ color: "var(--text-muted)" }}
          >
            <ArrowLeft size={15} />
            All Projects
          </Link>
          <Link href="/" className="text-sm font-black" style={{ color: "var(--text)" }}>
            Aymen<span style={{ color: "var(--accent)" }}>.</span>
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 pb-24">
        {/* HERO */}
        <motion.section
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="py-16 border-b"
          style={{ borderColor: "var(--border)" }}
        >
          {/* Category + links row */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span
              className="text-xs font-bold px-2.5 py-1 rounded-full"
              style={{ background: "var(--accent-dim)", color: "var(--accent)" }}
            >
              {project?.category ?? "Project"}
            </span>
            {project?.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold transition-opacity hover:opacity-70"
                style={{ color: "var(--accent)" }}
              >
                <ExternalLink size={12} /> Live Demo
              </a>
            )}
            {project?.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold transition-opacity hover:opacity-70"
                style={{ color: "var(--text-muted)" }}
              >
                <GitBranch size={12} /> View Code
              </a>
            )}
          </div>

          {/* Title */}
          <h1
            className="font-black mb-5 leading-tight"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              letterSpacing: "-0.04em",
              color: "var(--text)",
            }}
          >
            {project?.title ?? "Case Study"}
          </h1>

          {/* Description */}
          <p
            className="text-lg leading-relaxed max-w-2xl"
            style={{ color: "var(--text-muted)" }}
          >
            {project?.description}
          </p>

          {/* Thumbnail */}
          {project?.thumbnail && !imgErr && (
            <div
              className="relative w-full aspect-video rounded-2xl overflow-hidden mt-10 border"
              style={{ borderColor: "var(--border)", background: "var(--surface)" }}
            >
              <Image
                src={project.thumbnail}
                alt={project.title}
                fill
                className="object-cover"
                onError={() => setImgErr(true)}
              />
            </div>
          )}
        </motion.section>

        {/* NUMBERED SECTIONS */}
        {SECTIONS.map(({ num, label, key }, i) => {
          const section = study[key];
          const bullets = key === "solution" ? study.solution.bullets : [];

          return (
            <motion.section
              key={key}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.55, ease, delay: i * 0.06 }}
              className="py-14 border-b"
              style={{ borderColor: "var(--border)" }}
            >
              <div className="flex gap-8 md:gap-16">
                {/* Big decorative number */}
                <div className="shrink-0 w-12 md:w-16 pt-1">
                  <span
                    className="font-black leading-none select-none"
                    style={{
                      fontSize: "clamp(2.5rem, 6vw, 4rem)",
                      color: "var(--accent)",
                      opacity: 0.18,
                      letterSpacing: "-0.05em",
                    }}
                  >
                    {num}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <p
                    className="text-xs font-bold uppercase tracking-widest mb-3"
                    style={{ color: "var(--accent)" }}
                  >
                    {label}
                  </p>
                  <h3
                    className="text-xl md:text-2xl font-black mb-5"
                    style={{ color: "var(--text)", letterSpacing: "-0.025em" }}
                  >
                    {section.subtitle}
                  </h3>
                  <p
                    className="text-base leading-relaxed"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {section.content}
                  </p>

                  {bullets.length > 0 && (
                    <div className="mt-6">
                      <p className="text-sm font-bold mb-4" style={{ color: "var(--text)" }}>
                        Key capabilities:
                      </p>
                      <ul className="space-y-3">
                        {bullets.map((b, j) => (
                          <motion.li
                            key={j}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.35, delay: j * 0.05 }}
                            className="flex items-start gap-3 text-sm leading-relaxed"
                            style={{ color: "var(--text-muted)" }}
                          >
                            <span
                              className="mt-[6px] w-1.5 h-1.5 rounded-full shrink-0"
                              style={{ background: "var(--accent)" }}
                            />
                            {b}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </motion.section>
          );
        })}

        {/* STACK */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease }}
          className="pt-14"
        >
          <p
            className="text-xs font-bold uppercase tracking-widest mb-6"
            style={{ color: "var(--accent)" }}
          >
            Stack Used
          </p>
          <div className="flex flex-wrap gap-2.5">
            {(project?.tags ?? []).map((tag) => (
              <TechPill key={tag} tag={tag} />
            ))}
          </div>
        </motion.section>
      </main>
    </div>
  );
}
