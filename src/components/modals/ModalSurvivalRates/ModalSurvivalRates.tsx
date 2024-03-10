/* eslint-disable max-len */
import { PercentCard } from '@/components/cards/percentCard/PercentCard';
import { BladderIcon, GuyIcon, HeartIcon } from '@/components/icons/index';
import cls from './style.module.scss';

export const ModalSurvivalRates = () => {
  return(
    <div className={cls.container}>
      <div className={cls.textBlock}>
        <div className={cls.boldTxt}>
          <span>
              Большинство пациентов с ХОБЛ столкнется с обострениями:
              как минимум одно среднетяжелое или тяжелое обострение случится в течение 3 лет у 77% пациентов<sup>1</sup> .
          </span>
        </div>
        <div className={cls.defaultTxt}>
              В течение 5 лет после первого тяжёлого обострения в живых остаются только 40% пациентов<sup>2</sup>. Прогноз после обострений ХОБЛ схож с таковым при сердечной недостаточности,
               инфаркте миокарда и некоторых злокачественных опухолях.
        </div>
      </div>
      <div className={cls.title}>
            Пятилетняя выживаемость пациентов
      </div>
      <div className={cls.cardBlock}>
        <PercentCard
          icon={<HeartIcon/>}
          percent={'45,5%'}
          text={<div>пациентов с <span className={cls.cardTextBold}> сердечной недостаточностью<sup>1</sup></span></div>}
          source='Популяционное когортное исследование (N=385)'
        />
        <PercentCard
          icon={<GuyIcon/>}
          percent='55,3%'
          text={<div>пациентов с <span className={cls.cardTextBold}>инфарктом миокарда<sup>1</sup></span></div>}
          source='Апостериорный анализ когортного исследования (N=2887)'
        />
        <PercentCard
          icon={<BladderIcon/>}
          percent='50,5%'
          text={<div>пациентов с <span className={cls.cardTextBold}>раком мочевого пузыря</span></div>}
          source='Исследование Национальной статистической службы (N=42642)'
        />
      </div>
    </div>
  );
};