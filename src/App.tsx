import React from 'react';
import SkillsProgress from './components/SkillsProgress';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <SkillsProgress />
      
      {/* Your existing sections with IDs matching projectSkillIncreases */}
      <section id="attendance" className="min-h-screen">
        {/* Attendance project content */}
      </section>
      
      <section id="wecandeo" className="min-h-screen">
        {/* Wecandeo project content */}
      </section>
      
      <section id="yaguroute" className="min-h-screen">
        {/* YaguRoute project content */}
      </section>
      
      <section id="shopping" className="min-h-screen">
        {/* Shopping mall project content */}
      </section>
    </div>
  );
}

export default App;