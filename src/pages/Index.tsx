
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import BrandsSection from '@/components/BrandsSection';
import InfluencersSection from '@/components/InfluencersSection';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  // Change page title
  useEffect(() => {
    document.title = "PICKCREATOR | Connecting Brands with Perfect Influencers";
  }, []);

  return (
    <main className="min-h-screen w-full bg-background">
      <Navbar />
      <Hero />
      <BrandsSection />
      <InfluencersSection />
      <Footer />
      
      {/* Fixed chatbot button */}
      <button className="fixed bottom-6 right-6 z-50 shadow-lg button-glow w-14 h-14 rounded-full bg-brand-600 text-white flex items-center justify-center transition-transform hover:scale-110">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16 13H13V16C13 16.55 12.55 17 12 17C11.45 17 11 16.55 11 16V13H8C7.45 13 7 12.55 7 12C7 11.45 7.45 11 8 11H11V8C11 7.45 11.45 7 12 7C12.55 7 13 7.45 13 8V11H16C16.55 11 17 11.45 17 12C17 12.55 16.55 13 16 13Z" fill="currentColor"/>
        </svg>
      </button>
    </main>
  );
};

export default Index;
