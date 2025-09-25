// ABOUT PAGE COMPONENT - Your personal story and skills page
// This is where visitors learn more about you as a person and professional

import Nav from '../../components/Navbar/Nav';       // Top navigation menu
import Footer from "../../components/Footer/Footer"; // Bottom section
import Certificate from "../../components/Certificate/Certificate"; // Your certificates grid
// Import icons for skills (code, design, innovation)
import { CodeBracketIcon, PaintBrushIcon, RocketLaunchIcon } from "@heroicons/react/24/outline";

// MAIN ABOUT PAGE COMPONENT
export default function About() {
  return (
    // Main container with gradient background
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      <Nav />

      {/* ===== HERO SECTION - Title and introduction ===== */}
      <section className="pt-24 pb-16">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-16">
            {/* Page title with gradient "Me" */}
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              About <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">Me</span>
            </h1>
            {/* Decorative line under title */}
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full"></div>
          </div>

          {/* Two-column layout */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* LEFT SIDE - Your story and skills */}
            <div className="space-y-8">
              {/* YOUR PERSONAL STORY */}
              <div className="prose prose-xl max-w-none">
                <p className="text-xl text-gray-600 leading-relaxed">
                  I'm <strong className="text-gray-900">Tiearra Westbrook</strong>, a passionate Frontend Developer with a love
                  for coding and creating innovative solutions. With a background in
                  web development, I specialize in building dynamic and user-friendly
                  applications that deliver exceptional user experiences.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  My expertise lies in React, HTML, CSS, JavaScript, and various frameworks and
                  libraries. I thrive on challenges and enjoy collaborating with teams
                  to bring ideas to life. Let's connect and explore how we can work
                  together to make a positive impact through technology.
                </p>
              </div>

              {/* SKILLS GRID - Three boxes showing what you do */}
              <div className="grid sm:grid-cols-3 gap-6">
                {/* SKILL BOX 1 - Frontend Development */}
                <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-200">
                  {/* Icon container */}
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <CodeBracketIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Frontend Development
                  </h3>
                  <p className="text-sm text-gray-600">
                    React, JavaScript, HTML, CSS
                  </p>
                </div>

                <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-200">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <PaintBrushIcon className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">UI/UX Design</h3>
                  <p className="text-sm text-gray-600">User-centered design</p>
                </div>

                <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-200">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <RocketLaunchIcon className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Innovation</h3>
                  <p className="text-sm text-gray-600">Creative problem solving</p>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE - Your photo */}
            <div className="flex justify-center">
              <div className="relative">
                {/* Background blur effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl blur-3xl opacity-20"></div>
                {/* Your photo */}
                <img
                  src="/assets/logo.jpeg"
                  alt="Tiearra Westbrook"
                  className="relative w-96 h-96 object-cover rounded-2xl border-4 border-white shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-16">
              My Journey
            </h2>

            <div className="space-y-12">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <div className="w-4 h-4 bg-primary-500 rounded-full"></div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Learning & Development</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Currently expanding my skills in MongoDB, Next.js, and AI solutions.
                    Passionate about staying current with the latest web development trends
                    and technologies.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <div className="w-4 h-4 bg-primary-500 rounded-full"></div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Frontend Specialization</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Developing expertise in React, HTML, CSS, and JavaScript to create
                    dynamic, user-friendly applications with exceptional user experiences.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <div className="w-4 h-4 bg-primary-500 rounded-full"></div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Design & Branding</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Creating strong branding and designing brochures and flyers that are
                    visually appealing and effective, combining technical skills with
                    creative design.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Certifications & Achievements
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Continuous learning through professional development and certification programs.
            </p>
          </div>
          <Certificate />
        </div>
      </section>

      <Footer />
    </div>
  );
}