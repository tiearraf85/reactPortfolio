# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
- `npm run dev` - Start development server with hot module replacement
- `npm run build` - Create production build
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality checks

## Architecture

This is a modern React portfolio application built with **Vite** and **Tailwind CSS**. The application uses React Router for client-side routing and follows a component-based architecture with utility-first CSS.

### Technology Stack
- **React 19.0.0** with React Router DOM for navigation
- **Vite 6.2.0** as the build tool and dev server
- **Tailwind CSS 4.1.13** for utility-first styling
- **EmailJS** for contact form functionality
- **Heroicons & React Icons** for iconography
- **@vercel/speed-insights** for performance monitoring

### Project Structure
- **src/components/** - Reusable UI components (Navbar, Footer, Certificate)
- **src/pages/** - Route-specific page components (Home, About, Projects, Contact)
- **public/assets/** - Static assets including images, PDFs, and icons
- **src/index.css** - Global styles with Tailwind directives and custom component classes

### Styling System
- **Tailwind CSS** utility-first approach for all styling
- **Custom design system** defined in tailwind.config.js with primary/secondary colors
- **Component classes** defined in index.css using @layer components
- **Responsive design** using Tailwind's responsive utilities (sm:, md:, lg:, xl:)
- **No custom CSS files** - all styling done through Tailwind utilities

### Routing
Routes are defined in `src/App.jsx`:
- `/` - Home page with hero section, technologies, and featured projects
- `/about` - About page with personal information and certifications
- `/projects` - Projects showcase with custom carousel implementation
- `/contact` - Contact form with EmailJS integration and social links

### Key Components

#### Navigation (Nav.jsx)
- Fixed header with backdrop blur effect
- Active route highlighting
- Mobile-responsive hamburger menu
- Smooth transitions and hover effects

#### Projects Carousel
- Custom implementation without external carousel libraries
- Navigation arrows and pagination dots
- Responsive design with mobile swipe support
- Hover effects and smooth transitions

#### Contact Form
- EmailJS integration for form submissions
- Form validation and loading states
- Success modal with animations
- Social media links and contact information

### Design System
- **Primary Colors**: Purple gradient (#667eea to #764ba2)
- **Typography**: System font stack with consistent sizing scale
- **Spacing**: Tailwind's spacing system (4px base unit)
- **Shadows**: Layered shadow system for depth
- **Animations**: Custom keyframe animations for typewriter effect and fades

### Important Patterns
- Functional components with React hooks (useState, useEffect, useRef)
- TypeScript-ready (types included for better development experience)
- Utility-first CSS approach - no component-specific CSS files
- Responsive-first design with mobile considerations
- Semantic HTML with proper accessibility attributes
- Custom typewriter effect implementation for hero sections

### Configuration Files
- **tailwind.config.js** - Tailwind configuration with custom colors and animations
- **postcss.config.js** - PostCSS configuration for Tailwind processing
- **vite.config.js** - Vite build configuration
- **eslint.config.js** - ESLint rules for code quality