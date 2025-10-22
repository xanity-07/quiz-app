import type { ReactNode } from 'react';

export const MainContent = ({ children }: { children: ReactNode }) => {
  return <main className='main'>{children}</main>;
};
