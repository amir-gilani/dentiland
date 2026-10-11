import React from 'react';
import { ProductItem } from '../data/dentilandData';

interface BestSellersProps {
  products: ProductItem[];
  wishlist: string[];
  cartItemIds: string[];
  onToggleWishlist: (productId: string) => void;
  onAddToCart: (product: ProductItem) => void;
  onSelectProduct: (product: ProductItem) => void;
}

export const BestSellers: React.FC<BestSellersProps> = ({
  products,
  wishlist,
  onToggleWishlist,
  onAddToCart,
  onSelectProduct,
}) => {
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: 'prev' | 'next') => {
    if (scrollRef.current) {
      // In RTL, prev is right and next is left
      const offset = direction === 'next' ? -320 : 320;
      scrollRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-6 sm:py-10 relative bg-white" data-purpose="best-sellers" id="products">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Mobile Header (matching screen.png) */}
        <div className="lg:hidden mb-4">
          <div className="flex items-center justify-between mb-1.5">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-6 bg-sky-500 rounded-full"></div>
              <h2 className="text-[17px] font-bold text-slate-800">
                پرفروش‌ترین محصولات
              </h2>
            </div>
            <div className="flex items-center gap-1 bg-sky-50 px-2.5 py-1 rounded-full border border-sky-100">
              <svg className="w-3.5 h-3.5 fill-amber-400 text-amber-400" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
              </svg>
              <span className="text-[11px] text-slate-700 font-bold">انتخاب برتر</span>
            </div>
          </div>
          <p className="text-[12px] text-slate-400">
            محبوب‌ترین و توصیه‌شده‌ترین محصولات دهان و دندان
          </p>
        </div>

        {/* Desktop Container Wrapper */}
        <div className="relative">
          
          {/* Desktop Slider Navigation Buttons */}
          <button
            onClick={() => scroll('prev')}
            className="hidden lg:flex absolute -right-5 lg:-right-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white hover:bg-sky-50 text-slate-600 hover:text-sky-600 items-center justify-center transition shadow-lg border border-slate-200/60 group cursor-pointer"
            title="قبلی"
          >
            <svg
              className="w-5 h-5 group-hover:scale-110 transition-transform"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
          </button>

          <button
            onClick={() => scroll('next')}
            className="hidden lg:flex absolute -left-5 lg:-left-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white hover:bg-sky-50 text-slate-600 hover:text-sky-600 items-center justify-center transition shadow-lg border border-slate-200/60 group cursor-pointer"
            title="بعدی"
          >
            <svg
              className="w-5 h-5 group-hover:scale-110 transition-transform"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
          </button>

          {/* Enclosing Soft Box on Desktop */}
          <div className="lg:border lg:border-sky-100/90 lg:rounded-[2.5rem] lg:p-8 lg:px-10 lg:bg-gradient-to-b lg:from-sky-50/60 lg:via-white lg:to-white lg:shadow-soft relative overflow-hidden">
            
            {/* Desktop Background Patterns */}
            <div className="hidden lg:block absolute -top-6 -left-6 w-32 h-32 bg-sky-100/40 rounded-full blur-2xl pointer-events-none -z-0"></div>
            <div className="hidden lg:block absolute -top-6 -right-6 w-36 h-36 bg-sky-100/30 rounded-full blur-2xl pointer-events-none -z-0"></div>

            {/* Desktop Center Header */}
            <div className="hidden lg:block text-center mb-6 relative z-10">
              <div className="inline-flex items-center gap-2 text-sky-600 font-semibold text-xs mb-1.5">
                <svg className="w-4 h-4 fill-amber-400 text-amber-400" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                </svg>
                <span>محصولات محبوب</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-800">
                پرفروش‌ترین محصولات
              </h2>
            </div>

            {/* Product Grid: 2 columns on mobile, 5 columns on desktop */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-5 relative z-10">
              {products.map((product, idx) => {
                const isFavorite = wishlist.includes(product.id);

                return (
                  <div
                    key={product.id}
                    className="bg-white rounded-2xl sm:rounded-3xl p-3 sm:p-4 border border-slate-100 hover:border-sky-300 hover:shadow-card transition-all duration-300 flex flex-col justify-between relative group shadow-xs"
                  >
                    {/* Top tags and favorite button */}
                    <div className="relative">
                      {idx === 2 && (
                        <span className="absolute top-2.5 right-2.5 z-10 px-2 py-0.5 rounded-full bg-rose-50 text-rose-600 border border-rose-200 text-[10px] font-bold">
                          تخفیف ویژه
                        </span>
                      )}

                      <button
                        onClick={() => onToggleWishlist(product.id)}
                        className={`absolute top-2 left-2 z-10 w-8 h-8 rounded-full bg-slate-50/80 flex items-center justify-center transition-colors cursor-pointer ${
                          isFavorite ? 'text-rose-500' : 'text-slate-400 hover:text-rose-500'
                        }`}
                        title="علاقه‌مندی"
                      >
                        <svg
                          className={`w-4 h-4 sm:w-5 sm:h-5 ${isFavorite ? 'fill-rose-500' : ''}`}
                          fill="none"
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
                      </button>

                      <div
                        onClick={() => onSelectProduct(product)}
                        className="w-full aspect-square sm:h-44 bg-sky-50/40 rounded-xl sm:rounded-2xl flex items-center justify-center p-2.5 mb-2.5 relative overflow-hidden cursor-pointer"
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-contain p-1 group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                    </div>

                    <div>
                      {/* Rating and Reviews Count */}
                      <div className="flex items-center gap-1 mb-1 sm:mb-1.5 text-xs text-amber-500">
                        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                        </svg>
                        <span className="text-[11px] font-bold text-slate-800">
                          {product.ratingFormatted}
                        </span>
                        <span className="text-[10px] text-slate-400 mr-auto">
                          {idx === 0 ? '(۳۴ نظر)' : idx === 1 ? '(۵۸ نظر)' : idx === 2 ? 'محبوب' : '(۲۲ نظر)'}
                        </span>
                      </div>

                      {/* Product Name */}
                      <h3
                        onClick={() => onSelectProduct(product)}
                        className="font-bold text-[13px] sm:text-sm text-slate-800 line-clamp-1 cursor-pointer hover:text-sky-600 transition mb-0.5 sm:mb-1"
                      >
                        {product.name}
                      </h3>

                      {/* Short Description */}
                      <p className="text-[11px] text-slate-500 line-clamp-1 mb-2 sm:mb-3">
                        {idx === 0
                          ? 'طعم نعنایی با روکش موم طبیعی'
                          : idx === 1
                          ? 'محافظت ۱۲ ساعته از مینا'
                          : idx === 2
                          ? 'طراحی ارگونومیک با پرز نرم'
                          : idx === 3
                          ? 'تسکین فوری دردهای دندان'
                          : 'مجهز به حسگر فشار و تایمر هوشمند'}
                      </p>

                      {/* Price */}
                      <div className="flex items-baseline justify-between mb-2 sm:mb-2.5">
                        <span className="text-[13px] sm:text-base font-extrabold text-sky-600">
                          {product.priceFormatted}
                        </span>
                        <span className="text-[10px] text-slate-500">تومان</span>
                      </div>

                      {/* Add to Cart Button */}
                      <button
                        onClick={() => onAddToCart(product)}
                        className="w-full py-2 sm:py-2.5 px-2 rounded-xl bg-sky-500 hover:bg-sky-600 text-white text-[12px] font-bold flex items-center justify-center gap-1 transition-all active:scale-95 shadow-sm cursor-pointer"
                      >
                        <svg
                          className="w-4 h-4 shrink-0"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                        <span>افزودن به سبد</span>
                      </button>
                    </div>

                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
