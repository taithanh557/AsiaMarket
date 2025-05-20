
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useCart } from '@/hooks/useCart';
import { Product } from '@/types';

type ProductCardProps = {
  product: Product;
  isFlashSale?: boolean;
};

const ProductCard = ({ product, isFlashSale = false }: ProductCardProps) => {
  const { addToCart } = useCart();
  
  const discountPercentage = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );
  
  return (
    <Card className="product-card overflow-hidden h-full flex flex-col">
      <Link to={`/products/${product.id}`} className="block relative">
        {discountPercentage > 0 && (
          <Badge className="absolute top-2 right-2 bg-yellow-500">
            -{discountPercentage}%
          </Badge>
        )}
        
        {isFlashSale && (
          <Badge className="absolute top-2 left-2 bg-shopee animate-flash">
            Flash Sale
          </Badge>
        )}
        
        <div className="h-40 overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover"
          />
        </div>
      </Link>
      
      <CardContent className="flex flex-col flex-grow p-3">
        <Link to={`/products/${product.id}`} className="block">
          <h3 className="text-sm font-medium line-clamp-2 min-h-10">
            {product.name}
          </h3>
        </Link>
        
        <div className="mt-auto pt-2">
          <div className="flex items-baseline justify-between">
            <div>
              <span className="text-shopee font-bold">
                ${product.price.toFixed(2)}
              </span>
              {discountPercentage > 0 && (
                <span className="text-gray-400 text-xs line-through ml-1">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>
            <div className="text-xs text-gray-500">
              {product.sold} sold
            </div>
          </div>
          
          <div className="mt-2">
            <Button 
              size="sm"
              variant="outline"
              className="w-full text-xs border-shopee text-shopee hover:bg-shopee hover:text-white"
              onClick={() => addToCart(product)}
            >
              <ShoppingCart className="h-3 w-3 mr-1" />
              Add to Cart
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
