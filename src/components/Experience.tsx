import React from 'react';
import { Project } from '../types';
import projects from '../data/projects';

interface ExperienceProps {
  onProjectClick: (project: Project) => void;
}

const Experience: React.FC<ExperienceProps> = ({ onProjectClick }) => {
  return (
    <section id="experience" className="section">
      <div className="container">
        <h2>Experience</h2>
        <div className="timeline-grid">
          <div className="experience-root">
            <div className="experience-main">
              <div className="experience-date">2023.8 - Present</div>
              <div className="experience-content">
                <h3>매직에꼴</h3>
                <div className="company">Backend Developer</div>
                <ul className="experience-details">
                  <li>교육관리 플랫폼(LMS) 프로젝트 기획부터 설계, 개발까지 전반에 참여</li>
                  <li className="highlight">
                    <span className="achievement-number">80%</span> 
                    <span className="achievement-result">영상 관리 시스템 운영 비용 절감</span>
                  </li>
                  <li className="highlight">
                    <span className="achievement-number">30%</span> 
                    <span className="achievement-result">중복 개발 리소스 절감</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="experience-branches">
              <div className="experience-branch">
                <div className="branch-line"></div>
                <div className="sub-experience">
                  <h4>수강생 과제 및 활동 시스템 개발</h4>
                  <ul>
                    <li>정해진 기간 내 개발 완료</li>
                    <li>기관/캠페인/공지/활동 로그 등 다수 API 설계 및 구현</li>
                  </ul>
                </div>
              </div>
              
              <div className="experience-branch">
                <div className="branch-line"></div>
                <div className="sub-experience">
                  <h4>개발팀 업무 문서화</h4>
                  <ul>
                    <li>에러코드, 서버 인프라 정보 등 정리 및 체계화</li>
                    <li>프론트와 커뮤니케이션 효율 증대</li>
                    <li>불필요한 인프라 비용 20% 절감</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="vertical-timeline">
              <div className="timeline-line-vertical"></div>
              
              {projects.slice(0, 2).map((project) => (
                <div key={project.id} className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <div className="project-card" onClick={() => onProjectClick(project)}>
                      <div className="project-image">
                        <img src={project.images[0]} alt={project.title} />
                      </div>
                      <div className="project-content">
                        <h3>{project.title}</h3>
                        <div className="project-tech">
                          {project.techStack.map((tech, index) => (
                            <span key={index} className="tech-tag">{tech}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="experience-main">
            <div className="experience-date">2022.12 - 2023.6</div>
            <div className="experience-content">
              <h3>비트캠프</h3>
              <div className="company">Java 웹개발자 국비교육과정 수료</div>
              <ul className="experience-details">
                <li>Spring 기반 웹 서비스 개발의 기초부터 실전까지 프로젝트로 경험</li>
                <li>Java, Spring, JavaScript, MySQL</li>
              </ul>
            </div>
          </div>

          <div className="vertical-timeline">
            <div className="timeline-line-vertical"></div>
            
            {projects.slice(2).map((project) => (
              <div key={project.id} className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <div className="project-card" onClick={() => onProjectClick(project)}>
                    <div className="project-image">
                      <img src={project.images[0]} alt={project.title} />
                    </div>
                    <div className="project-content">
                      <h3>{project.title}</h3>
                      <div className="project-tech">
                        {project.techStack.map((tech, index) => (
                          <span key={index} className="tech-tag">{tech}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;