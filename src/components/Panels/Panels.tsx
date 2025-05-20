import React, { useEffect, useRef, useState } from 'react';
import { useUtils } from '../../hooks/useUtils';
import './Panels.css';

interface Panel {
  id: number;
  title: string;
  date: string;
  description: string;
  achievements: string[];
  techStack: string[];
}

interface PanelsProps {
  panels: Panel[];
  activePanelId: number | null;
}

export function Panels({ panels, activePanelId }: PanelsProps) {
  const [activePanel, setActivePanel] = useState<Panel | null>(null);
  const [isTyping, setIsTyping] = useState(false);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const { typeText } = useUtils();

  useEffect(() => {
    if (activePanelId === null) {
      setActivePanel(null);
      return;
    }
    
    const panel = panels.find(p => p.id === activePanelId);
    if (panel) {
      setActivePanel(panel);
      setIsTyping(true);
      
      if (descriptionRef.current) {
        typeText(descriptionRef.current, panel.description, () => {
          setIsTyping(false);
        });
      }
    }
  }, [activePanelId, panels, typeText]);

  if (!activePanel) return null;

  return (
    <div className="panels-container">
      <div className="panel">
        <h3>{activePanel.title}</h3>
        <div className="panel-date">{activePanel.date}</div>
        <p ref={descriptionRef} className={isTyping ? 'typing' : ''}></p>
        
        <div className="panel-achievements">
          <h4>Achievements</h4>
          <ul>
            {activePanel.achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </div>
        
        <div className="panel-tech">
          <h4>Tech Stack</h4>
          <div className="tech-tags">
            {activePanel.techStack.map((tech, index) => (
              <span key={index} className="tech-tag">{tech}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 