import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { RefreshCcw, CreditCard, Package, Shield } from 'lucide-react';

const ReturnsAndRefunds: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-white py-10 px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">Returns & Refunds Policy</h1>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Return Process */}
            <div className="flex items-start space-x-4">
              <RefreshCcw className="w-8 h-8 text-shopee" />
              <div>
                <h2 className="text-xl font-semibold mb-1">How to Return an Item</h2>
                <p className="text-gray-700">
                  If you’re not satisfied with your purchase, you can return the product within 7 days from the delivery date. Simply log in to your account, go to your order history, and request a return. We’ll guide you through the process.
                </p>
              </div>
            </div>

            {/* Refund Process */}
            <div className="flex items-start space-x-4">
              <CreditCard className="w-8 h-8 text-shopee" />
              <div>
                <h2 className="text-xl font-semibold mb-1">Refunds</h2>
                <p className="text-gray-700">
                  Once your return is processed, the refund will be issued to your original payment method. It may take 5-7 business days for the refund to reflect in your account.
                </p>
              </div>
            </div>

            {/* Conditions */}
            <div className="flex items-start space-x-4">
              <Package className="w-8 h-8 text-shopee" />
              <div>
                <h2 className="text-xl font-semibold mb-1">Return Conditions</h2>
                <p className="text-gray-700">
                  Products must be in their original condition and packaging. Unused, unopened, and undamaged items are eligible for a return. Some items may not be eligible for return due to hygiene or safety reasons.
                </p>
              </div>
            </div>

            {/* Warranty & Support */}
            <div className="flex items-start space-x-4">
              <Shield className="w-8 h-8 text-shopee" />
              <div>
                <h2 className="text-xl font-semibold mb-1">Warranty & Customer Support</h2>
                <p className="text-gray-700">
                  If your product is defective, please contact our customer support team. We offer a 1-year warranty on most items. If you encounter issues, we’ll work to replace or fix it.
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

export default ReturnsAndRefunds;
