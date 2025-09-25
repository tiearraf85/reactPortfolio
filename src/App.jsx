
// APP.JSX - The main controller of your portfolio website
// Think of this like the table of contents in a book - it decides which page to show

// REACT ROUTER IMPORTS - Tools that let people navigate between different pages
import { Routes, Route} from 'react-router-dom';

// PAGE IMPORTS - All the different pages in your portfolio
import Home from './pages/Home/Home.jsx';           // Landing page (what people see first)
import About from './pages/About/About.jsx';         // Your personal story and skills
import Projects from './pages/Projects/Projects.jsx'; // Showcase of your work
import Contact from './pages/Contact/Contact.jsx';   // How people can reach you

// MAIN APP COMPONENT - This controls your entire website
export default function App() {
    return(
        // ROUTES - Like a GPS system that shows different pages based on the web address
        <Routes>
            {/* HOME PAGE - Shows when someone visits yoursite.com */}
            <Route path="/" element={<Home/>}/>

            {/* ABOUT PAGE - Shows when someone visits yoursite.com/about */}
            <Route path="/about" element={<About/>}/>

            {/* PROJECTS PAGE - Shows when someone visits yoursite.com/projects */}
            <Route path="/projects" element={<Projects/>}/>

            {/* CONTACT PAGE - Shows when someone visits yoursite.com/contact */}
            <Route path="/contact" element={<Contact/>}/>
        </Routes>
        );
    }

