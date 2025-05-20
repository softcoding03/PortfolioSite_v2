import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | undefined;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    setCurrentSlide(0);
  }, [project]);

  if (!project) return null;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % project.images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className={`modal ${project ? 'active' : ''}`} onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <X />
        </button>
        <div className="modal-body">
          <div className="modal-header">
            <h2>{project.title}</h2>
            <div className="project-period">{project.period}</div>
          </div>

          <div className="project-gallery">
            <div className="gallery-container">
              {project.images.map((img, index) => (
                <div
                  key={index}
                  className={`gallery-slide ${index === currentSlide ? 'active' : ''}`}
                >
                  <img src={img} alt={`${project.title} - ${index + 1}`} loading="lazy" />
                </div>
              ))}
            </div>

            <button className="gallery-arrow prev" onClick={prevSlide}>
              <ChevronLeft />
            </button>
            <button className="gallery-arrow next" onClick={nextSlide}>
              <ChevronRight />
            </button>

            <div className="gallery-nav">
              {project.images.map((_, index) => (
                <div
                  key={index}
                  className={`gallery-dot ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                />
              ))}
            </div>
          </div>

          <div className="project-tech-stack">
            <h3>기술 스택</h3>
            <div className="tech-tags">
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

          <div className="project-section">
            <h3>주요 기능</h3>
            <ul>
              {project.features.map((feature, index) => (
                <li key={index}>
                  {feature.includes('->') ? (
                    <>
                      {feature.split('->')[0]}
                      <span className="achievement-highlight">->{feature.split('->')[1]}</span>
                    </>
                  ) : (
                    feature
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="project-section">
            <h3>주요 성과</h3>
            <ul>
              {project.achievements.map((achievement, index) => (
                <li key={index}>
                  {achievement.includes('->') ? (
                    <>
                      {achievement.split('->')[0]}
                      <span className="achievement-highlight">->{achievement.split('->')[1]}</span>
                    </>
                  ) : achievement.includes('%') ? (
                    <span className="achievement-highlight">{achievement}</span>
                  ) : (
                    achievement
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="project-section">
            <h3>인사이트</h3>
            <ul>
              {project.insights.map((insight, index) => (
                <li key={index}>{insight}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;