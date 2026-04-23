"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import { data } from "@/data/portfolio";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

const WORDS = ["SaaS platforms", "AI integrations", "mobile apps", "full-stack systems"];
const ease = [0.4, 0, 0.2, 1] as const;

export function Hero() {
  const [wordIdx, setWordIdx] = useState(0);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    const t = setInterval(() => setWordIdx((i) => (i + 1) % WORDS.length), 2600);
    return () => clearInterval(t);
  }, []);

  const initials = data.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "var(--bg)" }}
    >
      <div className="hero-grid" aria-hidden="true" />

      <div
        className="pointer-events-none absolute rounded-full blur-[200px]"
        style={{
          width: 700,
          height: 700,
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background: "rgba(16,185,129,0.07)",
        }}
        aria-hidden="true"
      />

      <div className="pointer-events-none absolute top-0 inset-x-0 flex flex-col items-center" aria-hidden="true">
        <div
          className="h-px w-60"
          style={{ background: "linear-gradient(90deg, transparent, var(--accent), transparent)", opacity: 0.55 }}
        />
        <div
          className="rounded-full blur-3xl"
          style={{ width: 280, height: 64, marginTop: -32, background: "var(--accent)", opacity: 0.1 }}
        />
      </div>

      <div className="relative z-10 w-full max-w-2xl mx-auto px-6 pt-28 pb-20 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.75 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease }}
          className="mb-5"
        >
          <div
            className="relative w-[68px] h-[68px] rounded-full overflow-hidden"
            style={{
              border: "2px solid var(--accent)",
              boxShadow: "0 0 0 4px var(--accent-dim), 0 0 28px var(--accent-glow)",
            }}
          >
            {!imgError ? (
              <Image
                src={data.photo}
                alt={data.name}
                fill
                className="object-cover object-top"
                priority
                onError={() => setImgError(true)}
              />
            ) : (
              <div
                className="w-full h-full flex items-center justify-center text-base font-black"
                style={{ background: "var(--bg3)", color: "var(--accent)" }}
              >
                {initials}
              </div>
            )}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease, delay: 0.1 }}
          className="mb-7"
        >
          <div className="avail-badge" role="status" aria-live="polite">
            <span className="avail-dot" />
            Available for new projects
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.18 }}
          className="font-black leading-[1.1] tracking-tighter mb-2"
          style={{ fontSize: "clamp(2.2rem, 6.2vw, 4.1rem)", letterSpacing: "-0.048em", color: "var(--text)" }}
        >
          <span style={{ color: "var(--accent)" }}>Full Stack Web</span>
          <br />
          <span style={{ color: "var(--text)" }}>& Mobile Developer</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease, delay: 0.28 }}
          className="font-semibold mb-6 flex items-center justify-center gap-2 flex-wrap"
          style={{ fontSize: "clamp(1rem, 2.5vw, 1.25rem)", color: "var(--text-muted)" }}
        >
          I build{" "}
          <span
            className="relative inline-block font-black"
            style={{ minWidth: "10ch" }}
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={wordIdx}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.22, ease }}
                className="inline-block"
                style={{
                  background: "linear-gradient(135deg, #10b981 0%, #3b82f6 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {WORDS[wordIdx]}
              </motion.span>
            </AnimatePresence>
          </span>
          {" "}that solve real business problems.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease, delay: 0.36 }}
          className="text-sm md:text-base leading-relaxed mb-7 max-w-xl"
          style={{ color: "var(--text-muted)" }}
        >
          {data.bio}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease, delay: 0.44 }}
          className="flex flex-wrap justify-center gap-2 mb-8"
        >
          {["React", "Next.js", "Node.js", "Python", "PostgreSQL", "OpenAI", "TypeScript"].map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 rounded-full text-xs font-semibold border"
              style={{ background: "var(--surface)", borderColor: "var(--border)", color: "var(--text-muted)" }}
            >
              {skill}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease, delay: 0.52 }}
          className="flex gap-3 flex-wrap justify-center mb-10"
        >
          <a href="#booking" className="btn-primary">
            <Calendar size={15} />
            Book a Free Call
          </a>
          <a href="#projects" className="btn-secondary">
            See My Work
            <ArrowRight size={15} />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-px overflow-hidden rounded-2xl border"
          style={{ borderColor: "var(--border)", background: "var(--border)" }}
        >
          {data.stats.map((stat, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center py-4 px-6 min-w-[100px]"
              style={{ background: "var(--surface)" }}
            >
              <span
                className="font-black text-xl leading-none mb-1"
                style={{ color: "var(--text)", letterSpacing: "-0.04em" }}
              >
                <AnimatedCounter value={stat.value} />
              </span>
              <span className="text-xs font-semibold" style={{ color: "var(--text-dim)" }}>
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
