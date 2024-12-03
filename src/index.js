// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css'; // Import global styles
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

// Ensure the root element exists in index.html
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
