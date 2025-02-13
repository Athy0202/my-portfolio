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
            <p>A user-friendly web application that allows customers to browse a menu, customize their pizza orders, and place an order seamlessly. Features include real-time order tracking, a responsive UI, and an intuitive cart system.</p>
            <a href="https://pizza-app-athy-chi.vercel.app/" target="_blank" rel="noopener noreferrer" className="project-link">View Project</a>
          </div>
        </div>
        <div className="project-card">
          <img src="/images/TravelList.jpg" alt="Project 2 Screenshot" />
          <div className="project-details">
            <h3>Travel-list App</h3>
            <p>A practical travel companion app that helps users create, organize, and manage packing and itinerary lists. Features include drag-and-drop reordering, cloud sync, and reminders to ensure a stress-free trip.</p>
            <a href="https://athytravel-list-app-starter.vercel.app/" target="_blank" rel="noopener noreferrer" className="project-link">View Project</a>
          </div>
        </div>
        <div className="project-card">
          <img src="/images/WorkoutBuddy.jpg" alt="Project 3 Screenshot" />
          <div className="project-details">
            <h3>Workout Buddy</h3>
            <p>A full-stack fitness tracker that allows users to log workouts, track progress over time, and set fitness goals. Built using the MERN stack (MongoDB, Express, React, Node.js), it includes authentication, personalized dashboards, and performance analytics.</p>
            <a href="https://mernapp-lesson-10-1.onrender.com/" target="_blank" rel="noopener noreferrer" className="project-link">View Project</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Development;
