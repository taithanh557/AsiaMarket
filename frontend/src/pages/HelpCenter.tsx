import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Accordion, AccordionItem } from '@/components/ui/accordion';

const HelpCenter: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-white px-4 py-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Text Section */}
          <div>
            <h1 className="text-4xl font-extrabold text-shopee mb-6">
              Help Center
            </h1>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              We're here to help! Below are answers to some of the most frequently asked questions.
              If you need further assistance, feel free to contact our support team anytime.
            </p>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="shipping">
                <h3 className="text-lg font-medium">When will my order arrive?</h3>
                <p className="text-gray-600 mt-2">
                  Orders are typically processed within 1–2 business days and shipped via local carriers. Delivery usually takes 3–7 days.
                </p>
              </AccordionItem>

              <AccordionItem value="payment">
                <h3 className="text-lg font-medium">What payment methods are accepted?</h3>
                <p className="text-gray-600 mt-2">
                  We accept Visa, MasterCard, Momo, ZaloPay, and Cash on Delivery (COD) depending on your region.
                </p>
              </AccordionItem>

              <AccordionItem value="return">
                <h3 className="text-lg font-medium">How do I return an item?</h3>
                <p className="text-gray-600 mt-2">
                  You can request a return within 7 days of receiving the item. Go to your order history and click "Return Item".
                </p>
              </AccordionItem>

              <AccordionItem value="account">
                <h3 className="text-lg font-medium">How do I update my account information?</h3>
                <p className="text-gray-600 mt-2">
                  Go to your profile settings to update your name, email, or password at any time.
                </p>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Image Section */}
          <div className="rounded-xl overflow-hidden shadow-md">
            <img
              src="https://i.pinimg.com/736x/54/c8/77/54c87715239a0ecae5c76df51b22b6d1.jpg"
              alt="Help Center Illustration"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HelpCenter;
