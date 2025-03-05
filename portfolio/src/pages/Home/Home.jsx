import React from "react";
import Nav from "../../components/Navbar/Nav.jsx";
// import {useState} from "react";
// import Nav from "./Nav.css";



export default function Home() {

    return (
        <div className="home">
            <Nav />
            <h1>Welcome to my portfolio</h1>
            <p>My name is John Doe, and I am a software developer.</p>
        </div>
    )

}