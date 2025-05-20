import React from 'react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const SellerCenter: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-white py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">Seller Center</h1>

          <div className="space-y-8 text-lg text-gray-700">
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Welcome to the Seller Center</h2>
              <p>
                The Seller Center is your hub to manage everything related to your store on AsiaMart. Whether you're adding products, managing orders, or analyzing your performance, everything you need is here.
              </p>
              <p>
                AsiaMart provides you with powerful tools to grow your business, reach more customers, and succeed in the e-commerce world. Let's get started!
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Manage Your Store</h2>
              <p>
                You can easily manage your store by accessing the following features:
              </p>
              <ul className="list-disc pl-6">
                <li>Add and edit products</li>
                <li>Set product pricing, discounts, and promotions</li>
                <li>View and manage orders</li>
                <li>Track sales performance and view reports</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Order Management</h2>
              <p>
                Stay on top of your orders with our easy-to-use dashboard. From receiving new orders to managing shipments, everything can be done from here.
              </p>
              <Button className="mt-4 bg-shopee text-white hover:bg-shopee-dark">
                Go to Orders Dashboard
              </Button>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Analytics & Performance</h2>
              <p>
                Track your store's performance with detailed analytics, including sales data, conversion rates, customer feedback, and more.
              </p>
              <Button className="mt-4 bg-shopee text-white hover:bg-shopee-dark">
                View Analytics
              </Button>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Customer Support</h2>
              <p>
                We are here to assist you. If you need help or have any questions, our support team is just a click away.
              </p>
              <Button className="mt-4 bg-gray-300 text-gray-800 hover:bg-gray-400">
                Contact Seller Support
              </Button>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Become a Top Seller</h2>
              <p>
                Explore tips and best practices to grow your sales and become a top-rated seller on AsiaMart. Learn how to optimize your product listings and marketing strategies.
              </p>
              <Button className="mt-4 bg-gray-200 text-gray-800 hover:bg-gray-300">
                Learn More
              </Button>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SellerCenter;
