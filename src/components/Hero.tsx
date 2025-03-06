
import React, { useEffect, useRef } from 'react';
import NetworkAnimation from './NetworkAnimation';
import { ArrowRight, Play } from 'lucide-react';

const Hero: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    if (!titleRef.current) return;
    
    const letters = titleRef.current.innerText.split('');
    titleRef.current.innerHTML = '';
    
    letters.forEach((letter, i) => {
      const span = document.createElement('span');
      span.innerText = letter;
      span.style.opacity = '0';
      span.style.transform = 'translateY(20px)';
      span.style.transition = 'all 0.5s ease';
      span.style.transitionDelay = `${i * 0.05}s`;
      titleRef.current?.appendChild(span);
      
      setTimeout(() => {
        span.style.opacity = '1';
        span.style.transform = 'translateY(0)';
      }, 500);
    });
  }, []);
  
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-dark">
      {/* Network Background Animation */}
      <div className="absolute inset-0 opacity-50">
        <NetworkAnimation />
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60"></div>
      
      <div className="container mx-auto px-6 md:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 text-center lg:text-left">
            <div className="inline-block px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-300 text-sm font-semibold mb-6 animate-fade-in" style={{animationDelay: '0.3s'}}>
              Next-Gen Influencer Marketing Platform
            </div>
            
            <h1 ref={titleRef} className="text-white mb-6">
              Connect Brands with The Perfect Influencers
            </h1>
            
            <p className="text-white/70 text-lg md:text-xl mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-in" style={{animationDelay: '0.6s'}}>
              Cutting-edge AI technology that matches brands with influencers who share their values, aesthetic, and audience for authentic collaborations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in" style={{animationDelay: '0.9s'}}>
              <button className="button-glow bg-brand-600 hover:bg-brand-700 text-white px-8 py-3 rounded-full font-semibold transition-all flex items-center justify-center group">
                Get Started
                <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={18} />
              </button>
              
              <button className="glass border border-white/10 hover:border-white/20 text-white px-6 py-3 rounded-full font-medium transition-all flex items-center justify-center">
                <Play className="mr-2" size={18} />
                See How It Works
              </button>
            </div>
          </div>
          
          <div className="lg:col-span-5 animate-fade-in" style={{animationDelay: '1.2s'}}>
            <div className="relative">
              <div className="glass-dark rounded-2xl p-6 shadow-xl animate-float">
                <div className="absolute -top-4 -right-4 bg-brand-500 text-white text-xs font-bold px-3 py-1 rounded-full">AI-Powered</div>
                <div className="space-y-4">
                  <div className="bg-brand-900/50 rounded-lg p-4">
                    <h3 className="text-white text-lg font-semibold mb-2">Match Score: 98%</h3>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-brand-700 flex items-center justify-center text-white font-bold">B</div>
                      <div className="flex-1">
                        <div className="h-2 bg-black/20 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-brand-600 to-brand-400 w-[98%]"></div>
                        </div>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-brand-500 flex items-center justify-center text-white font-bold">C</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2 text-white/80 text-sm">
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span>Audience alignment</span>
                    <span className="ml-auto font-mono">96%</span>
                  </div>
                  
                  <div className="flex items-center space-x-2 text-white/80 text-sm">
                    <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                    <span>Content quality</span>
                    <span className="ml-auto font-mono">99%</span>
                  </div>
                  
                  <div className="flex items-center space-x-2 text-white/80 text-sm">
                    <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                    <span>Brand affinity</span>
                    <span className="ml-auto font-mono">95%</span>
                  </div>
                  
                  <button className="w-full bg-brand-500 hover:bg-brand-600 text-white py-2 rounded-lg font-semibold transition-colors">
                    Connect Now
                  </button>
                </div>
              </div>
              
              <div className="absolute -bottom-8 -left-8 glass-dark p-4 rounded-xl animate-float" style={{animationDelay: '1s'}}>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-brand"></div>
                  <div className="space-y-1">
                    <div className="h-2 w-24 bg-white/20 rounded-full"></div>
                    <div className="h-2 w-16 bg-white/10 rounded-full"></div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-8 -right-8 glass-dark p-3 rounded-xl animate-float" style={{animationDelay: '1.5s'}}>
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-8 bg-brand-400/40 rounded-full"></div>
                  <div className="h-2 w-8 bg-brand-500/40 rounded-full"></div>
                  <div className="h-2 w-8 bg-brand-600/40 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
