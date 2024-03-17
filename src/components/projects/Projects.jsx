import React from "react";
import "./Projects.css";
import projects from "../../data/projects.json";
import ProjectCard from "./ProjectCard";


function Projects() {
    return (
        <section className="container" id="projects">
            <h2 className="title">Projects</h2>
            <div className="projects">
                {projects.map((project, id) => {
                    return (
                        <ProjectCard  key={id} project={project}/>
                    );
                })}
            </div>

        </section>
    );
};

export default Projects