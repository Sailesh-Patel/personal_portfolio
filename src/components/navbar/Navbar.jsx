import React, {useState } from "react";
import  "./Navbar.css";
import {getImageUrl} from "../../utils";

export const Navbar = () => {
    return <nav className="navbar">
        <a className="title" href="/">Portfolio</a>
        <div className="menu">
            <img className="menuBtn" src={getImageUrl("navbar/menuIcon.png")} alt="menu-button"></img>
            <ul className="menuItems">
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    </nav>;
};



