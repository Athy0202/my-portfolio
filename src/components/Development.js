// src/components/Development.js
import React from 'react';

const Development = () => {
  return (
    <section id="development" className="development-section">
      <div className="development-header">
        <h2>Developments</h2>
        <p>Explore my coding and application projects...</p>
      </div>
      <div className="development-content">
        <div className="project-card">
          <img src="/images/project1.jpg" alt="Project 1 Screenshot" />
          <div className="project-details">
            <h3>My Pizza App</h3>
            <p>A web application that allows users to order pizzas.</p>
            <a href="https://pizza-app-athy-chi.vercel.app/" target="_blank" rel="noopener noreferrer" className="project-link">View Project</a>
          </div>
        </div>
        <div className="project-card">
          <img src="/images/TravelList.jpg" alt="Project 2 Screenshot" />
          <div className="project-details">
            <h3>Travel-list App</h3>
            <p>A web application that allows users to create and manage travel lists.</p>
            <a href="https://athytravel-list-app-starter.vercel.app/" target="_blank" rel="noopener noreferrer" className="project-link">View Project</a>
          </div>
        </div>
        <div className="project-card">
          <img src="/images/WorkoutBuddy.jpg" alt="Project 3 Screenshot" />
          <div className="project-details">
            <h3>Workout Buddy</h3>
            <p>A web application that allows users to track their workouts.</p>
            <a href="https://mernapp-lesson-10-1.onrender.com/" target="_blank" rel="noopener noreferrer" className="project-link">View Project</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Development;
