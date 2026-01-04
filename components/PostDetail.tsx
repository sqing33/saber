import React, { useEffect } from 'react';
import { BlogPost } from '../types';
import { CATEGORY_COLORS } from '../constants';

interface PostDetailProps {
  post: BlogPost;
  onBack: () => void;
}

const PostDetail: React.FC<PostDetailProps> = ({ post, onBack }) => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [post.id]);

  return (
    <article className="animate-fade-in pt-8 pb-20">
      
      {/* Back Link */}
      <button 
        onClick={onBack}
        className="group flex items-center gap-2 text-sm text-gray-400 hover:text-ink transition-colors mb-12"
      >
        <span className="block transform group-hover:-translate-x-1 transition-transform">←</span>
        <span>Back to Journal</span>
      </button>

      {/* Article Header */}
      <header className="max-w-3xl mx-auto text-center mb-16">
        <div className="flex justify-center mb-6">
             <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-bold uppercase tracking-widest">
                {post.category}
             </span>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold text-ink mb-8 leading-tight">
          {post.title}
        </h1>
        <div className="flex items-center justify-center gap-6 text-sm text-gray-500 font-medium">
             <div className="flex items-center gap-2">
                 <img src={post.author.avatar} className="w-8 h-8 rounded-full grayscale" />
                 <span>{post.author.name}</span>
             </div>
             <span>•</span>
             <span>{post.date}</span>
             <span>•</span>
             <span>{post.readTime}</span>
        </div>
      </header>

      {/* Featured Image - Wide */}
      <div className="max-w-5xl mx-auto mb-16 rounded-lg overflow-hidden bg-gray-100">
         <img src={post.coverImage} className="w-full h-auto max-h-[600px] object-cover" />
      </div>

      {/* Article Content */}
      <div className="max-w-2xl mx-auto">
        <div 
            className="prose prose-lg prose-gray prose-headings:font-bold prose-headings:text-ink prose-p:font-light prose-p:text-gray-700 prose-a:text-gray-900 prose-a:no-underline hover:prose-a:underline prose-img:rounded-lg"
            dangerouslySetInnerHTML={{ __html: post.content }}
        />
        
        {/* Tags */}
        <div className="mt-16 pt-8 border-t border-gray-100 flex gap-3 flex-wrap">
            {post.tags.map(tag => (
                <span key={tag} className="text-xs font-bold text-gray-400 uppercase tracking-widest hover:text-ink cursor-pointer transition-colors">
                    #{tag}
                </span>
            ))}
        </div>
      </div>
    </article>
  );
};

export default PostDetail;