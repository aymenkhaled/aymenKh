export interface CaseStudy {
  problem: { subtitle: string; content: string };
  solution: { subtitle: string; content: string; bullets: string[] };
  results: { subtitle: string; content: string };
}

export const caseStudies: Record<string, CaseStudy> = {
  "kessetna-retail-kessetna-btp": {
    "problem": {
      "subtitle": "Project context",
      "content": "Built two offline-first Windows products end to end: retail sales and stock management, and construction equipment rental with returns, payments and deposits. Added a companion Android app for remote monitoring."
    },
    "solution": {
      "subtitle": "My contribution",
      "content": "My contribution: interface, business logic, local database, desktop/mobile applications, installers and product websites.",
      "bullets": [
        "Retail sales, inventory, barcode scanning and receipt printing",
        "Equipment rental, partial returns, payments and deposits",
        "Offline-first Windows applications with Rust and SQLite",
        "Companion Android monitoring with an accompanied pilot rollout",
        "Installers, backups, release packaging and product websites"
      ]
    },
    "results": {
      "subtitle": "Delivery and status",
      "content": "Windows releases · Android monitoring pilot"
    }
  },
  "saleside-ai-sales-meeting-assistant": {
    "problem": {
      "subtitle": "Project context",
      "content": "Built the initial application and core technical foundation from scratch, including frontend and backend development and real-time AI meeting workflows."
    },
    "solution": {
      "subtitle": "My contribution",
      "content": "My contribution: initial product foundation, transcription and AI meeting workflows.",
      "bullets": [
        "Built the initial frontend and backend foundation",
        "Real-time meeting and transcription workflows",
        "AI-assisted responses and meeting summaries",
        "Later product development included contributions from the wider team"
      ]
    },
    "results": {
      "subtitle": "Delivery and status",
      "content": "Live SaaS product"
    }
  },
  "journeyai-ai-sales-assistant-platform": {
    "problem": {
      "subtitle": "Project context",
      "content": "Developed multiple custom AI chat assistants, refined prompts and assistant behaviour, and shipped feature updates and bug fixes in an existing sales-assistant platform."
    },
    "solution": {
      "subtitle": "My contribution",
      "content": "My contribution: custom assistants, file uploads, chat history, workspace access and ongoing fixes.",
      "bullets": [
        "Created multiple custom AI chat assistants",
        "Refined prompts and assistant behaviour",
        "Improved file uploads, chat history and workspace access",
        "Delivered product updates and bug fixes in an existing codebase"
      ]
    },
    "results": {
      "subtitle": "Delivery and status",
      "content": "Live SaaS product"
    }
  },
  "strategy-navigator-ai-saas-platform": {
    "problem": {
      "subtitle": "Project context",
      "content": "Contributed to multi-tenant workflows, role-based access, AI features, billing and collaboration integrations as part of the engineering team."
    },
    "solution": {
      "subtitle": "My contribution",
      "content": "My contribution: application features, integrations and backend improvements.",
      "bullets": [
        "React",
        "Node.js",
        "OpenAI",
        "Stripe"
      ]
    },
    "results": {
      "subtitle": "Delivery and status",
      "content": "Past contribution; public link unavailable"
    }
  },
  "rxcare-deep-analyzer-suite": {
    "problem": {
      "subtitle": "Project context",
      "content": "Built mobile healthcare application workflows for prescription and refill tracking, care messaging and AI assistant features."
    },
    "solution": {
      "subtitle": "My contribution",
      "content": "React Native/Expo application with healthcare workflows and an Express backend.",
      "bullets": [
        "React Native",
        "Expo",
        "TypeScript",
        "Express.js",
        "OpenAI"
      ]
    },
    "results": {
      "subtitle": "Delivery and status",
      "content": "Private work; details can be discussed without sharing confidential source code."
    }
  },
  "tunisia-auto-connect-autotn": {
    "problem": {
      "subtitle": "Project context",
      "content": "Built Arabic, French and English marketplace flows with RTL support, listings, seller profiles and WhatsApp contact, plus AI-assisted vehicle features."
    },
    "solution": {
      "subtitle": "My contribution",
      "content": "My contribution: mobile interface, marketplace APIs and multilingual workflows.",
      "bullets": [
        "React Native",
        "Expo",
        "TypeScript",
        "Express.js",
        "PostgreSQL",
        "OpenAI"
      ]
    },
    "results": {
      "subtitle": "Delivery and status",
      "content": "Private work; details can be discussed without sharing confidential source code."
    }
  },
  "integrity-solve-aml-ctf-compliance-portal": {
    "problem": {
      "subtitle": "Project context",
      "content": "Built a compliance prototype with onboarding, case review, reviewer decisions, escalations and PDF audit summaries."
    },
    "solution": {
      "subtitle": "My contribution",
      "content": "Prototype covering review workflows and evidence summaries.",
      "bullets": [
        "React",
        "TypeScript",
        "Express.js",
        "PostgreSQL"
      ]
    },
    "results": {
      "subtitle": "Delivery and status",
      "content": "Prototype"
    }
  },
  "lms-with-ai-integration-and-websocket": {
    "problem": {
      "subtitle": "Project context",
      "content": "Built a MERN e-learning platform during an internship, covering course management, authentication, AI chatbot support and real-time classroom features."
    },
    "solution": {
      "subtitle": "My contribution",
      "content": "My contribution: course, authentication, AI and WebSocket workflows.",
      "bullets": [
        "React",
        "Node.js",
        "MongoDB",
        "WebSocket"
      ]
    },
    "results": {
      "subtitle": "Delivery and status",
      "content": "Public demo"
    }
  },
  "e-commerce-dashboard": {
    "problem": {
      "subtitle": "Project context",
      "content": "Built a React dashboard for exploring commerce analytics, inventory and order-management interfaces."
    },
    "solution": {
      "subtitle": "My contribution",
      "content": "Dashboard interface and commerce data views.",
      "bullets": [
        "React",
        "Node.js",
        "PostgreSQL"
      ]
    },
    "results": {
      "subtitle": "Delivery and status",
      "content": "Public demo"
    }
  },
  "job-scraper-and-outreach-automation": {
    "problem": {
      "subtitle": "Project context",
      "content": "Built scraping and enrichment pipelines for job listings and company contacts, with deduplication and AI-assisted outreach preparation."
    },
    "solution": {
      "subtitle": "My contribution",
      "content": "My contribution: data collection, enrichment and draft generation.",
      "bullets": [
        "Python",
        "Node.js",
        "OpenAI",
        "MongoDB"
      ]
    },
    "results": {
      "subtitle": "Delivery and status",
      "content": "Private work; details can be discussed without sharing confidential source code."
    }
  },
  "outreach-personalization-engine": {
    "problem": {
      "subtitle": "Project context",
      "content": "Built a workflow that combines company and lead context with AI-generated outreach drafts for review."
    },
    "solution": {
      "subtitle": "My contribution",
      "content": "Company-context enrichment and message preparation.",
      "bullets": [
        "Python",
        "OpenAI",
        "Node.js"
      ]
    },
    "results": {
      "subtitle": "Delivery and status",
      "content": "Private work; details can be discussed without sharing confidential source code."
    }
  },
  "seo-optimization-saas-issue-detector": {
    "problem": {
      "subtitle": "Project context",
      "content": "Built website crawling and SEO issue-detection workflows, grouping related findings and prioritizing fixes in an audit interface."
    },
    "solution": {
      "subtitle": "My contribution",
      "content": "My contribution: crawler, issue grouping, prioritization and audit interface.",
      "bullets": [
        "React",
        "FastAPI",
        "PostgreSQL",
        "Redis"
      ]
    },
    "results": {
      "subtitle": "Delivery and status",
      "content": "Private work; details can be discussed without sharing confidential source code."
    }
  },
  "library-stock-windows-pos-and-inventory": {
    "problem": {
      "subtitle": "Project context",
      "content": "Offline-first Windows application for bookstore sales, stock, purchases, returns, barcode workflows, printing, backup, and restore."
    },
    "solution": {
      "subtitle": "My contribution",
      "content": "My contribution: offline sales and inventory workflows, Rust transactions and Windows packaging.",
      "bullets": [
        "React",
        "TypeScript",
        "Tauri",
        "Rust",
        "SQLite"
      ]
    },
    "results": {
      "subtitle": "Delivery and status",
      "content": "Windows desktop application"
    }
  },
  "berbry-3d-e-commerce-platform": {
    "problem": {
      "subtitle": "Project context",
      "content": "Full-stack fashion commerce platform with a responsive storefront, product variants, cart and checkout, order management, admin workflows, and interactive 3D product experiences."
    },
    "solution": {
      "subtitle": "My contribution",
      "content": "Connected a React storefront and admin experience to an Express API and PostgreSQL data layer.",
      "bullets": [
        "React",
        "TypeScript",
        "Three.js",
        "Express.js",
        "PostgreSQL"
      ]
    },
    "results": {
      "subtitle": "Delivery and status",
      "content": "Private work; details can be discussed without sharing confidential source code."
    }
  }
};
