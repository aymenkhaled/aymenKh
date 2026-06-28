# ATEA Submission Pack Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Generate a professional French ATEA submission pack containing Aymen Khaled's mission-specific CV, education and certifications, relevant project evidence, actual LMS screenshots, custom-LMS architecture, and exact proposal corrections for Mehdi.

**Architecture:** A Python generator will produce stable PDF and DOCX artifacts from verified local evidence. The primary technical scenario is adaptation and industrialisation of Aymen's existing React/Node LMS; Moodle appears only as a comparison option. All PDFs are rendered and inspected before the final ZIP is assembled.

**Tech Stack:** Python 3.13, ReportLab, python-docx, Pillow, PyMuPDF, pypdf, PowerShell.

---

### Task 1: Lock requirements and safety boundaries

**Files:**
- Modify: `docs/superpowers/specs/2026-06-28-atea-developer-evidence-package-design.md`
- Create: `tests/test_atea_pack.py`

- [ ] **Step 1:** Change the approved architecture from Moodle-hybrid to custom-LMS-first because Aymen confirmed source-code ownership.
- [ ] **Step 2:** Keep Moodle only as the TDR comparison scenario and prohibit claims of prior Moodle experience.
- [ ] **Step 3:** Write tests requiring the exact deliverable set and prohibiting unrelated Ahmed Ben Yahia files.
- [ ] **Step 4:** Run `python -m unittest discover -s tests -p test_atea_pack.py -v` and confirm it fails because `tools/generate_atea_pack.py` does not yet exist.

### Task 2: Implement the document generator

**Files:**
- Create: `tools/generate_atea_pack.py`

- [ ] **Step 1:** Define verified profile, education, certification, project and ATEA-role content in French.
- [ ] **Step 2:** Generate the two-page French LMS CV as PDF and DOCX.
- [ ] **Step 3:** Generate the consolidated technical evidence dossier as PDF.
- [ ] **Step 4:** Generate the LMS screenshot annex from actual supplied screenshots with truthful captions.
- [ ] **Step 5:** Generate the custom-LMS architecture PDF and Mehdi correction DOCX/PDF.
- [ ] **Step 6:** Generate the missing-evidence checklist and submission README.
- [ ] **Step 7:** Assemble only approved artifacts into the final ZIP.

### Task 3: Verify content and rendering

**Files:**
- Verify: `output/pdf/*.pdf`
- Verify: `output/docx/*.docx`
- Verify: `output/ATEA_Aymen_Khaled_Submission_Pack.zip`

- [ ] **Step 1:** Run `python -m unittest discover -s tests -p test_atea_pack.py -v` and confirm all tests pass.
- [ ] **Step 2:** Run `python tools/generate_atea_pack.py` and confirm every required artifact is produced.
- [ ] **Step 3:** Extract text from all PDFs and DOCX files and scan for placeholders, unrelated names, fake evidence language and missing role labels.
- [ ] **Step 4:** Render every PDF page to PNG under `tmp/pdfs/atea-pack/`.
- [ ] **Step 5:** Inspect every rendered page for clipping, overlap, broken accents, unreadable screenshots and inconsistent page numbering.
- [ ] **Step 6:** Read the ZIP manifest and confirm it contains only the approved output documents.
- [ ] **Step 7:** Run `git diff --check` and report generated artifacts with absolute file links.
