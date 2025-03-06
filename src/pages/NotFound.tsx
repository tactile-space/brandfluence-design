
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const NotFound: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-black p-6">
      <div className="max-w-md w-full">
        <div className="text-center">
          <h1 className="gradient-text text-9xl font-bold mb-4">404</h1>
          <p className="text-xl text-white/80 mb-8">Oops! This page doesn't exist</p>
          
          <div className="glass-dark p-6 rounded-2xl mb-8">
            <p className="text-white/60 mb-4">
              The page you're looking for may have been moved or deleted.
            </p>
            <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden mb-4">
              <div className="h-full bg-brand-500 w-[40%] animate-pulse-soft"></div>
            </div>
            <p className="text-white/40 text-sm">
              Route: {location.pathname}
            </p>
          </div>
          
          <a 
            href="/" 
            className="inline-flex items-center justify-center button-glow bg-brand-600 hover:bg-brand-700 text-white px-8 py-3 rounded-full font-semibold transition-all"
          >
            Return to Home
            <svg className="ml-2" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z" fill="currentColor"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
