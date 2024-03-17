import React from "react";
import "./About.css";

function About() {
  return (
<section className="about_container" id="about">
    <h2 className="about_title">About</h2>

    <div className="about_content">

        <img src="/assets/about/Me3.png" alt="image of me in superman top" className="about_aboutImage"></img>
        
        <ul className="about_aboutItems">

        <li className="about_aboutItem">
        <img src="/assets/about/cursorIcon.png" alt="cursor icon"></img>
            <div className="about_aboutItemText">
                <h3>Mission Statement</h3>
                <p>I may not really be superman, but you will be suprised at what i can do </p>
            </div>
            </li>

            <li className="about_aboutItem">
            <img src="/assets/about/cursorIcon.png" alt="cursor icon"></img>

            <div className="about_aboutItemText">
                <h3>Frontend Developer</h3>
                <p>Frontend developer who can build responsive sites </p>
            </div>
            </li>
            <li className="about_aboutItem">
            <img src="/assets/about/serverIcon.png" alt="server icon"></img>
            <div className="about_aboutItemText">
                <h3>Backend Developer</h3>
                <p>Frontend developer who can build fast back-end systems and APIs 
                     </p>
            </div>
            </li>
            <li className="about_aboutItem">
            <img src="/assets/about/uiIcon.png" alt="UI icon"></img>
            <div className="about_aboutItemText">
                <h3>UI Designer</h3>
                <p>I have been building landing pages to demonstrate my projects 
                     </p>
            </div>
            </li>
        </ul>
    </div>
</section>
  )
}

export default About
