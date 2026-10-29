"use client";

import { useState } from "react";
import { Mail, CalendarClock, FileDown, GitBranch, Link2, MessageCircle, BriefcaseBusiness } from "lucide-react";
import { data } from "@/data/portfolio";
import { SectionHeader } from "@/components/ui/SectionHeader";

const LINKS = [
  { key: "linkedin", label: "LinkedIn", Icon: Link2 },
  { key: "github", label: "GitHub", Icon: GitBranch },
  { key: "whatsapp", label: "WhatsApp", Icon: MessageCircle },
  { key: "upwork", label: "Upwork", Icon: BriefcaseBusiness },
] as const;

export function Booking() {
  const [showCalendar, setShowCalendar] = useState(false);
  return (
    <section id="booking" aria-label="Contact Aymen" className="py-24 border-t" style={{ background: "var(--bg2)", borderColor: "var(--border)" }}>
      <div className="max-w-3xl mx-auto px-6 text-center">
        <SectionHeader label="Get in touch" title="A role, a project, or a technical challenge?" subtitle="Open to remote developer roles and freelance collaboration. Send the role description or a short project brief; we can start in writing." center />
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          <a href={data.social.email} className="btn-primary"><Mail size={16} />Email Aymen</a>
          <a href="/Aymen_Khaled_CV.pdf" download className="btn-secondary"><FileDown size={16} />Download CV</a>
        </div>
        <p className="text-sm mb-5" style={{ color: "var(--text-muted)" }}>Sfax, Tunisia · Written updates, clear tasks and a documented handover.</p>
        <div className="flex flex-wrap gap-3 justify-center mb-10">
          {LINKS.map(({ key, label, Icon }) => data.social[key] && (
            <a key={key} href={data.social[key]} target="_blank" rel="noopener noreferrer" className="btn-secondary"><Icon size={15} />{label}</a>
          ))}
        </div>
        <details className="rounded-2xl border p-5 text-left" style={{ borderColor: "var(--border)" }}>
          <summary className="cursor-pointer font-semibold">Prefer a call?</summary>
          <p className="text-sm my-4" style={{ color: "var(--text-muted)" }}>If useful, book an optional 30-minute project consultation or introduction. The calendar loads only when requested.</p>
          <div className="flex gap-3 flex-wrap">
            <a href={data.social.calendly} target="_blank" rel="noopener noreferrer" className="btn-secondary"><CalendarClock size={15} />Open Calendly</a>
            <button type="button" className="btn-secondary" onClick={() => setShowCalendar(!showCalendar)} aria-expanded={showCalendar}>{showCalendar ? "Hide calendar" : "Load calendar here"}</button>
          </div>
          {showCalendar && <iframe title="Schedule a call with Aymen Khaled" src={`${data.social.calendly}?hide_event_type_details=1&hide_gdpr_banner=1`} className="w-full h-[680px] bg-white mt-5 rounded-xl" />}
        </details>
      </div>
    </section>
  );
}
