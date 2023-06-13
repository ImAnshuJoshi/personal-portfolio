import React from "react";
import { languages } from "../../data";
import { experiences } from "../../data";
import ExperienceCard from "./ExperienceCard";
import { BsFillAwardFill } from "react-icons/bs";

function Experience() {
  const containerRef = React.useRef(null);
  return (
    <section className="projects" id="projects">
      <div className="techstack-header">
        <BsFillAwardFill /> Experience
        <div className="horizontal-line"></div>
      </div>
      <div className="projects-container">
        {experiences.map((experience, index) => {
          const skillList = experience.stack.map((item) => {
            const language = languages.find((x) => x.name === item);
            console.log(language);
            return language;
          });
          console.log(skillList);
          return (
            <ExperienceCard
              key={index}
              experience={experience}
              stackList={skillList}
              containerRef={containerRef}
              reverse={index % 2 !== 0 ? true : false}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Experience;
