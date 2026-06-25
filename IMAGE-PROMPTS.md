# Image generation manifest — UCLA 醫工量子 site

**For ChatGPT (or any image model):** generate each image below as a **photorealistic** JPG/WebP and save it to the exact path shown. The page already reserves the correct position and aspect ratio; dropping the file in makes it appear (it overlays the placeholder / fallback automatically). Do **not** rename. Do **not** generate faces of real named people (headshots are excluded).

**Global style (append to every prompt):**
> Photorealistic, cinematic, premium editorial science-brand aesthetic. Deep navy / midnight-blue tones with warm UCLA-gold accent light and subtle steel-blue. High detail, shallow depth of field where appropriate. No text, no logos, no watermark.

Each slot is also marked in the HTML with an `<!-- AI-IMAGE ... -->` comment right above the `<img>`.

| Path (`assets/img/gen/…`) | Size px (ratio) | Page | Prompt (subject — then append global style) |
|---|---|---|---|
| `home-hero.jpg` | 2400×1350 (16:9) | index | UCLA Royce Hall at golden-hour dusk; a faint glowing quantum qubit-lattice and soft neural-network light threads in the twilight sky above the twin towers; wide establishing shot. |
| `home-scene-brain.jpg` | 800×480 (5:3) | index | Macro of a translucent human brain made of glowing golden data filaments and blue neural light, floating on dark navy. |
| `home-scene-drug.jpg` | 800×480 (5:3) | index | Luminous 3D molecular structures and a few capsules beside softly-blurred traditional Chinese medicinal herbs; dark navy; gold rim light. |
| `home-scene-quantum.jpg` | 800×480 (5:3) | index | The golden chandelier wiring of a real quantum computer glowing inside a dark lab; navy ambience. |
| `home-band.jpg` | 2400×675 (32:9) | index | Cinematic aerial of the UCLA campus and Westwood, Los Angeles, at blue-hour dusk; wide panorama. |
| `program-hero.jpg` | 2400×1080 (20:9) | program | Cinematic aerial of UCLA campus at blue hour, soft fog, wide. |
| `program-band.jpg` | 2400×675 (32:9) | program | Advanced MRI brain-imaging suite glowing in a dark room with a subtle golden data overlay on the scanner. |
| `program-card-brain.jpg` | 720×320 (16:7) | program | Brain MRI cross-section dissolving into golden AI data nodes; dark navy. |
| `program-card-drug.jpg` | 720×320 (16:7) | program | Glowing molecules and herbal extracts on a lab bench; dark navy; gold light. |
| `program-card-quantum.jpg` | 720×320 (16:7) | program | Quantum dilution-refrigerator golden wiring close-up; dark navy. |
| `program-card-conv.jpg` | 720×320 (16:7) | program | A silicon microchip wafer fused with a glowing translucent brain; dark navy; gold. |
| `curriculum-hero.jpg` | 2400×1080 (20:9) | curriculum | UCLA Powell Library Romanesque dome at dusk; cinematic; wide. |
| `curriculum-band.jpg` | 2400×675 (32:9) | curriculum | Long-exposure light trails forming a row of nine glowing signal waveforms across a dark navy laboratory; gold and steel-blue. |
| `faculty-hero.jpg` | 2400×1080 (20:9) | faculty | UCLA Royce Hall facade at dusk; cinematic; wide. |
| `faculty-band.jpg` | 2400×675 (32:9) | faculty | A constellation of glowing golden light nodes connected by faint lines across a dark navy field. |
| `delegation-hero.jpg` | 2400×1080 (20:9) | delegation | Los Angeles skyline at dusk seen from the hills; cinematic; wide. |
| `delegation-band.jpg` | 2400×675 (32:9) | delegation | Nine glowing golden orbs suspended in a dark navy quantum field; soft depth of field. |
| `journal-hero.jpg` | 2400×1080 (20:9) | journal | A real quantum computer glowing with golden wiring in a dark laboratory; cinematic; wide. |
| `journal-venue-royce.jpg` | 800×600 (4:3) | journal | UCLA Royce Hall exterior, daytime, clear sky. |
| `journal-venue-powell.jpg` | 800×600 (4:3) | journal | UCLA Powell Library exterior, daytime. |
| `journal-venue-campus.jpg` | 800×600 (4:3) | journal | UCLA campus quad with students, daytime. |
| `journal-venue-quantum.jpg` | 800×600 (4:3) | journal | A quantum computer in a research lab, golden wiring. |
| `journal-venue-mri.jpg` | 800×600 (4:3) | journal | A modern MRI scanner in a hospital imaging suite. |
| `journal-venue-la.jpg` | 800×600 (4:3) | journal | Los Angeles / Westwood skyline at dusk. |

Notes:
- Slots that currently fall back to a real CC photo (`home-hero`, `home-band`, all `*-hero`, `program-band`, and the six `journal-venue-*`) will show that photo until your generated file exists; the rest show a labelled placeholder.
- Faculty/delegate **headshots are intentionally not in this list** (real people). Drop real headshots into `assets/img/face/` named per the person if desired.
