import { data } from "@/data/portfolio";

export function Footer() {
  const year = new Date().getFullYear();

  const footerLinks = [
    { href: "#services",     label: "Services" },
    { href: "#projects",     label: "Projects" },
    { href: "#experience",   label: "Experience" },
    { href: "#outcomes", label: "Outcomes" },
    { href: "#booking",      label: "Contact" },
  ];

  return (
    <footer
      className="py-8 border-t"
      style={{ background: "var(--bg)", borderColor: "var(--border)" }}
      role="contentinfo"
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Branding */}
        <div className="flex items-center gap-2">
          <a
            href="#hero"
            className="text-sm font-black tracking-tight"
            style={{ color: "var(--text)" }}
          >
            {data.name.split(" ")[0]}
            <span style={{ color: "var(--accent)" }}>.</span>
          </a>
          <span className="text-xs" style={{ color: "var(--text-dim)" }}>
            &copy; {year} {data.name}. All rights reserved.
          </span>
        </div>

        {/* Nav links */}
        <nav className="flex flex-wrap justify-center gap-5" aria-label="Footer navigation">
          {footerLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs font-medium transition-colors duration-200 hover:opacity-80"
              style={{ color: "var(--text-dim)" }}
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Status */}
        {data.availability && (
          <div className="flex items-center gap-2 text-xs font-semibold" style={{ color: "var(--accent)" }}>
            <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
            Open to Projects
          </div>
        )}
      </div>
    </footer>
  );
}


