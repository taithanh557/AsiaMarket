
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const PromotionBanner = () => {
  return (
    <section className="py-4 md:py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative rounded-lg overflow-hidden h-40 md:h-48 bg-gradient-to-r from-blue-500 to-purple-600">
            <div className="absolute inset-0 p-6 flex flex-col justify-center">
              <h3 className="text-white text-xl font-bold mb-2">New User Bonus</h3>
              <p className="text-white text-sm mb-4">Get $10 off your first order</p>
              <Button size="sm" asChild className="w-max bg-white text-blue-500 hover:bg-gray-100 hover:text-blue-600">
                <Link to="/register">
                  Register Now
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="relative rounded-lg overflow-hidden h-40 md:h-48 bg-gradient-to-r from-pink-500 to-red-600">
            <div className="absolute inset-0 p-6 flex flex-col justify-center">
              <h3 className="text-white text-xl font-bold mb-2">Free Shipping</h3>
              <p className="text-white text-sm mb-4">On orders over $50</p>
              <Button size="sm" asChild className="w-max bg-white text-pink-500 hover:bg-gray-100 hover:text-pink-600">
                <Link to="/categories">
                  Shop Now
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromotionBanner;
