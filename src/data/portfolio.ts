import type { PortfolioData } from "@/types";

export const data: PortfolioData = {
  name: "Aymen Khaled",
  photo: "/aymen.jpg",
  title: [
    "Full Stack Web and Mobile Developer",
    "SaaS Builder",
    "AI Integrations Specialist",
    "React, Node.js and Python",
  ],
  bio: "Full Stack Web and Mobile Developer specialized in SaaS and AI integrations. I build production products with React, Node.js, Python, real-time systems, and practical automation that helps teams move faster.",
  availability: true,

  stats: [
    { value: "7+", label: "SaaS and AI Products" },
    { value: "15+", label: "Projects Delivered" },
    { value: "4+", label: "Years Building" },
    { value: "100%", label: "Client Focus" },
  ],

  platforms: [
    {
      name: "LinkedIn",
      badge: "Open to Work",
      url: "https://www.linkedin.com/in/aymen-khaled-652724236/?skipRedirect=true",
    },
  ],

  clients: [
    { name: "Everything to Gain", logo: "" },
    { name: "Aziin Engineering", logo: "/azin.png" },
    { name: "SAC Marquage", logo: "" },
    { name: "Proged", logo: "" },
  ],

  services: [
    {
      title: "SaaS Platform Development",
      description:
        "End-to-end SaaS products with multi-tenant architecture, role-based access, billing, and production deployment.",
      icon: "layers",
      size: "featured",
    },
    {
      title: "AI Integration",
      description:
        "OpenAI and Groq integration into real products: assistants, automation flows, summaries, and smart workflows.",
      icon: "zap",
      size: "narrow",
    },
    {
      title: "Full Stack Web Development",
      description:
        "High-quality web apps with React and Next.js frontend, and Node.js, FastAPI, or Django backend.",
      icon: "plug",
      size: "narrow",
    },
    {
      title: "Real-time Applications",
      description:
        "WebSocket-powered systems for live chat, notifications, and collaboration features.",
      icon: "gauge",
      size: "half",
    },
    {
      title: "Mobile Development",
      description:
        "React Native apps with API integration, IoT workflows, and reliable offline-friendly UX.",
      icon: "pen-tool",
      size: "half",
    },
    {
      title: "Database Architecture",
      description:
        "Scalable data models and optimization using PostgreSQL, MongoDB, and analytics-ready schemas.",
      icon: "database",
      size: "third",
    },
    {
      title: "API Development",
      description:
        "Clean REST API design with authentication, documentation, and integration-ready contracts.",
      icon: "cloud",
      size: "third",
    },
    {
      title: "Automation Systems",
      description:
        "Scraping, enrichment, and outreach automation pipelines to reduce manual work for teams.",
      icon: "search",
      size: "third",
    },
  ],

  process: [
    {
      step: 1,
      title: "Discovery Call",
      description:
        "We define goals, constraints, and the metrics that will prove project success.",
      badge: "Day 1",
    },
    {
      step: 2,
      title: "Scope and Plan",
      description:
        "You get a clear implementation scope, timeline, and delivery milestones.",
      badge: "Day 2-3",
    },
    {
      step: 3,
      title: "Build in Iterations",
      description:
        "I ship in checkpoints with regular updates so you can review progress continuously.",
      badge: "Week 1-N",
    },
    {
      step: 4,
      title: "Launch and Handover",
      description:
        "Final QA, deployment support, and documentation for smooth product ownership.",
      badge: "Final Week",
    },
  ],

  stack: [
    { name: "React", category: "frontend" },
    { name: "Next.js", category: "frontend" },
    { name: "React Native", category: "frontend" },
    { name: "Redux", category: "frontend" },
    { name: "Tailwind CSS", category: "frontend" },
    { name: "JavaScript", category: "language" },
    { name: "TypeScript", category: "language" },
    { name: "Python", category: "language" },
    { name: "Node.js", category: "backend" },
    { name: "FastAPI", category: "backend" },
    { name: "Django", category: "backend" },
    { name: "Express.js", category: "backend" },
    { name: "OpenAI", category: "ai" },
    { name: "Groq", category: "ai" },
    { name: "LangChain", category: "ai" },
    { name: "PostgreSQL", category: "database" },
    { name: "MongoDB", category: "database" },
    { name: "Docker", category: "devops" },
    { name: "Git", category: "devops" },
    { name: "AWS", category: "devops" },
  ],

  projects: [
    {
      title: "Strategy Navigator - AI SaaS Platform",
      description:
        "Problem: strategy teams were using disconnected tools and manual workflows. Solution: built a multi-tenant platform with RBAC, AI assistants, analytics, and billing integrations. Outcome: improved API throughput and shipped a production platform with active users.",
      role: "Full Stack Web Developer",
      impact: "Integrated 65+ AI tools and delivered live billing plus collaboration integrations.",
      visibility: "Public",
      thumbnail: "/strategy-navigator.png",
      tags: ["React", "Node.js", "OpenAI", "Stripe"],
      category: "SaaS",
      liveUrl: "https://strategynavigator.ai/",
      githubUrl: "",
    },
    {
      title: "JourneyAI - AI Sales Assistant Platform",
      description:
        "Problem: sales teams spent too much time preparing and following up after meetings. Solution: built AI assistants for meeting prep, summaries, and follow-up generation with real-time capabilities. Outcome: deployed a live assistant suite used in production workflows.",
      role: "Full Stack Web Developer",
      impact: "Built 10+ assistants with chat, speech, and billing features.",
      visibility: "Public",
      thumbnail: "/journeyai.png",
      tags: ["React", "FastAPI", "OpenAI", "WebSocket"],
      category: "AI Tool",
      liveUrl: "https://meetjourney.ai/",
      githubUrl: "",
    },
    {
      title: "SaleSide AI - Sales Meeting Assistant",
      description:
        "Problem: teams were losing key meeting details and follow-up actions. Solution: automated transcription, objection tracking, AI summaries, and action extraction. Outcome: improved follow-up consistency and reduced manual note-taking.",
      role: "Full Stack Web Developer",
      impact: "Delivered end-to-end automation for capture, summary, and next actions.",
      visibility: "Public",
      thumbnail: "/saleside.png",
      tags: ["Python", "WebSocket", "OpenAI"],
      category: "AI Tool",
      liveUrl: "https://saleside.ai/",
      githubUrl: "",
    },
    {
      title: "LMS with AI Integration and WebSocket",
      description:
        "Problem: e-learning engagement dropped with static content workflows. Solution: built a learning platform with AI chatbot support and real-time communication. Outcome: delivered a scalable learning product with live collaboration features.",
      role: "Full Stack Developer (Intern)",
      impact: "Implemented real-time learning experience with chatbot support.",
      visibility: "Public",
      thumbnail: "/lms.PNG",
      tags: ["React", "Node.js", "MongoDB", "WebSocket"],
      category: "Education",
      liveUrl: "https://e-learning-five-tau.vercel.app",
      githubUrl: "",
    },
    {
      title: "E-commerce Dashboard",
      description:
        "Problem: product and order visibility was fragmented across tools. Solution: developed a central dashboard for analytics, inventory, and order tracking. Outcome: faster operational decisions through a unified interface.",
      role: "Full Stack Developer",
      impact: "Consolidated critical commerce workflows into one dashboard.",
      visibility: "Public",
      thumbnail: "/dash.PNG",
      tags: ["React", "Node.js", "PostgreSQL"],
      category: "E-Commerce",
      liveUrl: "https://dashboard-rho-gray-61.vercel.app/dashboard",
      githubUrl: "https://github.com/aymenkhaled/dashboard",
    },
    {
      title: "Job Scraper and Outreach Automation",
      description:
        "Problem: outreach teams spent hours manually finding leads and contact data. Solution: built automated scraping and enrichment pipelines across multiple job and company sources. Outcome: scaled prospect discovery and enabled personalized AI-driven outreach at volume.",
      role: "Automation and Full Stack Developer",
      impact: "Scraped jobs from 40+ platforms and automated contact discovery workflows.",
      visibility: "Private Client",
      thumbnail: "/web-scraper.png",
      tags: ["Python", "Node.js", "OpenAI", "MongoDB"],
      category: "Automation",
      liveUrl: "",
      githubUrl: "",
    },
    {
      title: "Outreach Personalization Engine",
      description:
        "Problem: cold emails were generic and underperforming. Solution: generated AI-customized outreach from company profile signals and lead context. Outcome: improved personalization quality while reducing manual writing time.",
      role: "Automation and Full Stack Developer",
      impact: "Connected lead enrichment with AI content generation in one workflow.",
      visibility: "Private Client",
      thumbnail: "/outreach.png",
      tags: ["Python", "OpenAI", "Node.js"],
      category: "Automation",
      liveUrl: "",
      githubUrl: "",
    },
    {
      title: "SEO Optimization SaaS - Issue Detector",
      description:
        "Problem: teams could not quickly identify high-impact SEO issues. Solution: built a platform to audit pages, detect issues, and prioritize fixes. Outcome: gave teams a structured action plan to improve search performance.",
      role: "Full Stack Developer",
      impact: "Automated site health checks with actionable optimization guidance.",
      visibility: "Private Client",
      thumbnail: "/website-img-2.webp",
      tags: ["React", "Node.js", "PostgreSQL"],
      category: "SaaS",
      liveUrl: "",
      githubUrl: "",
    },
  ],

  experience: [
    {
      company: "Everything to Gain",
      logo: "",
      role: "Full Stack Web Developer",
      startDate: "Feb 2025",
      endDate: "Present",
      location: "Remote",
      description:
        "Leading development of production AI SaaS products with multi-tenant architecture, automation, and real-time features.",
      achievements: [
        "Led Strategy Navigator, JourneyAI, and SaleSide AI from implementation to live product delivery.",
        "Integrated 65+ AI tools and shipped Stripe and PayPal billing workflows.",
        "Delivered Slack, Asana, and Basecamp integrations with real-time collaboration features.",
        "Improved platform architecture and automated key product workflows.",
      ],
    },
  ],

  testimonials: [
    {
      name: "Michael T.",
      photo: "",
      project: "Strategy Navigator",
      review:
        "Aymen built a reliable SaaS foundation for our product with clear architecture, strong execution speed, and production-ready quality.",
      rating: 5,
      platform: "Direct",
    },
    {
      name: "Sarah L.",
      photo: "",
      project: "JourneyAI",
      review:
        "The assistant workflows reduced repetitive work for our team and gave us a much cleaner sales process.",
      rating: 5,
      platform: "Direct",
    },
    {
      name: "David K.",
      photo: "",
      project: "SaleSide AI",
      review:
        "Meeting capture and follow-up automation was delivered exactly as needed and integrated smoothly in our workflow.",
      rating: 5,
      platform: "Direct",
    },
  ],

  guarantee: [
    {
      title: "Clear Scope Before Build",
      description:
        "You get clear requirements, milestones, and expected outcomes before development starts.",
      icon: "shield-check",
    },
    {
      title: "Iterative Delivery",
      description:
        "You review progress throughout the build so feedback is integrated early.",
      icon: "refresh-cw",
    },
    {
      title: "Launch Support Included",
      description:
        "I support deployment and handover to ensure a stable production launch.",
      icon: "clock",
    },
  ],

  social: {
    linkedin: "https://www.linkedin.com/in/aymen-khaled-652724236/?skipRedirect=true",
    whatsapp: "https://wa.me/21626286045",
    calendly: "https://calendly.com/aymenkhaled/30min",
    github: "https://github.com/aymenkhaled",
    email: "mailto:khaledaymen850@gmail.com",
  },
};
