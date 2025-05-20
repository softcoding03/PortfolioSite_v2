export interface Project {
  id: number;
  title: string;
  description: string;
  period: string;
  techStack: string[];
  images: string[];
  features: string[];
  achievements: string[];
  insights: string[];
}

export interface Experience {
  date: string;
  company: string;
  role: string;
  details: string[];
  highlights: { number: string; result: string }[];
  subExperiences: {
    title: string;
    details: string[];
  }[];
}

export interface Skill {
  name: string;
  level: string;
  progress: number;
  color: string;
}