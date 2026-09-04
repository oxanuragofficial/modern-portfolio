import React from 'react';
import './About.css';

function About() {
  const skills = [
    { name: 'React', level: 90 },
    { name: 'JavaScript', level: 90 },
    { name: 'HTML/CSS', level: 100 },
    { name: 'Django', level: 80 },
    { name: 'Python', level: 100 },
    { name: 'Git', level: 100 },
    { name: 'Flask', level: 100 }
  ];

  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      
      <div className="about-content">
        <div className="about-text">
          <p>
            I'm a passionate full-stack developer dedicated to crafting elegant, 
            scalable solutions that solve real-world problems. With extensive experience 
            in modern web technologies, I specialize in building responsive applications 
            that blend intuitive design with robust functionality.
          </p>
          <p>
            My journey in tech is driven by curiosity and a commitment to continuous learning. 
            I thrive in collaborative environments where innovation meets best practices, 
            whether that's architecting complex systems or mentoring junior developers.
          </p>
          <p>
            Beyond code, I'm passionate about open-source contributions, technical writing, 
            and sharing knowledge with the developer community. I believe great software is 
            built on clean code, thoughtful architecture, and a deep understanding of user needs.
          </p>
        </div>

        <div className="skills-container">
          <h3>My Skills</h3>
          <div className="skills">
            {skills.map((skill, index) => (
              <div key={index} className="skill">
                <div className="skill-header">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-progress" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="stats">
        <div className="stat-item">
          <h3>30+</h3>
          <p>Projects Completed</p>
        </div>
        <div className="stat-item">
          <h3>1+</h3>
          <p>Years Experience</p>
        </div>
        <div className="stat-item">
          <h3>10+</h3>
          <p>Happy Clients</p>
        </div>
        <div className="stat-item">
          <h3>24/7</h3>
          <p>Support</p>
        </div>
      </div>
    </section>
  );
}

export default About; 
