
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ShoppingCart } from "lucide-react";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useCart } from '@/hooks/useCart';
import { useToast } from '@/hooks/use-toast';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useCart();
  const { toast } = useToast();
  
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 50 ? 0 : 4.99;
  const total = subtotal + shipping;
  
  const handleCheckout = () => {
    toast({
      title: "Checkout",
      description: "Proceeding to checkout...",
    });
  };
  
  // Group items by id to combine duplicates and get quantities
  const groupedItems = cartItems.reduce((acc, item) => {
    const existingItem = acc.find(i => i.id === item.id);
    
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      acc.push({ ...item, quantity: 1 });
    }
    
    return acc;
  }, [] as Array<typeof cartItems[0] & { quantity: number }>);
  
  if (groupedItems.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <h1 className="text-2xl font-bold mb-8">Your Shopping Cart</h1>
          
          <Card className="text-center py-10">
            <CardContent>
              <div className="mb-4 text-gray-400">
                <ShoppingCart className="h-16 w-16 mx-auto" />
              </div>
              <h2 className="text-xl font-medium mb-2">Your cart is empty</h2>
              <p className="text-gray-500 mb-6">
                Looks like you haven't added any products to your cart yet.
              </p>
              <Button asChild>
                <Link to="/">Continue Shopping</Link>
              </Button>
            </CardContent>
          </Card>
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-8">Your Shopping Cart</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-6">
                <div className="flex justify-between mb-4 font-medium">
                  <span>Product</span>
                  <span>Total</span>
                </div>
                
                <Separator className="mb-4" />
                
                {groupedItems.map(item => (
                  <div key={item.id} className="py-4 border-b border-gray-100 last:border-0">
                    <div className="flex">
                      <div className="w-20 h-20 rounded overflow-hidden flex-shrink-0">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <div className="ml-4 flex-grow">
                        <div className="flex justify-between">
                          <Link to={`/products/${item.id}`} className="font-medium hover:text-shopee">
                            {item.name}
                          </Link>
                          <span className="font-medium">
                            ${(item.price * item.quantity).toFixed(2)}
                          </span>
                        </div>
                        
                        <div className="text-sm text-gray-500 mb-2">
                          ${item.price.toFixed(2)} each
                        </div>
                        
                        <div className="flex items-center mt-2">
                          <div className="flex items-center border rounded overflow-hidden">
                            <button 
                              className="px-2 py-1 bg-gray-100 hover:bg-gray-200"
                              onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                            >
                              -
                            </button>
                            <span className="px-3 py-1">{item.quantity}</span>
                            <button 
                              className="px-2 py-1 bg-gray-100 hover:bg-gray-200"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                              +
                            </button>
                          </div>
                          
                          <button 
                            className="ml-4 text-gray-500 hover:text-shopee text-sm"
                            onClick={() => removeFromCart(item.id)}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                
                <div className="mt-6 flex justify-between">
                  <Button variant="outline" asChild>
                    <Link to="/">Continue Shopping</Link>
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="text-red-500 border-red-200 hover:bg-red-50"
                    onClick={clearCart}
                  >
                    Clear Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Order Summary */}
          <div>
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                  </div>
                  
                  <Separator />
                  
                  <div className="flex justify-between font-bold">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
                
                <Button 
                  className="w-full bg-shopee hover:bg-shopee-dark"
                  onClick={handleCheckout}
                >
                  Proceed to Checkout
                </Button>
                
                <div className="mt-4 text-xs text-gray-500 text-center">
                  Taxes calculated at checkout
                </div>
              </CardContent>
            </Card>
            
            {/* Promotions */}
            <Card className="mt-4">
              <CardContent className="p-4">
                <h3 className="font-medium mb-2">Add Coupon Code</h3>
                <div className="flex">
                  <input 
                    type="text" 
                    className="flex-grow border rounded-l px-3 py-2 focus:outline-none"
                    placeholder="Enter coupon"
                  />
                  <Button className="rounded-l-none">Apply</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
