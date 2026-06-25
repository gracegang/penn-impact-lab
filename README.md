# IMPACT Lab Website

Static website for the Laboratory for Imaging Physics, Analysis, and Clinical Translation
(IMPACT), Department of Radiology, University of Pennsylvania. PI: Grace J. Gang, PhD.

Plain HTML + CSS. **No build step, no server, no dependencies.** Open `index.html` in a
browser and everything works from local files.

- Live repo: https://github.com/gracegang/impact-lab-website (private)
- Local copy: `D:\GoogleDrive\My Drive\Work\misc\Lab Website\impact-website\`
- Source materials (CV, posters, personnel docs, original photos): `D:\GoogleDrive\My Drive\Work\misc\Lab Website\legacy\` — **not** in git, do not delete carelessly; it holds the only copies.

## Structure

```
index.html          Home: hero, research area cards, news highlights
research.html       Six research areas with figures and "Selected Presentations" link boxes
people.html         PI bio + current members + alumni (photos in images/people/)
publications.html   Peer-reviewed journal articles, grouped by year
news.html           Awards, honors, milestones (newest first)
join.html           Recruiting page
css/style.css       All styling (dark theme, CSS variables at top)
js/email.js         Email-link helper that avoids raw email text in HTML
images/people/      Headshots (square-ish crops, displayed 1:1 via CSS)
images/research/    Research figures (PNG, mostly cropped from Grace's slides/posters/papers)
images/lab/         Lab life photos retained but not currently shown on homepage
```

Every page repeats the same header/nav and footer markup — there are no includes. **When
editing nav or footer, change all 6 HTML files.** The `class="active"` on the nav link must
match the current page.

## Common updates

### Add a news item
Edit `news.html`. Copy an existing `<div class="news-item">` block, place it at the **top**
(newest first), set the year and tag (`Award`, `Honor`, `Publication`, `Media`, `Service`).
If it's a major item, also consider updating the three "Recent Highlights" on `index.html`.

### Add/remove a lab member
**`PEOPLE.md` is the source of truth for the roster** — update it first (add a row, or
move a member to Alumni), then sync `people.html` to match. Members are
`<div class="person">` blocks with a photo in `images/people/` (named
`firstname-lastname.jpg`). Members without photos use `<div class="person no-photo">`
(text-only card).

### Add a publication
Edit `publications.html`. Entries are `<li>` under the year's `<ul class="pubs">`;
`<strong>Gang GJ</strong>` bolds the PI, `<span class="src">` italicizes the journal.
Only peer-reviewed journal articles and arXiv/preprint records are listed — not submitted articles.

### Add a research figure
PNGs go in `images/research/`. Figures from PowerPoint: export the slide as a high-res PNG
and crop (no need to keep animations — flatten GIFs/movies to a static frame, or show 2–3
frames side by side). Use `<figure class="figure">` with a `<figcaption>` only when a caption is useful.

### Publish changes
```
git add -A
git commit -m "Describe the change"
git push
```

## Style guide

1. **Dark theme.** Navy-charcoal backgrounds with cyan (`--accent`) and gold (`--accent-2`)
   accents, matching Grace's presentation style. Colors are CSS variables at the top of
   `style.css`. Do not switch to a light/Penn-branded theme.
2. **Tone:** understated, declarative, research-first academic prose. No laundry lists of
   subfields strung together with commas; state what the work achieves in full sentences.
3. **Own-lab work only** for featured research areas and images. Collaborator-led projects
   stay on the Publications page but are not featured as lab research areas.
4. **No funding information.** No grant numbers, sponsors, award amounts, or funding-dependent language.
5. **Join Us page** emphasizes strong quantitative background and programming skills.
6. **Presentation links:** prioritize Grace's first-author talks, but don't label them as
   such on the page — the boxes are titled "Selected Presentations".
7. **No graphic imagery** from source decks.
8. **Do not place raw email addresses in visible HTML.** Use the email helper or another bot-resistant contact pattern.

## Key facts

- Address: Department of Radiology, University of Pennsylvania, 3620 Hamilton Walk,
  Philadelphia, PA 19104
- Tagline: "Blackboard → Benchtop → Bedside" / "Developing novel imaging technologies
  guided by a rigorous understanding of image science"
- Research areas (research.html): interventional imaging, spectral imaging, deep learning image formation,
  radiomics standardization, image quality/task-driven imaging, and image analysis
- Deep Recon Workshop 2025 talk recording: https://youtu.be/wW8eM3A49WY