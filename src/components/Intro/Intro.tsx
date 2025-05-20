import React from 'react';
import './Intro.css';

export default function Intro() {
  return (
    <section className="intro-section">
      <div className="intro-content">
        <div className="profile-image">
          <img src="/images/portfolio.jpeg" alt="Profile" />
        </div>
        <h1 className="title">MagicEcole</h1>
        <p className="description">
          안녕하세요! 저는 웹 개발자입니다.
          새로운 기술을 배우고 창의적인 솔루션을 만드는 것을 좋아합니다.
        </p>
        <div className="tech-stack">
          <h2>주요 기술 스택</h2>
          <ul>
            <li>Frontend: React, TypeScript, Tailwind CSS</li>
            <li>Backend: Spring Boot, Kotlin, Java</li>
            <li>Database: MySQL, Oracle</li>
            <li>DevOps: Docker, AWS</li>
          </ul>
        </div>
        <div className="experience">
          <h2>경력</h2>
          <ul>
            <li>2024.01 - 현재: 웹 개발자</li>
            <li>2023.04 - 2023.12: 백엔드 개발자</li>
          </ul>
        </div>
        <div className="education">
          <h2>학력</h2>
          <ul>
            <li>2020.03 - 2024.02: 컴퓨터공학과</li>
          </ul>
        </div>
      </div>
    </section>
  );
} 