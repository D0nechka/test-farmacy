'use client';

import { MouseEventHandler, ReactNode } from 'react';
import { AngledBlock } from '@/components/icons/index';
import cls from './style.module.scss';

interface InfoBlockProps {
    title:ReactNode,
    icon:ReactNode,
    buttonIcon:ReactNode,
    onClick:MouseEventHandler<HTMLDivElement>,
    content: string,
    id: string
}

export const InfoBlock = ({ title, content, icon, buttonIcon, id, onClick, }:InfoBlockProps) => {

  return (
    <div className={cls.infoBlock}
      id={id}
    >
      <div>
        {icon}
      </div>
      <div className={cls.angledBlock}>
        <div className={cls.angleTxt}>
          {title}
        </div>
        <AngledBlock/>
      </div>
      <div className={cls.mainContent}>
        {content}
      </div>
      <div
        className={cls.buttonIcon}
        onClick={onClick}
      >
        {buttonIcon}
      </div>
    </div>
  );
};