import React, { useState } from "react";
import "./Navbar.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return <nav className="navbar">
        <a className="title" href="/">Portfolio</a>
        <div className="menu">
            <img className="menuBtn" 
            
            src={menuOpen
                ? "/assets/navbar/closeIcon.png"
                : "/assets/navbar/menuIcon.png"      
            }
                alt="menu-button"
                onClick={() => setMenuOpen(!menuOpen)}
                ></img>
            <ul 
            className="menuItems"
            onClick={() => setMenuOpen(false)}
            >
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    </nav>;
};



