import React from 'react';

interface FooterProps {
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenConsultation }) => {
  return (
    <footer
      id="contact"
      className="relative pb-8 bg-gradient-to-b from-[#eaf5fc] via-[#f2f9fe] to-[#e6f3fc] text-slate-600 overflow-hidden pt-0"
      data-purpose="page-footer"
    >
      {/* Top Wave Divider */}
      <div className="w-full overflow-hidden leading-none mb-6 sm:mb-10 select-none pointer-events-none">
        <svg
          className="relative block w-full h-8 sm:h-14 md:h-20 text-white"
          fill="currentColor"
          preserveAspectRatio="none"
          viewBox="0 0 1440 80"
        >
          <path d="M0,0 L0,15 Q90,15 130,48 Q165,80 200,80 L1240,80 Q1275,80 1310,48 Q1350,15 1440,15 L1440,0 Z"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Mobile Centered Footer (matching screen.png) */}
        <div className="lg:hidden flex flex-col items-center text-center px-2 pb-6">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-sky-500 to-sky-400 flex items-center justify-center text-white shadow-md shadow-sky-200">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M12 2C8.5 2 6 4.5 6 7.5C6 9.5 7 11 7 14C7 18 9 22 12 22C15 22 17 18 17 14C17 11 18 9.5 18 7.5C18 4.5 15.5 2 12 2Z"></path>
              </svg>
            </div>
            <span className="text-[18px] text-slate-800 font-black">دنتی‌لند</span>
          </div>

          <p className="text-[12px] text-slate-600 max-w-xs mb-5 leading-relaxed font-normal">
            سلامت دهان، لبخند زیباتر با دنتی‌لند. عرضه تخصصی محصولات مراقبت دندان با برترین برندها.
          </p>

          {/* Quick contact buttons on mobile */}
          <div className="w-full grid grid-cols-2 gap-2.5 mb-5 max-w-xs">
            <a
              className="bg-white rounded-xl p-2.5 flex items-center justify-center gap-1.5 text-slate-700 shadow-xs border border-sky-100"
              href="tel:02112345678"
            >
              <svg className="w-4 h-4 text-sky-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
              <span className="text-[11px] font-bold" dir="ltr">۰۲۱-۱۲۳۴۵۶۷۸</span>
            </a>

            <a
              className="bg-white rounded-xl p-2.5 flex items-center justify-center gap-1.5 text-slate-700 shadow-xs border border-sky-100"
              href="mailto:info@dentiland.ir"
            >
              <svg className="w-4 h-4 text-sky-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              <span className="text-[11px] font-bold truncate">info@dentiland.ir</span>
            </a>
          </div>

          {/* Quick links on mobile */}
          <div className="flex flex-wrap items-center justify-center gap-x-3.5 gap-y-1.5 mb-5 text-[11px] text-slate-600 font-medium">
            <a className="hover:text-sky-600 transition-colors" href="#why-dentiland">درباره ما</a>
            <span>•</span>
            <a className="hover:text-sky-600 transition-colors" href="#">قوانین و ضمانت</a>
            <span>•</span>
            <a className="hover:text-sky-600 transition-colors" href="#">پرسش‌های متداول</a>
            <span>•</span>
            <a className="hover:text-sky-600 transition-colors" href="#">همکاری با کلینیک‌ها</a>
          </div>

          <div className="w-full text-center">
            <p className="text-[10px] text-slate-400 font-normal">
              © ۱۴۰۳ دنتی‌لند. تمامی حقوق مادی و معنوی محفوظ است.
            </p>
          </div>
        </div>

        {/* Desktop Multi-column Grid */}
        <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-sky-200/60">
          
          {/* Col 1: Brand Info (Span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 to-sky-400 flex items-center justify-center text-white shadow-md shadow-sky-200">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M12 2C8.5 2 6 4.5 6 7.5C6 9.5 7 11 7 14C7 18 9 22 12 22C15 22 17 18 17 14C17 11 18 9.5 18 7.5C18 4.5 15.5 2 12 2Z"></path>
                </svg>
              </div>
              <span className="text-xl font-black text-slate-800">دنتی‌لند</span>
            </div>

            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-sm font-normal">
              سلامت دهان، لبخند زیباتر با دنتی‌لند. عرضه تخصصی محصولات مراقبت دندان با برترین برندهای بین‌المللی و مشاوره رایگان متخصصان.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <span className="text-xs text-slate-500 font-semibold">
                ارتباط در شبکه‌های اجتماعی:
              </span>
              <div className="flex items-center gap-2">
                <a
                  className="w-8 h-8 rounded-full bg-white hover:bg-sky-50 text-sky-600 border border-sky-200/70 flex items-center justify-center transition shadow-sm hover:scale-105"
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  title="اینستاگرام"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                  </svg>
                </a>
                <a
                  className="w-8 h-8 rounded-full bg-white hover:bg-sky-50 text-sky-600 border border-sky-200/70 flex items-center justify-center transition shadow-sm hover:scale-105"
                  href="https://t.me"
                  target="_blank"
                  rel="noreferrer"
                  title="تلگرام"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.868.866z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: دسترسی سریع */}
          <div>
            <h4 className="text-sm font-bold text-slate-800 mb-4">دسترسی سریع</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a className="text-slate-600 hover:text-sky-600 transition" href="#">
                  صفحه اصلی
                </a>
              </li>
              <li>
                <a className="text-slate-600 hover:text-sky-600 transition" href="#products">
                  فروشگاه محصولات
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenConsultation}
                  className="text-slate-600 hover:text-sky-600 transition text-right"
                >
                  خدمات و مشاوره‌ها
                </button>
              </li>
              <li>
                <a className="text-slate-600 hover:text-sky-600 transition" href="#why-dentiland">
                  درباره ما
                </a>
              </li>
              <li>
                <a className="text-slate-600 hover:text-sky-600 transition" href="#articles">
                  مقالات و وبلاگ
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: پشتیبانی */}
          <div>
            <h4 className="text-sm font-bold text-slate-800 mb-4">پشتیبانی</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a className="text-slate-600 hover:text-sky-600 transition" href="#contact">
                  تماس با ما
                </a>
              </li>
              <li>
                <a className="text-slate-600 hover:text-sky-600 transition" href="#">
                  سوالات متداول (FAQ)
                </a>
              </li>
              <li>
                <a className="text-slate-600 hover:text-sky-600 transition" href="#">
                  راهنمای خرید و پرداخت
                </a>
              </li>
              <li>
                <a className="text-slate-600 hover:text-sky-600 transition" href="#">
                  پیگیری سفارش
                </a>
              </li>
              <li>
                <a className="text-slate-600 hover:text-sky-600 transition" href="#">
                  شرایط و قوانین بازگشت
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: ارتباط مستقیم */}
          <div>
            <h4 className="text-sm font-bold text-slate-800 mb-4">ارتباط مستقیم</h4>
            <ul className="space-y-3 text-xs text-slate-600">
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-sky-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <span dir="ltr">۰۲۱-۱۲۳۴۵۶۷۸</span>
              </li>

              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-sky-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <span dir="ltr">info@dentiland.ir</span>
              </li>

              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-sky-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <span>تهران، خیابان ولیعصر، برج سلامت دنتی‌لند</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright Bottom Bar */}
        <div className="hidden lg:flex pt-8 flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <p>© ۱۴۰۳ دنتی‌لند. تمامی حقوق مادی و معنوی محفوظ است.</p>

          <p className="flex items-center gap-1 text-slate-500">
            <span>طراحی شده با</span>
            <svg className="w-4 h-4 text-rose-500 fill-current inline" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
            </svg>
            <span>برای لبخندهای سالم</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
