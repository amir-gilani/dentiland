import React from 'react';
import { X, Calendar, Clock, BookOpen, Share2 } from 'lucide-react';
import { ArticleItem } from '../data/dentilandData';

interface ArticleModalProps {
  article: ArticleItem | null;
  onClose: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ article, onClose }) => {
  if (!article) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs transition-opacity"
      />

      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-100 p-6 sm:p-8 z-10 max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 left-5 p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition-colors z-20"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Article Image Banner */}
        <div className="rounded-2xl overflow-hidden aspect-16/9 w-full mb-6 relative">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <span className="absolute bottom-4 right-4 px-3 py-1 bg-white/95 text-slate-900 font-bold text-xs rounded-full shadow-md">
            {article.category}
          </span>
        </div>

        {/* Metadata */}
        <div className="flex items-center gap-4 text-xs text-slate-400 mb-3">
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" />
            <span>{article.date}</span>
          </div>
          <span>•</span>
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            <span>زمان مطالعه: {article.readTime}</span>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-4 leading-snug">
          {article.title}
        </h2>

        {/* Body Text */}
        <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
          <p className="bg-sky-50/70 p-4 rounded-2xl border border-sky-100 text-sky-900 font-medium">
            {article.excerpt}
          </p>

          <p>
            یکی از مهم‌ترین چالش‌های والدین، ایجاد انگیزه و علاقه در کودکان برای رعایت مستمر بهداشت دهان و دندان است. دندانپزشکان متخصص اطفال توصیه می‌کنند از همان زمان رویش نخستین دندان‌های شیری، عادت‌های تمیز کردن ملایم با گاز استریل یا مسواک انگشتی آغاز شود.
          </p>

          <h3 className="text-base font-bold text-slate-900 pt-2">
            اصول طلایی مراقبت در منزل:
          </h3>
          <ul className="list-disc list-inside space-y-2 text-slate-600 pr-2">
            <li>استفاده از مسواک‌های دارای موهای بسیار نرم (Soft یا Extra Soft) متناسب با اندازه فک کودک.</li>
            <li>مسواک زدن حداقل دو بار در روز (به ویژه پیش از خواب شبانه) همراه با والدین به شکل بازی.</li>
            <li>استفاده از خمیردندان‌های بدون فلوراید برای کودکان زیر ۲ سال و استفاده از خمیردندان‌های محافظ با دوز استاندارد فلوراید برای سنین بالاتر.</li>
            <li>کنترل مصرف مواد قندی چسبنده مانند تافی و چیپس و جایگزینی آن با مغزیجات و میوه‌های تازه.</li>
          </ul>

          <div className="mt-6 p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs">
            💡 <strong>نکته تخصصی دنتی‌لند:</strong> دندان‌های شیری نقشه راهنمای رویش دندان‌های دائمی هستند؛ هرگونه پوسیدگی یا از دست رفتن زودهنگام آن‌ها می‌تواند باعث نامنظمی‌های شدید ارتودنسی در سنین بلوغ گردد.
          </div>
        </div>

        {/* Modal Footer */}
        <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
          <span className="text-xs text-slate-400">
            تألیف شده توسط تیم متخصصان کلینیک دنتی‌لند
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold rounded-xl transition-colors"
          >
            بستن پنجره
          </button>
        </div>

      </div>
    </div>
  );
};
