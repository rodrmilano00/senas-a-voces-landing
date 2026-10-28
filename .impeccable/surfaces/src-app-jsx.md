---
version: 1
slug: "src-app-jsx"
primary_target: "src/App.jsx"
related_targets: ["index.html"]
---

## Scope

Landing page (src/App.jsx and its sections). Visitor mode: Persuade. Audience: families, deaf community, educators and institutions in Sonora meeting the team for the first time. Job: get to know Señas a Voces (who they are, what they built, the proof), then contact them. Academy is one product among three, not the lead. Constraints: portfolio identity pinned by the user; no Academy waitlist; real proof only (portfolio facts, real quotes, real press headlines, team videos).

## Direction contract

THESIS: The landing is the evidence portfolio itself, paged: each chapter is a cream sheet that slides over and stacks on the previous one as you scroll. It refuses the split hero over a row of equal cards.

OWN-WORLD: Cream sheets (#FAF7ED) with a 22px radius and a stacking edge shadow on a deeper sand desk; petroleum (#044C62) titles in League Spartan, cyan (#0D9AC5) only at display size and in the concentric wave lines at sheet corners; amber (#FFA431) for actions; Atkinson Hyperlegible body; portraits framed by each creator's colored offset block; dashed trajectory path with cyan nodes.

STORY: Visitors meet four Hermosillo engineering students and the communication gap they set out to close, see what they built (glove, live translator, Academy) running on real devices, believe it through Hackathon, Enactus, press and the deaf community's own words, then write to the team.

FIRST VIEWPORT: Cover sheet filling the screen. Floating pill nav at top. Left 7 of 12 columns: "Donde las manos encuentran voz." at about 112px petroleum with the second line cyan, one-sentence intro, amber "Conoce nuestra historia" plus "Escríbenos" link. Right: two creator portraits overlapping, each on its colored offset block, at different parallax depths. Wave lines in the top-right and bottom-left corners. Proof strip along the sheet's bottom edge; the next sheet's top edge peeks below the fold.

FORM: Dealt structure 3 of 7, "El portafolio que se hojea" (the lead of the roll). seed:539b005b5dcdca6a. Signature interaction: each sheet sticks when its end reaches the viewport and recedes (scale 1 to 0.94, slight dim) as the next sheet slides over it; inside "Lo que construimos", the team's laptop renders tilt from 20deg to flat while the phone with the live lesson climbs over them at a faster parallax rate. Motion grammar: scroll-linked depth only, inertial scroll, no per-section fade-up entrances; reduced motion keeps stacking layout, drops scale, parallax and video.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
