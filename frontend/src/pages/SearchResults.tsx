import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Product } from '@/types';
import products from '@/data/products'; // adjust path if needed

// Custom hook to parse query params
export const useQuery = (): URLSearchParams => {
  return new URLSearchParams(useLocation().search);
};

const SearchResults: React.FC = () => {
  const query = useQuery();
  const term = query.get('query')?.toLowerCase() || '';
  const [results, setResults] = useState<Product[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (term) {
      const filtered = products.filter(p =>
        p.name.toLowerCase().includes(term) ||
        p.description.toLowerCase().includes(term)
      );
      setResults(filtered);
    } else {
      setResults([]);
    }
  }, [term]);

  const handleViewClick = (id: number) => {
    navigate(`/products/${id}`);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />

      <main className="flex-grow container mx-auto px-4 py-6">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">
          Search results for "{term}"
        </h1>

        {!term && <p className="text-gray-600">Please enter a search term.</p>}
        {term && results.length === 0 && (
          <p className="text-gray-600">No products found.</p>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {results.map(product => (
            <div key={product.id} className="bg-white rounded-2xl shadow p-4 flex flex-col justify-between">
              <Link to={`/products/${product.id}`}>                
                <img src={product.image} alt={product.name} className="h-48 w-full object-contain mb-4" />
                <h2 className="text-lg font-medium text-gray-700 mb-2">{product.name}</h2>
              </Link>
              <div className="mt-auto flex items-center justify-between">
                <p className="text-xl font-bold text-orange-500">${product.price.toFixed(2)}</p>
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

      <Footer />
    </div>
  );
};

export default SearchResults;
