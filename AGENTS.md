# AGENTS.md — IMPACT Lab Website

Read `README.md` first — it has the full structure, update recipes, and the style guide.
This file only adds agent-specific operating notes. (Same content as CLAUDE.md; keep the
two files in sync.)

## Non-negotiable content rules

- Dark theme; tone modeled on istar.jhu.edu / aiai.jhu.edu (no comma-laundry-lists).
- Featured research + images = Grace's own lab's work only. Collaborator-led work she
  co-authored belongs only on the Publications page.
- Never add funding sources, grant numbers, or funding-dependent phrasing.
- No cadaver/dissection imagery from the source decks.
- Static images only (flatten any GIF/movie to one frame or a 3-frame montage).

## Workflow

- The site is plain HTML ×7 pages with duplicated header/nav/footer — propagate any
  shared-markup change to all pages, and keep nav `class="active"` correct per page.
- Verify changes by opening the page (it renders from file://).
- Commit + push after user-approved changes: repo is github.com/gracegang/impact-lab-website
  (private). Grace says "push" or asks to publish; don't push unrequested.
- Source documents (CV markdown, retreat posters, eyecandies deck, personnel docx, original
  photos) live in `..\legacy\` — outside the repo. Treat as the only copies; never delete
  without explicit confirmation. Grace's CV: `..\legacy\Gang_CV.md` is the authority for
  news/awards/publications updates.

## When Grace gives new content

- "Add news/award X" → news.html top + maybe index.html highlights (keep 3 there).
- New paper → publications.html under its year (journal articles only).
- New member/departure → update PEOPLE.md (roster source of truth) AND people.html
  (photos: square-ish JPG in images/people/, firstname-lastname.jpg). If PEOPLE.md and
  people.html disagree, PEOPLE.md wins — Grace may edit it directly on GitHub.
- New talk recordings → "Selected Presentations" boxes on research.html; link SPIE DL paper
  pages or YouTube directly.
