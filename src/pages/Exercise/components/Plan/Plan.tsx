import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import PageHeader from '../PageHeader';
import HCSearchBar from '~/components/SearchBar';
import HCPill, { PillItem, PillValue } from '~/components/Pill';
import HCTabBar from '~/components/TabBar';
import HCButton from '~/components/Button';
import HCBottomSheet from '~/components/BottomSheet';
import HCInput from '~/components/Input';
import AddPlan from '../AddPlan';

import { WORKOUTPLAN } from '~/enums/exercise';

import EmptyFitnessPlan from '~/assets/img/empty-fitnessplan.svg';

interface Props {
  children?: React.ReactNode;
}

const Plan: React.FC<Props> = (props: Props) => {
  const { t } = useTranslation('translation', { keyPrefix: 'exercise' });

  const headerRef = useRef<HTMLElement>(null);
  const [headerHeight, setHeaderHeight] = useState(0);
  const footerRef = useRef<HTMLElement>(null);
  const [footerHeight, setFooterHeight] = useState(0);
  const pillList: PillItem[] = [
    { label: t('my-workout-plan'), value: WORKOUTPLAN.MINE },
    { label: t('chest-workout-plan'), value: WORKOUTPLAN.CHEST },
    { label: t('legs-workout-plan'), value: WORKOUTPLAN.LEGS },
    { label: t('back-workout-plan'), value: WORKOUTPLAN.BACK },
  ];
  const [searchText, setSearchText] = useState('');
  const [activePillKey, setActivePillKey] = useState<PillValue>(WORKOUTPLAN.MINE);
  const [planList, setPlanList] = useState([]);
  const [showCreatePlan, setShowCreatePlan] = useState(false);
  const [planName, setPlanName] = useState('');

  useEffect(() => {
    if (headerRef.current) setHeaderHeight(headerRef.current.clientHeight);
    if (footerRef.current) setFooterHeight(footerRef.current.clientHeight);
  }, [headerRef, footerRef]);

  const createPlanHandler = () => {
    setShowCreatePlan(false);
  };

  return (
    <div className='relative h-screen flex flex-col'>
      <header ref={headerRef}>
        <PageHeader>
          <HCSearchBar
            value={searchText}
            filter={false}
            placeholder={t('search-exercise')}
            className='mb-3'
            onChange={(e) => setSearchText(e.target.value)}
          />
          <HCPill
            activeKey={activePillKey}
            list={pillList}
            onChange={(nV) => setActivePillKey(nV)}
          />
        </PageHeader>
      </header>
      <main
        className='bg-tertiary'
        style={{ height: `calc(100vh - ${headerHeight}px - ${footerHeight}px)` }}
      >
        {planList.length === 0 ? (
          <div className='h-full flex flex-col items-center justify-center'>
            <img src={EmptyFitnessPlan} alt='empty fitness plan' className='mb-6' />
            <h3 className='text-heading-m mb-6'>{t('empty-fitness-plan')}</h3>
            <HCButton color='highlight' block={false} onClick={() => setShowCreatePlan(true)}>
              {t('make-workout-plan-immediately')}
            </HCButton>
          </div>
        ) : (
          ''
        )}
      </main>
      <footer ref={footerRef} className='fixed left-0 bottom-0 w-full'>
        <HCTabBar />
      </footer>
      <HCBottomSheet
        show={showCreatePlan}
        header={t('make-new-workout-plan')}
        keyboard
        onClose={() => setShowCreatePlan(false)}
      >
        <HCInput
          value={planName}
          placeholder={t('input-workout-plan-name')}
          onChange={(e) => setPlanName(e.target.value)}
          className='mb-3'
        />
        <HCButton color='highlight' disabled={!planName} onClick={createPlanHandler}>
          {t('make-workout-plan')}
        </HCButton>
      </HCBottomSheet>
    </div>
  );
};

export default Plan;
