// src/components/Contact.js
import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
        <div className="contact-header">
            <h2>Work with Me</h2>
            <p>I'm available for inquiries or collaborations. You can reach me through the following methods:</p>
        </div>
        <div className="contact-content">
            <div className="contact-info">
                <div className="contact-item">
                    <i className="fas fa-envelope"></i>
                    <span>Email: <a href="mailto:23041002@myrp.edu.sg">23041002@myrp.edu.sg</a></span>
                </div>
                <div className="contact-item">
                    <i className="fas fa-phone"></i>
                    <span>Phone: <a href="tel:+6588594707">+65 88594707</a></span>
                </div>
                <div className="contact-item">
                    <i className="fas fa-map-marker-alt"></i>
                    <span>Location: Singapore, Singapore</span>
                </div>
            </div>
            <div className="contact-image">
                <img src="/images/painting.jpg" alt="Painting by Me" />
            </div>
        </div>
    </section>
  );
};

export default Contact;

