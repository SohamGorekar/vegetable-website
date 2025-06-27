
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Star, Heart } from 'lucide-react';

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Organic Tomatoes",
      price: 4.99,
      originalPrice: 6.99,
      unit: "per kg",
      image: "https://images.unsplash.com/photo-1546470427-e9821e4e3cb8?auto=format&fit=crop&w=400&q=80",
      rating: 4.8,
      reviews: 124,
      badge: "Bestseller",
      organic: true
    },
    {
      id: 2,
      name: "Fresh Spinach",
      price: 2.99,
      unit: "per bunch",
      image: "https://images.unsplash.com/photo-1576045057995-568f588f8110?auto=format&fit=crop&w=400&q=80",
      rating: 4.6,
      reviews: 89,
      badge: "Fresh Today",
      organic: true
    },
    {
      id: 3,
      name: "Bell Peppers Mix",
      price: 7.99,
      originalPrice: 9.99,
      unit: "per kg",
      image: "https://images.unsplash.com/photo-1525607551207-4d4ac34e3151?auto=format&fit=crop&w=400&q=80",
      rating: 4.7,
      reviews: 67,
      badge: "Sale",
      organic: false
    },
    {
      id: 4,
      name: "Organic Carrots",
      price: 3.49,
      unit: "per kg",
      image: "https://images.unsplash.com/photo-1445282768818-728615cc4c17?auto=format&fit=crop&w=400&q=80",
      rating: 4.9,
      reviews: 156,
      badge: "Top Rated",
      organic: true
    },
    {
      id: 5,
      name: "Fresh Broccoli",
      price: 5.99,
      unit: "per piece",
      image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=400&q=80",
      rating: 4.5,
      reviews: 91,
      organic: true
    },
    {
      id: 6,
      name: "Cucumber",
      price: 2.49,
      unit: "per kg",
      image: "https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?auto=format&fit=crop&w=400&q=80",
      rating: 4.4,
      reviews: 73,
      organic: false
    }
  ];

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case "Bestseller":
        return "bg-amber-500 hover:bg-amber-600";
      case "Fresh Today":
        return "bg-green-500 hover:bg-green-600";
      case "Sale":
        return "bg-red-500 hover:bg-red-600";
      case "Top Rated":
        return "bg-purple-500 hover:bg-purple-600";
      default:
        return "bg-blue-500 hover:bg-blue-600";
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Featured Fresh Vegetables
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Handpicked from the finest farms, delivered fresh to your doorstep. 
            Quality guaranteed with every purchase.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {products.map((product) => (
            <Card key={product.id} className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                  <Badge className={`${getBadgeColor(product.badge)} text-white border-0`}>
                    {product.badge}
                  </Badge>
                  {product.organic && (
                    <Badge className="bg-green-100 text-green-800 border-green-200">
                      Organic
                    </Badge>
                  )}
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute top-3 right-3 bg-white/80 hover:bg-white text-gray-600 hover:text-red-500 transition-colors"
                >
                  <Heart className="w-4 h-4" />
                </Button>
                {product.originalPrice && (
                  <div className="absolute bottom-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded">
                    Save ${(product.originalPrice - product.price).toFixed(2)}
                  </div>
                )}
              </div>
              
              <CardContent className="p-4 space-y-3">
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 group-hover:text-green-600 transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center space-x-2 mt-1">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium text-gray-700 ml-1">
                        {product.rating}
                      </span>
                    </div>
                    <span className="text-sm text-gray-500">
                      ({product.reviews} reviews)
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className="text-xl font-bold text-green-600">
                        ${product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">
                          ${product.originalPrice}
                        </span>
                      )}
                    </div>
                    <span className="text-sm text-gray-500">{product.unit}</span>
                  </div>
                  
                  <Button 
                    size="sm" 
                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 flex items-center space-x-2"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    <span>Add</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-3">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
