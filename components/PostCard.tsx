import React from 'react';
import { BlogPost } from '../types';
import { CATEGORY_COLORS } from '../constants';

interface PostCardProps {
  post: BlogPost;
  onClick: (post: BlogPost) => void;
  variant?: 'wide' | 'compact';
}

const PostCard: React.FC<PostCardProps> = ({ post, onClick, variant = 'compact' }) => {
  const categoryStyle = CATEGORY_COLORS[post.category] || 'bg-gray-100 text-gray-600';

  // Wide variant (Horizontal layout on desktop, stacked on mobile)
  if (variant === 'wide') {
    return (
        <article 
            className="group cursor-pointer h-full bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100/50"
            onClick={() => onClick(post)}
        >
            <div className="flex flex-col md:flex-row h-full">
                <div className="md:w-3/5 relative overflow-hidden h-64 md:h-auto">
                    <img 
                        src={post.coverImage} 
                        alt={post.title} 
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                        <span className={`px-3 py-1 rounded text-xs font-bold uppercase tracking-widest backdrop-blur-sm bg-white/90 text-ink shadow-sm`}>
                            {post.category}
                        </span>
                    </div>
                </div>
                <div className="md:w-2/5 p-6 md:p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-4 text-xs font-medium text-gray-400">
                        <span>{post.date}</span>
                        <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                        <span>{post.readTime}</span>
                    </div>
                    <h2 className="text-2xl font-bold text-ink mb-4 leading-tight group-hover:text-gray-600 transition-colors font-serif">
                        {post.title}
                    </h2>
                    <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 mb-6 font-light">
                        {post.excerpt}
                    </p>
                    <div className="mt-auto flex items-center gap-2">
                        <img src={post.author.avatar} alt={post.author.name} className="w-6 h-6 rounded-full grayscale opacity-70" />
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{post.author.name}</span>
                    </div>
                </div>
            </div>
        </article>
    );
  }

  // Compact variant (Vertical layout)
  return (
    <article 
      className="group cursor-pointer h-full flex flex-col bg-transparent"
      onClick={() => onClick(post)}
    >
      <div className="relative aspect-[3/2] overflow-hidden rounded-lg mb-4 bg-gray-100">
        <img 
          src={post.coverImage} 
          alt={post.title} 
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute top-3 left-3">
             <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase tracking-widest ${categoryStyle}`}>
                {post.category}
             </span>
        </div>
      </div>
      
      <div className="flex flex-col flex-1">
        <h2 className="text-lg font-bold text-ink mb-2 leading-tight group-hover:text-gray-600 transition-colors">
          {post.title}
        </h2>
        <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 font-light mb-3">
          {post.excerpt}
        </p>
        <div className="mt-auto pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-400">
            <span>{post.date}</span>
            <span>{post.readTime} read</span>
        </div>
      </div>
    </article>
  );
};

export default PostCard;