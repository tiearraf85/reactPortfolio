// TAILWIND CONFIG FILE - This is like the "settings menu" for your website's appearance
// Tailwind is a CSS framework that provides pre-made classes like "text-blue-500" or "p-4"
// Think of it like having a toolbox full of pre-made design tools

/** @type {import('tailwindcss').Config} */
export default {
  // CONTENT ARRAY - Tells Tailwind which files to look at for CSS classes
  // It searches these files to see what styles you're actually using
  content: [
    "./index.html",                     // Your main HTML file
    "./src/**/*.{js,ts,jsx,tsx}",      // All your React components (any file ending in .js, .jsx, etc.)
  ],

  // THEME - This is where you customize Tailwind's default colors, fonts, etc.
  theme: {
    // EXTEND - Add new things without removing Tailwind's built-in styles
    extend: {
      // CUSTOM COLORS - Your portfolio's brand colors
      // Each color has different shades (50 = very light, 900 = very dark)
      colors: {
        // PRIMARY COLOR PALETTE - Your main brand color (purple/blue)
        primary: {
          50: '#f0f4ff',   // Very light purple (like a whisper of color)
          100: '#e0e9ff',  // Light purple
          200: '#c7d2fe',  // Lighter purple
          300: '#a5b4fc',  // Medium light purple
          400: '#818cf8',  // Medium purple
          500: '#667eea',  // Main purple (this is your signature color)
          600: '#5a67d8',  // Darker purple
          700: '#4c51bf',  // Even darker purple
          800: '#434190',  // Very dark purple
          900: '#3c366b',  // Almost black purple
        },
        // SECONDARY COLOR PALETTE - Your accent color (also purple tones)
        secondary: {
          50: '#faf5ff',   // Very light lavender
          100: '#f3e8ff',  // Light lavender
          200: '#e9d5ff',  // Lighter lavender
          300: '#d8b4fe',  // Medium light lavender
          400: '#c084fc',  // Medium lavender
          500: '#764ba2',  // Main accent color
          600: '#6b4c87',  // Darker accent
          700: '#5d4076',  // Even darker accent
          800: '#4c1d95',  // Very dark accent
          900: '#3c366b',  // Almost black accent
        },
      },

      // CUSTOM FONTS - The typeface your website uses
      fontFamily: {
        // SANS-SERIF FONT STACK - Modern, clean fonts (no decorative lines)
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },

      // CUSTOM ANIMATIONS - Movement effects for your website
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',  // Makes things appear gradually
        'slide-in': 'slideIn 0.3s ease-out',   // Makes things slide in from the side
        'blink': 'blink 1s infinite',          // Makes the cursor blink on/off forever
      },

      // KEYFRAMES - Define exactly how animations move (like movie frames)
      keyframes: {
        // FADE IN ANIMATION - Element appears from invisible to visible
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },  // Start: invisible and 20px down
          '100%': { opacity: '1', transform: 'translateY(0)' }    // End: visible and in normal position
        },
        // SLIDE IN ANIMATION - Element slides in from left side
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },  // Start: completely off-screen to the left
          '100%': { transform: 'translateX(0)' }     // End: in normal position
        },
        // BLINK ANIMATION - Element appears and disappears (for cursor effect)
        blink: {
          '0%, 50%': { opacity: '1' },    // First half: visible
          '51%, 100%': { opacity: '0' }   // Second half: invisible
        }
      }
    },
  },

  // PLUGINS - Extra features for Tailwind (none installed currently)
  // This is where you'd add things like form styling, typography, etc.
  plugins: [],
}