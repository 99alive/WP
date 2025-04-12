import React from 'react';
import '../styles.css';

function ProjectCard({ title, description, link, tech }) {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">Check it out</a>
      <div className="tech-tags">
        {tech.map((tag, index) => (
          <span key={index} className="tech-tag">{tag}</span>
        ))}
      </div>
    </div>
  );
}

export default ProjectCard;