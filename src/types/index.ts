
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  originalPrice: number;
  image: string;
  category: string;
  brand: string;
  stock: number;
  sold: number;
  reviews: number;
  rating: number;
  isNew?: boolean;
  isFeatured?: boolean;
  isFlashSale?: boolean;
  model?: string;
  weight?: string;
  dimensions?: string;
  quantity: number;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  icon: string;
}
