import React from 'react';
import Header from './components/Header';
import Intro from './components/Intro';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';
import ProjectModal from './components/ProjectModal';
import { Project } from './types';

const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = React.useState<Project>();

  return (
    <>
      <Header />
      <main>
        <Intro />
        <About />
        <Experience onProjectClick={setSelectedProject} />
        <Contact />
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
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(undefined)} 
      />
    </>
  );
};

export default App;