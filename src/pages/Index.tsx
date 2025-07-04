
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Categories from '@/components/Categories';
import FeaturedProducts from '@/components/FeaturedProducts';
import Features from '@/components/Features';
import Newsletter from '@/components/Newsletter';
import ContactUs from '@/components/ContactUs';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <div id="categories">
          <Categories />
        </div>
        <FeaturedProducts />
        <div id="features">
          <Features />
        </div>
        <Newsletter />
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
