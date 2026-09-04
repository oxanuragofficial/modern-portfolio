import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import TechSkills from './components/TechSkills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Antigravity from './components/Antigravity';

function App() {
  return (
    <div className="App">
      <div className="antigravity-background">
        <Antigravity
          magnetRadius={14}
          ringRadius={12}
          waveAmplitude={1.6}
          particleSize={1.3}
          count={700}
          particleShape="tetrahedron"
          color="#6366f1"
          autoAnimate={true}
        />
      </div>
      <Header />
      <Hero />
      <About />
      <TechSkills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;