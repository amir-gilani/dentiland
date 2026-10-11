import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { ProductItem } from '../data/dentilandData';

export interface CartItem {
  product: ProductItem;
  quantity: number;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, delta: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);

  if (!isOpen) return null;

  const totalAmount = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const formatPrice = (num: number) => {
    return new Intl.NumberFormat('fa-IR').format(num);
  };

  const handleCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      setCheckoutSuccess(true);
      setTimeout(() => {
        setCheckoutSuccess(false);
        onClearCart();
        onClose();
      }, 2500);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs transition-opacity"
      />

      <div className="fixed inset-y-0 left-0 max-w-full flex pl-0 sm:pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col animate-in slide-in-from-left duration-300">
          
          {/* Header */}
          <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-sky-50/50">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-sky-500 text-white flex items-center justify-center">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900">سبد خرید</h3>
                <span className="text-xs text-slate-500">
                  {items.length > 0 ? `${items.length} قلم کالا` : 'سبد خرید شما خالی است'}
                </span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content Area */}
          <div className="flex-1 overflow-y-auto p-5">
            {checkoutSuccess ? (
              <div className="py-16 text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h4 className="text-lg font-black text-slate-900 mb-2">
                  سفارش شما با موفقیت ثبت شد!
                </h4>
                <p className="text-xs text-slate-500 max-w-xs leading-relaxed">
                  کد پیگیری برای شما پیامک خواهد شد. بسته‌بندی استریل و بهداشتی دنتی‌لند به زودی ارسال می‌شود.
                </p>
              </div>
            ) : items.length === 0 ? (
              <div className="py-20 text-center flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-sky-50 text-sky-400 flex items-center justify-center mb-4">
                  <ShoppingBag className="w-10 h-10" />
                </div>
                <h4 className="text-base font-bold text-slate-800 mb-2">
                  هنوز محصولی انتخاب نکرده‌اید
                </h4>
                <p className="text-xs text-slate-400 max-w-xs mb-6">
                  از میان محصولات استاندارد دندانپزشکی و بهداشت کودک دنتی‌لند، اقلام مورد نیازتان را انتخاب کنید.
                </p>
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-xl bg-[#0099e5] text-white text-xs font-bold hover:bg-[#0086cc] transition-colors"
                >
                  مشاهده فروشگاه
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={item.product.id}
                    className="flex items-center gap-3 p-3.5 bg-slate-50/70 hover:bg-slate-50 rounded-2xl border border-slate-100 transition-colors"
                  >
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-16 h-16 object-contain rounded-xl bg-white border border-slate-100 p-1 shrink-0"
                    />

                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs font-bold text-slate-800 truncate">
                        {item.product.name}
                      </h4>
                      <div className="text-[11px] text-slate-400 mt-0.5">
                        {item.product.priceFormatted} تومان
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, -1)}
                          className="w-6 h-6 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-100"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-bold text-slate-800 min-w-4 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, 1)}
                          className="w-6 h-6 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-100"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>

                    <div className="text-left flex flex-col items-end justify-between self-stretch">
                      <button
                        onClick={() => onRemoveItem(item.product.id)}
                        className="text-slate-300 hover:text-rose-500 transition-colors p-1"
                        title="حذف از سبد"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                      <span className="text-xs font-black text-slate-900">
                        {formatPrice(item.product.price * item.quantity)} تومان
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer Summary */}
          {items.length > 0 && !checkoutSuccess && (
            <div className="p-5 border-t border-slate-100 bg-slate-50/50 space-y-3">
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span>هزینه ارسال</span>
                <span className="text-emerald-600 font-bold">
                  {totalAmount > 500000 ? 'رایگان' : '۳۵,۰۰۰ تومان'}
                </span>
              </div>

              <div className="flex items-center justify-between text-sm font-black text-slate-900 pt-2 border-t border-slate-200/60">
                <span>مبلغ نهایی قابل پرداخت:</span>
                <span className="text-base text-[#0088cc]">
                  {formatPrice(totalAmount > 500000 ? totalAmount : totalAmount + 35000)} تومان
                </span>
              </div>

              <button
                onClick={handleCheckout}
                disabled={isCheckingOut}
                className="w-full py-3.5 rounded-2xl bg-[#0099e5] hover:bg-[#0086cc] text-white font-bold text-sm shadow-md shadow-sky-500/25 flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-50"
              >
                {isCheckingOut ? (
                  <span>در حال اتصال به درگاه امن...</span>
                ) : (
                  <>
                    <span>تکمیل و نهایی‌سازی سفارش</span>
                    <ArrowLeft className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
