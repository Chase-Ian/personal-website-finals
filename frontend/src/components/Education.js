import React from 'react';

const Education = () => {
  return (
    <section id="education">
      <h2>Education</h2>
      <div className="card">
        <h3 style={{ fontSize: '16px' }}>Bachelor of Science in Information Technology</h3>
        <p style={{ color: '#666', marginBottom: '10px' }}>Asia Pacific College | 2024 – ongoing</p>
        <ul style={{ paddingLeft: '20px', fontSize: '14px' }}>
          <li>With an elective in Game Development</li>
        </ul>
      </div>
      <div className="card">
        <h3 style={{ fontSize: '16px' }}>Senior High School</h3>
        <p style={{ color: '#666', marginBottom: '10px' }}>Pateros Catholic School | 2023-2024 </p>
        <ul style={{ paddingLeft: '20px', fontSize: '14px' }}>
          <li>Science, Technology, Engineering, and Mathematics (STEM) track</li>
        </ul>
      </div>
    </section>
  );
};

export default Education;