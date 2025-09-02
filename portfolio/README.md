# 🚀 Manas Ranjan Nilorout - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Framer Motion. Features a sleek tech-inspired design with glassmorphism effects, smooth animations, and comprehensive sections showcasing professional experience, projects, and skills.

![Portfolio Preview](https://img.shields.io/badge/React-18.2.0-61DAFB?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0.0-3178C6?style=flat-square&logo=typescript)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.0.0-FF0080?style=flat-square&logo=framer)

## ✨ Features

- **Modern Design**: Glassmorphism UI with gradient accents and smooth animations
- **Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- **Interactive Elements**: Hover effects, animated transitions, and particle backgrounds
- **Dynamic Content**: Typed.js animations, timeline components, and modal overlays
- **Performance Optimized**: Lazy loading, optimized animations, and efficient rendering
- **SEO Ready**: Meta tags, Open Graph support, and semantic HTML

## 🛠️ Tech Stack

### Frontend
- **React 18.2** - UI library
- **TypeScript** - Type safety
- **Framer Motion** - Animations
- **Typed.js** - Typing animations

### Styling
- **CSS3** - Custom styles
- **CSS-in-JS** - Component styling
- **Responsive Design** - Mobile-first approach

### Build Tools
- **Create React App** - Build setup
- **npm** - Package management

## 📂 Project Structure

```
portfolio/
├── public/
│   ├── favicon-mn.svg       # Custom favicon
│   ├── profile_n.jpg        # Profile picture
│   └── index.html           # HTML template
├── src/
│   ├── components/
│   │   ├── SimpleHero.tsx        # Hero section with profile
│   │   ├── SimpleAbout.tsx       # About section with skills
│   │   ├── SimpleExperience.tsx  # Timeline & achievements
│   │   ├── SimpleProjects.tsx    # Project showcase
│   │   ├── SimpleContact.tsx     # Contact form & info
│   │   ├── SimpleNavigation.tsx  # Navigation bar
│   │   ├── ParticlesBackground.tsx # Animated background
│   │   └── LoadingScreen.tsx     # Loading animation
│   ├── data/
│   │   └── portfolioData.ts      # Portfolio content data
│   ├── styles/
│   │   ├── Hero.css              # Hero section styles
│   │   ├── Responsive.css        # Mobile responsive styles
│   │   └── LoadingScreen.css     # Loading screen styles
│   ├── App.tsx                   # Main app component
│   ├── App.css                   # Global styles
│   └── index.tsx                 # React entry point
└── package.json                  # Dependencies
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and npm installed
- Git for version control

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/manasnilarout/my-portfolio.git
cd my-portfolio/portfolio
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
```

Creates an optimized production build in the `build` folder.

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints at:
- **Mobile**: < 768px
- **Tablet**: 769px - 1024px
- **Desktop**: > 1024px

Key mobile optimizations:
- Single column layouts
- Touch-friendly navigation
- Optimized font sizes
- Hidden decorative elements
- Stacked buttons and cards

## 🎨 Customization

### Update Personal Information
Edit `src/data/portfolioData.ts` to update:
- Personal details
- Work experience
- Projects
- Skills
- Achievements

### Change Colors
Modify CSS variables in `src/App.css`:
```css
:root {
  --primary-color: #00d9ff;
  --secondary-color: #7928ca;
  --accent-color: #ff0080;
  --dark-bg: #0a0a0a;
}
```

### Add New Sections
1. Create a new component in `src/components/`
2. Import and add to `src/App.tsx`
3. Update navigation in `SimpleNavigation.tsx`

## 📄 Portfolio Sections

### 🏠 Hero Section
- Animated typing effect showing roles
- Profile picture with gradient border
- Social media links
- Call-to-action buttons
- Code window preview

### 👤 About Section
- Professional summary
- Technical skills organized by category
- Statistics display (experience, projects, awards)
- Responsive skill tags

### 💼 Experience Section
- Interactive timeline layout
- Company details and responsibilities
- Awards & achievements showcase
- Hover effects and animations

### 🚀 Projects Section
- Filterable project grid
- Project cards with tech stacks
- Modal popups for detailed views
- External project links

### 📬 Contact Section
- Contact form with validation
- Direct contact information
- Social media links
- Professional email integration

## 🔧 Available Scripts

```bash
npm start       # Start development server
npm test        # Run tests
npm run build   # Create production build
npm run eject   # Eject from Create React App
```

## 📈 Performance Optimization

- **Code Splitting**: Automatic code splitting via React
- **Lazy Loading**: Components loaded on demand
- **Animation Optimization**: GPU-accelerated animations
- **Image Optimization**: Optimized image formats and sizes
- **Caching**: Service worker for offline capability

## 🌐 Deployment

### Deploy to Vercel
```bash
npm run build
vercel --prod
```

### Deploy to Netlify
```bash
npm run build
netlify deploy --prod --dir=build
```

### Deploy to GitHub Pages
```bash
npm install --save-dev gh-pages
npm run build
npm run deploy
```

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Contact

**Manas Ranjan Nilorout**
- Email: me@manasranjan.dev
- LinkedIn: [linkedin.com/in/manasnilarout](https://linkedin.com/in/manasnilarout)
- GitHub: [github.com/manasnilarout](https://github.com/manasnilarout)
- Phone: +91-8093773107

## 🙏 Acknowledgments

- React team for the amazing framework
- Framer Motion for smooth animations
- Create React App for the build setup
- All open source contributors

---

Built with ❤️ by Manas Ranjan Nilorout