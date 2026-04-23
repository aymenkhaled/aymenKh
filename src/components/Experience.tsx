"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Calendar, CheckCircle2 } from "lucide-react";
import { data } from "@/data/portfolio";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Experience() {
  const [active, setActive] = useState(0);
  const exp = data.experience[active];

  return (
    <section
      id="experience"
      className="py-24"
      style={{ background: "var(--bg)" }}
      aria-label="Work experience"
    >
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true, margin: "-40px" }}
        >
          <SectionHeader
            label="Career"
            title="Work Experience"
            subtitle="Professional and internship experience across AI SaaS, e-learning, IoT mobile apps, and e-commerce systems."
          />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
          {data.experience.map((e, i) => {
            const selected = active === i;
            return (
              <button
                key={e.company}
                onClick={() => setActive(i)}
                className="rounded-xl border px-4 py-3 text-left transition-all duration-200"
                style={{
                  background: selected ? "var(--accent-dim)" : "var(--surface)",
                  borderColor: selected ? "var(--border-accent)" : "var(--border)",
                  color: selected ? "var(--accent)" : "var(--text-muted)",
                }}
                aria-selected={selected}
              >
                <span className="block text-sm font-bold leading-tight">{e.company}</span>
                <span className="block text-xs mt-1" style={{ color: "var(--text-dim)" }}>
                  {e.role}
                </span>
              </button>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1], delay: 0.1 }}
          viewport={{ once: true, margin: "-30px" }}
          className="rounded-2xl border p-6 md:p-8"
          style={{ background: "var(--surface)", borderColor: "var(--border)" }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 18 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -18 }}
              transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
            >
              <div className="flex items-start gap-4 mb-5">
                <div
                  className="shrink-0 w-12 h-12 rounded-xl overflow-hidden flex items-center justify-center border"
                  style={{ borderColor: "var(--border)", background: "var(--bg3)" }}
                >
                  {exp.logo ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={exp.logo}
                      alt={exp.company}
                      className="w-full h-full object-contain"
                      style={{ padding: "6px" }}
                    />
                  ) : (
                    <span className="text-xs font-black" style={{ color: "var(--accent)" }}>
                      {exp.company
                        .split(" ")
                        .map((w) => w[0])
                        .join("")
                        .slice(0, 2)
                        .toUpperCase()}
                    </span>
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-3 flex-wrap">
                    <div>
                      <h3
                        className="text-lg font-bold leading-tight"
                        style={{ color: "var(--text)", letterSpacing: "-0.02em" }}
                      >
                        {exp.role}
                      </h3>
                      <p className="text-sm font-semibold" style={{ color: "var(--accent)" }}>
                        {exp.company}
                      </p>
                    </div>
                    {exp.endDate === "Present" && (
                      <span
                        className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shrink-0"
                        style={{ background: "var(--accent-dim)", color: "var(--accent)" }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                        Current
                      </span>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-4 mt-1.5">
                    <span
                      className="flex items-center gap-1 text-xs"
                      style={{ color: "var(--text-dim)" }}
                    >
                      <Calendar size={11} />
                      {exp.startDate} - {exp.endDate}
                    </span>
                    <span
                      className="flex items-center gap-1 text-xs"
                      style={{ color: "var(--text-dim)" }}
                    >
                      <MapPin size={11} />
                      {exp.location}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--text-muted)" }}>
                {exp.description}
              </p>

              {exp.achievements.length > 0 && (
                <ul className="space-y-3">
                  {exp.achievements.map((a, j) => (
                    <motion.li
                      key={j}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.28, delay: j * 0.055 }}
                      className="flex items-start gap-3 text-sm leading-relaxed"
                      style={{ color: "var(--text-muted)" }}
                    >
                      <CheckCircle2
                        size={14}
                        className="mt-0.5 shrink-0"
                        style={{ color: "var(--accent)" }}
                      />
                      {a}
                    </motion.li>
                  ))}
                </ul>
              )}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
