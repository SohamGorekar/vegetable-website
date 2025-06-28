
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, ShoppingCart, Heart, Star, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useCart } from '@/contexts/CartContext';

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
  const { addToCart } = useCart();

  const allProducts = [
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

  useEffect(() => {
    if (searchQuery.trim()) {
      const filtered = allProducts.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(allProducts);
    }
  }, [searchQuery]);

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
      
      {/* Search Header */}
      <section className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">Search Results</h1>
            {initialQuery && (
              <p className="text-xl opacity-90">
                Showing results for "{initialQuery}"
              </p>
            )}
          </div>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search for vegetables..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-3 text-lg border-0 focus:ring-2 focus:ring-white/20"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        {/* Results Info */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              {filteredProducts.length} Products Found
            </h2>
            {searchQuery && (
              <p className="text-gray-600 mt-1">
                Search results for "{searchQuery}"
              </p>
            )}
          </div>
          
          <Button variant="outline" className="flex items-center space-x-2">
            <Filter className="w-4 h-4" />
            <span>Filters</span>
          </Button>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map(product => (
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
        ) : (
          <div className="text-center py-16">
            <div className="text-gray-400 mb-6">
              <Search className="w-24 h-24 mx-auto" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-600 mb-4">No products found</h3>
            <p className="text-gray-500 mb-8">
              We couldn't find any vegetables matching your search. Try different keywords.
            </p>
            <Button onClick={() => setSearchQuery('')} className="bg-green-600 hover:bg-green-700">
              Show All Products
            </Button>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default SearchPage;
