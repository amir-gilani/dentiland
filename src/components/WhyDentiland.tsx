import React from 'react';
import { ShieldCheck, Truck, Headset, RotateCcw } from 'lucide-react';

interface WhyDentilandProps {
  onOpenConsultation: () => void;
}

export const WhyDentiland: React.FC<WhyDentilandProps> = ({ onOpenConsultation }) => {
  return (
    <section className="bg-white py-6 sm:py-8" data-purpose="why-dentiland" id="why-dentiland">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="relative w-full rounded-3xl sm:rounded-[2.5rem] p-5 sm:p-8 lg:px-10 border border-sky-100/80 shadow-soft overflow-hidden"
          style={{
            background:
              'radial-gradient(circle at 50% 20%, rgba(255, 255, 255, 0.95) 0%, rgba(240, 249, 255, 0.85) 45%, rgba(224, 242, 254, 0.7) 100%)',
          }}
        >
          {/* Subtle Ambient Background Glows */}
          <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-[34rem] h-56 bg-sky-200/30 rounded-full blur-3xl pointer-events-none -z-0"></div>
          <div className="absolute -bottom-10 right-10 w-64 h-64 bg-sky-300/20 rounded-full blur-3xl pointer-events-none -z-0"></div>
          <div className="absolute -top-8 left-8 w-60 h-60 bg-sky-100/50 rounded-full blur-2xl pointer-events-none -z-0"></div>

          {/* Mobile Top Header with Both Mascots on Sides */}
          <div className="flex items-center justify-between mb-5 relative z-10 lg:hidden">
            <div className="w-14 h-14 shrink-0 flex items-center justify-center">
              <img
                alt="مسکات دندان با سپر"
                className="w-full h-full object-contain drop-shadow-xs"
                src="/assets/why_tooth.png"
              />
            </div>
            
            <div className="text-center px-2 flex-1">
              <h2 className="text-[18px] font-black text-slate-800">چرا دنتی‌لند؟</h2>
              <span className="text-[11px] text-sky-600 font-bold block mt-1">
                ضمانت لبخند سالم با دنتی‌لند
              </span>
            </div>

            <div className="w-14 h-14 shrink-0 flex items-center justify-center">
              <img
                alt="کودک خندان در حال مسواک زدن"
                className="w-full h-full object-contain drop-shadow-xs"
                src="/assets/why_kid.png"
              />
            </div>
          </div>

          {/* Desktop Layout Wrapper */}
          <div className="hidden lg:flex items-center justify-between py-4 relative z-10">
            {/* Kid Brushing */}
            <div className="shrink-0 items-center justify-center relative w-56 h-56 -my-4">
              <img
                alt="کاراکتر کودک در حال مسواک زدن"
                className="w-full h-full object-contain p-2 hover:scale-105 transition-transform duration-300 drop-shadow-md select-none pointer-events-none"
                src="/assets/why_kid.png"
              />
            </div>

            {/* Center Content */}
            <div className="flex-1 max-w-3xl mx-auto w-full flex flex-col items-center text-center px-2">
              <h2 className="text-3xl sm:text-4xl tracking-tight mb-8 text-center font-bold text-slate-800">
                چرا دنتی‌لند؟
              </h2>

              <div className="grid grid-cols-4 gap-6 max-w-2xl mx-auto w-full items-start justify-center">
                {/* 1 - Authentic Products */}
                <div className="flex flex-col items-center text-center group cursor-default">
                  <div className="w-12 h-12 rounded-2xl bg-white/90 border border-sky-100/90 shadow-xs flex items-center justify-center mx-auto mb-3 text-sky-500 group-hover:text-sky-600 group-hover:border-sky-200 group-hover:bg-sky-50/70 transition-all duration-200">
                    <ShieldCheck className="w-6 h-6 stroke-[1.5]" />
                  </div>
                  <h3 className="text-sm font-extrabold text-slate-800 text-center mb-1 leading-snug">اصالت ۱۰۰٪ کالا</h3>
                  <p className="text-slate-400 text-xs font-normal text-center leading-normal">ضمانت کیفیت</p>
                </div>

                {/* 2 - Fast Shipping */}
                <div className="flex flex-col items-center text-center group cursor-default">
                  <div className="w-12 h-12 rounded-2xl bg-white/90 border border-sky-100/90 shadow-xs flex items-center justify-center mx-auto mb-3 text-sky-500 group-hover:text-sky-600 group-hover:border-sky-200 group-hover:bg-sky-50/70 transition-all duration-200">
                    <Truck className="w-6 h-6 stroke-[1.5]" />
                  </div>
                  <h3 className="text-sm font-extrabold text-slate-800 text-center mb-1 leading-snug">ارسال سریع</h3>
                  <p className="text-slate-400 text-xs font-normal text-center leading-normal">سراسر کشور</p>
                </div>

                {/* 3 - Expert Consultation */}
                <div onClick={onOpenConsultation} className="flex flex-col items-center text-center group cursor-pointer">
                  <div className="w-12 h-12 rounded-2xl bg-white/90 border border-sky-100/90 shadow-xs flex items-center justify-center mx-auto mb-3 text-sky-500 group-hover:text-sky-600 group-hover:border-sky-200 group-hover:bg-sky-50/70 transition-all duration-200">
                    <Headset className="w-6 h-6 stroke-[1.5]" />
                  </div>
                  <h3 className="text-sm font-extrabold text-slate-800 text-center mb-1 leading-snug group-hover:text-sky-600 transition">مشاوره تخصصی</h3>
                  <p className="text-slate-400 text-xs font-normal text-center leading-normal">دندانپزشکان مجرب</p>
                </div>

                {/* 4 - Return Guarantee */}
                <div className="flex flex-col items-center text-center group cursor-default">
                  <div className="w-12 h-12 rounded-2xl bg-white/90 border border-sky-100/90 shadow-xs flex items-center justify-center mx-auto mb-3 text-sky-500 group-hover:text-sky-600 group-hover:border-sky-200 group-hover:bg-sky-50/70 transition-all duration-200">
                    <RotateCcw className="w-6 h-6 stroke-[1.5]" />
                  </div>
                  <h3 className="text-sm font-extrabold text-slate-800 text-center mb-1 leading-snug">ضمانت بازگشت</h3>
                  <p className="text-slate-400 text-xs font-normal text-center leading-normal">۷ روز مهلت تست</p>
                </div>
              </div>
            </div>

            {/* Tooth Mascot */}
            <div className="shrink-0 items-center justify-center relative w-56 h-56 -my-4">
              <img
                alt="مسکات دندان سه‌بعدی دنتی‌لند"
                className="w-full h-full object-contain p-2 hover:scale-105 transition-transform duration-300 drop-shadow-md"
                src="/assets/why_tooth.png"
              />
            </div>
          </div>

          {/* Mobile 2x2 Grid */}
          <div className="grid grid-cols-2 gap-3 relative z-10 lg:hidden">
            <div className="bg-white/90 backdrop-blur-xs p-3.5 rounded-2xl shadow-xs border border-white/80 flex flex-col items-center text-center">
              <div className="w-9 h-9 rounded-xl bg-sky-50/80 border border-sky-100/60 flex items-center justify-center text-sky-500 mb-2">
                <ShieldCheck className="w-4.5 h-4.5 stroke-[1.5]" />
              </div>
              <h3 className="text-[12px] font-extrabold text-slate-800">اصالت ۱۰۰٪ کالا</h3>
              <p className="text-[10px] text-slate-400 mt-0.5">ضمانت کیفیت</p>
            </div>

            <div className="bg-white/90 backdrop-blur-xs p-3.5 rounded-2xl shadow-xs border border-white/80 flex flex-col items-center text-center">
              <div className="w-9 h-9 rounded-xl bg-sky-50/80 border border-sky-100/60 flex items-center justify-center text-sky-500 mb-2">
                <Truck className="w-4.5 h-4.5 stroke-[1.5]" />
              </div>
              <h3 className="text-[12px] font-extrabold text-slate-800">ارسال سریع</h3>
              <p className="text-[10px] text-slate-400 mt-0.5">سراسر کشور</p>
            </div>

            <div onClick={onOpenConsultation} className="bg-white/90 backdrop-blur-xs p-3.5 rounded-2xl shadow-xs border border-white/80 flex flex-col items-center text-center cursor-pointer">
              <div className="w-9 h-9 rounded-xl bg-sky-50/80 border border-sky-100/60 flex items-center justify-center text-sky-500 mb-2">
                <Headset className="w-4.5 h-4.5 stroke-[1.5]" />
              </div>
              <h3 className="text-[12px] font-extrabold text-slate-800">مشاوره تخصصی</h3>
              <p className="text-[10px] text-slate-400 mt-0.5">دندانپزشکان مجرب</p>
            </div>

            <div className="bg-white/90 backdrop-blur-xs p-3.5 rounded-2xl shadow-xs border border-white/80 flex flex-col items-center text-center">
              <div className="w-9 h-9 rounded-xl bg-sky-50/80 border border-sky-100/60 flex items-center justify-center text-sky-500 mb-2">
                <RotateCcw className="w-4.5 h-4.5 stroke-[1.5]" />
              </div>
              <h3 className="text-[12px] font-extrabold text-slate-800">ضمانت بازگشت</h3>
              <p className="text-[10px] text-slate-400 mt-0.5">۷ روز مهلت تست</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
