import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact">
      {/* Animation du texte "Get in Touch" */}
      <motion.p
        className="section__text__p1"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Get in Touch
      </motion.p>
      
      {/* Animation du titre "Contact Me" */}
      <motion.h1
        className="title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        Contact Me
      </motion.h1>

      <div className="contact-info-upper-container">
        {/* Animation de l'email */}
        <motion.div
          className="contact-info-container"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <img src="email.png" alt="email icon" className="icon email-icon" />
          <p>
            <a href="mailto:ikramelhoul@gmail.com">ikramelhoul@gmail.com</a>
          </p>
        </motion.div>

        {/* Animation du Linkedin */}
        <motion.div
          className="contact-info-container"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <img src="linkedin.png" alt="linkedin icon" className="icon contact-icon" />
          <p>
            <a href="https://www.linkedin.com/in/ikram-el-houl-720b482b6/">Linkedin</a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
