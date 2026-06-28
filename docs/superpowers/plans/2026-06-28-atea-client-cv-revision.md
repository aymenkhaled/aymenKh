# ATEA Client CV Revision Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Produce a client-ready French CV and consolidated LMS technical portfolio with no internal-review language, plus the real diploma image in a separate supporting-documents folder.

**Architecture:** A dedicated Python generator will keep the final client package independent from the earlier audit pack. ReportLab will generate the two PDFs, python-docx will generate an editable CV outside the client ZIP, Pillow will normalize screenshots in memory, and ZipFile will assemble the three-item client package.

**Tech Stack:** Python 3, ReportLab, python-docx, Pillow, PyMuPDF, unittest.

---

### Task 1: Define client-package contracts

**Files:**
- Modify: `tests/test_atea_pack.py`

- [ ] **Step 1: Write failing tests for prohibited language and full CV coverage**

Add tests that extract `output/client_final/01_CV_Aymen_Khaled_Developpeur_Full_Stack_LMS_FR.pdf` and assert that it contains `Everything to Gain`, `Strategy Navigator`, `JourneyAI`, `SaleSide AI`, `RxCare`, `Integrity Solve`, `Aziin Engineering Solution`, `SAC Marquage`, `Proged`, `Job Scraper`, `AutoSEO`, `AutoTN`, `E-Commerce Dashboard`, education, certifications and languages. Assert that it excludes `selon le CV fourni`, `fichiers fournis`, `copies à joindre`, `faute d'attestation` and `aucune expérience`.

- [ ] **Step 2: Write a failing package-manifest test**

Assert that `ATEA_Aymen_Khaled_Dossier_Client_Final.zip` contains exactly:

```python
{
    "01_CV_Aymen_Khaled_Developpeur_Full_Stack_LMS_FR.pdf",
    "02_Portfolio_Technique_LMS_Aymen_Khaled.pdf",
    "03_Justificatifs/Diplome_Licence_Big_Data_Analyse_Donnees.png",
}
```

- [ ] **Step 3: Run the tests and verify RED**

Run: `python -m unittest tests.test_atea_pack -v`

Expected: FAIL because `output/client_final` and the new ZIP do not exist.

### Task 2: Build the complete French CV

**Files:**
- Create: `tools/generate_atea_client_pack.py`

- [ ] **Step 1: Define structured CV data**

Create constants for contact details, professional profile, technical skills, four professional experiences, five selected projects, education, certifications and languages. Use direct French action phrases and the dates from `Aymen_Kh_CV.pdf`.

- [ ] **Step 2: Generate a two-page PDF CV**

Use a one-column A4 layout with Arial, navy section headings, teal accents, clickable URLs, restrained spacing and numbered footers. Force the second page to start at `PROJETS SÉLECTIONNÉS` so the experience section remains coherent.

- [ ] **Step 3: Generate an editable DOCX outside the client ZIP**

Write `output/editable/CV_Aymen_Khaled_Developpeur_Full_Stack_LMS_FR.docx` using the same structured content and heading order.

- [ ] **Step 4: Run the content tests**

Run: `python tools/generate_atea_client_pack.py` followed by `python -m unittest tests.test_atea_pack -v`.

Expected: CV content tests pass; portfolio/manifest tests may remain failing until Task 3.

### Task 3: Build the consolidated technical portfolio

**Files:**
- Modify: `tools/generate_atea_client_pack.py`

- [ ] **Step 1: Add commercial technical-positioning pages**

Include a cover, technical profile, selected references, direct LMS alignment and a custom full-stack architecture. Exclude Moodle commentary, proposal corrections, source-audit language and missing-document warnings.

- [ ] **Step 2: Add curated LMS screenshots**

Use the seven approved images from `tmp/evidence_analysis/lms_video_screenshots_and_analysis/screenshots_by_section`. Crop browser chrome in memory, preserve aspect ratio and add short functional captions without evidentiary disclaimers.

- [ ] **Step 3: Add project and contact summary**

Close with professional URLs and selected complementary products: Strategy Navigator, JourneyAI, SaleSide AI, AutoSEO and E-Commerce Dashboard.

- [ ] **Step 4: Generate and text-scan the portfolio**

Run the generator and assert the PDF opens, contains more than 500 characters of extractable text and excludes all prohibited phrases.

### Task 4: Assemble the final client ZIP

**Files:**
- Modify: `tools/generate_atea_client_pack.py`

- [ ] **Step 1: Copy the actual diploma unchanged**

Copy `C:/Users/khale/Downloads/diplome.PNG` to `output/client_final/03_Justificatifs/Diplome_Licence_Big_Data_Analyse_Donnees.png` using `shutil.copy2`.

- [ ] **Step 2: Verify byte identity**

Compare SHA-256 hashes of source and copied diploma and raise an exception if they differ.

- [ ] **Step 3: Create the ZIP with the exact manifest**

Create `output/ATEA_Aymen_Khaled_Dossier_Client_Final.zip` containing only the two PDFs and the diploma image.

- [ ] **Step 4: Run all automated tests**

Run: `python -m unittest discover -s tests -p test_atea_pack.py -v`

Expected: all tests PASS.

### Task 5: Visual and integrity verification

**Files:**
- Generated: `output/client_final/*.pdf`
- Generated: `tmp/pdfs/atea-client-final/**/*.png`

- [ ] **Step 1: Render every PDF page**

Use PyMuPDF at 1.35x scale and save page PNGs under `tmp/pdfs/atea-client-final`.

- [ ] **Step 2: Inspect every rendered page**

Check titles, margins, page breaks, text wrapping, screenshot captions, footer numbering, accents and URL readability. Correct and regenerate if any clipping, overlap, excessive whitespace or malformed glyph appears.

- [ ] **Step 3: Run final text and ZIP checks**

Verify PDF page counts, forbidden phrase absence, required content presence, ZIP CRC, exact manifest and diploma hash identity.

- [ ] **Step 4: Commit generator and tests**

```powershell
git add tools/generate_atea_client_pack.py tests/test_atea_pack.py docs/superpowers/plans/2026-06-28-atea-client-cv-revision.md
git commit -m "feat: rebuild professional ATEA client dossier"
```
