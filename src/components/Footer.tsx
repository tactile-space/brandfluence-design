
import React, { useState } from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, ChevronRight } from 'lucide-react';

const Footer: React.FC = () => {
  const [hoveredCube, setHoveredCube] = useState<string | null>(null);
  
  const cubeLinks = [
    { id: 'services', label: 'Services', href: '#services' },
    { id: 'contact', label: 'Contact Us', href: '#contact' },
    { id: 'blogs', label: 'Blogs', href: '#blogs' },
    { id: 'terms', label: 'Terms & Conditions', href: '#terms' },
    { id: 'privacy', label: 'Privacy Policy', href: '#privacy' },
    { id: 'about', label: 'About Us', href: '#about' },
  ];
  
  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Gradient overlays */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-700 via-brand-500 to-brand-700"></div>
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-brand-700 rounded-full filter blur-3xl opacity-10"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-600 rounded-full filter blur-3xl opacity-10"></div>
      
      <div className="container mx-auto px-6 md:px-10 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          <div>
            <h3 className="text-xl font-bold mb-4 gradient-text">PICKCREATOR</h3>
            <p className="text-gray-400 mb-4">
              The next generation platform connecting brands with perfect-match influencers through AI-powered technology.
            </p>
            <div className="flex space-x-4">
              <SocialIcon icon={<Facebook size={18} />} />
              <SocialIcon icon={<Twitter size={18} />} />
              <SocialIcon icon={<Instagram size={18} />} />
              <SocialIcon icon={<Linkedin size={18} />} />
              <SocialIcon icon={<Youtube size={18} />} />
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About Us', 'Features', 'Pricing', 'Contact Us'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-brand-300 transition-colors flex items-center group">
                    <ChevronRight size={16} className="mr-1 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">For Creators</h4>
            <ul className="space-y-2">
              {['How It Works', 'Creator Resources', 'Success Stories', 'Brand Opportunities', 'Creator FAQ'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-brand-300 transition-colors flex items-center group">
                    <ChevronRight size={16} className="mr-1 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">For Brands</h4>
            <ul className="space-y-2">
              {['Find Creators', 'Campaign Management', 'Analytics Dashboard', 'Case Studies', 'Brand FAQ'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-brand-300 transition-colors flex items-center group">
                    <ChevronRight size={16} className="mr-1 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} PICKCREATOR. All rights reserved.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            {cubeLinks.map((link) => (
              <a 
                key={link.id}
                href={link.href}
                className="text-gray-400 hover:text-brand-300 text-sm transition-colors"
                onMouseEnter={() => setHoveredCube(link.id)}
                onMouseLeave={() => setHoveredCube(null)}
              >
                {link.label}
                {hoveredCube === link.id && (
                  <span className="block h-0.5 mt-0.5 bg-brand-500 animate-fade-in" style={{animationDuration: '0.2s'}}></span>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

interface SocialIconProps {
  icon: React.ReactNode;
}

const SocialIcon: React.FC<SocialIconProps> = ({ icon }) => {
  return (
    <a 
      href="#" 
      className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-800 text-gray-400 hover:bg-brand-600 hover:text-white transition-all duration-300 transform hover:scale-110"
    >
      {icon}
    </a>
  );
};

export default Footer;
