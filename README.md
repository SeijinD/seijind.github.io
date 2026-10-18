# <div align="center">SeijinD - Personal Portfolio</div>

<div align="center">
  Personal portfolio of George Karanikolas, Android & Kotlin Multiplatform Engineer.
</div>

<br />

<div align="center">
  <img alt="Astro" src="https://img.shields.io/badge/Astro-BC52EE?style=for-the-badge&logo=astro&logoColor=white" />
  <img alt="Tailwind CSS" src="https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" />
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
  <img alt="GitHub Pages" src="https://img.shields.io/badge/GitHub%20Pages-222222?style=for-the-badge&logo=GitHub%20Pages&logoColor=white" />
</div>

<br />

## 🌟 Overview

Source code of my personal portfolio, built with Astro and deployed to GitHub Pages.

It is written for two readers: recruiters who want the facts fast, and developers who want to see how I work.

🔗 **Live Website**: [seijind.github.io](https://seijind.github.io/)

## ✨ Key Features

- **Live demos**: a playable Flip To Win card game in the hero and a working Preview Sandbox with theme, RTL, contrast and font scale controls.
- **Facts up front**: experience, current role, plugin and articles in one strip under the hero.
- **Easter egg**: try ↑ ↑ ↓ ↓ ← → ← → B A for a small terminal.
- **Content collections**: projects, experience, education, certifications, skills, articles and strengths live in typed JSON files, not in the markup.
- **Fast and private**: static output, self-hosted fonts through the Astro Fonts API, no trackers and no third-party requests.
- **Accessible**: semantic landmarks, visible focus, keyboard support and `prefers-reduced-motion` respected.

## 🛠️ Technologies Used

- **Astro 7**: static site generation, content collections, `astro:assets` images and the Fonts API.
- **Tailwind CSS 4**: styling through the Vite plugin, with design tokens in `src/styles/global.css`.
- **TypeScript**: content schemas and small vanilla scripts for the interactive parts.
- **Simple Icons**: brand icons stored as local SVGs in `src/icons`.
- **GitHub Actions**: builds and deploys to GitHub Pages with `withastro/action`.

## 📁 Project Structure

```
src/
├── components/      # Hero, demos, sections, terminal, icons
├── content/projects # One JSON file per project, plus its image
├── data/            # Experience, education, certifications, skills, articles, strengths
├── icons/           # Brand SVGs
├── layouts/         # Base layout with SEO and fonts
├── pages/           # index.astro
└── styles/          # Global CSS and Tailwind theme
```

## 🚀 Development

Requires Node.js 22.22 or newer.

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # output in dist/
npm run preview   # serve the built site
```

To change content, edit the JSON files in `src/content/projects` and `src/data`. The `order` field controls the order on the page.

## 📦 Deployment

Every push to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages. In the repository settings, **Pages > Source** must be set to **GitHub Actions**.

---
<div align="center">
  <strong>George Karanikolas (SeijinD)</strong><br>
  Android & KMP Engineer • Thessaloniki, Greece
</div>
