
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-10 pb-6 mt-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><Link to="/help-center" className="text-gray-600 hover:text-shopee">Help Center</Link></li>
              <li><Link to="/how-to-buy" className="text-gray-600 hover:text-shopee">How to Buy</Link></li>
              <li><Link to="/shipping" className="text-gray-600 hover:text-shopee">Shipping & Delivery</Link></li>
              <li><Link to="/returns" className="text-gray-600 hover:text-shopee">Returns & Refunds</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-shopee">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">About AsiaMart</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-600 hover:text-shopee">About Us</Link></li>
              <li><Link to="/careers" className="text-gray-600 hover:text-shopee">Careers</Link></li>
              <li><Link to="/terms" className="text-gray-600 hover:text-shopee">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="text-gray-600 hover:text-shopee">Privacy Policy</Link></li>
              <li><Link to="/seller-center" className="text-gray-600 hover:text-shopee">Seller Center</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Payment</h3>
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-white rounded p-2 shadow-sm flex items-center justify-center">
                <span className="text-xs">Visa</span>
              </div>
              <div className="bg-white rounded p-2 shadow-sm flex items-center justify-center">
                <span className="text-xs">Mastercard</span>
              </div>
              <div className="bg-white rounded p-2 shadow-sm flex items-center justify-center">
                <span className="text-xs">PayPal</span>
              </div>
              <div className="bg-white rounded p-2 shadow-sm flex items-center justify-center">
                <span className="text-xs">Apple Pay</span>
              </div>
              <div className="bg-white rounded p-2 shadow-sm flex items-center justify-center">
                <span className="text-xs">Google Pay</span>
              </div>
              <div className="bg-white rounded p-2 shadow-sm flex items-center justify-center">
                <span className="text-xs">COD</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-shopee">Facebook</a></li>
              <li><a href="#" className="text-gray-600 hover:text-shopee">Instagram</a></li>
              <li><a href="#" className="text-gray-600 hover:text-shopee">Twitter</a></li>
              <li><a href="#" className="text-gray-600 hover:text-shopee">LinkedIn</a></li>
              <li><a href="#" className="text-gray-600 hover:text-shopee">YouTube</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-6">
          <p className="text-center text-gray-500 text-sm">
            © 2025 AsiaMart. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
