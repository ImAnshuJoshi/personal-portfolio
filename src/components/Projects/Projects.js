import React from "react";
import { Image } from "@chakra-ui/image";
import { Box, Heading, Text, Button, Flex, Center } from "@chakra-ui/react";
import { languages } from "../../data";
import { motion } from "framer-motion";
import { IoIosApps } from "react-icons/io";
import { projects } from "../../data";
import ProjectCard from "./ProjectCard";

function Projects() {
  const containerRef = React.useRef(null);
  return (
    <section className="projects" id="projects">
      <div className="techstack-header">
        <IoIosApps /> Projects
        <div className="horizontal-line"></div>
      </div>
      <div className="projects-container">
        {projects.map((project, index) => {
          const skillList = project.stack.map((item) => {
            const language = languages.find((x) =>x.name === item)
            console.log(language);
            return language;
          });
          console.log(skillList);
          return (
            <ProjectCard
              key={index}
              project={project}
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

export default Projects;
