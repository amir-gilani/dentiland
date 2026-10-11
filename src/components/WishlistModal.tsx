import React from 'react';
import { X, Heart, Trash2, ShoppingCart } from 'lucide-react';
import { ProductItem } from '../data/dentilandData';

interface WishlistModalProps {
  isOpen: boolean;
  onClose: () => void;
  wishlistProductIds: string[];
  allProducts: ProductItem[];
  onRemoveFromWishlist: (productId: string) => void;
  onAddToCart: (product: ProductItem) => void;
}

export const WishlistModal: React.FC<WishlistModalProps> = ({
  isOpen,
  onClose,
  wishlistProductIds,
  allProducts,
  onRemoveFromWishlist,
  onAddToCart,
}) => {
  if (!isOpen) return null;

  const favoriteProducts = allProducts.filter((p) =>
    wishlistProductIds.includes(p.id)
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs transition-opacity"
      />

      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-100 p-6 z-10 animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-5">
          <div className="flex items-center gap-2 text-rose-500">
            <Heart className="w-5 h-5 fill-rose-500" />
            <h3 className="text-base font-black text-slate-900">
              لیست علاقه‌مندی‌ها ({favoriteProducts.length})
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items List */}
        <div className="max-h-96 overflow-y-auto space-y-3 pr-1">
          {favoriteProducts.length === 0 ? (
            <div className="py-12 text-center text-slate-400">
              <Heart className="w-12 h-12 mx-auto mb-3 text-slate-200" />
              <p className="text-sm font-medium">هیچ محصولی در لیست علاقه‌مندی‌های شما وجود ندارد.</p>
            </div>
          ) : (
            favoriteProducts.map((prod) => (
              <div
                key={prod.id}
                className="flex items-center justify-between gap-3 p-3 bg-slate-50 rounded-2xl border border-slate-100"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="w-14 h-14 object-contain rounded-xl bg-white border border-slate-100 p-1 shrink-0"
                  />
                  <div className="min-w-0">
                    <h4 className="text-xs font-bold text-slate-900 truncate">
                      {prod.name}
                    </h4>
                    <span className="text-xs font-semibold text-sky-600">
                      {prod.priceFormatted} تومان
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => {
                      onAddToCart(prod);
                      onRemoveFromWishlist(prod.id);
                    }}
                    className="p-2 bg-[#0099e5] text-white rounded-xl hover:bg-[#0086cc] transition-colors flex items-center gap-1 text-xs font-bold"
                    title="انتقال به سبد خرید"
                  >
                    <ShoppingCart className="w-3.5 h-3.5" />
                    <span>خرید</span>
                  </button>
                  <button
                    onClick={() => onRemoveFromWishlist(prod.id)}
                    className="p-2 text-slate-400 hover:text-rose-500 rounded-xl hover:bg-white transition-colors"
                    title="حذف"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
