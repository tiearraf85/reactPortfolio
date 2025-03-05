import React from "react";
import Nav from "../../components/Navbar/Nav";
import "./Home.css";
// import { Link } from "react-router-dom";

export default function Home() {

    return (
        <div className="home">
          <Nav />
    
            <div className="middleSection">
                <div>
            <h1>Full Stack</h1>

            <div className="name">
            <h2>Tiearra Westbrook</h2>
             </div>
             <div className="socials">
            <button className="linkedin" onClick={() => window.location.href= 'https://www.linkedin.com/feed/'} img src="./src/assets/linkedin.png" alt="linkedin">
        <img src="./src/assets/linkedin.png" alt="linkedin" />
        </button>

        <button className="github" onClick={() => window.location.href= "https://github.com/dashboard"} img src="./src/assets/github.png" alt="github">
            <img src="./src/assets/github.png" alt="github" />

    </button> 
            
</div>

            <h1>Developer</h1>
           </div>
 </div>
          <div className="pic"> 
         <img src="./src/assets/work.jpg" className="facePic" alt="work" />


       </div>
       </div>
    )

}