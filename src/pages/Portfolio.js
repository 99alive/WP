import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import '../styles.css';

function Portfolio() {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.8 },
    }),
  };

  const projects = [
    {
      title: 'EduConnect_Ghana',
      description: 'EduConnect—a discussion platform designed to connect students and educators in a dynamic, interactive environment. ',
      link: 'https://youtu.be/SV9_Q6cNg0s',
      tech: ['React', 'CSS', 'JavaScript'],
    },
    {
      title: 'AI Learning Assistant',
      description: 'Currently building an AI-powered tool for neurodiverse students in Ghana, making education more accessible and inclusive.',
      link: 'https://github.com/your-repo',
      tech: ['Python', 'AI Basics', 'Accessibility'],
    },
    {
      title: 'Portfolio Website',
      description: 'Designed and developed this portfolio site to showcase my skills and projects, learning React along the way.',
      link: 'https://github.com/99alive/WP',
      tech: ['React', 'CSS', 'JavaScript'],
    },
    {
      title: 'High School & Gap Year Journey',
      description: 'Check out my early projects and growth story on Google Sites.',
      link: 'https://sites.google.com/view/michaelowusu/home?authuser=1',
      tech: ['Google Sites', 'Storytelling'],
    },
  ];

  return (
    <section className="portfolio">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Portfolio
      </motion.h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              link={project.link}
              tech={project.tech}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
