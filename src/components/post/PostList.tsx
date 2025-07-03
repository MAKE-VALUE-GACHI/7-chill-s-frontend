import React from 'react';
import { Heart, MessageCircle, MoreHorizontal } from 'lucide-react';
import { useModal } from '@/lib/hooks/useModal';
import { Post } from '@/types/modal.type';

export const PostList = () => {
  const { openModal } = useModal();

  const posts: Post[] = [
    {
      id: 1,
      author: 'dkzjakdkds',
      time: '18시간',
      verified: false,
      content: '출근은 어려워요...\n" 퇴근은 언제할까요.."\n"아홉시인데 아직도회사에요.."\n"아  나좀 집에 보내줘..."\n칠가이즈..인데 내일은 칠하지못해... 헤더헤헤더 를 붙여야해..',
      likes: 12,
      comments: 0,
      highlighted: false
    }
  ];

  return (
    <div className="max-w-2xl mx-auto bg-white min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b">
        <h1 className="text-xl font-bold">Chill's</h1>
        <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
          <span className="text-sm">🔔</span>
        </div>
      </div>

      {/* Posts List */}
      <div className="space-y-0">
        {posts.map((post) => (
          <div 
            key={post.id} 
            className="p-4 border-b border-gray-100"
          >
            {/* Post Header */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-purple-400 rounded-full flex items-center justify-center">
                  <span className="text-white font-medium">D</span>
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="font-medium">{post.author}</span>
                    <span className="text-sm text-gray-500">{post.time}</span>
                  </div>
                </div>
              </div>
              <button className="text-gray-400 hover:text-gray-600">
                <MoreHorizontal size={20} />
              </button>
            </div>

            {/* Post Content */}
            <div className="mb-3">
              <p className="text-gray-800 leading-relaxed whitespace-pre-line">
                {post.content}
              </p>
            </div>

            {/* Post Actions */}
            <div className="flex items-center space-x-6 text-gray-500">
              <button className="flex items-center space-x-2 hover:text-red-500 transition-colors">
                <Heart size={18} />
                <span className="text-sm">{post.likes}</span>
              </button>
              <button className="flex items-center space-x-2 hover:text-blue-500 transition-colors">
                <MessageCircle size={18} />
                <span className="text-sm">{post.comments}</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add Post Button */}
      <div className="fixed bottom-6 right-6">
        <button 
          onClick={() => openModal('writePost')}
          className="w-14 h-14 bg-black text-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-800 transition-colors"
        >
          <span className="text-2xl">+</span>
        </button>
      </div>
    </div>
  );
};