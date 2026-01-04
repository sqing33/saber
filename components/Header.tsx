import React, { useState, useEffect } from 'react';

interface HeaderProps {
  onGoHome: () => void;
}

const Header: React.FC<HeaderProps> = ({ onGoHome }) => {
  // Progress goes from 0 (top) to 1 (fully scrolled state)
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Define the distance over which the transition happens (e.g., 100px)
      const range = 100; 
      
      // Calculate progress: 0 at top, 1 at 100px+
      const newProgress = Math.min(Math.max(scrollY / range, 0), 1);
      
      // Only update state if needed to avoid excessive re-renders (though React 18 handles this well)
      // Here we allow direct updates for smoothness
      setProgress(newProgress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initialize on mount
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Linear Interpolation Helper
  const lerp = (start: number, end: number, t: number) => start + (end - start) * t;

  // Dynamic Styles Calculation
  const containerStyle: React.CSSProperties = {
    top: `${lerp(30, 0, progress)}px`,
    left: `${lerp(30, 0, progress)}px`,
    right: `${lerp(30, 0, progress)}px`,
    height: `${lerp(120, 56, progress)}px`, // 120px -> 56px (Standard Navbar Height)
    borderTopLeftRadius: `${lerp(16, 0, progress)}px`,
    borderTopRightRadius: `${lerp(16, 0, progress)}px`,
    borderBottomLeftRadius: `${lerp(16, 0, progress)}px`, // Rounded-2xl is ~16px
    borderBottomRightRadius: `${lerp(16, 0, progress)}px`,
    paddingLeft: `${lerp(40, 24, progress)}px`, // px-10 (40px) -> px-6 (24px)
    paddingRight: `${lerp(40, 24, progress)}px`,
    // Subtle shadow intensity change
    boxShadow: progress > 0.5 
      ? '0 1px 2px 0 rgb(0 0 0 / 0.05)' 
      : '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)'
  };

  // Logo Scale Calculation (1 -> 0.7)
  const logoScale = lerp(1, 0.7, progress);
  // Text Opacity/Transition Logic for logo
  const isCompact = progress > 0.8;

  return (
    <>
      <header 
        className="fixed z-50 flex items-center justify-between bg-paper/95 backdrop-blur-md border-gray-200 border transition-shadow duration-200 will-change-[height,top,left,right,border-radius]"
        style={containerStyle}
      >
        {/* Logo Section */}
        <div 
          className="cursor-pointer group flex items-center gap-3 origin-left"
          onClick={onGoHome}
          style={{ transform: `scale(${logoScale})` }}
        >
          <div className="bg-ink w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-sm">
             A.
          </div>
          <span className="font-bold text-ink tracking-tight text-2xl whitespace-nowrap">
            AniBlog
          </span>
        </div>
        
        {/* Nav Links - Fade out text size/gap slightly */}
        <nav 
          className="hidden md:flex items-center overflow-hidden"
          style={{ 
            gap: `${lerp(40, 24, progress)}px`, // gap-10 -> gap-6
          }}
        >
          {['Journal', 'Projects', 'About'].map((item) => (
            <button 
              key={item}
              className="font-medium text-gray-500 hover:text-ink transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[1px] after:bg-ink after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 whitespace-nowrap"
              style={{ fontSize: `${lerp(14, 13, progress)}px` }}
            >
              {item}
            </button>
          ))}
        </nav>

        {/* Action Button */}
        <button 
          className="font-medium border border-gray-200 rounded-full hover:border-ink hover:bg-ink hover:text-white transition-colors duration-300 whitespace-nowrap overflow-hidden flex items-center justify-center"
          style={{
            height: `${lerp(44, 32, progress)}px`,
            paddingLeft: `${lerp(24, 16, progress)}px`,
            paddingRight: `${lerp(24, 16, progress)}px`,
            fontSize: `${lerp(14, 12, progress)}px`,
            backgroundColor: progress > 0.8 ? '#2c2c2c' : 'transparent', // Switch to filled style when compact
            color: progress > 0.8 ? '#fff' : 'inherit',
            borderColor: progress > 0.8 ? '#2c2c2c' : '#e5e7eb'
          }}
        >
          Subscribe
        </button>
      </header>
    </>
  );
};

export default Header;