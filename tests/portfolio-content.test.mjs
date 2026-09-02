import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

async function source(path) {
  return readFile(new URL(path, root), "utf8");
}

const originalProjectTitles = [
  "Strategy Navigator - AI SaaS Platform",
  "JourneyAI - AI Sales Assistant Platform",
  "SaleSide AI - Sales Meeting Assistant",
  "RxCare / Deep Analyzer Suite",
  "Tunisia Auto Connect / AutoTN",
  "Integrity Solve - AML/CTF Compliance Portal",
  "LMS with AI Integration and WebSocket",
  "E-commerce Dashboard",
  "Job Scraper and Outreach Automation",
  "Outreach Personalization Engine",
  "SEO Optimization SaaS - Issue Detector",
];

test("portfolio uses confirmed professional facts", async () => {
  const portfolio = await source("src/data/portfolio.ts");

  assert.match(portfolio, /role: "Full-Stack Developer"/);
  assert.match(portfolio, /startDate: "Aug 2025"/);
  assert.match(portfolio, /company: "Aziin Engineering Solution"[\s\S]*startDate: "Feb 2025"[\s\S]*endDate: "May 2025"/);
  assert.match(portfolio, /Windows desktop/i);
});

test("portfolio preserves all projects and adds the two approved projects", async () => {
  const portfolio = await source("src/data/portfolio.ts");

  for (const title of originalProjectTitles) {
    assert.ok(portfolio.includes(title), `missing original project: ${title}`);
  }
  assert.match(portfolio, /Library Stock - Windows POS and Inventory/);
  assert.match(portfolio, /BERBRY - 3D E-commerce Platform/);
});

test("portfolio removes unsupported credibility risks", async () => {
  const portfolio = await source("src/data/portfolio.ts");
  const caseStudies = await source("src/data/caseStudies.ts");
  const guarantee = await source("src/components/Guarantee.tsx");
  const combined = `${portfolio}\n${caseStudies}\n${guarantee}`;

  for (const disallowed of [
    "Michael T.",
    "Sarah L.",
    "David K.",
    "Leading development",
    "Led Strategy Navigator",
    "5+ Years Building",
    "15+ Projects Delivered",
    "Zero Risk",
    "You're fully protected",
  ]) {
    assert.ok(!combined.includes(disallowed), `unsupported wording remains: ${disallowed}`);
  }
});

test("hero exposes the verified CV and booking path", async () => {
  const hero = await source("src/components/Hero.tsx");
  const booking = await source("src/components/Booking.tsx");
  const portfolio = await source("src/data/portfolio.ts");

  assert.match(hero, /\/Aymen_Khaled_CV\.pdf/);
  assert.match(hero, /Download CV/);
  assert.match(hero, />Full-Stack<\/span>/);
  assert.doesNotMatch(hero, />AI SaaS<\/span>/);
  assert.match(portfolio, /https:\/\/calendly\.com\/khaledaymen850\/30min/);
  assert.match(booking, /30-minute project consultation/i);
});

test("animated counters expose their final value before animation", async () => {
  const counter = await source("src/components/ui/AnimatedCounter.tsx");
  assert.match(counter, /useState\(value\)/);
  assert.doesNotMatch(counter, /useState\("0"\)/);
});

test("the portfolio avoids known broken local resource requests", async () => {
  const icons = await source("src/lib/techIcons.ts");
  const layout = await source("src/app/layout.tsx");
  const portfolio = await source("src/data/portfolio.ts");

  assert.doesNotMatch(icons, /Groq: "groq"/);
  assert.match(layout, /process\.env\.VERCEL\s*\?\s*<Analytics/);
  assert.doesNotMatch(portfolio, /thumbnail: "\/web-scraper\.png"/);
});
