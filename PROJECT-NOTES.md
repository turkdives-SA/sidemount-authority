# SIDEMOUNT AUTHORITY — PROJECT NOTES

A handoff reference for this website. Paste the contents of this file (or attach it)
at the start of any new chat so the assistant has full context. The assistant does
not remember previous chats — this file is the memory.

---

## WHAT THIS SITE IS

- **Live site:** https://sidemountauthority.com (live, SSL on)
- **Owner:** "Turk" — RAID Tech Trimix Sidemount Instructor, RAID Crossover Instructor
  Trainer, tech + CCR instructor, sidemount specialist. Based partly in Bali at Prana Dive.
- **YouTube:** @SIDEMOUNT_AUTHORITY  |  **Instagram:** @sidemount_authority
- **Brand voice:** "Precision. Balance. Control." Direct, blunt, no-BS, short punchy
  sentences, rhetorical question-then-answer, repetition for emphasis. Signature phrases:
  "Be better. Do better." / "1% better today than yesterday." / "No BS."
- **Aesthetic:** Dark instrument-panel / HUD. Orange signal accent.

## TECH STACK

- **Generator:** Eleventy (11ty) static site
- **CMS:** Decap CMS at /admin/ (Netlify Identity + Git Gateway, invite-only)
- **Host:** Netlify (auto-deploys from GitHub main branch, ~30-90s)
- **Repo:** https://github.com/turkdives-SA/sidemount-authority
- **Local repo:** C:\Users\Turk\Downloads\sidemount-authority_2\sidemount-authority
- **Build subdomain:** https://sidemountauthoritybuild.netlify.app

## DOMAIN / DNS / EMAIL

- **Registrar + DNS:** Network Solutions (NOT Bluehost — Bluehost can be cancelled).
  Manage DNS under: Domains > Advanced Tools > Manage Advanced DNS Records.
- **A records:** @ and www both point to 75.2.60.5 (Netlify). TTL min = 900s / "1 Hour".
- **Email:** Runs through Network Solutions (webmail at networksolutionsemail.com),
  via CNAMEs to netsolmail.net. Not affected by cancelling Bluehost.

## SEO / ANALYTICS

- **Google Analytics 4 Measurement ID:** G-ESYE8E56BS (gtag snippet in base.njk before </head>)
- **Google Search Console:** verified via TXT record; sitemap.xml submitted.
- **Structured data:** JSON-LD (Organization, WebSite, Person) in base.njk before </head>.
- Meta descriptions are keyword-rich on every page.

## DESIGN TOKENS (CSS variables in src/css/style.css)

--sa-void #0A0A0B | --sa-void-soft #101114 | --sa-panel #14161A
--sa-steel #2A2D33 | --sa-steel-light #3B3F47
--sa-chrome #E8E9EB | --sa-chrome-dim #9B9FA6 | --sa-chrome-faint #5C606A
--sa-signal #FF5A1F (orange) | --sa-signal-dim #C2451A
--sa-depth #0C2433 | --sa-depth-light #123347
Fonts: Inter (display/body), IBM Plex Mono (HUD/labels)

## SITE STRUCTURE

Pages (in src/): index.njk (Home), training.njk, articles.njk, instructors.njk,
about.njk, contact.njk, thanks.njk, feed.njk (RSS), sitemap.njk
Layouts: src/_layouts/base.njk, post.njk
Includes: src/_includes/header.njk, footer.njk
Config: .eleventy.js (repo root — hidden locally, edit on GitHub), netlify.toml,
admin/config.yml, admin/index.html

### Collections
- **Articles** — posts live in src/posts/ as .md files. CMS section is labeled
  "Articles" (internal name still "posts"). Each post has a `category` select field:
  Gear (gear) | Safety & Standards (safety) | Industry (industry) | Training (training).
  /articles/ has JS filter buttons + color-coded category badges + an empty-state message.
- **Courses** — folder collection: each course is its own .md in src/courses/.
  Has src/courses/courses.json with {"tags":["courses"], "permalink": false}.
  .eleventy.js builds a "courses" collection sorted by `order`. training.njk loops it.
- **Instructors** — folder collection: each instructor is its own .md in src/instructors/.
  Has src/instructors/instructors.json with {"tags":["instructors"], "permalink": false}.
  .eleventy.js builds an "instructors" collection sorted by name. instructors.njk loops it.
- **Credentials** — left as a file collection (works fine, do not change).

## HARD-WON GOTCHAS (read before editing)

1. **YAML frontmatter** breaks on unquoted colons inside values AND on em dashes (—).
   Always wrap descriptions in "quotes" and avoid colons/em dashes inside values.
2. **JavaScript inside .njk files** must be wrapped in {% raw %} ... {% endraw %},
   or Nunjucks tries to parse the { } and the build fails.
3. **.eleventy.js is hidden locally** — edit it via the GitHub web editor.
4. **Permalinks:** course/instructor data JSON files set "permalink": false so Eleventy
   doesn't generate stray pages (this previously caused a /contact/ 404).
5. **Page permalink must be a folder, not a file** — use `permalink: /contact/`
   (builds /contact/index.html), NOT `/contact.html`.
6. **Netlify cache:** if a change won't show, Deploys > Trigger deploy >
   "Clear cache and deploy site". Also flush local DNS: `ipconfig /flushdns`.
7. **Decap body field is a rich-text editor** — pasted Markdown bullet lists flatten into
   one paragraph. Use the bullet-list toolbar button, or toggle Markdown mode.
8. **Card class names must match style.css:** article/post cards use
   `.post-card`, `.post-card-image` (wraps the <img>, gives 16:9 crop), `.post-card-body`,
   and the title is an <h3>. Using `post-card__body` (double underscore) or a bare <img>
   breaks the grid because the crop/styling never applies.

## CONTACT FORM

- Netlify Forms (form name="contact", data-netlify="true", netlify-honeypot, NO action attr).
- Form detection must be ON in Netlify (Forms > Enable form detection) + a redeploy.
- Email notifications: Netlify > Project configuration > Notifications > add Email
  notification on Form submission event.

## WORKFLOW FOR EDITS

Most edits are done in the GitHub web editor (pencil > edit > commit to main), which
auto-triggers a Netlify deploy. Watch failed builds in Netlify > Deploys > Building log
(YAML errors are the most common cause). After deploy, hard-refresh (Ctrl+Shift+R) or
use incognito.

## CURRENT STATUS / OPEN ITEMS

- ✅ Site live, SSL on, all pages working, contact form + email notifications working.
- ✅ CMS editing works for Articles, Courses, Instructors, Home, Site Settings, Credentials.
- ✅ Gear Tips removed from nav; replaced by Articles with category filters.
- ✅ GA4 + Search Console + structured data in place.
- ⚠️ /articles/ grid: card class-name fix committed (post-card-image / post-card-body / h3).
  Grid mostly works, BUT the latest "Elite Awards" card sits lower than the other two —
  likely it has no hero_image or a differently-sized one, breaking row alignment.
  Fix direction: ensure every card has a 16:9 image (or placeholder) and/or force equal
  card heights on .posts-grid.
- ⬜ Individual post pages: the "Hose Retainers" and "Ratios. Standards. Accountability"
  posts have full infographic HTML blocks pasted into the body with hardcoded sizes that
  don't sit cleanly in the .post-content column — needs responsive cleanup.
- ⬜ Add real bio text to About page.
- ⬜ Ongoing: publish more articles, add more recommended instructors.
