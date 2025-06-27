
import React, { useState } from 'react';
import { ShoppingCart, Search, User, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="bg-white shadow-sm border-b border-green-100 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">V</span>
            </div>
            <span className="text-xl font-bold text-green-800">VeggieFresh</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-700 hover:text-green-600 transition-colors font-medium">Home</a>
            <a href="/products" className="text-gray-700 hover:text-green-600 transition-colors font-medium">Products</a>
            <a href="/categories" className="text-gray-700 hover:text-green-600 transition-colors font-medium">Categories</a>
            <a href="/about" className="text-gray-700 hover:text-green-600 transition-colors font-medium">About</a>
            <a href="/contact" className="text-gray-700 hover:text-green-600 transition-colors font-medium">Contact</a>
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex items-center space-x-4 flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                type="text"
                placeholder="Search vegetables..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 w-full border-green-200 focus:border-green-400 focus:ring-green-400"
              />
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="hidden md:flex items-center space-x-2 text-gray-700 hover:text-green-600">
              <User className="w-4 h-4" />
              <span>Account</span>
            </Button>
            
            <Button variant="ghost" size="sm" className="relative">
              <ShoppingCart className="w-5 h-5 text-gray-700" />
              <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-green-100 py-4 space-y-2">
            <div className="mb-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  type="text"
                  placeholder="Search vegetables..."
                  className="pl-10 pr-4 py-2 w-full border-green-200"
                />
              </div>
            </div>
            <a href="/" className="block py-2 text-gray-700 hover:text-green-600 font-medium">Home</a>
            <a href="/products" className="block py-2 text-gray-700 hover:text-green-600 font-medium">Products</a>
            <a href="/categories" className="block py-2 text-gray-700 hover:text-green-600 font-medium">Categories</a>
            <a href="/about" className="block py-2 text-gray-700 hover:text-green-600 font-medium">About</a>
            <a href="/contact" className="block py-2 text-gray-700 hover:text-green-600 font-medium">Contact</a>
            <div className="pt-2 border-t border-green-100">
              <Button variant="ghost" className="w-full justify-start text-gray-700 hover:text-green-600">
                <User className="w-4 h-4 mr-2" />
                My Account
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
