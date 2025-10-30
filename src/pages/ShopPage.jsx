import React, { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { PRODUCTS } from '../data/products';

export const ShopPage = () => {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = category === 'all' || product.category === category;
      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  const categories = [
    { id: 'all', name: 'Todos' },
    { id: 'electronics', name: 'Electrónicos' },
    { id: 'accessories', name: 'Accesorios' },
  ];

  return (
    <div>
      {/* Hero */}
      <div className="bg-linear-gradient-to-r from-blue-600 to-purple-600 text-white py-16 px-4 mb-8 rounded-lg">
        <h1 className="text-4xl font-bold mb-4">Bienvenido a TechStore</h1>
        <p className="text-xl opacity-90">Los mejores productos de tecnología al mejor precio</p>
      </div>

      {/* Búsqueda y filtros */}
      <div className="mb-8 space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Buscar productos..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div className="flex gap-2 flex-wrap">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setCategory(cat.id)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                category === cat.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Grid de productos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-16">
          <p className="text-xl text-gray-500">No se encontraron productos</p>
        </div>
      )}
    </div>
  );
};