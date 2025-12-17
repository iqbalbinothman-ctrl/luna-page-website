import React from 'react';
import { Button } from './Button';
import { Check } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';

interface PricingContent {
  title: string;
  sub: string;
  start: string;
  select: string;
  petite: {
    title: string;
    features: string[];
  };
  classic: {
    title: string;
    features: string[];
  };
}

interface PricingProps {
  content: PricingContent;
}

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  startText: string;
  selectText: string;
  isDark?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({ title, price, features, startText, selectText, isDark = false }) => {
  return (
    <div className={`flex flex-col h-full p-8 md:p-10 rounded-[24px] ${isDark ? 'bg-apple-dark text-white' : 'bg-white text-apple-dark'} shadow-sm border border-gray-100/50 transition-all hover:-translate-y-2 hover:shadow-apple-hover duration-300 cursor-default group`}>
      <div className="mb-6 md:mb-8">
        <h3 className={`text-[20px] md:text-[24px] font-semibold mb-2 ${isDark ? 'text-white' : 'text-apple-dark'}`}>{title}</h3>
        <p className={`text-[13px] md:text-[14px] font-medium ${isDark ? 'text-gray-400' : 'text-apple-gray'}`}>{startText}</p>
        <div className="text-[28px] md:text-[32px] font-bold tracking-tight mt-1 group-hover:scale-105 transition-transform origin-left">{price}</div>
      </div>
      
      <div className="flex-grow space-y-3 md:space-y-4 mb-8 md:mb-10 border-t border-gray-200/20 pt-6 md:pt-8">
        {features.map((feature, idx) => (
          <div key={idx} className="flex items-start text-[14px] md:text-[15px] font-medium">
            <Check className={`w-4 h-4 mr-3 mt-0.5 flex-shrink-0 ${isDark ? 'text-white' : 'text-apple-blue'}`} />
            <span className={isDark ? 'text-gray-300' : 'text-apple-gray'}>{feature}</span>
          </div>
        ))}
      </div>
      
      <Button variant={isDark ? 'primary' : 'outline'} className={`w-full py-3 ${!isDark && 'hover:bg-apple-bg'}`}>
        {selectText}
      </Button>
    </div>
  );
};

export const Pricing: React.FC<PricingProps> = ({ content }) => {
  return (
    <section id="pricing" className="py-20 md:py-32 bg-apple-bg">
      <div className="max-w-[1024px] mx-auto px-6">
        <RevealOnScroll>
          <h2 className="text-[36px] md:text-[64px] font-semibold tracking-tighter text-center mb-4 text-apple-dark">
            {content.title}
          </h2>
          <p className="text-[18px] md:text-[21px] text-center text-apple-gray font-medium mb-12 md:mb-16">
            {content.sub}
          </p>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          <RevealOnScroll delay={100} className="h-full">
            <PricingCard 
              title={content.petite.title}
              price="RM350"
              startText={content.start}
              selectText={content.select}
              features={content.petite.features}
            />
          </RevealOnScroll>
          <RevealOnScroll delay={200} className="h-full">
            <PricingCard 
              title={content.classic.title}
              price="RM500"
              startText={content.start}
              selectText={content.select}
              isDark={true}
              features={content.classic.features}
            />
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};