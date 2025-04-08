import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  const portItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <nav className="nav">
        <div className="nav-container">
          <img src='src/assets/logo.jpg' alt="Logo" className="nav-logo"/>
         <div className="nav-links desktop-nav">
         {portItems.map((item, index) => (
            <button key={index} className="top">
              <Link to={item.path}>{item.name}</Link>
            </button>
          ))}
        </div>
        </div>

        <div className="mobile-nav">
          <button className="hamburger" onClick={toggleNav}>
            <img src="src/assets/menu.png" />
          </button>

          {navOpen && (
            <div className="dropdown-menu">
              {portItems.map((item, index) => (
                <button
                  key={index}
                  className="top"
                  onClick={() => setNavOpen(false)}
                >
                  <Link to={item.path}>{item.name}</Link>
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
