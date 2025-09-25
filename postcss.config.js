// POSTCSS CONFIG FILE - This processes your CSS before it goes to the browser
// PostCSS is like a "translator" that takes your CSS and makes it work in all browsers
// Think of it like having someone translate your CSS so every browser understands it

export default {
  // PLUGINS - These are like "workers" that each do a specific job with your CSS
  plugins: {
    // TAILWINDCSS PLUGIN - Converts Tailwind classes (like "bg-blue-500") into actual CSS
    // When you write "bg-blue-500" in your HTML, this plugin creates the real CSS code
    // Example: "bg-blue-500" becomes "background-color: #3b82f6;"
    tailwindcss: {},

    // AUTOPREFIXER PLUGIN - Adds browser-specific prefixes to CSS properties
    // Some browsers need special prefixes like "-webkit-" or "-moz-" to understand CSS
    // This plugin automatically adds those prefixes so your styles work everywhere
    // Example: "transform: rotate(45deg)" becomes "-webkit-transform: rotate(45deg); transform: rotate(45deg);"
    autoprefixer: {},
  },
}