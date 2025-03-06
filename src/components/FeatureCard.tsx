
import React from 'react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: string;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  icon, 
  title, 
  description, 
  delay = '0s',
  className 
}) => {
  return (
    <div 
      className={cn(
        "glass-card p-6 transition-all duration-300 hover:shadow-xl group animate-scale-in",
        className
      )}
      style={{ animationDelay: delay }}
    >
      <div className="rounded-xl bg-brand-50 p-3 inline-flex text-brand-600 mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:bg-brand-100">
        {icon}
      </div>
      
      <h3 className="text-xl font-bold mb-2 text-gray-900">{title}</h3>
      
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;
