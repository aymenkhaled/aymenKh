# Professional Profile Refresh Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Deliver a verified CV, concise portfolio refresh, working scheduling flow, LinkedIn banner/content, preview deployment, and reviewed Git update.

**Architecture:** Keep professional facts in the existing portfolio data module, add only the smallest UI changes needed for CV access and booking clarity, and generate the CV from one reproducible builder so DOCX/PDF content cannot drift. Browser QA validates the actual rendered site and calendar interaction.

**Tech Stack:** Next.js 16, React 19, TypeScript, Node test runner, python-docx, LibreOffice/Poppler, Vercel, LinkedIn, Calendly.

**Spec:** `docs/superpowers/specs/2026-09-02-professional-profile-refresh-design.md`

## Global Constraints

- Preserve every existing project.
- Add only Library Stock and BERBRY.
- Use August 2025 for Everything to Gain and February-May 2025 for Aziin.
- Keep copy short, factual, and natural.
- Do not publish unsupported testimonials, leadership wording, dates, or outcomes.
- Do not save LinkedIn changes or deploy production without the required final confirmation.

---

### Task 1: Add portfolio content contract tests

**Files:**
- Create: `tests/portfolio-content.test.mjs`
- Modify: `package.json`

- [ ] Write Node tests that assert confirmed dates/title/location, both new project names, CV link presence, retained original project titles, verified Calendly URL, and absence of disallowed claims/names.
- [ ] Run `npm test` and verify the tests fail because the existing content still contains old dates, missing projects, unsupported wording, and no CV action.
- [ ] Add only the `test` script required to run `node --test tests/*.test.mjs`.

### Task 2: Refresh portfolio data and focused UI copy

**Files:**
- Modify: `src/data/portfolio.ts`
- Modify: `src/data/caseStudies.ts`
- Modify: `src/components/Hero.tsx`
- Modify: `src/components/Guarantee.tsx`
- Modify: `src/components/Services.tsx`
- Modify: `src/components/Booking.tsx`
- Modify: `src/app/layout.tsx`
- Modify: `src/types/index.ts`
- Modify: `public/library-stock.png`
- Modify: `public/berbry.png`

- [ ] Implement the confirmed professional positioning, dates, concise experience copy, and two additive projects.
- [ ] Remove unused fabricated testimonial records and unsupported leadership language without removing any project.
- [ ] Add a hero CV download action and render counters with their final accessible value before animation.
- [ ] Replace the guarantee language with delivery standards and make scheduling copy concise.
- [ ] Run `npm test`; verify all content contract tests pass.

### Task 3: Rebuild and verify the CV

**Files:**
- Create: `scripts/build_cv.py`
- Create: `public/Aymen_Khaled_CV.pdf`
- Create: `D:/portfolio/output/cv/Aymen_Khaled_CV.docx`
- Create: `D:/portfolio/output/cv/Aymen_Khaled_CV.pdf`

- [ ] Build a two-page ATS-friendly DOCX with hyperlinks and restrained styling from confirmed facts.
- [ ] Render the DOCX to PNG and PDF with the bundled document runtime.
- [ ] Inspect every rendered page at full resolution, correct any layout defect, and re-render.
- [ ] Extract final PDF text and assert confirmed dates, selected projects, contact links, and absence of low-confidence skills and unsupported claims.
- [ ] Copy the verified PDF to `public/Aymen_Khaled_CV.pdf` for the portfolio download action.

### Task 4: Generate and verify LinkedIn banner

**Files:**
- Create: `D:/portfolio/output/linkedin/Aymen_Khaled_LinkedIn_Banner.png`

- [ ] Generate a clean navy/teal professional banner with a restrained technology/product theme and no unverifiable text.
- [ ] Inspect the output for composition, crop safety, text accuracy if any, artifacts, and professional fit.
- [ ] Iterate once if visual inspection finds a material defect.

### Task 5: Run local frontend and Calendly QA

**Files:**
- No committed test artifacts.

- [ ] Run `npm run lint`, `npm test`, and `npm run build`.
- [ ] Start the production app locally.
- [ ] Browser-test: home loads -> CV action downloads/opens the PDF -> projects contain old and new entries -> booking CTA reaches scheduling section -> Calendly embed/direct link resolves.
- [ ] Repeat visual checks at desktop and mobile widths and inspect console warnings/errors.

### Task 6: Preview deployment, LinkedIn preparation, and source control

**Files:**
- Modify only if QA identifies a defect.

- [ ] Create a Vercel preview deployment and record the URL.
- [ ] Prepare the exact LinkedIn field values and assets.
- [ ] Request action-time confirmation before typing/uploading/saving LinkedIn changes.
- [ ] Request explicit confirmation before production Vercel deployment.
- [ ] Review `git diff`, commit the verified changes, and push as authorized.
