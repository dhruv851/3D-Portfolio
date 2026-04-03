# Dhruv Sonani - 3D Portfolio

A personal portfolio website built with React, Three.js, and Tailwind CSS featuring interactive 3D models, smooth animations, and bilingual support (German/English).

## Live Demo

[https://dhruvsonani.netlify.app](https://dhruvsonani.netlify.app)

## Features

- **Interactive 3D Models** - Desktop PC and Earth globe rendered with Three.js and React Three Fiber
- **Bilingual Support** - Full German (default) and English language toggle
- **Profile Photo Lightbox** - Click the navbar photo to view full-size with smooth animation
- **Circular Favicon** - Auto-generated circular profile photo as browser tab icon
- **Responsive Design** - Fully responsive across desktop, tablet, and mobile
- **Smooth Animations** - Section transitions powered by Framer Motion
- **Contact Form** - Integrated with EmailJS for direct email delivery
- **Timeline** - Interactive vertical timeline for education and work experience

## Tech Stack

| Category | Technologies |
|----------|-------------|
| Frontend | React 18, React Router v6 |
| 3D | Three.js, React Three Fiber, Drei |
| Styling | Tailwind CSS, Framer Motion |
| Email | EmailJS |
| Build | Vite |
| Hosting | Netlify |

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/dhruv851/3D-Portfolio.git

# Navigate to project directory
cd 3D-Portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be running at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The output will be in the `dist/` folder, ready to deploy.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── assets/          # Images, icons, and 3D model references
├── components/      # React components (Navbar, Hero, About, etc.)
│   └── canvas/      # Three.js 3D components (Computers, Earth, Stars)
├── constants/       # Static data (experiences, projects, technologies)
├── context/         # React context (Language provider)
├── hoc/             # Higher-order components (SectionWrapper)
├── translations/    # EN/DE translation strings
├── utils/           # Animation utilities (Framer Motion variants)
├── styles.js        # Shared Tailwind class definitions
├── App.jsx          # Root component
└── main.jsx         # Entry point
```

## Deployment (Netlify)

This project is deployed on **Netlify** with continuous deployment from GitHub.







