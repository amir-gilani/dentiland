/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Categories } from './components/Categories';
import { BestSellers } from './components/BestSellers';
import { WhyDentiland } from './components/WhyDentiland';
import { Articles } from './components/Articles';
import { Reviews } from './components/Reviews';
import { Footer } from './components/Footer';
import { CartDrawer, CartItem } from './components/CartDrawer';
import { WishlistModal } from './components/WishlistModal';
import { ConsultationModal } from './components/ConsultationModal';
import { ProductDetailModal } from './components/ProductDetailModal';
import { ArticleModal } from './components/ArticleModal';
import { 
  POPULAR_PRODUCTS, 
  ProductItem, 
  CategoryItem, 
  ArticleItem,
  ARTICLES 
} from './data/dentilandData';
import { CheckCircle2, Heart } from 'lucide-react';

export default function App() {
  // Cart state
  const [cart, setCart] = useState<CartItem[]>([
    {
      product: POPULAR_PRODUCTS[2], // ست مسواک کودک
      quantity: 1,
    },
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Wishlist state
  const [wishlist, setWishlist] = useState<string[]>(['prod-1', 'prod-3']);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);

  // Consultation modal state
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  // Detail modals
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<ArticleItem | null>(null);

  // Toast feedback
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2500);
  };

  // Cart operations
  const handleAddToCart = (product: ProductItem, quantity = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
    showToast(`«${product.name}» به سبد خرید افزوده شد.`);
  };

  const handleUpdateQuantity = (productId: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  // Wishlist operations
  const handleToggleWishlist = (productId: string) => {
    setWishlist((prev) => {
      const isFav = prev.includes(productId);
      const product = POPULAR_PRODUCTS.find((p) => p.id === productId);
      if (isFav) {
        showToast(`از لیست علاقه‌مندی‌ها حذف شد.`);
        return prev.filter((id) => id !== productId);
      } else {
        showToast(product ? `«${product.name}» به علاقه‌مندی‌ها اضافه شد.` : 'به علاقه‌مندی‌ها اضافه شد.');
        return [...prev, productId];
      }
    });
  };

  const handleRemoveFromWishlist = (productId: string) => {
    setWishlist((prev) => prev.filter((id) => id !== productId));
  };

  // Handlers for interactions
  const handleExploreProducts = () => {
    const el = document.getElementById('products');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectCategory = (category: CategoryItem) => {
    // Find representative product or open detail
    const matched = POPULAR_PRODUCTS.find(
      (p) => p.category.includes(category.title) || category.title.includes(p.category)
    );
    if (matched) {
      setSelectedProduct(matched);
    } else {
      setSelectedProduct(POPULAR_PRODUCTS[0]);
    }
  };

  const handleViewAllArticles = () => {
    setSelectedArticle(ARTICLES[0]);
  };

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#F8FBFE] text-slate-800 flex flex-col font-sans">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-5 py-3 rounded-2xl shadow-xl flex items-center gap-3 text-xs sm:text-sm font-semibold animate-in slide-in-from-bottom-4 duration-200">
          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* 1. Header */}
      <Header
        cartCount={totalCartCount}
        wishlistCount={wishlist.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onOpenConsultation={() => setIsConsultationOpen(true)}
        onSearchSelect={(prod) => setSelectedProduct(prod)}
        allProducts={POPULAR_PRODUCTS}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        
        {/* 2. Hero Section */}
        <Hero
          onExploreProducts={handleExploreProducts}
          onOpenConsultation={() => setIsConsultationOpen(true)}
        />

        {/* 3. Categories (5 Cards) */}
        <Categories onSelectCategory={handleSelectCategory} />

        {/* 4. Best Sellers (پرفروش‌ترین محصولات Slider) */}
        <BestSellers
          products={POPULAR_PRODUCTS}
          wishlist={wishlist}
          cartItemIds={cart.map((c) => c.product.id)}
          onToggleWishlist={handleToggleWishlist}
          onAddToCart={(prod) => handleAddToCart(prod, 1)}
          onSelectProduct={(prod) => setSelectedProduct(prod)}
        />

        {/* 5. Why Dentiland? Banner (چرا دنتیلند؟) */}
        <WhyDentiland
          onOpenConsultation={() => setIsConsultationOpen(true)}
        />

        {/* 6. Blog / Educational Knowledge (دانستنی‌های دندانی) */}
        <Articles
          onSelectArticle={(art) => setSelectedArticle(art)}
          onViewAllArticles={handleViewAllArticles}
        />

        {/* 7. Customer Testimonials (لبخند رضایت شما) */}
        <Reviews />

      </main>

      {/* 8. Footer */}
      <Footer onOpenConsultation={() => setIsConsultationOpen(true)} />

      {/* Modals & Drawers */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveFromCart}
        onClearCart={handleClearCart}
      />

      <WishlistModal
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlistProductIds={wishlist}
        allProducts={POPULAR_PRODUCTS}
        onRemoveFromWishlist={handleRemoveFromWishlist}
        onAddToCart={(prod) => handleAddToCart(prod, 1)}
      />

      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />

      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        isFavorite={selectedProduct ? wishlist.includes(selectedProduct.id) : false}
        onToggleWishlist={handleToggleWishlist}
        onAddToCart={handleAddToCart}
      />

      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />

    </div>
  );
}
