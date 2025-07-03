'use client'
import React, { createContext } from 'react';
import { ModalContextType } from '@/types/modal.type';

export const ModalContext = createContext<ModalContextType | undefined>(undefined);