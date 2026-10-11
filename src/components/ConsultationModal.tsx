import React, { useState } from 'react';
import { X, MessageSquare, CheckCircle, Phone, User, Calendar, Smile } from 'lucide-react';
import { DentilandImages } from '../assets/images';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [parentName, setParentName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [ageGroup, setAgeGroup] = useState('۳ تا ۶ سال');
  const [topic, setTopic] = useState('انتخاب مسواک و خمیردندان استاندارد');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      // Keep message visible or reset
    }, 2000);
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setParentName('');
    setPhoneNumber('');
    setNotes('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs transition-opacity"
      />

      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-100 p-6 sm:p-8 z-10 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 left-5 p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-black text-slate-900 mb-2">
              درخواست مشاوره شما ثبت شد!
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-sm mx-auto mb-6">
              متخصص دندانپزشکی کودکان دنتی‌لند به زودی با شماره تماس <span dir="ltr" className="font-bold text-sky-600">{phoneNumber || 'شما'}</span> تماس خواهد گرفت تا بهترین راهنمایی بهداشتی را ارائه دهد.
            </p>
            <button
              onClick={resetForm}
              className="px-8 py-2.5 bg-[#0099e5] text-white font-bold rounded-2xl hover:bg-[#0086cc] transition-colors"
            >
              متشکرم، بازگشت به سایت
            </button>
          </div>
        ) : (
          <div>
            {/* Header Lockup with cute mascot */}
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
              <div className="w-12 h-12 rounded-2xl bg-sky-100/70 p-1 shrink-0 flex items-center justify-center">
                <img
                  src={DentilandImages.whyDentiland.shieldTooth}
                  alt="مشاوره دنتیلند"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-lg font-black text-slate-900">
                  مشاوره آنلاین رایگان دندانپزشکی
                </h3>
                <p className="text-xs text-slate-500">
                  پاسخگویی سریع توسط دندانپزشکان متخصص اطفال
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Parent Name */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  نام و نام خانوادگی والد
                </label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    placeholder="مثال: مریم کریمی"
                    value={parentName}
                    onChange={(e) => setParentName(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 pr-10 pl-4 text-xs text-slate-800 focus:outline-none focus:border-sky-400"
                  />
                  <User className="w-4 h-4 text-slate-400 absolute right-3.5 top-3" />
                </div>
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  شماره موبایل جهت تماس پزشک
                </label>
                <div className="relative">
                  <input
                    type="tel"
                    required
                    placeholder="۰۹۱۲۳۴۵۶۷۸۹"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 pr-10 pl-4 text-xs text-slate-800 focus:outline-none focus:border-sky-400 text-left"
                    dir="ltr"
                  />
                  <Phone className="w-4 h-4 text-slate-400 absolute right-3.5 top-3" />
                </div>
              </div>

              {/* Child Age Group */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  رده سنی کودک
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {['زیر ۲ سال', '۲ تا ۶ سال', '۶ تا ۱۰ سال', 'نوجوان'].map((ag) => (
                    <button
                      key={ag}
                      type="button"
                      onClick={() => setAgeGroup(ag)}
                      className={`py-2 px-1 text-[11px] font-bold rounded-xl border transition-all ${
                        ageGroup === ag
                          ? 'bg-sky-500 text-white border-sky-500 shadow-xs'
                          : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {ag}
                    </button>
                  ))}
                </div>
              </div>

              {/* Topic Select */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  موضوع مشاوره
                </label>
                <select
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-3 text-xs text-slate-800 focus:outline-none focus:border-sky-400"
                >
                  <option value="انتخاب مسواک و خمیردندان استاندارد">
                    انتخاب مسواک و خمیردندان استاندارد
                  </option>
                  <option value="بررسی علائم پوسیدگی و دندان شیری">
                    بررسی علائم پوسیدگی و دندان شیری
                  </option>
                  <option value="ارتودنسی و مرتب‌سازی زودهنگام">
                    ارتودنسی و مرتب‌سازی زودهنگام
                  </option>
                  <option value="عادت بهداشت روزانه و فلوراید تراپی">
                    عادت بهداشت روزانه و فلوراید تراپی
                  </option>
                </select>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  توضیح کوتاه وضعیت یا سوال شما (اختیاری)
                </label>
                <textarea
                  rows={2}
                  placeholder="مثال: فرزندم ۳ ساله است و طعم تند خمیردندان‌ها را دوست ندارد..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2 px-3 text-xs text-slate-800 focus:outline-none focus:border-sky-400"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full py-3 rounded-2xl bg-[#0099e5] hover:bg-[#0086cc] text-white font-bold text-sm shadow-md shadow-sky-500/20 transition-all cursor-pointer mt-2"
              >
                ثبت و درخواست تماس با دندانپزشک
              </button>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
