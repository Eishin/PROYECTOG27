import React, { useState } from 'react';
import { ShoppingCart, Home, Menu, X } from 'lucide-react';
import { Link } from './Router/Link';
import { useCart } from '../contexts/CartContext';
import { useRouter } from '../contexts/RouterContext';

export const Navigation = () => {
  const { cartCount } = useCart();
  const { currentPath } = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <Link
              to="/"
              className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors"
            >
              TechStore
            </Link>
            <div className="hidden md:flex gap-4">
              <Link
                to="/"
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                  currentPath === '/' ? 'bg-blue-100 text-blue-600' : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Home className="w-5 h-5" />
                Tienda
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link
              to="/cart"
              className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ShoppingCart className="w-6 h-6 text-gray-700" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </Link>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link
              to="/"
              className="block w-full text-left px-4 py-2 hover:bg-gray-100 rounded-lg"
            >
              Tienda
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};