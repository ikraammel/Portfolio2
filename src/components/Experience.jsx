import React from 'react';
import { motion } from 'framer-motion';

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
          <motion.div
            className="details-container"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="experience-sub-title">Programming Languages</h2>
            <div className="article-container">
              {[
                { title: "Python" },
                { title: "C language" },
                { title: "Javascript" },
                { title: "Java" },
              ].map((item, index) => (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
                >
                  <img src="checkmark.png" alt="experience icon" className="icon" />
                  <div>
                    <h3>{item.title}</h3>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>

          {/* Animation des détails du développement web */}
          <motion.div
            className="details-container"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="experience-sub-title">Web development</h2>
            <div className="article-container">
              {[
                { title: "HTML" },
                { title: "CSS" },
                { title: "Javascript" },
                { title: "React" },
              ].map((item, index) => (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.2 }}
                >
                  <img src="checkmark.png" alt="experience icon" className="icon" />
                  <div>
                    <h3>{item.title}</h3>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
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
          onClick={() => (window.location.href = '#projects')}
        />
      </div>
    </section>
  );
};

export default Experience;
