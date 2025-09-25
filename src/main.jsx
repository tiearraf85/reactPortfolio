// MAIN.JSX - This file starts your entire React application
// Think of this like pressing the "power button" on your website - it makes everything work

// REACT IMPORTS - Tools React needs to put your website on the screen
import { createRoot } from 'react-dom/client'              // Creates the "root" where your website lives

// ROUTER IMPORT - Lets people navigate between different pages (Home, About, etc.)
import { BrowserRouter as Router } from 'react-router-dom';  // BrowserRouter = navigation system

// STYLING IMPORT - All your visual styles (colors, fonts, spacing)
import './index.css'                                         // The main stylesheet with Tailwind

// YOUR APP IMPORT - The main component that contains your whole website
import App from './App.jsx'                                  // Your App component with all the pages

// ANALYTICS IMPORT - Tracks how fast your website loads (for optimization)
import { SpeedInsights } from "@vercel/speed-insights/react";

// START THE APPLICATION - This actually puts your website on the screen
createRoot(document.getElementById('root')).render(
  // ROUTER WRAPPER - Enables navigation between pages
  <Router>
    {/* YOUR MAIN APP - Contains all your pages and components */}
    <App />

    {/* SPEED TRACKING - Measures website performance (invisible to users) */}
    <SpeedInsights />
  </Router>
)
