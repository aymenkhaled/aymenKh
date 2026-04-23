"use client";

import { motion } from "framer-motion";
import {
  Layers, Zap, Plug, Gauge, PenTool, Cloud, Database, Search,
  ArrowUpRight,
} from "lucide-react";
import { data } from "@/data/portfolio";
import { SectionHeader } from "@/components/ui/SectionHeader";

const ICON_MAP: Record<string, React.ReactNode> = {
  layers:     <Layers size={22} />,
  zap:        <Zap size={22} />,
  plug:       <Plug size={22} />,
  gauge:      <Gauge size={22} />,
  "pen-tool": <PenTool size={22} />,
  cloud:      <Cloud size={22} />,
  database:   <Database size={22} />,
  search:     <Search size={22} />,
};

export function Services() {
  const featured = data.services.find((s) => s.size === "featured");
  const rest = data.services.filter((s) => s.size !== "featured");

  return (
    <section id="services" className="py-24" style={{ background: "var(--bg)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true, margin: "-40px" }}
        >
          <SectionHeader
            label="What I Do"
            title="Services"
            subtitle="Production-grade SaaS platforms, AI integrations, and full-stack applications — built to deliver measurable results."
          />
        </motion.div>

        {/* Featured card */}
        {featured && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            viewport={{ once: true, margin: "-30px" }}
            className="relative rounded-2xl overflow-hidden mb-4 group"
          >
            {/* Gradient border via pseudo-layer */}
            <div
              className="absolute inset-0 rounded-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                background:
                  "linear-gradient(135deg, var(--accent) 0%, transparent 50%, var(--accent-dim) 100%)",
                padding: "1px",
                WebkitMask:
                  "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "xor",
                maskComposite: "exclude",
              }}
            />
            <div
              className="relative flex flex-col md:flex-row gap-8 p-8 md:p-10 rounded-2xl border"
              style={{
                background:
                  "linear-gradient(135deg, rgba(16,185,129,0.08) 0%, rgba(16,185,129,0.02) 60%, var(--surface) 100%)",
                borderColor: "rgba(16,185,129,0.25)",
              }}
            >
              {/* Icon */}
              <div className="shrink-0">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center border"
                  style={{
                    background: "rgba(16,185,129,0.12)",
                    borderColor: "rgba(16,185,129,0.3)",
                    color: "var(--accent)",
                    boxShadow: "0 0 24px rgba(16,185,129,0.2)",
                  }}
                >
                  {ICON_MAP[featured.icon] ?? <Layers size={22} />}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <span
                      className="text-xs font-bold uppercase tracking-widest mb-2 block"
                      style={{ color: "var(--accent)" }}
                    >
                      Core Offering
                    </span>
                    <h3
                      className="text-2xl font-bold"
                      style={{ color: "var(--text)", letterSpacing: "-0.02em" }}
                    >
                      {featured.title}
                    </h3>
                  </div>
                  <ArrowUpRight
                    size={20}
                    className="shrink-0 mt-1 opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                    style={{ color: "var(--accent)" }}
                  />
                </div>
                <p
                  className="text-base leading-relaxed max-w-2xl"
                  style={{ color: "var(--text-muted)" }}
                >
                  {featured.description}
                </p>

                {/* Stats row */}
                <div className="flex flex-wrap gap-6 mt-6">
                  {[
                    { val: "65+", lbl: "AI tools integrated" },
                    { val: "40+", lbl: "Platforms scraped" },
                    { val: "10+", lbl: "AI assistants built" },
                  ].map(({ val, lbl }) => (
                    <div key={lbl}>
                      <p
                        className="text-xl font-bold"
                        style={{ color: "var(--accent)" }}
                      >
                        {val}
                      </p>
                      <p className="text-xs" style={{ color: "var(--text-dim)" }}>
                        {lbl}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Rest — 2-column grid on md, 3 on lg */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {rest.map((s, i) => (
            <ServiceCard key={i} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  index,
}: {
  service: (typeof data.services)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1], delay: index * 0.07 }}
      viewport={{ once: true, margin: "-20px" }}
      className="group relative rounded-2xl border p-6 overflow-hidden transition-all duration-300 hover:-translate-y-1"
      style={{ background: "var(--surface)", borderColor: "var(--border)" }}
    >
      {/* Hover gradient overlay */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
        style={{
          background:
            "radial-gradient(ellipse at top left, rgba(16,185,129,0.07) 0%, transparent 70%)",
        }}
      />

      {/* Top border accent on hover */}
      <div
        className="absolute top-0 left-0 right-0 h-px scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"
        style={{ background: "linear-gradient(to right, var(--accent), transparent)" }}
      />

      {/* Icon + number row */}
      <div className="flex items-start justify-between mb-5">
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center border group-hover:scale-110 transition-transform duration-300"
          style={{
            background: "var(--accent-dim)",
            borderColor: "var(--border-accent)",
            color: "var(--accent)",
          }}
        >
          {ICON_MAP[service.icon] ?? <Layers size={22} />}
        </div>
        <span
          className="text-xs font-bold tabular-nums opacity-30 group-hover:opacity-60 transition-opacity duration-300 mt-1"
          style={{ color: "var(--accent)" }}
        >
          0{index + 2}
        </span>
      </div>

      <h3
        className="text-base font-bold mb-2 leading-snug"
        style={{ color: "var(--text)", letterSpacing: "-0.01em" }}
      >
        {service.title}
      </h3>
      <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
        {service.description}
      </p>

      {/* Arrow on hover */}
      <div className="mt-4 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="text-xs font-semibold" style={{ color: "var(--accent)" }}>
          Learn more
        </span>
        <ArrowUpRight size={12} style={{ color: "var(--accent)" }} />
      </div>
    </motion.div>
  );
}
