import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, ExternalLink, Maximize2, X } from 'lucide-react';
import { Button } from './Button';
import { RevealOnScroll } from './RevealOnScroll';

interface PortfolioProps {
  content: {
    title: string;
    sub: string;
    expand: string;
    visit: string;
    close: string;
  };
}

const projects = [
  { url: "https://crispykentang.vercel.app/", title: "Crispy Kentang", color: "#F5F5F7" },
  { url: "https://barber-beta-blush.vercel.app/", title: "Classic Barber", color: "#F5F5F7" },
  { url: "https://cafe-vibrant.vercel.app/", title: "Cafe Vibrant", color: "#F5F5F7" }
];

export const Portfolio: React.FC<PortfolioProps> = ({ content }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const currentProject = projects[currentIndex];

  return (
    <section id="portfolio" className="py-20 md:py-32 bg-white relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6">
        <RevealOnScroll className="mb-12 md:mb-16 text-center">
          <h2 className="text-[36px] md:text-[64px] font-semibold tracking-tighter text-apple-dark mb-4">
            {content.title}
          </h2>
          <p className="text-[18px] md:text-[21px] text-apple-gray font-medium max-w-xl mx-auto">
            {content.sub}
          </p>
        </RevealOnScroll>

        {/* Carousel Container */}
        <RevealOnScroll delay={200} className="relative flex flex-col items-center">
          
          {/* Main Browser Window */}
          <div className="w-full max-w-[1024px] bg-white rounded-[16px] md:rounded-[20px] shadow-2xl hover:shadow-apple-hover border border-gray-200 overflow-hidden relative z-10 transition-all duration-500 hover:scale-[1.01] cursor-pointer group" onClick={() => setIsModalOpen(true)}>
            {/* Browser Header */}
            <div className="h-8 md:h-10 bg-gray-50 border-b border-gray-200 flex items-center px-4 gap-2 transition-colors group-hover:bg-gray-100">
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#FF5F57]"></div>
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#FEBC2E]"></div>
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#28C840]"></div>
              <div className="ml-2 md:ml-4 flex-grow">
                <div className="h-5 md:h-6 bg-white rounded-md border border-gray-200 w-2/3 md:w-1/3 mx-auto text-[9px] md:text-[10px] flex items-center justify-center text-gray-400 font-mono truncate px-2 group-hover:border-gray-300 transition-colors">
                  {currentProject.url}
                </div>
              </div>
            </div>

            {/* Iframe Viewport */}
            <div className="h-[350px] md:h-[600px] w-full bg-white relative group">
              <div className="absolute inset-0 bg-transparent z-10"></div> {/* Overlay to prevent iframe interaction while in carousel */}
              <iframe 
                src={currentProject.url} 
                className="w-full h-full border-0 pointer-events-none"
                title={currentProject.title}
                loading="lazy"
              />
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between w-[110%] md:w-full max-w-[1200px] absolute top-1/2 -translate-y-1/2 pointer-events-none px-2 z-20">
            <button 
              onClick={(e) => { e.stopPropagation(); handlePrev(); }}
              className="pointer-events-auto w-10 h-10 md:w-14 md:h-14 bg-white/90 backdrop-blur shadow-lg border border-gray-100 rounded-full flex items-center justify-center text-apple-dark hover:scale-110 active:scale-95 transition-all md:-ml-8 hover:bg-white"
              aria-label="Previous Project"
            >
              <ArrowLeft size={20} className="md:w-6 md:h-6" />
            </button>
            <button 
              onClick={(e) => { e.stopPropagation(); handleNext(); }}
              className="pointer-events-auto w-10 h-10 md:w-14 md:h-14 bg-white/90 backdrop-blur shadow-lg border border-gray-100 rounded-full flex items-center justify-center text-apple-dark hover:scale-110 active:scale-95 transition-all md:-mr-8 hover:bg-white"
              aria-label="Next Project"
            >
              <ArrowRight size={20} className="md:w-6 md:h-6" />
            </button>
          </div>

          {/* Action Bar */}
          <div className="mt-8 flex flex-col items-center gap-4 md:flex-row md:gap-6">
            <h3 className="text-[20px] md:text-[24px] font-semibold text-apple-dark animate-fade-in">{currentProject.title}</h3>
            <div className="flex gap-3">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gray-100 text-apple-dark hover:bg-gray-200 hover:scale-105 active:scale-95 transition-all font-medium text-[13px] md:text-[14px]"
              >
                <Maximize2 size={16} />
                {content.expand}
              </button>
              
              <a 
                href={currentProject.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-apple-dark text-white hover:bg-black hover:scale-105 active:scale-95 transition-all font-medium text-[13px] md:text-[14px]"
              >
                <ExternalLink size={16} />
                {content.visit}
              </a>
            </div>
          </div>

          {/* Page Indicators */}
          <div className="mt-8 flex gap-2">
            {projects.map((_, idx) => (
              <div 
                key={idx}
                className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-8 bg-apple-dark' : 'w-2 bg-gray-300 hover:bg-gray-400'}`}
              />
            ))}
          </div>

        </RevealOnScroll>
      </div>

      {/* Expanded Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-md flex items-center justify-center p-2 md:p-8 animate-fade-in">
          <div className="bg-white w-full h-full max-w-[1400px] max-h-[90vh] rounded-[16px] md:rounded-[24px] overflow-hidden shadow-2xl flex flex-col relative animate-scale-up">
            
            {/* Modal Header */}
            <div className="h-12 md:h-14 bg-white border-b border-gray-100 flex items-center justify-between px-4 md:px-6 flex-shrink-0">
               <h3 className="font-semibold text-apple-dark text-sm md:text-base">{currentProject.title}</h3>
               <button 
                onClick={() => setIsModalOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-all hover:rotate-90"
               >
                 <X size={20} className="text-apple-dark" />
               </button>
            </div>

            {/* Modal Iframe */}
            <div className="flex-grow bg-gray-100 relative">
               <iframe 
                src={currentProject.url} 
                className="w-full h-full border-0"
                title={`${currentProject.title} Full View`}
              />
            </div>

            {/* Modal Footer */}
             <div className="h-14 bg-white border-t border-gray-100 flex items-center justify-end px-4 md:px-6 flex-shrink-0 gap-3">
                 <Button variant="outline" onClick={() => setIsModalOpen(false)} className="text-xs md:text-sm">{content.close}</Button>
                 <a href={currentProject.url} target="_blank" rel="noopener noreferrer">
                    <Button variant="primary" className="text-xs md:text-sm">{content.visit}</Button>
                 </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};