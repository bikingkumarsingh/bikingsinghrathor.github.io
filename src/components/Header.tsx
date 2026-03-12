'use client';

export default function Header() {
  return (
    <header className="text-center mb-12 md:mb-[50px]">
      <h1 
        className="font-bold text-4xl md:text-[4.5rem] bg-gradient-to-r from-white via-yellow-300 to-red-400 bg-clip-text text-transparent m-0"
      >
        Hi, I'm Biking Singh Rathor
      </h1>
      <p className="text-2xl md:text-[1.8em] text-white font-semibold text-shadow mt-2.5">
        Passionate Adventure Biker from India
      </p>
    </header>
  );
}
