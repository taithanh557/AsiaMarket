import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const AboutPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-white px-4 py-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Text Section */}
          <div>
            <h1 className="text-4xl font-extrabold text-shopee mb-6">
              Welcome to AsiaMart
            </h1>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              AsiaMart is your trusted online destination for everything Asian. From premium groceries
              and trending fashion to electronics and household goods — we bring Asia to your doorstep.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Our mission is to deliver top-quality products, reliable service, and an exceptional
              shopping experience. Whether you're looking for everyday essentials or specialty items,
              AsiaMart makes it easy, secure, and enjoyable.
            </p>
            <Button
              onClick={() => navigate('/')}
              className="mt-6 bg-shopee text-white hover:bg-shopee-dark"
            >
              Back to Home
            </Button>
          </div>

          {/* Image Section */}
          <div className="rounded-xl overflow-hidden shadow-md">
            <img
              src="https://i.pinimg.com/736x/58/2a/7a/582a7a18a2992ca5f53f920e4b1f2bc4.jpg"
              alt="AsiaMart Overview"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
