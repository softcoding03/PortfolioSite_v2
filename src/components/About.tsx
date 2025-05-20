import React from 'react';

const About: React.FC = () => {
  return (
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
  );
};

export default About;