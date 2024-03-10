import cls from './style.module.scss';
import chart from '../../../../assets/chart.png';
import Image from 'next/image';

interface ModalEpidemologyProps {
    active: boolean;
    setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalEpidemology = ({ active, setActive, }: ModalEpidemologyProps) => {
  return (
    <div className={active ? `${cls.modalBg} ${cls.active}` : cls.modalBg} onClick={() => { setActive(false); }}>
      <div className={cls.modal} onClick={e => e.stopPropagation()}>
        <div className={cls.textBlock}>
          <span className='firstblock'>
            В десятилетнем исследовании
            <span className={cls.boldText}> «Генетическая эпидемиология ХОБЛ» (COPDGene) </span>
            среди пациентов с ХОБЛ, диагностированной до 55 лет,
            было выявлено
            <span className={cls.boldText}> преобладание женщин (66%), </span>
             а в возрасте 60-64 лет количество женщин и мужчин.
          </span>
          <span className='firstblock'>
           Такое эпидемиологическое распределение заболеваемости ХОБЛ может быть связано с тем,
           что дыхательные пути курящих женщин имеют более
            <span className={cls.boldText}> высокий процент площади стенок, </span>
            но меньшую площадь просвета, внутренний диаметр и толщину дыхательных путей
            по сравнению с курящими мужчинами.
          </span>
        </div>
        <Image
          src={chart}
          width={1211}
          height={389}
          alt='chart'
        />
      </div>
    </div>
  );
};