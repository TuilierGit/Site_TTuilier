import React from "react";
import Navigation from "../components/Navigation";
import ProjectsTitle from "../components/ProjectsTitle";

const Projects = () => {
  return (
    <div>
      <Navigation />
      <div className="content">
        <ProjectsTitle />
        <div className="projects-content">
          <h2>My current project</h2>

          <div className="project-1">
            <h3>Space Finance</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
