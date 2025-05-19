import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ShoppingCart, Search, User, Menu } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useCart } from '@/hooks/useCart';

import ChatBox from '@/components/ChatBox';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const { cartItems } = useCart();
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchTerm.trim()) {
      navigate(`/search?query=${searchTerm}`);
    }
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-orange-500 shadow-md">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-white">AsiaMart</span>
            </Link>

            {/* Search on desktop */}
            <div className="hidden md:flex flex-1 mx-8">
              <div className="relative w-full max-w-xl">
                <Input 
                  type="text" 
                  placeholder="Search for products..." 
                  className="w-full border-gray-300 focus:border-white"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="absolute right-0 top-0 text-white"
                  onClick={handleSearch}
                >
                  <Search className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Right section with icons */}
            <div className="flex items-center space-x-4">
              <Link to="/cart" className="relative">
                <ShoppingCart className="h-6 w-6 text-white" />
                {cartItems.length > 0 && (
                  <Badge className="absolute -top-2 -right-2 bg-white text-orange-500 font-bold">
                    {cartItems.length}
                  </Badge>
                )}
              </Link>
              <Link to="/login">
                <User className="h-6 w-6 text-white" />
              </Link>

              <Button 
                variant="ghost" 
                size="icon" 
                className="md:hidden text-white" 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>

          {/* Search on mobile */}
          <div className="mt-2 md:hidden">
            <div className="relative w-full">
              <Input 
                type="text" 
                placeholder="Search for products..." 
                className="w-full border-gray-300 focus:border-white"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Button 
                variant="ghost" 
                size="icon" 
                className="absolute right-0 top-0 text-white"
                onClick={handleSearch}
              >
                <Search className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-orange-500 shadow-lg mt-2 py-2 rounded-md">
              <nav className="flex flex-col space-y-2 text-white">
                <Link to="/" className="px-4 py-2 hover:bg-orange-600">Home</Link>
                <Link to="/categories" className="px-4 py-2 hover:bg-orange-600">Categories</Link>
                <Link to="/flash-sale" className="px-4 py-2 hover:bg-orange-600">Flash Sale</Link>
                <Link to="/top-products" className="px-4 py-2 hover:bg-orange-600">Top Products</Link>
                <Link to="/account" className="px-4 py-2 hover:bg-orange-600">My Account</Link>
              </nav>
            </div>
          )}
        </div>

        {/* Categories navbar */}
        <div className="bg-orange-600 hidden md:block">
          <div className="container mx-auto px-4">
            <nav className="flex overflow-x-auto space-x-6 py-2 text-sm text-white">
              <Link to="/categories/electronics" className="whitespace-nowrap hover:text-yellow-200">
                Electronics
              </Link>
              <Link to="/categories/fashion" className="whitespace-nowrap hover:text-yellow-200">
                Fashion
              </Link>
              <Link to="/categories/home" className="whitespace-nowrap hover:text-yellow-200">
                Home & Living
              </Link>
              <Link to="/categories/beauty" className="whitespace-nowrap hover:text-yellow-200">
                Beauty
              </Link>
              <Link to="/categories/toys" className="whitespace-nowrap hover:text-yellow-200">
                Toys & Kids
              </Link>
              <Link to="/categories/sports" className="whitespace-nowrap hover:text-yellow-200">
                Sports
              </Link>
              <Link to="/categories/groceries" className="whitespace-nowrap hover:text-yellow-200">
                Groceries
              </Link>
              <Link to="/flash-sale" className="whitespace-nowrap font-bold text-yellow-300">
                Flash Sale
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* ChatBox nổi ngoài màn hình */}
      <ChatBox />
    </>
  );
};

export default Header;
