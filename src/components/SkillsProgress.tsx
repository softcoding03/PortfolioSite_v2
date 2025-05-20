import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

interface Skill {
  name: string;
  baseLevel: number;
  color: string;
  currentLevel: number;
}

const initialSkills: Skill[] = [
  { name: 'Kotlin', baseLevel: 0, color: '#A97BFF', currentLevel: 0 },
  { name: 'Spring', baseLevel: 0, color: '#6DB33F', currentLevel: 0 },
  { name: 'MySQL', baseLevel: 0, color: '#00758F', currentLevel: 0 },
  { name: 'Java', baseLevel: 0, color: '#E76F00', currentLevel: 0 },
  { name: 'JavaScript', baseLevel: 0, color: '#F7DF1E', currentLevel: 0 }
];

const projectSkillIncreases = [
  {
    id: 'attendance',
    increases: {
      Kotlin: 3,
      Spring: 1,
      MySQL: 1
    }
  },
  {
    id: 'wecandeo',
    increases: {
      Kotlin: 2,
      Spring: 1,
      MySQL: 1
    }
  },
  {
    id: 'yaguroute',
    increases: {
      Java: 2,
      Spring: 1,
      MySQL: 1
    }
  },
  {
    id: 'shopping',
    increases: {
      Java: 1,
      Spring: 1
    }
  }
];

const SkillsProgress: React.FC = () => {
  const [skills, setSkills] = useState<Skill[]>(initialSkills);
  const [refs, setRefs] = useState<{ [key: string]: any }>({});

  useEffect(() => {
    const newRefs: { [key: string]: any } = {};
    projectSkillIncreases.forEach(project => {
      const [ref, inView] = useInView({
        threshold: 0.5,
        triggerOnce: true
      });
      newRefs[project.id] = { ref, inView };
    });
    setRefs(newRefs);
  }, []);

  useEffect(() => {
    projectSkillIncreases.forEach(project => {
      if (refs[project.id]?.inView) {
        setSkills(prevSkills => 
          prevSkills.map(skill => ({
            ...skill,
            currentLevel: skill.currentLevel + (project.increases[skill.name] || 0)
          }))
        );
      }
    });
  }, [refs]);

  return (
    <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 bg-black/80 p-4 rounded-lg border border-cyan-500 backdrop-blur-sm">
      {skills.map((skill) => (
        <div key={skill.name} className="mb-4 last:mb-0">
          <div className="flex justify-between items-center mb-2">
            <span className="text-white font-mono text-sm">{skill.name}</span>
            <span className="text-cyan-500 font-['Press_Start_2P'] text-xs">
              LV.{skill.currentLevel}
            </span>
          </div>
          <div className="h-2 bg-black/50 rounded-full border border-cyan-500 overflow-hidden">
            <div
              className="h-full transition-all duration-1000 ease-out"
              style={{
                width: `${(skill.currentLevel / 9) * 100}%`,
                backgroundColor: skill.color
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsProgress;