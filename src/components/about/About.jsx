import React from "react";
import "./About.css";

function About() {
  return (
<section className="container" id="about">
    <h2 className="title">About</h2>

    <div className="content">

        <img src="/assets/about/Me3.png" alt="image of me in superman top" className="aboutImage"></img>
        
        <ul className="aboutItems">

        <li className="aboutItem">
        <img src="/assets/about/cursorIcon.png" alt="cursor icon"></img>
            <div className="aboutItemText">
                <h3>Mission Statement</h3>
                <p>I may not really be superman, but you will be suprised at what i can do </p>
            </div>
            </li>

            <li className="aboutItem">
            <img src="/assets/about/cursorIcon.png" alt="cursor icon"></img>

            <div className="aboutItemText">
                <h3>Frontend Developer</h3>
                <p>Frontend developer who can build responsive sites </p>
            </div>
            </li>
            <li className="aboutItem">
            <img src="/assets/about/serverIcon.png" alt="server icon"></img>
            <div className="aboutItemText">
                <h3>Backend Developer</h3>
                <p>Frontend developer who can build fast back-end systems and APIs 
                     </p>
            </div>
            </li>
            <li className="aboutItem">
            <img src="/assets/about/uiIcon.png" alt="UI icon"></img>
            <div className="aboutItemText">
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
