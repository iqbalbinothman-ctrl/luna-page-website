import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Language } from '../App';

interface NavbarProps {
  currentLang: Language;
  setLang: (lang: Language) => void;
  content: {
    benefits: string;
    portfolio: string;
    packages: string;
    process: string;
    contact: string;
  };
}

export const Navbar: React.FC<NavbarProps> = ({ currentLang, setLang, content }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClasses = `fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
    scrolled || mobileMenuOpen 
      ? 'bg-apple-bg/90 backdrop-blur-md border-b border-gray-200/50 shadow-sm' 
      : 'bg-transparent border-transparent'
  }`;
  
  const linkClasses = "text-apple-dark/80 hover:text-apple-dark transition-colors text-[13px] font-medium tracking-wide cursor-pointer";
  
  const langs: { code: Language; label: string }[] = [
    { code: 'en', label: 'EN' },
    { code: 'ms', label: 'MS' },
    { code: 'zh', label: 'CN' },
    { code: 'ta', label: 'TA' }
  ];

  return (
    <nav className={navClasses}>
      <div className="max-w-[1024px] mx-auto px-6 h-14 md:h-16 flex justify-between items-center">
        <a href="#" className="font-semibold text-lg tracking-tight text-apple-dark z-50">
          LUNA
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#benefits" className={linkClasses}>{content.benefits}</a>
          <a href="#portfolio" className={linkClasses}>{content.portfolio}</a>
          <a href="#pricing" className={linkClasses}>{content.packages}</a>
          <a href="#process" className={linkClasses}>{content.process}</a>
          <a href="#footer" className={linkClasses}>{content.contact}</a>
          
          <div className="h-4 w-px bg-gray-300 mx-2"></div>
          
          <div className="flex space-x-2">
            {langs.map((l) => (
              <button
                key={l.code}
                onClick={() => setLang(l.code)}
                className={`text-[11px] font-semibold px-2 py-1 rounded transition-colors ${
                  currentLang === l.code ? 'bg-apple-dark text-white' : 'text-apple-gray hover:text-apple-dark hover:bg-gray-100'
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center z-50">
            <button 
                className="text-apple-dark p-2 -mr-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
            >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-apple-bg z-40 flex flex-col pt-24 px-8 transition-transform duration-300 ease-in-out md:hidden ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full">
          <div className="flex flex-col space-y-6">
            <a href="#benefits" onClick={() => setMobileMenuOpen(false)} className="text-3xl font-semibold text-apple-dark tracking-tight">{content.benefits}</a>
            <a href="#portfolio" onClick={() => setMobileMenuOpen(false)} className="text-3xl font-semibold text-apple-dark tracking-tight">{content.portfolio}</a>
            <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="text-3xl font-semibold text-apple-dark tracking-tight">{content.packages}</a>
            <a href="#process" onClick={() => setMobileMenuOpen(false)} className="text-3xl font-semibold text-apple-dark tracking-tight">{content.process}</a>
            <a href="#footer" onClick={() => setMobileMenuOpen(false)} className="text-3xl font-semibold text-apple-dark tracking-tight">{content.contact}</a>
          </div>
          
          <div className="mt-auto mb-12 pt-8 border-t border-gray-200/50">
            <div className="flex gap-2">
                {langs.map((l) => (
                <button
                    key={l.code}
                    onClick={() => { setLang(l.code); setMobileMenuOpen(false); }}
                    className={`px-3 py-1.5 rounded text-[13px] font-semibold transition-colors ${
                    currentLang === l.code 
                      ? 'bg-apple-dark text-white' 
                      : 'text-apple-gray hover:text-apple-dark hover:bg-gray-100'
                    }`}
                >
                    {l.label}
                </button>
                ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};