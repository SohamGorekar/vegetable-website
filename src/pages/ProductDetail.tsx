
import React, { useState } from 'react';
import { ArrowLeft, Heart, ShoppingCart, Star, Truck, Shield, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const product = {
    id: 1,
    name: "Fresh Organic Spinach",
    price: 25,
    originalPrice: 30,
    unit: "250g",
    rating: 4.5,
    reviews: 128,
    inStock: true,
    organic: true,
    images: [
      "https://images.unsplash.com/photo-1576045057995-568f588f8110?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1515543237350-b3eea1ec5082?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=600&q=80"
    ],
    description: "Fresh organic spinach leaves, carefully selected from certified organic farms. Rich in iron, vitamins A, C, and K. Perfect for salads, smoothies, and cooking.",
    origin: "Local Organic Farm, Maharashtra",
    benefits: [
      "Rich in Iron and Folate",
      "High in Vitamins A, C, and K",
      "Good source of Antioxidants",
      "Supports Eye Health",
      "Boosts Immune System"
    ],
    nutritionalInfo: {
      calories: "23 per 100g",
      protein: "2.9g",
      carbs: "3.6g",
      fiber: "2.2g",
      iron: "2.7mg"
    },
    storage: "Store in refrigerator at 2-4°C. Best consumed within 3-4 days of delivery."
  };

  const relatedProducts = [
    {
      id: 2,
      name: "Organic Kale",
      price: 35,
      originalPrice: 40,
      image: "https://images.unsplash.com/photo-1515543237350-b3eea1ec5082?auto=format&fit=crop&w=300&q=80",
      rating: 4.3
    },
    {
      id: 3,
      name: "Fresh Lettuce",
      price: 30,
      originalPrice: 35,
      image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=300&q=80",
      rating: 4.1
    },
    {
      id: 4,
      name: "Organic Arugula",
      price: 45,
      originalPrice: 50,
      image: "https://images.unsplash.com/photo-1576045057995-568f588f8110?auto=format&fit=crop&w=300&q=80",
      rating: 4.6
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
          <Link to="/" className="hover:text-green-600">Home</Link>
          <span>/</span>
          <Link to="/products" className="hover:text-green-600">Products</Link>
          <span>/</span>
          <span className="text-gray-900">{product.name}</span>
        </div>

        {/* Back Button */}
        <Button variant="ghost" className="mb-6" asChild>
          <Link to="/products">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Products
          </Link>
        </Button>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-96 object-cover"
              />
              {product.organic && (
                <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Organic Certified
                </div>
              )}
            </div>
            
            <div className="flex space-x-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 ${
                    selectedImage === index ? 'border-green-500' : 'border-gray-200'
                  }`}
                >
                  <img src={image} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
              
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating)
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                  <span className="text-sm text-gray-600 ml-2">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>
              </div>

              <div className="flex items-center space-x-4 mb-6">
                <span className="text-3xl font-bold text-green-600">₹{product.price}</span>
                {product.originalPrice > product.price && (
                  <span className="text-xl text-gray-500 line-through">₹{product.originalPrice}</span>
                )}
                <span className="text-gray-600">/ {product.unit}</span>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">{product.description}</p>

              {/* Origin */}
              <div className="bg-green-50 p-4 rounded-lg mb-6">
                <h3 className="font-semibold text-green-800 mb-2">Farm Origin</h3>
                <p className="text-green-700">{product.origin}</p>
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center space-x-4">
              <label className="font-medium">Quantity:</label>
              <div className="flex items-center border rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-2 hover:bg-gray-100"
                >
                  -
                </button>
                <span className="px-4 py-2 border-x">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-2 hover:bg-gray-100"
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4">
              <Button size="lg" className="flex-1 bg-green-600 hover:bg-green-700">
                <ShoppingCart className="w-5 h-5 mr-2" />
                Add to Cart
              </Button>
              <Button variant="outline" size="lg">
                <Heart className="w-5 h-5" />
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4 py-6 border-t">
              <div className="text-center">
                <Truck className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <p className="text-sm font-medium">Same Day Delivery</p>
              </div>
              <div className="text-center">
                <Shield className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <p className="text-sm font-medium">Quality Guaranteed</p>
              </div>
              <div className="text-center">
                <Leaf className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <p className="text-sm font-medium">100% Organic</p>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8">
              <button className="border-b-2 border-green-500 py-4 px-1 text-green-600 font-medium">
                Health Benefits
              </button>
              <button className="py-4 px-1 text-gray-500 hover:text-gray-700">
                Nutritional Info
              </button>
              <button className="py-4 px-1 text-gray-500 hover:text-gray-700">
                Storage Tips
              </button>
            </nav>
          </div>

          <div className="py-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Health Benefits</h3>
                <ul className="space-y-2">
                  {product.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Nutritional Information</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Calories:</span>
                    <span className="font-medium">{product.nutritionalInfo.calories}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Protein:</span>
                    <span className="font-medium">{product.nutritionalInfo.protein}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Carbohydrates:</span>
                    <span className="font-medium">{product.nutritionalInfo.carbs}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Fiber:</span>
                    <span className="font-medium">{product.nutritionalInfo.fiber}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Iron:</span>
                    <span className="font-medium">{product.nutritionalInfo.iron}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8">Related Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProducts.map(relatedProduct => (
              <Card key={relatedProduct.id} className="group hover:shadow-lg transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img
                    src={relatedProduct.image}
                    alt={relatedProduct.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">{relatedProduct.name}</h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-lg font-bold text-green-600">₹{relatedProduct.price}</span>
                      <span className="text-sm text-gray-500 line-through">₹{relatedProduct.originalPrice}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm">{relatedProduct.rating}</span>
                    </div>
                  </div>
                  <Button className="w-full mt-3 bg-green-600 hover:bg-green-700" size="sm">
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;
