import React from "react";
import "./Projects.css";
import Nav from "../../components/Navbar/Nav";
import Footer from "../../components/Footer/Footer"; // Ensure Footer is imported correctly

export default function Projects() {
  return (
    <>
      <Nav />

<div className='background'>
      <div className="projects">
        <h1>Projects</h1>
        <p>My projects are up to date and user friendly.</p>
        <div className="images">
          <a href="https://myinteractivepricing.netlify.app/"
           target="_blank"
           rel='noopener noreferrer'>
         <img src="../../assets/pricingApp.png" />
          <img src='../../assets/priceVS.png'/>
          </a>
        </div>
        <div className="images">
          <a href="https://tiearrascalculatorapp.netlify.app/"
          target="_blank"
          rel="noopener noreferrer">
            <img src='../../assets/calcVS.png'/>
            <img src="../../assets/CalculatorApp.png" />
            </a>
        </div> 
      </div>
      </div>
      <Footer/>
    </>
  );
}
