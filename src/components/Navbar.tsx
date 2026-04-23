"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X, Calendar } from "lucide-react";
import { data } from "@/data/portfolio";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#outcomes", label: "Outcomes" },
    { href: "#booking", label: "Contact" },
  ];

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-8 h-16 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(var(--bg-rgb, 249,249,253),0.85)" : "transparent",
          backdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
          borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        }}
      >
        {/* Logo */}
        <a
          href="#hero"
          className="text-base font-black tracking-tight"
          style={{ color: "var(--text)" }}
        >
          {data.name.split(" ")[0]}
          <span style={{ color: "var(--accent)" }}>.</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-7 list-none">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-500 transition-colors duration-200 hover:opacity-100 relative group"
                style={{ color: "var(--text-muted)", fontWeight: 500 }}
              >
                {l.label}
                <span
                  className="absolute -bottom-0.5 left-0 right-0 h-px scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-200 rounded"
                  style={{ background: "var(--accent)" }}
                />
              </a>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-2.5">
          {/* Theme toggle */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="w-9 h-9 rounded-lg flex items-center justify-center border transition-all duration-200 hover:scale-105"
              style={{
                background: "var(--surface)",
                borderColor: "var(--border)",
                color: "var(--text-muted)",
              }}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
            </button>
          )}

          {/* CTA */}
          <a
            href="#booking"
            className="hidden md:flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-bold text-white transition-all duration-200 hover:opacity-90 hover:-translate-y-px"
            style={{ background: "var(--accent)" }}
          >
            <Calendar size={13} />
            Let&apos;s Talk
          </a>

          {/* Hamburger */}
          <button
            className="md:hidden w-9 h-9 rounded-lg flex items-center justify-center border transition-all"
            style={{
              background: "var(--surface)",
              borderColor: "var(--border)",
              color: "var(--text-muted)",
            }}
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="fixed top-16 left-0 right-0 z-40 flex flex-col gap-1 px-6 py-5 border-b"
          style={{ background: "var(--bg)", borderColor: "var(--border)" }}
        >
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="py-2.5 text-sm font-semibold border-b transition-colors hover:opacity-80"
              style={{
                color: "var(--text-muted)",
                borderColor: "var(--border)",
              }}
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#booking"
            className="mt-3 flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-bold text-white"
            style={{ background: "var(--accent)" }}
            onClick={() => setMenuOpen(false)}
          >
            <Calendar size={14} /> Let&apos;s Talk
          </a>
        </div>
      )}
    </>
  );
}
