import React from 'react';
import { BlogPost } from '../types';
import PostCard from './PostCard';

interface PostListProps {
  posts: BlogPost[];
  onPostClick: (post: BlogPost) => void;
}

const PostList: React.FC<PostListProps> = ({ posts, onPostClick }) => {
  return (
    <div className="animate-fade-in">
      
      {/* Section Header */}
      <div className="mb-10 flex items-end justify-between border-b border-gray-100 pb-4">
        <h2 className="text-4xl font-serif font-light text-ink">Journal</h2>
        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest hidden sm:block">
            Showing {posts.length} Stories
        </span>
      </div>

      {/* Mosaic/Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 auto-rows-fr">
        {posts.map((post, index) => {
            // Layout Logic:
            // Index 0: Full width (Hero)
            // Index 3, 6, 9...: Full width to break the rhythm
            // Others: Half width
            const isFullWidth = index === 0 || index % 3 === 0;
            
            return (
                <div 
                    key={post.id} 
                    className={`${isFullWidth ? 'md:col-span-2' : 'md:col-span-1'}`}
                >
                    <PostCard 
                        post={post} 
                        onClick={onPostClick} 
                        variant={isFullWidth ? 'wide' : 'compact'}
                    />
                </div>
            );
        })}
      </div>

      {/* Load More */}
      <div className="mt-16 text-center">
        <button className="px-8 py-3 border border-gray-200 rounded-full text-sm font-medium text-gray-500 hover:text-ink hover:border-ink transition-all duration-300">
            Load Older Stories
        </button>
      </div>
    </div>
  );
};

export default PostList;