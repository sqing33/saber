import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import PostList from './components/PostList';
import PostDetail from './components/PostDetail';
import { BlogPost } from './types';
import { MOCK_POSTS } from './constants';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'list' | 'detail'>('list');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const handlePostClick = (post: BlogPost) => {
    setSelectedPost(post);
    setCurrentView('detail');
  };

  const handleGoHome = () => {
    setCurrentView('list');
    setSelectedPost(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-paper text-ink selection:bg-gray-200 flex flex-col">
      <Header onGoHome={handleGoHome} />
      
      {/* 
         Added pt-[180px] to main container:
         120px (Initial Header Height) + 30px (Top Margin) + 30px (Visual Gap) 
      */}
      <main className="flex-1 max-w-7xl mx-auto px-6 w-full pt-[180px] pb-12 transition-all duration-500">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Main Content (8 cols = ~66%) */}
            <div className="lg:col-span-8 w-full min-w-0">
                {currentView === 'list' ? (
                <PostList posts={MOCK_POSTS} onPostClick={handlePostClick} />
                ) : (
                selectedPost && (
                    <PostDetail post={selectedPost} onBack={handleGoHome} />
                )
                )}
            </div>

            {/* Right Column: User Sidebar (4 cols = ~33%) */}
            <div className="lg:col-span-4 w-full pl-4 border-l border-gray-100 hidden lg:block">
                <Sidebar onGoHome={handleGoHome} />
            </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;