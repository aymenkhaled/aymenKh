"use client";

import { motion } from "framer-motion";
import { data } from "@/data/portfolio";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Process() {
  return (
    <section
      id="process"
      className="py-24"
      style={{ background: "var(--bg2)" }}
      aria-label="How I work"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start"
        >
          {/* Left: header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.4, 0, 0.2, 1] }}
            viewport={{ once: true, margin: "-40px" }}
            className="lg:sticky lg:top-24"
          >
            <SectionHeader
              label="How I Work"
              title={`A process\nbuilt for results`}
              subtitle="Clear requirements, short written updates and reviewable changes, whether I join your team or deliver a defined project."
            />
            <div
              className="mt-6 p-5 rounded-2xl border"
              style={{ background: "var(--accent-dim)", borderColor: "var(--border-accent)" }}
            >
              <p className="text-sm font-semibold" style={{ color: "var(--accent)" }}>
                Written updates, focused calls
              </p>
              <p className="text-xs mt-1.5 leading-relaxed" style={{ color: "var(--text-muted)" }}>
                I prefer written communication and clear task tracking. A brief weekly call or a focused discussion helps when a decision needs it.
              </p>
            </div>
          </motion.div>

          {/* Right: timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div
              className="absolute left-7 top-4 bottom-4 w-0.5 rounded-full"
              style={{
                background: "linear-gradient(to bottom, var(--accent), transparent)",
              }}
              aria-hidden="true"
            />

            <div className="flex flex-col">
              {data.process.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    ease: [0.4, 0, 0.2, 1],
                    delay: i * 0.08,
                  }}
                  viewport={{ once: true, margin: "-20px" }}
                  className="relative grid gap-5 pb-10 last:pb-0 group"
                  style={{ gridTemplateColumns: "56px 1fr" }}
                >
                  {/* Step dot */}
                  <div
                    className="w-14 h-14 rounded-full border-2 flex items-center justify-center text-sm font-black z-10 relative transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: "var(--bg)",
                      borderColor: "var(--border-accent)",
                      color: "var(--accent)",
                    }}
                  >
                    {String(step.step).padStart(2, "0")}
                  </div>

                  {/* Step content */}
                  <div className="pt-2.5">
                    <span
                      className="inline-block text-xs font-bold px-2.5 py-0.5 rounded-full mb-2 uppercase tracking-wider"
                      style={{ background: "var(--accent-dim)", color: "var(--accent)" }}
                    >
                      {step.badge}
                    </span>
                    <h3
                      className="text-base font-bold mb-1.5"
                      style={{ color: "var(--text)", letterSpacing: "-0.02em" }}
                    >
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
