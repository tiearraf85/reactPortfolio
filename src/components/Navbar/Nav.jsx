import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import "./Nav.css";

export default function Nav() {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(true);
  };


  
 
  const portItems = [
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <Nav className="nav">
        <div className="nav-container">
          <Link to="/">
          <button className="link-portfolio">
             <h1 className="portfolio">Portfolio</h1>
          </button>
          </Link>
         <div className="nav-links desktop-nav">
         {portItems.map((item, index) => (
            <button key={index} className="link-button">  
              <Link to={item.path}>{item.name}</Link>
            </button>
          ))}
        </div>
        
{(!navOpen && 
        <div className="mobile-nav">
          <button className="hamburger" 
          onClick={toggleNav}>
          <RxHamburgerMenu />
                </button>
</div>
       )}   
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
      </Nav>
    </>
  );
}
