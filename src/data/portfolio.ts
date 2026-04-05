import type { PortfolioData } from "@/types";

export const data: PortfolioData = {
  name: "Ahmed Ben Yahia",
  photo: "/ahmed.jpg",
  title: [
    "AI & Automation Engineer",
    "RAG Systems Specialist",
    "Full Stack Developer",
    "LLM Pipeline Builder",
  ],
  bio: "Full stack & automation engineer with 2+ years building production AI systems, RAG pipelines, and n8n workflows for SaaS, e-commerce, and B2B clients — 15+ projects delivered across international clients.",
  availability: true,

  stats: [
    { value: "15+",  label: "Projects Delivered" },
    { value: "10+",  label: "Happy Clients" },
    { value: "2+",   label: "Years Experience" },
    { value: "100%", label: "On-Time Delivery" },
  ],

  platforms: [
    { name: "Upwork",   badge: "Available",     url: "https://www.upwork.com/freelancers/ahmedbenyahia" },
    { name: "LinkedIn", badge: "Open to Work",  url: "https://linkedin.com/in/ahmedbenyahia" },
  ],

  clients: [
    { name: "MiniSport",  logo: "/images/minisport.png" },
    { name: "iPrint",     logo: "/images/iprint.png" },
    { name: "Bookielink", logo: "/images/bookielink.png" },
    { name: "OlalaHomes", logo: "/images/olala.png" },
    { name: "ServiceM8",  logo: "/images/servicem8.png" },
    { name: "Tonic",      logo: "/images/tonic.png" },
    { name: "TechForce",  logo: "/images/techforce.png" },
  ],

  services: [
    {
      title: "AI & RAG Systems",
      description:
        "Production-grade Retrieval-Augmented Generation pipelines with automated document ingestion, vector search, and conversational AI — for customer support and internal knowledge bases.",
      icon: "layers",
      size: "featured",
    },
    {
      title: "Workflow Automation",
      description:
        "End-to-end automation with n8n, Zapier, and custom APIs — eliminating manual work and saving 15+ hours/week.",
      icon: "zap",
      size: "narrow",
    },
    {
      title: "Full Stack Development",
      description:
        "Scalable web apps with Next.js, Node.js, and PostgreSQL — from landing pages to full SaaS platforms.",
      icon: "plug",
      size: "narrow",
    },
    {
      title: "AI Voice Agents",
      description:
        "Human-like voice AI systems using ElevenLabs and Twilio for real-time phone and SMS customer interactions.",
      icon: "gauge",
      size: "half",
    },
    {
      title: "Lead Generation & Scraping",
      description:
        "Automated pipelines that scrape, enrich, and qualify leads from Upwork, LinkedIn, GitHub, and more — synced directly to your CRM.",
      icon: "pen-tool",
      size: "half",
    },
    {
      title: "Database & Backend",
      description:
        "Robust backends with PostgreSQL, MongoDB, Supabase, and vector databases optimized for AI workloads.",
      icon: "database",
      size: "third",
    },
    {
      title: "DevOps & Cloud",
      description:
        "CI/CD pipelines, Docker containerization, and cloud deployments via GitHub Actions and Vercel.",
      icon: "cloud",
      size: "third",
    },
    {
      title: "API Integration",
      description:
        "Seamless third-party integrations — Stripe, HubSpot, Chatwoot, Apollo, ElevenLabs, and 50+ more.",
      icon: "search",
      size: "third",
    },
  ],

  process: [
    {
      step: 1,
      title: "Discovery Call",
      description:
        "We map out your workflow, identify automation opportunities, and define clear success metrics together.",
      badge: "Day 1",
    },
    {
      step: 2,
      title: "Proposal & Scope",
      description:
        "You receive a detailed technical proposal with timeline, deliverables, and fixed pricing — no surprises.",
      badge: "Day 2–3",
    },
    {
      step: 3,
      title: "Design & Build",
      description:
        "I build iteratively with weekly updates, shipping working modules so you see progress continuously.",
      badge: "Week 1–N",
    },
    {
      step: 4,
      title: "Review & Launch",
      description:
        "Final QA, documentation handoff, and deployment — with 30 days of post-launch support included.",
      badge: "Final Week",
    },
  ],

  stack: [
    { name: "Next.js",       category: "frontend"   },
    { name: "React",         category: "frontend"   },
    { name: "Tailwind CSS",  category: "frontend"   },
    { name: "TypeScript",    category: "language"   },
    { name: "Python",        category: "language"   },
    { name: "JavaScript",    category: "language"   },
    { name: "Node.js",       category: "backend"    },
    { name: "Express.js",    category: "backend"    },
    { name: "Nest.js",       category: "backend"    },
    { name: "Spring Boot",   category: "backend"    },
    { name: "n8n",           category: "automation" },
    { name: "Zapier",        category: "automation" },
    { name: "LangChain",     category: "ai"         },
    { name: "OpenAI",        category: "ai"         },
    { name: "ElevenLabs",    category: "ai"         },
    { name: "PostgreSQL",    category: "database"   },
    { name: "MongoDB",       category: "database"   },
    { name: "Supabase",      category: "database"   },
    { name: "Docker",        category: "devops"     },
    { name: "Vercel",        category: "devops"     },
    { name: "GitHub Actions",category: "devops"     },
  ],

  projects: [
    {
      title: "AI Career Path Mapper",
      description:
        "AI-powered platform that generates personalized career roadmaps with skill gap analysis and learning paths based on current role and target career goal.",
      thumbnail: "/carrer.png",
      tags: ["Next.js", "Express.js", "Gemini API", "TypeScript"],
      category: "AI Tool",
      liveUrl: "https://ai-path-carrer-generator.vercel.app/",
      githubUrl: "https://github.com/levicap/ai-path-carrer-generator",
    },
    {
      title: "AI Motivation Letter Generator",
      description:
        "Generates 10 ATS-optimized motivation letter templates customized to role, company, and position — exportable to PDF/Word.",
      thumbnail: "/motivation.png",
      tags: ["Next.js", "Express.js", "Gemini API", "TypeScript"],
      category: "AI Tool",
      liveUrl: "https://motivation-letter-ai.vercel.app/",
      githubUrl: "https://github.com/levicap/motivationletteraiapi",
    },
    {
      title: "Postily – AI Social Media Platform",
      description:
        "SaaS platform to create, schedule, and manage social media posts with AI-generated captions, images, and a full analytics dashboard.",
      thumbnail: "/postily.png",
      tags: ["Next.js", "MongoDB", "OpenAI API"],
      category: "SaaS",
      liveUrl: "",
      githubUrl: "https://github.com/ahmedbenyahia/postily",
    },
    {
      title: "APIspark – Drag & Drop API Builder",
      description:
        "Visual SaaS platform to build production APIs using drag-and-drop components with AI-assisted code generation and automatic documentation.",
      thumbnail: "/apisparkp.png",
      tags: ["Next.js", "Node.js", "Prisma", "AI"],
      category: "SaaS",
      liveUrl: "https://apisparkdev.vercel.app/",
      githubUrl: "https://github.com/levicap/apispark-saas",
    },
    {
      title: "Scenewear E-Commerce",
      description:
        "Full-featured online store for a local clothing brand with product catalog, shopping cart, and order management built on Next.js and Spring Boot.",
      thumbnail: "/scenewear.png",
      tags: ["Next.js", "Spring Boot", "PostgreSQL"],
      category: "E-Commerce",
      liveUrl: "https://scenewear-ecommerce.vercel.app/",
      githubUrl: "https://github.com/levicap/scenewear-ecommerce",
    },
    {
      title: "VS Code Portfolio",
      description:
        "Creative developer portfolio styled as a VS Code editor with interactive file explorer, syntax highlighting, and terminal simulation.",
      thumbnail: "/vscodepor.png",
      tags: ["Next.js", "TypeScript", "CSS Animations"],
      category: "Portfolio",
      liveUrl: "https://portfolio-eight-gold-99.vercel.app/",
      githubUrl: "https://github.com/levicap/vs-code-protfolio-",
    },
    {
      title: "MiniSport Internal RAG Assistant",
      description:
        "Internal AI assistant for MiniSport team to query company documentation using natural language, reducing support queries by 60%.",
      thumbnail: "/minisport-rag.png",
      tags: ["n8n", "OpenAI API", "Vector Database", "Webhooks"],
      category: "AI Automation",
      liveUrl: "",
      githubUrl: "",
    },
    {
      title: "BookieLink Customer Support Bot",
      description:
        "RAG-powered customer support chatbot trained on 5K+ Q&A pairs, achieving 85% accuracy and reducing support tickets by 70%.",
      thumbnail: "/bookilink-bot.png",
      tags: ["n8n", "OpenAI API", "Vector Database", "Webhooks"],
      category: "AI Automation",
      liveUrl: "",
      githubUrl: "",
    },
    {
      title: "iPrint AI Voice & Chat Support Agent",
      description:
        "Human-like AI support system combining chat and voice via ElevenLabs and Twilio, handling 500+ daily queries with integrated Stripe payments.",
      thumbnail: "/iprint-chatbot.png",
      tags: ["n8n", "ElevenLabs", "Twilio", "OpenAI API"],
      category: "AI Automation",
      liveUrl: "",
      githubUrl: "",
    },
    {
      title: "Lead Acquisition System",
      description:
        "Automated pipeline that scrapes, enriches, qualifies, and inserts leads into CRM-ready format from Upwork, GitHub, and Indeed, reducing screening time by 80%.",
      thumbnail: "/leads.png",
      tags: ["n8n", "Web Scraping", "Apollo API", "LLM"],
      category: "AI Automation",
      liveUrl: "",
      githubUrl: "",
    },
    {
      title: "Tonic SMS Automation System",
      description:
        "SMS campaign automation platform using Kit.com and Twilio to deliver targeted messages to 10K+ subscribers with 98% deliverability.",
      thumbnail: "/tonic.png",
      tags: ["n8n", "Twilio", "Kit.com", "Webhooks"],
      category: "Automation",
      liveUrl: "",
      githubUrl: "",
    },
    {
      title: "AI Book Writing Agent",
      description:
        "AI agent that generates structured book content from uploaded transcripts, transforming raw material into chapters with consistent tone and style.",
      thumbnail: "/book.png",
      tags: ["n8n", "OpenAI API", "Prompt Orchestration"],
      category: "AI Automation",
      liveUrl: "",
      githubUrl: "",
    },
    {
      title: "SEO Content & Webflow Automation",
      description:
        "End-to-end automation that researches a target vertical, writes SEO-optimized content, generates matching images, and auto-updates a Webflow site template — zero manual effort.",
      thumbnail: "/seo.png",
      tags: ["n8n", "OpenAI API", "Webflow API", "Image Generation"],
      category: "AI Automation",
      liveUrl: "",
      githubUrl: "",
    },
    {
      title: "OlalaHomes Property Dashboard",
      description:
        "Full-featured property management dashboard for OlalaHomes — tracking rentals, occupancy stats, revenue, and maintenance requests across their entire portfolio.",
      thumbnail: "/olalahomes.png",
      tags: ["Next.js", "PostgreSQL", "Recharts", "TypeScript"],
      category: "SaaS",
      liveUrl: "",
      githubUrl: "",
    },
    {
      title: "Ghanem Labs — Web3 Audit SaaS",
      description:
        "SaaS platform for smart contract audits, tokenomics analysis, and on-chain threat detection — giving investors actionable security intelligence before committing capital.",
      thumbnail: "/ghanemlabs.png",
      tags: ["Next.js", "Node.js", "Web3", "OpenAI API", "TypeScript"],
      category: "SaaS",
      liveUrl: "",
      githubUrl: "",
    },
    {
      title: "Outreach Genie — LinkedIn Outbound SaaS",
      description:
        "LinkedIn outreach workspace for organizing prospect lists, managing team access, and running outbound campaigns with full pipeline clarity and AI-assisted messaging.",
      thumbnail: "/outreach.png",
      tags: ["Next.js", "PostgreSQL", "LinkedIn API", "OpenAI API"],
      category: "SaaS",
      liveUrl: "",
      githubUrl: "",
    },
    {
      title: "AI Book Recommendation Automation",
      description:
        "Automation built for aisr.qa that queries a database for user job data, runs an AI interview, and returns 8 personalised book recommendations tailored to the user's role and answered questions.",
      thumbnail: "/bookrecomendation.png",
      tags: ["n8n", "OpenAI API", "Database Query", "Webhooks"],
      category: "AI Automation",
      liveUrl: "",
      githubUrl: "",
    },
    {
      title: "TechForce GitHub Developer Sourcing",
      description:
        "Automated recruiting pipeline for TechForce: pulls open job locations from Supabase, scrapes matching GitHub developers by city, and syncs qualified profiles directly into Gospott CRM — eliminating manual sourcing entirely.",
      thumbnail: "/leads.png",
      tags: ["n8n", "GitHub API", "Supabase", "Gospott CRM", "Web Scraping"],
      category: "AI Automation",
      liveUrl: "",
      githubUrl: "",
    },
    {
      title: "TechForce Indeed Jobs Enrichment Pipeline",
      description:
        "n8n automation that scrapes job listings from Indeed, syncs them to Clarify CRM, and enriches each record by pulling verified contact data from Apollo — giving TechForce a warm, data-rich outreach pipeline on autopilot.",
      thumbnail: "/leads.png",
      tags: ["n8n", "Indeed Scraping", "Apollo API", "Clarify CRM", "Web Scraping"],
      category: "AI Automation",
      liveUrl: "",
      githubUrl: "",
    },
    {
      title: "Upwork Jobs Scraper & Contact Enrichment",
      description:
        "Chrome extension that captures Upwork job listings and forwards them to an n8n pipeline — automatically enriching each lead with verified emails via FindThatLead and Apollo to build a ready-to-contact outreach list.",
      thumbnail: "/upwork.png",
      tags: ["Chrome Extension", "n8n", "FindMyEmail", "Apollo API", "Web Scraping"],
      category: "AI Automation",
      liveUrl: "",
      githubUrl: "",
    },
  ],

  experience: [
    {
      company: "Lean Orchester",
      logo: "/lean.png",
      role: "AI Automation Engineer",
      startDate: "Nov 2025",
      endDate: "Present",
      location: "Remote",
      description:
        "Building production AI automation systems and RAG pipelines for international clients across e-commerce, SaaS, and B2B platforms.",
      achievements: [
        "Built RAG pipeline for Minisport.hk with automated document ingestion and conversational retrieval, reducing support queries by 60%.",
        "Engineered enterprise chatbot for iPrint handling 500+ daily queries with Stripe integration and automated scheduling, improving response time by 45%.",
        "Converted chatbot into Voice AI Agent using ElevenLabs, enabling natural language voice interactions for expanded accessibility.",
        "Developed lead enrichment automation using Apollo API, LLMs, and web scraping, reducing candidate screening time by 80%.",
        "Built ConvertKit-Twilio SMS campaign system delivering messages to 10K+ subscribers with 98% deliverability.",
        "Automated ServiceM8 reporting pipeline extracting jobs, technician KPIs, and revenue metrics, saving 15 hours/week of manual work.",
      ],
    },
    {
      company: "Aziin Engineering Solutions",
      logo: "/aziin.jpg",
      role: "Full Stack Developer Intern",
      startDate: "Feb 2024",
      endDate: "May 2024",
      location: "Hybrid — Sfax, Tunisia",
      description:
        "Architected and developed an e-learning SaaS platform from scratch for 1,000+ concurrent users.",
      achievements: [
        "Architected e-learning SaaS platform serving 1,000+ users with live video (Agora), real-time chat, and AI adaptive learning, boosting engagement by 35%.",
        "Implemented JWT/OAuth2 authentication with RBAC ensuring SOC-2 compliance and integrated Stripe processing $50K+ monthly transactions.",
        "Developed AI exam generator using GPT-4 with auto-grading, reducing instructor workload by 40% for 500+ students.",
        "Optimized performance with Redis caching and code splitting, achieving 40% faster loads and a 95+ Lighthouse score.",
      ],
    },
    {
      company: "Grow Up Agency",
      logo: "/growup.jpg",
      role: "Full Stack Developer Intern",
      startDate: "Jul 2024",
      endDate: "Aug 2024",
      location: "Remote",
      description:
        "Developed a secure healthcare management system with automated notification workflows.",
      achievements: [
        "Developed CRUD functionalities and secure authentication for a healthcare management system, improving operational efficiency by 30%.",
        "Implemented automated email/SMS notifications using Node.js, SMTP, and Twilio with real-time dashboards built in Recharts.",
      ],
    },
    {
      company: "Novel-Ti",
      logo: "/novel.png",
      role: "Frontend Developer Intern",
      startDate: "Jul 2023",
      endDate: "Aug 2023",
      location: "Sfax, Tunisia",
      description:
        "Designed and optimized the responsive UI for an NFC-based product traceability system.",
      achievements: [
        "Designed responsive UI for NFC-based traceability system, improving performance and reducing page load time by 20%.",
      ],
    },
  ],

  testimonials: [
    {
      name: "James O.",
      photo: "",
      project: "BookieLink Support Bot",
      review:
        "Ahmed built us a RAG-powered support chatbot that handles the majority of our customer queries without any human involvement. Support tickets dropped by 70% in the first month alone. Exceptional work.",
      rating: 5,
      platform: "Direct",
    },
    {
      name: "Kevin T.",
      photo: "",
      project: "MiniSport Internal Assistant",
      review:
        "We needed an internal tool our team could query in plain English. Ahmed delivered a production-ready RAG system in under two weeks — clean, well-documented, and it just works. Highly recommend.",
      rating: 5,
      platform: "Direct",
    },
    {
      name: "Sarah M.",
      photo: "",
      project: "iPrint AI Voice & Chat Agent",
      review:
        "Our support volume was overwhelming. Ahmed integrated an AI voice and chat agent that now handles 500+ queries daily with Stripe payments baked in. Response time improved by 45%. Absolutely stellar.",
      rating: 5,
      platform: "Direct",
    },
    {
      name: "Lina B.",
      photo: "",
      project: "OlalaHomes Property Dashboard",
      review:
        "Ahmed took our fragmented spreadsheets and built a beautiful, fully-functional property management dashboard from scratch. The occupancy and revenue tracking now saves us hours every week.",
      rating: 5,
      platform: "Direct",
    },
    {
      name: "Marcus R.",
      photo: "",
      project: "Lead Acquisition Automation",
      review:
        "The lead pipeline Ahmed built pulls qualified prospects from multiple sources, enriches them, and drops them straight into our CRM — fully automated. We cut manual screening time by 80%. Worth every penny.",
      rating: 5,
      platform: "Direct",
    },
    {
      name: "David K.",
      photo: "",
      project: "TechForce Developer Sourcing Pipeline",
      review:
        "Ahmed automated our entire developer sourcing workflow. We went from hours of manual GitHub searching to having warm, enriched profiles delivered automatically into Gospott. Game-changer for our recruiting ops.",
      rating: 5,
      platform: "Direct",
    },
    {
      name: "Client Testimonial",
      photo: "",
      project: "AI Automation System",
      review:
        "Ahmed delivered an exceptional RAG system that completely transformed our customer support pipeline. Clear communication, on-time delivery, and the results speak for themselves.",
      rating: 5,
      platform: "Direct",
    },
  ],

  guarantee: [
    {
      title: "100% Satisfaction or Refund",
      description:
        "If you're not happy with the final delivery, I'll refund you in full — no questions asked.",
      icon: "shield-check",
    },
    {
      title: "Unlimited Revisions",
      description:
        "I iterate until the solution meets your exact requirements and performance targets.",
      icon: "refresh-cw",
    },
    {
      title: "On-Time Delivery Promise",
      description:
        "Every project ships on schedule. If I miss a deadline, I work for free until it's done.",
      icon: "clock",
    },
  ],

  social: {
    upwork:   "https://www.upwork.com/freelancers/ahmedbenyahia",
    linkedin: "https://linkedin.com/in/ahmedbenyahia",
    whatsapp: "https://wa.me/21650193344",
    calendly: "https://calendly.com/ahmedbenyahia654/30min",
    github:   "https://github.com/levicap",
    email:    "mailto:ahmedbenyahia654@gmail.com",
  },
};
