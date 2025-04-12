import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import headshotImage from '../assets/InShot_20230712_150339814.jpg';
import '../styles.css';

function Home() {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: i * 0.1, duration: 0.5 },
    }),
  };

  const techSkills = [
    'React',
    'Node.js',
    'AI/ML',
    'System Design',
    'AWS',
    'Kubernetes',
    'TypeScript',
    'GraphQL',
  ];

  return (
    <section className="home">
      <div className="hero-content">
        <div className="hero-text">
          <motion.h1
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            Hey, I’m Mike
          </motion.h1>
          <motion.p
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
          >
            20+ years of tech leadership—building solutions that empower and inspire.
          </motion.p>
          <motion.p
            className="experience-highlight"
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
          >
            From creating coding labs for kids in high school to leading AI initiatives for global impact, I’ve spent decades solving real-world problems with technology.
          </motion.p>
          <div className="tech-stack">
            {techSkills.map((skill, index) => (
              <motion.span
                key={index}
                className="tech-badge"
                custom={index}
                variants={badgeVariants}
                initial="hidden"
                animate="visible"
              >
                {skill}
              </motion.span>
            ))}
          </div>
          <motion.div
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.6 }}
          >
            <Link to="/portfolio" className="cta-button">Explore My Work</Link>
          </motion.div>
        </div>
        <motion.div
          className="hero-image"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          <img src={headshotImage} alt="Mike" className="headshot" />
        </motion.div>
      </div>
    </section>
  );
}

export default Home;