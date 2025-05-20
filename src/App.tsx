import React from 'react';
import Header from './components/Header';
import Intro from './components/Intro';
import About from './components/About';
import ProjectModal from './components/ProjectModal';
import { Project } from './types';
import projects from './data/projects';

const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = React.useState<Project>();

  return (
    <>
      <Header />
      <main>
        <Intro />
        <About />
      </main>
      <div className="background-grid"></div>
      <div className="background-dots"></div>
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(undefined)} 
      />
    </>
  );
};

export default App;