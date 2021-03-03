import React from "react";
import data from "../mockdata";

const Skills = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="skills-container">
          <h3>Skills</h3>
          <div className="skills-grid">
            {data.skills.map((skill) => (
              <div className="skill" key={skill.id}>
                <img src={skill.img} alt="css" />
                <p>{skill.para}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
