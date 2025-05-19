
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from '@/components/ui/button';
import { useCart } from '@/hooks/useCart';
import ProductCard from './ProductCard';
import { flashSaleProducts } from '@/data/products';

const FlashSaleSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 5,
    minutes: 30,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds -= 1;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes -= 1;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours -= 1;
            } else {
              hours = 5;
            }
          }
        }
        
        return { hours, minutes, seconds };
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <h2 className="text-2xl font-bold text-shopee">Flash Sale</h2>
            <Badge className="ml-3 bg-shopee animate-flash">HOT</Badge>
          </div>
          
          <div className="flex items-center space-x-2 text-sm">
            <span className="text-gray-600">Ends in:</span>
            <div className="flex items-center space-x-1">
              <span className="bg-gray-800 text-white px-2 py-1 rounded">
                {String(timeLeft.hours).padStart(2, '0')}
              </span>
              <span>:</span>
              <span className="bg-gray-800 text-white px-2 py-1 rounded">
                {String(timeLeft.minutes).padStart(2, '0')}
              </span>
              <span>:</span>
              <span className="bg-gray-800 text-white px-2 py-1 rounded">
                {String(timeLeft.seconds).padStart(2, '0')}
              </span>
            </div>
            
            <Link to="/flash-sale" className="text-shopee font-medium ml-4">
              See All
            </Link>
          </div>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {flashSaleProducts.slice(0, 6).map(product => (
            <ProductCard key={product.id} product={product} isFlashSale />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlashSaleSection;
