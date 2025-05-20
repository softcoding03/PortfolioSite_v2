import React, { useEffect, useRef, useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import './Modal.css';

interface Project {
  id: number;
  title: string;
  period: string;
  images: string[];
  techStack: string[];
  features: string[];
  achievements: string[];
  insights: string[];
}

interface ModalProps {
  project: Project;
  onClose: () => void;
}

export function Modal({ project, onClose }: ModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const modalRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  const handlePrevImage = () => {
    setCurrentImageIndex(prev => 
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex(prev => 
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') handlePrevImage();
    if (e.key === 'ArrowRight') handleNextImage();
  };

  return (
    <div className="modal-overlay" onKeyDown={handleKeyDown} tabIndex={0}>
      <div className="modal" ref={modalRef}>
        <button className="modal-close" onClick={onClose}>
          <X size={24} />
        </button>

        <div className="modal-content">
          <div className="modal-header">
            <h2>{project.title}</h2>
            <div className="modal-period">{project.period}</div>
          </div>

          <div className="modal-gallery">
            <button className="gallery-nav prev" onClick={handlePrevImage}>
              <ChevronLeft size={24} />
            </button>
            
            <div className="gallery-image-container">
              <img
                ref={imageRef}
                src={project.images[currentImageIndex]}
                alt={`${project.title} - Image ${currentImageIndex + 1}`}
                className="gallery-image"
              />
            </div>

            <button className="gallery-nav next" onClick={handleNextImage}>
              <ChevronRight size={24} />
            </button>
          </div>

          <div className="modal-info">
            <div className="info-section">
              <h3>Tech Stack</h3>
              <div className="tech-tags">
                {project.techStack.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>

            <div className="info-section">
              <h3>Features</h3>
              <ul>
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="info-section">
              <h3>Achievements</h3>
              <ul>
                {project.achievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
            </div>

            <div className="info-section">
              <h3>Insights</h3>
              <ul>
                {project.insights.map((insight, index) => (
                  <li key={index}>{insight}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 