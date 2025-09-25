// FOOTER COMPONENT - The bottom section of every page
// Contains social links, navigation, and copyright information
// Think of this like the "contact info" section at the bottom of every page

import { Link } from "react-router-dom";  // For clickable links that go to other pages

// MAIN FOOTER COMPONENT
export default function Footer() {
  // SOCIAL LINKS DATA - Your social media profiles
  // Each link has an icon, URL, and label for screen readers
  const socialLinks = [
    { name: 'LinkedIn', href: '#', icon: '📫' },
    { name: 'GitHub', href: '#', icon: '💼' },
    { name: 'Twitter', href: '#', icon: '🐦' },
    { name: 'Email', href: 'mailto:contact@example.com', icon: '✉️' }
  ];

  // GET CURRENT YEAR - Automatically updates copyright year
  // new Date() = today's date, getFullYear() = just the year (2024, 2025, etc.)
  const currentYear = new Date().getFullYear();

  return (
    // Main footer container - dark background with white text
    <footer className="bg-gray-900 text-white">
      <div className="container">
        {/* Footer content with padding */}
        <div className="py-16 px-4">
          {/* FOOTER GRID - 4 columns on large screens, 2 on tablets, 1 on phones */}
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-8">

            {/* ===== COLUMN 1: BRAND SECTION ===== */}
            <div className="lg:col-span-1">
              {/* Logo and brand name (clickable, goes to home) */}
              <Link to="/" className="inline-block mb-4">
                <div className="flex items-center space-x-2">
                  {/* Your profile picture - small circle */}
                  <img
                    src="/assets/logo.jpeg"
                    alt="Tiearra Westbrook"
                    className="w-12 h-12 rounded-full object-cover border-2 border-primary-400"
                  />
                  {/* Your name with gradient colors */}
                  <span className="text-xl font-bold bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
                    Portfolio
                  </span>
                </div>
              </Link>
              {/* Short description about you */}
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Creating beautiful and functional web experiences with modern technologies.
                Always learning, always growing.
              </p>
              {/* SOCIAL MEDIA LINKS */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-200 text-xl"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* ===== COLUMN 2: QUICK LINKS ===== */}
            <div>
              <h4 className="font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-gray-400 hover:text-white transition-colors duration-200">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-gray-400 hover:text-white transition-colors duration-200">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/projects" className="text-gray-400 hover:text-white transition-colors duration-200">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-400 hover:text-white transition-colors duration-200">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* ===== COLUMN 3: TECHNOLOGIES ===== */}
            <div>
              <h4 className="font-semibold text-white mb-4">Technologies</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>React</li>
                <li>JavaScript</li>
                <li>HTML & CSS</li>
                <li>Tailwind CSS</li>
                <li>Node.js</li>
                <li>Git & GitHub</li>
              </ul>
            </div>

            {/* ===== COLUMN 4: CONTACT INFO ===== */}
            <div>
              <h4 className="font-semibold text-white mb-4">Get In Touch</h4>
              <div className="space-y-2 text-gray-400 text-sm">
                <p>Ready to work together?</p>
                <p>Let's create something amazing!</p>
                <Link
                  to="/contact"
                  className="inline-block mt-2 text-primary-400 hover:text-primary-300 transition-colors duration-200"
                >
                  Send me a message →
                </Link>
              </div>
            </div>
          </div>

          {/* BOTTOM SECTION - Copyright and divider line */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              {/* Copyright text */}
              <p className="text-gray-400 text-sm">
                © {currentYear} Tiearra Westbrook. All rights reserved.
              </p>
              {/* Built with love note */}
              <p className="text-gray-400 text-sm mt-2 md:mt-0">
                Built with ❤️ using React & Tailwind CSS
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}