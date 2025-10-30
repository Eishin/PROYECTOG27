import React from 'react';
import { Router } from './contexts/RouterContext';
import { CartProvider } from './contexts/CartContext';
import { Route } from './components/Router/Route';
import { Navigation } from './components/Navigation';
import { ShopPage } from './pages/ShopPage';
import { CartPage } from './pages/CartPage';
import { ProductDetailPage } from './pages/ProductDetailPage';


const App = () => {
  return (
    <Router>
      <CartProvider>
        <div className="min-h-screen bg-gray-50">
          <Navigation />
          <main className="container mx-auto px-4 py-8 max-w-7xl">
            <Route path="/" element={<ShopPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/product/:id" element={<ProductDetailPage />} />
          </main>
        </div>
      </CartProvider>
    </Router>
  );
};

export default App;