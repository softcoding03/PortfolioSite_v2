import React from 'react';
import Header from './components/Header';
import Intro from './components/Intro';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';
import './styles/main.css';

function App() {
  return (
    <>
      <Header />
      <main>
        <Intro />
        <About />
        <Experience />
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
    </>
  );
}

export default App;