# Starbucks® Pickup — Web Ordering & Order Management Platform

[![Deploy to GitHub Pages](https://github.com/Miito456/Starbucks/actions/workflows/pages/pages-build-deployment/badge.svg)](https://miito456.github.io/Starbucks/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![JavaScript](https://img.shields.io/badge/ES6+-Vanilla%20JS-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![CSS3](https://img.shields.io/badge/CSS3-Design%20System-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)

> A high-performance web platform tailored for the **Starbucks Pickup** model: explore the artisan catalog, customize orders, generate instant printable digital pickup tickets with barcodes, and track preparation statuses in real-time. Features multi-language support (English & Spanish).

---

## ☕ Concept: Starbucks Pickup

The **Starbucks Pickup** architecture is engineered for frictionless digital ordering and rapid in-store retrieval:

```
[ Browse Catalog ] ➔ [ Persistent Cart ] ➔ [ Checkout & Payment ] ➔ [ Barcode Pickup Ticket ] ➔ [ Live Order Monitor ]
```

1. **Product Discovery**: Browse handcrafted beverages, baked goods, and exclusive merchandise with responsive category filters.
2. **Persistent Cart & Customization**: Real-time quantity controls, unit price calculation, and cross-session persistence via `localStorage`.
3. **Checkout & Instant Discount**: Real-time RegEx validation on customer data and automatic 15% discount computation on credit card payments.
4. **Digital Barcode Receipt**: Instant generation of unique order tickets (`#SB-XXXX`) itemizing orders, dates, totals, and scannable barcode for counter pickup.
5. **Real-time Order Lifecycle Tracker**:
   - `⏳ Pending / In Queue`: Order created and awaiting barista confirmation.
   - `☕ In Preparation`: Beverage crafting in progress.
   - `✅ Ready for Pickup`: Order packaged and ready at the designated counter.

---

## 🌐 Bilingual Support (EN / ES)

The platform includes a dedicated internationalization engine (`JS/translations.js`):
* **Live Language Switcher**: Switch instantly between **English** and **Spanish** via the navigation bar.
* **Persistent Locale**: Saves user language preference in `localStorage` across page reloads and cross-page navigation.
* **Full Coverage**: Translates landing hero, product catalogs, shopping cart, checkout forms, ticket fields, and legal disclaimers.

---

## 🛠️ System Architecture & Technologies

Constructed with a zero-dependency, ultra-lightweight Vanilla Web stack prioritizing render performance, accessibility, and visual polish:

* **Semantic HTML5**: Responsive meta viewports, accessible data attributes (`data-i18n`), and semantic layout tags.
* **Custom CSS3 Design System (`theme.css`)**:
  - Consistent brand color tokens (`--sb-green`, `--sb-green-dark`, `--sb-accent-cream`, etc.).
  - Symmetrical **CSS Grid** architecture with fluid responsive centering.
  - Smooth microinteractions using tailored cubic beziers (`cubic-bezier(0.16, 1, 0.3, 1)`).
  - Dedicated print rules (`@media print`) for clean thermal receipt formatting.
* **Vanilla JavaScript ES6+ (`store.js`, `myscript.js`, `translations.js`)**:
  - **Reactive State Management**: Client-side storage for active cart items and historic pickup tickets.
  - **Dynamic Dom Renderer**: Live ticket creation and interactive order status progression.
  - **Non-blocking Toast Engine**: Custom animated toast notifications replacing native alerts.
  - **Cross-page Badge Synchronization**: Real-time shopping cart count updates on all navigation headers.

---

## 📂 Repository Structure

```text
├── index.html              # Main landing page featuring interactive drink selector & key highlights
├── menu.html               # Product catalog featuring 3D circle-clip cards & category filters
├── compra.html             # Online store, cart, customer checkout, ticket generator & order history
├── contacto.html           # Customer support center, official links & developer inquiry form
├── CSS/
│   ├── theme.css           # Global design tokens, typography, navbar, footer & toast notifications
│   ├── estilo.css          # Landing hero animations & dynamic background morphing
│   ├── estilomenu.css      # Symmetrical product grid & interactive card hover effects
│   ├── styles.css          # Shopping cart layout, checkout form & payment selectors
│   ├── estiloticket.css    # Digital receipt styles, barcode rendering & order status tracking
│   └── estilocontacto.css  # Customer support layout & contact form styles
├── JS/
│   ├── translations.js     # Bilingual dictionary (EN / ES) & live DOM internationalization engine
│   ├── store.js            # Shopping cart logic, RegEx validation, ticket generator & order history
│   └── myscript.js         # Beverage image slider, mobile drawer, sticky header & toast engine
└── Img/                    # Optimized brand visual assets, product PNGs & iconography
```

---

## 🚀 Live Demo

The platform is continuously deployed on **GitHub Pages**:

🔗 **[https://miito456.github.io/Starbucks/](https://miito456.github.io/Starbucks/)**

---

## 👨‍💻 Developer & Author

* **Miguel Ángel Ramos Soto**
* **GitHub**: [@Miito456](https://github.com/Miito456)
* **Email**: [Mito5524@gmail.com](mailto:Mito5524@gmail.com)

---

*Disclaimer: This project was developed for educational and technical portfolio demonstration purposes. Starbucks® and all associated logos are registered trademarks of Starbucks Corporation.*
