import React from "react";
import "./Hero.css";

function Hero() {
  return (
<section className="container">
    <div className="content">
        <h1 className="title">
            Hi, I'm Sailesh
            </h1>
            <p className="description">
                I have recently changed careers to a full stack developer 
            </p>
        <a href="mailto:myemail@email.com" className="contactBtn" >Contact Me</a>
    </div>
    <img
    src="/assets/about/Me.png"
    alt="Picture of Me" 
    className="meImg"
    ></img>
    <div className="topBlur"></div>
    <div className="bottomBlur"></div>
</section>


  )
}

export default Hero
