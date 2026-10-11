import React from 'react';
import { CATEGORIES, CategoryItem } from '../data/dentilandData';

interface CategoriesProps {
  onSelectCategory: (category: CategoryItem) => void;
}

export const Categories: React.FC<CategoriesProps> = ({ onSelectCategory }) => {
  return (
    <section className="py-8 sm:py-12 bg-white relative" data-purpose="categories-section" id="categories">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Mobile & Desktop Section Header */}
        <div className="mb-4 sm:mb-8">
          <div className="flex items-center justify-between mb-1.5 sm:mb-2">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-6 bg-sky-500 rounded-full"></div>
              <h2 className="text-[17px] sm:text-2xl lg:text-3xl font-black text-slate-800">
                دسته‌بندی‌های محبوب
              </h2>
            </div>
            <a
              href="#categories"
              className="text-[12px] sm:text-sm text-sky-600 font-bold flex items-center gap-0.5 hover:underline"
            >
              <span>همه دسته‌ها</span>
              <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </a>
          </div>
          <p className="text-[12px] sm:text-sm text-slate-400">
            انتخاب آسان بر اساس نیاز سلامت دهان و دندان شما
          </p>
        </div>

        {/* Categories: Horizontal Snap Carousel on mobile, 5-col Grid on desktop */}
        <div className="flex lg:grid lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-6 overflow-x-auto lg:overflow-visible pb-4 pt-1 snap-x snap-mandatory scroll-smooth no-scrollbar">
          {CATEGORIES.map((category) => (
            <div
              key={category.id}
              onClick={() => onSelectCategory(category)}
              className="snap-start shrink-0 w-32 sm:w-40 lg:w-auto bg-white rounded-2xl lg:rounded-[32px] p-3 sm:p-5 lg:py-10 shadow-xs hover:shadow-card border border-slate-100 lg:border-sky-100 flex flex-col items-center text-center justify-between transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
            >
              <div className="w-18 h-18 sm:w-22 sm:h-22 lg:w-28 lg:h-28 rounded-2xl bg-sky-50/50 lg:bg-transparent flex items-center justify-center p-2 mb-2 lg:mb-4 group-hover:scale-105 transition-transform">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-contain filter drop-shadow-xs"
                />
              </div>

              <div className="flex flex-col items-center w-full">
                <h3 className="text-[12px] sm:text-sm lg:text-base font-extrabold text-slate-800 text-center line-clamp-1 mb-1 lg:mb-2">
                  {category.title}
                </h3>
                
                <span className="text-[11px] sm:text-xs lg:text-[13px] text-sky-600 font-semibold group-hover:gap-2 transition-all flex items-center gap-1">
                  <span className="lg:hidden">مشاهده</span>
                  <span className="hidden lg:inline">مشاهده همه</span>
                  <svg className="w-3.5 h-3.5 rotate-180" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
