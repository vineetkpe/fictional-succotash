# Hostamble — Web Hosting & Domain Services Platform

A high-performance, modern Astro JS web application converted from the Hostamble HTML/CSS template with 100% design fidelity, zero client framework JS overhead, component-driven architecture, and instant link prefetching.

## 🚀 Key Features

- **100% Exact Design**: Every layout, gradient, animation, typography, and responsive element is preserved identically.
- **Component Architecture**: Modular Astro layouts and components (`Layout`, `AuthLayout`, `Header`, `Footer`, `MobileMenu`, `SearchPopup`).
- **Zero Client Overhead**: Astro pre-renders 100% static HTML with zero bloated JavaScript bundles.
- **Instant Prefetching**: Automatic link prefetching on hover for sub-50ms page transitions.
- **Interactive Functionality**:
  - Live Shared & WordPress Hosting pricing switchers (Monthly / Semiannual / Annual).
  - Domain search interface and TLD pricing tables.
  - Interactive hero banner with typewriter text animation.
  - Promotional countdown timers.
  - Responsive mobile drawer navigation.

## 📁 Project Structure

```
├── public/
│   ├── assets/
│   │   ├── css/          # Bootstrap, RemixIcon, Aceorbit, Slick & custom stylesheets
│   │   ├── fonts/        # Webfonts and icon fonts
│   │   ├── images/       # High-res banners, logos, client logos, and shapes
│   │   └── js/           # Vendor scripts (jQuery, Slick, Magnific, WOW, SAL)
│   ├── favicon.ico
│   ├── favicon.png
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   ├── MobileMenu.astro
│   │   └── SearchPopup.astro
│   ├── layouts/
│   │   ├── AuthLayout.astro
│   │   └── Layout.astro
│   └── pages/
│       ├── 404.astro
│       ├── about-us.astro
│       ├── contacts.astro
│       ├── domain-search.astro
│       ├── index.astro
│       ├── legal-agreement.astro
│       ├── login.astro
│       ├── privacy-policy.astro
│       ├── refund-and-cancellation-policy.astro
│       ├── register.astro
│       ├── shared-hosting.astro
│       ├── transfer-domain.astro
│       └── wordpress-hosting.astro
├── astro.config.mjs
└── package.json
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ (tested on Node.js v24)
- npm, pnpm, or bun

### Installation

```bash
# Clone the repository
git clone https://github.com/vineetkpe/fictional-succotash.git
cd fictional-succotash

# Install dependencies
npm install
```

### Development Server

Start the local development server:

```bash
npm run dev
```

Open `http://localhost:4321` in your browser.

### Production Build

Build the production-ready static site:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## 📄 License

All rights reserved © 2020 - 2026 Hostamble.
