import React from "react";
// import "./Contact.css"

function Contact() {
  return (
<footer id="contact" className="container">
    <div  className="text">
        <h2>Contact</h2>
        <p>Feel free to contact me</p>
    </div>
    <ul  className="links">
        <li  className="link">
            <img src="/assets/contact/emailicon.png" 
            alt="Email Icon"></img>
            <a href="mailto:myemail.email.com">myemail@email.com</a>
        </li>
        <li  className="link">
            <img src="/assets/contact/linkedinicon.png" 
            alt="LinkedIn Icon"></img>
            <a href="https://www.linkedin.com/myname">Linkedin.com/myname</a>
        </li>
        <li  className="link">
            <img src="/assets/contact/githubicon.png" 
            alt="Github Icon"></img>
            <a href="https://github.com/myname">github.com/myname</a>
        </li>
    </ul>
</footer>
  )
}

export default Contact
