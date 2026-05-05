export interface CaseStudy {
  problem: { subtitle: string; content: string };
  solution: { subtitle: string; content: string; bullets: string[] };
  results: { subtitle: string; content: string };
}

function cs(
  problem: string,
  solution: string,
  bullets: string[],
  results: string
): CaseStudy {
  return {
    problem: { subtitle: "Client challenge", content: problem },
    solution: { subtitle: "What I built", content: solution, bullets },
    results: { subtitle: "Measured outcomes", content: results },
  };
}

export const caseStudies: Record<string, CaseStudy> = {
  "strategy-navigator-ai-saas-platform": cs(
    "Strategy teams had fragmented workflows across disconnected tools and no scalable access model.",
    "Built a multi-tenant SaaS platform with RBAC, analytics, billing, and AI integrations.",
    [
      "65+ AI tools integrated",
      "Stripe and PayPal billing",
      "Slack, Asana, and Basecamp integrations",
      "Real-time WebSocket updates",
    ],
    "Delivered a live production platform used by active teams, with faster execution and centralized workflows."
  ),

  "journeyai-ai-sales-assistant-platform": cs(
    "Sales teams lost significant time in preparation and repetitive follow-up tasks.",
    "Built AI assistants for meeting prep, follow-ups, and context-aware workflow support.",
    [
      "AI-powered meeting preparation",
      "Automated follow-up generation",
      "CRM-ready workflow output",
      "Responsive, real-time UX",
    ],
    "Reduced repetitive manual tasks and improved consistency of post-meeting execution."
  ),

  "saleside-ai-sales-meeting-assistant": cs(
    "Critical meeting details and action items were often missed in manual note-taking.",
    "Built automated meeting capture, summarization, and action extraction workflows.",
    [
      "Real-time transcription pipeline",
      "Action item extraction",
      "AI-generated summaries",
      "Calendar and CRM integration",
    ],
    "Enabled faster and more reliable follow-ups with structured outputs for sales teams."
  ),

  "rxcare-deep-analyzer-suite": cs(
    "Medication management, care communication, refill planning, and health tracking were fragmented across separate tools and manual processes.",
    "Built a healthcare mobile app that combined pharmacy workflows, prescription management, telehealth appointments, secure messaging, lab and vitals tracking, family coordination, and an AI pharmacist assistant.",
    [
      "Prescription and refill tracking",
      "Drug interaction checks and savings support",
      "Telehealth and secure provider messaging",
      "AI pharmacist chat assistant",
    ],
    "Created one mobile healthcare workflow that improved medication adherence, care visibility, and day-to-day patient coordination."
  ),

  "tunisia-auto-connect-autotn": cs(
    "Drivers and sellers needed a localized automotive experience that combined diagnostics, marketplace activity, and multilingual support in one place.",
    "Built a trilingual automotive mobile platform with AI diagnostics, VIN decoding, vehicle price estimation, listing management, seller profiles, comparison tools, image uploads, and WhatsApp seller contact.",
    [
      "Arabic, French, and English support",
      "RTL-ready mobile UX",
      "AI diagnostics and VIN decoding",
      "Car, moto, and parts marketplace workflows",
    ],
    "Delivered a Tunisia-focused product that merged service, valuation, and marketplace flows into one mobile app."
  ),

  "integrity-solve-aml-ctf-compliance-portal": cs(
    "Regulated businesses needed a clearer way to manage onboarding, due diligence, risk routing, verification results, and audit evidence.",
    "Built a compliance SaaS prototype with wizard-led AML program setup, customer and company onboarding, reviewer decisions, escalation handling, provider normalization, and PDF audit summaries.",
    [
      "KYC, KYB, and AML screening flows",
      "Case management and reviewer routing",
      "Webhook-aware verification layer",
      "Evidence packs and audit-ready summaries",
    ],
    "Centralized AML and CTF operations into a workflow that made reviews, decisions, and audit preparation significantly easier."
  ),

  "lms-with-ai-integration-and-websocket": cs(
    "Students lacked immediate support and engagement in static learning experiences.",
    "Implemented AI chatbot support and WebSocket-powered live interaction features.",
    [
      "AI chatbot support",
      "Real-time communication",
      "Interactive learning modules",
      "Scalable architecture",
    ],
    "Improved engagement through real-time and AI-assisted learning workflows."
  ),

  "e-commerce-dashboard": cs(
    "Operations data was split across multiple tools, slowing decision making.",
    "Built a centralized dashboard for inventory, analytics, and order workflows.",
    [
      "Unified analytics and monitoring",
      "Inventory and order visibility",
      "Interactive data views",
      "Responsive management interface",
    ],
    "Provided one source of operational truth and faster execution for commerce teams."
  ),

  "job-scraper-and-outreach-automation": cs(
    "Lead discovery and outreach preparation required high manual effort and did not scale.",
    "Built scraping and enrichment automation pipelines across jobs, company pages, and contacts.",
    [
      "40+ source coverage",
      "Contact enrichment automation",
      "Deduplication and data quality workflows",
      "AI-supported outreach preparation",
    ],
    "Cut lead research time dramatically and enabled scaled outreach workflows."
  ),

  "seo-optimization-saas-issue-detector": cs(
    "Teams had no fast, repeatable way to find and prioritize SEO issues.",
    "Implemented a SaaS tool for automated auditing, issue detection, and action planning.",
    [
      "Automated SEO checks",
      "Prioritized issue outputs",
      "Actionable recommendations",
      "Tracking-ready reports",
    ],
    "Reduced audit time and improved execution consistency for optimization tasks."
  ),
};
