import React, {useState} from 'react';
import { Link } from "react-router-dom";
import "./Nav.css";

export default function Nav() {

  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);

  };

  const portItems = [
    {name: "Home", path: "/"},
    {name: "About", path: "/about"},
    {name: "Skills", path: "/skills"},
    {name: "Projects", path: "/projects"},
    {name: "Contact", path: "/contact"},
  ];

  return (
    <>


     
      <nav className="nav">
        <div className="nav-links desktop-nav">
          {portItems.map((item, index) =>(
            <button key={index} className="top">
              <Link to={item.path}>{item.name}</Link>
            </button>
          ))}
        </div>


        <div className="mobile-nav">
          <button className="hamburger" onClick={toggleNav}>
            <img src="src/assets/menu.png"/>
          </button>

          {navOpen && (
            <div className="dropdown-menu">
              {portItems.map((item, index) => (
                <button key={index} className="top" onClick={() => setNavOpen(false)}>
                  <Link to={item.path}>{item.name}</Link>
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>
    
      
      
      
      
      
      
      
      
       {/* <nav className="nav">
        
         <button className="top">
          <Link to="/">Home</Link>
        </button>
        
        <button className="top">
          <Link to="/about">About Me</Link>
        </button>
       
        <button className="top">
          <Link to="/skills">Skills</Link>
        </button>

        <button className="top">
          <Link to="/projects">Projects</Link>
        </button>

        <button className="top">
          <Link to="/contact">Contact</Link>
        </button>
      </nav>

      <div className="mobile-nav">
        <button className="hamburger" onClick={toggleNav}>
          <img src="src/assets/menu.png"/>
        </button>
        {navOpen && (
          <div className="dropdown-menu">
            <button className="top" onClick={() => setNavOpen(false)}><Link to="/">Home</Link></button>
            <button className="top" onClick={() => setNavOpen(false)}><Link to="/about">About Me</Link></button>
            <button className="top" onClick={() => setNavOpen(false)}><Link to="/skills">Skills</Link></button>
            <button className="top" onClick={() => setNavOpen(false)}><Link to="/"></Link></button>
          </div>
        )}
      </div>   */}
    </>
  );
}
