
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Truck, Leaf, Clock, ShieldCheck, Heart, Recycle } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Truck,
      title: "Free Same-Day Delivery",
      description: "Order before 2 PM and get your fresh vegetables delivered the same day within the city limits.",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: Leaf,
      title: "100% Organic Certified",
      description: "All our vegetables are certified organic, grown without harmful pesticides or chemicals.",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: Clock,
      title: "Farm to Table in 24hrs",
      description: "Harvested fresh from local farms and delivered to your table within 24 hours of picking.",
      color: "bg-orange-100 text-orange-600"
    },
    {
      icon: ShieldCheck,
      title: "Quality Guarantee",
      description: "Not satisfied with the quality? We offer a 100% money-back guarantee on all orders.",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: Heart,
      title: "Health First",
      description: "Rich in nutrients and vitamins, our vegetables are perfect for a healthy and balanced diet.",
      color: "bg-red-100 text-red-600"
    },
    {
      icon: Recycle,
      title: "Eco-Friendly Packaging",
      description: "We use 100% biodegradable packaging materials to protect the environment.",
      color: "bg-emerald-100 text-emerald-600"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Why Choose VeggieFresh?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're committed to bringing you the freshest, highest quality vegetables 
            while caring for your health and the environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                <CardContent className="p-6 text-center space-y-4">
                  <div className={`w-16 h-16 rounded-full ${feature.color} flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold">50K+</div>
              <div className="text-green-100">Happy Customers</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold">100+</div>
              <div className="text-green-100">Fresh Products</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold">25+</div>
              <div className="text-green-100">Partner Farms</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold">99%</div>
              <div className="text-green-100">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
