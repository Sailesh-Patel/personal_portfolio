import React from "react";
import "./Experience.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";



function Experience() {
  return (
<section className="container" id="experience">
    <h2 className="title" >Experience</h2>
    <div className="content">
        <div className="skills">
            {skills.map((skill, id) => {
                return (
                <div key={id}  className="skill">
                    <div  className="skillImageContainer">
                         <img src={skill.imageSrc}
                        alt={skill.title}></img>
                        </div>
                        <p>{skill.title}</p>
                    </div>
            );
        })}
        </div>
        <ul  className="history">
            { history.map((historyItem, id) => {
                    return (
                        <li key={id}  className="historyItem">
                        <img 
                        src={historyItem.imageSrc} 
                        alt={`${historyItem.organisation} Logo`}></img>
<div  className="historyItemDetails">
    <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
    <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
    <ul>{historyItem.experiences.map((experience, id) => {
        return <li key={id}>{experience}</li>
    })}</ul>
</div>
                    </li>
                    );
                })}
        </ul>
    </div>

</section>
  )
}

export default Experience
