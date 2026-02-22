import React from 'react';

const Home = () => {
  const certifications = [
    { 
      id: 1, 
      title: "MySQL Essential Training", 
      issuer: "LinkedIn Learning", 
      date: "jan 2026", 
      link: "https://www.linkedin.com/learning/certificates/a235cf5d61b83c0eaa700ab0808ff9c81167b11c45a7c1090d71da81edeb9668?u=35279340",
      icon: "🗄️" 
    },
    { 
      id: 2, 
      title: "Programming Foundations: Databases", 
      issuer: "LinkedIn Learning", 
      date: "dec 2025", 
      link: "https://www.linkedin.com/learning/certificates/2581fa54bcdd75f16d02937c56e3a829db41d2549162d29c8890fdc68dfbda28?u=35279340",
      icon: "💾"
    }
  ];

  return (
    <section id="home">
      <div className="card">
        <h1>Hello I'm Chase Ian Famisaran</h1>
        <p style={{ marginTop: '10px' }}>
           Currently a student at the Asia Pacific College, pursuing a degree in Information Technology. 
          I have a passion for programming and game development, 
          thriving to be able to create full-stack applications.
        </p>
      </div>

      <div className="card achievement-panel">
        <div className="achievement-header">
          <h2 className='certification-header'>CERTIFICATES</h2>
          <span className="achievement-count">{certifications.length} / {certifications.length}</span>
        </div>
        
        <div className="achievement-list">
          {certifications.map(cert => (
            <a 
              key={cert.id} 
              href={cert.link} 
              target="_blank" 
              rel="noreferrer" 
              className="achievement-row"
            >
              <div className="achievement-icon-box">
                <span className="achievement-icon">{cert.icon}</span>
              </div>
              <div className="achievement-text">
                <h3 className="achievement-title">{cert.title}</h3>
                <p className="achievement-desc">Unlocked: {cert.issuer} ({cert.date})</p>
              </div>
              <div className="achievement-status">
                <div className="status-pixel"></div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;