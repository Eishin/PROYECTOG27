import React, { useState } from 'react';
import { Heart, Plus, Minus, ShoppingCart, ArrowLeft } from 'lucide-react';
import { Link } from '../components/Router/Link';
import { useRouter } from '../contexts/RouterContext';
import { useCart } from '../contexts/CartContext';
import { PRODUCTS } from '../data/products';

export const ProductDetailPage = () => {
  const { currentPath, navigate } = useRouter();
  const { addToCart, favorites, toggleFavorite } = useCart();
  const [quantity, setQuantity] = useState(1);
  
  const productId = parseInt(currentPath.split('/').pop());
  const product = PRODUCTS.find(p => p.id === productId);
  
  if (!product) {
    return (
      <div className="text-center py-16">
        <h2 className="text-2xl font-bold mb-4">Producto no encontrado</h2>
        <Link to="/" className="text-blue-600 hover:underline">
          Volver a la tienda
        </Link>
      </div>
    );
  }

  const isFavorite = favorites.includes(product.id);

  return (
    <div>
      <button
        onClick={() => navigate('/')}
        className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6"
      >
        <ArrowLeft className="w-5 h-5" />
        Volver a la tienda
      </button>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="grid md:grid-cols-2 gap-8 p-8">
          {/* Imagen */}
          <div className="bg-linear-gradient-to-br from-blue-50 to-purple-50 rounded-lg flex items-center justify-center h-96">
            <span className="text-9xl">{product.image}</span>
          </div>

          {/* Información */}
          <div>
            <div className="flex items-start justify-between mb-4">
              <div>
                <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
                <p className="text-gray-600 mb-4">{product.description}</p>
              </div>
              <button
                onClick={() => toggleFavorite(product.id)}
                className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
              >
                <Heart className={`w-6 h-6 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-400'}`} />
              </button>
            </div>

            <div className="mb-6">
              <span className="text-4xl font-bold text-blue-600">${product.price}</span>
            </div>

            {/* Especificaciones */}
            <div className="mb-6">
              <h3 className="font-semibold text-lg mb-3">Especificaciones:</h3>
              <ul className="space-y-2">
                {product.specs.map((spec, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-700">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    {spec}
                  </li>
                ))}
              </ul>
            </div>

            {/* Stock */}
            <div className="mb-6">
              <p className="text-sm text-gray-600">
                Stock disponible: <span className="font-semibold">{product.stock} unidades</span>
              </p>
            </div>

            {/* Cantidad y agregar al carrito */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-2 border border-gray-300 rounded-lg p-2">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-1 hover:bg-gray-100 rounded"
                >
                  <Minus className="w-5 h-5" />
                </button>
                <span className="w-12 text-center font-semibold">{quantity}</span>
                <button
                  onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                  className="p-1 hover:bg-gray-100 rounded"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
              <button
                onClick={() => {
                  addToCart(product, quantity);
                  navigate('/cart');
                }}
                className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 font-semibold"
              >
                <ShoppingCart className="w-5 h-5" />
                Agregar al carrito
              </button>
            </div>

            {/* Categoría */}
            <div className="pt-6 border-t">
              <span className="text-sm text-gray-600">
                Categoría: <span className="font-semibold capitalize">{product.category}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};