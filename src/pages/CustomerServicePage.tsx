import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Accordion, AccordionItem } from '@/components/ui/accordion';
import FloatingHelp from './FloatingHelp';

const CustomerServicePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow px-4 py-10">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold text-shopee mb-6">Customer Service</h1>
          <p className="text-gray-700 mb-8 text-lg">
            Need help? Our Customer Service team is here to assist you with your orders, returns, and other inquiries.
          </p>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="order">
              <h2 className="font-semibold text-lg">How can I check my order status?</h2>
              <p className="mt-2 text-gray-600">
                You can view your order status by logging into your account and going to the "Orders" section. You will find tracking information and updates there.
              </p>
            </AccordionItem>

            <AccordionItem value="return">
              <h2 className="font-semibold text-lg">How do I return a product?</h2>
              <p className="mt-2 text-gray-600">
                If you’re not satisfied with your purchase, you can initiate a return from your order page. Make sure the product is in original condition and packaging.
              </p>
            </AccordionItem>

            <AccordionItem value="refund">
              <h2 className="font-semibold text-lg">When will I receive my refund?</h2>
              <p className="mt-2 text-gray-600">
                Refunds are typically processed within 5–7 business days after the returned item has been received and inspected.
              </p>
            </AccordionItem>

            <AccordionItem value="account">
              <h2 className="font-semibold text-lg">How do I update my account information?</h2>
              <p className="mt-2 text-gray-600">
                Log into your account, navigate to “Profile,” and you can update your name, email, address, and other information.
              </p>
            </AccordionItem>

            <AccordionItem value="support">
              <h2 className="font-semibold text-lg">Need more help?</h2>
              <p className="mt-2 text-gray-600">
                Contact our support team via email at <a href="mailto:ntai3091@gmail.com" className="text-shopee underline">ntai3091@gmail.com</a> or call our hotline: <strong>+84 931 935 503</strong>.
              </p>
            </AccordionItem>
          </Accordion>
        </div>
      </main>
      <Footer />
      <FloatingHelp />
    </div>
  );
};

export default CustomerServicePage;
