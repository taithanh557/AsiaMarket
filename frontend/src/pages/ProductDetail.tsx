
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart } from "lucide-react";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { useCart } from '@/hooks/useCart';
import { getProductById, getRelatedProducts } from '@/data/products';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  
  const product = getProductById(Number(id));
  const relatedProducts = getRelatedProducts(Number(id));
  
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <Card className="p-8">
            <h1 className="text-xl font-bold mb-4">Product Not Found</h1>
            <p className="mb-4">The product you're looking for doesn't exist or has been removed.</p>
            <Button asChild>
              <Link to="/">Go back to homepage</Link>
            </Button>
          </Card>
        </main>
        <Footer />
      </div>
    );
  }
  
  const discountPercentage = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );
  
  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-6">
          {/* Breadcrumb */}
          <div className="text-sm text-gray-500 mb-6">
            <Link to="/" className="hover:text-shopee">Home</Link> &gt;{' '}
            <Link to={`/categories/${product.category}`} className="hover:text-shopee">
              {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
            </Link> &gt;{' '}
            <span className="text-gray-700">{product.name}</span>
          </div>
          
          {/* Product Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            {/* Product Images */}
            <div className="rounded-lg overflow-hidden border border-gray-200">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* Product Info */}
            <div>
              <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
              
              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  <span className="text-yellow-500">★★★★</span>
                  <span className="text-gray-300">★</span>
                  <span className="text-gray-500 ml-1">4.0</span>
                </div>
                <span className="mx-2 text-gray-300">|</span>
                <span className="text-gray-500">{product.reviews} Reviews</span>
                <span className="mx-2 text-gray-300">|</span>
                <span className="text-gray-500">{product.sold} Sold</span>
              </div>
              
              <div className="mb-6 bg-shopee-light p-4 rounded-lg">
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold text-shopee">
                    ${product.price.toFixed(2)}
                  </span>
                  
                  {discountPercentage > 0 && (
                    <>
                      <span className="text-gray-400 text-lg line-through ml-2">
                        ${product.originalPrice.toFixed(2)}
                      </span>
                      <Badge className="ml-3 bg-yellow-500">
                        {discountPercentage}% OFF
                      </Badge>
                    </>
                  )}
                </div>
              </div>
              
              {/* Quantity Selector */}
              <div className="mb-6">
                <h3 className="font-medium mb-2">Quantity</h3>
                <div className="flex items-center">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                    disabled={quantity <= 1}
                  >
                    -
                  </Button>
                  <span className="mx-4 w-8 text-center">{quantity}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(prev => prev + 1)}
                  >
                    +
                  </Button>
                  <span className="ml-4 text-gray-500">
                    {product.stock} available
                  </span>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex space-x-4">
                <Button
                  className="flex-1 bg-shopee hover:bg-shopee-dark"
                  onClick={handleAddToCart}
                >
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Add to Cart
                </Button>
                <Button
                  className="flex-1"
                  variant="outline"
                  asChild
                >
                  <Link to="/checkout">Buy Now</Link>
                </Button>
              </div>
              
              {/* Shipping info */}
              <div className="mt-6 border-t border-gray-200 pt-4">
                <div className="flex items-start mb-2">
                  <div className="w-24 text-gray-500">Shipping:</div>
                  <div>Free shipping on orders over $50</div>
                </div>
                <div className="flex items-start">
                  <div className="w-24 text-gray-500">Returns:</div>
                  <div>30-day return policy</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Product Tabs */}
          <Tabs defaultValue="description" className="mb-10">
            <TabsList className="mb-4">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            
            <TabsContent value="description" className="p-4 bg-white rounded-lg border border-gray-200">
              <div className="prose max-w-none">
                <h3 className="text-lg font-medium mb-2">Product Description</h3>
                <p>{product.description}</p>
              </div>
            </TabsContent>
            
            <TabsContent value="specifications" className="p-4 bg-white rounded-lg border border-gray-200">
              <div className="prose max-w-none">
                <h3 className="text-lg font-medium mb-2">Product Specifications</h3>
                <table className="w-full border-collapse">
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="py-2 font-medium">Brand</td>
                      <td className="py-2">{product.brand}</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-2 font-medium">Model</td>
                      <td className="py-2">{product.model || 'N/A'}</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-2 font-medium">Weight</td>
                      <td className="py-2">{product.weight || 'N/A'}</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-2 font-medium">Dimensions</td>
                      <td className="py-2">{product.dimensions || 'N/A'}</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-2 font-medium">SKU</td>
                      <td className="py-2">{product.id}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </TabsContent>
            
            <TabsContent value="reviews" className="p-4 bg-white rounded-lg border border-gray-200">
              <h3 className="text-lg font-medium mb-2">Customer Reviews</h3>
              <p>This product has {product.reviews} reviews with an average rating of 4.0 stars.</p>
              <Button className="mt-4" variant="outline">Load Reviews</Button>
            </TabsContent>
          </Tabs>
          
          {/* Related Products */}
          <div>
            <h2 className="text-xl font-bold mb-4">You May Also Like</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {relatedProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
