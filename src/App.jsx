
import ReactDOM from 'react-dom/client';
import { Routes, Route} from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import About from './pages/About/About.jsx';
// import Skills from './pages/Skills/Skills.jsx';
import Projects from './pages/Projects/Projects.jsx';
import Contact from './pages/Contact/Contact.jsx';
// import Nav from './components/Nav.jsx';

    export default function App() {
        return( 
        
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/projects" element={<Projects/>}/>
                    {/* <Route path="/skills" element={<Skills/>}/> */}
                    <Route path="/contact" element={<Contact/>}/>
            
                    {/* <Route path="/nav" element={<Nav/>}/> */}
                </Routes>


        );  
    }

