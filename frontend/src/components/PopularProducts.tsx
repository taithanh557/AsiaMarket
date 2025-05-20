
import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import { popularProducts } from '@/data/products';

const PopularProducts = () => {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Popular Products</h2>
          <Link to="/top-products" className="text-shopee font-medium">
            See All
          </Link>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {popularProducts.slice(0, 10).map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
