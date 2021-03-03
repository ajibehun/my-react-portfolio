import React from "react";
import Fade from "react-reveal/Fade";

const Header = () => {
  return (
    <div className="section" id="home">
      <div className="container">
        <div className="header-wrapper">
          <Fade bottom>
            <h1>
              Hi, I am Azib.{" "}
              <span role="img" aria-label="Emoji">
                😁
              </span>
            </h1>
          </Fade>
          <Fade bottom cascade>
            <div className="heading-wrapper">
              <h2>Front-end Development With React</h2>
              <h2>User Interaction Design</h2>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Header;
