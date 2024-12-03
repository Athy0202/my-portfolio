// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css'; // Import global styles
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap styles

// Create root and render the main App component
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
