import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Truck, Timer, MapPin, ShieldCheck } from 'lucide-react';

const ShippingAndDelivery: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-white py-10 px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">Shipping & Delivery</h1>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Shipping Time */}
            <div className="flex items-start space-x-4">
              <Timer className="w-8 h-8 text-shopee" />
              <div>
                <h2 className="text-xl font-semibold mb-1">Delivery Time</h2>
                <p className="text-gray-700">
                  Orders are usually processed within 24 hours. Standard delivery takes 2–5 business days depending on your location.
                </p>
              </div>
            </div>

            {/* Shipping Partners */}
            <div className="flex items-start space-x-4">
              <Truck className="w-8 h-8 text-shopee" />
              <div>
                <h2 className="text-xl font-semibold mb-1">Shipping Partners</h2>
                <p className="text-gray-700">
                  We work with trusted logistics providers such as GHN, J&T Express, GHTK, and Viettel Post to ensure fast and safe delivery.
                </p>
              </div>
            </div>

            {/* Tracking Orders */}
            <div className="flex items-start space-x-4">
              <MapPin className="w-8 h-8 text-shopee" />
              <div>
                <h2 className="text-xl font-semibold mb-1">Order Tracking</h2>
                <p className="text-gray-700">
                  After placing your order, you can track the shipping status directly in your order history via the “My Orders” page.
                </p>
              </div>
            </div>

            {/* Delivery Guarantee */}
            <div className="flex items-start space-x-4">
              <ShieldCheck className="w-8 h-8 text-shopee" />
              <div>
                <h2 className="text-xl font-semibold mb-1">Delivery Guarantee</h2>
                <p className="text-gray-700">
                  If your item is delayed more than 10 business days, you're eligible for a shipping refund or replacement. Contact support for help.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ShippingAndDelivery;
