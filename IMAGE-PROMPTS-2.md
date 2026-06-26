# Image generation manifest — ROUND 2 (layout refresh)

**For ChatGPT / Codex:** generate each image below as a **photorealistic** JPG and save it to the
exact path shown in `assets/img/gen/`. The page already reserves the position + aspect ratio (zero
layout shift); dropping the file in makes it appear. Do **not** rename. Each slot is also marked in the
HTML with an `<!-- AI-IMAGE ... -->` comment right above its `<img>`.

**NEW in round 2 — people are allowed.** These are illustrative / conceptual scenes (示意圖), so you
*may* include people (generic students, researchers, a professor). Do **not** depict specific, real,
named individuals (no real faculty/delegate faces). Generic people are fine.

**Global style (append to every prompt):**
> Photorealistic, cinematic, premium editorial science-brand aesthetic. Deep navy / midnight-blue tones with warm UCLA-gold accent light and subtle steel-blue. No text, no logos, no watermark.

---

## A. Section feature images (image sits beside the section heading)
4:3 landscape. Until generated, each falls back to the old round-1 band image, so the page is never empty.

| Path (`assets/img/gen/…`) | Size px (ratio) | Page | Prompt (subject) |
|---|---|---|---|
| `curriculum-feature.jpg` | 1280×960 (4:3) | curriculum | Students and faculty in a UCLA lab/classroom during a summer program session, hands-on quantum and biomedical work. |
| `faculty-feature.jpg` | 1280×960 (4:3) | faculty | A professor mentoring a small group of students in a UCLA seminar or lab, cross-disciplinary science on the screens around them. |
| `delegation-feature.jpg` | 1280×960 (4:3) | delegation | A group portrait of nine international student delegates together on the UCLA campus, confident and collaborative. |

## B. Timeline week illustrations (one per week, beside each week's text)
**Portrait 4:5**, subject centred (the slot crops with object-fit: cover and can stretch taller, so keep the subject centred and leave headroom).

| Path (`assets/img/gen/…`) | Size px (ratio) | Week | Prompt (subject) |
|---|---|---|---|
| `week1.jpg` | 1000×1250 (4:5) | W1 · Quantum, AI & Data | A small group of international students at orientation in a UCLA seminar room, gathered around a glowing screen of quantum and AI data visualizations. |
| `week2.jpg` | 1000×1250 (4:5) | W2 · Biology & Health Data | Students and a researcher at a lab bench with biosensors and a glowing health-data dashboard; terahertz/photonics equipment behind them. |
| `week3.jpg` | 1000×1250 (4:5) | W3 · Neuroscience & Brain | Students on a neuroscience lab tour studying a glowing 3D brain scan on a large display, EEG/MRI equipment nearby. |
| `week4.jpg` | 1000×1250 (4:5) | W4 · Semiconductors & Materials | Students in cleanroom gowns on a semiconductor and materials lab tour, examining a silicon wafer that glows gold. |
| `week5.jpg` | 1000×1250 (4:5) | W5 · Pharmacology & Biomarkers | Students at a pharmacology bench with vials, liquid-biopsy chips and glowing molecular models while a mentor explains. |
| `week6.jpg` | 1000×1250 (4:5) | W6 · Digital Health | Students at a data-visualization wall building a digital-health prototype, wearables and dashboards glowing. |
| `week7.jpg` | 1000×1250 (4:5) | W7 · Integrative & Chinese Medicine | Students in an integrative-medicine setting where traditional Chinese herbs and modern lab analysis sit side by side, a professor demonstrating. |
| `week8.jpg` | 1000×1250 (4:5) | W8 · Applied Quantum | Students gathered around a quantum computer's golden cryostat wiring in a dark lab, discussing with a researcher. |
| `week9.jpg` | 1000×1250 (4:5) | W9 · Final Symposium | Students presenting their final projects on a UCLA symposium stage, glowing slides and an audience, a celebratory mood. |

---

## Not for Codex — reserved live slots
Each timeline week also has an expandable **"Field updates & photos"** dropdown with empty photo slots
and a note. Those are intentionally left blank — they will be filled with **real photos and journal
entries during the program (summer 2026)**, not AI-generated. Leave them alone.
