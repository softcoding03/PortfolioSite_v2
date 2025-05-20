import React from 'react';
import { Skill } from '../types';

const skills: Skill[] = [
  { name: 'Kotlin', level: 'LV.9', progress: 90, color: 'kotlin' },
  { name: 'Spring', level: 'LV.8', progress: 80, color: 'spring' },
  { name: 'MySQL', level: 'LV.5', progress: 50, color: 'mysql' },
  { name: 'Java', level: 'LV.4', progress: 40, color: 'java' },
  { name: 'JavaScript', level: 'LV.2', progress: 20, color: 'javascript' }
];

const Intro: React.FC = () => {
  return (
    <section id="intro" className="section">
      <div className="container">
        <div className="profile-image">
          <img src="/images/portfolio.jpeg" alt="김양수의 프로필 사진" className="profile-photo" />
        </div>
        <h2>Backend Developer</h2>
        <p>역할의 경계를 짓지 않고, 사용자와 팀을 위해 일하는 백엔드개발자 김양수입니다.</p>

        <div className="skills-container">
          {skills.map((skill) => (
            <div key={skill.name} className="skill-item">
              <div className="skill-header">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-level">{skill.level}</span>
              </div>
              <div className="skill-bar">
                <div className={`skill-progress ${skill.color}`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Intro;