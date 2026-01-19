# 🌴 Jelajah.in - Tour & Travel Landing Page

A modern, responsive landing page for an Indonesian tour and travel agency built with React, Vite, and Tailwind CSS v4.

![Homepage Preview](docs/homepage-preview.png)

## ✨ Features

- **Modern UI/UX** - Clean and professional design with smooth animations
- **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile
- **AOS Animations** - Scroll-triggered animations for enhanced user experience
- **Zero-Config Tailwind v4** - Latest Tailwind CSS without configuration files
- **Component-Based** - Modular architecture following Shadcn UI patterns

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| [React 19](https://react.dev/) | UI Framework |
| [Vite](https://vitejs.dev/) | Build Tool & Dev Server |
| [Tailwind CSS v4](https://tailwindcss.com/) | Utility-First Styling |
| [AOS](https://michalsnik.github.io/aos/) | Scroll Animations |
| [Lucide React](https://lucide.dev/) | Icon Library |

## 📁 Project Structure

```
src/
├── lib/
│   └── utils.js              # Utility functions (cn)
├── components/
│   ├── ui/                   # Reusable UI components
│   │   ├── Button.jsx
│   │   └── Card.jsx
│   ├── layout/               # Layout components
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   └── sections/             # Page sections
│       ├── Hero.jsx
│       ├── Stats.jsx
│       └── PopularDestinations.jsx
├── data/
│   └── destinations.js       # Destination data
├── App.jsx                   # Main application
├── main.jsx                  # Entry point
└── index.css                 # Global styles
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/HafidzThufail22/Jelajah-in.git
   cd Jelajah-in
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start development server
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Build for Production

```bash
npm run build
```

## 📸 Screenshots

### Hero Section
Full-screen hero with gradient overlay, call-to-action buttons, and scroll indicator.

### Stats Section
Company statistics with animated icons showing traveler count, destinations, ratings, and trips.

### Popular Destinations
Grid layout showcasing 6 popular Indonesian destinations with pricing and ratings:
- Raja Ampat
- Labuan Bajo
- Bali
- Lombok
- Yogyakarta
- Bromo

### Footer
Dark-themed footer with company info, navigation links, contact details, and social media icons.

## 🎨 Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Primary | `#0e7490` | Buttons, links, accents |
| Secondary | `#f97316` | CTA highlights, ratings |
| Dark | `#111827` | Footer background |

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

Made with ❤️ for exploring the beauty of Indonesia
