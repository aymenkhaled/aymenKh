"use client";

import { motion } from "framer-motion";
import { data } from "@/data/portfolio";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Testimonials() {
  const outcomes = data.projects.slice(0, 6);

  return (
    <section
      id="outcomes"
      className="py-24"
      style={{ background: "var(--bg2)" }}
      aria-label="Project outcomes"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true, margin: "-40px" }}
        >
          <SectionHeader
            label="Selected Outcomes"
            title="Proof without filler"
            subtitle="Real delivery signals from SaaS, AI, automation, and full-stack products."
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {outcomes.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: [0.4, 0, 0.2, 1],
                delay: i * 0.07,
              }}
              viewport={{ once: true, margin: "-20px" }}
              className="glass relative rounded-2xl p-6 group transition-all duration-300 hover:-translate-y-1.5 overflow-hidden"
              style={{ boxShadow: "var(--shadow)" }}
            >
              <div
                className="absolute top-0 left-0 right-0 h-px opacity-60"
                style={{ background: "linear-gradient(to right, var(--accent), transparent)" }}
                aria-hidden="true"
              />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
                style={{
                  background: "radial-gradient(ellipse at top left, var(--accent-dim) 0%, transparent 60%)",
                }}
              />

              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "var(--accent)" }}>
                {project.category} / {project.visibility}
              </span>
              <h3 className="mt-3 mb-3 text-lg font-black leading-tight" style={{ color: "var(--text)" }}>
                {project.title}
              </h3>
              <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--text-muted)" }}>
                {project.impact}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.slice(0, 4).map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border px-2.5 py-1 text-xs font-semibold"
                    style={{ borderColor: "var(--border)", color: "var(--text-dim)" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-6 border-t pt-4" style={{ borderColor: "var(--border)" }}>
                {project.liveUrl ? (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-bold" style={{ color: "var(--accent)" }}>
                    View live product
                  </a>
                ) : (
                  <span className="text-sm font-bold" style={{ color: "var(--text-dim)" }}>
                    Private client delivery
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
