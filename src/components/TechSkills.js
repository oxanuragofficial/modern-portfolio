import React from 'react';
import './TechSkills.css';

function TechSkills() {
  const skillCategories = [
    {
      category: 'Frontend Development',
      icon: '🧑‍💻',
      skills: [
        { name: 'HTML', image: 'html.png' },
        { name: 'CSS', image: 'css.png' },
        { name: 'JavaScript', image: 'JavaScript.png' },
        { name: 'TypeScript', image: 'TypeScript.png' },
        { name: 'Tailwind CSS', image: 'Tailwind.png' },
        { name: 'React', image: 'react.png' },
        
      ]
    },
    {
      category: 'Backend Development',
      icon: '🧠',
      skills: [
        { name: 'Java', image: 'Java.png' },
        { name: 'C#', image: 'CSharp.png' }
      ]
    },
    {
      category: 'Databases',
      icon: '🗄️',
      skills: [
        { name: 'MySQL', image: 'MySQL.png' },
  
        { name: 'MongoDB', image: 'mongodb.png' },
        
      ]
    },
    {
      category: 'Data Science & Machine Learning',
      icon: '🤖',
      skills: [
        { name: 'Python', image: 'Python.png' },
      ]
    },
    {
      category: 'Developer Tools & Platforms',
      icon: '🧰',
      skills: [
        { name: 'Git', image: 'Git.png' },
        { name: 'GitHub', image: 'GitHub.png' },
        { name: 'VS Code', image: 'vscode.png' },
        { name: 'Postman', image: 'Postman.png' },
        { name: 'PowerShell', image: 'Powershell.png' }
      ]
    },
    {
      category: 'UI / Design',
      icon: '🎨',
      skills: [
        { name: 'Figma', image: 'figma.png' },
        { name: 'Canva', image: 'Canva.png' }
      ]
    },
    {
      category: 'Cloud & Networking',
      icon: '☁️',
      skills: [
        { name: 'AWS', image: 'AWS.png' },
        { name: 'Cisco', image: 'cisco.png' }
      ]
    },
    {
      category: 'Programming Languages',
      icon: '🧪',
      skills: [
        { name: 'C', image: 'C.png' },
        { name: 'Java', image: 'Java.png' },
        { name: 'Python', image: 'Python.png' },
        { name: 'JavaScript', image: 'JavaScript.png' },
        { name: 'TypeScript', image: 'TypeScript.png' },
        { name: 'C#', image: 'CSharp.png' }
      ]
    }
  ];

  return (
    <section id="tech-skills" className="tech-skills">
      <div className="section-header">
        <h2 className="section-title">Tech Skills</h2>
        <div className="section-decoration">
          <span className="decoration-dot"></span>
          <span className="decoration-line"></span>
          <span className="decoration-dot"></span>
        </div>
      </div>
      
      <div className="skills-categories">
        {skillCategories.map((category, idx) => (
          <div key={idx} className="skill-category" style={{ animationDelay: `${idx * 0.1}s` }}>
            <h3 className="category-title">
              <span className="category-icon">{category.icon}</span>
              {category.category}
            </h3>
            <div className="skills-grid">
              {category.skills.map((skill, index) => (
                <div 
                  key={index} 
                  className="skill-card"
                  style={{ animationDelay: `${(idx * 0.1) + (index * 0.05)}s` }}
                >
                  <div className="skill-image-wrapper">
                    <img 
                      src={process.env.PUBLIC_URL + '/images/skills/' + skill.image} 
                      alt={skill.name}
                      className="skill-image"
                      onLoad={() => console.log(`Loaded: ${skill.name}`)}
                      onError={(e) => {
                        console.log(`Failed to load: ${skill.name} - ${skill.image}`);
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="skill-fallback" style={{ display: 'none' }}>
                      {skill.name.charAt(0)}
                    </div>
                  </div>
                  <div className="skill-name">
                    <span>{skill.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="tech-stack-summary">
        <h3>Frontend Expertise</h3>
        <p className="stack-description">
          Proficient in modern web technologies, cloud platforms, and data science tools
        </p>
        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-number">20+</div>
            <div className="stat-label">Technologies</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">8</div>
            <div className="stat-label">Categories</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">5+</div>
            <div className="stat-label">Languages</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TechSkills;
