import React from 'react';
import './Experience.css';

function Experience() {
  const experiences = [
  
    {
      id: 1,
      title: 'Founder & Web Developer',
      company: 'Bharat Web Studio',
      location: 'Gujrat, India',
      period: 'February 2025 - present',
      type: 'Self Employed',
      description: 'Served as a Web Development Engineer at Bharat Web Studio, delivering hands-on and project-based learning.',
      achievements: [
        'Trained and mentored 450+ students, independently managing lectures and lab sessions',
        'Delivered comprehensive web development training covering theory and practical implementation'
      ]
      ,
      technologies: ['Web Development', 'HTML', 'CSS', 'JavaScript', 'React']
    },
   
  ];

  return (
    <section id="experience" className="experience">
      <h2>Work Experience</h2>

      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={exp.id} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="experience-header">
                <div className="experience-title-section">
                  <h3>{exp.title}</h3>
                  <div className="company-info">
                    <span className="company">{exp.company}</span>
                    <span className="location">📍 {exp.location}</span>
                  </div>
                </div>
                <div className="experience-meta">
                  <span className="period">{exp.period}</span>
                  <span className="type">{exp.type}</span>
                </div>
              </div>

              <p className="description">{exp.description}</p>

              <div className="achievements">
                <h4>Key Achievements:</h4>
                <ul>
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx}>{achievement}</li>
                  ))}
                </ul>
              </div>

              <div className="technologies">
                <strong>Technologies:</strong>
                <div className="tech-tags">
                  {exp.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
