// src/components/Design.js
import React from 'react';

const Design = () => {
  return (
    <section id="design" className="design-section">
  <div className="design-header">
    <h2>Design</h2>
    <p>I specialize in vibrant, memorable designs that balance fun and sophistication.</p>
  </div>
  
  <div className="design-grid">
    {/* Design 1 */}
    <div className="design-card">
      <h3>Chat Stickers & Name Card</h3>
      <div className="design-images">
        <img src="/images/design1.jpg" alt="Chat Sticker Set" />
        <img src="/images/design2.jpg" alt="Name Card Design" />
      </div>
      <div className="design-content">
        <p>A playful yet professional design suite inspired by my passion for creativity and communication.</p>
        <p><strong>Tools Used:</strong> Adobe Photoshop, Illustrator</p>
        <div className="design-description">
          <h4>Rationale</h4>
          <p><strong>Chat Stickers:</strong> I used a complementary palette of oranges and blues for a bright, eye-catching look. A modern, clean sans-serif font enhances readability, and each sticker portrays cats reading and working on laptops to echo my creative spirit and love for learning. Key design principles like contrast and hierarchy help to create a cohesive set.</p>
          <p><strong>Name Card:</strong> A soft pink background and subtle dark pink accents create a calm, inviting tone. Clean, readable fonts highlight my name and title for clarity, while a script font for "Athy" adds a personal touch. The cherry illustration on the back is a memorable accent that symbolizes creativity and productivity.</p>
        </div>
      </div>
    </div>
    
    {/* Design 2 */}
    <div className="design-card">
      <h3>Logo Design</h3>
      <div className="design-images">
        <img src="/images/design3.jpg" alt="Logo Design Concept" />
        <img src="/images/design4.jpg" alt="Logo on Various Applications" />
      </div>
      <div className="design-content">
        <p>A bold and memorable logo that reflects my values as a writer: creativity, warmth, and professionalism.</p>
        <p><strong>Tools Used:</strong> Adobe Photoshop, Illustrator</p>
        <div className="design-description">
          <h4>Rationale</h4>
          <p>The color scheme of black, purple, and pink creates a strong brand identity. Black provides a sophisticated backdrop, purple symbolizes creativity, and pink brings warmth. This combination achieves a harmonious and engaging design, with "I AM A WRITER" standing out for its boldness and clarity.</p>
        </div>
      </div>
    </div>
  </div>
</section>

  );
};

export default Design;
