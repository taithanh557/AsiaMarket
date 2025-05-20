import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const categories = [
  { key: 'electronics', label: 'Electronics' },
  { key: 'fashion', label: 'Fashion' },
  { key: 'home', label: 'Home & Living' },
  { key: 'beauty', label: 'Beauty' },
  { key: 'toys', label: 'Toys & Kids' },
  { key: 'sports', label: 'Sports' },
  { key: 'groceries', label: 'Groceries' },
  { key: 'books', label: 'Books' },
  { key: 'health', label: 'Health' },
  { key: 'automotive', label: 'Automotive' },
  { key: 'flash-sale', label: 'Flash Sale' }
];

const ExploreCategories: React.FC = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (key: string) => {
    // For flash-sale, path differs
    const path = key === 'flash-sale' ? '/flash-sale' : `/categories/${key}`;
    navigate(path);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Header */}
      <Header />

      {/* Page Title */}
      <main className="flex-grow container mx-auto px-4 py-6">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">Explore Categories</h1>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {categories.map(cat => (
            <div
              key={cat.key}
              className="bg-white rounded-2xl shadow p-6 flex items-center justify-center cursor-pointer hover:bg-gray-200 transition"
              onClick={() => handleCategoryClick(cat.key)}
            >
              <span className="text-lg font-medium text-gray-700">
                {cat.label}
              </span>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ExploreCategories;
