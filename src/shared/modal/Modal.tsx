import { ReactNode } from 'react';
import cls from './style.module.scss';

interface ModalProps {
    active: boolean;
    children: ReactNode;
    setActive: (active: boolean) => void;
}

export const Modal = ({
  active,
  setActive,
  children,
}: ModalProps) => {

  if(!active) {
    return null;
  }

  return (
    <div className={active ? `${cls.modalBg} ${cls.active}` : cls.modalBg} onClick={() => { setActive(false); }}>
      <div className={cls.modal} onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};