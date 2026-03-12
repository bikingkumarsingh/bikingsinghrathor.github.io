'use client';

export default function WelcomeSection() {

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating circles */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute top-1/3 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-10 left-1/2 w-72 h-72 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 md:px-12">
        {/* Main heading */}
        <div
          className="mb-6"
        >
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-pink-600 via-rose-500 to-pink-600 bg-clip-text text-transparent mb-4">
            Welcome
          </h1>
        </div>

        {/* Subtitle */}
        <div>
          <p className="text-xl md:text-3xl text-gray-700 mb-4 font-light tracking-wide">
            ✨ Where Beauty Meets Passion ✨
          </p>
        </div>

        {/* Decorative rose line */}
        <div>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="flex-1 h-1 bg-gradient-to-r from-transparent to-pink-400"></div>
            <span className="text-4xl">🌹</span>
            <span className="text-4xl">🌷</span>
            <span className="text-4xl">🌸</span>
            <div className="flex-1 h-1 bg-gradient-to-l from-transparent to-pink-400"></div>
          </div>
        </div>

        {/* Description text */}
        <div>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
            Experience a journey through elegance and charm, adorned with falling roses
          </p>
        </div>

        {/* CTA Button */}
        <div>
          <button className="px-8 py-3 md:px-12 md:py-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full font-semibold text-lg hover:from-pink-600 hover:to-rose-600">
            Explore Now ↓
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <svg className="w-6 h-6 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>


    </div>
  );
}
