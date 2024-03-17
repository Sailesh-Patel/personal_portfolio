import React from "react";
import "./Hero.css";

function Hero() {
  return (
<section className="hero_container">
    <div className="hero_content">
        <h1 className="hero_title">
            Hi, I'm Sailesh
            </h1>
            <p className="hero_description">
                I have recently changed career to be a full stack developer. 
            </p>
            <p className="hero_description">
              Let me know what type of project your interested in, and i'll show you what i can do 
            </p>
        <a href="mailto:myemail@email.com" className="hero_contactBtn" >Contact Me</a>
    </div>
    <img
    src="/assets/about/Me2.png"
    alt="Picture of Me" 
    className="hero_meImg"
    ></img>
    <div className="hero_topBlur"></div>
    <div className="hero_bottomBlur"></div>
</section>


  )
}

export default Hero
