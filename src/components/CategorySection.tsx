
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";

const categories = [
  { id: 1, name: "Electronics", icon: "📱", slug: "electronics" },
  { id: 2, name: "Fashion", icon: "👕", slug: "fashion" },
  { id: 3, name: "Home & Living", icon: "🏠", slug: "home" },
  { id: 4, name: "Beauty", icon: "💄", slug: "beauty" },
  { id: 5, name: "Toys & Kids", icon: "🧸", slug: "toys" },
  { id: 6, name: "Sports", icon: "⚽", slug: "sports" },
  { id: 7, name: "Groceries", icon: "🛒", slug: "groceries" },
  { id: 8, name: "Health", icon: "💊", slug: "health" },
  { id: 9, name: "Books", icon: "📚", slug: "books" },
  { id: 10, name: "Automotive", icon: "🚗", slug: "automotive" }
];

const CategorySection = () => {
  return (
    <section className="py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">Categories</h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {categories.map(category => (
            <Link to={`/categories/${category.slug}`} key={category.id}>
              <Card className="hover:shadow-md transition-shadow duration-200 text-center">
                <CardContent className="p-6">
                  <div className="text-4xl mb-2">{category.icon}</div>
                  <h3 className="font-medium text-gray-800">{category.name}</h3>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
