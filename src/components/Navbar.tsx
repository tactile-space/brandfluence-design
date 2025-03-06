
import React, { useState, useEffect } from 'react';
import { Home, Briefcase, Camera, DollarSign, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-6 md:px-10',
        scrolled 
          ? 'py-3 glass-dark shadow-lg' 
          : 'py-5 bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#" className="flex items-center">
          <span 
            className={cn(
              "text-xl font-extrabold tracking-tight transition-all duration-300",
              scrolled ? "gradient-text" : "text-white"
            )}
          >
            PICKCREATOR
          </span>
        </a>
        
        <div className="hidden md:flex items-center space-x-8">
          <NavItem icon={<Home size={20} />} label="Home" href="#" active />
          <NavItem icon={<Briefcase size={20} />} label="Brands" href="#brands" />
          <NavItem icon={<Camera size={20} />} label="Creators" href="#creators" />
          <NavItem icon={<DollarSign size={20} />} label="Pricing" href="#pricing" />
          <NavItem icon={<Mail size={20} />} label="Contact" href="#contact" />
        </div>
        
        <div className="flex md:hidden">
          <button className="text-white hover:text-brand-300 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  href: string;
  active?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, href, active }) => {
  return (
    <a 
      href={href} 
      className={cn(
        "flex items-center space-x-1 text-sm transition-all duration-200",
        active 
          ? "text-brand-300 font-medium" 
          : "text-white/80 hover:text-white"
      )}
    >
      <span>{icon}</span>
      <span>{label}</span>
    </a>
  );
};

export default Navbar;
