// Modal 관련 타입
export interface ModalContextType {
    isOpen: boolean;
    modalType: string | null;
    openModal: (type: string) => void;
    closeModal: () => void;
  }
  
  // Post 관련 타입
  export interface Post {
    id: number;
    author: string;
    time: string;
    verified: boolean;
    content: string;
    additionalText?: string;
    likes: number;
    comments: number;
    highlighted: boolean;
  }
  
  // 모달 타입들
  export type ModalType = 'writePost' | 'editPost' | 'deletePost';