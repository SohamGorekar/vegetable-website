
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShoppingCart, Heart, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useCart } from '@/contexts/CartContext';

const Categories = () => {
  const { category } = useParams<{ category?: string }>();
  const { addToCart } = useCart();

  const categoryData = {
    'leafy-greens': {
      title: 'Leafy Greens',
      description: 'Fresh, nutrient-rich leafy vegetables packed with vitamins and minerals',
      color: 'from-green-400 to-green-600',
      products: [
        {
          id: 1,
          name: "Fresh Organic Spinach",
          price: 25,
          unit: "250g",
          originalPrice: 30,
          image: "https://images.unsplash.com/photo-1576045057995-568f588f8110?auto=format&fit=crop&w=400&q=80",
          organic: true,
          inStock: true,
          rating: 4.5,
          description: "Fresh organic spinach, rich in iron and vitamins"
        },
        {
          id: 7,
          name: "Organic Lettuce",
          price: 30,
          unit: "200g",
          originalPrice: 35,
          image: "https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?auto=format&fit=crop&w=400&q=80",
          organic: true,
          inStock: true,
          rating: 4.3,
          description: "Crisp organic lettuce perfect for salads"
        }
      ]
    },
    'root-vegetables': {
      title: 'Root Vegetables',
      description: 'Earthy, wholesome root vegetables full of natural goodness',
      color: 'from-orange-400 to-orange-600',
      products: [
        {
          id: 3,
          name: "Organic Carrots",
          price: 35,
          unit: "500g",
          originalPrice: 40,
          image: "https://images.unsplash.com/photo-1445282768818-728615cc4c17?auto=format&fit=crop&w=400&q=80",
          organic: true,
          inStock: true,
          rating: 4.7,
          description: "Sweet organic carrots, great source of beta-carotene"
        },
        {
          id: 6,
          name: "Fresh Onions",
          price: 20,
          unit: "1kg",
          originalPrice: 25,
          image: "https://images.unsplash.com/photo-1508747703725-719777637510?auto=format&fit=crop&w=400&q=80",
          organic: false,
          inStock: true,
          rating: 4.1,
          description: "Fresh red onions for daily cooking needs"
        }
      ]
    },
    'exotic-vegetables': {
      title: 'Exotic Vegetables',
      description: 'Unique and colorful vegetables from around the world',
      color: 'from-purple-400 to-purple-600',
      products: [
        {
          id: 4,
          name: "Fresh Bell Peppers",
          price: 60,
          unit: "500g",
          originalPrice: 70,
          image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=400&q=80",
          organic: false,
          inStock: true,
          rating: 4.2,
          description: "Colorful bell peppers with crisp texture"
        },
        {
          id: 5,
          name: "Organic Broccoli",
          price: 80,
          unit: "400g",
          originalPrice: 90,
          image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?auto=format&fit=crop&w=400&q=80",
          organic: true,
          inStock: true,
          rating: 4.4,
          description: "Fresh organic broccoli, packed with nutrients"
        }
      ]
    },
    'tomatoes-peppers': {
      title: 'Tomatoes & Peppers',
      description: 'Juicy tomatoes and vibrant peppers for your kitchen',
      color: 'from-red-400 to-red-600',
      products: [
        {
          id: 2,
          name: "Farm Fresh Tomatoes",
          price: 40,
          unit: "1kg",
          originalPrice: 45,
          image: "https://images.unsplash.com/photo-1546470427-e9821e4e3cb8?auto=format&fit=crop&w=400&q=80",
          organic: false,
          inStock: true,
          rating: 4.3,
          description: "Juicy red tomatoes perfect for cooking"
        }
      ]
    }
  };

  const selectedCategory = category ? categoryData[category as keyof typeof categoryData] : null;
  const currentCategory = selectedCategory || categoryData['leafy-greens'];

  const handleAddToCart = (product: any) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      unit: product.unit,
      image: product.image,
      organic: product.organic
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Banner */}
      <section className={`bg-gradient-to-r ${currentCategory.color} text-white py-16`}>
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">{currentCategory.title}</h1>
            <p className="text-xl opacity-90">{currentCategory.description}</p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {currentCategory.products.map(product => (
            <Card key={product.id} className="group hover:shadow-lg transition-all duration-300">
              <div className="relative overflow-hidden">
                {product.organic && (
                  <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded text-xs z-10">
                    Organic
                  </div>
                )}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute top-2 left-2 bg-white/80 hover:bg-white"
                >
                  <Heart className="w-4 h-4" />
                </Button>
              </div>
              
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-3">{product.description}</p>
                
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <span className="text-xl font-bold text-green-600">₹{product.price}</span>
                    {product.originalPrice > product.price && (
                      <span className="text-sm text-gray-500 line-through">₹{product.originalPrice}</span>
                    )}
                    <span className="text-sm text-gray-500">/ {product.unit}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm text-gray-600">{product.rating}</span>
                  </div>
                  
                  <Button
                    size="sm"
                    onClick={() => handleAddToCart(product)}
                    className="bg-green-600 hover:bg-green-700"
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Categories;
