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

export interface Milestone {
  id: number;
  timestamp: Date;
  title: string;
  techStack: string[];
  description: string;
  achievements: string[];
  icon: string;
}