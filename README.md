# Sidemount Authority

Eleventy + Decap CMS + Netlify static site for sidemountauthority.com.

---

## Local Development

```bash
npm install
npm start
```

Site runs at http://localhost:8080

---

## Project Structure

```
sidemount-authority/
├── src/
│   ├── _layouts/       # base.njk, post.njk
│   ├── _includes/      # header.njk, footer.njk
│   ├── _data/          # site.json, home.json, courses.json, credentials.json, instructors.json
│   ├── css/            # style.css (full design system)
│   ├── js/             # main.js
│   ├── images/         # all WebP assets + favicon.svg
│   ├── posts/          # blog posts (Markdown)
│   ├── index.njk       # Home
│   ├── training.njk    # Training courses
│   ├── gear-tips.njk   # Blog index
│   ├── instructors.njk # Instructor directory
│   ├── about.njk       # About
│   ├── contact.njk     # Contact form
│   ├── feed.njk        # RSS feed → /feed.xml
│   └── sitemap.njk     # Sitemap → /sitemap.xml
├── admin/
│   ├── index.html      # Decap CMS entry point
│   └── config.yml      # CMS field mappings
├── .eleventy.js        # Eleventy config
├── netlify.toml        # Netlify build config
└── package.json
```

---

## Writing a Gear Tip Post

Create a new `.md` file in `src/posts/` with this frontmatter:

```yaml
---
title: "Your Post Title"
description: "One-sentence excerpt for cards and meta."
date: 2025-07-01
hero_image: /images/your-image.webp
hero_image_alt: "Descriptive alt text"
readTime: 5
tags:
  - posts
  - configuration   # add topic tags here
---

Your content here in Markdown...
```

Or use the Decap CMS admin at `/admin/` — no code required.

---

## Deployment (Netlify)

1. Push this repo to GitHub
2. Connect to Netlify → New site from Git
3. Build command: `npm run build`
4. Publish directory: `_site`
5. Enable **Netlify Identity** in Site settings → Identity
6. Enable **Git Gateway** in Identity → Services
7. Invite yourself as a user
8. Visit `yourdomain.com/admin/` to access the CMS

---

## Domain Switch (from Bluehost)

1. In Netlify: Domains → Add custom domain → sidemountauthority.com
2. Netlify provides nameservers (e.g. `dns1.p05.nsone.net`)
3. In Bluehost: update nameservers to Netlify's
4. Wait for DNS propagation (up to 48h, usually faster)
5. Netlify auto-provisions SSL via Let's Encrypt

---

## Design System

| Token | Value | Usage |
|---|---|---|
| `--sa-void` | `#0A0A0B` | Primary background |
| `--sa-panel` | `#14161A` | Card backgrounds |
| `--sa-signal` | `#FF5A1F` | Accent / CTA orange |
| `--sa-chrome` | `#E8E9EB` | Primary text |
| `--sa-chrome-dim` | `#9B9FA6` | Secondary text |

Fonts: Inter (display + body) · IBM Plex Mono (HUD / labels)
