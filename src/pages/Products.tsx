
import React, { useState } from 'react';
import { Search, Filter, Grid, List, ShoppingCart, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Products = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 1000]);

  const products = [
    {
      id: 1,
      name: "Fresh Organic Spinach",
      price: 25,
      unit: "250g",
      originalPrice: 30,
      image: "https://images.unsplash.com/photo-1576045057995-568f588f8110?auto=format&fit=crop&w=400&q=80",
      category: "leafy",
      organic: true,
      inStock: true,
      rating: 4.5,
      description: "Fresh organic spinach, rich in iron and vitamins"
    },
    {
      id: 2,
      name: "Farm Fresh Tomatoes",
      price: 40,
      unit: "1kg",
      originalPrice: 45,
      image: "https://images.unsplash.com/photo-1546470427-e9821e4e3cb8?auto=format&fit=crop&w=400&q=80",
      category: "fruit-veg",
      organic: false,
      inStock: true,
      rating: 4.3,
      description: "Juicy red tomatoes perfect for cooking"
    },
    {
      id: 3,
      name: "Organic Carrots",
      price: 35,
      unit: "500g",
      originalPrice: 40,
      image: "https://images.unsplash.com/photo-1445282768818-728615cc4c17?auto=format&fit=crop&w=400&q=80",
      category: "root",
      organic: true,
      inStock: true,
      rating: 4.7,
      description: "Sweet organic carrots, great source of beta-carotene"
    },
    {
      id: 4,
      name: "Fresh Bell Peppers",
      price: 60,
      unit: "500g",
      originalPrice: 70,
      image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=400&q=80",
      category: "exotic",
      organic: false,
      inStock: false,
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
      category: "exotic",
      organic: true,
      inStock: true,
      rating: 4.4,
      description: "Fresh organic broccoli, packed with nutrients"
    },
    {
      id: 6,
      name: "Fresh Onions",
      price: 20,
      unit: "1kg",
      originalPrice: 25,
      image: "https://images.unsplash.com/photo-1508747703725-719777637510?auto=format&fit=crop&w=400&q=80",
      category: "root",
      organic: false,
      inStock: true,
      rating: 4.1,
      description: "Fresh red onions for daily cooking needs"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Categories', count: products.length },
    { id: 'leafy', name: 'Leafy Greens', count: 1 },
    { id: 'root', name: 'Root Vegetables', count: 2 },
    { id: 'fruit-veg', name: 'Fruit Vegetables', count: 1 },
    { id: 'exotic', name: 'Exotic Vegetables', count: 2 }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Fresh Vegetables Collection</h1>
            <p className="text-xl">Farm-fresh quality delivered to your doorstep</p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
              <h3 className="text-lg font-semibold mb-4">Filters</h3>
              
              {/* Search */}
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Search</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    type="text"
                    placeholder="Search vegetables..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              {/* Categories */}
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Categories</label>
                <div className="space-y-2">
                  {categories.map(category => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full text-left p-2 rounded-md transition-colors ${
                        selectedCategory === category.id
                          ? 'bg-green-100 text-green-700'
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      {category.name} ({category.count})
                    </button>
                  ))}
                </div>
              </div>

              {/* Organic Filter */}
              <div className="mb-6">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="text-sm">Organic Only</span>
                </label>
              </div>

              {/* In Stock Filter */}
              <div className="mb-6">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="text-sm">In Stock Only</span>
                </label>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Toolbar */}
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center space-x-4">
                <span className="text-gray-600">
                  Showing {filteredProducts.length} of {products.length} products
                </span>
              </div>
              
              <div className="flex items-center space-x-2">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                >
                  <Grid className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Products Grid */}
            <div className={viewMode === 'grid' 
              ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
              : 'space-y-4'
            }>
              {filteredProducts.map(product => (
                <Card key={product.id} className="group hover:shadow-lg transition-all duration-300">
                  <div className="relative overflow-hidden">
                    {!product.inStock && (
                      <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs z-10">
                        Out of Stock
                      </div>
                    )}
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
                      className="absolute top-2 right-10 bg-white/80 hover:bg-white"
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
                        <span className="text-yellow-400">★</span>
                        <span className="text-sm text-gray-600">{product.rating}</span>
                      </div>
                      
                      <Button
                        size="sm"
                        disabled={!product.inStock}
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

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <Search className="w-16 h-16 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-gray-600 mb-2">No products found</h3>
                <p className="text-gray-500">Try adjusting your search or filter criteria</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Products;
