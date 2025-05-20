import React, { useState, useEffect } from 'react';
import { projects } from './data/projects';
import './App.css';

function App() {
  const [activeMilestoneId, setActiveMilestoneId] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  useEffect(() => {
    // Lucide 아이콘 초기화
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/lucide@latest';
    script.onload = () => {
      // @ts-ignore
      window.lucide.createIcons();
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleModalClose = () => {
    setSelectedProject(null);
  };

  const openProjectModal = (projectId: number) => {
    setSelectedProject(projectId);
  };

  return (
    <div className="app">
      <header>
        <div className="header-content">
          <h1>KIM YANG SOO</h1>
          <h2>Code for Systems, <br/> Think for People</h2>
          <div className="scroll-indicator">
            <span>Scroll Down</span>
            <div className="arrow"></div>
          </div>
        </div>
      </header>

      <main>
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

        <section id="about" className="section">
          <div className="container">
            <h2>About Me</h2>
            <div className="about-content">
              <p><strong>팀과 함께 일할 수 있는 법을 늘 고민합니다.</strong></p>
              <p>기술적으로 단단한 구조를 만들되, 그 안에 사용자의 편리함을 꼭 담으려고 노력합니다.</p>
              <p><strong>저는 백엔드 개발자이지만, 역할의 경계를 짓지 않고, 필요하다면 기획이나 프론트에도 참여합니다.</strong></p>
              <p>결국 내가 만든 기능을 누군가가 더 편하게, 더 유용하게 쓸 수 있다면 그게 가장 큰 보람이라고 생각합니다.</p>
              <p><strong>문제 해결 그 자체보다, 사용자의 마음을 움직이는 기능을 만들고 싶습니다.</strong></p>
            </div>
          </div>
        </section>

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
                  
                  <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                      <div className="project-card" onClick={() => openProjectModal(1)}>
                        <div className="project-image">
                          <img src="/images/attendance/attendance03.png" alt="Project 1" />
                        </div>
                        <div className="project-content">
                          <h3>출결관리 시스템 개발</h3>
                          <div className="project-tech">
                            <span className="tech-tag">Spring Boot</span>
                            <span className="tech-tag">Kotlin</span>
                            <span className="tech-tag">MySQL</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                      <div className="project-card" onClick={() => openProjectModal(2)}>
                        <div className="project-image">
                          <img src="/images/wecandeo/wecandeo_process.png" alt="Project 2" />
                        </div>
                        <div className="project-content">
                          <h3>Wecandeo 영상 기능 마이그레이션</h3>
                          <div className="project-tech">
                            <span className="tech-tag">Kotlin</span>
                            <span className="tech-tag">Spring Boot</span>
                            <span className="tech-tag">REST API</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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
                
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <div className="project-card" onClick={() => openProjectModal(3)}>
                      <div className="project-image">
                        <img src="/images/yaguroute/yaguroute1.png" alt="Project 3" />
                      </div>
                      <div className="project-content">
                        <h3>YaguRoute</h3>
                        <div className="project-tech">
                          <span className="tech-tag">Java</span>
                          <span className="tech-tag">Spring</span>
                          <span className="tech-tag">MySQL</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <div className="project-card" onClick={() => openProjectModal(4)}>
                      <div className="project-image">
                        <img src="/images/shopping/shop2.png" alt="Project 4" />
                      </div>
                      <div className="project-content">
                        <h3>굿즈 쇼핑몰</h3>
                        <div className="project-tech">
                          <span className="tech-tag">Java</span>
                          <span className="tech-tag">Spring</span>
                          <span className="tech-tag">Oracle</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="container">
            <h2>Let's Connect</h2>
            <div className="contact-info">
              <div className="contact-item">
                <i data-lucide="mail"></i>
                <a href="mailto:didtn1233@gmail.com" className="contact-link">didtn1233@gmail.com</a>
              </div>
              <div className="contact-item">
                <i data-lucide="phone"></i>
                <a href="tel:+82-010-9783-3446" className="contact-link">+82 010 9783 3446</a>
              </div>
              <div className="contact-item">
                <i data-lucide="map-pin"></i>
                <span className="contact-text">서울</span>
              </div>
              <div className="contact-item">
                <i data-lucide="github"></i>
                <a href="https://github.com/softcoding03" target="_blank" rel="noopener noreferrer" className="contact-link">@softcoding03</a>
              </div>
              <div className="contact-item">
                <i data-lucide="book-open"></i>
                <a href="https://softpattern.tistory.com" target="_blank" rel="noopener noreferrer" className="contact-link">softpattern.tistory.com</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <div className="timeline-container">
        <div className="timeline">
          <div className="timeline-line"></div>
          <div id="timeline-markers"></div>
          <div id="character"></div>
        </div>
      </div>

      <div className="background-grid"></div>
      <div className="background-dots"></div>

      {selectedProject && (
        <div id="project-modal" className="modal">
          <div className="modal-content">
            <button className="modal-close" onClick={handleModalClose}>
              <i data-lucide="x"></i>
            </button>
            <div className="modal-body">
              {(() => {
                const project = projects.find(p => p.id === selectedProject);
                if (!project) return null;
                
                return (
                  <>
                    <h2>{project.title}</h2>
                    <div className="project-period">{project.period}</div>
                    <div className="project-description">
                      <h3>프로젝트 개요</h3>
                      <p>{project.description}</p>
                    </div>
                    <div className="project-features">
                      <h3>주요 기능</h3>
                      <ul>
                        {project.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="project-achievements">
                      <h3>주요 성과</h3>
                      <ul>
                        {project.achievements.map((achievement, index) => (
                          <li key={index}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="project-tech-stack">
                      <h3>기술 스택</h3>
                      <div className="tech-tags">
                        {project.techStack.map((tech, index) => (
                          <span key={index} className="tech-tag">{tech}</span>
                        ))}
                      </div>
                    </div>
                    {project.images && project.images.length > 0 && (
                      <div className="project-images">
                        <h3>프로젝트 이미지</h3>
                        <div className="image-grid">
                          {project.images.map((image, index) => (
                            <img key={index} src={image} alt={`${project.title} 이미지 ${index + 1}`} />
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                );
              })()}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
