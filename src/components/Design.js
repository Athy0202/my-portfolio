// src/components/Design.js
import React from 'react';

const Design = () => {
  return (
    <section id="design" className="design-section">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-5">
          <h2 className="text-light">Design</h2>
          <p className="text-muted">
            I specialize in vibrant, memorable designs that balance fun and sophistication.
          </p>
        </div>

        {/* Design Grid */}
        <div className="row gy-4">
          {designData.map((design, index) => (
            <div className="col-md-6" key={index}>
              <div className="card bg-dark text-light border-0 shadow-sm">
                <img
                  src={`${process.env.PUBLIC_URL}${design.image}`}
                  className="card-img-top rounded"
                  alt={design.alt}
                />
                <div className="card-body">
                  <h3 className="card-title">{design.title}</h3>
                  <p>{design.description}</p>
                  <p>
                    <strong>Tools Used:</strong> {design.tools}
                  </p>
                  <h4>Rationale</h4>
                  <p>{design.rationale}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const designData = [
  {
    image: '/images/design1.jpg',
    alt: 'Chat Sticker Set',
    title: 'Chat Stickers',
    description:
      'A playful yet professional design suite inspired by my passion for creativity and communication.',
    tools: 'Adobe Photoshop, Illustrator',
    rationale:
      'I used a complementary palette of oranges and blues for a bright, eye-catching look. A modern, clean sans-serif font enhances readability, and each sticker portrays cats reading and working on laptops to echo my creative spirit and love for learning. Key design principles like contrast and hierarchy help to create a cohesive set.',
  },
  {
    image: '/images/design2.jpg',
    alt: 'Name Card Design',
    title: 'Name Card',
    description:
      'A soft pink background and subtle dark pink accents create a calm, inviting tone.',
    tools: 'Adobe Photoshop, Illustrator',
    rationale:
      'Clean, readable fonts highlight my name and title for clarity, while a script font for "Athy" adds a personal touch. The cherry illustration on the back is a memorable accent that symbolizes creativity and productivity.',
  },
  {
    image: '/images/design3.jpg',
    alt: 'Logo Design Concept',
    title: 'Logo Design Concept',
    description:
      'A bold and memorable logo that reflects my values as a writer: creativity, warmth, and professionalism.',
    tools: 'Adobe Photoshop, Illustrator',
    rationale:
      'The color scheme of black, purple, and pink creates a strong brand identity. Black provides a sophisticated backdrop, purple symbolizes creativity, and pink brings warmth. This combination achieves a harmonious and engaging design, with "I AM A WRITER" standing out for its boldness and clarity.',
  },
  {
    image: '/images/design4.jpg',
    alt: 'Logo on Applications',
    title: 'Logo on Applications',
    description:
      'A practical demonstration of the logo\'s versatility across various mediums.',
    tools: 'Adobe Photoshop, Illustrator',
    rationale:
      'This design showcases the adaptability of the logo across different use cases, emphasizing its boldness and visual appeal when applied to real-world objects.',
  },
];

export default Design;

