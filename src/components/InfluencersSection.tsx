
import React, { useRef, useEffect } from 'react';
import FeatureCard from './FeatureCard';
import { DollarSign, TrendingUp, Zap, BarChart3 } from 'lucide-react';

const InfluencersSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, observerOptions);
    
    const childElements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    childElements?.forEach(el => {
      observer.observe(el);
    });
    
    return () => {
      childElements?.forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);
  
  return (
    <section 
      id="creators"
      ref={sectionRef}
      className="section-padding relative overflow-hidden bg-gradient-to-b from-gray-900 to-black text-white"
    >
      {/* Video Background (simulated with gradients) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-brand opacity-10 animate-morph-gradient"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-black via-transparent to-black"></div>
      </div>
      
      <div className="container mx-auto px-6 md:px-10 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-white/10 text-brand-300 text-sm font-semibold mb-4 animate-on-scroll opacity-0">
            For Creators
          </div>
          
          <h2 className="gradient-text text-4xl md:text-5xl font-bold mb-6 animate-on-scroll opacity-0">
            Turn Your Passion Into Profits!
          </h2>
          
          <p className="text-white/70 text-lg max-w-3xl mx-auto animate-on-scroll opacity-0">
            Monetize your influence and work with brands that fit your personality and style. No more chasing partnerships that don't align with your values.
          </p>
        </div>
        
        <div 
          ref={cardsContainerRef}
          className="overflow-x-auto pb-8 -mx-6 px-6"
        >
          <div className="grid grid-cols-4 gap-6 min-w-[1000px]">
            <FeatureCard
              icon={<DollarSign size={24} />}
              title="Earn What You Deserve"
              description="Direct payments with no middlemen. Set your own rates and receive what you're worth."
              delay="0.1s"
              className="animate-on-scroll opacity-0 bg-white/80 hover:bg-white transition-all"
            />
            
            <FeatureCard
              icon={<TrendingUp size={24} />}
              title="Boost Your Visibility"
              description="AI-powered brand recommendations tailored specifically to your content style and audience."
              delay="0.2s"
              className="animate-on-scroll opacity-0 bg-white/80 hover:bg-white transition-all"
            />
            
            <FeatureCard
              icon={<Zap size={24} />}
              title="Easy Collaboration"
              description="In-app messaging, contract signing, and campaign tracking all in one place."
              delay="0.3s"
              className="animate-on-scroll opacity-0 bg-white/80 hover:bg-white transition-all"
            />
            
            <FeatureCard
              icon={<BarChart3 size={24} />}
              title="Growth Insights"
              description="Personalized analytics to optimize your content and maximize your earnings."
              delay="0.4s"
              className="animate-on-scroll opacity-0 bg-white/80 hover:bg-white transition-all"
            />
          </div>
        </div>
        
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="animate-on-scroll opacity-0">
            <div className="glass-dark rounded-2xl p-6 overflow-hidden relative">
              <div className="absolute -top-16 -right-16 w-32 h-32 bg-brand-500 opacity-30 rounded-full filter blur-3xl"></div>
              
              <div className="mb-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-brand mr-4"></div>
                  <div>
                    <h4 className="font-bold text-white text-lg">@creator</h4>
                    <p className="text-white/60 text-sm">Lifestyle & Fashion</p>
                  </div>
                  <div className="ml-auto">
                    <span className="bg-brand-500/20 text-brand-300 text-xs px-2 py-1 rounded-full">
                      Verified
                    </span>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4 text-center mb-6">
                  <div className="bg-white/5 rounded-lg p-3">
                    <p className="text-white/60 text-xs mb-1">Followers</p>
                    <p className="text-white font-bold">125K</p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3">
                    <p className="text-white/60 text-xs mb-1">Engagement</p>
                    <p className="text-white font-bold">4.8%</p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3">
                    <p className="text-white/60 text-xs mb-1">Rating</p>
                    <p className="text-white font-bold">4.9/5</p>
                  </div>
                </div>
                
                <div className="p-4 bg-white/10 rounded-lg mb-6">
                  <h5 className="font-bold text-white mb-2">Match Opportunities</h5>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xs mr-3">B1</div>
                      <div className="flex-1">
                        <p className="text-white text-sm">Fitness Brand</p>
                        <div className="h-1.5 bg-white/20 rounded-full overflow-hidden">
                          <div className="h-full bg-blue-500 w-[85%]"></div>
                        </div>
                      </div>
                      <span className="text-white text-sm font-semibold ml-3">85%</span>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold text-xs mr-3">B2</div>
                      <div className="flex-1">
                        <p className="text-white text-sm">Skincare Line</p>
                        <div className="h-1.5 bg-white/20 rounded-full overflow-hidden">
                          <div className="h-full bg-purple-500 w-[92%]"></div>
                        </div>
                      </div>
                      <span className="text-white text-sm font-semibold ml-3">92%</span>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-pink-600 flex items-center justify-center text-white font-bold text-xs mr-3">B3</div>
                      <div className="flex-1">
                        <p className="text-white text-sm">Fashion Retailer</p>
                        <div className="h-1.5 bg-white/20 rounded-full overflow-hidden">
                          <div className="h-full bg-pink-500 w-[97%]"></div>
                        </div>
                      </div>
                      <span className="text-white text-sm font-semibold ml-3">97%</span>
                    </div>
                  </div>
                </div>
                
                <button className="w-full bg-brand-500 hover:bg-brand-600 text-white py-2 rounded-lg font-semibold transition-colors">
                  View Matches
                </button>
              </div>
            </div>
          </div>
          
          <div className="animate-on-scroll opacity-0">
            <h3 className="text-3xl font-bold text-white mb-6">Grow your influence, grow your income</h3>
            
            <p className="text-white/70 mb-6">
              Our platform helps creators like you connect with brands that truly value your unique voice and audience. Build meaningful partnerships that benefit both you and your followers.
            </p>
            
            <ul className="space-y-4 mb-8">
              {[
                "Set your own rates and negotiation terms",
                "Get discovered by brands looking for exactly what you offer",
                "Track performance metrics to show your true value",
                "Build long-term relationships with brands you love"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="mr-3 mt-1 text-brand-300">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0ZM7 11.4L3.6 8L5 6.6L7 8.6L11 4.6L12.4 6L7 11.4Z" fill="currentColor"/>
                    </svg>
                  </div>
                  <p className="text-white/80">{item}</p>
                </li>
              ))}
            </ul>
            
            <div className="flex flex-wrap gap-4">
              <button className="bg-brand-500 hover:bg-brand-600 text-white px-6 py-3 rounded-lg font-semibold transition-all flex items-center">
                Create Creator Profile
                <svg className="ml-2" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z" fill="currentColor"/>
                </svg>
              </button>
              
              <button className="bg-transparent hover:bg-white/10 border border-white/30 text-white px-6 py-3 rounded-lg font-medium transition-all">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfluencersSection;
