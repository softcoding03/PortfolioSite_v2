import React, { useEffect, useState } from 'react';

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
  { name: 'JavaScript', level: 2, color: 'var(--js-color)' }
];

const SkillsContainer: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const introSection = document.getElementById('intro');
      const aboutSection = document.getElementById('about');
      
      if (introSection && aboutSection) {
        const introBottom = introSection.offsetTop + introSection.offsetHeight;
        const aboutBottom = aboutSection.offsetTop + aboutSection.offsetHeight;
        
        setIsVisible(currentScrollY >= introSection.offsetTop && currentScrollY <= aboutBottom);
        setLastScrollY(currentScrollY);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div className={`fixed right-4 top-1/2 transform -translate-y-1/2 transition-all duration-300 ${
      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
    }`}>
      <div className="skills-container bg-black/20 backdrop-blur-sm border border-[#00ffff] rounded-xl p-4 w-[200px]">
        {skills.map((skill, index) => (
          <div key={skill.name} className="skill-item" style={{ animationDelay: `${index * 0.1}s` }}>
            <div className="skill-header flex justify-between items-center mb-2">
              <span className="skill-name text-white uppercase tracking-wide">{skill.name}</span>
              <span className="skill-level font-['Press_Start_2P'] text-xs text-[#00ffff]">
                LV.{skill.level}
              </span>
            </div>
            <div className="skill-bar h-3 bg-black/30 border-2 border-[#00ffff] rounded-md overflow-hidden">
              <div
                className="skill-progress h-full relative transition-all duration-1000"
                style={{
                  width: `${(skill.level / 10) * 100}%`,
                  backgroundColor: skill.color,
                }}
              >
                <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(0,0,0,0.1)_10px,rgba(0,0,0,0.1)_20px)]" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsContainer;