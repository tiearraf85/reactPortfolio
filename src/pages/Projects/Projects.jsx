// PROJECTS PAGE COMPONENT - Your portfolio showcase with interactive carousel
// This page displays all your work in a slideshow format that visitors can navigate

import { useState } from "react";  // For remembering which project is currently shown
import Nav from "../../components/Navbar/Nav";    // Navigation menu
import Footer from "../../components/Footer/Footer"; // Footer section
// Import icons: left/right arrows and external link icon
import { ChevronLeftIcon, ChevronRightIcon, ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

// MAIN PROJECTS PAGE COMPONENT
export default function Projects() {
  // STATE - Remember which project we're currently showing
  // Starts at 0 (first project in the array)
  const [currentSlide, setCurrentSlide] = useState(0);

  // PROJECTS DATA - Array of all your projects (like a photo album)
  // Each project is an object with information about it
  const projects = [
    {
      id: 1,  // Unique number for this project
      title: "Calculator App",  // Name that shows to visitors
      description: "Interactive calculator built with HTML, CSS, and JavaScript featuring a clean interface and full mathematical operations.",  // What it does
      image: "/assets/CalculatorApp.png",  // Screenshot/photo of project
      link: "https://tiearrascalculatorapp.netlify.app/",  // Working website URL
      type: "live",  // "live" = working website, "design" = just pictures
      technologies: ["HTML", "CSS", "JavaScript"]  // What you used to build it
    },
    {
      id: 2,
      title: "Interactive Pricing Component",
      description: "Dynamic pricing slider with toggle functionality showcasing modern UI/UX design principles.",
      image: "/assets/pricingApp.png",
      link: "https://myinteractivepricing.netlify.app/",
      type: "live",
      technologies: ["React", "CSS", "JavaScript"]
    },
    {
      id: 3,
      title: "SkillzUp UI/UX Design",
      description: "Complete branding and UI/UX mockup for educational platform with modern design aesthetics.",
      image: "/assets/SkillzUp.png",
      type: "design",
      technologies: ["Figma", "UI/UX", "Branding"]
    },
    {
      id: 4,
      title: "Empower Marketing Flyer",
      description: "Professional marketing flyer design with custom branding and visual hierarchy.",
      image: "/assets/EmpowerFlyers.png",
      type: "design",
      technologies: ["Graphic Design", "Branding", "Adobe"]
    },
    {
      id: 5,
      title: "Informational Brochure - Page 1",
      description: "Professional brochure design with cohesive branding and clear information architecture.",
      image: "/assets/1.png",
      type: "design",
      technologies: ["Graphic Design", "Typography", "Layout"]
    },
    {
      id: 6,
      title: "Informational Brochure - Page 2",
      description: "Continuation of professional brochure design maintaining visual consistency.",
      image: "/assets/2.png",
      type: "design",
      technologies: ["Graphic Design", "Typography", "Layout"]
    }
  ];

  // CAROUSEL NAVIGATION FUNCTIONS - Control which project shows

  // Go to next project (when right arrow clicked)
  // The % makes it loop back to first after last project
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % projects.length);

  // Go to previous project (when left arrow clicked)
  // Adding projects.length prevents negative numbers
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);

  // Jump to any specific project (when dot clicked)
  const goToSlide = (index) => setCurrentSlide(index);

  // Get the project that should be displayed right now
  const currentProject = projects[currentSlide];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      <Nav />

      {/* ===== HERO SECTION - Page title ===== */}
      <section className="pt-24 pb-16">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              My <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">Projects</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              A showcase of my web development projects and design work.
              From interactive applications to comprehensive branding solutions.
            </p>
          </div>

          {/* ===== PROJECT CAROUSEL ===== */}
          <div className="relative max-w-5xl mx-auto">
            {/* ===== MAIN PROJECT CARD - The big showcase box ===== */}
            <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white">
              {/* PROJECT IMAGE SECTION */}
              <div className="relative aspect-video md:aspect-[16/10] overflow-hidden">
                {/* Show different content if project is live vs design */}
                {currentProject.type === 'live' ? (
                  /* For LIVE projects - make image clickable */
                  <a
                    href={currentProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative group"
                  >
                    {/* Project screenshot */}
                    <img
                      src={currentProject.image}
                      alt={currentProject.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Overlay that appears on hover */}
                    <div className="absolute inset-0 bg-primary-600/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-center text-white">
                        <ArrowTopRightOnSquareIcon className="h-12 w-12 mx-auto mb-2" />
                        <span className="text-xl font-semibold">View Live Project</span>
                      </div>
                    </div>
                  </a>
                ) : (
                  /* For DESIGN projects - just show image (not clickable) */
                  <img
                    src={currentProject.image}
                    alt={currentProject.title}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>

              {/* PROJECT INFORMATION SECTION - Text below image */}
              <div className="p-8 md:p-12">
                {/* Top row - title/description on left, badge/button on right */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  {/* LEFT SIDE - Title and description */}
                  <div className="flex-1 min-w-0">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                      {currentProject.title}
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {currentProject.description}
                    </p>
                  </div>

                  {/* RIGHT SIDE - Badge and button */}
                  <div className="flex flex-col gap-3">
                    {/* Badge showing project type */}
                    <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold ${
                      currentProject.type === 'live'
                        ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                        : 'bg-purple-100 text-purple-800 border border-purple-200'
                    }`}>
                      {currentProject.type === 'live' ? '🚀 Live Project' : '🎨 Design Work'}
                    </span>

                    {currentProject.type === 'live' && (
                      <a
                        href={currentProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary text-center"
                      >
                        View Live
                      </a>
                    )}
                  </div>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {currentProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* ===== NAVIGATION ARROWS - Left and Right buttons ===== */}
            {/* LEFT ARROW BUTTON */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 -translate-x-16 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center text-gray-600 hover:text-primary-600 hover:scale-110 z-10"
              aria-label="Previous project"
            >
              <ChevronLeftIcon className="h-6 w-6" />
            </button>

            {/* RIGHT ARROW BUTTON */}
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 translate-x-16 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center text-gray-600 hover:text-primary-600 hover:scale-110 z-10"
              aria-label="Next project"
            >
              <ChevronRightIcon className="h-6 w-6" />
            </button>

            {/* ===== PAGINATION DOTS - Shows which project is active ===== */}
            <div className="flex justify-center mt-8 gap-3">
              {/* Create a dot for each project */}
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'bg-primary-500 scale-125'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>

            {/* PROJECT COUNTER - Shows "1 of 6" etc. */}
            <div className="text-center mt-6">
              <span className="text-sm text-gray-500">
                {currentSlide + 1} of {projects.length}
              </span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}