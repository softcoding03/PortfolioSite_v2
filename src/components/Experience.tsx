import React, { useState } from 'react';
import { Experience as ExperienceType } from '../types';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { projects } from '../data/projects';

const experiences: ExperienceType[] = [
  {
    date: "2023.8 - Present",
    company: "매직에꼴",
    role: "Backend Developer",
    details: [
      "교육관리 플랫폼(LMS) 프로젝트 기획부터 설계, 개발까지 전반에 참여"
    ],
    highlights: [
      { number: "80%", result: "영상 관리 시스템 운영 비용 절감" },
      { number: "30%", result: "중복 개발 리소스 절감" }
    ],
    subExperiences: [
      {
        title: "수강생 과제 및 활동 시스템 개발",
        details: [
          "정해진 기간 내 개발 완료",
          "기관/캠페인/공지/활동 로그 등 다수 API 설계 및 구현"
        ]
      },
      {
        title: "개발팀 업무 문서화",
        details: [
          "에러코드, 서버 인프라 정보 등 정리 및 체계화",
          "프론트와 커뮤니케이션 효율 증대",
          "불필요한 인프라 비용 20% 절감"
        ]
      }
    ]
  },
  {
    date: "2022.12 - 2023.6",
    company: "비트캠프",
    role: "Java 웹개발자 국비교육과정 수료",
    details: [
      "Spring 기반 웹 서비스 개발의 기초부터 실전까지 프로젝트로 경험",
      "Java, Spring, JavaScript, MySQL"
    ],
    highlights: [],
    subExperiences: []
  }
];

const Experience: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <section id="experience" className="section">
      <div className="container">
        <h2>Experience</h2>
        <div className="timeline-grid">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-root">
              <div className="experience-main">
                <div className="experience-date">{exp.date}</div>
                <div className="experience-content">
                  <h3>{exp.company}</h3>
                  <div className="company">{exp.role}</div>
                  <ul className="experience-details">
                    {exp.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                    {exp.highlights.map((highlight, i) => (
                      <li key={`highlight-${i}`} className="highlight">
                        <span className="achievement-number">{highlight.number}</span>
                        <span className="achievement-result">{highlight.result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {exp.subExperiences.length > 0 && (
                <div className="experience-branches">
                  {exp.subExperiences.map((subExp, i) => (
                    <div key={i} className="experience-branch">
                      <div className="branch-line"></div>
                      <div className="sub-experience">
                        <h4>{subExp.title}</h4>
                        <ul>
                          {subExp.details.map((detail, j) => (
                            <li key={j}>{detail}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <div className="vertical-timeline">
                <div className="timeline-line-vertical"></div>
                {projects.slice(index * 2, (index + 1) * 2).map((project) => (
                  <div key={project.id} className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                      <ProjectCard
                        project={project}
                        onClick={() => setSelectedProject(project.id)}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <ProjectModal
        project={projects.find(p => p.id === selectedProject)}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default Experience;