import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <section id="projects">
      {/* Animation du titre */}
      <motion.p
        className="section__text__p1"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Browse my recent
      </motion.p>

      <motion.h1
        className="title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        Projects
      </motion.h1>

      <div className="projects-details-container">
        <div className="about-container">
          {[
            {
              img: "tajine.jpg",
              title: "Dar Tajine",
              link: "https://github.com/ikraammel/streamlit-chat",
            },
            {
              img: "perf.PNG",
              title: "If Perfumes",
              link: "https://github.com/ikraammel/if-perfumes",
            },
          ].map((project, index) => (
            <motion.div
              className="projects-container color-container"
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="project-img-container">
                <motion.img
                  src={project.img}
                  alt={project.title}
                  className="project-img"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <h2 className="experience-sub-title project-title">{project.title}</h2>
              <div className="btn-container">
                <motion.button
                  className="btn btn-color-2 project-btn"
                  onClick={() => window.location.href = project.link}
                  whileHover={{ scale: 1.1, backgroundColor: "#ff4a57" }}
                  transition={{ duration: 0.3 }}
                >
                  Github
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Animation de la flèche */}
      <motion.img
        src="arrow.png"
        alt="arrow icon"
        className="icon arrow"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
        whileHover={{ scale: 1.2 }}
        onClick={() => (window.location.href = '#contact')}
      />
    </section>
  );
};

export default Projects;
