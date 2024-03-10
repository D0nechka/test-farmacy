import { ReactNode } from 'react';
import cls from './style.module.scss';

interface VerticalCardProps {
    icon:ReactNode,
    description:ReactNode
    title:string,
    boldTitle:string,
}

export const VerticalCard = ({ icon, title, boldTitle, description, }: VerticalCardProps) => {
  return(
    <div className={cls.card}>
      <div className={cls.icon}>{icon}</div>
      <div className={cls.title}>
        <span className={cls.titleTxt}>{title}</span>
        <p className={cls.boldTxt}>{boldTitle}</p>
      </div>
      <div className={cls.description}>
        <span className={cls.descriptionTxt}>{description}</span>
      </div>
    </div>
  );
};

