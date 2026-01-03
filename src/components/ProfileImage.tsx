'use client';

import Image from 'next/image';

export default function ProfileImage() {
  return (
    <div className="flex justify-center">
      <style>{`
        .profile-img {
          width: 280px;
          height: 280px;
          border-radius: 50%;
          object-fit: cover;
          border: 10px solid rgba(255, 255, 255, 0.3);
          backdrop-filter: blur(10px);
          margin: 40px auto;
          display: block;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.5);
          transition: all 0.6s ease;
        }
        .profile-img:hover {
          transform: scale(1.15) rotate(8deg);
          border-color: #feca57;
          box-shadow: 0 25px 60px rgba(254, 202, 87, 0.6);
        }
        @media (max-width: 768px) {
          .profile-img {
            width: 200px;
            height: 200px;
          }
        }
      `}</style>
      <Image
        src="/gallery/5.jpeg"
        alt="Biking Singh Rathor Portrait"
        width={280}
        height={280}
        className="profile-img"
        priority
      />
    </div>
  );
}
