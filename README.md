# Virexo — Business Website Expansion

A fully responsive business homepage built for **Virexo Innovations** as
part of a Web Development internship program (Week 2: Business Website
Expansion). This is an internship project created *for* Virexo Innovations
and is **not** an official corporate website.

Front-end for **Virexo Innovations**, a digital solutions company, built
with plain HTML5, CSS3 and vanilla JavaScript — no frameworks, no build
step, no dependencies to install.

---

## Project description

Virexo Innovations is positioned as a senior digital studio that carries a
project from strategy through design to a shipped product. The homepage
introduces the company, explains its four core services (Web Development,
UI/UX Design, Digital Solutions, and SEO & Growth Marketing), and ends
with a clear call-to-action to start a project.

**Design direction:** a light, cool-toned interface (`#F3F5F9` background)
paired with a royal-blue / teal accent system, `Space Grotesk` for display
type and `Inter` for body text. The signature visual is an animated
"signal path" diagram in the hero that draws itself on load, connecting
labelled nodes (*strategy → design → build → test → launch → grow*) to
visually represent the company's one-team, start-to-finish process. The
contact section switches to a dark panel (`#12131C`) to separate the
conversion moment from the rest of the page.

---

## Summary of improvements made from Week 1

Week 1 delivered the initial homepage skeleton (nav, hero, theme toggle,
mobile menu). This Week 2 submission continues directly from that build
and expands it into a business-focused homepage:

- **Rebranded** all copy, metadata, header/footer, and contact details
  from the placeholder studio name to **Virexo Innovations**.
- **Expanded Services** into four clearly presented digital services,
  each with an icon, description and feature list: Web Development,
  UI/UX Design, Digital Solutions, and the newly added SEO & Growth
  Marketing.
- **Added a full About Virexo Innovations section** explaining the
  company's mission and how it works, in concise, professional language.
- **Strengthened the call-to-action** in the Contact section with a more
  direct, benefit-led headline, alongside a working, validated contact
  form.
- **Verified all navigation** — every header, mobile-menu, and footer
  link points to a real, built section (`#top`, `#about`, `#services`,
  `#contact`); none are placeholders.
- **Refined visual hierarchy and responsiveness** — the services grid
  now scales from 4 columns (desktop) → 2 columns (tablet) → 1 column
  (mobile) instead of 3, and spacing/typography were rebalanced to fit
  the fourth service card.
