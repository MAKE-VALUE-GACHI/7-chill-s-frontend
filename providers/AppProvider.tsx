'use client';

import { ModalProvider } from '@/providers/ModalProvider';

export default function AppProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ModalProvider>
      {children}
    </ModalProvider>
  );
}