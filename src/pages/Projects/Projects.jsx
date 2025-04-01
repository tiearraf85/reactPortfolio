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
         <img src="src/assets/pricingApp.png" />
          <img src='src/assets/priceVS.png'/>
        </div>
        <div className="images">
            <img src='src/assets/calcVS.png'/>
            <img src="src/assets/CalculatorApp.png" />
        </div> 
      </div>
      </div>
      <Footer />
    </>
  );
}
