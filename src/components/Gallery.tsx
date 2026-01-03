'use client';

import Image from 'next/image';

export default function Gallery() {
  const galleryImages = [
    { src: '/gallery/1.jpeg', alt: 'Biker at mountain top' },
    { src: '/gallery/2.jpeg', alt: 'Motorcycle touring in the Himalayas' },
    { src: '/gallery/3.jpeg', alt: 'Epic Himalayan roads' },
    { src: '/gallery/4.jpeg', alt: 'Scenic bike ride' },
    { src: '/gallery/5.jpeg', alt: 'Adventure riding' },
    { src: '/gallery/6a.JPG', alt: 'Posing with Royal Enfield' },
  ];

  return (
    <section>
      <style>{`
        h2 {
          font-family: 'Oswald', sans-serif;
          font-size: 3em;
          color: #fff;
          margin: 80px 0 40px;
          text-align: center;
          position: relative;
          text-shadow: 0 4px 10px rgba(0,0,0,0.4);
        }
        h2::after {
          content: '';
          display: block;
          width: 120px;
          height: 6px;
          background: linear-gradient(to right, #feca57, #ff6b6b);
          margin: 15px auto;
          border-radius: 3px;
          box-shadow: 0 0 15px rgba(254, 202, 87, 0.8);
        }
        .gallery {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 25px;
          margin: 50px 0;
          padding: 0 10px;
        }
        .gallery-img {
          width: 100%;
          height: 350px;
          object-fit: cover;
          border-radius: 20px;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4);
          transition: all 0.5s ease;
          cursor: pointer;
          border: 4px solid rgba(255, 255, 255, 0.2);
        }
        .gallery-img:hover {
          transform: scale(1.08) translateY(-15px);
          box-shadow: 0 30px 60px rgba(255, 107, 107, 0.6);
          border-color: #feca57;
        }
        @media (max-width: 768px) {
          .gallery { grid-template-columns: 1fr; gap: 20px; }
          .gallery-img { height: 300px; }
        }
      `}</style>
      <h2>My Adventures</h2>
      <div className="gallery">
        {galleryImages.map((image, index) => (
          <Image
            key={index}
            src={image.src}
            alt={image.alt}
            width={400}
            height={350}
            className="gallery-img"
          />
        ))}
      </div>
    </section>
  );
}
