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
  "ai-career-path-mapper": cs(
    "Job seekers lack visibility into the specific skills and steps needed to move from their current role to their target position. Generic online advice doesn't account for individual background, and the research process alone can take days with no actionable output.",
    "I built an AI-powered platform that analyzes a user's current role and target career goal, generates a personalized step-by-step roadmap with identified skill gaps, and curates exactly the right learning resources to close them.",
    [
      "Role-to-role skill gap analysis powered by Gemini",
      "Personalized 90-day learning roadmap generation",
      "Curated course and resource recommendations per gap",
      "Clean, shareable career plan output",
      "Full TypeScript API with Next.js frontend",
    ],
    "Users receive a complete, actionable career plan in under 30 seconds — replacing days of manual research. The platform delivers clarity and structure where generic career advice fails, giving users a focused path with measurable milestones."
  ),

  "ai-motivation-letter-generator": cs(
    "Job applicants spend hours writing motivation letters that still feel generic and fail ATS screening. A single application can take 2+ hours of writing, and most candidates submit letters that don't stand out or pass automated filters.",
    "I built a platform that generates 10 ATS-optimized motivation letter variations tailored to the specific role, company, and position — each exportable to PDF or Word in one click using Gemini's language model.",
    [
      "10 unique, non-repetitive letter variations per submission",
      "ATS optimization baked into every generated output",
      "Role, company, and position context awareness",
      "One-click export to PDF and Word",
      "Gemini-powered tone and style matching",
    ],
    "Application writing time reduced from 2+ hours to under 60 seconds. Users receive 10 polished, ATS-compliant letter options instantly — increasing interview callback rates through better-targeted, professionally written content."
  ),

  "postily-ai-social-media-platform": cs(
    "Social media managers manually create content for multiple platforms, spending hours per post on captions and creative — with no unified scheduling tool and no analytics to understand what's actually working.",
    "I built a full SaaS platform with AI-generated captions and images, multi-platform scheduling, and an analytics dashboard that tracks performance across all channels from a single workspace.",
    [
      "AI caption and image generation per platform",
      "Multi-platform scheduling and queue management",
      "Full analytics dashboard with engagement metrics",
      "Campaign management workspace for teams",
      "MongoDB-backed content history and versioning",
    ],
    "Content creation time reduced by 70%. Teams maintain consistent, high-quality posting schedules across platforms without manual effort, while unified analytics provide the visibility needed to optimize future campaigns."
  ),

  "apispark-drag-drop-api-builder": cs(
    "Backend developers waste hours writing boilerplate CRUD code, schema definitions, and API documentation at the start of every project — slowing down the most repetitive, low-value phase of development.",
    "I built a visual SaaS platform where developers design APIs by dragging and connecting components. AI-assisted code generation produces clean output for each component, while the platform auto-generates full OpenAPI documentation.",
    [
      "Visual drag-and-drop API design canvas",
      "AI code generation for endpoints and schemas",
      "Automatic OpenAPI documentation generation",
      "Prisma-backed data modeling and migrations",
      "One-click deployment pipeline",
    ],
    "API scaffolding time cut from hours to under 15 minutes. Developers skip boilerplate entirely and go directly to business logic — dramatically accelerating the early stage of every project without sacrificing code quality."
  ),

  "scenewear-e-commerce": cs(
    "Scenewear, a growing local clothing brand, had no online storefront. Customers placed orders via Instagram DMs, creating a manual, unscalable process that capped revenue and required constant owner involvement.",
    "I built a full-featured e-commerce platform with product catalog, shopping cart, secure checkout, and order management — powered by a Next.js frontend, Spring Boot REST API, and PostgreSQL database.",
    [
      "Product catalog with filtering, search, and variants",
      "Shopping cart and order management system",
      "Secure checkout flow with payment integration",
      "Spring Boot REST API with PostgreSQL backend",
      "Admin dashboard for inventory and order tracking",
    ],
    "Scenewear went from manual DM orders to a fully operational online store in 3 weeks. The platform handles their complete catalog and processes orders end-to-end without any manual intervention from the owner."
  ),

  "vs-code-portfolio": cs(
    "Developer portfolios are largely indistinguishable — the same hero section, project grid, and contact form. This makes it nearly impossible to stand out to technical hiring teams who review dozens of identical portfolios.",
    "I built a portfolio disguised as a fully interactive VS Code IDE — complete with a working file explorer, syntax-highlighted code views, a terminal simulation, and a theme toggle — using Next.js and CSS animations.",
    [
      "Interactive VS Code UI replica with full fidelity",
      "File explorer that navigates real project pages",
      "Syntax-highlighted code blocks per project",
      "Working terminal simulation with commands",
      "Dark/light theme toggle matching VS Code themes",
    ],
    "The portfolio generates immediate, memorable reactions from technical reviewers. Visitors spend significantly longer exploring vs. a standard layout, and multiple hire inquiries have been attributed directly to the unique interface."
  ),

  "minisport-internal-rag-assistant": cs(
    "MiniSport's support and operations team spent significant time searching through internal documentation to answer questions about products, policies, and procedures — creating slow, inconsistent responses and operational drag.",
    "I built an internal RAG assistant using n8n and OpenAI that ingests company documents, creates vector embeddings, and allows staff to query any documentation in plain English — returning accurate, context-aware answers in seconds.",
    [
      "Automated document ingestion and re-indexing pipeline",
      "Vector database for semantic document search",
      "Conversational query interface for the full team",
      "n8n orchestration with webhook-based triggers",
      "OpenAI-powered natural language response generation",
    ],
    "Internal documentation queries reduced by 60%. Staff now get accurate answers in seconds instead of minutes, and the system stays current through automated document re-ingestion — eliminating the risk of outdated information being shared."
  ),

  "bookielink-customer-support-bot": cs(
    "BookieLink's support volume exceeded what their small team could manage. Repetitive questions were consuming hours daily, delaying responses to complex cases that genuinely required human attention.",
    "I built a RAG-powered support chatbot trained on 5,000+ Q&A pairs covering BookieLink's full product surface — deployed as a front-line agent capable of handling the majority of incoming queries autonomously.",
    [
      "5,000+ Q&A dataset for RAG training",
      "Vector-based semantic similarity search",
      "Automatic escalation for unrecognized queries",
      "Webhook-based deployment and session management",
      "OpenAI-powered natural language response layer",
    ],
    "The bot achieves 85% query accuracy and reduced support tickets by 70% in the first month. The team now handles only complex escalations — recovering hours of daily capacity that were previously consumed by repetitive queries."
  ),

  "iprint-ai-voice-chat-support-agent": cs(
    "iPrint received over 500 customer queries daily across chat and phone. Their small support team couldn't keep pace, resulting in long wait times, missed follow-ups, and a deteriorating customer experience.",
    "I built a combined AI support system: a chat agent for text queries and an ElevenLabs + Twilio voice agent for phone calls — both integrated with Stripe for real-time payment processing and automated appointment scheduling.",
    [
      "AI chat agent handling all inbound text queries",
      "ElevenLabs voice agent for natural phone interactions",
      "Stripe payment integration inside the conversation flow",
      "Automated booking and appointment scheduling",
      "500+ daily query capacity without human involvement",
    ],
    "Response time improved by 45%. 500+ daily queries are now handled autonomously across chat and voice. Human agents focus only on escalated edge cases, while Stripe integration converts support interactions into direct revenue opportunities."
  ),

  "lead-acquisition-system": cs(
    "Sales and recruiting teams spent 80% of their prospecting time on manual sourcing — searching job boards, qualifying candidates, finding contact details, and entering data by hand. High effort, low throughput.",
    "I built a fully automated lead pipeline using n8n that scrapes Upwork, GitHub, and Indeed, runs LLM-based qualification against defined criteria, enriches each lead with Apollo contact data, and inserts ready records into the CRM.",
    [
      "Multi-source scraping across Upwork, GitHub, and Indeed",
      "LLM-based lead qualification against custom criteria",
      "Apollo API integration for contact enrichment",
      "Automated CRM insertion with deduplication",
      "Configurable qualification rules for different roles",
    ],
    "Manual screening time reduced by 80%. The team now wakes up to a warm, pre-qualified, enriched lead list every morning — eliminating manual sourcing entirely and redirecting hours toward relationship-building and closing."
  ),

  "tonic-sms-automation-system": cs(
    "Tonic needed to reach 10,000+ subscribers with targeted SMS campaigns but had no system for automating delivery at scale, managing campaign sequences, or tracking response behaviour without manual effort.",
    "I integrated Kit.com subscriber management with Twilio's SMS API through n8n — enabling automated campaign scheduling, subscriber segmentation, and delivery tracking across the full subscriber base.",
    [
      "Kit.com subscriber sync and segmentation",
      "Twilio SMS delivery engine at 10K+ subscriber scale",
      "n8n workflow orchestration for campaign sequencing",
      "Campaign scheduling with time-zone awareness",
      "Delivery and response tracking per campaign",
    ],
    "98% deliverability across 10,000+ subscribers. Campaigns launch and execute entirely on autopilot from a single trigger — Tonic's team went from manual sending to a fully managed, measurable SMS operation."
  ),

  "ai-book-writing-agent": cs(
    "An author with hours of recorded transcripts had no efficient way to convert raw spoken content into a structured, commercially publishable book — a process that traditionally requires weeks of editorial effort.",
    "I built an n8n-based AI agent that ingests uploaded transcripts, segments content by topic, generates structured chapters with consistent tone and style, and outputs a formatted manuscript ready for final review.",
    [
      "Transcript ingestion and preprocessing pipeline",
      "Topic segmentation and chapter structure mapping",
      "GPT-4-powered chapter content generation",
      "Tone and style consistency enforcement across chapters",
      "Formatted manuscript output ready for review",
    ],
    "A full book manuscript was generated from raw transcripts in hours, not weeks. The author reviewed and approved with minimal edits — compressing an editorial cycle that normally spans months into a single automated workflow."
  ),

  "seo-content-webflow-automation": cs(
    "Content teams spend days per article — researching topics, writing copy, generating visuals, and manually updating their website. This bottleneck caps publishing frequency and limits organic search growth.",
    "I built an end-to-end automation that takes a target vertical, researches the topic, writes SEO-optimized long-form content, generates matching images via AI, and publishes directly to a Webflow CMS template — zero manual steps.",
    [
      "Automated topic research and keyword targeting",
      "SEO-optimized long-form content generation",
      "AI image generation matched to each article",
      "Webflow CMS API publishing with template layout",
      "Fully hands-off from trigger to published post",
    ],
    "Content production cost reduced to near-zero per article. Publishing frequency scaled from a few articles per week to daily automated output — dramatically expanding SEO surface area without adding headcount or editorial overhead."
  ),

  "olalahomes-property-dashboard": cs(
    "OlalaHomes managed their rental portfolio across disconnected spreadsheets and tools — with no unified view of occupancy rates, rental revenue, tenant status, or maintenance requests across their properties.",
    "I built a custom property management dashboard with interactive Recharts visualizations, tracking occupancy, revenue, tenant records, and maintenance requests — backed by a PostgreSQL database and Next.js frontend.",
    [
      "Occupancy and revenue tracking across all properties",
      "Maintenance request logging and status management",
      "Tenant and lease record management",
      "Interactive Recharts data visualizations and trend views",
      "PostgreSQL backend with real-time data sync",
    ],
    "15+ hours per week saved on manual reporting. OlalaHomes now has a single source of truth for their entire portfolio — with the metrics and operational visibility needed to make faster, more informed property decisions."
  ),

  "ghanem-labs-web3-audit-saas": cs(
    "Crypto investors had no accessible tool to assess smart contract security, tokenomics health, or on-chain threats before committing capital — forcing reliance on expensive third-party auditors or uninformed guesswork.",
    "I built a SaaS platform that runs automated smart contract security scans, tokenomics analysis, and on-chain threat detection — returning clear risk scores and AI-generated reports any investor can act on immediately.",
    [
      "Automated smart contract vulnerability scanning",
      "Tokenomics health scoring and red flag detection",
      "On-chain threat signal monitoring",
      "OpenAI-powered risk report generation",
      "Investor-facing dashboard with actionable risk signals",
    ],
    "Security intelligence that previously took weeks of manual auditing is now generated in minutes. Investors access structured, actionable reports before deploying capital — reducing risk exposure and improving portfolio decision quality."
  ),

  "outreach-genie-linkedin-outbound-saas": cs(
    "Sales teams and recruiters conducting LinkedIn outreach managed prospect lists in spreadsheets, tracked follow-ups in notes, and ran campaigns across disconnected tools — with no pipeline visibility and no consistency.",
    "I built a LinkedIn outreach SaaS providing a centralized workspace for managing prospect lists, AI-assisted personalized messaging, team access controls, and full campaign pipeline tracking — with LinkedIn API integration.",
    [
      "Centralized prospect list management workspace",
      "AI-assisted personalized message generation",
      "Team access management with role-based controls",
      "LinkedIn API integration for real-time data",
      "Campaign pipeline tracking and analytics dashboard",
    ],
    "Outreach capacity increased 10x. Teams now manage full LinkedIn campaigns from a single platform — with AI messaging improving connection acceptance rates and pipeline tracking ensuring no follow-up falls through."
  ),

  "ai-book-recommendation-automation": cs(
    "aisr.qa needed a scalable way to deliver personalized book recommendations based on each user's job role and goals — without a manual curation process that couldn't scale to their growing user base.",
    "I built an n8n automation that queries the user database for professional context, conducts an AI-powered conversational interview to surface goals and challenges, and returns 8 curated book recommendations precisely matched to each user.",
    [
      "Automated user data query from the database",
      "AI conversational interview pipeline via n8n",
      "Context-aware book recommendation generation",
      "8 tailored recommendations per user per run",
      "Webhook-triggered delivery on user request",
    ],
    "Every user receives fully personalized recommendations at scale with zero manual curation. The AI interview step grounds recommendations in each user's actual situation — going far beyond job title to deliver genuinely relevant results."
  ),

  "techforce-github-developer-sourcing": cs(
    "TechForce's recruiting team spent hours per open role manually searching GitHub for developers by location — a high-volume, repetitive task consuming capacity that should be focused on relationship-building and conversion.",
    "I built an automated sourcing pipeline that reads open job locations from Supabase, scrapes GitHub for matching developers by city and role, qualifies profiles against defined criteria, and syncs enriched records directly into Gospott CRM.",
    [
      "Supabase integration to read open job location data",
      "GitHub developer scraping by city and skill match",
      "Automated profile qualification against hiring criteria",
      "Gospott CRM sync with deduplication",
      "Daily automated pipeline execution with no manual steps",
    ],
    "Manual developer sourcing was eliminated entirely. TechForce's team now starts every day with a pre-filled CRM of qualified, location-matched developer profiles — reclaiming hours previously lost to repetitive search work."
  ),

  "techforce-indeed-jobs-enrichment-pipeline": cs(
    "TechForce's outreach lists were cold — scraped from job boards without verified contact data. Low delivery rates, zero personalization, and poor conversion were the result of reaching out with incomplete information.",
    "I built an n8n automation that scrapes job listings from Indeed, syncs them into Clarify CRM, and enriches each record with verified decision-maker contact data and emails via Apollo — creating a warm pipeline automatically.",
    [
      "Automated Indeed job listing scraper",
      "Clarify CRM sync with deduplication logic",
      "Apollo API integration for contact enrichment",
      "Verified email and decision-maker data per record",
      "Daily automated pipeline with no manual intervention",
    ],
    "TechForce's outreach pipeline now runs on autopilot. Every record arrives in Clarify CRM fully enriched with verified contact data — eliminating cold outreach and enabling high-deliverability campaigns from the first touchpoint."
  ),

  "upwork-jobs-scraper-contact-enrichment": cs(
    "Freelancers and agencies monitoring Upwork for new clients wasted hours manually reviewing job posts, researching client contact info, and building outreach lists — with no automation and no scalable system.",
    "I built a Chrome extension that captures Upwork job listings in one click and forwards them to an n8n pipeline that automatically enriches each lead with verified emails via FindMyEmail and Apollo — outputting a ready-to-contact outreach list.",
    [
      "Chrome extension for one-click Upwork lead capture",
      "n8n pipeline for automated downstream enrichment",
      "FindMyEmail API integration for email discovery",
      "Apollo API for contact verification and enrichment",
      "CRM-ready outreach list output with verified contacts",
    ],
    "Lead list building reduced from hours to seconds. Every captured Upwork listing is automatically enriched with verified contact data — enabling immediate, targeted outreach without any manual lookup or data entry."
  ),
};
