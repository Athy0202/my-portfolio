import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="experience-image">
        <img src="/images/designer.jpg" alt="Portrait of Aathira, a designer" />
      </div>
      <section className="learning">
        <h3>I've learned from</h3>
        <ul>
          <li>Republic Polytechnic</li>
          <li>Diploma in Digital Design and Development (April 2023 - Present)</li>
        </ul>
      </section>
      <section className="clients">
        <h3>I've worked with</h3>
        <div className="skills">
          <article>
            <h4>Coding Skills</h4>
            <div className="coding-skills">
              <span>HTML & CSS</span>
              <span>JavaScript</span>
              <span>SQL</span>
              <span>Python</span>
              <span>JSX</span>
            </div>
          </article>
          <article>
            <h4>Design Skills</h4>
            <div className="design-skills">
              <span>Adobe Photoshop</span>
              <span>Figma</span>
              <span>Illustrator</span>
              <span>Wireframing</span>
              <span>Prototyping</span>
            </div>
          </article>
        </div>
      </section>
    </section>
  );
};

export default Experience;

