# 🚀 Nexa Digital — Landing Page Template

A modern, bilingual (EN/AR) landing page built with pure **HTML, CSS & Vanilla JavaScript**.
No frameworks. No build tools. Just clean, production-ready code.

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License: MIT](https://img.shields.io/badge/License-MIT-2563eb?style=flat-square)](./LICENSE)

<!-- Add your live link after deploying, e.g. https://<username>.github.io/<repo>/ -->

---

## ✨ Features

- 🌍 **Bilingual** — English & Arabic with automatic RTL / LTR switching (text, placeholders, ARIA labels, page title)
- 🌓 **Dark & Light modes** — follows the system preference until the visitor picks one
- 💾 **Persistent** — theme and language saved in `localStorage`, applied before first paint (no flash)
- 📱 **Fully responsive** — mobile drawer menu, tablet, and desktop layouts
- ♿ **Accessible** — semantic landmarks, skip link, visible focus, ARIA states, `prefers-reduced-motion` support
- ✉️ **Validated contact form** — inline bilingual errors, honeypot spam trap, optional real backend
- 🧭 **Scroll spy** — the current section is highlighted in the navbar
- 🎨 **Themeable** — all colors & spacing driven by CSS variables (brand colors match the logo)
- ⚡ **Zero dependencies** — no npm, no bundler, no framework

---

## 🛠 Tech Stack

| Layer | Technology |
| :--- | :--- |
| Markup | HTML5 (semantic) |
| Styling | CSS3 (Variables, Grid, Flexbox, logical properties) |
| Scripting | Vanilla JavaScript (ES2020+) |
| Icons | Font Awesome 6 (CDN) |
| Fonts | Google Fonts — Inter & Cairo |

---

## 📁 Project Structure

```
.
├── index.html
├── css/
│   └── Style.css
├── js/
│   └── Script.js
├── imgs/
│   ├── logo.png              # navbar / footer logo
│   ├── favicon-32.png        # browser tab icon
│   ├── apple-touch-icon.png  # iOS home-screen icon
│   ├── icon-192.png          # Android / social preview icon
│   └── logo-original.jpg     # full-size source logo
├── LICENSE
└── README.md
```

---

## ▶️ Getting Started

No installation needed — open `index.html` in a browser.

For the best experience (fonts, smooth anchors), serve it locally, for example:

```bash
npx serve .
# or
python -m http.server 8000
```

---

## ⚙️ Customization

| What | Where |
| :--- | :--- |
| Colors, spacing, radii | `:root` and `[data-theme="dark"]` in `css/Style.css` |
| All text (EN & AR) | `translations` object at the top of `js/Script.js` |
| Logo & icons | files in `imgs/` |
| Social links | footer in `index.html` — replace the disabled `<span>`s with `<a href="...">` |

### Making the contact form send real emails

By default the form runs in **demo mode** (it validates and shows a success message, but sends nothing).
To receive messages, create a form endpoint (e.g. [Formspree](https://formspree.io), Getform, Basin)
and put its URL in the form's `data-endpoint` attribute:

```html
<form class="contact-form" id="contactForm" novalidate data-endpoint="https://formspree.io/f/your-id">
```

---

## 🚀 Deploy

Works on any static host: GitHub Pages, Netlify, Vercel, Cloudflare Pages.
On GitHub Pages: push the repo → **Settings → Pages** → deploy from the `main` branch root.

---

## 📄 License

[MIT](./LICENSE) © 2025 Mariam Nasser
