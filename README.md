# Miracle Mission International Outreach Inc — Website

A production-ready, fully responsive nonprofit website built with React, Tailwind CSS, and Framer Motion.

**Domain:** miraclemissionioi.net  
**Email:** support@miraclemissionioi.net

---

## Quick Start

### Prerequisites
- Node.js 18+ (https://nodejs.org)
- npm 9+

### Installation

```bash
cd miracle-mission
npm install
npm run dev
```

Site will be available at http://localhost:5173

---

## Build for Production

```bash
npm run build
```

Creates an optimized `dist/` folder ready for deployment.

### Deploy Options
- **Netlify:** Drag and drop the `dist/` folder at netlify.com/drop
- **Vercel:** `vercel --prod` from the project root
- **GitHub Pages:** Push `dist/` contents to gh-pages branch
- **Traditional hosting:** Upload `dist/` contents to your public web directory

---

## Project Structure

```
miracle-mission/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   └── Footer.jsx
│   │   ├── sections/
│   │   │   ├── Hero.jsx
│   │   │   ├── ImpactStats.jsx
│   │   │   ├── MissionSection.jsx
│   │   │   ├── ServicesPreview.jsx
│   │   │   ├── DonateSection.jsx
│   │   │   ├── EventsPreview.jsx
│   │   │   ├── GlobalOutreach.jsx
│   │   │   └── PartnersPreview.jsx
│   │   └── ui/
│   │       ├── AnimatedCounter.jsx
│   │       ├── ImgPlaceholder.jsx
│   │       ├── PageHeader.jsx
│   │       └── ScrollToTop.jsx
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── AboutPage.jsx
│   │   ├── ServicesPage.jsx
│   │   ├── DonatePage.jsx
│   │   ├── EventsPage.jsx
│   │   ├── GalleryPage.jsx
│   │   ├── WishlistPage.jsx
│   │   ├── SponsorshipPage.jsx
│   │   └── ContactPage.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── vite.config.js
└── package.json
```

---

## Adding Real Images

Replace ImgPlaceholder components with real images:

```jsx
// Before
<ImgPlaceholder label="Community Outreach" aspectRatio="aspect-video" className="rounded-2xl" />

// After
<img
  src="/images/community-outreach.jpg"
  alt="Community Outreach"
  className="aspect-video rounded-2xl object-cover w-full"
/>
```

Place images in the `public/images/` folder.

---

## Pages and Routes

| URL           | Page          |
|---------------|---------------|
| /             | Home          |
| /about        | About Us      |
| /services     | Services      |
| /donate       | Donate & Volunteer |
| /events       | Events        |
| /gallery      | Gallery       |
| /wishlist     | Wishlist      |
| /sponsorship  | Sponsorship   |
| /contact      | Contact       |

---

## Tech Stack

- React 18 + Vite
- Tailwind CSS 3
- Framer Motion
- React Router v6
- React Helmet Async (SEO)
- React CountUp
- React Intersection Observer
- Lucide React (icons)

---

## Contact

Miracle Mission International Outreach Inc  
466 Simpson Street, McDonough, Georgia 30253  
support@miraclemissionioi.net | 404-454-9854  
Thursday and Friday, 10:00am to 2:00pm
