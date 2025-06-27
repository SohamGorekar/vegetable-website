
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Gift, CheckCircle } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      toast({
        title: "Successfully subscribed!",
        description: "Welcome to VeggieFresh! Check your email for a welcome discount.",
      });
      setEmail('');
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-green-600 via-green-700 to-emerald-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-white rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <Card className="border-0 shadow-2xl bg-white/95 backdrop-blur-sm">
            <CardContent className="p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                {/* Left Content */}
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
                        Stay Fresh with Us!
                      </h3>
                      <p className="text-green-600 font-medium">Get exclusive deals & fresh updates</p>
                    </div>
                  </div>

                  <p className="text-gray-600 text-lg leading-relaxed">
                    Subscribe to our newsletter and be the first to know about seasonal offers, 
                    new arrivals, and healthy recipes. Plus, get a 15% discount on your first order!
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">Weekly fresh produce updates</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">Exclusive member-only discounts</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">Healthy recipes & cooking tips</span>
                    </div>
                  </div>
                </div>

                {/* Right Content - Form */}
                <div className="space-y-6">
                  {!isSubmitted ? (
                    <>
                      <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border border-green-100">
                        <div className="flex items-center space-x-3 mb-4">
                          <Gift className="w-6 h-6 text-green-600" />
                          <span className="font-semibold text-green-800">Welcome Offer</span>
                        </div>
                        <div className="text-2xl font-bold text-green-600 mb-2">15% OFF</div>
                        <p className="text-sm text-green-700">On your first order when you subscribe</p>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                          <Input
                            type="email"
                            placeholder="Enter your email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="pl-12 py-4 text-lg border-gray-200 focus:border-green-400 focus:ring-green-400"
                            required
                          />
                        </div>
                        
                        <Button 
                          type="submit" 
                          size="lg" 
                          className="w-full bg-green-600 hover:bg-green-700 text-white py-4 text-lg font-semibold"
                        >
                          Subscribe & Get 15% OFF
                        </Button>
                      </form>

                      <p className="text-xs text-gray-500 text-center">
                        By subscribing, you agree to our Privacy Policy and Terms of Service. 
                        Unsubscribe at any time.
                      </p>
                    </>
                  ) : (
                    <div className="text-center space-y-4 py-8">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                        <CheckCircle className="w-8 h-8 text-green-600" />
                      </div>
                      <h4 className="text-xl font-semibold text-gray-900">
                        Welcome to VeggieFresh!
                      </h4>
                      <p className="text-gray-600">
                        Check your email for your welcome discount code and start shopping fresh!
                      </p>
                      <Button 
                        variant="outline" 
                        onClick={() => setIsSubmitted(false)}
                        className="border-green-600 text-green-600 hover:bg-green-50"
                      >
                        Subscribe Another Email
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
