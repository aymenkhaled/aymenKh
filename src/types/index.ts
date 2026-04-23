export interface Stat {
  value: string;
  label: string;
}

export interface Platform {
  name: string;
  badge: string;
  url: string;
}

export interface Client {
  name: string;
  logo: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
  size?: "featured" | "wide" | "narrow" | "half" | "third";
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  badge: string;
}

export interface StackItem {
  name: string;
  category: string;
}

export interface Testimonial {
  name: string;
  photo: string;
  project: string;
  review: string;
  rating: number;
  platform: string;
}

export interface GuaranteeItem {
  title: string;
  description: string;
  icon: string;
}

export interface Social {
  upwork?: string;
  linkedin: string;
  whatsapp: string;
  calendly: string;
  github?: string;
  email?: string;
}

export interface Project {
  title: string;
  description: string;
  role: string;
  impact: string;
  visibility: "Public" | "Private Client";
  thumbnail: string;
  tags: string[];
  category: string;
  liveUrl: string;
  githubUrl: string;
}

export interface Experience {
  company: string;
  logo: string;
  role: string;
  startDate: string;
  endDate: string;
  location: string;
  description: string;
  achievements: string[];
}

export interface PortfolioData {
  name: string;
  photo: string;
  title: string[];
  bio: string;
  availability: boolean;
  stats: Stat[];
  platforms: Platform[];
  clients: Client[];
  services: Service[];
  process: ProcessStep[];
  stack: StackItem[];
  testimonials: Testimonial[];
  guarantee: GuaranteeItem[];
  social: Social;
  projects: Project[];
  experience: Experience[];
}
