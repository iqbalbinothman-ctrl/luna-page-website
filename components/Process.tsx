import React from 'react';
import { Lightbulb, PenTool, Sparkles } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';

interface ProcessProps {
  content: {
    title: string;
    steps: {
      step: string;
      title: string;
      desc: string;
    }[];
  };
}

export const Process: React.FC<ProcessProps> = ({ content }) => {
  const icons = [Lightbulb, PenTool, Sparkles];

  return (
    <section id="process" className="py-20 md:py-32 bg-white">
      <div className="max-w-[1024px] mx-auto px-6">
        <RevealOnScroll>
          <h2 className="text-[36px] md:text-[56px] font-semibold tracking-tighter text-center mb-12 md:mb-20 text-apple-dark">
            {content.title}
          </h2>
        </RevealOnScroll>

        {/* Grid for steps: 1 column on mobile, 3 on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {content.steps.map((item, idx) => {
            const Icon = icons[idx];
            const isDark = idx === 2; // Last item is dark accent

            return (
              <RevealOnScroll key={idx} delay={idx * 150} className="h-full">
                <div className={`group p-8 rounded-[24px] md:rounded-[30px] transition-all duration-500 hover:scale-[1.03] hover:shadow-apple-hover shadow-sm md:shadow-none h-full ${isDark ? 'bg-apple-dark text-white' : 'bg-apple-bg'}`}>
                  <div className="flex flex-col h-full justify-between min-h-[220px] md:min-h-[300px]">
                    <div>
                      <span className={`text-[11px] md:text-[12px] font-semibold uppercase tracking-widest mb-3 block ${isDark ? 'text-gray-400' : 'text-apple-gray'}`}>
                        {item.step}
                      </span>
                      <h3 className={`text-[24px] md:text-[28px] font-semibold leading-tight mb-3 md:mb-4 ${isDark ? 'text-white' : 'text-apple-dark'}`}>
                        {item.title}
                      </h3>
                      <p className={`text-[16px] md:text-[17px] font-medium leading-relaxed ${isDark ? 'text-gray-400' : 'text-apple-gray'}`}>
                        {item.desc}
                      </p>
                    </div>
                    <div className={`mt-6 md:mt-8 self-start p-3 md:p-4 rounded-full shadow-apple transition-transform group-hover:scale-110 group-hover:rotate-6 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
                      <Icon size={20} className={`md:w-6 md:h-6 ${isDark ? 'text-white' : 'text-apple-dark'}`} />
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
};