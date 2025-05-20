import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import bannerImage from '@/image/BlackFriday2.jpg';  

const HeroBanner = () => {
  const navigate = useNavigate();
  
  return (
    <div
      className="relative h-64 md:h-96 overflow-hidden flex items-center justify-center"
      style={{
        backgroundImage: `url(${bannerImage})`,  // Dùng ảnh trong style
        backgroundSize: 'cover',  // Căn ảnh sao cho đầy đủ vùng chứa mà không bị méo
        backgroundPosition: 'center',  // Cân chỉnh ảnh ở giữa
        backgroundRepeat: 'no-repeat', // Đảm bảo ảnh không lặp lại
      }}
    >
      {/* Overlay để làm mờ hình và dễ đọc text */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="container mx-auto h-full flex items-center justify-center relative z-10 p-6 md:p-10 max-w-xl text-white">
        <div>
          <h1 className="text-2xl md:text-4xl font-bold mb-3">Flash Sale Today!</h1>
          <p className="mb-6 text-sm md:text-base">
            Get up to 70% off on premium products. Limited time offer. Don't miss out!
          </p>
          <div className="space-x-3">
            <Button 
              onClick={() => navigate('/flash-sale')}
              className="bg-white text-shopee hover:bg-gray-100"
            >
              Shop Now
            </Button>
            <Button 
              variant="outline"
              onClick={() => navigate('/categories')}
              className="text-white border-white hover:bg-white hover:text-shopee"
            >
              Explore Categories
            </Button>
          </div>
        </div>
      </div>

     
      <div className="absolute -right-10 top-1/2 transform -translate-y-1/2 hidden md:block z-0">
        <div className="bg-white/20 rounded-full h-64 w-64 blur-md"></div>
      </div>
      <div className="absolute right-20 bottom-0 hidden md:block z-0">
        <div className="bg-white/10 rounded-full h-32 w-32 blur-sm"></div>
      </div>
    </div>
  );
};

export default HeroBanner;
