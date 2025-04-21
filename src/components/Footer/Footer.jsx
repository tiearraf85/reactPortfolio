import "./Footer.css";
import React from "react";
import { Link } from "react-router-dom";
import resume from "../../assets/Resume.pdf";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
export default function Footer() {
  const routeItems = [
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <div className="footer">
        <div>
          <img src="src/assets/logo.jpg" alt="Logo" className="logo2" />
          <p className="bottom">
            © 2025 Tiearra Westbrook. All rights reserved.
          </p>
        </div>
        <div>
          <h2>About Me</h2>
          <p>
            Web developer exploring JavaScript and Next.js, dedicated to
            building engaging applications and embracing new challenges
          </p>
        </div>
        <div className='contact-info'>
        <div className="contact-item">
              <h2>Contact</h2>
              <MdOutlineMarkEmailRead />
            <a href="mailto:gracemilestoneinc@gmail.com">
             gracemilestoneinc@gmail.com
            </a>
          </div>
          <div className='contact-item'>
          <FaPhoneVolume />
            <a href="tel:954-806-6996">(954)806-6996</a>
          </div>
        </div>
        <div className="links">
          <h2>Quick Links</h2>
          {routeItems.map((items, idx) => (
            <p key={idx} className="footLinks">
              <Link to={items.path}>{items.name}</Link>
            </p>
          ))}

          <a href={resume} download="resume" className="download">
            Resume
          </a>
        </div>
      </div>
    </>
  );
}
