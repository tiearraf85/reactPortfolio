// HOME PAGE COMPONENT - The main landing page of your portfolio
// This is what people see first when they visit your website

// Import React tools and components
import { useState, useEffect } from "react";  // useState for memory, useEffect for timing
import { Link } from "react-router-dom";      // For buttons that go to other pages
import Nav from "../../components/Navbar/Nav"; // Top navigation menu
import Footer from "../../components/Footer/Footer"; // Bottom section

// Import technology icons (like stickers for HTML, CSS, etc.)
import { FaHtml5, FaGitAlt } from "react-icons/fa6";
import { BsFiletypeCss } from "react-icons/bs";
import { SiJavascript, SiMongodb } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { ArrowRightIcon } from "@heroicons/react/24/outline"; // Arrow icon for buttons

// TYPEWRITER EFFECT COMPONENT - Makes text appear letter by letter like a typewriter
// Parameters:
// - texts: array of sentences to type
// - typingSpeed: how fast to type (100ms = 0.1 seconds between letters)
// - pauseTime: how long to wait before next sentence (1500ms = 1.5 seconds)
const TypewriterSequence = ({ texts, typingSpeed = 100, pauseTime = 1500 }) => {
  // STATE VARIABLES - Memory boxes that remember things
  const [displayedText, setDisplayedText] = useState("");    // What text is currently shown on screen
  const [currentTextIndex, setCurrentTextIndex] = useState(0); // Which sentence we're typing (0, 1, 2, etc.)
  const [charIndex, setCharIndex] = useState(0);               // Which letter we're on in current sentence

  // TYPEWRITER LOGIC - This runs automatically and controls the typing
  useEffect(() => {
    // If we've typed all sentences, stop the typewriter
    if (currentTextIndex >= texts.length) return;

    // If we haven't finished typing the current sentence...
    if (charIndex < texts[currentTextIndex].length) {
      // Set a timer to add the next letter
      const timeout = setTimeout(() => {
        // Add one more letter to what's displayed
        setDisplayedText((prev) => prev + texts[currentTextIndex][charIndex]);
        // Move to the next letter position
        setCharIndex((prev) => prev + 1);
      }, typingSpeed); // Wait 'typingSpeed' milliseconds before adding next letter

      // Clean up the timer when component unmounts (good practice)
      return () => clearTimeout(timeout);
    } else {
      // We finished typing the sentence, so pause then start next one
      const pause = setTimeout(() => {
        setDisplayedText("");    // Clear the text
        setCharIndex(0);         // Start from first letter again
        // Move to next sentence, or loop back to first (% means "remainder")
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      }, pauseTime); // Wait 'pauseTime' before starting next sentence

      return () => clearTimeout(pause);
    }
  }, [charIndex, currentTextIndex, texts, typingSpeed, pauseTime]);

  // What shows on screen
  return (
    <div className="
      font-mono       // Typewriter font (all letters same width)
      text-3xl        // Large text on phones
      md:text-5xl     // Extra large on tablets
      lg:text-6xl     // Huge on computers
      font-bold       // Bold/thick text
      text-gray-900   // Very dark gray (almost black)
      min-h-[4rem]    // Minimum height on phones (prevents jumping)
      md:min-h-[6rem] // Taller minimum height on larger screens
    ">
      {displayedText}  {/* The text being typed */}
      <span className="animate-blink text-primary-500">|</span>  {/* Blinking cursor */}
    </div>
  );
};

