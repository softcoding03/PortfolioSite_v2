import React, { useEffect, useState } from 'react';
import { useScrollPosition } from '../../hooks/useScrollPosition';

interface Skill {
  name: string;
  level: number;
  color: string;
}

const skills: Skill[] = [
  { name: 'Kotlin', level: 9, color: 'var(--kotlin-color)' },
  { name: 'Spring', level: 8, color: 'var(--spring-color)' },
  { name: 'MySQL', level: 5, color: 'var(--mysql-color)' },
  { name: 'Java', level: 4, color: 'var(--java-color)' },
  { name: 'JavaScript', level: 2, color: 'var(--js-color)' },
];

export const Skills: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const scrollPosition = useScrollPosition();

  useEffect(() => {
    const introSection = document.getElementById('intro');
    if (!introSection) return;

    const introRect = introSection.getBoundingClientRect();
    const introTop = introRect.top;
    const introBottom = introRect.bottom;
    const windowHeight = window.innerHeight;

    // intro section이 화면에 완전히 들어오기 전까지는 숨김
    if (introBottom < 100) {
      setIsVisible(false);
      setIsFixed(false);
      return;
    }

    // intro section이 화면에 보이면 나타남
    if (introTop < windowHeight && introBottom > 100) {
      setIsVisible(true);
      setIsFixed(false);
      return;
    }

    // intro section이 화면 위로 벗어나면 fixed로 따라다님
    if (introTop <= 0) {
      setIsVisible(true);
      setIsFixed(true);
      return;
    }
  }, [scrollPosition]);

  return (
    <div className={`skills-container ${isVisible ? 'visible' : 'hidden'} ${isFixed ? 'fixed' : ''}`}>
      {skills.map((skill, index) => (
        <div key={skill.name} className="skill-item" style={{ animationDelay: `${index * 0.1}s` }}>
          <div className="skill-header">
            <span className="skill-name">{skill.name}</span>
            <span className="skill-level">LV.{skill.level}</span>
          </div>
          <div className="skill-bar">
            <div 
              className="skill-progress" 
              style={{ 
                width: `${skill.level * 10}%`,
                background: skill.color
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}; 