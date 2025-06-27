
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Leaf, Shield, Truck } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-green-50 via-white to-emerald-50 overflow-hidden">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-green-600">
                <Leaf className="w-5 h-5" />
                <span className="text-sm font-medium uppercase tracking-wide">Farm Fresh Daily</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Fresh <span className="text-green-600">Vegetables</span> 
                <br />Delivered to Your Door
              </h1>
              <p className="text-lg text-gray-600 max-w-lg">
                Get the freshest, organic vegetables sourced directly from local farms. 
                Quality guaranteed, delivered fresh daily to your doorstep.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg">
                Shop Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-4 text-lg">
                Learn More
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Leaf className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">100% Organic</h3>
                <p className="text-sm text-gray-600">Chemical-free farming</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Quality Assured</h3>
                <p className="text-sm text-gray-600">Fresh guarantee</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Truck className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Fast Delivery</h3>
                <p className="text-sm text-gray-600">Same day delivery</p>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative animate-fade-in">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1610348725531-843dff563e2c?auto=format&fit=crop&w=800&q=80"
                alt="Fresh vegetables basket"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              {/* Floating elements */}
              <div className="absolute -top-4 -left-4 bg-white rounded-full p-4 shadow-lg animate-bounce">
                <Leaf className="w-8 h-8 text-green-500" />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-green-500 text-white rounded-full p-4 shadow-lg">
                <span className="text-sm font-bold">FRESH</span>
              </div>
            </div>
            
            {/* Background decorative elements */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-green-200 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-emerald-200 rounded-full opacity-30 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;
