//import {React} from 'react';
import { Link } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
  return (
    <>
     
      <nav className="nav">
        
        <button className="top">
          <Link to="/">Home</Link>
        </button>
        
        <button className="top">
          <Link to="/about">About</Link>
        </button>
       
        <button className="top">
          <Link to="/skills">Skills</Link>
        </button>

        <button className="top">
          <Link to="/projects">Projects</Link>
        </button>

        <button className="top">
          <Link to="/contact">Contact</Link>
        </button>
      </nav>
    </>
  );
}
