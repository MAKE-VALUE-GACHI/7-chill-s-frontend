'use client'
import React, { useState, ReactNode } from 'react';
import { ModalContext } from '@/contexts/ModalContext';
import { WritePostModal } from '@/components/ui/modals/WritePostModal';

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalType, setModalType] = useState<string | null>(null);

  const openModal = (type: string) => {
    setModalType(type);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setModalType(null);
  };

  const renderModal = () => {
    if (!isOpen) return null;

    switch (modalType) {
      case 'writePost':
        return <WritePostModal />;
      default:
        return null;
    }
  };

  return (
    <ModalContext.Provider value={{ isOpen, modalType, openModal, closeModal }}>
      {children}
      {renderModal()}
    </ModalContext.Provider>
  );
};