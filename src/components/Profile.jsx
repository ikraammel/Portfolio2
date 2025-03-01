import React from 'react';
import { motion } from 'framer-motion';

const Profile = () => {
  return (
    <section id="profile">
      <motion.div
        className="section_pic-container"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <img src="ikramm.png" alt="Ikram" />
      </motion.div>
      <div className="section__text">
        <p className="section__text__p1">Hello, I'm</p>
        <h1 className="title">Ikram El houl</h1>
        <p className="section__text__p2">Computer Science & AI student</p>
        <div className="btn-container">
          <button className="btn btn-color-2" onClick={() => window.open('CV_ELHOUL_IKRAM.pdf')}>Download CV</button>
          <button className="btn btn-color-1" onClick={() => (window.location.href='#contact')}>Contact Info</button>
        </div>
        <div id="socials-container">
          <img src="linkedin.png" alt="My linkedin profile" className="icon" onClick={() => (window.location.href='https://www.linkedin.com/in/ikram-el-houl-720b482b6/')}/>
          <img src="github.png" alt="My github profile" className="icon" onClick={() => (window.location.href='https://github.com/ikraammel')}/>
        </div>
      </div>
    </section>
  );
};

export default Profile;
