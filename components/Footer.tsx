import React from 'react';
import { MessageCircle } from 'lucide-react';

interface FooterProps {
  content: {
    tag: string;
    desc: string;
    wa: string;
    rights: string;
    links: string[];
  };
}

export const Footer: React.FC<FooterProps> = ({ content }) => {
  return (
    <footer id="footer" className="bg-apple-bg border-t border-gray-200 text-apple-dark py-10 md:py-12 text-[12px]">
      <div className="max-w-[1024px] mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-6 md:gap-0">
            <div>
                 <h2 className="font-semibold text-[14px] mb-1">{content.tag}</h2>
                 <p className="text-apple-gray max-w-xs">{content.desc}</p>
            </div>
            <div className="w-full md:w-auto">
                <a 
                  href="https://wa.me/" 
                  className="inline-flex w-full md:w-auto justify-center items-center gap-2 bg-[#25D366] text-white px-5 py-2.5 rounded-full font-medium hover:bg-[#20bd5a] transition-colors shadow-sm"
                >
                  <MessageCircle size={16} />
                  {content.wa}
                </a>
            </div>
        </div>
        
        <div className="border-t border-gray-300 pt-6 flex flex-col md:flex-row justify-between items-start md:items-center text-apple-gray gap-4 md:gap-0">
          <p className="mb-0">Copyright © {new Date().getFullYear()} {content.rights}</p>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 w-full md:w-auto">
            {content.links.map((link, idx) => (
              <a key={idx} href="#" className="hover:text-apple-dark transition-colors">{link}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};