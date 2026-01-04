import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="mt-20 py-12 border-t border-gray-100 bg-white">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
           <p className="font-bold text-lg mb-1">AniBlog.</p>
           <p className="text-xs text-gray-400">Minimalist journal for the modern web.</p>
        </div>
        
        <div className="flex gap-8 text-sm font-medium text-gray-500">
           <a href="#" className="hover:text-ink transition-colors">Twitter</a>
           <a href="#" className="hover:text-ink transition-colors">Instagram</a>
           <a href="#" className="hover:text-ink transition-colors">RSS</a>
        </div>
        
        <p className="text-xs text-gray-300">© {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;