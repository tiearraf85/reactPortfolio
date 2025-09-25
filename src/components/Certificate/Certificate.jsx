// CERTIFICATE COMPONENT - Shows your achievements in a grid
// This displays all your certificates/certifications in a nice card layout
// Used on the About page to showcase your learning and qualifications

// MAIN CERTIFICATE COMPONENT
export default function Certificate() {
  // CERTIFICATES DATA - Array of all your certificates
  // Each certificate has:
  // - src: where the image file is located
  // - alt: description for screen readers (blind/vision impaired users)
  // - title: what shows under the certificate image
  const certificates = [
    { src: '/assets/ARM.png', alt: 'ARM Certificate', title: 'ARM Certification' },
    { src: '/assets/CEHS.png', alt: 'CEHS Certificate', title: 'CEHS Certification' },
    { src: '/assets/ComputerBasics.png', alt: 'Computer Basics Certificate', title: 'Computer Basics' },
    { src: '/assets/CSPP.png', alt: 'CSPP Certificate', title: 'CSPP Certification' },
    { src: '/assets/CCStrategy.png', alt: 'CCStrategy Certificate', title: 'CCStrategy' },
    { src: '/assets/GGPFYBP.png', alt: 'GGPFYBP Certificate', title: 'GGPFYBP' },
    { src: '/assets/JS.png', alt: 'JavaScript Certificate', title: 'JavaScript' },
    { src: '/assets/JSClasses.png', alt: 'JS Classes Certificate', title: 'JavaScript Classes' },
    { src: '/assets/MRF.png', alt: 'MRF Certificate', title: 'MRF Certification' },
    { src: '/assets/TipsBBW.png', alt: 'Tips BBW Certificate', title: 'Tips BBW' },
  ];

  return (
    // Main container
    <div className="w-full">  {/* Takes full width of parent */}
      {/* RESPONSIVE GRID - Changes columns based on screen size */}
      <div className="
        grid              // Creates grid layout
        grid-cols-1       // 1 column on phones (certificates stack vertically)
        sm:grid-cols-2    // 2 columns on small tablets
        lg:grid-cols-3    // 3 columns on laptops
        xl:grid-cols-4    // 4 columns on large desktop screens
        gap-6             // Space between certificate cards
      ">
        {/* Loop through each certificate and create a card */}
        {certificates.map((cert, index) => (
          <div
            key={index}  // Unique ID for React (using position in array)
            className="
              group       // Allows hover effects on child elements
              bg-white    // White background
              rounded-xl  // Very rounded corners
              shadow-sm   // Small shadow normally
              hover:shadow-lg  // Bigger shadow when mouse hovers
              transition-all duration-300  // Smooth animations
              overflow-hidden  // Hide parts that go outside the card
              border border-gray-200  // Light gray border
            "
          >
            {/* CERTIFICATE IMAGE CONTAINER */}
            <div className="
              aspect-[4/3]     // 4:3 ratio (like old TV shape - keeps all images same size)
              overflow-hidden  // Hide overflow when image zooms
            ">
              {/* The actual certificate image */}
              <img
                src={cert.src}   // Image file location
                alt={cert.alt}   // Description for screen readers
                className="
                  w-full h-full  // Fill the container
                  object-cover   // Image covers space nicely without distortion
                  group-hover:scale-105  // Zoom 5% bigger when card is hovered
                  transition-transform duration-300  // Smooth zoom animation
                "
              />
            </div>
            {/* CERTIFICATE TITLE SECTION */}
            <div className="p-4">  {/* Padding around the text */}
              <h3 className="
                font-semibold  // Bold-ish text
                text-gray-900  // Very dark gray (almost black)
                text-sm        // Small text size
                text-center    // Centered
              ">
                {cert.title}  {/* Show the certificate name */}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}