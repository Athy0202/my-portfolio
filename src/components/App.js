// src/App.js
import React from 'react';
import Header from './Header';
import Home from './Home';
import About from './About';
import Experience from './Experience';
import Design from './Design';
import Development from './Development';
import Contact from './Contact';
import SocialMedia from './SocialMedia';
import Footer from './Footer';
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
