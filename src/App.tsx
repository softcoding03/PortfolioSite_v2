import React from 'react';
import InteractiveBackground from './components/InteractiveBackground';

function App() {
  return (
    <>
      <InteractiveBackground />
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex items-center justify-center">
        <p className="text-cyan-400">Start prompting (or editing) to see magic happen :)</p>
      </div>
    </>
  );
}

export default App;