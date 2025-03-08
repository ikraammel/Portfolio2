import { motion } from "framer-motion";
import React from "react";
import CustomExperience from "./custom-experience/CustomExperience";

const Experience = () => {
  return (
    <section id="experience">
      {/* Animation du texte "Explore my" */}
      <motion.p
        className="section__text__p1"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Explore my
      </motion.p>

      {/* Animation du titre "Experience" */}
      <motion.h1
        className="title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        Experience
      </motion.h1>

      <div className="experience-details-container">
        <div className="about-container">
          {/* Animation des détails de programmation */}
          <CustomExperience
            titre="Programming Languages"
            skills={["Python", "C language", "Javascript", "Java"]}
          />
          {/* Animation des détails du développement web */}
          <CustomExperience
            titre="Web development"
            skills={["HTML", "CSS", "Javascript", "React"]}
          />
        </div>

        {/* Animation de la flèche */}
        <motion.img
          src="arrow.png"
          alt="arrow icon"
          className="icon arrow"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
          whileHover={{ scale: 1.2 }}
          onClick={() => (window.location.href = "#projects")}
        />
      </div>
    </section>
  );
};

export default Experience;
