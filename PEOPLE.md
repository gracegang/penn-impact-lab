# Lab Roster — Source of Truth

This file is the canonical personnel list for the website. **Edit this file when the lab
changes, then ask an agent to "sync people.html with PEOPLE.md"** (or edit the HTML
directly following README.md). Keep photos in `images/people/`, named
`firstname-lastname.jpg`, roughly square, face near the top of the frame.

## Principal Investigator

| Name | Title | Photo |
|---|---|---|
| Grace J. Gang, PhD | Associate Professor, Radiology, University of Pennsylvania; Adjunct Professor, BME, Johns Hopkins University | grace-gang.jpg |

## Current Members

| Name | Role | Joined | Photo |
|---|---|---|---|
| Donghyeon Lee, PhD | Post-doctoral Fellow | 02/2025 | donghyeon-lee.jpg |
| Limei Ma, PhD | Post-doctoral Fellow | 11/2023 | limei-ma.jpg |
| Huay Din | PhD Student, Bioengineering | 08/2023 | huay-din.jpg |
| Suyu Liao | PhD Student, Bioengineering | 08/2023 | suyu-liao.jpg |
| Mitchell Pelline | Research Specialist | 07/2025 | mitchell-pelline.jpg |

## Alumni

| Name | Role | Years | Photo |
|---|---|---|---|
| Chang Min Hyun, PhD | Post-doctoral Fellow | 2023–2024 | changmin-hyun.jpg |
| Jason Fan, PhD | Post-doctoral Fellow | 2025 | jason-fan.jpg |
| Mehrana Mohtasebi, PhD | Post-doctoral Fellow | 2023–2024 | mehrana-mohtasebi.jpg |
| Xiaoxuan (Esme) Zhang, PhD | Post-doctoral Fellow | 2023–2024 | esme-zhang.jpg |
| Louisa Coughlin | Summer Student, TRIP Mentoring Program | 2025 | louisa-coughlin.jpg |
| Timothy Winfree | PhD Student, Bioengineering | 2024–2025 | (none) |
| Nathan Hoang | Summer Student | 2025 | (none) |

## How to update (for humans)

1. **New member:** add a row to Current Members; drop their photo (JPG) into
   `images/people/`.
2. **Member leaves:** move their row from Current Members to Alumni and fill in Years.
3. Then either tell an AI agent "sync the people page with PEOPLE.md", or hand-edit
   `people.html` (copy an existing `<div class="person">` block).
4. Commit and push (`git add -A; git commit -m "..."; git push`).

You can also edit this file directly on GitHub (press `.` or use the pencil icon) from
any computer — an agent can do the sync and photo handling later.
