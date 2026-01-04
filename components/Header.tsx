import React, { useState, useEffect } from 'react';

interface HeaderProps {
  onGoHome: () => void;
}

const CAROUSEL_SLIDES = [
  {
    id: 1,
    image: 'https://picsum.photos/seed/archi1/1200/600',
    title: 'Architecture of Silence',
    subtitle: 'Exploring minimalism in modern spaces'
  },
  {
    id: 2,
    image: 'https://picsum.photos/seed/nature2/1200/600',
    title: 'Return to Nature',
    subtitle: 'Finding peace in the deep forests of Kyoto'
  },
  {
    id: 3,
    image: 'https://picsum.photos/seed/coffee3/1200/600',
    title: 'The Perfect Brew',
    subtitle: 'A morning ritual that defines the day'
  }
];

const Header: React.FC<HeaderProps> = ({ onGoHome }) => {
  // --- Scroll Progress State ---
  const [progress, setProgress] = useState(0);

  // --- Carousel State ---
  const [currentSlide, setCurrentSlide] = useState(0);

  // Scroll Listener
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const range = 250; // Scroll distance to complete the transition
      const newProgress = Math.min(Math.max(scrollY / range, 0), 1);
      setProgress(newProgress);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-play Carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % CAROUSEL_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // --- Lerp Helper ---
  const lerp = (start: number, end: number, t: number) => start + (end - start) * t;

  // --- Dynamic Calculations ---
  
  // Dimensions
  const height = lerp(380, 60, progress); // Large Hero -> Compact Nav
  const margin = lerp(30, 0, progress);
  const radius = lerp(24, 0, progress);
  const paddingX = lerp(48, 24, progress);

  // Colors & Opacity
  // 0 = Expanded (Hero Mode), 1 = Collapsed (Nav Mode)
  
  // Carousel Opacity: Fades out quickly as we scroll
  const carouselOpacity = Math.max(0, 1 - progress * 1.5); 
  
  // Background Color: Transparent (show image) -> White Paper
  const bgOpacity = progress; // 0 -> 1
  
  // Text Color Interpolation: White (255) to Ink (44)
  // Simple check: if progress > 0.5 use dark text, else white
  const isDarkText = progress > 0.6;
  const textColorClass = isDarkText ? 'text-ink' : 'text-white';
  const subTextColorClass = isDarkText ? 'text-gray-500' : 'text-gray-200';
  const buttonBorderClass = isDarkText ? 'border-gray-200 hover:bg-ink hover:text-white' : 'border-white/30 text-white hover:bg-white hover:text-ink';

  return (
    <header 
      className="fixed z-50 overflow-hidden shadow-xl transition-all duration-100 ease-out will-change-[height,top,left,right,border-radius]"
      style={{
        top: `${margin}px`,
        left: `${margin}px`,
        right: `${margin}px`,
        height: `${height}px`,
        borderRadius: `${radius}px`,
        // Dynamic box shadow
        boxShadow: progress > 0.8 
            ? '0 1px 2px 0 rgb(0 0 0 / 0.05)' 
            : '0 20px 50px -12px rgb(0 0 0 / 0.25)'
      }}
    >
      {/* 
        -----------------------------
        LAYER 1: The Carousel Background
        (Visible when expanded)
        -----------------------------
      */}
      <div 
        className="absolute inset-0 z-0 bg-gray-900 transition-opacity duration-300 pointer-events-none"
        style={{ opacity: carouselOpacity }}
      >
         {CAROUSEL_SLIDES.map((slide, index) => (
             <div 
                key={slide.id}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
             >
                 {/* Image */}
                 <img src={slide.image} alt="" className="w-full h-full object-cover opacity-80" />
                 {/* Dark Overlay gradient for text readability */}
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
             </div>
         ))}

         {/* Hero Text Content (Fades out on scroll) */}
         <div className="absolute bottom-12 left-12 max-w-2xl transform transition-transform duration-300"
              style={{ transform: `translateY(${progress * -50}px)` }}
         >
             <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-2 leading-tight drop-shadow-lg">
                {CAROUSEL_SLIDES[currentSlide].title}
             </h2>
             <p className="text-lg text-gray-200 font-light drop-shadow-md">
                {CAROUSEL_SLIDES[currentSlide].subtitle}
             </p>
         </div>
         
         {/* Carousel Indicators */}
         <div className="absolute bottom-6 right-12 flex gap-2">
            {CAROUSEL_SLIDES.map((_, idx) => (
                <div 
                    key={idx} 
                    className={`h-1 rounded-full transition-all duration-300 ${idx === currentSlide ? 'w-8 bg-white' : 'w-2 bg-white/40'}`}
                />
            ))}
         </div>
      </div>

      {/* 
        -----------------------------
        LAYER 2: The White Background Overlay
        (Fades in when scrolling down to become the navbar)
        -----------------------------
      */}
      <div 
        className="absolute inset-0 z-10 bg-paper/95 backdrop-blur-md pointer-events-none"
        style={{ opacity: bgOpacity }}
      />

      {/* 
        -----------------------------
        LAYER 3: Navigation Elements
        (Always visible, changes color)
        -----------------------------
      */}
      <div 
        className="relative z-20 flex items-center justify-between h-full w-full select-none"
        style={{ 
            paddingLeft: `${paddingX}px`, 
            paddingRight: `${paddingX}px`,
            alignItems: progress > 0.8 ? 'center' : 'flex-start',
            paddingTop: progress > 0.8 ? '0' : '32px' // Push nav to top when expanded
        }}
      >
        {/* Logo */}
        <div 
          className="cursor-pointer group flex items-center gap-3 transition-colors duration-300"
          onClick={onGoHome}
        >
          <div className={`
            rounded-full flex items-center justify-center font-bold shadow-sm transition-all duration-500
            ${isDarkText ? 'bg-ink text-white' : 'bg-white text-ink'}
            ${progress > 0.8 ? 'w-8 h-8 text-xs' : 'w-10 h-10 text-sm'}
          `}>
             A.
          </div>
          <span className={`font-bold tracking-tight text-2xl transition-colors duration-300 ${textColorClass}`}>
            AniBlog
          </span>
        </div>
        
        {/* Nav Links */}
        <nav className={`hidden md:flex items-center gap-8 transition-colors duration-300 ${isDarkText ? 'text-gray-500' : 'text-white/90'}`}>
          {['Journal', 'Projects', 'About'].map((item) => (
            <button 
              key={item}
              className={`font-medium text-sm hover:opacity-100 opacity-80 transition-all relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[1px] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 ${isDarkText ? 'hover:text-ink after:bg-ink' : 'hover:text-white after:bg-white'}`}
            >
              {item}
            </button>
          ))}
        </nav>

        {/* Action Button */}
        <button 
          className={`
            font-medium border rounded-full transition-all duration-300 
            ${buttonBorderClass}
            ${progress > 0.8 ? 'px-5 py-1.5 text-xs' : 'px-6 py-2 text-sm'}
          `}
        >
          Subscribe
        </button>
      </div>

    </header>
  );
};

export default Header;