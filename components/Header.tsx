import React, { useState, useEffect } from 'react';

interface HeaderProps {
  onGoHome: () => void;
}

const Header: React.FC<HeaderProps> = ({ onGoHome }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Threshold: when scrolled down more than 50px, switch style
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* 
        Header Container 
        - Transition duration-500 for smooth "gradual" effect
        - Cubic-bezier for a sophisticated feel
      */}
      <header 
        className={`fixed z-50 flex items-center justify-between bg-paper/95 backdrop-blur-md border-gray-200 transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]
          ${isScrolled 
            ? 'top-0 left-0 right-0 h-[48px] rounded-none px-6 border-b shadow-sm' 
            : 'top-[30px] left-[30px] right-[30px] h-[120px] rounded-2xl px-10 border shadow-xl shadow-gray-200/50'
          }
        `}
      >
        {/* Logo Section */}
        <div 
          className="cursor-pointer group flex items-center gap-3"
          onClick={onGoHome}
        >
          <div className={`bg-ink rounded-full flex items-center justify-center text-white font-bold transition-all duration-500 ${isScrolled ? 'w-6 h-6 text-[10px]' : 'w-10 h-10 text-sm'}`}>
             A.
          </div>
          <span className={`font-bold text-ink tracking-tight transition-all duration-500 ${isScrolled ? 'text-sm' : 'text-2xl'}`}>
            AniBlog
          </span>
        </div>
        
        {/* Nav Links */}
        <nav className={`hidden md:flex items-center transition-all duration-500 ${isScrolled ? 'gap-6 text-xs' : 'gap-10 text-sm'}`}>
          {['Journal', 'Projects', 'About'].map((item) => (
            <button 
              key={item}
              className="font-medium text-gray-500 hover:text-ink transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[1px] after:bg-ink after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
            >
              {item}
            </button>
          ))}
        </nav>

        {/* Action Button */}
        <button 
          className={`font-medium border border-gray-200 rounded-full hover:border-ink hover:bg-ink hover:text-white transition-all duration-500 
            ${isScrolled 
              ? 'px-4 py-1 text-xs bg-ink text-white border-ink' 
              : 'px-6 py-3 text-sm'
            }
          `}
        >
          Subscribe
        </button>
      </header>
    </>
  );
};

export default Header;