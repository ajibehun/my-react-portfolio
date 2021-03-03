import React from "react";
import Fade from "react-reveal/Fade";
import Card from "../utils/card";
import data from "../mockdata";

const Project = () => {
  return (
    <div className="section" id="work">
      <div className="container">
        <div className="work-wrapper">
          <h3>Projects</h3>

          <div className="grid">
            <Fade bottom cascade>
              {data.projects.map((project) => (
                <Card
                  key={project.id}
                  heading={project.title}
                  paragraph={project.para}
                  imgUrl={project.imageSrc}
                  projectLink={project.url}
                />
              ))}
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
