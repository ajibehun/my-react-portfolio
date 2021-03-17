import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <div className={scrolled ? null : "section"}>
      <div className={scrolled ? null : "container"}>
        <div className={scrolled ? "navbar-scrolled" : "navbar-wrapper"}>
          <div role="button" className="name">
            My Portfolio.
          </div>
          <div className="links-wrapper">
            <button>About</button>
            <button>Project</button>
            <button>Contact</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
