import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from '~/store/hook';

import PageHeader from '../PageHeader';
import HCSearchBar from '~/components/SearchBar';
import HCPill, { PillItem, PillValue } from '~/components/Pill';
import HCTabBar from '~/components/TabBar';
import HCButton from '~/components/Button';
import HCBottomSheet from '~/components/BottomSheet';
import HCInput from '~/components/Input';
import PlanDetail from '../PlanDetail';
import HCList from '~/components/List';

import { WORKOUTPLAN } from '~/enums/exercise';

import EmptyFitnessPlan from '~/assets/img/empty-fitnessplan.svg';

interface Props {
  children?: React.ReactNode;
}

const dummyPlanList = [{ name: '國際練胸日', idList: [1, 10] }];

const Plan: React.FC<Props> = (props: Props) => {
  const { t } = useTranslation('translation', { keyPrefix: 'exercise' });

  const headerRef = useRef<HTMLElement>(null);
  const [headerHeight, setHeaderHeight] = useState(0);
  const footerRef = useRef<HTMLElement>(null);
  const [footerHeight, setFooterHeight] = useState(0);
  const pillList: PillItem[] = [
    { label: t('all-workout-plan'), value: WORKOUTPLAN.ALL },
    { label: t('upper-workout-plan'), value: WORKOUTPLAN.UPPER },
    { label: t('lower-workout-plan'), value: WORKOUTPLAN.LOWER },
    { label: t('core-workout-plan'), value: WORKOUTPLAN.CORE },
  ];
  const [searchText, setSearchText] = useState('');
  const [activePillKey, setActivePillKey] = useState<PillValue>(WORKOUTPLAN.ALL);
  const [planList, setPlanList] = useState([]);
  const [showCreatePlan, setShowCreatePlan] = useState(false);
  const [planName, setPlanName] = useState('');
  const user = useAppSelector((state) => state.user.user);

  useEffect(() => {
    if (headerRef.current) setHeaderHeight(headerRef.current.clientHeight);
    if (footerRef.current) setFooterHeight(footerRef.current.clientHeight);
  }, [headerRef, footerRef]);

  const closeAddPlanHandler = () => {
    setShowCreatePlan(false);
    setPlanName('');
  };

  const addPlanHandler = () => {
    console.log({ userId: user.id, name: planName, exerciseIdList: [] });
    setShowCreatePlan(false);
    setShowAddPage(true);
  };

  /** Add page */
  const [showAddPage, setShowAddPage] = useState(false);

  return (
    <div className='relative h-screen flex flex-col overflow-hidden'>
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
          <div className='h-full flex flex-col items-center justify-center px-4'>
            <img src={EmptyFitnessPlan} alt='empty fitness plan' className='mb-6' />
            <h3 className='text-heading-m mb-6 px-15 text-center'>{t('empty-fitness-plan')}</h3>
            <HCButton color='highlight' block={false} onClick={() => setShowCreatePlan(true)}>
              {t('make-workout-plan-immediately')}
            </HCButton>
          </div>
        ) : (
          // <HCList />
          ''
        )}
      </main>
      <footer ref={footerRef} className='fixed left-0 bottom-0 w-full'>
        <HCTabBar />
      </footer>

      {/* Bottom sheet */}
      <HCBottomSheet
        show={showCreatePlan}
        header={t('make-new-workout-plan')}
        keyboard
        onClose={closeAddPlanHandler}
      >
        <HCInput
          value={planName}
          placeholder={t('input-workout-plan-name')}
          onChange={(e) => setPlanName(e.target.value)}
          className='mb-3'
        />
        <HCButton color='highlight' disabled={!planName} onClick={addPlanHandler}>
          {t('make-workout-plan')}
        </HCButton>
      </HCBottomSheet>

      {/* Add or edit page */}
      <PlanDetail show={showAddPage} title={planName} onClose={() => setShowAddPage(false)} />
    </div>
  );
};

export default Plan;
