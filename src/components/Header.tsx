'use client';

export default function Header() {
  return (
    <header className="text-center mb-12 md:mb-[50px]">
      <style>{`
        @keyframes textGlow {
          from { text-shadow: 0 0 20px rgba(255,255,255,0.5); }
          to { text-shadow: 0 0 40px rgba(255,107,107,0.8); }
        }
      `}</style>
      <h1 
        className="font-bold text-4xl md:text-[4.5rem] bg-gradient-to-r from-white via-yellow-300 to-red-400 bg-clip-text text-transparent m-0 animate-pulse"
        style={{ animation: 'textGlow 3s ease-in-out infinite alternate' }}
      >
        Hi, I'm Biking Singh Rathor
      </h1>
      <p className="text-2xl md:text-[1.8em] text-white font-semibold text-shadow mt-2.5">
        Passionate Adventure Biker from India
      </p>
    </header>
  );
}
