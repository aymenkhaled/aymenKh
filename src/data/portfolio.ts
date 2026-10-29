import type { PortfolioData } from "@/types";

export const data: PortfolioData = {
  name: "Aymen Khaled",
  photo: "/pic.png",
  title: [
    "Full-Stack Developer",
    "AI SaaS Product Developer",
    "Web, Mobile & Desktop Developer",
    "Automation & API Developer",
  ],
  bio: "Full-stack developer building SaaS, web, mobile, and Windows desktop products with React, TypeScript, Node.js, FastAPI, Tauri, Rust, and PostgreSQL.",
  availability: true,

  stats: [
    { value: "2", label: "Kessetna Windows products" },
    { value: "1", label: "Android companion" },
    { value: "3", label: "Featured case studies" },
    { value: "4", label: "Professional roles" },
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
        "SaaS products with multi-tenant architecture, role-based access, billing, AI workflows, and deployment.",
      icon: "layers",
      size: "featured",
    },
    {
      title: "AI Integration",
      description:
        "AI assistants, summaries, automation flows, and product integrations using OpenAI and Groq.",
      icon: "zap",
      size: "narrow",
    },
    {
      title: "Full Stack Web Development",
      description:
        "Responsive web applications with React or Next.js and Node.js, FastAPI, or Django backends.",
      icon: "plug",
      size: "narrow",
    },
    {
      title: "Real-time Applications",
      description:
        "WebSocket systems for live chat, notifications, and collaboration.",
      icon: "gauge",
      size: "half",
    },
    {
      title: "Mobile Development",
      description:
        "React Native apps with API integration, IoT workflows, and offline-friendly UX.",
      icon: "pen-tool",
      size: "half",
    },
    {
      title: "Database Architecture",
      description:
        "Data models and optimization using PostgreSQL, MongoDB, SQLite, and SQL Server.",
      icon: "database",
      size: "third",
    },
    {
      title: "API Development",
      description:
        "REST APIs with authentication, validation, documentation, and clear contracts.",
      icon: "cloud",
      size: "third",
    },
    {
      title: "Automation Systems",
      description:
        "Scraping, enrichment, and outreach pipelines that reduce repetitive work.",
      icon: "search",
      size: "third",
    },
    {
      title: "Windows Desktop Apps",
      description:
        "Offline-first Windows applications with Tauri, Rust, SQLite, printing, and local installers.",
      icon: "monitor",
      size: "third",
    },
  ],

  process: [
    {
      step: 1,
      title: "Understand the Brief",
      description:
        "We clarify requirements, the existing codebase and acceptance criteria in writing, with a call when useful.",
      badge: "Discovery",
    },
    {
      step: 2,
      title: "Scope and Plan",
      description:
        "You get a clear implementation scope, timeline, and delivery milestones.",
      badge: "Planning",
    },
    {
      step: 3,
      title: "Build in Iterations",
      description:
        "I ship in checkpoints with regular updates so you can review progress continuously.",
      badge: "Development",
    },
    {
      step: 4,
      title: "Launch and Handover",
      description:
        "Final QA, deployment support, and documentation for smooth product ownership.",
      badge: "Delivery",
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
    { name: "Rust", category: "language" },
    { name: "Node.js", category: "backend" },
    { name: "FastAPI", category: "backend" },
    { name: "Django", category: "backend" },
    { name: "Laravel", category: "backend" },
    { name: "Express.js", category: "backend" },
    { name: "OpenAI", category: "ai" },
    { name: "Groq", category: "ai" },
    { name: "LangChain", category: "ai" },
    { name: "WebSocket", category: "backend" },
    { name: "HubSpot", category: "automation" },
    { name: "Stripe", category: "payments" },
    { name: "PostgreSQL", category: "database" },
    { name: "MongoDB", category: "database" },
    { name: "SQL Server", category: "database" },
    { name: "Firebase", category: "database" },
    { name: "SQLite", category: "database" },
    { name: "Docker", category: "devops" },
    { name: "Jenkins", category: "devops" },
    { name: "Git", category: "devops" },
    { name: "AWS", category: "devops" },
    { name: "Expo", category: "mobile" },
    { name: "IoT", category: "mobile" },
    { name: "Tauri", category: "desktop" },
  ],

  projects: [
    {
        "title": "Kessetna Retail & Kessetna BTP",
        "description": "Built two offline-first Windows products end to end: retail sales and stock management, and construction equipment rental with returns, payments and deposits. Added a companion Android app for remote monitoring.",
        "role": "Product creator & full-stack developer",
        "impact": "My contribution: interface, business logic, local database, desktop/mobile applications, installers and product websites.",
        "visibility": "Public",
        "thumbnail": "/kessetna-retail.png",
        "tags": [
            "React",
            "TypeScript",
            "Tauri",
            "Rust",
            "SQLite",
            "React Native"
        ],
        "category": "Desktop",
        "liveUrl": "https://kessetna.com/fr/",
        "githubUrl": "",
        "featured": true,
        "status": "Windows releases · Android monitoring pilot"
    },
    {
        "title": "SaleSide AI - Sales Meeting Assistant",
        "description": "Built the initial application and core technical foundation from scratch, including frontend and backend development and real-time AI meeting workflows.",
        "role": "Full-Stack Developer — initial product foundation",
        "impact": "My contribution: initial product foundation, transcription and AI meeting workflows.",
        "visibility": "Public",
        "thumbnail": "/saleside.png",
        "tags": [
            "Python",
            "WebSocket",
            "OpenAI"
        ],
        "category": "AI Tool",
        "liveUrl": "https://saleside.ai/",
        "githubUrl": "",
        "status": "Live SaaS product",
        "featured": true
    },
    {
        "title": "JourneyAI - AI Sales Assistant Platform",
        "description": "Developed multiple custom AI chat assistants, refined prompts and assistant behaviour, and shipped feature updates and bug fixes in an existing sales-assistant platform.",
        "role": "Full-Stack Developer — AI assistants & product updates",
        "impact": "My contribution: custom assistants, file uploads, chat history, workspace access and ongoing fixes.",
        "visibility": "Public",
        "thumbnail": "/journeyai.png",
        "tags": [
            "React",
            "FastAPI",
            "OpenAI",
            "WebSocket"
        ],
        "category": "AI Tool",
        "liveUrl": "https://meetjourney.ai/",
        "githubUrl": "",
        "status": "Live SaaS product",
        "featured": true
    },
    {
        "title": "Strategy Navigator - AI SaaS Platform",
        "description": "Contributed to multi-tenant workflows, role-based access, AI features, billing and collaboration integrations as part of the engineering team.",
        "role": "Full Stack Web Developer",
        "impact": "My contribution: application features, integrations and backend improvements.",
        "visibility": "Past contribution",
        "thumbnail": "/strategy-navigator.png",
        "tags": [
            "React",
            "Node.js",
            "OpenAI",
            "Stripe"
        ],
        "category": "SaaS",
        "liveUrl": "",
        "githubUrl": "",
        "status": "Past contribution; public link unavailable"
    },
    {
        "title": "RxCare / Deep Analyzer Suite",
        "description": "Built mobile healthcare application workflows for prescription and refill tracking, care messaging and AI assistant features.",
        "role": "Full Stack Mobile Developer",
        "impact": "React Native/Expo application with healthcare workflows and an Express backend.",
        "visibility": "Private work",
        "thumbnail": "/rxcare-suite.svg",
        "tags": [
            "React Native",
            "Expo",
            "TypeScript",
            "Express.js",
            "OpenAI"
        ],
        "category": "Healthcare",
        "liveUrl": "",
        "githubUrl": ""
    },
    {
        "title": "Tunisia Auto Connect / AutoTN",
        "description": "Built Arabic, French and English marketplace flows with RTL support, listings, seller profiles and WhatsApp contact, plus AI-assisted vehicle features.",
        "role": "Full Stack Mobile Developer",
        "impact": "My contribution: mobile interface, marketplace APIs and multilingual workflows.",
        "visibility": "Private work",
        "thumbnail": "/autotn-market.svg",
        "tags": [
            "React Native",
            "Expo",
            "TypeScript",
            "Express.js",
            "PostgreSQL",
            "OpenAI"
        ],
        "category": "Marketplace",
        "liveUrl": "",
        "githubUrl": ""
    },
    {
        "title": "Integrity Solve - AML/CTF Compliance Portal",
        "description": "Built a compliance prototype with onboarding, case review, reviewer decisions, escalations and PDF audit summaries.",
        "role": "Full Stack Web Developer",
        "impact": "Prototype covering review workflows and evidence summaries.",
        "visibility": "Prototype",
        "thumbnail": "/integrity-solve.svg",
        "tags": [
            "React",
            "TypeScript",
            "Express.js",
            "PostgreSQL"
        ],
        "category": "Compliance",
        "liveUrl": "",
        "githubUrl": "",
        "status": "Prototype"
    },
    {
        "title": "LMS with AI Integration and WebSocket",
        "description": "Built a MERN e-learning platform during an internship, covering course management, authentication, AI chatbot support and real-time classroom features.",
        "role": "Full Stack Developer (Intern)",
        "impact": "My contribution: course, authentication, AI and WebSocket workflows.",
        "visibility": "Public",
        "thumbnail": "/lms.PNG",
        "tags": [
            "React",
            "Node.js",
            "MongoDB",
            "WebSocket"
        ],
        "category": "Education",
        "liveUrl": "https://e-learning-five-tau.vercel.app",
        "githubUrl": "",
        "status": "Public demo"
    },
    {
        "title": "E-commerce Dashboard",
        "description": "Built a React dashboard for exploring commerce analytics, inventory and order-management interfaces.",
        "role": "Full Stack Developer",
        "impact": "Dashboard interface and commerce data views.",
        "visibility": "Public",
        "thumbnail": "/dash.PNG",
        "tags": [
            "React",
            "Node.js",
            "PostgreSQL"
        ],
        "category": "E-Commerce",
        "liveUrl": "https://dashboard-rho-gray-61.vercel.app/dashboard",
        "githubUrl": "https://github.com/aymenkhaled/dashboard",
        "status": "Public demo"
    },
    {
        "title": "Job Scraper and Outreach Automation",
        "description": "Built scraping and enrichment pipelines for job listings and company contacts, with deduplication and AI-assisted outreach preparation.",
        "role": "Automation and Full Stack Developer",
        "impact": "My contribution: data collection, enrichment and draft generation.",
        "visibility": "Private work",
        "thumbnail": "/web-scraper.svg",
        "tags": [
            "Python",
            "Node.js",
            "OpenAI",
            "MongoDB"
        ],
        "category": "Automation",
        "liveUrl": "",
        "githubUrl": ""
    },
    {
        "title": "Outreach Personalization Engine",
        "description": "Built a workflow that combines company and lead context with AI-generated outreach drafts for review.",
        "role": "Automation and Full Stack Developer",
        "impact": "Company-context enrichment and message preparation.",
        "visibility": "Private work",
        "thumbnail": "/outreach.png",
        "tags": [
            "Python",
            "OpenAI",
            "Node.js"
        ],
        "category": "Automation",
        "liveUrl": "",
        "githubUrl": ""
    },
    {
        "title": "SEO Optimization SaaS - Issue Detector",
        "description": "Built website crawling and SEO issue-detection workflows, grouping related findings and prioritizing fixes in an audit interface.",
        "role": "Full Stack Developer",
        "impact": "My contribution: crawler, issue grouping, prioritization and audit interface.",
        "visibility": "Private work",
        "thumbnail": "/website-img-2.webp",
        "tags": [
            "React",
            "FastAPI",
            "PostgreSQL",
            "Redis"
        ],
        "category": "SaaS",
        "liveUrl": "",
        "githubUrl": ""
    },
    {
        "title": "Library Stock - Windows POS and Inventory",
        "description": "Offline-first Windows application for bookstore sales, stock, purchases, returns, barcode workflows, printing, backup, and restore.",
        "role": "Full-Stack Desktop Developer",
        "impact": "My contribution: offline sales and inventory workflows, Rust transactions and Windows packaging.",
        "visibility": "Private work",
        "thumbnail": "/library-stock.png",
        "tags": [
            "React",
            "TypeScript",
            "Tauri",
            "Rust",
            "SQLite"
        ],
        "category": "Desktop",
        "liveUrl": "",
        "githubUrl": "",
        "status": "Windows desktop application"
    },
    {
        "title": "BERBRY - 3D E-commerce Platform",
        "description": "Full-stack fashion commerce platform with a responsive storefront, product variants, cart and checkout, order management, admin workflows, and interactive 3D product experiences.",
        "role": "Full-Stack Developer",
        "impact": "Connected a React storefront and admin experience to an Express API and PostgreSQL data layer.",
        "visibility": "Private work",
        "thumbnail": "/berbry.png",
        "tags": [
            "React",
            "TypeScript",
            "Three.js",
            "Express.js",
            "PostgreSQL"
        ],
        "category": "E-Commerce",
        "liveUrl": "",
        "githubUrl": ""
    }
],

  experience: [
    {
      company: "Everything to Gain",
      logo: "",
      role: "Full-Stack Developer",
      startDate: "Aug 2025",
      endDate: "Present",
      location: "Remote",
      description:
        "Contributing to production AI SaaS products with multi-tenant architecture, automation, billing, and real-time features.",
      achievements: [
        "Contributed to Strategy Navigator, JourneyAI, and SaleSide AI across frontend, backend, and product integrations.",
        "Worked on AI integrations and Stripe and PayPal billing workflows.",
        "Worked on Slack, Asana and Basecamp integrations and real-time features.",
        "Improved application architecture and automated key product workflows.",
      ],
    },
    {
      company: "Aziin Engineering Solution",
      logo: "",
      role: "Full Stack Developer (Intern)",
      startDate: "Feb 2025",
      endDate: "May 2025",
      location: "Sfax, Tunisia",
      description:
        "Developed an e-learning platform with AI chatbot support, MERN backend features, authentication, and real-time WebSocket interactions.",
      achievements: [
        "Built dynamic course/content workflows and authentication modules.",
        "Integrated AI chatbot assistance into the learning experience.",
        "Improved platform responsiveness and backend performance for real-time usage.",
      ],
    },
    {
      company: "SAC Marquage",
      logo: "",
      role: "Mobile Developer (Intern)",
      startDate: "Sep 2024",
      endDate: "Oct 2024",
      location: "Tunisia",
      description:
        "Built a React Native RFID mobile application connected to IoT devices and Django REST APIs for tag management and synchronization.",
      achievements: [
        "Developed mobile RFID workflows with IoT device communication.",
        "Created Django APIs for tag management and device synchronization.",
        "Implemented reliable field-ready data handling for device operations.",
      ],
    },
    {
      company: "Proged",
      logo: "",
      role: "Full Stack Web Developer (Intern)",
      startDate: "Jul 2022",
      endDate: "Aug 2022",
      location: "Tunisia",
      description:
        "Developed e-commerce features covering product catalog, payments, and order workflows.",
      achievements: [
        "Implemented product catalog and order management workflows.",
        "Worked across frontend, backend, and database modules.",
        "Contributed to deployment and maintenance of web application modules.",
      ],
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
    upwork: "https://www.upwork.com/freelancers/~01adc11dd1f62fd715",
    linkedin: "https://www.linkedin.com/in/aymen-khaled-652724236/?skipRedirect=true",
    whatsapp: "https://wa.me/21626286045",
    calendly: "https://calendly.com/khaledaymen850/30min",
    github: "https://github.com/aymenkhaled",
    email: "mailto:khaledaymen850@gmail.com",
  },
};
