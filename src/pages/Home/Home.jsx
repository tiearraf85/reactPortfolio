import Nav from "../../components/Navbar/Nav";
import "./Home.css";
import Footer from "../../components/Footer/Footer";
import React, { useState, useEffect } from "react";

const TypewriterSequence = ({ texts, typingSpeed = 100, pauseTime = 1500 }) => {
  const [displayedText, setDisplayedText] = useState("");
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
        setDisplayedText("");
        setCharIndex(0);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length); // Loop
      }, pauseTime);
      return () => clearTimeout(pause);
    }
  }, [charIndex, currentTextIndex, texts, typingSpeed, pauseTime]);

  return (
    <h2 style={{ fontFamily: "monospace", whiteSpace: "pre" }}>
      {displayedText}
      <span className="cursor">|</span>
    </h2>
  );
};

export default function Home() {
  return (
    <>
      <Nav />

      <section className="home-section">
        <div className="typewriter-container">
          <TypewriterSequence
            texts={[
              "Currently Learning JavaScript & Next.js...",
              "Passionate About Web Development...",
              "Exploring New Technologies...",
              "Crafting Elegant Solutions...",
              "Code, Learn, Repeat...",
            ]}
          />
        </div>

        <div className="home-content">
          <p className="description">
            In The Process of Learning JavaScript And Next.js, I'm Passionate
            About Crafting Elegant and Efficient Web Solutions. My Focus Is On
            Deliverng High-Quality, Innovative Projects While Continuously
            Expanding My Expertise In The Tech Industry.
            <p className="seDescription">
              HTML, CSS, JavaScript, React, Node.js, Express.js, MongoDB, SQL,
              Git
            </p>
          </p>
          <img src="src/assets/logo.jpg" alt="Logo" className="nav-logo" />
        </div>
      </section>

      <section>
        <div className="about">
          <h2 className="about-title">About Me</h2>
          <p className="about-description">
            I'm a web developer with a passion for creating dynamic and
            responsive web applications. I enjoy learning new technologies and
            continuously improving my skills.
          </p>
        </div>
      </section>

      <section>
        <div className="projects">
          <h2 className="projects-title">Projects</h2>
          <p className="projects-description">
            Check out some of my projects that showcase my skills and
            creativity.
          </p>
        </div>
      </section>

      <section>
        <div className="contact">
          <h2 className="contact-title">Contact Me</h2>
          <p className="contact-description">
            Feel free to reach out if you have any questions or would like to
            collaborate!
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
