# 🌟 WAY Foundation — WeAreYouth Foundation

> *"Empowering Dreams, Building Futures"*
> A modern, responsive web platform built to amplify the mission of WeAreYouth Foundation — transforming lives through education, innovation, and community development initiatives that create lasting positive impact.

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=flat-square&logo=vercel)](https://way-foundation.vercel.app/)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react)](https://reactjs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](./LICENSE)

---

## 📖 Project Overview

**WAY Foundation** is the official digital platform for the **WeAreYouth Foundation** — a non-profit organization dedicated to empowering youth through education, skill development, mentorship, and community outreach.

The website serves as a mission-first hub where visitors can explore the foundation's journey, discover educational programs, browse their gallery, and read real success stories from community members, program graduates, and interns.

### 🎯 Problem It Solves
Youth-focused non-profits often lack a professional digital presence to communicate their impact, attract volunteers, and reach beneficiaries. This platform bridges that gap with a clean, data-driven interface that showcases the foundation's real-world reach — **500+ youth impacted**, **25+ programs**, **50+ community events**, and **100+ volunteers**.

### ✨ Key Highlights
- 🏠 Hero section with live impact statistics (500+, 25+, 50+, 100+)
- 📚 Educational Programs — Skill Development Workshops & Career Guidance Programs
- 🗺️ "Our Journey" page chronicling the foundation's milestones
- 🖼️ Gallery showcasing real community events and activities
- 💬 Success Stories from community leaders, program graduates & interns
- 📱 Fully responsive across all screen sizes and devices

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|-----------|
| Frontend Framework | React.js (v18) |
| Routing | React Router DOM |
| Styling | CSS3 / Tailwind CSS |
| Icons & UI | React Icons / Custom SVGs |
| Build Tool | Vite |
| Deployment | Vercel |
| Version Control | Git & GitHub |

---

## 📁 Project Structure

```
WAY_Foundation/
├── public/
│   ├── index.html              # HTML entry point
│   └── assets/                 # Static assets (favicon, OG images)
├── src/
│   ├── components/             # Reusable UI components
│   │   ├── Navbar.jsx          # Navigation — Home, Our Journey, Education, Gallery
│   │   ├── Footer.jsx          # Site footer
│   │   ├── Hero.jsx            # Hero banner with CTA buttons and tagline
│   │   ├── StatsBar.jsx        # Impact counters (500+, 25+, 50+, 100+)
│   │   ├── ProgramCard.jsx     # Card for each educational program
│   │   └── TestimonialCard.jsx # Success story / testimonial cards
│   ├── pages/
│   │   ├── Home.jsx            # Landing page — hero, stats, programs, testimonials
│   │   ├── OurJourney.jsx      # Foundation history and milestones
│   │   ├── Education.jsx       # Full educational programs listing
│   │   └── Gallery.jsx         # Photo/event gallery
│   ├── data/
│   │   ├── programs.js         # Educational programs content data
│   │   └── testimonials.js     # Success stories and testimonials data
│   ├── assets/                 # Images, icons, and media files
│   ├── styles/                 # Global CSS and component-level styles
│   ├── App.jsx                 # Root component with React Router setup
│   └── main.jsx                # Application entry point
├── .gitignore
├── package.json
├── vite.config.js              # Vite build configuration
└── README.md
```

---

## ⚙️ Installation & Setup Guide

### Prerequisites

Ensure the following are installed on your system:

- [Node.js](https://nodejs.org/) — v16 or higher
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/)

### Step-by-Step Setup

**1. Clone the repository**
```bash
git clone https://github.com/Krissh-stack/WAY_Foundation.git
```

**2. Navigate into the project directory**
```bash
cd WAY_Foundation
```

**3. Install all dependencies**
```bash
npm install
```
or with yarn:
```bash
yarn install
```

**4. Set up environment variables (if applicable)**

Create a `.env` file in the root directory and add:
```env
VITE_APP_TITLE=WeAreYouth Foundation
VITE_APP_BASE_URL=https://way-foundation.vercel.app
```
> ⚠️ Never commit your `.env` file. It is already included in `.gitignore`.

**5. Start the development server**
```bash
npm run dev
```

The app will be live at **`http://localhost:5173`**

**6. Build for production**
```bash
npm run build
```

**7. Preview the production build locally**
```bash
npm run preview
```

---

## 💻 How to Run in VS Code

1. **Open the project folder in VS Code**
   ```bash
   code .
   ```

2. **Install these recommended VS Code extensions**

   | Extension | Purpose |
   |-----------|---------|
   | ES7+ React/Redux Snippets | Fast React component boilerplate |
   | Prettier - Code Formatter | Auto-format code on save |
   | Tailwind CSS IntelliSense | Autocomplete for Tailwind classes |
   | ESLint | Real-time linting and error detection |
   | Path Intellisense | Auto-complete import file paths |

3. **Open the integrated terminal** with `` Ctrl + ` `` and run:
   ```bash
   npm run dev
   ```

4. Visit `http://localhost:5173` in your browser — Vite provides **instant hot module replacement (HMR)** so changes reflect immediately without a full reload.

---

## 🚀 Usage

After starting the development server, explore the full site using the top navbar:

### Navigation Pages

| Route | Page | What You'll Find |
|-------|------|-----------------|
| `/` | **Home** | Hero banner, impact stats, program highlights, success stories |
| `/journey` | **Our Journey** | Foundation history, milestones, and growth timeline |
| `/education` | **Education** | Skill Development Workshops + Career Guidance Programs |
| `/gallery` | **Gallery** | Photos and highlights from community events |

### Example User Flow
```
Home → Reads mission & sees impact stats (500+ youth, 25+ programs)
  ↓
Scrolls to "Our Educational Programs" — learns about workshops & career guidance
  ↓
Reads "Success Stories" from Aman Yadav, Anupam Agarwal & Krishnam Kesarwani
  ↓
Navigates to "Our Journey" → Browses "Gallery" → Gets in touch
```

---

## 📸 Screenshots

| Section | Preview |
|---------|---------|
| **Hero — Landing Page** | ![Hero](./public/assets/screenshots/hero.png) |
| **Our Educational Programs** | ![Programs](./public/assets/screenshots/programs.png) |
| **Success Stories** | ![Testimonials](./public/assets/screenshots/testimonials.png) |
| **Gallery** | ![Gallery](./public/assets/screenshots/gallery.png) |

> 📌 *Add screenshots to `public/assets/screenshots/` or visit the live demo below.*

🔗 **Live Demo:** [https://way-foundation.vercel.app/](https://way-foundation.vercel.app/)

---

## ✨ Features

- **🎨 Hero Section** — Full-width gradient banner (blue → purple) with tagline *"Empowering Dreams, Building Futures"*, subtitle, and dual CTA buttons
- **📊 Impact Statistics Bar** — Prominently displays 500+ youth reached, 25+ programs, 50+ events, 100+ volunteers
- **📚 Educational Programs** — Two flagship programs with icon-based cards:
  - 📘 **Skill Development Workshops** — Communication & Public Speaking, Leadership & Team Building, Entrepreneurship Training
  - 🎯 **Career Guidance Programs** — Career Assessment & Planning, Industry Expert Sessions, Job Placement Support
- **🗺️ Our Journey Page** — Foundation milestones and story timeline
- **🖼️ Gallery Page** — Visual documentation of community programs and events
- **💬 Success Stories** — Real testimonials from:
  - *Aman Yadav* — Community Leader
  - *Anupam Agarwal* — Program Graduate
  - *Krishnam Kesarwani* — Intern
- **🔗 Responsive Navbar** — Four-page navigation: Home · Our Journey · Education · Gallery
- **📱 Mobile-First Responsive Layout** — Seamless experience across all device sizes
- **⚡ Vercel CI/CD** — Auto-deploys to production on every push to `main`

---

## 🔮 Future Improvements

- [ ] **Donation Gateway** — Integrate Razorpay or Stripe for online contributions
- [ ] **CMS Integration** — Contentful or Sanity so the team can update content without code
- [ ] **Volunteer Registration Form** — Let users sign up and choose their program
- [ ] **Blog / News Section** — Impact stories, event recaps, and announcements
- [ ] **Multilingual Support** — Hindi and regional languages for wider accessibility
- [ ] **Animated Counters** — Scroll-triggered animation for impact stats (500+, 25+, etc.)
- [ ] **Contact Form with Email** — Inquiry form backed by EmailJS or Nodemailer
- [ ] **Dark Mode Toggle** — Improved accessibility and user preference support
- [ ] **SEO Optimization** — Meta tags, Open Graph cards, and sitemap.xml

---

## 🤝 Contributing

Contributions are welcome and appreciated! Here's how to get involved:

1. **Fork** this repository
2. **Create** your feature branch
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Commit** your changes with a clear, descriptive message
   ```bash
   git commit -m "feat: add animated impact counters on scroll"
   ```
4. **Push** to your fork
   ```bash
   git push origin feature/your-feature-name
   ```
5. **Open a Pull Request** to the `main` branch

### Guidelines
- Keep components small, focused, and reusable
- Follow the existing folder structure and naming conventions
- Test responsiveness across mobile, tablet, and desktop viewports
- Use [Conventional Commits](https://www.conventionalcommits.org/) for commit messages (`feat:`, `fix:`, `docs:`, etc.)
- For major changes or new pages, open an issue first to discuss

---

## 📄 License

This project is licensed under the **MIT License**.

```
MIT License

Copyright (c) 2025 Krissh-stack

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

<div align="center">
  <em>"Empowering Dreams, Building Futures"</em>
  <br/><br/>
  <a href="https://way-foundation.vercel.app/">🌐 Live Site</a> &nbsp;•&nbsp;
  <a href="https://github.com/Krissh-stack/WAY_Foundation/issues">🐛 Report a Bug</a> &nbsp;•&nbsp;
  <a href="https://github.com/Krissh-stack/WAY_Foundation/issues">💡 Request a Feature</a>
</div>
