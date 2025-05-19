import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ShoppingCart, CreditCard, PackageCheck, Truck } from 'lucide-react';

const HowToBuy: React.FC = () => {
  const steps = [
    {
      icon: <ShoppingCart className="w-8 h-8 text-shopee" />,
      title: '1. Browse & Select',
      description: 'Explore categories or use the search bar to find the products you want to buy.',
    },
    {
      icon: <CreditCard className="w-8 h-8 text-shopee" />,
      title: '2. Make Payment',
      description: 'Choose your preferred payment method: credit/debit card, e-wallet, or Cash on Delivery (COD).',
    },
    {
      icon: <Truck className="w-8 h-8 text-shopee" />,
      title: '3. Shipping',
      description: 'Once your order is confirmed, we’ll ship your products quickly and securely to your address.',
    },
    {
      icon: <PackageCheck className="w-8 h-8 text-shopee" />,
      title: '4. Receive & Review',
      description: 'Check your items upon delivery and leave a review to help other shoppers.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gray-50 px-4 py-10">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">How to Buy on AsiaMart</h1>
          <div className="space-y-10">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div>{step.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">{step.title}</h3>
                  <p className="text-gray-700">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HowToBuy;
