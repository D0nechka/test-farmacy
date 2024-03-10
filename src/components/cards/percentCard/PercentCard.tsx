import { ReactNode } from 'react';
import cls from './style.module.scss';

interface PercentCardProps {
    icon: ReactNode
    percent: string
    text: ReactNode
    source:string
}

export const PercentCard = ({ percent, icon, text, source, }: PercentCardProps ) => {
  return (
    <div className={cls.card}>
      <div className={cls.icon}>
        {icon}
      </div>
      <div className={cls.percentage}>
        {percent}
      </div>
      <div className={cls.cardText}>
        {text}
      </div>
      <div className={cls.source}>
        {source}
      </div>
    </div>
  );
};