import React from 'react';

const Projects = () => {
  const projectList = [
    {
        id: 1,
        title: "Tracen Academy grading database system",
        tech: "Vue | Supabase",
        desc: "A full-stack application designed to manage student records and automate grading processes for a school, streamlining administrative tasks and improving efficiency.",
        icon: "📖",
        link: "https://github.com/Chase-Ian/College_gradingDB.git" // Replace with your link
    },
    {
        id: 2,
        title: "ODIN",
        tech: "GameMaker Studio 2",
        desc: "A simple 2D top-down shooter game where players control a spaceship to defeat waves of enemies.",
        icon: "👾",
        link: "https://gamejolt.com/games/ODIN/639190" // Replace with your link
    }
];

  return (
    <section id="projects">
      {/* Reusing the achievement-panel look for the whole section */}
      <div className="card achievement-panel">
        <div className="achievement-header">
          <h2 className='project-header'>PROJECTS</h2>
          <span className="achievement-count">{projectList.length} COMPLETED</span>
        </div>

        <div className="project-grid" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '15px' 
        }}>
          {projectList.map(project => (
            <a 
                key={project.id} 
                href={project.link} 
                target="_blank" 
                rel="noreferrer" 
                className="project-link-wrapper"
                style={{ textDecoration: 'none' }}
                >
                <div className="achievement-row project-item">
                    <div className="achievement-icon-box">
                    <span className="achievement-icon">{project.icon}</span>
                    </div>
                    
                    <div className="achievement-text">
                    <h3 className="achievement-title" style={{ color: '#66c0f4' }}>
                        {project.title}
                    </h3>
                    <p style={{ 
                        fontSize: '8px', 
                        color: '#fff', 
                        margin: '5px 0', 
                        fontFamily: "'Press Start 2P'" 
                    }}>
                        {project.tech}
                    </p>
                    <p className="achievement-desc">{project.desc}</p>
                    </div>

                    <div className="status-pixel project-rarity"></div>
                </div>
                </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;