// MAIN HOME PAGE COMPONENT
export default function Home() {
  return (
    // Main container with gradient background
    <div className="
      min-h-screen    // At least as tall as the screen
      bg-gradient-to-br  // Gradient background going to bottom-right
      from-slate-50   // Starting color (very light gray)
      to-gray-100     // Ending color (slightly darker gray)
    ">
      <Nav />  {/* Navigation menu at top */}

      {/* ===== HERO SECTION - The main welcome area at top ===== */}
      <section className="
        pt-24  // Padding top (space from navigation)
        pb-16  // Padding bottom
      ">
        <div className="container">  {/* Centers content */}
          <div className="
            grid         // Creates a grid layout
            lg:grid-cols-2  // 2 columns on large screens
            gap-12       // Space between columns
            items-center // Vertically centers content
          ">
            {/* LEFT SIDE - Text content and buttons */}
            <div className="space-y-8">  {/* Adds space between child elements */}
              <div className="space-y-6">
                <div className="
                  text-center     // Centered on phones
                  lg:text-left    // Left-aligned on computers
                ">  {/* Responsive text alignment */}
                  {/* TYPEWRITER COMPONENT - Cycles through different texts */}
                  <TypewriterSequence
                    texts={[
                      "Tiearra Westbrook",                    // Your name
                      "Web Developer",                        // Your job title
                      "Currently Learning MongoDB & Next.js", // What you're studying
                      "Passionate About Data Management",     // Your interests
                      "Exploring AI Solutions",               // New technologies you like
                      "Building Engaging Web Applications",   // What you create
                      "Exploring New Technologies",           // Your curiosity
                      "Crafting Elegant Solutions",           // Your approach
                      "Code, Learn, Repeat",                  // Your motto
                    ]}
                  />
                </div>

                {/* ABOUT YOU PARAGRAPH */}
                <div className="prose prose-lg max-w-none">  {/* prose = nice text formatting */}
                  <p className="
                    text-xl        // Large text
                    text-gray-600  // Medium gray color
                    leading-relaxed // Comfortable spacing between lines
                  ">
                    Skilled in creating strong branding and designing brochures and
                    flyers that are visually appealing and effective. In the process
                    of learning Python and AI solutions, I'm passionate about crafting
                    elegant and efficient web solutions. My focus is on delivering
                    high-quality, innovative projects while continuously expanding my
                    expertise in the tech industry.
                  </p>

                  {/* TECHNOLOGY BOX - White box highlighting your skills */}
                  <div className="
                    mt-6       // Margin top (space above)
                    p-6        // Padding all around inside
                    bg-white   // White background
                    rounded-xl // Extra rounded corners
                    border border-gray-200  // Light gray border
                    shadow-sm  // Small shadow for depth
                  ">
                    <h3 className="font-semibold text-gray-900 mb-3">
                      Technologies I Use:
                    </h3>
                    <p className="text-gray-600 text-base">
                      HTML, CSS, JavaScript, React, Node.js, Express.js, MongoDB, SQL, Git
                    </p>
                  </div>
                </div>

                {/* CALL TO ACTION BUTTONS */}
                <div className="
                  flex         // Side by side layout
                  flex-wrap    // Wrap to next line if needed
                  gap-4        // Space between buttons
                  justify-center lg:justify-start  // Centered on phones, left on computers
                ">
                  {/* Primary button - goes to projects */}
                  <Link to="/projects" className="btn-primary">  {/* btn-primary is our custom style */}
                    View My Work
                    <ArrowRightIcon className="ml-2 h-5 w-5" />  {/* Arrow icon */}
                  </Link>
                  {/* Secondary button - goes to contact */}
                  <Link to="/contact" className="btn-secondary">
                    Get In Touch
                  </Link>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE - Your profile photo */}
            <div className="
              flex justify-center lg:justify-end  // Centered on phones, right-aligned on computers
            ">
              <div className="relative">  {/* relative allows positioning of children */}
                {/* Background blur effect behind photo */}
                <div className="
                  absolute    // Positioned behind the photo
                  inset-0     // Covers the same area as photo
                  bg-gradient-to-r from-primary-500 to-secondary-500  // Purple gradient
                  rounded-full  // Perfect circle
                  blur-3xl      // Very blurry
                  opacity-20    // Mostly transparent (just a hint of color)
                "></div>
                {/* Your actual profile photo */}
                <img
                  src="/assets/logo.jpeg"
                  alt="Tiearra Westbrook"  // Description for screen readers
                  className="
                    relative    // Positioned in front of blur
                    w-80 h-80   // Width and height (80 units each)
                    object-cover // Image fills space nicely without distortion
                    rounded-full // Perfect circle shape
                    border-4 border-white  // Thick white border
                    shadow-2xl   // Large shadow for depth
                  "
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Technologies I Work With
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              I work with core web technologies that power modern websites and
              applications. HTML structures content, CSS styles it, and JavaScript
              adds interactivity. Together, they form the foundation of web development,
              enabling the creation of dynamic and engaging user experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto mb-16">
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-orange-100 flex items-center justify-center group-hover:bg-orange-200 transition-colors duration-300">
                <FaHtml5 className="h-10 w-10 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-900">HTML5</h3>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-blue-100 flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300">
                <BsFiletypeCss className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900">CSS3</h3>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-yellow-100 flex items-center justify-center group-hover:bg-yellow-200 transition-colors duration-300">
                <SiJavascript className="h-10 w-10 text-yellow-600" />
              </div>
              <h3 className="font-semibold text-gray-900">JavaScript</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Expanding Skills Section */}
      <section className="section-padding gradient-bg text-white">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Expanding My Skills
            </h2>
            <p className="text-xl text-white/90 leading-relaxed">
              As I continue my journey in web development, I'm diving into new
              technologies and frameworks to enhance my skill set. From exploring
              the capabilities of Next.js to mastering the intricacies of Python,
              I'm committed to continuous learning and growth in the tech industry.
              I'm currently improving my proficiency in Next.js, Git and MongoDB.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                <FaGitAlt className="h-10 w-10 text-white" />
              </div>
              <h3 className="font-semibold text-white">Git</h3>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                <TbBrandNextjs className="h-10 w-10 text-white" />
              </div>
              <h3 className="font-semibold text-white">Next.js</h3>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                <SiMongodb className="h-10 w-10 text-white" />
              </div>
              <h3 className="font-semibold text-white">MongoDB</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Preview Section */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Check out some of my projects that showcase my skills and creativity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
            <div className="card group cursor-pointer">
              <div className="relative overflow-hidden">
                <img
                  src="/assets/CalculatorApp.png"
                  alt="Calculator App"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary-600/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a
                    href="https://tiearrascalculatorapp.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-lg font-semibold"
                  >
                    View Live Demo
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Calculator App</h3>
                <p className="text-gray-600">Interactive calculator with clean interface</p>
              </div>
            </div>

            <div className="card group cursor-pointer">
              <div className="relative overflow-hidden">
                <img
                  src="/assets/pricingApp.png"
                  alt="Pricing App"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary-600/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a
                    href="https://myinteractivepricing.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-lg font-semibold"
                  >
                    View Live Demo
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Pricing Component</h3>
                <p className="text-gray-600">Interactive pricing slider component</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link to="/projects" className="btn-primary">
              View All Projects
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Let's Work Together
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Feel free to reach out if you have any questions or would like to collaborate!
            </p>
            <Link to="/contact" className="btn-primary">
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}