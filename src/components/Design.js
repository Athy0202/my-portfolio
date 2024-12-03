// src/components/Design.js
import React from 'react';

const Design = () => {
  return (
    <section id="design" className="design-section">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-5">
          <h2 className="text-light">Design</h2>
          <p className="text-muted">I specialize in vibrant, memorable designs that balance fun and sophistication.</p>
        </div>

        {/* Design Grid */}
        <div className="row gy-4">
          {/* Design 1 */}
          <div className="col-md-6">
            <div className="card bg-dark text-light border-0 shadow-sm">
              <img src={`${process.env.PUBLIC_URL}/images/design1.jpg`} className="card-img-top rounded" alt="Chat Sticker Set" />
              <div className="card-body">
                <h3 className="card-title">Chat Stickers</h3>
                <p>A playful yet professional design suite inspired by my passion for creativity and communication.</p>
                <p><strong>Tools Used:</strong> Adobe Photoshop, Illustrator</p>
                <h4>Rationale</h4>
                <p>I used a complementary palette of oranges and blues for a bright, eye-catching look. A modern, clean sans-serif font enhances readability, and each sticker portrays cats reading and working on laptops to echo my creative spirit and love for learning. Key design principles like contrast and hierarchy help to create a cohesive set.</p>
              </div>
            </div>
          </div>

          {/* Design 2 */}
          <div className="col-md-6">
            <div className="card bg-dark text-light border-0 shadow-sm">
              <img src={`${process.env.PUBLIC_URL}/images/design2.jpg`} className="card-img-top rounded" alt="Name Card Design" />
              <div className="card-body">
                <h3 className="card-title">Name Card</h3>
                <p>A soft pink background and subtle dark pink accents create a calm, inviting tone.</p>
                <p><strong>Tools Used:</strong> Adobe Photoshop, Illustrator</p>
                <h4>Rationale</h4>
                <p>Clean, readable fonts highlight my name and title for clarity, while a script font for "Athy" adds a personal touch. The cherry illustration on the back is a memorable accent that symbolizes creativity and productivity.</p>
              </div>
            </div>
          </div>

          {/* Design 3 */}
          <div className="col-md-6">
            <div className="card bg-dark text-light border-0 shadow-sm">
              <img src={`${process.env.PUBLIC_URL}/images/design3.jpg`} className="card-img-top rounded" alt="Logo Design Concept" />
              <div className="card-body">
                <h3 className="card-title">Logo Design Concept</h3>
                <p>A bold and memorable logo that reflects my values as a writer: creativity, warmth, and professionalism.</p>
                <p><strong>Tools Used:</strong> Adobe Photoshop, Illustrator</p>
                <h4>Rationale</h4>
                <p>The color scheme of black, purple, and pink creates a strong brand identity. Black provides a sophisticated backdrop, purple symbolizes creativity, and pink brings warmth. This combination achieves a harmonious and engaging design, with "I AM A WRITER" standing out for its boldness and clarity.</p>
              </div>
            </div>
          </div>

          {/* Design 4 */}
          <div className="col-md-6">
            <div className="card bg-dark text-light border-0 shadow-sm">
              <img src={`${process.env.PUBLIC_URL}/images/design4.jpg`} className="card-img-top rounded" alt="Logo on Applications" />
              <div className="card-body">
                <h3 className="card-title">Logo on Applications</h3>
                <p>A practical demonstration of the logo's versatility across various mediums.</p>
                <p><strong>Tools Used:</strong> Adobe Photoshop, Illustrator</p>
                <h4>Rationale</h4>
                <p>This design showcases the adaptability of the logo across different use cases, emphasizing its boldness and visual appeal when applied to real-world objects.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Design;

