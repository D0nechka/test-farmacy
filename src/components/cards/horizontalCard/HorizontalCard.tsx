import { ReactNode } from 'react';
import cls from './style.module.scss';

export const HorizontalCard: React.FC<{children:ReactNode}> = ({ children, }) => {
  return(
    <div className={cls.card}>
      {children}
    </div>
  );
};
