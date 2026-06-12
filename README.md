# IMPACT Lab Website

Static website for the Laboratory for Imaging Physics, Analysis, and Clinical Translation
(IMPACT), Department of Radiology, University of Pennsylvania. PI: Grace J. Gang, PhD.

Plain HTML + CSS. **No build step, no server, no dependencies.** Open `index.html` in a
browser and everything works from local files.

- Live repo: https://github.com/gracegang/impact-lab-website (private)
- Local copy: `D:\gang\misc\Lab Website\impact-website\`
- Source materials (CV, posters, personnel docs, original photos): `D:\gang\misc\Lab Website\legacy\` — **not** in git, do not delete carelessly; it holds the only copies.

## Structure

```
index.html          Home: hero, research area cards, PI intro, photo slideshow, news highlights
research.html       Five research themes with figures and "Selected Presentations" link boxes
people.html         PI bio + current members + alumni (photos in images/people/)
publications.html   Peer-reviewed journal articles, grouped by year
news.html           Awards, honors, milestones (newest first)
join.html           Recruiting page
contact.html        Email + address
css/style.css       All styling (dark theme, CSS variables at top)
images/people/      Headshots (square-ish crops, displayed 1:1 via CSS)
images/research/    Research figures (PNG, mostly cropped from Grace's slides/posters)
images/lab/         Lab life photos for the homepage slideshow
```

Every page repeats the same header/nav and footer markup — there are no includes. **When
editing nav or footer, change all 7 HTML files.** The `class="active"` on the nav link must
match the current page.

## Common updates

### Add a news item
Edit `news.html`. Copy an existing `<div class="news-item">` block, place it at the **top**
(newest first), set the year and tag (`Award`, `Honor`, `Publication`, `Media`, `Service`).
If it's a major item, also consider updating the three "Recent Highlights" on `index.html`.

### Add/remove a lab member
Edit `people.html`. Members are `<div class="person">` blocks with a photo in
`images/people/` (named `firstname-lastname.jpg`). When someone leaves, move their block
from "Current Lab Members" to "Former Members" and add their years. Members without photos
use `<div class="person no-photo">` (text-only card).

### Add a publication
Edit `publications.html`. Entries are `<li>` under the year's `<ul class="pubs">`;
`<strong>Gang GJ</strong>` bolds the PI, `<span class="src">` italicizes the journal.
Only peer-reviewed journal articles are listed — not conference proceedings.

### Add a slideshow photo
Drop a JPG in `images/lab/`, then copy a `<figure class="slide">` block inside
`#lab-slideshow` in `index.html` and update the filename + caption. The dots and rotation
adjust automatically. HEIC photos must be converted to JPG first.

### Add a research figure
PNGs go in `images/research/`. Figures from PowerPoint: export the slide as a high-res PNG
and crop (no need to keep animations — flatten GIFs/movies to a static frame, or show 2–3
frames side by side). Use `<figure class="figure">` with a `<figcaption>`.

### Publish changes
```
git add -A
git commit -m "Describe the change"
git push
```

## Style guide (important — these are Grace's explicit preferences)

1. **Dark theme.** Navy-charcoal backgrounds with cyan (`--accent`) and gold (`--accent-2`)
   accents, matching her presentation style. Colors are CSS variables at the top of
   `style.css`. Do not switch to a light/Penn-branded theme.
2. **Tone:** modeled on the I-STAR Lab (istar.jhu.edu) and AIAI Lab (aiai.jhu.edu) sites —
   understated, declarative, research-first academic prose. **No laundry lists** of
   subfields strung together with commas; state what the work achieves in full sentences.
   Bullet lists are fine only for genuine itemizations (project lists, application steps).
3. **Own-lab work only** for featured research areas and images. Grace is a co-author on
   collaborator-led projects (e.g., extended FOV imaging, tunable neural networks) — these
   stay on the Publications page but are NOT featured as lab research areas.
4. **No funding information.** No grant numbers, sponsors, or award amounts anywhere.
   Funding-dependent language is also out (e.g., say "qualified candidates are always
   welcome", never "openings depend on funding").
5. **Collaborators list** (Research page + homepage): JHU AIAI, UCLA CVIB, University of
   Chicago, Penn Neurosurgery/Radiology. ACRF Sydney was deliberately removed.
6. **Join Us page** emphasizes strong quantitative background and programming skills.
7. **Presentation links:** prioritize Grace's first-author talks, but don't label them as
   such on the page — the boxes are titled "Selected Presentations". Link directly to SPIE
   Digital Library paper pages (they host the talk recordings) or YouTube.
8. **No graphic imagery** (cadaver/dissection photos exist in the source decks — don't use).
9. **Images from PPT:** static PNGs only; for animations/movies, use a representative frame
   or a 3-frame side-by-side montage.

## Key facts

- Lab email: grace.j.gang@pennmedicine.upenn.edu
- Address: Department of Radiology, University of Pennsylvania, 3620 Hamilton Walk,
  Philadelphia, PA 19104
- Tagline: "Blackboard → Benchtop → Bedside" / "Developing novel imaging technologies
  guided by a rigorous understanding of image science"
- Research themes (research.html): 1 Interventional (non-circular orbits),
  2 Spectral imaging & angiography, 3 Deep learning image formation,
  4 Physics-guided radiomics standardization, 5 Clinical translation (view angle prediction)
- Deep Recon Workshop 2025 talk recording: https://youtu.be/wW8eM3A49WY

## Useful extraction recipes (Windows / PowerShell)

- **Images inside .docx/.pptx**: they're ZIP files — extract `word/media/` or `ppt/media/`
  with `System.IO.Compression.ZipFile`.
- **High-res slide export**: PowerPoint COM —
  `$pres.Slides.Item(n).Export("out.png", "PNG", 3840, 2160)`. To capture content hidden
  behind decorations, delete the covering shape in the COM session and close **without
  saving**.
- **HEIC → JPG**: WPF `BitmapDecoder`/`JpegBitmapEncoder` (PresentationCore) handles it if
  the Windows HEIF extension is installed.
- **GIF frames**: `System.Drawing` — `SelectActiveFrame` over `FrameDimension.Time`.
