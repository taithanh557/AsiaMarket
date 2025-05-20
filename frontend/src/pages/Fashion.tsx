import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Product } from '@/types';
import products from '@/data/products'; // adjust path if needed

const Fashion: React.FC = () => {
  const [fashionProducts, setFashionProducts] = useState<Product[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Filter products by fashion category
    const filtered = products.filter(p => p.category === 'fashion');
    setFashionProducts(filtered);
  }, []);

  const handleViewClick = (id: number) => {
    // Navigate to product detail page
    navigate(`/products/${id}`);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Header */}
      <Header />

      {/* Page Title & Products */}
      <main className="flex-grow container mx-auto px-4 py-6">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">Fashion</h1>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {fashionProducts.map(product => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow p-4 flex flex-col justify-between"
            >
              <div
                className="cursor-pointer"
                onClick={() => handleViewClick(product.id)}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-48 w-full object-contain mb-4"
                />
                <h2 className="text-lg font-medium text-gray-700 mb-2">
                  {product.name}
                </h2>
              </div>
              <div className="mt-auto flex items-center justify-between">
                <p className="text-xl font-bold text-orange-500">
                  ${product.price.toFixed(2)}
                </p>
                <button
                  onClick={() => handleViewClick(product.id)}
                  className="px-4 py-2 bg-orange-500 text-white rounded-2xl hover:bg-orange-600 transition"
                >
                  View
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Fashion;