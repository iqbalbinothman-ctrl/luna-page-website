import React, { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Comparison } from './components/Comparison';
import { Portfolio } from './components/Portfolio';
import { Pricing } from './components/Pricing';
import { Process } from './components/Process';
import { Footer } from './components/Footer';
import { translations } from './translations';

export type Language = 'en' | 'ms' | 'zh' | 'ta';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('en');
  const content = translations[lang];

  // Smooth scroll behavior for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');
      if (link && link.hash && link.hash.startsWith('#')) {
        e.preventDefault();
        const element = document.querySelector(link.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="font-sans min-h-screen flex flex-col overflow-x-hidden">
      <Navbar currentLang={lang} setLang={setLang} content={content.nav} />
      <main className="flex-grow">
        <Hero content={content.hero} />
        <Comparison content={content.comparison} />
        <Portfolio content={content.portfolio} />
        <Pricing content={content.pricing} />
        <Process content={content.process} />
      </main>
      <Footer content={content.footer} />
    </div>
  );
};

export default App;