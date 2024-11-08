// src/App.js
import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Design from './components/Design';
import Development from './components/Development';
import Contact from './components/Contact';
import SocialMedia from './components/SocialMedia';
import Footer from './components/Footer';

import './styles.css';

function App() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Experience />
      <Design />
      <Development />
      <Contact />
      <SocialMedia />
      <Footer />
    </div>
  );
}

export default App;
