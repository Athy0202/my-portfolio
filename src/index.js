// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css'; // Import global styles
import App from './App';

// Import Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

// Import Bootstrap JS (optional for interactive components like modals or dropdowns)
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// Create root and render the main App component
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
