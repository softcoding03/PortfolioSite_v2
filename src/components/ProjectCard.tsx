import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  return (
    <div className="project-card" onClick={onClick}>
      <div className="project-image">
        <img src={project.images[0]} alt={project.title} />
      </div>
      <div className="project-content">
        <h3>{project.title}</h3>
        <div className="project-tech">
          {project.techStack.map((tech, index) => (
            <span
              key={index}
              className={`tech-tag ${tech.toLowerCase().includes('kotlin') ? 'tech-highlight' : ''}`}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;