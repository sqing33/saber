import React from 'react';

interface SidebarProps {
  onGoHome: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onGoHome }) => {
  return (
    // Changed top-24 to top-[80px] to sit nicely below the collapsed header (approx 48px + gap)
    <aside className="hidden lg:block w-full space-y-12 sticky top-[80px] h-fit transition-all duration-300">
      
      {/* Profile Widget */}
      <div className="flex flex-col items-start">
        <div 
            className="relative mb-6 group cursor-pointer"
            onClick={onGoHome}
        >
            <div className="absolute inset-0 bg-gray-200 rounded-full transform translate-x-2 translate-y-2 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform"></div>
            <img 
                src="https://picsum.photos/seed/avatar1/200/200" 
                alt="Author" 
                className="relative w-24 h-24 rounded-full object-cover border-2 border-white z-10 grayscale hover:grayscale-0 transition-all duration-500"
            />
        </div>
        <h3 
            className="font-bold text-xl text-ink mb-2 font-serif cursor-pointer hover:text-gray-600 transition-colors"
            onClick={onGoHome}
        >
            AniBlog Author
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-6 font-light">
           Exploring the intersection of minimalism, technology, and good coffee. 
           Curating thoughts on the modern web and slow living.
        </p>
        <button className="text-xs font-bold uppercase tracking-widest border-b border-ink pb-0.5 hover:text-gray-500 hover:border-gray-400 transition-colors">
            More about me
        </button>
      </div>

      {/* Categories Widget */}
      <div>
        <h4 className="font-bold text-sm text-ink uppercase tracking-widest mb-6 border-b border-gray-200 pb-2">
            Topics
        </h4>
        <div className="flex flex-col space-y-3">
            {[
                { name: 'Technology', count: 12 },
                { name: 'Lifestyle', count: 8 },
                { name: 'Travel', count: 5 },
                { name: 'Design', count: 15 },
            ].map(cat => (
                <a key={cat.name} href="#" className="group flex justify-between items-center text-sm text-gray-500 hover:text-ink transition-colors">
                    <span>{cat.name}</span>
                    <span className="text-xs bg-gray-100 px-2 py-0.5 rounded-full group-hover:bg-gray-200 transition-colors">{cat.count}</span>
                </a>
            ))}
        </div>
      </div>

      {/* Newsletter Widget - Minimal */}
      <div className="bg-gray-50 p-6 rounded-lg">
          <h4 className="font-bold text-ink mb-2">Weekly Digest</h4>
          <p className="text-xs text-gray-500 mb-4 font-light">
              No spam. Just the best links of the week.
          </p>
          <div className="flex flex-col gap-2">
            <input 
                type="email" 
                placeholder="Email address" 
                className="w-full bg-white border border-gray-200 px-3 py-2 text-xs rounded focus:outline-none focus:border-gray-400"
            />
            <button className="w-full bg-ink text-white text-xs font-bold py-2 rounded hover:bg-gray-800 transition-colors">
                Subscribe
            </button>
          </div>
      </div>

    </aside>
  );
};

export default Sidebar;