# 🦷 Dentiland | Pediatric & Family Dental Care

\<div align="center">

### Modern E-Commerce Platform & Clinical Portal for Pediatric Oral Care

**Crafted with React 19, TypeScript, Vite, and Tailwind CSS v4**




\


[Preview](#-preview) • [Live Demo](#-demo) • [Key Features](#-key-features) • [Tech Stack](#-tech-stack) • [Project Structure](#-project-structure) • [Getting Started](#-getting-started)

\</div>

---

## 👀 Preview

Get a preview of the Dentiland experience, designed to make children's oral care approachable, engaging, and accessible.

\<!-- Replace the image paths below with your actual screenshots. -->

\<div align="center">



*Dentiland — Homepage Preview*

\</div>

> **Note:** Add your actual website screenshots to `public/assets/` and update the image paths above. Suggested screenshots include the homepage, product catalog, product details, shopping cart, and mobile layout.

---

## 🚀 Demo

Experience Dentiland and explore its e-commerce and clinical consultation features.

\<div align="center">

### 🌐 Explore Dentiland

**[Visit the Live Demo](YOUR_DEPLOYED_WEBSITE_URL)**

\</div>

> **Note:** Replace `YOUR_DEPLOYED_WEBSITE_URL` with your actual deployed website URL, such as your Vercel, Netlify, or custom domain link.

---

## 📖 About The Project

**Dentiland** is a modern, responsive e-commerce web application and clinical hub dedicated to children's oral health, dental hygiene, and orthodontics.

Engineered with a child-friendly yet medically credible design language, Dentiland combines soft glassmorphism, soothing sky-blue gradients, and fluid micro-interactions to create a welcoming shopping and consultation experience for both parents and kids.

The platform brings together a curated oral-care product catalog, interactive shopping tools, educational dental content, and an online consultation interface in one cohesive experience.

---

## ✨ Key Features

### 🧭 Floating Pill Island Navigation

- **Mobile Navigation:** A minimalist floating bar featuring a hamburger drawer trigger, brand identity, quick search, and a shopping bag with a dynamic item count.
- **Desktop Navigation:** A 3D tooth brand logo, primary navigation links, live search dropdown, wishlist toggle, online consultation trigger, and shopping cart drawer opener.

### 🎨 Hero Section with Seamless Curved Boundary

- High-resolution pediatric dentistry illustrations and 3D character assets.
- Custom responsive SVG bottom curve transition.
- Smooth visual transitions that adapt to different screen sizes.
- Friendly, modern visual identity tailored to pediatric oral care.

### 🛍️ Popular Product Categories

Five dedicated product categories:

1. Manual & Electric Toothbrushes
2. Fluoride Toothpastes
3. Dental Floss & Picks
4. Orthodontic Care
5. Oral Hygiene Accessories

- Horizontal snap-scroll on touch devices.
- Responsive five-column grid on desktop.

### ⭐ Best Sellers Carousel & Product Quick View

- Interactive product slider with next and previous controls.
- Product availability and stock indicators.
- Product detail modal with image galleries, specifications, stock status, and star ratings.
- Quick-add-to-cart functionality.

### 🛡️ Why Dentiland? — Trust & Value Proposition

A dedicated section highlighting the brand's core values:

- Product authenticity commitment.
- Fast and hygienic delivery.
- Specialized pediatric dental consultation.
- Seven-day hassle-free return policy.

### 🛒 Slide-Over Shopping Cart

- Real-time cart state management.
- Quantity increment and decrement controls.
- Item removal functionality.
- Promotional discount breakdown.
- Dynamic subtotal and checkout total calculations.

### ❤️ Wishlist Management

- Save favorite products for later.
- Quickly toggle wishlist items.
- Move saved products directly to the shopping cart.
- Manage saved items through an interactive drawer or modal.

### 👨‍⚕️ Online Dental Consultation

- Interactive appointment booking form.
- Parent-friendly consultation request interface.
- Dedicated modal for submitting appointment details.

### 📰 Educational Dental Articles & Blog

- Curated dental hygiene articles for parents.
- Educational content focused on children's oral health.
- Full-reading modal for individual articles.
- Accessible presentation of dental care tips.

### 🌍 RTL & Typography Excellence

- Right-to-left layout support for Persian and Arabic interfaces.
- Google Fonts Vazirmatn integration.
- Readable typography with weights ranging from 300 to 900.
- Responsive layouts designed for both RTL and LTR content.

### 📱 Responsive Design

- Mobile-first interface architecture.
- Adaptive layouts for mobile, tablet, and desktop.
- Touch-friendly controls and interactive components.
- Consistent visual styling across screen sizes.

---

## 🛠️ Tech Stack

| Technology          | Purpose                                                          |
| ------------------- | ---------------------------------------------------------------- |
| **React 19**        | Component-based UI and reactive state management                 |
| **TypeScript**      | Type safety and maintainable application architecture            |
| **Vite 6**          | Fast development server and optimized production builds          |
| **Tailwind CSS v4** | Utility-first styling and responsive layouts                     |
| **Lucide React**    | Lightweight, consistent SVG iconography                          |
| **Vazirmatn**       | Typography optimized for Persian and RTL interfaces              |
| **HTML5**           | Semantic application structure                                   |
| **CSS3**            | Custom styling, transitions, animations, and responsive behavior |

---

## 📁 Project Structure

```text
dentiland/
├── public/
│   ├── assets/
│   │   ├── preview-homepage.png
│   │   └── ...
│   └── dentiland-source.zip
├── src/
│   ├── components/
│   │   ├── ArticleModal.tsx
│   │   ├── Articles.tsx
│   │   ├── BestSellers.tsx
│   │   ├── CartDrawer.tsx
│   │   ├── Categories.tsx
│   │   ├── ConsultationModal.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── ProductDetailModal.tsx
│   │   ├── Reviews.tsx
│   │   ├── WhyDentiland.tsx
│   │   └── WishlistModal.tsx
│   ├── data/
│   │   └── dentilandData.ts
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── LICENSE
└── README.md
```

> This structure reflects the documented project layout. Some files or directories may differ in your actual repository.

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- **Node.js:** Version 18.0.0 or higher, subject to the requirements of your installed dependencies.
- **npm**, **yarn**, or **pnpm**.

### Installation

**1. Clone the repository**

Replace the example URL with your actual GitHub repository URL.

```bash
git clone https://github.com/your-username/dentiland.git
cd dentiland
```

**2. Install dependencies**

```bash
npm install
```

**3. Start the development server**

```bash
npm run dev
```

Open the local URL displayed in your terminal. Vite commonly uses `http://localhost:5173/` by default, unless the project has been configured to use a different port.

**4. Build for production**

```bash
npm run build
```

The production-ready files will be generated in the `dist/` directory.

**5. Preview the production build**

```bash
npm run preview
```

Open the local URL displayed in the terminal to inspect the production build.

---

## 🎨 Design System & Color Palette

### Primary Colors

| Design Token  | Color     | Usage                               |
| ------------- | --------- | ----------------------------------- |
| Clinical Blue | `#006591` | Primary brand color                 |
| Sky Blue      | `#0EA5E9` | Highlights and interactive elements |
| Soft Lavender | `#FAF8FF` | Light background surfaces           |
| Ice Blue      | `#E0F2FE` | Soft section backgrounds            |
| White         | `#FFFFFF` | Cards and elevated surfaces         |

### Visual Principles

- **Glassmorphism:** Translucent white surfaces with backdrop blur.
- **Organic Shapes:** Rounded cards, pills, and modal corners.
- **Soft Gradients:** Blue gradients for a calm, welcoming atmosphere.
- **Typography:** Vazirmatn with font weights ranging from 300 to 900.
- **Micro-interactions:** Smooth transitions and subtle hover feedback.
- **Responsive Spacing:** Consistent spacing across screen sizes.

---

## ♿ Accessibility & User Experience

Dentiland's interface is designed with usability in mind.

- Clear visual hierarchy and readable typography.
- Touch-friendly interactive controls.
- Responsive navigation for different screen sizes.
- Direction-aware layouts for RTL content.
- Consistent iconography and visual feedback.

> Accessibility features should be verified against the actual implementation, including keyboard navigation, focus management, color contrast, and screen-reader behavior.

---

## 🔐 Security & Production Considerations

Before deploying Dentiland to production, consider the following:

- Validate and sanitize user-submitted form data.
- Protect any backend endpoints and private credentials.
- Integrate a secure payment provider if online payments are required.
- Use HTTPS for deployed environments.
- Add appropriate privacy notices and consent handling for consultation forms.
- Verify product availability and pricing against a reliable data source.
- Test cart, wishlist, and appointment flows across devices.

---

## 🚢 Deployment

Dentiland can be deployed to a static hosting platform that supports Vite applications.

### Build the application

```bash
npm run build
```

### Deployment options

- **Vercel:** Connect your GitHub repository and configure the build command as `npm run build` and output directory as `dist`.
- **Netlify:** Connect your repository and configure the same build command and publish directory.
- **Custom Hosting:** Upload the contents of the generated `dist/` directory to a web server configured to serve a single-page application.

For client-side routing, configure the hosting platform to serve `index.html` for application routes when required.

---

## 🗺️ Roadmap

Potential future enhancements include:

- [ ] Backend integration for products and inventory.
- [ ] User authentication and account management.
- [ ] Persistent shopping cart and wishlist.
- [ ] Secure payment gateway integration.
- [ ] Appointment scheduling and confirmation notifications.
- [ ] Product reviews and verified purchase ratings.
- [ ] Advanced search, filtering, and sorting.
- [ ] Automated testing and continuous integration.
- [ ] Improved accessibility testing and optimization.
- [ ] Multilingual support for Persian, Arabic, and English.

---

## 🤝 Contributing

Contributions, ideas, and suggestions are welcome.

1. Fork the repository.
2. Create a feature branch.
3. Commit your changes with a descriptive message.
4. Push your branch.
5. Open a pull request describing your changes.

Please ensure that your changes are tested and follow the project's existing conventions.

---

## 📄 License

This project is distributed under the **Apache License 2.0**.

See the [LICENSE](LICENSE) file for the complete license text.

---

\<div align="center">

### 🦷 Dentiland

**Made with care for healthier, happier smiles.**

*Making children's oral care a brighter experience.*

\</div>
