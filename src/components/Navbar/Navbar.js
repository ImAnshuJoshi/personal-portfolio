import React, { useState } from "react";
import { navLinks } from "../../data.js";
import { FaBars } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";
// import "./Navbar.css";

export default function Navbar({}) {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
    document.querySelector("av-links-container").classList.remove("open");
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  const navRef = React.useRef(null);
  const childRef = React.useRef(null);
  const containerRef = React.useRef(null);

  React.useEffect(() => {
    navRef.current.style.top = `0`;
  }, []);

  return (
    <header>
      <nav className={`nav ${isNavOpen ? "nav-open" : ""}`} ref={navRef}>
        <div className="nav-header flex-space-between">
          <div className="nav-toggle-btn" onClick={toggleNav}>
            {isNavOpen ? (
              <AiFillCloseCircle className="nav-icon" />
            ) : (
              <FaBars className="nav-icon" />
            )}
          </div>
        </div>
        <div className={`nav-links-container ${isNavOpen ? "" : "open"}`}>
          <ul className="nav-links flex" ref={childRef}>
            {navLinks.map((link, index) => {
              return (
                <li
                  key={index}
                  className="links-list-item pd-side-medium"
                  onClick={closeNav}
                >
                  <a href={link.url} className="fancy-link">
                    {link.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
}
