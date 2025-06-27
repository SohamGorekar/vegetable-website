
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

const Categories = () => {
  const categories = [
    {
      id: 1,
      name: "Leafy Greens",
      count: 25,
      image: "https://images.unsplash.com/photo-1576045057995-568f588f8110?auto=format&fit=crop&w=300&q=80",
      color: "from-green-400 to-green-600"
    },
    {
      id: 2,
      name: "Root Vegetables",
      count: 18,
      image: "https://images.unsplash.com/photo-1445282768818-728615cc4c17?auto=format&fit=crop&w=300&q=80",
      color: "from-orange-400 to-orange-600"
    },
    {
      id: 3,
      name: "Exotic Vegetables",
      count: 12,
      image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=300&q=80",
      color: "from-purple-400 to-purple-600"
    },
    {
      id: 4,
      name: "Tomatoes & Peppers",
      count: 22,
      image: "https://images.unsplash.com/photo-1546470427-e9821e4e3cb8?auto=format&fit=crop&w=300&q=80",
      color: "from-red-400 to-red-600"
    },
    {
      id: 5,
      name: "Seasonal Specials",
      count: 15,
      image: "https://images.unsplash.com/photo-1610348725531-843dff563e2c?auto=format&fit=crop&w=300&q=80",
      color: "from-yellow-400 to-yellow-600"
    },
    {
      id: 6,
      name: "Organic Selection",
      count: 30,
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=300&q=80",
      color: "from-emerald-400 to-emerald-600"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Shop by Category
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our wide range of fresh vegetables organized by categories 
            to find exactly what you need for your healthy lifestyle.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Card key={category.id} className="group cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-70 group-hover:opacity-60 transition-opacity`}></div>
                
                <CardContent className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">
                      {category.name}
                    </h3>
                    <p className="text-sm opacity-90">
                      {category.count} products available
                    </p>
                  </div>
                  
                  <div className="flex items-center mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <span className="text-sm font-medium mr-2">Shop Now</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 text-green-600">
            <span className="text-lg font-medium">Can't find what you're looking for?</span>
            <button className="underline hover:no-underline transition-all">
              Contact us for special orders
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
