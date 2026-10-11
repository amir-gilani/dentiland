import React, { useState } from 'react';
import { X, Star, Heart, ShoppingCart, ShieldCheck, Check } from 'lucide-react';
import { ProductItem } from '../data/dentilandData';

interface ProductDetailModalProps {
  product: ProductItem | null;
  onClose: () => void;
  isFavorite: boolean;
  onToggleWishlist: (productId: string) => void;
  onAddToCart: (product: ProductItem, quantity: number) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  isFavorite,
  onToggleWishlist,
  onAddToCart,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) return null;

  const handleAdd = () => {
    onAddToCart(product, quantity);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs transition-opacity"
      />

      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-100 p-6 sm:p-8 z-10 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 left-5 p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition-colors z-20"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          
          {/* Image Column */}
          <div className="relative bg-slate-50 rounded-2xl p-6 flex items-center justify-center border border-slate-100">
            <button
              onClick={() => onToggleWishlist(product.id)}
              className={`absolute top-3 right-3 p-2 rounded-full transition-all ${
                isFavorite
                  ? 'text-rose-500 bg-rose-50'
                  : 'text-slate-400 hover:text-rose-500 hover:bg-white'
              }`}
            >
              <Heart
                className={`w-5 h-5 ${isFavorite ? 'fill-rose-500' : ''}`}
              />
            </button>

            <img
              src={product.image}
              alt={product.name}
              className="max-h-64 object-contain filter drop-shadow-md"
            />
          </div>

          {/* Details Column */}
          <div className="flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-sky-600 bg-sky-50 px-2.5 py-1 rounded-full inline-block mb-2">
                {product.category}
              </span>

              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-2">
                {product.name}
              </h2>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-4 text-xs">
                <div className="flex items-center gap-1 text-amber-500 font-bold">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span>{product.ratingFormatted}</span>
                </div>
                <span className="text-slate-300">|</span>
                <span className="text-emerald-600 font-medium">ضمانت اصالت و سلامت فیزیکی</span>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                {product.description}
              </p>

              {/* Badges */}
              <div className="space-y-1.5 text-xs text-slate-500 mb-6 bg-slate-50 p-3 rounded-xl border border-slate-100">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-sky-500" />
                  <span>۱۰۰٪ بهداشتی و ضدحساسیت</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-sky-500" />
                  <span>طراحی ارگونومیک سازگار با دست کودک</span>
                </div>
              </div>
            </div>

            {/* Price and Cart */}
            <div>
              <div className="flex items-baseline justify-between mb-4">
                <span className="text-xs text-slate-400">قیمت نهایی:</span>
                <div className="text-xl font-black text-slate-900">
                  <span>{product.priceFormatted}</span>
                  <span className="text-xs font-normal text-slate-500 mr-1.5">تومان</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                {/* Quantity */}
                <div className="flex items-center border border-slate-200 rounded-xl px-2 py-1 bg-slate-50">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-7 h-7 flex items-center justify-center font-bold text-slate-600 hover:text-slate-900"
                  >
                    -
                  </button>
                  <span className="w-8 text-center text-xs font-bold">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-7 h-7 flex items-center justify-center font-bold text-slate-600 hover:text-slate-900"
                  >
                    +
                  </button>
                </div>

                {/* Add Button */}
                <button
                  onClick={handleAdd}
                  className={`flex-1 py-3 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    added
                      ? 'bg-emerald-500 text-white'
                      : 'bg-[#0099e5] hover:bg-[#0086cc] text-white shadow-md shadow-sky-500/20'
                  }`}
                >
                  {added ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>به سبد اضافه شد!</span>
                    </>
                  ) : (
                    <>
                      <ShoppingCart className="w-4 h-4" />
                      <span>افزودن به سبد خرید</span>
                    </>
                  )}
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
