import React from 'react';
import { ARTICLES, ArticleItem } from '../data/dentilandData';

interface ArticlesProps {
  onSelectArticle: (article: ArticleItem) => void;
  onViewAllArticles: () => void;
}

export const Articles: React.FC<ArticlesProps> = ({
  onSelectArticle,
  onViewAllArticles,
}) => {
  return (
    <section className="py-8 sm:py-14 bg-white" data-purpose="blog-articles" id="articles">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-4 sm:mb-8">
          <div className="flex items-center justify-between mb-1.5 sm:mb-2">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-6 bg-sky-500 rounded-full"></div>
              <h2 className="text-[17px] sm:text-2xl lg:text-3xl font-black text-slate-800">
                دانستنی‌های دندانی
              </h2>
            </div>
            
            <button
              onClick={onViewAllArticles}
              className="text-[12px] sm:text-sm font-bold text-sky-600 hover:text-sky-700 flex items-center gap-1 group transition duration-200 cursor-pointer"
            >
              <span>مشاهده همه مقالات</span>
              <svg
                className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition duration-200"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </button>
          </div>

          <p className="text-[12px] sm:text-sm text-slate-400">
            آموزش‌ها و راهنماهای کوتاه مراقبت خانگی دندان
          </p>
        </div>

        {/* 
          Mobile: Vertical list of thumb-friendly row cards (matching screen.png)
          Desktop: 3-column large cards
        */}
        <div className="flex flex-col gap-3.5 lg:grid lg:grid-cols-3 lg:gap-7">
          {ARTICLES.map((article, idx) => {
            const badgeColorClass =
              idx === 0
                ? 'text-sky-700 bg-sky-50 border-sky-100'
                : idx === 1
                ? 'text-amber-700 bg-amber-50 border-amber-100'
                : 'text-sky-700 bg-sky-50 border-sky-100';

            return (
              <article
                key={article.id}
                onClick={() => onSelectArticle(article)}
                className="bg-white rounded-2xl lg:rounded-3xl p-3 lg:p-5 shadow-xs border border-sky-100/80 hover:border-sky-300 hover:shadow-card transition-all duration-300 flex flex-row lg:flex-col items-center lg:items-stretch gap-3.5 lg:gap-0 justify-between group cursor-pointer"
              >
                {/* Mobile Image (Thumb on right in RTL) / Desktop Cover */}
                <div className="w-20 h-20 lg:w-full lg:h-48 shrink-0 rounded-2xl overflow-hidden bg-sky-50 relative aspect-square lg:aspect-auto lg:mb-5">
                  <span className={`hidden lg:inline-block absolute top-3.5 right-3.5 bg-white/95 backdrop-blur ${badgeColorClass} text-[11px] font-bold px-3 py-1 rounded-full shadow-xs border z-10`}>
                    {article.category}
                  </span>
                  <img
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                    src={article.image}
                  />
                </div>

                {/* Content Box */}
                <div className="flex-1 min-w-0 lg:flex lg:flex-col lg:justify-between">
                  <div>
                    {/* Category tag on mobile */}
                    <span className={`lg:hidden text-[10px] font-bold px-2.5 py-0.5 rounded-full inline-block mb-1.5 border ${badgeColorClass}`}>
                      {article.category}
                    </span>

                    {/* Title */}
                    <h3 className="text-[13px] lg:text-base font-bold text-slate-800 line-clamp-1 group-hover:text-sky-600 transition-colors mb-1">
                      {article.title}
                    </h3>

                    {/* Snippet */}
                    <p className="text-[11px] lg:text-xs text-slate-500 line-clamp-1 lg:line-clamp-2 mt-0.5 lg:mt-2 leading-relaxed">
                      {article.excerpt}
                    </p>
                  </div>

                  {/* Date & Link */}
                  <div className="flex items-center justify-between mt-1.5 lg:mt-5 lg:pt-4 lg:border-t lg:border-slate-100 text-[10px] lg:text-xs text-slate-400">
                    <span className="flex items-center gap-1 font-medium">
                      <svg className="w-3 h-3 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                      {article.date}
                    </span>

                    <span className="hidden lg:flex items-center gap-1 text-sky-600 font-bold group-hover:text-sky-700 transition">
                      <span>مطالعه بیشتر</span>
                      <svg className="w-3.5 h-3.5 rotate-180 group-hover:-translate-x-1 transition duration-200" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                    </span>
                  </div>
                </div>

              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
};
