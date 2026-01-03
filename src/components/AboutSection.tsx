'use client';

export default function AboutSection() {
  const aboutItems = [
    "Name: Biking Singh Rathor",
    "Age: 18 years old",
    "Location: India",
    "Passion: Riding my bike and exploring new places",
    "Enjoy: Meeting new people and making friends",
    "Love: Learning new things and sharing experiences",
    "Believe in: Helping others and living life to the fullest",
    "Motto: Have fun and embrace every adventure",
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
        .about-card {
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(12px);
          border-radius: 20px;
          padding: 40px;
          margin: 40px auto;
          max-width: 900px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
        }
        ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        li {
          font-size: 1.4em;
          line-height: 2.2;
          padding: 18px 25px;
          background: rgba(255, 255, 255, 0.1);
          margin: 12px 0;
          border-radius: 15px;
          transition: all 0.4s ease;
          position: relative;
          padding-left: 60px;
          border-left: 5px solid #feca57;
        }
        li:hover {
          transform: translateX(15px);
          background: rgba(255, 107, 107, 0.4);
          border-left-color: #ff6b6b;
          box-shadow: 0 10px 25px rgba(255, 107, 107, 0.3);
        }
        li::before {
          content: "🏍️";
          position: absolute;
          left: 20px;
          top: 18px;
          font-size: 1.6em;
        }
        @media (max-width: 768px) {
          h2 { font-size: 2.4em; }
          .about-card { padding: 30px; }
        }
      `}</style>
      <h2>About Me</h2>
      <div className="about-card">
        <ul>
          {aboutItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
