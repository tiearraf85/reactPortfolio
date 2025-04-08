import "./Skils.css";
import Nav from "../../components/Navbar/Nav";
import Footer from "../../components/Footer/Footer";
import React, { useState, useEffect } from 'react';

const TypewriterSequence = ({ texts, typingSpeed = 100, pauseTime = 1500 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (currentTextIndex >= texts.length) return;

    if (charIndex < texts[currentTextIndex].length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + texts[currentTextIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    } else {
      const pause = setTimeout(() => {
        // Move to next text
        setDisplayedText('');
        setCharIndex(0);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length); // Loop
      }, pauseTime);
      return () => clearTimeout(pause);
    }
  }, [charIndex, currentTextIndex, texts, typingSpeed, pauseTime]);

  return (
    <h2 style={{ fontFamily: 'monospace', whiteSpace: 'pre' }}>
      {displayedText}
      <span className="cursor">|</span>
    </h2>
  );
};

export default function Skills() {
  return (
    <>
      <Nav />
      

       <div className="mySkills">
      <div className="background">
        <div className='typewriter-container'>
      <TypewriterSequence texts={[
        "Currently Learning JavaScript and Next.js...",
        "Passionate About Web Development...",
        "Exploring New Technologies...",
        "Crafting Elegant Solutions...",
        "Code, Learn, Repeat...",
      ]} />
       
             <p>
               In The Process of Learning JavaScript And Next.js, I'm Passionate
               About Crafting Elegant and Efficient Web Solutions. My Focus Is On
               Deliverng High-Quality, Innovative Projects While Continuously
               Expanding My Expertise In The Tech Industry.
             </p>
             <p>
               HTML, CSS, JavaScript, React, Node.js, Express.js, MongoDB, SQL,
               Git
             </p>
           </div> 
           </div>



        
          <div className="buttons">
            <button
              className="css"
              onClick={() =>
                (window.location.href = "https://www.w3schools.com/Css/")
              }
              alt="css"
            >
              <img src="src/assets/css.png" alt="css" />
            </button>

            <button
              className="html"
              onClick={() =>
                (window.location.href =
                  "https://www.w3schools.com/html/html_basic.asp")
              }
              alt="html"
            >
              <img src="src/assets/html.png" />
            </button>
          </div>

          <div className="buttons">
            <button
              className="javaScript"
              onClick={() =>
                (window.location.href = "https://javascript.info/")
              }
              alt="js"
            >
              <img src="src/assets/JavaScript.png" />
            </button>
            <button
              className="mongoDb"
              onClick={() =>
                (window.location.href =
                  "https://cloud.mongodb.com/v2/67c989b35426123197c91696#/overview?automateSecurity=true")
              }
              alt="mongoDb"
            >
              <img src="src/assets/mongoDb.png" />
            </button>
          </div>

          <div className="buttons">
            <button
              className="node"
              onClick={() =>
                (window.location.href = "https://nodejs.org/en/download")
              }
              alt="node"
            >
              <img src="src/assets/nodeJs.png" />
            </button>

            <button
              className="react"
              onClick={() => (window.location.href = "https://react.dev/")}
            >
              <img src="src/assets/React.png" />
            </button>
          </div>
        </div>
      <Footer />
    </>
  );
}


