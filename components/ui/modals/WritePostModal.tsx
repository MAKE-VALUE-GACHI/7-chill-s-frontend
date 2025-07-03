'use client'
import React, { useState } from 'react';
import { X, Image, Smile } from 'lucide-react';
import { useModal } from '@/lib/hooks/useModal';

export const WritePostModal = () => {
  const { closeModal } = useModal();
  const [content, setContent] = useState('');

  const handleSubmit = () => {
    // 게시글 등록 로직
    console.log('게시글 내용:', content);
    closeModal();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-md mx-4 max-h-[90vh] overflow-hidden">
        {/* 모달 헤더 */}
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center space-x-3">
            <h2 className="text-lg font-semibold">새로운 게시글</h2>
          </div>
          <button 
            onClick={closeModal}
            className="text-gray-400 hover:text-gray-600"
          >
            <X size={24} />
          </button>
        </div>

        {/* 사용자 정보 */}
        <div className="p-4 border-b">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-orange-400 rounded-full flex items-center justify-center">
              <span className="text-white font-medium">N</span>
            </div>
            <div>
              <p className="font-medium">NANA0131</p>
              <p className="text-sm text-gray-500">어떤 글을 써볼까요?</p>
            </div>
          </div>
        </div>

        {/* 글 작성 영역 */}
        <div className="p-4">
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="새로운 이야기를 시작해보세요..."
            className="w-full h-32 p-3 border border-gray-200 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* 옵션 버튼들 */}
        <div className="px-4 py-2 border-t">
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-2 text-gray-500 hover:text-blue-500">
              <Image size={20} />
              <span className="text-sm">이미지 업로드</span>
            </button>
            <button className="flex items-center space-x-2 text-gray-500 hover:text-blue-500">
              <Smile size={20} />
              <span className="text-sm">이모지</span>
            </button>
          </div>
        </div>

        {/* 등록 버튼 */}
        <div className="p-4 border-t">
          <button
            onClick={handleSubmit}
            disabled={!content.trim()}
            className={`w-full py-2 px-4 rounded-lg font-medium transition-colors ${
              content.trim()
                ? 'bg-blue-500 text-white hover:bg-blue-600'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            게시
          </button>
        </div>
      </div>
    </div>
  );
};
