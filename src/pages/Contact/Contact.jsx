// CONTACT PAGE COMPONENT - Where visitors can send you messages
// This page includes a working email form and your contact information

import { useRef, useState } from "react";  // useRef for form reference, useState for memory
import Nav from '../../components/Navbar/Nav';    // Navigation menu
import Footer from "../../components/Footer/Footer"; // Footer section
import emailjs from "@emailjs/browser";  // Service that sends emails without a backend server
// Import icons for email, phone, location
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/24/outline";
// Import social media icons
import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";

// MAIN CONTACT PAGE COMPONENT
const Contact = () => {
  // FORM REFERENCE - Like a name tag for the form so EmailJS can find it
  const form = useRef();

  // STATE VARIABLES - Memory boxes that remember form data and status
  const [fname, setFname] = useState("");       // First name input
  const [lname, setLname] = useState("");       // Last name input
  const [message, setMessage] = useState("");   // Message textarea
  const [showModal, setShowModal] = useState(false);    // Show success popup?
  const [isSubmitting, setIsSubmitting] = useState(false); // Is form being sent?

  // EMAIL SENDING FUNCTION - What happens when form is submitted
  const sendEmail = (e) => {
    e.preventDefault();     // Stop page from refreshing
    setIsSubmitting(true);  // Show "Sending..." on button

    // Use EmailJS to send the form as an email
    emailjs
      .sendForm(
        "service_cscjpfs",     // Your EmailJS service ID
        "template_dz61v5o",    // Your email template ID
        form.current,          // The form data
        {
          publicKey: "UMwtM1Jd3F4vO4HIS",  // Your public API key
        }
      )
      .then(
        () => {
          // SUCCESS - Email was sent!
          console.log("SUCCESS!");
          form.current.reset();   // Clear the form
          setFname("");           // Clear first name memory
          setLname("");           // Clear last name memory
          setMessage("");         // Clear message memory
          setShowModal(true);     // Show success popup
          setIsSubmitting(false); // Hide "Sending..." text
        },
        (error) => {
          // FAILED - Something went wrong
          console.log("FAILED...", error.text);
          setIsSubmitting(false); // Hide "Sending..." text
          // Note: In a real app, you'd probably show an error message to user
        }
      );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      <Nav />

      {/* ===== HERO SECTION - Page title and introduction ===== */}
      <section className="
        pt-24  // Padding top (space from navigation)
        pb-16  // Padding bottom
      ">
        <div className="container">  {/* Centers content */}
          <div className="
            max-w-4xl   // Maximum width
            mx-auto     // Centers horizontally
            text-center // Centers text
            mb-16       // Space below
          ">
            {/* Page title with gradient "Touch" */}
            <h1 className="
              text-4xl md:text-6xl  // Large on phones, huge on tablets+
              font-bold             // Bold text
              text-gray-900         // Very dark gray
              mb-6                  // Space below
            ">
              Get In <span className="
                bg-gradient-to-r from-primary-500 to-secondary-500  // Purple gradient
                bg-clip-text text-transparent  // Gradient shows through text
              ">Touch</span>
            </h1>
            <p className="
              text-xl         // Large text
              text-gray-600   // Medium gray
              leading-relaxed // Comfortable line spacing
            ">
              Let's work together to bring your ideas to life. I'd love to hear from you!
            </p>
            {/* Decorative line under title */}
            <div className="
              w-24 h-1    // Thin line
              bg-gradient-to-r from-primary-500 to-secondary-500  // Purple gradient
              mx-auto     // Centers the line
              rounded-full // Rounded ends
              mt-8        // Space above
            "></div>
          </div>

          {/* Two-column layout: contact info left, form right */}
          <div className="
            grid lg:grid-cols-2  // 2 columns on large screens
            gap-16               // Space between columns
            items-start          // Align to top
          ">
            {/* ===== LEFT SIDE - CONTACT INFORMATION ===== */}
            <div className="space-y-8">  {/* Space between sections */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Let's Connect</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  I'm always open to discussing new opportunities, creative projects,
                  or just having a chat about web development and design.
                </p>
              </div>

              <div className="space-y-6">
                {/* EMAIL CONTACT BOX */}
                <div className="flex items-center space-x-4">  {/* Icon and text side by side */}
                  {/* Icon container */}
                  <div className="
                    w-12 h-12       // Square size
                    bg-primary-100  // Light purple background
                    rounded-lg      // Rounded corners
                    flex items-center justify-center  // Centers icon
                  ">
                    <EnvelopeIcon className="h-6 w-6 text-primary-600" />  {/* Email icon */}
                  </div>
                  {/* Text content */}
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <a
                      href="mailto:gracemilestoneinc@gmail.com"  // Opens email app when clicked
                      className="
                        text-primary-600       // Purple color
                        hover:text-primary-700 // Darker purple on hover
                        transition-colors duration-200  // Smooth color change
                      "
                    >
                      gracemilestoneinc@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <PhoneIcon className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <a
                      href="tel:954-806-6996"
                      className="text-primary-600 hover:text-primary-700 transition-colors duration-200"
                    >
                      (954) 806-6996
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <MapPinIcon className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Based In</h3>
                    <p className="text-gray-600">Florida, USA</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-8 border-t border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-4">Follow Me</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://www.linkedin.com/in/tiearra-westbrook-762024351/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center hover:bg-blue-200 transition-colors duration-200"
                  >
                    <FaLinkedin className="h-6 w-6 text-blue-600" />
                  </a>
                  <a
                    href="https://github.com/tiearraf85"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors duration-200"
                  >
                    <FaGithub className="h-6 w-6 text-gray-600" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center hover:bg-blue-200 transition-colors duration-200"
                  >
                    <FaFacebook className="h-6 w-6 text-blue-600" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
              <form onSubmit={sendEmail} ref={form} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="fname" className="block text-sm font-semibold text-gray-900 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="fname"
                      name="fname"
                      value={fname}
                      onChange={(e) => setFname(e.target.value)}
                      placeholder="Your first name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                    />
                  </div>
                  <div>
                    <label htmlFor="lname" className="block text-sm font-semibold text-gray-900 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lname"
                      name="lname"
                      value={lname}
                      onChange={(e) => setLname(e.target.value)}
                      placeholder="Your last name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell me about your project..."
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Success Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full animate-fade-in">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h2>
              <p className="text-gray-600 mb-6">
                Thank you for reaching out. I'll get back to you as soon as possible.
              </p>
              <button
                onClick={() => setShowModal(false)}
                className="btn-primary"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Contact;