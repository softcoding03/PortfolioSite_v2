import React from 'react';
import SkillsContainer from './components/SkillsContainer';

function App() {
  return (
    <div className="min-h-screen bg-[#121212]">
      <header>
        {/* Your existing header content */}
      </header>

      <main>
        <section id="intro" className="section">
          <div className="container">
            <div className="profile-image">
              <img src="/images/portfolio.jpeg" alt="김양수의 프로필 사진" className="profile-photo" />
            </div>
            <h2>Backend Developer</h2>
            <p>역할의 경계를 짓지 않고, 사용자와 팀을 위해 일하는 백엔드개발자 김양수입니다.</p>
          </div>
        </section>

        <SkillsContainer />

        {/* Your other sections */}
      </main>
    </div>
  );
}

export default App;