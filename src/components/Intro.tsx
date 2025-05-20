import React from 'react';

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
          <div className="skill-item">
            <div className="skill-header">
              <span className="skill-name">Kotlin</span>
              <span className="skill-level">LV.9</span>
            </div>
            <div className="skill-bar">
              <div className="skill-progress kotlin"></div>
            </div>
          </div>
          
          <div className="skill-item">
            <div className="skill-header">
              <span className="skill-name">Spring</span>
              <span className="skill-level">LV.8</span>
            </div>
            <div className="skill-bar">
              <div className="skill-progress spring"></div>
            </div>
          </div>
          
          <div className="skill-item">
            <div className="skill-header">
              <span className="skill-name">MySQL</span>
              <span className="skill-level">LV.5</span>
            </div>
            <div className="skill-bar">
              <div className="skill-progress mysql"></div>
            </div>
          </div>
          
          <div className="skill-item">
            <div className="skill-header">
              <span className="skill-name">Java</span>
              <span className="skill-level">LV.4</span>
            </div>
            <div className="skill-bar">
              <div className="skill-progress java"></div>
            </div>
          </div>
          
          <div className="skill-item">
            <div className="skill-header">
              <span className="skill-name">JavaScript</span>
              <span className="skill-level">LV.2</span>
            </div>
            <div className="skill-bar">
              <div className="skill-progress javascript"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;