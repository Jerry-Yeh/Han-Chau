import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppSelector, useAppDispatch } from '~/store/hook';
import { PlusIcon } from '@heroicons/react/20/solid';

import PageHeader from '../PageHeader';
import HCSearchBar from '~/components/SearchBar';
import HCPill, { PillItem, PillValue } from '~/components/Pill';
import HCTabBar from '~/components/TabBar';
import HCButton from '~/components/Button';
import HCBottomSheet from '~/components/BottomSheet';
import HCInput, { InputChangeEventType } from '~/components/Input';
import PlanDetail from '../PlanDetail';
import ExerciseService from '~/services/exercise';
import { WORKOUTPLANFILTER } from '~/enums/exercise';
import HCFloatButton from '~/components/FloatButton';
import PlanList from '~/pages/Exercise/components/PlanList';
import { ListItemType } from '~/components/List';
import type { WorkoutPlan } from '~/pages/Exercise/interface';

import EmptyFitnessPlan from '~/assets/img/empty-fitnessplan.svg';

interface Props {
  children?: React.ReactNode;
}

const Plan: React.FC<Props> = (props: Props) => {
  const { t } = useTranslation('translation', { keyPrefix: 'exercise' });
  const dispatch = useAppDispatch();

  const user = useAppSelector((state) => state.user.user);
  const headerRef = useRef<HTMLElement>(null);
  const [headerHeight, setHeaderHeight] = useState(0);
  const footerRef = useRef<HTMLElement>(null);
  const [footerHeight, setFooterHeight] = useState(0);
  const pillList: PillItem[] = [
    { label: t('all-workout-plan'), value: WORKOUTPLANFILTER.ALL },
    { label: t('upper-workout-plan'), value: WORKOUTPLANFILTER.UPPER },
    { label: t('lower-workout-plan'), value: WORKOUTPLANFILTER.LOWER },
    { label: t('core-workout-plan'), value: WORKOUTPLANFILTER.CORE },
  ];
  const [searchText, setSearchText] = useState('');
  const [activePillKey, setActivePillKey] = useState<PillValue>(WORKOUTPLANFILTER.ALL);
  const planList = useAppSelector((state) => state.exercise.planList);
  const [filteredPlanList, setFilteredPlanList] = useState<WorkoutPlan[]>([]);
  const [showAddPlan, setShowAddPlan] = useState(false);
  const selectedPlan = useAppSelector((state) => state.exercise.selectedPlan);
  const [showDetailPage, setShowDetailPage] = useState(false);

  useEffect(() => {
    if (headerRef.current) setHeaderHeight(headerRef.current.clientHeight);
    if (footerRef.current) setFooterHeight(footerRef.current.clientHeight);
  }, [headerRef, footerRef]);

  useEffect(() => {
    const resetCurrentPlan = () => {
      dispatch({
        type: 'exercise/setSelectedPlan',
        payload: {
          id: '',
          userId: user.id as string,
          name: '',
          challenge: 1,
          upperLowerCoreList: [],
          modalityList: [],
          exerciseList: [],
        },
      });
    };

    const queryWorkoutPlans = async () => {
      if (user.id && !showDetailPage) {
        const data = await ExerciseService.queryWorkoutPlans(user.id);

        dispatch({
          type: 'exercise/setPlanList',
          payload: data.map((item) => ExerciseService.transPlanFromRawData(item)),
        });
        resetCurrentPlan();
      }
    };

    queryWorkoutPlans();
  }, [user.id, showDetailPage, dispatch]);

  useEffect(() => {
    setFilteredPlanList(
      activePillKey === WORKOUTPLANFILTER.ALL
        ? planList
        : planList.filter((plan) =>
            plan.exerciseList.some((exercise) => exercise.modality === activePillKey),
          ),
    );
  }, [activePillKey, planList]);

  const closeAddPlanHandler = () => {
    setShowAddPlan(false);
    dispatch({
      type: 'exercise/setSelectedPlan',
      payload: {
        ...selectedPlan,
        name: '',
      },
    });
  };

  const addPlanHandler = () => {
    if (user.id) {
      const { id: _id, ...rest } = ExerciseService.transPlanToRawData(selectedPlan);
      ExerciseService.addWorkoutPlan(rest);
    }
    setShowAddPlan(false);
    setShowDetailPage(true);
  };

  const handleClickItem = (item: ListItemType) => {
    const clickedPlan = planList.find((plan) => plan.id === item.key);

    if (clickedPlan) {
      // setPlan(clickedPlan);
      dispatch({
        type: 'exercise/setSelectedPlan',
        payload: clickedPlan,
      });
      setShowDetailPage(true);
    }
  };

  const handleChangePlanName = (e: InputChangeEventType) => {
    dispatch({
      type: 'exercise/setSelectedPlan',
      payload: { ...selectedPlan, name: e.target.value },
    });
  };

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
            <HCButton color='highlight' block={false} onClick={() => setShowAddPlan(true)}>
              {t('make-workout-plan-immediately')}
            </HCButton>
          </div>
        ) : (
          <div className='relative h-full'>
            <PlanList data={filteredPlanList} onClick={handleClickItem} />
            <HCFloatButton onClick={() => setShowAddPlan(true)}>
              <PlusIcon />
            </HCFloatButton>
          </div>
        )}
      </main>
      <footer ref={footerRef} className='fixed left-0 bottom-0 w-full'>
        <HCTabBar />
      </footer>

      {/* Add plan */}
      <HCBottomSheet
        show={showAddPlan}
        title={t('make-new-workout-plan')}
        keyboard
        onClose={closeAddPlanHandler}
      >
        <div className='px-4 pt-4'>
          <HCInput
            value={selectedPlan.name}
            placeholder={t('input-workout-plan-name')}
            onChange={handleChangePlanName}
            className='mb-3'
          />
          <HCButton color='highlight' disabled={!selectedPlan.name} onClick={addPlanHandler}>
            {t('make-workout-plan')}
          </HCButton>
        </div>
      </HCBottomSheet>

      {/* Add or edit plan page */}
      <PlanDetail show={showDetailPage} onClose={() => setShowDetailPage(false)} />
    </div>
  );
};

export default Plan;
