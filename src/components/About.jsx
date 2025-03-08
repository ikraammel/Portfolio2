import { motion } from "framer-motion";
import React from "react";
import AboutChild from "./about-child/AboutChild";

const About = () => {
  return (
    <section id="about">
      <p className="section__text__p1">Get to know more</p>
      <h1 className="title">About me</h1>
      <div className="section-container">
        <motion.div
          className="section_pic-container"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        ></motion.div>
        <motion.div
          className="about-details-container"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="about-container">
            <AboutChild
              title="Experience"
              alt="experience icon"
              src="experience.png"
            />
            <AboutChild
              title="Education"
              alt="education icon"
              src="education.png"
              p={
                <p>
                  -Computer Engineering & AI Student
                  <br />
                  -Preparatory Classes <br />
                  -Baccalaureate in Mathematical Sciences A
                </p>
              }
            />
            <AboutChild
              title="Languages"
              src="langues.png"
              alt="langue icon"
              p={
                <p>
                  <b>Arabic: </b>Native <br />
                  <b>French: </b> DELF B2 <br />
                  <b>English: </b>Intermediate{" "}
                </p>
              }
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
