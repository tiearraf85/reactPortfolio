// FOOTER COMPONENT - The bottom section of every page
// Contains your contact info, links, services, and copyright

import { Link } from "react-router-dom";  // For links between pages
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline"; // Icons for email/phone
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid"; // Download icon for resume

// MAIN FOOTER COMPONENT
export default function Footer() {
  // NAVIGATION LINKS - List of pages to show in footer
  const routeItems = [
    { name: "About", path: "/about" },     // About page
    { name: "Projects", path: "/projects" }, // Projects page
    { name: "Contact", path: "/contact" },  // Contact page
  ];

  // GET CURRENT YEAR - Automatically updates copyright year
  // new Date() = today's date, getFullYear() = just the year (2024, 2025, etc.)
  const currentYear = new Date().getFullYear();

  return (
    {/* Main footer container */}
    <footer className="
      bg-gray-900  // Very dark gray background
      text-white   // White text
    ">
      <div className="container">  {/* Centers content */}
        <div className="
          py-16 px-4  // Padding top/bottom and left/right
        ">
          {/* FOOTER GRID - 4 columns on large screens, 2 on medium */}
          <div className="
            grid              // Grid layout
            lg:grid-cols-4    // 4 columns on large screens
            md:grid-cols-2    // 2 columns on medium screens
            gap-8             // Space between columns
          ">
            {/* ===== COLUMN 1: BRAND SECTION ===== */}
            <div className="lg:col-span-1">  {/* Takes 1 column width */}
              {/* Logo and brand name (clickable, goes to home) */}
              <Link to="/" className="inline-block mb-4">
                <div className="
                  flex items-center  // Side by side
                  space-x-2          // Space between image and text
                ">
                  {/* Your profile picture */}
                  <img
                    src="/assets/logo.jpeg"
                    alt="Tiearra Westbrook"
                    className="
                      w-12 h-12     // Small square
                      rounded-full  // Circle shape
                      object-cover  // Image fills nicely
                      border-2 border-primary-400  // Purple border
                    "
                  />
                  {/* "Portfolio" text with gradient */}
                  <span className="
                    text-2xl font-bold  // Large, bold text
                    bg-gradient-to-r from-primary-400 to-secondary-400  // Purple gradient
                    bg-clip-text text-transparent  // Gradient shows through text
                  ">
                    Portfolio
                  </span>
                </div>
              </Link>
              <p className="text-gray-300 leading-relaxed mb-6">
                Web developer exploring JavaScript and Next.js, dedicated to
                building engaging applications and embracing new challenges.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <EnvelopeIcon className="h-5 w-5 text-primary-400" />
                  <a
                    href="mailto:gracemilestoneinc@gmail.com"
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                  >
                    gracemilestoneinc@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <PhoneIcon className="h-5 w-5 text-primary-400" />
                  <a
                    href="tel:954-806-6996"
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                  >
                    (954) 806-6996
                  </a>
                </div>
              </div>
            </div>

            {/* ===== COLUMN 2: QUICK LINKS ===== */}
            <div className="lg:col-span-1">
              <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
              <nav className="space-y-4">  {/* Navigation section with space between items */}
                {/* Loop through each page link */}
                {routeItems.map((item) => (
                  <Link
                    key={item.path}  // Unique ID for React
                    to={item.path}   // Where it goes when clicked
                    className="
                      block         // Each link on its own line
                      text-gray-300 // Light gray color
                      hover:text-primary-400  // Purple on hover
                      transition-colors duration-200  // Smooth color change
                    "
                  >
                    {item.name}  {/* Show page name */}
                  </Link>
                ))}
                {/* Resume download link */}
                <a
                  href="/assets/Resume.pdf"        // File location
                  download="TiearraWestbrook_Resume.pdf"  // Downloaded filename
                  className="
                    inline-flex items-center  // Icon and text side by side
                    space-x-2                // Space between icon and text
                    text-primary-400         // Purple color
                    hover:text-primary-300   // Lighter purple on hover
                    transition-colors duration-200
                  "
                >
                  <ArrowDownTrayIcon className="h-4 w-4" />  {/* Download icon */}
                  <span>Download Resume</span>
                </a>
              </nav>
            </div>

            {/* ===== COLUMN 3: SERVICES ===== */}
            <div className="lg:col-span-1">
              <h3 className="text-lg font-semibold mb-6">Services</h3>
              <div className="space-y-4">  {/* Space between service items */}
                {/* Each service is plain text */}
                <div className="text-gray-300">Web Development</div>
                <div className="text-gray-300">UI/UX Design</div>
                <div className="text-gray-300">Branding & Graphics</div>
                <div className="text-gray-300">Frontend Development</div>
                <div className="text-gray-300">Responsive Design</div>
              </div>
            </div>

            {/* ===== COLUMN 4: TECHNOLOGIES ===== */}
            <div className="lg:col-span-1">
              <h3 className="text-lg font-semibold mb-6">Technologies</h3>
              <div className="space-y-4">  {/* Space between tech items */}
                {/* Each technology is plain text */}
                <div className="text-gray-300">HTML & CSS</div>
                <div className="text-gray-300">JavaScript & React</div>
                <div className="text-gray-300">Node.js & Express</div>
                <div className="text-gray-300">MongoDB & SQL</div>
                <div className="text-gray-300">Git & Version Control</div>
              </div>
            </div>
          </div>
        </div>

        {/* ===== BOTTOM COPYRIGHT SECTION ===== */}
        <div className="
          border-t border-gray-800  // Line on top
          py-8 px-4                // Padding
        ">
          <div className="
            flex flex-col md:flex-row  // Stack on phones, side-by-side on tablets+
            justify-between           // Space between left and right
            items-center             // Center vertically
            space-y-4 md:space-y-0   // Space between items on phones only
          ">
            {/* Copyright text */}
            <div className="text-gray-400 text-sm">
              © {currentYear} Tiearra Westbrook. All rights reserved.
              {/* Shows: © 2024 Tiearra Westbrook. All rights reserved. */}
            </div>
            {/* Legal links */}
            <div className="
              flex items-center  // Side by side
              space-x-6          // Space between links
              text-sm text-gray-400
            ">
              <Link to="/contact" className="
                hover:text-primary-400  // Purple on hover
                transition-colors duration-200
              ">
                Privacy Policy
              </Link>
              <Link to="/contact" className="
                hover:text-primary-400
                transition-colors duration-200
              ">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}