import React from 'react';
import { Button } from './Button';
import { ChevronRight } from 'lucide-react';

interface HeroProps {
  content: {
    tag: string;
    headline: string;
    headlineSpan: string;
    sub: string;
    cta: string;
    link: string;
  };
}

export const Hero: React.FC<HeroProps> = ({ content }) => {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-start pt-28 md:pt-36 pb-12 px-6 bg-white overflow-hidden">
      
      <div className="max-w-[980px] mx-auto text-center z-10 space-y-4 md:space-y-6">
        <h2 className="text-[18px] md:text-[24px] font-semibold text-apple-blue animate-fade-in">
          {content.tag}
        </h2>
        
        <h1 className="text-[40px] sm:text-[56px] md:text-[80px] leading-[1.05] font-semibold tracking-tighter text-apple-dark animate-fade-in-up">
          {content.headline} <br className="hidden md:block" />
          <span className="text-apple-gray block md:inline">{content.headlineSpan}</span>
        </h1>

        <p className="text-[20px] md:text-[28px] leading-relaxed font-medium text-apple-dark mt-4 animate-fade-in-up delay-100 max-w-lg md:max-w-2xl mx-auto">
          {content.sub}
        </p>
        
        <div className="pt-6 md:pt-8 flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 animate-fade-in-up delay-200">
          <Button variant="primary" className="w-full sm:w-auto h-12 sm:h-auto text-[16px]">{content.cta}</Button>
          <a href="#pricing" className="text-apple-blue hover:underline text-[16px] md:text-[17px] flex items-center group font-medium py-2">
            {content.link} <ChevronRight size={16} className="ml-1 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </div>

      {/* Hero Image Area - Tech/Minimalist */}
      <div className="mt-12 md:mt-20 w-full max-w-[1100px] h-[40vh] md:h-[65vh] relative rounded-[20px] md:rounded-[30px] overflow-hidden shadow-2xl animate-fade-in delay-300 border border-gray-100">
        <img 
          src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
          alt="Minimalist Workspace"
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-[2s]"
        />
      </div>
    </section>
  );
};