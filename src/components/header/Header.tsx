import { FirstVector, SecondVector, ThirdVector } from '@/components/icons/index';
import cls from './style.module.scss';

export const Header = () => {
  return (
    <div>
      <div className={cls.firstVector}>
        <FirstVector/>
      </div>
      <div className={cls.secondVector}>
        <SecondVector/>
      </div>
      <div className={cls.thirdVector}>
        <ThirdVector/>
      </div>
    </div>
  );
};