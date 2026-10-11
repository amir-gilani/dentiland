import React from 'react';

interface HeroProps {
  onExploreProducts: () => void;
  onOpenConsultation: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreProducts,
  onOpenConsultation,
}) => {
  return (
    <section
      className="relative pt-24 sm:pt-28 lg:pt-32 pb-0 overflow-hidden"
      style={{
        background:
          'linear-gradient(180deg, #e0f2fe 0%, #ebf6fe 50%, #f0f9ff 100%)',
      }}
    >
      {/* Background Shapes & Subtle Glow Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-0">
        <div className="absolute -top-10 left-10 w-96 h-96 bg-sky-200/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 left-20 w-80 h-80 bg-sky-100/30 rounded-full blur-2xl"></div>
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-sky-200/30 rounded-full blur-3xl"></div>
        
        {/* Soft Dental Decorative Ambient SVGs */}
        <svg
          className="absolute top-28 left-10 w-28 h-28 text-sky-200/30"
          fill="currentColor"
          viewBox="0 0 100 100"
        >
          <circle cx="50" cy="50" r="40" fillOpacity="0.2"></circle>
        </svg>
        <svg
          className="absolute bottom-24 left-1/3 w-14 h-14 text-sky-300/30 pointer-events-none"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          viewBox="0 0 40 40"
        >
          <path d="M20 5 C15 5, 11 8, 11 12 C11 15, 13 18, 14 22 C15 26, 17 32, 20 32 C23 32, 25 26, 26 22 C27 18, 29 15, 29 12 C29 8, 25 5, 20 5 Z"></path>
          <path d="M16 14 Q20 18 24 14"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-6 lg:gap-10 items-center text-center lg:text-right">
          
          {/* Text Content */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start space-y-4 sm:space-y-6">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md shadow-xs border border-sky-300 text-sky-700 text-xs sm:text-sm font-bold whitespace-nowrap">
              <span className="text-sky-800 font-bold whitespace-nowrap">
                لبخند سالم، آینده روشن
              </span>
              <svg
                className="w-4 h-4 text-sky-500 fill-sky-500/20"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>

            {/* Headline */}
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight sm:leading-[1.3] tracking-tight">
              مراقبت از دندان‌ها <br className="hidden sm:inline" />
              <span className="font-black text-[#0284c7]">
                از سنین کودکی
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-slate-600 text-xs sm:text-base leading-relaxed max-w-sm sm:max-w-xl font-medium px-2 sm:px-0">
              با محصولات استاندارد و خدمات تخصصی، لبخندی سالم و درخشان برای کودکانتان بسازید. آرامش خیال خانواده در کنار تخصص دندانپزشکی دنتی‌لند.
            </p>

            {/* Visual Image for Mobile Screen (positioned between text and buttons) */}
            <div className="lg:hidden w-full max-w-xs sm:max-w-sm mx-auto flex justify-center items-center py-2">
              <img
                alt="بنر هیرو دندانپزشکی دنتی‌لند"
                className="w-full max-h-64 sm:max-h-72 object-contain select-none transition-transform duration-300 hover:scale-105 drop-shadow-md"
                src="/assets/hero_img.png"
              />
            </div>

            {/* Hero CTA Buttons */}
            <div className="flex flex-row items-center justify-center lg:justify-start gap-2.5 sm:gap-3 w-full sm:w-auto pt-2 pb-2">
              <button
                onClick={onExploreProducts}
                className="py-2.5 sm:py-3.5 px-5 sm:px-7 rounded-full bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white font-bold text-xs sm:text-sm shadow-lg shadow-sky-300/40 transform hover:-translate-y-0.5 active:scale-95 transition-all cursor-pointer whitespace-nowrap flex items-center justify-center gap-1.5"
              >
                <span>مشاهده محصولات</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </button>

              <button
                onClick={onOpenConsultation}
                className="py-2.5 sm:py-3.5 px-4 sm:px-6 rounded-full bg-white hover:bg-sky-50 text-sky-600 font-bold text-xs sm:text-sm border border-sky-200 shadow-xs active:scale-95 transition-all cursor-pointer whitespace-nowrap flex items-center justify-center gap-1.5"
              >
                <svg
                  className="w-4 h-4 text-sky-500 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <span>مشاوره آنلاین</span>
              </button>
            </div>

          </div>

          {/* Desktop Visual Image */}
          <div className="hidden lg:flex lg:col-span-5 justify-center items-center relative">
            <div className="relative w-full flex items-center justify-center">
              <img
                alt="بنر هیرو دندانپزشکی دنتی‌لند"
                className="w-full max-w-lg h-auto object-contain select-none transition-transform duration-300 hover:scale-105 drop-shadow-md"
                src="/assets/hero_img.png"
              />
            </div>
          </div>

        </div>
      </div>

      {/* 
        Shape at bottom of hero section:
        A completely straight horizontal flat line in the middle (spanning 70% width)
        with smooth, graceful curves on the left and right sides!
        Exact match in both fullscreen and mobile responsive views!
      */}
      <div className="w-full overflow-hidden leading-none z-10 -mb-[1px] pt-6 sm:pt-12 lg:pt-16 pointer-events-none select-none relative">
        <svg
          className="relative block w-full h-8 sm:h-12 md:h-16 lg:h-20 text-white fill-current"
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
        >
          <path d="M0,80 L0,48 C80,48 140,0 220,0 L1220,0 C1300,0 1360,48 1440,48 L1440,80 Z" />
        </svg>
      </div>
    </section>
  );
};
