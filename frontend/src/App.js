import React, { useState, useEffect } from 'react';
import './css/style.css'; 
import Guestbook from './Guestbook'; 
import Navbar from './components/Navbar';
import Home from './components/Home';
import Education from './components/Education';
import Projects from './components/Projects';
import Gallery from './components/Gallery';

function App() {
  const [loading, setLoading] = useState(true);
  const [percent, setPercent] = useState(false);

  useEffect(() => {
    // Timer 1: Show "100%" right before finishing (at 2.2s)
    const percentTimer = setTimeout(() => {
      setPercent(true);
    }, 2200);

    // Timer 2: Finish loading (at 3s)
    const finalTimer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => {
      clearTimeout(percentTimer);
      clearTimeout(finalTimer);
    };
  }, []);

  if (loading) {
    const loadingText = "Now Loading...";
    return (
      <div className="ba-loader-screen">
        <div className="loader-content">
          <div className="ba-halo loader-halo"></div>
          
          <h1 className="ba-loading-wave">
            {loadingText.split("").map((char, index) => (
              <span key={index} style={{ animationDelay: `${index * 0.1}s` }}>
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h1>

          <div className="loading-bar-wrapper">
            <div className="loading-bar-container">
              <div className="loading-bar-fill"></div>
            </div>

            <div className={`percent-text ${percent ? 'show' : ''}`}>100%</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-fade-in">
      <Navbar />

      <div className="container">
        {/* All your components go here in order */}
        <Home />
        <Education />
        <Projects />
        <Gallery />
        
        {/* The Guestbook goes at the bottom */}
        <hr />
        <section id="guestbook">
          <Guestbook />
        </section>
      </div>

      <footer style={{ textAlign: 'center', padding: '20px', marginTop: '40px', fontFamily: '"Press Start 2P", cursive', fontSize: '10px' }}>
        <p>© 2026 My Personal Profile</p>
      </footer>
    </div>
  );
}

export default App;