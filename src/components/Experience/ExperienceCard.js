import React from "react";
import { FaGithub } from "react-icons/fa";
import { BsBoxArrowUpRight } from "react-icons/bs";
import LanguageIcon from "../LanguageIcon/Languageicon.js";
import Tilt from "react-parallax-tilt";

export default function ExperienceCard({
  experience,
  reverse,
  stackList,
  containerRef,
}) {
  return (
    <div
      className="project-card"
      style={{
        flexDirection: `${reverse ? "row-reverse" : "row"}`,
      }}
    >
      <Tilt>
        <div
          className="project-card-img"
          // style={{ transform: `${reverse ? 'translateX(5rem)' : ''}` }}
        >
          <img src={experience.image} alt="" />
        </div>
      </Tilt>

      <div className="project-card-info">
        <h6 className="project-card-title-featured">PROJECT</h6>
        <h1 className="project-card-title">{experience.name}</h1>
        <span className="project-card-links">
          <p>{experience.position}</p>
        </span>
        <p className="project-card-text">{experience.desc}</p>
        <div className="stack-container">
          <h3>Tech stack used : </h3>
          {stackList.map((language, index) => {
            return (
              <LanguageIcon
                key={index}
                language={language}
                containerRef={containerRef}
                cardIcon={true}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
