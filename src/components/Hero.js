import React, { useEffect, useState } from 'react';
import './Hero.css';

function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [imageSrc, setImageSrc] = useState(`${process.env.PUBLIC_URL}/images/hero.png`);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleImageError = (e) => {
    console.log('Image failed to load from:', e.target.src);
    
    // Try alternative paths
    const altPaths = [
      '/images/hero.png',
      './images/hero.png',
      '../images/hero.png',
      `${process.env.PUBLIC_URL}/hero.png`,
    ];
    
    const currentIndex = altPaths.indexOf(imageSrc);
    if (currentIndex < altPaths.length - 1) {
      setImageSrc(altPaths[currentIndex + 1]);
    } else {
      // All paths failed, show SVG fallback
      setImageError(true);
      e.target.style.display = 'none';
      const svg = e.target.parentElement.querySelector('svg');
      if (svg) svg.style.display = 'block';
    }
  };

  const smoothScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <p className="greeting">Hi, I'm</p>
        <h1 className="hero-title">
          <span className="name">Anurag Kumar</span>
        </h1>
        <h2 className="hero-subtitle">Full Stack Developer | AI/ML Enthusiast | Trainer</h2>
        <p className="hero-description">
          I craft elegant, scalable web applications that solve real-world problems. 
          With expertise in modern web technologies and machine learning, I bridge the gap 
          between beautiful design and robust functionality. Passionate about mentoring and 
          building innovative solutions that make an impact.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn" onClick={(e) => smoothScroll(e, '#projects')}>
            View My Work
          </a>
          <a href="#contact" className="btn btn-outline" onClick={(e) => smoothScroll(e, '#contact')}>
            Get In Touch
          </a>
        </div>
      </div>
      
      <div 
        className="hero-image"
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          transition: 'transform 0.3s ease-out',
        }}
      >
        <div className="image-placeholder">
          {/* Orbiting particles */}
          <div className="orbit"></div>
          <div className="orbit"></div>
          <div className="orbit"></div>
          <div className="orbit"></div>
          
          {/* Profile Image - Updated path */}
          {!imageError && (
            <img 
              src={imageSrc}
              alt="Anurag Kumar - Full Stack Developer" 
              style={{ display: 'block' }}
              onError={handleImageError}
              onLoad={(e) => {
                console.log('Image loaded successfully from:', e.target.src);
              }}
            />
          )}
          
          {/* Fallback SVG */}
          <svg 
            viewBox="0 0 200 200" 
            xmlns="http://www.w3.org/2000/svg"
            style={{ display: imageError ? 'block' : 'none' }}
          >
            <circle cx="100" cy="100" r="80" fill="url(#gradient)" />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor: '#6366f1', stopOpacity: 1}} />
                <stop offset="100%" style={{stopColor: '#8b5cf6', stopOpacity: 1}} />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Social Links */}
      <div className="hero-social">
        <a 
          href="https://github.com/oxanuragofficial" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        </a>
        <a 
          href="https://www.linkedin.com/in/arkofficial/" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
        </a>
        <a 
          href="https://x.com/hindvansi" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Twitter Profile"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
          </svg>
        </a>
        <a 
          href="mailto:hindvansianurag@gmail.com" 
          aria-label="Gmail"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
            <polyline points="22,6 12,13 2,6" fill="none" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </a>
      </div>

      <div className="scroll-indicator" onClick={(e) => smoothScroll(e, '#about')}>
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <p>Scroll Down</p>
      </div>
    </section>
  );
}

export default Hero;
