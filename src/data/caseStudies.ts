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
