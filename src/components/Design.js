import React, { useState } from 'react';

const Design = () => {
  const [fullScreenImage, setFullScreenImage] = useState(null);

  const openFullScreen = (src) => {
    setFullScreenImage(src);
  };

  const closeFullScreen = () => {
    setFullScreenImage(null);
  };

  return (
    <section id="design" className="design-section">
      <div className="design-header">
        <h2>Design</h2>
        <p>I specialize in vibrant, memorable designs that balance fun and sophistication.</p>
      </div>

      <div className="design-grid">
        {/* Design 1 */}
        <div className="design-card">
          <img src="/images/design1.jpg" alt="Chat Sticker Set" className="design-image" onClick={() => openFullScreen('/images/design1.jpg')} />
          <div className="design-content">
            <h3>Chat Stickers</h3>
            <p>A playful yet professional design suite inspired by my passion for creativity and communication.</p>
            <p><strong>Tools Used:</strong> Adobe Photoshop, Illustrator</p>
            <h4>Rationale</h4>
            <p>I used a complementary palette of oranges and blues for a bright, eye-catching look. A modern, clean sans-serif font enhances readability, and each sticker portrays cats reading and working on laptops to echo my creative spirit and love for learning. Key design principles like contrast and hierarchy help to create a cohesive set.</p>
          </div>
        </div>

        {/* Design 2 */}
        <div className="design-card">
          <img src="/images/design2.jpg" alt="Name Card Design" className="design-image" onClick={() => openFullScreen('/images/design2.jpg')} />
          <div className="design-content">
            <h3>Name Card</h3>
            <p>A soft pink background and subtle dark pink accents create a calm, inviting tone.</p>
            <p><strong>Tools Used:</strong> Adobe Photoshop, Illustrator</p>
            <h4>Rationale</h4>
            <p>Clean, readable fonts highlight my name and title for clarity, while a script font for "Athy" adds a personal touch. The cherry illustration on the back is a memorable accent that symbolizes creativity and productivity.</p>
          </div>
        </div>

        {/* Design 3 */}
        <div className="design-card">
          <img src="/images/design3.jpg" alt="Logo Design Concept" className="design-image" onClick={() => openFullScreen('/images/design3.jpg')} />
          <div className="design-content">
            <h3>Logo Design Concept</h3>
            <p>A bold and memorable logo that reflects my values as a writer: creativity, warmth, and professionalism.</p>
            <p><strong>Tools Used:</strong> Adobe Photoshop, Illustrator</p>
            <h4>Rationale</h4>
            <p>The color scheme of black, purple, and pink creates a strong brand identity. Black provides a sophisticated backdrop, purple symbolizes creativity, and pink brings warmth. This combination achieves a harmonious and engaging design, with "I AM A WRITER" standing out for its boldness and clarity.</p>
          </div>
        </div>

        {/* Design 4 */}
        <div className="design-card">
          <img src="/images/design4.jpg" alt="Logo on Applications" className="design-image" onClick={() => openFullScreen('/images/design4.jpg')} />
          <div className="design-content">
            <h3>Logo on Applications</h3>
            <p>A practical demonstration of the logo's versatility across various mediums.</p>
            <p><strong>Tools Used:</strong> Adobe Photoshop, Illustrator</p>
            <h4>Rationale</h4>
            <p>This design showcases the adaptability of the logo across different use cases, emphasizing its boldness and visual appeal when applied to real-world objects.</p>
          </div>
        </div>
      </div>

      {fullScreenImage && (
        <div className="fullscreen-overlay" onClick={closeFullScreen}>
          <img src={fullScreenImage} alt="Full Screen Design" className="fullscreen-image" />
        </div>
      )}
    </section>
  );
};

export default Design;