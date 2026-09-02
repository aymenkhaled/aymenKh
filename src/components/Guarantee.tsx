"use client";

import { motion } from "framer-motion";
import { ShieldCheck, RefreshCw, Clock } from "lucide-react";
import { data } from "@/data/portfolio";
import { SectionHeader } from "@/components/ui/SectionHeader";

const ICON_MAP: Record<string, React.ReactNode> = {
  "shield-check": <ShieldCheck size={22} />,
  "refresh-cw":   <RefreshCw size={22} />,
  "clock":        <Clock size={22} />,
};

export function Guarantee() {
  return (
    <section
      id="guarantee"
      className="py-24"
      style={{ background: "var(--bg)" }}
      aria-label="Delivery standards"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true, margin: "-40px" }}
        >
          <SectionHeader
            label="Delivery Standards"
            title="Clear, reliable collaboration"
            subtitle="A practical process from scope to launch, with regular reviews and a clean handover."
            center
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {data.guarantee.map((g, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: [0.4, 0, 0.2, 1],
                delay: i * 0.1,
              }}
              viewport={{ once: true, margin: "-20px" }}
              className="relative rounded-2xl border p-6 group transition-all duration-300 hover:-translate-y-1.5 overflow-hidden"
              style={{ background: "var(--surface)", borderColor: "var(--border)" }}
            >
              {/* Top accent line */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"
                style={{ background: "var(--accent)" }}
              />

              {/* Hover glow */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: "radial-gradient(ellipse at top, var(--accent-dim) 0%, transparent 60%)",
                }}
              />

              <div
                className="relative w-12 h-12 rounded-xl flex items-center justify-center border mb-5"
                style={{
                  background: "var(--accent-dim)",
                  borderColor: "var(--border-accent)",
                  color: "var(--accent)",
                }}
              >
                {ICON_MAP[g.icon] ?? <ShieldCheck size={22} />}
              </div>

              <h3
                className="text-base font-bold mb-2"
                style={{ color: "var(--text)", letterSpacing: "-0.01em" }}
              >
                {g.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                {g.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
