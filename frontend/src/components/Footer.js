import React, { useState } from 'react';

const Footer = () => {
  const [isNotesOpen, setNotesOpen] = useState(false);

  // Toggle modal scroll lock
  if (isNotesOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }

  return (
    <footer className="ba-footer">
      <div className="footer-line"></div>
      <div className="footer-content">
        <p className="footer-copyright">Any all material imitated or used all rights reserved.</p>
        <button 
          className="system-notes-btn" 
          onClick={() => setNotesOpen(true)}
        >
          [ SYSTEM_NOTES ]
        </button>
      </div>

      {isNotesOpen && (
        <div className="modal-overlay" onClick={() => setNotesOpen(false)}>
          <div className="window-box system-modal" onClick={e => e.stopPropagation()}>
            <div className="window-header">
              <span className="window-title">SYSTEM_LOG // CREDITS</span>
              <button className="window-close" onClick={() => setNotesOpen(false)}>×</button>
            </div>
            <div className="window-body">
              <div className="modal-section">
                <h3>TECH_STACK</h3>
                <ul>
                  <li>React.js (Component Architecture)</li>
                  <li>CSS3 (Geometric Layouts & Keyframes)</li>
                  <li>Google Fonts (Press Start 2P & Segoe UI)</li>
                </ul>
              </div>
<div className="window-body">
  <div className="modal-section">
    <h3>CORE_LIBRARIES</h3>
    <ul>
      <li><a href="https://react.dev/" target="_blank" rel="noreferrer">React.js</a> - Component UI Framework</li>
      <li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noreferrer">CSS3</a> - Custom Animations & Geometric Layouts</li>
    </ul>
  </div>

        <div className="modal-section">
            <h3>RESOURCES_&_TOOLING</h3>
            <ul>
            <li><strong>AI Prompting:</strong> Logic and CSS architecture assisted by <a href="https://gemini.google.com/share/bd4029b601ad" target="_blank" rel="noreferrer">Google Gemini</a>.</li>
            <li><strong>Typography:</strong> <a href="https://fonts.google.com/specimen/Press+Start+2P" target="_blank" rel="noreferrer">'Press Start 2P'</a> via Google Fonts.</li>
            <li><strong>Design Inspiration:</strong> Designed with inspiration from <a href="https://bluearchive.nexon.com/home" target="_blank" rel="noreferrer">Blue Archive</a> by (Nexon/Yostar).Visual elements modeled after SCHALE OS terminal interfaces.</li>
            </ul>
        </div>

        <div className="modal-section">
            <h3>PROJECT_SOURCE</h3>
            <p>View the full codebase and documentation on <a href="https://github.com/Chase-Ian/personal-website-finals.git" target="_blank" rel="noreferrer">GitHub</a>.</p>
        </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;