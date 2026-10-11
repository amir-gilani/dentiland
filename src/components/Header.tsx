import React, { useState } from 'react';
import { Search, Heart, ShoppingBag, User, Menu, X, ArrowLeft } from 'lucide-react';
import { ProductItem } from '../data/dentilandData';

interface HeaderProps {
  cartCount: number;
  wishlistCount: number;
  onOpenCart: () => void;
  onOpenWishlist: () => void;
  onOpenConsultation: () => void;
  onSearchSelect: (product: ProductItem) => void;
  allProducts: ProductItem[];
}

export const Header: React.FC<HeaderProps> = ({
  cartCount,
  wishlistCount,
  onOpenCart,
  onOpenWishlist,
  onOpenConsultation,
  onSearchSelect,
  allProducts,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const filteredProducts = searchQuery.trim()
    ? allProducts.filter(
        (p) =>
          p.name.includes(searchQuery) ||
          p.category.includes(searchQuery) ||
          p.description.includes(searchQuery)
      )
    : [];

  return (
    <header className="fixed top-3 inset-x-0 z-50 px-3.5 sm:px-6">
      <div className="max-w-7xl mx-auto h-16 flex items-center justify-between gap-2 px-3.5 sm:px-6 bg-white/95 backdrop-blur-xl rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-white/60 transition-all duration-300">
        
        {/* ================= Mobile Header (Matching screen.png) ================= */}
        <div className="flex lg:hidden items-center justify-between w-full h-full">
          {/* Right side: Hamburger Menu & Brand Name */}
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="منو"
              className="w-10 h-10 flex items-center justify-center rounded-full text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            <a href="#" className="flex items-center gap-1">
              <span className="text-[18px] font-black text-[#006591] leading-tight tracking-tight">
                دنتی‌لند
              </span>
            </a>
          </div>

          {/* Left side: Search & Cart buttons */}
          <div className="flex items-center gap-1">
            <button
              onClick={() => setIsMobileSearchOpen(!isMobileSearchOpen)}
              aria-label="جستجو"
              className="w-10 h-10 flex items-center justify-center rounded-full text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
            >
              <Search className="w-5 h-5" />
            </button>

            <button
              onClick={onOpenCart}
              aria-label="سبد خرید"
              className="relative w-10 h-10 flex items-center justify-center rounded-full text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute top-1.5 right-1.5 bg-[#006591] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold shadow-xs">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* ================= Desktop Header ================= */}
        <div className="hidden lg:flex items-center justify-between w-full h-full">
          {/* Right side: Brand Logo */}
          <div className="flex items-center gap-3">
            <a className="flex items-center gap-3 group" href="#">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-sky-500 to-sky-400 flex items-center justify-center text-white shadow-md shadow-sky-200 group-hover:scale-105 transition-transform duration-300">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C8.5 2 6 4.5 6 7.5C6 9.5 7 11 7 14C7 18 9 22 12 22C15 22 17 18 17 14C17 11 18 9.5 18 7.5C18 4.5 15.5 2 12 2Z"></path>
                  <path d="M10 9C10.5 8 11.2 7.5 12 7.5C12.8 7.5 13.5 8 14 9"></path>
                </svg>
              </div>
              <div>
                <span className="text-xl font-black tracking-tight text-[#006591] block">دنتی‌لند</span>
                <span className="text-[11px] font-medium text-slate-400">کلینیک و فروشگاه محصولات دندانی</span>
              </div>
            </a>
          </div>

          {/* Center: Navigation links */}
          <nav className="flex items-center gap-7">
            <a className="text-[#006591] font-bold text-sm hover:text-sky-700 transition" href="#">خانه</a>
            <a className="text-slate-600 font-medium text-sm hover:text-[#006591] transition" href="#products">محصولات</a>
            <a className="text-slate-600 font-medium text-sm hover:text-[#006591] transition" href="#categories">دسته‌بندی‌ها</a>
            <a className="text-slate-600 font-medium text-sm hover:text-[#006591] transition" href="#why-dentiland">درباره ما</a>
            <a className="text-slate-600 font-medium text-sm hover:text-[#006591] transition" href="#articles">وبلاگ</a>
            <a className="text-slate-600 font-medium text-sm hover:text-[#006591] transition" href="#contact">تماس با ما</a>
          </nav>

          {/* Left side: Search & Actions */}
          <div className="flex items-center gap-2.5">
            {/* Search input box */}
            <div className="relative flex items-center">
              <input
                className="w-52 pl-4 pr-9 py-2 text-xs bg-slate-50 border border-slate-200 rounded-full focus:outline-none focus:ring-2 focus:ring-sky-400 focus:bg-white text-slate-700 transition"
                placeholder="جستجو در محصولات..."
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setIsSearchOpen(true);
                }}
                onFocus={() => setIsSearchOpen(true)}
              />
              <Search className="w-4 h-4 text-slate-400 absolute right-3 pointer-events-none" />

              {/* Autocomplete dropdown */}
              {isSearchOpen && searchQuery && (
                <div className="absolute top-full mt-2 w-72 left-0 bg-white rounded-2xl shadow-xl border border-slate-100 p-2 z-50">
                  <div className="text-[11px] font-semibold text-slate-400 px-3 py-1.5 border-b border-slate-100 flex items-center justify-between">
                    <span>نتایج جستجو</span>
                    <span>{filteredProducts.length} مورد</span>
                  </div>
                  {filteredProducts.length > 0 ? (
                    <div className="max-h-60 overflow-y-auto divide-y divide-slate-50 mt-1">
                      {filteredProducts.map((prod) => (
                        <div
                          key={prod.id}
                          onClick={() => {
                            onSearchSelect(prod);
                            setIsSearchOpen(false);
                            setSearchQuery('');
                          }}
                          className="flex items-center gap-3 p-2 hover:bg-sky-50 rounded-xl cursor-pointer transition-colors"
                        >
                          <img
                            src={prod.image}
                            alt={prod.name}
                            className="w-9 h-9 object-contain rounded-lg bg-white border border-slate-100"
                          />
                          <div className="flex-1 min-w-0">
                            <h4 className="text-xs font-bold text-slate-800 truncate">
                              {prod.name}
                            </h4>
                            <div className="text-[11px] text-sky-600 font-semibold mt-0.5">
                              {prod.priceFormatted} تومان
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-4 text-xs text-slate-400">
                      محصولی یافت نشد
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Wishlist button */}
            <button
              onClick={onOpenWishlist}
              className="p-2 text-slate-500 hover:text-sky-600 hover:bg-sky-50 rounded-full transition relative cursor-pointer"
              title="علاقه‌مندی‌ها"
            >
              <Heart className="w-5 h-5" />
              {wishlistCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-sky-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center leading-none">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* User Profile Button */}
            <button
              onClick={onOpenConsultation}
              className="p-2 text-slate-500 hover:text-sky-600 hover:bg-sky-50 rounded-full transition cursor-pointer"
              title="مشاوره یا حساب کاربری"
            >
              <User className="w-5 h-5" />
            </button>

            {/* Shopping Cart Button */}
            <button
              onClick={onOpenCart}
              className="relative p-2.5 bg-[#006591] hover:bg-sky-700 text-white rounded-full shadow-md shadow-sky-200 transition cursor-pointer"
              title="سبد خرید"
            >
              <ShoppingBag className="w-4.5 h-4.5" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-sky-500 text-white text-[10px] font-bold rounded-full border-2 border-white flex items-center justify-center">
                {cartCount}
              </span>
            </button>
          </div>
        </div>

      </div>

      {/* Mobile Search Bar Dropdown */}
      {isMobileSearchOpen && (
        <div className="lg:hidden mt-2 max-w-7xl mx-auto bg-white/95 backdrop-blur-xl rounded-3xl shadow-xl border border-sky-100 p-3.5 animate-in slide-in-from-top-2">
          <div className="relative flex items-center">
            <input
              autoFocus
              className="w-full pl-9 pr-10 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-full focus:outline-none focus:ring-2 focus:ring-sky-400 focus:bg-white text-slate-700 transition"
              placeholder="جستجو در نام محصول، دسته‌بندی..."
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="w-4 h-4 text-slate-400 absolute right-3.5 pointer-events-none" />
            <button
              onClick={() => {
                setIsMobileSearchOpen(false);
                setSearchQuery('');
              }}
              className="p-1 mr-1 text-slate-400 hover:text-slate-600 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {searchQuery && (
            <div className="mt-2 pt-2 border-t border-slate-100">
              <div className="text-[11px] font-semibold text-slate-400 px-2 py-1 flex items-center justify-between">
                <span>نتایج جستجو</span>
                <span>{filteredProducts.length} مورد</span>
              </div>
              {filteredProducts.length > 0 ? (
                <div className="max-h-56 overflow-y-auto divide-y divide-slate-50 mt-1">
                  {filteredProducts.map((prod) => (
                    <div
                      key={prod.id}
                      onClick={() => {
                        onSearchSelect(prod);
                        setIsMobileSearchOpen(false);
                        setSearchQuery('');
                      }}
                      className="flex items-center gap-3 p-2 hover:bg-sky-50 rounded-xl cursor-pointer transition-colors"
                    >
                      <img
                        src={prod.image}
                        alt={prod.name}
                        className="w-10 h-10 object-contain rounded-lg bg-white border border-slate-100"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="text-xs font-bold text-slate-800 truncate">
                          {prod.name}
                        </h4>
                        <div className="text-[11px] text-sky-600 font-semibold mt-0.5">
                          {prod.priceFormatted} تومان
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-3 text-xs text-slate-400">
                  محصولی با این عنوان یافت نشد
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* Mobile Drawer (Menu) */}
      {isMobileMenuOpen && (
        <div className="lg:hidden mt-2 max-w-7xl mx-auto bg-white/95 backdrop-blur-xl rounded-3xl shadow-xl border border-sky-100 p-5 animate-in slide-in-from-top-2">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-2">
            <span className="text-[16px] font-black text-[#006591]">منوی دسترسی دنتی‌لند</span>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-1.5 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="flex flex-col gap-1 font-semibold text-sm text-slate-700">
            <a
              onClick={() => setIsMobileMenuOpen(false)}
              href="#"
              className="py-2.5 px-3 rounded-xl hover:bg-sky-50 hover:text-[#006591] transition"
            >
              صفحه اصلی
            </a>
            <a
              onClick={() => setIsMobileMenuOpen(false)}
              href="#products"
              className="py-2.5 px-3 rounded-xl hover:bg-sky-50 hover:text-[#006591] transition"
            >
              فروشگاه محصولات
            </a>
            <a
              onClick={() => setIsMobileMenuOpen(false)}
              href="#categories"
              className="py-2.5 px-3 rounded-xl hover:bg-sky-50 hover:text-[#006591] transition"
            >
              دسته‌بندی‌های محبوب
            </a>
            <a
              onClick={() => setIsMobileMenuOpen(false)}
              href="#why-dentiland"
              className="py-2.5 px-3 rounded-xl hover:bg-sky-50 hover:text-[#006591] transition"
            >
              چرا دنتی‌لند؟
            </a>
            <a
              onClick={() => setIsMobileMenuOpen(false)}
              href="#articles"
              className="py-2.5 px-3 rounded-xl hover:bg-sky-50 hover:text-[#006591] transition"
            >
              دانستنی‌های دندانی (وبلاگ)
            </a>
            <a
              onClick={() => setIsMobileMenuOpen(false)}
              href="#contact"
              className="py-2.5 px-3 rounded-xl hover:bg-sky-50 hover:text-[#006591] transition"
            >
              تماس با ما
            </a>
          </nav>

          {/* Quick Drawer Actions */}
          <div className="grid grid-cols-2 gap-2.5 pt-3.5 mt-2 border-t border-slate-100">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenWishlist();
              }}
              className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-2xl bg-sky-50 text-sky-700 text-xs font-bold hover:bg-sky-100 transition cursor-pointer"
            >
              <Heart className="w-4 h-4 text-sky-600" />
              <span>علاقه‌مندی‌ها</span>
              {wishlistCount > 0 && (
                <span className="w-4 h-4 rounded-full bg-sky-500 text-white text-[10px] flex items-center justify-center font-bold">
                  {wishlistCount}
                </span>
              )}
            </button>

            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-2xl bg-[#006591] text-white text-xs font-bold hover:bg-sky-800 transition cursor-pointer"
            >
              <User className="w-4 h-4" />
              <span>مشاوره آنلاین</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
