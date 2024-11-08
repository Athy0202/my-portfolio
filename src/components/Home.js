// src/components/Home.js
import React from 'react';

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="home-content">
        <h1>Aathira Rajan</h1>
        <p>Digital Designer</p>
        <a href="mailto:23041002@myrp.edu.sg">Email Me</a>
      </div>
      <div className="home-image">
        <img src="/images/athygallary.jpg" alt="Aathira" />
      </div>
    </section>
  );
};

export default Home;
