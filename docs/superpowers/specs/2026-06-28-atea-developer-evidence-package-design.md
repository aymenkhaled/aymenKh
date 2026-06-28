# ATEA Developer Evidence Package Design

## Purpose

Produce a French, send-ready evidence package for Aymen Khaled's participation in Cabinet LE PLUS's ATEA tender. The package must strengthen the technical offer without presenting unverified experience, private-client work, generated images, or a prototype as formal proof of completed similar missions.

## Positioning decision

Aymen will be presented as **Développeur Full-Stack et Intégrateur technique de plateforme LMS**. He will not be presented as an "Expert LMS et Digital Learning," a Moodle specialist, or one of the two mandatory digital-pedagogy experts.

The role covers:

- custom web interfaces and dashboards;
- API and external-system integrations;
- real-time and AI-assisted components where approved;
- data, reporting, automated testing, CI/CD, deployment support, and technical documentation;
- technical integration with the selected LMS under the responsibility of an experienced LMS/Moodle specialist.

## Moodle and full-stack responsibility model

Moodle is the LMS core, not merely a content-writing tool and not a Node.js application. It supplies mature learning functions such as users, roles, courses, enrolment, activities, quizzes, completion tracking, grades, reports, and administration.

The division of work is:

1. **Pedagogical experts** define learning objectives, module structure, case studies, exercises, assessment rules, and validated content.
2. **Moodle/LMS expert** installs and configures Moodle, chooses supported plugins, configures roles and permissions, governs upgrades, and validates the LMS architecture.
3. **Aymen as full-stack integrator** develops only the custom layer that is genuinely required: branded interfaces, dashboards, integrations, external APIs, automation, AI services, reporting extensions, and deployment pipelines.
4. **ATEA administrators** use Moodle's administration screens to create and update ordinary courses and content without writing code after training.

Coding is required only when configuration is insufficient. Possible coding surfaces include Moodle plugins and themes in PHP/JavaScript, or an external React/TypeScript portal and Node.js integration service using Moodle's supported Web Service APIs. The proposal will not claim that Aymen has prior Moodle development experience.

## Recommended architecture

Use a hybrid acquisition-and-customisation scenario:

- Moodle LMS on a supported stable or LTS release validated at deployment;
- PostgreSQL as the primary database;
- Nginx and TLS on a controlled VPS/cloud environment;
- protected object storage for large files when justified;
- Moodle-native roles, course management, assessments, completion, and reports;
- custom React/TypeScript interfaces only for justified user journeys;
- Node.js/NestJS integration services only for external APIs, AI, automation, or reporting functions not suitably implemented in Moodle;
- supported APIs and plugins instead of modifications to Moodle core;
- staging and production environments, automated backups, restore tests, audit logging, monitoring, and documented upgrades.

The pure React/Node custom-LMS scenario will remain a comparison option, not the default recommendation. The pure Moodle configuration scenario will remain the lowest-cost comparison option.

## Evidence rules

- Use only supplied documents, actual portfolio assets, public links, and the 25 actual LMS screenshots.
- Label EduNova as an internship/prototype demonstrator unless an employer attestation proves a stronger status.
- Do not call portfolio projects "missions similaires du prestataire"; those references must come from Cabinet LE PLUS and must include date, amount, and recipient as required by the TDR.
- Do not create or imitate diplomas, certificates, attestations, signatures, client approvals, or production screenshots.
- Generated visuals are limited to clearly labelled conceptual architecture diagrams.
- Remove or mask personal test accounts and irrelevant browser chrome in the visual annex without changing functional evidence.
- State when a screenshot proves only a screen or configuration flow rather than a completed backend capability.

## Selected project references

1. **EduNova LMS demonstrator** - primary relevant reference. Evidence: short demo video and selected screenshots. Status: internship/prototype unless an attestation is supplied.
2. **Strategy Navigator** - complementary public SaaS reference for multi-tenant access, RBAC, dashboards, and integrations. Personal contribution requires an employer or client confirmation when used as formal evidence.
3. **E-Commerce Dashboard** - complementary public technical reference with a live demo and public GitHub repository for dashboard and analytics capability.

JourneyAI may be used as a backup complementary reference. None of these replace the cabinet's mandatory similar-mission references.

## Video and visual annex

Use the polished 1 minute 30 second video as the primary demonstration. Keep the five-minute video as an optional private link. Do not send the raw screenshot ZIP.

The visual annex will select a small set of actual screens covering:

- course and lesson creation;
- teaching studio tools;
- session management;
- connected live session;
- learner catalogue or course details;
- administrator user/role management after privacy masking;
- analytics only when the visible numeric-format defect is not present.

Screens containing placeholder text, dummy chat, development-mode authentication, translation overlays, personal emails, unformatted metrics, or empty AI results will be excluded or explicitly labelled as prototype limitations.

## Deliverables

Create the following artifacts while preserving all original source files:

1. `output/pdf/CV_Aymen_Khaled_ATEA_FR.pdf` - French mission-specific CV.
2. `output/pdf/Dossier_Expert_Technique_Aymen_Khaled_ATEA.pdf` - profile, role, skills, project references, contribution boundaries, and evidence status.
3. `output/pdf/Annexe_Visuelle_Demonstrateur_LMS_ATEA.pdf` - captioned, privacy-safe screenshots from the actual demo.
4. `output/docx/Corrections_Proposition_Mehdi_ATEA.docx` - exact ready-to-paste replacements for the submission letter and technical proposal.
5. `output/pdf/Architecture_Hybride_Moodle_FullStack_ATEA.pdf` - clearly labelled proposed architecture and responsibility map.
6. `output/checklists/Pieces_Justificatives_Manquantes_ATEA.md` - missing diplomas, certificates, attestations, and corporate references.
7. `output/ATEA_Aymen_Khaled_Submission_Pack.zip` - final delivery bundle after visual and textual verification.

## Required proposal corrections

The correction document will:

- replace Aymen's title with the approved full-stack integrator title;
- clarify that Aymen is an additional technical expert, not a mandatory pedagogical expert;
- replace the pure custom-development recommendation with the hybrid scenario;
- assign Moodle-core responsibility to a demonstrably experienced Moodle/LMS expert;
- separate Moodle configuration, pedagogical content production, and custom software development;
- remove all placeholders and the "document technique interne" label;
- replace ambiguous technology choices with a governed architecture and decision criteria;
- add interoperability, security, backup/restore, acceptance testing, deployment, maintenance, and knowledge-transfer commitments;
- make the schedule milestone-based with committee validation gates;
- explain that open-source Moodle LMS has no core software licence fee, while hosting, support, commercial plugins, or Moodle Workplace may have costs;
- avoid unverified claims of ISO certification, completed Moodle missions, production user counts, performance gains, or client acceptance.

## Verification

Before delivery:

- extract text from every generated PDF and DOCX to confirm names, dates, roles, and evidence labels;
- render every PDF page to PNG and inspect for overlap, clipping, broken accents, placeholder text, and unreadable screenshots;
- confirm no unrelated Ahmed Ben Yahia document is included;
- confirm no personal test email remains visible in the visual annex;
- confirm every portfolio URL and file path used in the dossier is correct;
- confirm the final ZIP contains only approved artifacts and no temporary files.

## Known evidence gaps

The supplied materials do not include diploma scans, certificate files or verification URLs, an Aziin/Everything to Gain attestation, client approvals, or Cabinet LE PLUS's corporate similar-mission records. The package will identify these gaps and will not manufacture replacements.
