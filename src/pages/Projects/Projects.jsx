import React from "react";
import "./Projects.css";
import Nav from "../../components/Navbar/Nav";
import Footer from "../../components/Footer/Footer"; // Ensure Footer is imported correctly

export default function Projects() {
  return (
    <>
      <Nav />

      <div className="background">
        <div className="projects">
          <h1>Latest Projects</h1>
          <p>
            “Here are my latest projects and mockups. In addition to leveraging
            AI-generated images, I handled the full branding for each company,
            ensuring a cohesive visual identity throughout the designs.”
          </p>
          <div className="images">
            <h1 className='color'>“UI/UX Project mockup and branding design”</h1>
            <img className="latest" src="../../assets/SkillzUp.png" />
            <div>
              <h1 className="color">“Branded marketing flyer design”</h1>
              <img className="latest" src="/public/assets/EmpowerFlyers.png" />
              <h1 className='color'>“Informational brochure with branding”</h1>
              <img className='latest' src="/assets/1.png" />
              <img src="/assets/2.png" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
