
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroBanner from '@/components/HeroBanner';
import FlashSaleSection from '@/components/FlashSaleSection';
import CategorySection from '@/components/CategorySection';
import PromotionBanner from '@/components/PromotionBanner';
import PopularProducts from '@/components/PopularProducts';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroBanner />
        <CategorySection />
        <FlashSaleSection />
        <PromotionBanner />
        <PopularProducts />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
