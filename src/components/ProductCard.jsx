import React from 'react';
import { ShoppingCart, Heart } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { useRouter } from '../contexts/RouterContext';

export const ProductCard = ({ product }) => {
  const { addToCart, favorites, toggleFavorite } = useCart();
  const { navigate } = useRouter();
  const isFavorite = favorites.includes(product.id);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
      <div 
        onClick={() => navigate(`/product/${product.id}`)}
        className="relative bg-linear-gradient-to-br from-blue-50 to-purple-50 h-48 flex items-center justify-center cursor-pointer hover:scale-105 transition-transform"
      >
        <span className="text-6xl">{product.image}</span>
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleFavorite(product.id);
          }}
          className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:scale-110 transition-transform"
        >
          <Heart className={`w-5 h-5 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-400'}`} />
        </button>
        {product.stock < 5 && (
          <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
            ¡Solo {product.stock}!
          </span>
        )}
      </div>
      <div className="p-4">
        <h3 
          onClick={() => navigate(`/product/${product.id}`)}
          className="font-semibold text-lg mb-1 cursor-pointer hover:text-blue-600"
        >
          {product.name}
        </h3>
        <p className="text-gray-600 text-sm mb-3">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-blue-600">${product.price}</span>
          <button
            onClick={() => addToCart(product)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
          >
            <ShoppingCart className="w-4 h-4" />
            Agregar
          </button>
        </div>
      </div>
    </div>
  );
};