# 🌞 Wandering Sun — Personal Site Template

A minimalist personal website template for digital nomads, indie writers, and Web3 builders.  
Built with **Next.js 14 · CSS Variables · Markdown**.  
One-click deploy to Vercel. No database. No CMS. Just files.

---

## ✨ Features

- **Hero** — name, bio, avatar, social links
- **Travel Map** — interactive globe of cities you've lived in / visited
- **Blog** — Markdown posts with frontmatter, auto-sorted by date, filterable by category (`LIVING / WEB3 / AI / ESSAYS`)
- **Footer** — tagline, social links, copyright
- **Dark-accented warm theme** — charcoal background, amber/warm-white accents
- **Mobile-first** — responsive at every breakpoint
- **Static generation** — SSG via `generateStaticParams`, instant page loads

---

## 🚀 Quick Start

```bash
# 1. Clone
git clone https://github.com/the-wanderingsun/wandering-sun-template.git my-site
cd my-site

# 2. Install
npm install

# 3. Run locally
npm run dev
# → open http://localhost:3000
```

---

## 🛠 Customize

### 1 · Personal Info

Edit `components/sections/Hero.tsx` and `components/sections/Footer.tsx` — look for every `✏️ Edit` comment.

```tsx
// Hero.tsx — replace YOUR NAME, YOUR_HANDLE, YOUR_XIAOHONGSHU_URL, etc.
<h1 className="hero-heading">
  YOUR
  <em>NAME</em>
</h1>
```

### 2 · Avatar

Replace `public/images/avatar.png` with your own photo (square, min 280 × 280 px recommended).

### 3 · Travel Map

Edit `content/cities.ts` — add / remove cities, set `type: 'current' | 'lived' | 'visited'`.

```ts
{
  id: 'lisbon',
  name: 'LISBON',
  region: 'SOUTHERN EUROPE · 葡萄牙',
  lat: 38.72, lon: -9.14,
  type: 'current',
  statusText: 'Based here · 2026',
  coords: '38.716° N · 9.139° W',
  desc: 'Your personal take on this city.',
  articles: [],
}
```

### 4 · Blog Posts

Create a `.md` file anywhere under `content/blog/`:

```
content/blog/living/my-first-city.md
content/blog/ai/my-ai-workflow.md
```

**Frontmatter template:**

```md
---
title: 'Your Post Title'
slug: 'your-post-slug'
publishedAt: '2026-01-01'
category: 'LIVING'           # LIVING | WEB3 | AI | ESSAYS
location: 'LIVING · CITIES'
excerpt: 'One sentence summary shown on the card.'
image: '/images/cover-living.png'
imageAlt: 'Description for accessibility'
---

Your Markdown content here.
```

**Scaffold a new post in one command:**

```bash
npm run new:post -- "My Article Title" --category LIVING
```

### 5 · Cover Images

Drop your cover images into `public/images/`.  
Recommended size: **1200 × 630 px** (16:9).  
Four sample covers are included: `cover-living.png`, `cover-web3.png`, `cover-ai.png`, `cover-essays.png`.

---

## 📁 Project Structure

```
├── app/
│   ├── page.tsx              # Home (Hero + Map + Blog)
│   ├── blog/[id]/page.tsx    # Post detail
│   └── globals.css           # All styles (CSS variables)
├── components/
│   └── sections/
│       ├── Hero.tsx          # ✏️ Edit personal info here
│       ├── TravelMap.tsx     # Interactive globe
│       ├── Blog.tsx          # Blog grid + filter tabs
│       └── Footer.tsx        # ✏️ Edit links here
├── content/
│   ├── cities.ts             # ✏️ Your travel history
│   └── blog/
│       ├── living/           # LIVING category posts
│       ├── web3/             # WEB3 category posts
│       ├── ai/               # AI category posts
│       └── essays/           # ESSAYS category posts
├── lib/
│   └── posts.ts              # Auto-scans content/blog/ for .md files
├── public/images/            # Avatar + cover images
└── scripts/
    └── new-post.mjs          # CLI scaffold tool
```

---

## ☁️ Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/the-wanderingsun/wandering-sun-template)

Or manually:

```bash
npm i -g vercel
vercel --prod
```

Connect your GitHub repo in the Vercel dashboard for automatic deploys on every push.

---

## 🧩 Tech Stack

| Layer | Choice |
|-------|--------|
| Framework | Next.js 14 (App Router) |
| Styling | CSS Variables (no Tailwind) |
| Markdown | gray-matter + remark |
| Globe | globe.gl + Three.js |
| Hosting | Vercel (free tier) |
| Language | TypeScript |

---

## 📄 License

MIT — free to use, modify, and deploy for personal or commercial projects.  
Attribution appreciated but not required.

---

*Built by [太阳在世界游荡](https://github.com/the-wanderingsun) · STAY WILD.*
