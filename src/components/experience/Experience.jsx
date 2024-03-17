import React from "react";
import "./Experience.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";



function Experience() {
  return (
<section className="experience_container" id="experience">
    <h2 className="experience_title" >Experience</h2>
    <div className="experience_content">
        <div className="experience_skills">
            {skills.map((skill, id) => {
                return (
                <div key={id}  className="experience_skill">
                    <div  className="experience_skillImageContainer">
                         <img src={skill.imageSrc}
                        alt={skill.title}></img>
                        </div>
                        <p>{skill.title}</p>
                    </div>
            );
        })}
        </div>
        <ul  className="experience_history">
            { history.map((historyItem, id) => {
                    return (
                        <li key={id}  className="experience_historyItem">
                        <img 
                        src={historyItem.imageSrc} 
                        alt={`${historyItem.organisation} Logo`}></img>
<div  className="experience_historyItemDetails">
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
