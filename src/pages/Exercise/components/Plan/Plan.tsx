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
import { HCList, HCListItem, ListItemType } from '~/components/List';
import ExerciseService, { WorkoutPlan } from '~/services/exercise';

import { WORKOUTPLAN } from '~/enums/exercise';

import EmptyFitnessPlan from '~/assets/img/empty-fitnessplan.svg';
import DefaultPlan from '~/assets/img/default-plan.svg';

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
    { label: t('all-workout-plan'), value: WORKOUTPLAN.ALL },
    { label: t('upper-workout-plan'), value: WORKOUTPLAN.UPPER },
    { label: t('lower-workout-plan'), value: WORKOUTPLAN.LOWER },
    { label: t('core-workout-plan'), value: WORKOUTPLAN.CORE },
  ];
  const [searchText, setSearchText] = useState('');
  const [activePillKey, setActivePillKey] = useState<PillValue>(WORKOUTPLAN.ALL);
  const [planList, setPlanList] = useState<WorkoutPlan[]>([]);
  const [showCreatePlan, setShowCreatePlan] = useState(false);
  const [plan, setPlan] = useState<WorkoutPlan>({
    id: '',
    userId: '',
    name: '',
    exerciseIdList: [],
  });
  const user = useAppSelector((state) => state.user.user);

  useEffect(() => {
    if (headerRef.current) setHeaderHeight(headerRef.current.clientHeight);
    if (footerRef.current) setFooterHeight(footerRef.current.clientHeight);
  }, [headerRef, footerRef]);

  useEffect(() => {
    const queryWorkoutPlans = async () => {
      if (user.id) {
        const data = await ExerciseService.queryWorkoutPlans(user.id);

        setPlanList(data);
      }
    };

    queryWorkoutPlans();
  }, [user.id]);

  const closeAddPlanHandler = () => {
    setShowCreatePlan(false);
    setPlan((prev) => ({ ...prev, name: '' }));
  };

  const addPlanHandler = () => {
    if (user.id) {
      const { id, ...rest } = plan;
      ExerciseService.addWorkoutPlan(rest);
    }
    setShowCreatePlan(false);
    setShowDetailPage(true);
  };

  const clickItemHandler = (item: ListItemType) => {
    const clickedPlan = planList.find((plan) => plan.id === item.key);

    if (clickedPlan) {
      setPlan(clickedPlan);
      setShowDetailPage(true);
    }
  };

  /** Detail page */
  const [showDetailPage, setShowDetailPage] = useState(false);

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
          <HCList
            data={planList.map((item) => ({
              key: item.id,
              title: item.name,
              img: <img src={DefaultPlan} alt='default' />,
            }))}
            bleed={false}
            renderItem={(item) => (
              <HCListItem {...item} actionType='next' onClick={() => clickItemHandler(item)} />
            )}
          />
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
          value={plan.name}
          placeholder={t('input-workout-plan-name')}
          onChange={(e) => setPlan((prev) => ({ ...prev, name: e.target.value }))}
          className='mb-3'
        />
        <HCButton color='highlight' disabled={!plan.name} onClick={addPlanHandler}>
          {t('make-workout-plan')}
        </HCButton>
      </HCBottomSheet>

      {/* Add or edit page */}
      <PlanDetail
        show={showDetailPage}
        plan={plan}
        setPlan={setPlan}
        onClose={() => setShowDetailPage(false)}
      />
    </div>
  );
};

export default Plan;
