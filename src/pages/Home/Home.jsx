import Nav from "../../components/Navbar/Nav";
import "./Home.css";
import Footer from "../../components/Footer/Footer";
import React, { useState, useEffect } from "react";
import { FaHtml5 } from "react-icons/fa6";
import { BsFiletypeCss } from "react-icons/bs";
import { SiJavascript } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa6";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import Contact from "../../pages/Contact/Contact";

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

      <div className="home-wrapper">
        <section className="home-section">
          <div className="typewriter-container">
            <TypewriterSequence
              texts={[
                "Tiearra Westbrook",
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
            <h1 className="portfolio">Portfolio</h1>
          </div>
        </section>
        <section>
          <div className="technologies">
            <h1 className="expanding">Technologies I Work With</h1>
            <p>
              I work with core web technologies that power modern websites and
              applications. HTML structures content, CSS styles it, and
              JavaScript adds interactivity. Together, they form the foundation
              of web development, enabling the creation of dynamic and engaging
              user experiences.
            </p>

            <div className="tech-icons">
              <FaHtml5 className="html-icon" />
              <BsFiletypeCss className="css-icon" />
              <SiJavascript className="js-icon" />
            </div>

            <h1 className="expanding">Expanding My Skills</h1>
            <p className="expanigng-description">
              As I continue my journey in web development, I'm diving into new
              technologies and frameworks to enhance my skill set. From
              exploring the capabilities of Next.js to mastering the intricacies
              of JavaScript, I'm committed to continuous learning and growth in
              the tech industry. I'm Currently Improving My Proficiency in
              Next.Js, Git and MongoDb. Next.js Simplifies Server-Side
              Rendering, And Git Streamlines Version Control-Key Tools For
              Modern Web Development and MongoDb is a NoSQL Database That
              Enhances Data Management.
            </p>

            <div className="expanding-icons">
              <FaGitAlt className="git-icon" />
              <TbBrandNextjs className="nextjs-icon" />
              <SiMongodb className="mongodb-icon" />
            </div>
          </div>
        </section>
        <section>
          <div className="projects">
            <h1 className="projects-title">Projects</h1>
            <p className="projects-description">
              Check out some of my projects that showcase my skills and
              creativity.
            </p>
            <div className="project-links">
              <div className="calculator-app">
                <p>Click Me</p>
                <a
                  href="https://tiearrascalculatorapp.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="../../assets/CalculatorApp.png"
                    alt="Calculator App"
                  />
                </a>
              </div>
              <div className="pricing-app">
                <p>Click me</p>
                <a
                  href="https://myinteractivepricing.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="../../assets/pricingApp.png"
                    alt="Pricing App"
                    className="pricing-link"
                  />
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="contacts">
        <div className="contact">
          <p className="contact-description">
            Feel free to reach out if you have any questions or would like to
            collaborate!
          </p>
        </div>
      </section>

      <Contact />
    </>
  );
}
