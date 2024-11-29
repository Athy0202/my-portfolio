// src/components/Experience.js
import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="experience-image">
        <img src="/images/designer.jpg" alt="Aathira" />
      </div>
      <div className="learning">
        <h3>I've learned from</h3>
        <ul>
          <li>Republic Polytechnic</li>
        </ul>
      </div>
      <div className="clients">
        <h3>I've worked with</h3>
        <div className="skills">
          <h4>Coding Skills</h4>
          <div className="coding-skills">
            <span>HTML & CSS</span>
            <span>JavaScript</span>
            <span>SQL</span>
            <span>Python</span>
            <span>JSX</span>
          </div>
          <h4>Design Skills</h4>
          <div className="design-skills">
            <span>Adobe Photoshop</span>
            <span>Figma</span>
            <span>Illustrator</span>
            <span>Wireframing</span>
            <span>Prototyping</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
