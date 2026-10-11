import React from 'react';
import { REVIEWS } from '../data/dentilandData';

export const Reviews: React.FC = () => {
  return (
    <section className="py-8 sm:py-14 relative overflow-hidden bg-white" data-purpose="testimonials-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-4 sm:mb-8 text-right sm:text-center">
          <div className="flex items-center gap-2 mb-1.5 sm:justify-center">
            <div className="w-2.5 h-6 bg-sky-500 rounded-full"></div>
            <h2 className="text-[17px] sm:text-2xl lg:text-3xl font-black text-slate-800">
              لبخند رضایت شما
            </h2>
          </div>
          <p className="text-[12px] sm:text-sm text-slate-400">
            تجربه واقعی همراهان دنتی‌لند از خدمات و محصولات
          </p>
        </div>

        {/* Testimonials: Snap Carousel on Mobile, 3-column Grid on Desktop */}
        <div className="flex md:grid md:grid-cols-3 gap-3.5 sm:gap-6 overflow-x-auto md:overflow-visible pb-3 pt-1 snap-x snap-mandatory scroll-smooth no-scrollbar">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="snap-start shrink-0 w-72 md:w-auto bg-white rounded-2xl md:rounded-3xl p-4 sm:p-6 border border-slate-100 shadow-xs hover:shadow-card transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-0.5 mb-2.5 text-amber-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-amber-400" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                    </svg>
                  ))}
                </div>

                <p className="my-2 sm:my-4 text-[12px] sm:text-sm text-slate-600 leading-relaxed text-right">
                  {review.text}
                </p>
              </div>

              <div className="mt-3 sm:mt-4 pt-3 border-t border-slate-50 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-sky-100 text-sky-700 font-bold flex items-center justify-center text-xs shrink-0">
                    {review.initials}
                  </div>
                  <div>
                    <h3 className="text-[12px] font-bold text-slate-800">
                      {review.author}
                    </h3>
                  </div>
                </div>

                <span className="text-[10px] text-slate-400 font-normal">
                  {review.date}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
