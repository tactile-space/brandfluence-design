
import React, { useEffect, useRef } from 'react';
import FeatureCard from './FeatureCard';
import { LineChart, BrainCog, Sparkles, Rocket } from 'lucide-react';

const BrandsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  
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
      id="brands" 
      ref={sectionRef}
      className="section-padding bg-gray-50 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-brand-100 rounded-full filter blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-100 rounded-full filter blur-3xl opacity-30 translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-6 md:px-10 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-brand-100 text-brand-600 text-sm font-semibold mb-4 animate-on-scroll opacity-0">
            For Brands
          </div>
          
          <h2 
            ref={headingRef}
            className="gradient-text text-4xl md:text-5xl font-bold mb-6 animate-on-scroll opacity-0"
          >
            Find Your Perfect Influencer, Elevate Your Brand!
          </h2>
          
          <p className="text-gray-600 text-lg max-w-3xl mx-auto animate-on-scroll opacity-0">
            Say goodbye to mismatched collaborations. PICKCREATOR connects you with influencers who amplify your brand's message seamlessly.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <FeatureCard
            icon={<BrainCog size={24} />}
            title="Data-Backed Matches"
            description="AI-powered influencer recommendations tailored to your niche and audience demographics."
            delay="0.1s"
            className="animate-on-scroll opacity-0"
          />
          
          <FeatureCard
            icon={<Sparkles size={24} />}
            title="One-Click Collaboration"
            description="Instantly message & connect with creators who align with your brand values."
            delay="0.2s"
            className="animate-on-scroll opacity-0"
          />
          
          <FeatureCard
            icon={<LineChart size={24} />}
            title="Performance Insights"
            description="Real-time engagement analytics & ROI tracking for all your campaigns."
            delay="0.3s"
            className="animate-on-scroll opacity-0"
          />
          
          <FeatureCard
            icon={<Rocket size={24} />}
            title="Automated Campaigns"
            description="Let AI handle outreach & negotiation, saving you time and resources."
            delay="0.4s"
            className="animate-on-scroll opacity-0"
          />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="order-2 lg:order-1 animate-on-scroll opacity-0">
            <div className="glass-card p-6 relative">
              <div className="absolute -top-4 -left-4 bg-brand-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                BRAND INSIGHT
              </div>
              
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-bold text-gray-900">Audience Match</h4>
                  <span className="text-brand-600 font-semibold">93%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-brand-500 w-[93%]"></div>
                </div>
              </div>
              
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-bold text-gray-900">Engagement Rate</h4>
                  <span className="text-brand-600 font-semibold">87%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-brand-500 w-[87%]"></div>
                </div>
              </div>
              
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-bold text-gray-900">Brand Affinity</h4>
                  <span className="text-brand-600 font-semibold">95%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-brand-500 w-[95%]"></div>
                </div>
              </div>
              
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center mr-3">
                    <span className="text-brand-600 font-bold">L</span>
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900">Luxury Brand</h5>
                    <p className="text-gray-600 text-sm">Fashion & Lifestyle</p>
                  </div>
                </div>
                <p className="text-gray-600 italic text-sm">
                  "The AI matching system found us influencers we would have never discovered on our own. Our latest campaign saw a 3x ROI compared to previous efforts."
                </p>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 animate-on-scroll opacity-0">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Transform your influencer marketing strategy</h3>
            
            <p className="text-gray-600 mb-6">
              Our proprietary AI algorithm analyzes millions of data points to find the perfect match for your brand. No more guesswork, no more wasted budgets on misaligned partnerships.
            </p>
            
            <ul className="space-y-4">
              {[
                "Access to 100,000+ verified creators across all platforms",
                "Real-time performance tracking and analytics dashboard",
                "Customizable campaign requirements and deliverables",
                "Secure payment processing and contract management"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="mr-3 mt-1 text-brand-500">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0ZM7 11.4L3.6 8L5 6.6L7 8.6L11 4.6L12.4 6L7 11.4Z" fill="currentColor"/>
                    </svg>
                  </div>
                  <p className="text-gray-700">{item}</p>
                </li>
              ))}
            </ul>
            
            <button className="mt-8 bg-brand-600 hover:bg-brand-700 text-white px-6 py-3 rounded-lg font-semibold transition-all flex items-center">
              Start Finding Creators
              <svg className="ml-2" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z" fill="currentColor"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
