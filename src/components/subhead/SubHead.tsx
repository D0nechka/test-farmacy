import { SubVector } from '@/components/icons/index';
import { ReactNode } from 'react';
import cls from './style.module.scss';

export const SubHead: React.FC<{ children: ReactNode }> = ({ children, }) => {
  return (
    <div className={cls.subHeader}>
      <div className={cls.subVector}>
        <SubVector/>
      </div>
      <div className={cls.subTxt}>
        {children}
      </div>
    </div>
  );
};