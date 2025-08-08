import React from 'react';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
};

export default App;
