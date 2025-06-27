
import React from 'react';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin,
  Leaf,
  CreditCard,
  Shield,
  Truck
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
                <Leaf className="text-white w-4 h-4" />
              </div>
              <span className="text-xl font-bold">VeggieFresh</span>
            </div>
            
            <p className="text-gray-300 leading-relaxed">
              Your trusted partner for fresh, organic vegetables delivered straight 
              from local farms to your doorstep. Quality guaranteed, health prioritized.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">123 Fresh Market St, Green Valley, CA 90210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">hello@veggiefresh.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-3">
              {[
                'About Us',
                'Our Products',
                'How It Works',
                'Delivery Info',
                'Quality Promise',
                'Sustainability',
                'Careers',
                'Blog'
              ].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-300 hover:text-green-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Customer Service</h3>
            <ul className="space-y-3">
              {[
                'Help Center',
                'Track Your Order',
                'Returns & Refunds',
                'Shipping Policy',
                'Terms & Conditions',
                'Privacy Policy',
                'FAQs',
                'Contact Support'
              ].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-300 hover:text-green-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Stay Connected</h3>
            
            <div className="space-y-4">
              <p className="text-gray-300 text-sm">
                Get weekly updates on fresh arrivals and exclusive offers.
              </p>
              
              <div className="flex space-x-2">
                <Input 
                  type="email" 
                  placeholder="Your email"
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-green-400"
                />
                <Button size="sm" className="bg-green-600 hover:bg-green-700">
                  Subscribe
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Follow Us</h4>
              <div className="flex space-x-4">
                {[
                  { icon: Facebook, label: 'Facebook' },
                  { icon: Twitter, label: 'Twitter' },
                  { icon: Instagram, label: 'Instagram' },
                  { icon: Youtube, label: 'YouTube' }
                ].map(({ icon: Icon, label }) => (
                  <a
                    key={label}
                    href="#"
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors group"
                    aria-label={label}
                  >
                    <Icon className="w-5 h-5 text-gray-300 group-hover:text-white" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-gray-800" />

        {/* Trust Badges */}
        <div className="py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex items-center justify-center space-x-3">
              <Shield className="w-6 h-6 text-green-400" />
              <span className="text-gray-300">SSL Secured Shopping</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Truck className="w-6 h-6 text-green-400" />
              <span className="text-gray-300">Free Delivery Available</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <CreditCard className="w-6 h-6 text-green-400" />
              <span className="text-gray-300">Multiple Payment Options</span>
            </div>
          </div>
        </div>

        <Separator className="bg-gray-800" />

        {/* Bottom Footer */}
        <div className="py-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
            <p className="text-gray-400 text-sm">
              © {currentYear} VeggieFresh. All rights reserved.
            </p>
            <div className="flex space-x-4 text-sm">
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-gray-400 text-sm">We Accept:</span>
            <div className="flex space-x-2">
              {['Visa', 'MC', 'AMEX', 'PayPal'].map((payment) => (
                <div key={payment} className="w-8 h-5 bg-gray-700 rounded flex items-center justify-center">
                  <span className="text-xs text-gray-300">{payment}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
