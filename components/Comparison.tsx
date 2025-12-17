import React from 'react';
import { X, Check } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';

interface ComparisonProps {
  content: {
    title: string;
    sub: string;
    oldTitle: string;
    newTitle: string;
    oldItems: string[];
    newItems: string[];
  };
}

export const Comparison: React.FC<ComparisonProps> = ({ content }) => {
  return (
    <section id="benefits" className="py-20 md:py-32 bg-apple-bg">
      <div className="max-w-[980px] mx-auto px-6">
        <RevealOnScroll className="mb-12 md:mb-20 text-center md:text-left">
          <h2 className="text-[36px] md:text-[64px] font-semibold tracking-tighter leading-tight text-apple-dark mb-4 md:mb-6">
            {content.title}
          </h2>
          <p className="text-[20px] md:text-[24px] leading-relaxed font-medium text-apple-gray max-w-2xl mx-auto md:mx-0">
            {content.sub}
          </p>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Column 1: The Old Way */}
          <RevealOnScroll delay={100} className="h-full">
            <div className="bg-white p-8 md:p-10 rounded-[24px] shadow-sm opacity-80 md:opacity-60 hover:opacity-100 transition-all duration-300 order-2 md:order-1 h-full hover:shadow-md">
              <h3 className="text-[24px] md:text-[28px] font-semibold mb-6 md:mb-8 text-apple-gray">{content.oldTitle}</h3>
              <ul className="space-y-4 md:space-y-6">
                {content.oldItems.map((item, idx) => (
                  <li key={idx} className="flex items-start text-[17px] md:text-[19px] text-apple-gray font-medium">
                    <X className="w-6 h-6 mr-3 text-red-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </RevealOnScroll>

          {/* Column 2: The Luna Way */}
          <RevealOnScroll delay={200} className="h-full">
            <div className="bg-white p-8 md:p-10 rounded-[24px] shadow-apple hover:shadow-apple-hover border border-apple-dark/5 relative overflow-hidden order-1 md:order-2 transform md:scale-105 z-10 transition-all duration-300 hover:-translate-y-1 h-full">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-apple-blue"></div>
              <h3 className="text-[24px] md:text-[28px] font-semibold mb-6 md:mb-8 text-apple-dark">{content.newTitle}</h3>
              <ul className="space-y-4 md:space-y-6">
                {content.newItems.map((item, idx) => (
                  <li key={idx} className="flex items-start text-[17px] md:text-[19px] text-apple-dark font-medium">
                    <Check className="w-6 h-6 mr-3 text-apple-blue flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};