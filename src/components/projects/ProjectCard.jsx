import React from "react";
import "./ProjectCard.css";
import projects from "../../data/projects.json";
import { getImageUrl } from "../../utils";

function ProjectCard({project : {title, imageSrc, description, skills, demo, source}}) {
    // const project = props.project
  return (
    <div className="project_card_container">
    <img src={imageSrc}
        alt={`Image of ${title}`}
        className="project_card_image"
    ></img>
    <h3 className="project_card_title">{title}</h3>
    <p className="project_card_description">{description}</p>
    <ul className="project_card_skills">
        {skills.map((skill, id) => {
            return (
            <li key={id} className="project_card_skill">{skill}</li>
            );
        })}
    </ul>
    <div className="project_card_links">
        <a href={demo} className="project_card_link">Demo</a>
        <a href={source} className="project_card_link">Source</a>
    </div>
</div>
  )
}

export default ProjectCard