- **Added credibility and trust elements** to bring the page up to a
  professional business-site standard:
  - A "Trusted by" logo strip beneath the hero
  - A dedicated four-step **Process** section ("Discover → Design →
    Build → Launch & grow") so visitors know exactly how an engagement
    runs
  - A **Case Study** section with a fictional client result (load time,
    conversion lift, delivery time) and a browser-frame visual
  - A three-quote **Testimonials / Results** section with named clients
    and roles
  - A **FAQ** section (pricing, timeline, tech stack, post-launch
    support) as expandable accordion items
  - Sharper, more confident copy throughout (hero, About, Contact CTA)
- **Added scroll-reveal animation** — section headers and cards fade
  and rise into view as the visitor scrolls, staggered across grid
  items, and respects `prefers-reduced-motion`.
- **Added Open Graph / Twitter Card meta tags** so the page renders a
  proper title, description, and preview when shared on social platforms
  or messaging apps.
- Kept the existing responsive structure, dark/light theme toggle, and
  accessibility features from Week 1, extending rather than replacing
  them.

---

## Summary of improvements made this pass (Professional Polish)

Building on the Week 2 business-website expansion, this pass focuses on
production-readiness and professional presentation rather than new
content sections:

- **Real favicon asset** — replaced the inline data-URI favicon with a
  proper file (`assets/images/favicon.svg`), matching how a production
  site would ship it.
- **SEO fundamentals** — added a canonical URL tag, `robots.txt`,
  `sitemap.xml`, and `ProfessionalService` structured data (JSON-LD) so
  the page is ready for indexing and can render rich search results.
- **Accessibility** — added a keyboard-focusable "Skip to main content"
  link so keyboard and screen-reader users can bypass the navigation.
- **Spam protection on the contact form** — added a hidden honeypot
  field (invisible and unreachable to real visitors, but auto-filled by
  most bots) so automated submissions are silently dropped without
  adding friction for real users.
- **Back-to-top control** — a floating button appears after scrolling
  past the hero and smooth-scrolls back to the top, useful once the page
  grew to nine sections.
- **Footer disclosure clarified** — separated the copyright line from
  the "this is a training-program concept site" disclosure so both read
  clearly rather than running together in one sentence.

---

## Folder structure

```
Virexo-Digital-Business-Website/
│
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   └── images/
│       └── favicon.svg
├── robots.txt
├── sitemap.xml
└── README.md
```

---

## Features

- Sticky, translucent navigation bar with scroll-aware shadow, active-link
  highlighting (scrollspy), and a responsive hamburger menu on mobile
- **Dark / light theme toggle** — accessible from the navbar (and the
  mobile menu), remembers the user's choice via `localStorage`, respects
  the system's `prefers-color-scheme` on first visit, and applies the
  theme before first paint so there's no flash of the wrong theme
- Hero section with an animated SVG "signal path" illustration, primary
  and secondary CTAs, and quick company stats
- A "Trusted by" client logo strip for social proof
- About Virexo Innovations section with mission and audience-fit value
  statements
- A four-step Process section (Discover, Design, Build, Launch & grow)
  explaining exactly how an engagement runs
- A Case Study section with real-looking metrics and a browser-frame
  visual of a fictional client project
- Services section with **four** service cards (Web Development, UI/UX
  Design, Digital Solutions, SEO & Growth Marketing), each with an icon,
  description, feature list and hover interaction
- A Testimonials section with three client quotes, names and roles
- A FAQ accordion covering pricing, timeline, tech stack and support
- Contact section with a strong, benefit-led call-to-action, a
  JavaScript-validated form (name, email, message), and company contact
  details
- Footer with brand, quick links, services, contact info, social icons
  and copyright — all links functional
- Smooth scrolling for all in-page navigation links
- Subtle entrance and hover animations throughout
- Fully responsive from desktop down to small mobile screens
- Semantic HTML, accessible focus states, `alt`/ARIA labelling throughout

---

## How to run the website locally

No build tools or installation required.

**Option 1 — open directly**
1. Download or clone the project folder.
2. Double-click `index.html` (or right-click → *Open with* your browser).

**Option 2 — local server (recommended, avoids any browser file-path quirks)**

Using Python (already installed on most systems):
```bash
cd Virexo-Digital-Business-Website
python3 -m http.server 8000
```
Then open `http://localhost:8000` in your browser.

Using VS Code: install the **Live Server** extension, right-click
`index.html`, and choose **Open with Live Server**.

---

## How to test before submission

1. **Desktop check** — open `index.html` at full browser width. Confirm the
   nav bar, hero layout, four-column services grid and footer columns all
   display correctly.
2. **Resize check** — shrink the browser window gradually (or use DevTools
   responsive mode) through tablet (~768px) and mobile (~375px) widths.
   Confirm the nav collapses into the hamburger menu, the hero visual
   stacks above the copy, and the services grid drops from 4 → 2 → 1
   columns.
3. **Navigation check** — click every nav link (desktop, mobile, and
   footer) and confirm smooth scrolling to the correct section, and that
   the active link updates as you scroll.
4. **Mobile menu check** — open the hamburger menu, confirm it opens/closes
   correctly and that tapping a link closes the menu and scrolls to the
   section.
5. **Form validation check** — try submitting the contact form empty,
   with an invalid email, and with a short message; confirm the correct
   inline errors appear. Then submit valid data and confirm the success
   message appears and the form resets.
6. **Console check** — open DevTools → Console and confirm there are no
   errors on load or during interaction.
7. **Accessibility spot check** — tab through the page with the keyboard
   and confirm every interactive element shows a visible focus outline.

---

## GitHub upload instructions

1. Create a new repository on GitHub (e.g.
   `virexo-business-website-expansion`). Do **not** initialize it with a
   README (this project already has one).
2. From inside the `Virexo-Digital-Business-Website` folder, run:
   ```bash
   git init
   git add .
   git commit -m "Virexo Innovations business website expansion"
   git branch -M main
   git remote add origin https://github.com/<your-username>/virexo-business-website-expansion.git
   git push -u origin main
   ```
3. Confirm on GitHub.com that `index.html`, the `css/`, `js/` and
   `assets/` folders, and `README.md` are all present in the repository.
4. (Optional) Enable **GitHub Pages** in the repository settings
   (*Settings → Pages → Deploy from branch → `main` / root*) to get a live
   demo link to include in your internship submission.

### Files to include in the repository

- `index.html`
- `css/style.css`
- `js/script.js`
- `assets/images/` (kept even though currently empty, via a `.gitkeep`
  file if your Git client won't track empty folders)
- `README.md`

---

## Suggested GitHub repository description

> Business-focused homepage for Virexo Innovations, a digital solutions
> company — built with semantic HTML5, CSS3 and vanilla JavaScript as
> part of a Web Development internship program. Features an animated
> hero visual, four service cards, an About section, a validated contact
> form with a strong call-to-action, and a fully responsive layout from
> desktop to mobile.

---

## Notes

- All content (copy, stats, contact details) is original fictional content
  written for this project — no placeholder, lorem ipsum, or unfinished
  sections are used.
- All visuals (logo mark, hero diagram, decorative frame, service icons)
  are inline SVG and CSS, so the project has zero external image
  dependencies and loads instantly.
- Fonts are loaded from Google Fonts (`Space Grotesk`, `Inter`,
  `IBM Plex Mono`); an internet connection is needed for the intended
  typography, though the layout remains fully functional on a system
  fallback font if fonts fail to load.
