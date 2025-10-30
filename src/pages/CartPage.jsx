import React from 'react';
import { ShoppingCart, Plus, Minus, Trash2 } from 'lucide-react';
import { Link } from '../components/Router/Link';
import { useCart } from '../contexts/CartContext';
import { useRouter } from '../contexts/RouterContext';

export const CartPage = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();
  const { navigate } = useRouter();

  if (cart.length === 0) {
    return (
      <div className="text-center py-16">
        <ShoppingCart className="w-24 h-24 mx-auto text-gray-300 mb-4" />
        <h2 className="text-2xl font-bold mb-2">Tu carrito está vacío</h2>
        <p className="text-gray-600 mb-6">¡Agrega algunos productos para empezar!</p>
        <Link
          to="/"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Ir a la tienda
        </Link>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Mi Carrito</h1>
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {cart.map(item => (
            <div key={item.id} className="bg-white rounded-lg shadow-md p-4 flex items-center gap-4">
              <div 
                onClick={() => navigate(`/product/${item.id}`)}
                className="bg-linear-gradient-to-br from-blue-50 to-purple-50 w-24 h-24 rounded-lg flex items-center justify-center text-4xl cursor-pointer hover:scale-105 transition-transform"
              >
                {item.image}
              </div>
              <div className="flex-1">
                <h3 
                  onClick={() => navigate(`/product/${item.id}`)}
                  className="font-semibold text-lg cursor-pointer hover:text-blue-600"
                >
                  {item.name}
                </h3>
                <p className="text-gray-600">${item.price} c/u</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="p-1 rounded bg-gray-100 hover:bg-gray-200"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 text-center font-semibold">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="p-1 rounded bg-gray-100 hover:bg-gray-200"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <div className="text-right">
                <p className="font-bold text-lg">${item.price * item.quantity}</p>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700 mt-2"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
            <h2 className="text-xl font-bold mb-4">Resumen</h2>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${cartTotal}</span>
              </div>
              <div className="flex justify-between">
                <span>Envío</span>
                <span className="text-green-600">Gratis</span>
              </div>
              <div className="border-t pt-2 flex justify-between font-bold text-lg">
                <span>Total</span>
                <span className="text-blue-600">${cartTotal}</span>
              </div>
            </div>
            <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
              Proceder al pago
            </button>
            <Link
              to="/"
              className="block text-center mt-4 text-blue-600 hover:underline"
            >
              Seguir comprando
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};