// NAVIGATION BAR COMPONENT - This creates the menu at the top of every page
// Think of it like the table of contents in a book - it helps people find what they want

// Import React hooks and tools we need
import { useState } from "react"; // useState helps us remember if mobile menu is open/closed
import { Link, useLocation } from "react-router-dom"; // Link creates clickable text, useLocation tells us what page we're on
import { RxHamburgerMenu } from "react-icons/rx"; // Hamburger menu icon (☰) for mobile phones
import { IoClose } from "react-icons/io5"; // X icon for closing the mobile menu

// This function creates our navigation bar
export default function Nav() {
  // STATE MANAGEMENT - Like a light switch that remembers if it's on or off
  // navOpen = is the menu open? (starts as false/closed)
  // setNavOpen = function to change if menu is open
  const [navOpen, setNavOpen] = useState(false);

  // useLocation tells us which page we're currently on (like GPS for your website)
  const location = useLocation();

  // HELPER FUNCTIONS - Small tools that do specific jobs
  // toggleNav: If menu is open, close it. If closed, open it (like a light switch)
  const toggleNav = () => setNavOpen(!navOpen);
  // closeNav: Always close the menu (used when clicking a link)
  const closeNav = () => setNavOpen(false);

  // NAVIGATION ITEMS - List of pages in our website
  // Each item has:
  // - name: what shows in the menu
  // - path: where it goes when clicked (URL)
  const navItems = [
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  // CHECK ACTIVE PAGE - Figures out if we're on a certain page
  // Used to highlight the current page in the menu (like highlighting current chapter in a book)
  const isActive = (path) => location.pathname === path;

  return (
    {/* MAIN NAVIGATION CONTAINER */}
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="container">
        <div className="flex items-center justify-between h-16 px-4">
          {/* LOGO/BRAND - Clicking this takes you home */}
          <Link to="/" className="flex items-center" onClick={closeNav}>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
              Portfolio
            </span>
          </Link>

          {/* DESKTOP NAVIGATION MENU - Only shows on tablets and computers */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-medium transition-colors duration-200 ${
                  isActive(item.path)
                    ? "text-primary-600 border-b-2 border-primary-500"
                    : "text-gray-600 hover:text-primary-600"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* MOBILE MENU BUTTON - Hamburger menu for phones */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-600 hover:text-primary-600 hover:bg-gray-100 transition-colors duration-200"
            onClick={toggleNav}
            aria-label="Toggle navigation menu"
          >
            {/* Show different icon based on if menu is open */}
            {navOpen ? (
              <IoClose className="h-6 w-6" />
            ) : (
              <RxHamburgerMenu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* MOBILE DROPDOWN MENU - Slides down when hamburger is clicked */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            navOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 px-4 border-t border-gray-200 bg-white/95 backdrop-blur-md">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={closeNav}
                className={`block py-3 px-4 rounded-lg font-medium transition-colors duration-200 ${
                  isActive(item.path)
                    ? "text-primary-600 bg-primary-50"
                    : "text-gray-600 hover:text-primary-600 hover:bg-gray-50"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}