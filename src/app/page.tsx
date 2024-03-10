/* eslint-disable max-len */
'use client';
import { Header } from '@/components/header/Header';
import { SubHead } from '@/components/subhead/SubHead';
import { ArrowIcon, FirstButtonIcon, FirstIcon, SecSprayIcon, SecondButtonIcon, SecondIcon, SprayIcon, ThrdSprayIcon } from '../components/icons/index';
import { InfoBlock } from '@/components/infoBlock/InfoBlock';
import { VerticalCard } from '@/components/cards/verticalCard/VerticalCard';
import { HorizontalCard } from '@/components/cards/horizontalCard/HorizontalCard';
import { ModalEpidemology } from '@/components/modals/ModalEpidemiology/ModalEpidemiology';
import { ModalSurvivalRates } from '@/components/modals/ModalSurvivalRates/ModalSurvivalRates';
import { useState } from 'react';
import cls from '@/styles/page.module.scss';

export default function Home() {
  const [ modalActiveEpi, setModalActiveEpi ] = useState(false);
  const [ modalActiveSurv, setModalActiveSurv ] = useState(false);

  return (
    <main className={cls.main}>
      <ModalEpidemology active={modalActiveEpi} setActive={setModalActiveEpi}/>
      <ModalSurvivalRates active={modalActiveSurv} setActive={setModalActiveSurv}/>
      <Header/>
      <div className={cls.wrapper}>
        <div className={cls.firstChapter}>
          <SubHead>
            <span>ХОБЛ: мифы и реальность</span>
          </SubHead>
          <div className={cls.content}>
            <InfoBlock
              onClick={() => {setModalActiveEpi(true);}}
              buttonIcon={<FirstButtonIcon/>}
              id='1'
              icon = {<FirstIcon/>}
              title = {
                <span>ХОБЛ болеют
                  <p className={cls.angleBold}>преимущественно мужчины?</p>
                </span>
              }
              content = 'В десятилетнем исследовании «Генетическая эпидемиология ХОБЛ» (COPDGene) среди пациентов с ХОБЛ, диагностированной до 55 лет, было выявлено преобладание...'
            />
            <InfoBlock
              onClick={() => {setModalActiveSurv(true);}}
              buttonIcon={<SecondButtonIcon/>}
              id={cls.second}
              icon = {<SecondIcon/>}
              title = {
                <span>
                  <span className={cls.angleBold}>Опасно </span>
                    не наличие заболевания, а обострения?
                </span>
              }
              content = 'Большинство пациентов с ХОБЛ столкнется с обострениями: как минимум одно среднетяжелое или тяжелое обострение случится в течение...'
            />
          </div>
        </div>
        <div className={cls.secondChapter}>
          <SubHead>
            <span>Терапия ХОБЛ: что в фокусе?</span>
          </SubHead>
          <div className={cls.titleBlock}>
            <div className={cls.factBlock}>
              <span>Даже 1 среднетяжелое обострение — сигнал к увеличению объема терапии</span>
            </div>
            <div className={cls.subtitle}>
              <span>Приоритетные направления фармакотерапевтической стратегии при ХОБЛ<sup className={cls.sup}>1</sup>:</span>
            </div>
            <div className={cls.table}>
              <div className={cls.verticalBlock}>
                <VerticalCard
                  icon={<SprayIcon/>}
                  title={'Ингаляционный'}
                  boldTitle={'антихолинергик'}
                  description={<span>Ингибирует бронхоконстрикторные эффекты ацетилхолина, вступая с ним в конкурентный антагонизм за взаимодействие с эффекторными мускариновыми рецепторами, дополняет и потенцирует эффект β2-агонистов<sup>1</sup></span>}

                />
                <VerticalCard
                  icon={<SecSprayIcon/>}
                  title={'Ингаляционный'}
                  boldTitle={'β2-агонист'}
                  description={'Вызывает бронходилатацию посредством релаксации гладкомышечных клеток бронхов независимо от характера констриктивных стимулов, т. е. выступают в качестве функциональных антагонистов бронхоконстрикции'}
                />
                <VerticalCard
                  icon={<ThrdSprayIcon/>}
                  title={'Ингаляционный'}
                  boldTitle={'глюкокортикостероид (ИГКС)'}
                  description={'Снижает частоту обострений, особенно в сочетании с ДДБА, подавляют хроническое воспаление при астме и снижают гиперреактивность дыхательных путей'}
                />
              </div>
              <div className={cls.arrowsBlock}>
                <ArrowIcon/>
                <ArrowIcon/>
              </div>
              <div className={cls.horizontalBlock}>
                <HorizontalCard>
                  <span>
                      Пациентам с ХОБЛ рекомендуется комбинирование бронходилататоров с разными механизмами действия;
                    <p>
                      Назначение 2-х бронходилататоров из группы длительнодействующих β2-агонистов (ДДБА)
                      и длительнодействующих антихолинергиков (ДДАХ), действие которых дополняет и усиливает друг
                      друга<sup>1</sup> .
                    </p>
                  </span>
                </HorizontalCard>
                <HorizontalCard>
                  <span>
                    Пациентам с ХОБЛ и частыми обострениями
                    (≥2 среднетяжелых обострений в течение 1 года/1 тяжелое обострение, потребовавшее госпитализации)
                    рекомендуется назначение ИГКС в дополнение к ДДБА;
                    <p>
                      Последние исследования показали, что амбулаторное применение ИГКС/ДДБА у пациентов с
                    ХОБЛ снижает госпитальную летальность по сравнению с пациентами, принимавшими только ДДБА
                    (8,1% vs 13,2%)<sup>1</sup> .
                    </p>
                  </span>
                </HorizontalCard>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

