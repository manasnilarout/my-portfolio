import React, { useEffect, useState } from 'react';
import './App.css';
import SimpleHero from './components/SimpleHero';
import SimpleAbout from './components/SimpleAbout';
import SimpleExperience from './components/SimpleExperience';
import SimpleProjects from './components/SimpleProjects';
import SimpleContact from './components/SimpleContact';
import SimpleNavigation from './components/SimpleNavigation';
import LoadingScreen from './components/LoadingScreen';
import ParticlesBackground from './components/ParticlesBackground';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="App">
      <ParticlesBackground />
      <SimpleNavigation />
      <SimpleHero />
      <SimpleAbout />
      <SimpleExperience />
      <SimpleProjects />
      <SimpleContact />
    </div>
  );
}

export default App;