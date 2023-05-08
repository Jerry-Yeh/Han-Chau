import React, { useState, useRef, useEffect, Fragment } from 'react';
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
import ExerciseFilter from '../ExerciseFilter';
import ExerciseDetail from '../ExerciseDetail';
import SelectPlan from '../SelectPlan';
import SetExercise from '../SetExercise/SetExercise';
import ExerciseList from '../ExerciseList';

import useFilterExercise from '~/hooks/Exercise/useFilterExercise';
import useQueryPlanList from '~/hooks/Exercise/useQueryPlanLsit';

import type { Exercise } from '~/static/exercise/data';
import type { WorkoutPlan, FilterType } from '~/pages/Exercise/interface';

import EmptyFitnessPlan from '~/assets/img/empty-fitnessplan.svg';

interface Props {
  children?: React.ReactNode;
}

const Plan: React.FC<Props> = () => {
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
  const [showMakePlan, setShowMakePlan] = useState(false);
  const selectedPlan = useAppSelector((state) => state.exercise.selectedPlan);
  const [showDetailPage, setShowDetailPage] = useState(false);
  const [filter, setFilter] = useState<FilterType>({
    muscleGroup: [],
    modalities: [],
    level: null,
  });

  useEffect(() => {
    if (headerRef.current) setHeaderHeight(headerRef.current.clientHeight);
    if (footerRef.current) setFooterHeight(footerRef.current.clientHeight);
  }, [headerRef, footerRef]);

  useQueryPlanList(!showDetailPage);

  useEffect(() => {
    setFilteredPlanList(
      activePillKey === WORKOUTPLANFILTER.ALL
        ? planList
        : planList.filter((plan) =>
            plan.exerciseList.some((exercise) => exercise.upperLowerCore === activePillKey),
          ),
    );
  }, [activePillKey, planList]);

  const closeAddPlanHandler = () => {
    setShowMakePlan(false);
    dispatch({
      type: 'exercise/setSelectedPlan',
      payload: {
        ...selectedPlan,
        name: '',
      },
    });
  };

  const addPlanHandler = async () => {
    if (user.id) {
      const { id: _id, ...rest } = ExerciseService.transPlanToRawData(selectedPlan);
      const id = await ExerciseService.addWorkoutPlan(rest);

      dispatch({
        type: 'exercise/setSelectedPlan',
        payload: {
          ...selectedPlan,
          id,
        },
      });
    }
    setShowMakePlan(false);
    setShowDetailPage(true);
  };

  const handleClickItem = (item: ListItemType) => {
    const clickedPlan = planList.find((plan) => plan.id === item.key);

    if (clickedPlan) {
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

  /** Show exercise list */
  const result = useFilterExercise(searchText, filter);
  const [isShowExerciseList, setShowExerciseList] = useState(false);
  const [selectedExercise, setSelectedExercise] = useState<Exercise>();

  const handleClickExercise = (id: number) => {
    const exercise = result.find((item) => item.id === id);

    if (exercise) {
      setSelectedExercise(exercise);
      setShowExerciseDetail(true);
    }
  };

  const handleControlExercise = (id: number) => {
    const exercise = result.find((item) => item.id === id);

    if (exercise) {
      setSelectedExercise(exercise);
      setShowSelectPlan(true);
    }
  };

  const handleCloseExerciseList = () => {
    setShowExerciseList(false);
  };

  const handleFocusSearchBar = () => {
    setShowExerciseList(true);
  };

  const handlerShowFilter = () => {
    setShowExerciseList(true);
    setShowExerciseFilter(true);
  };

  /** Exercise filter  */
  const [isShowExerciseFilter, setShowExerciseFilter] = useState(false);

  const handleCloseFilter = () => {
    setShowExerciseFilter(false);
  };

  const handleClearFilter = () => {
    setFilter({ muscleGroup: [], modalities: [], level: null });
    handleCloseFilter();
  };

  const handleConfirmFilter = (value: FilterType) => {
    setFilter(value);
    setShowExerciseFilter(false);
  };

  /** Exercise detail */
  const [isShowExerciseDetail, setShowExerciseDetail] = useState(false);

  const handleCloseExerciseDetail = () => {
    setShowExerciseDetail(false);
  };

  const handleConfirmExerciseDetail = () => {
    setShowExerciseDetail(false);
    setShowSelectPlan(true);
  };

  /** Select plan */
  const [isShowSelectPlan, setShowSelectPlan] = useState(false);

  const handleCloseSelectPlan = () => {
    setShowSelectPlan(false);
  };

  const handlePreviousSelectPlan = () => {
    setShowSelectPlan(false);
    setShowExerciseDetail(true);
  };

  const handleNextSelectPlan = () => {
    setShowSelectPlan(false);
    setShowAddExercise(true);
  };

  /** Add to plan */
  const [isShowAddExercise, setShowAddExercise] = useState(false);

  const handleCloseAddExercise = () => {
    setShowAddExercise(false);
  };

  return (
    <div className='relative h-screen flex flex-col overflow-hidden'>
      <header ref={headerRef}>
        <PageHeader>
          <HCSearchBar
            value={searchText}
            placeholder={t('search-exercise')}
            className='mb-3'
            onChange={(e) => setSearchText(e.target.value)}
            onPrefix={handleCloseExerciseList}
            onFocus={handleFocusSearchBar}
            onFilter={handlerShowFilter}
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
            <img src={EmptyFitnessPlan} alt='empty plan' className='mb-6' />
            <h3 className='text-heading-m mb-6 px-15 text-center'>{t('empty-plan')}</h3>
            <HCButton color='highlight' block={false} onClick={() => setShowMakePlan(true)}>
              {t('make-workout-plan-immediately')}
            </HCButton>
          </div>
        ) : (
          <Fragment>
            {filteredPlanList.length > 0 && (
              <PlanList data={filteredPlanList} onClick={handleClickItem} />
            )}
            <div
              className={`relative h-full flex flex-col gap-y-4 px-4 ${
                filteredPlanList.length === 0 && 'pt-4'
              }`}
            >
              <div className='text-body-s text-tertiary flex justify-center'>
                <p className='py-4'>{t('without-any-plan')}</p>
              </div>
              {filteredPlanList.length === 0 && (
                <div className='flex flex-col items-center'>
                  <img src={EmptyFitnessPlan} alt='empty fitness plan' className='mb-6' />
                  <h3 className='text-heading-m mb-6 px-15 text-center'>
                    {t('empty-filtered-plan')}
                  </h3>
                </div>
              )}
              <HCFloatButton onClick={() => setShowMakePlan(true)}>
                <PlusIcon />
              </HCFloatButton>
            </div>
          </Fragment>
        )}
      </main>
      <footer ref={footerRef} className='fixed left-0 bottom-0 w-full'>
        <HCTabBar />
      </footer>

      {/* Make plan */}
      <HCBottomSheet
        show={showMakePlan}
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

      <PlanDetail show={showDetailPage} onClose={() => setShowDetailPage(false)} />

      <div
        className={`absolute left-0 ${
          isShowExerciseList ? 'top-21' : 'top-full'
        } bottom-0 transition-all duration-400 w-screen bg-primary`}
      >
        <ExerciseList
          data={result}
          onClick={handleClickExercise}
          onControl={handleControlExercise}
        />
      </div>

      <ExerciseFilter
        show={isShowExerciseFilter}
        onClose={handleCloseFilter}
        onClear={handleClearFilter}
        onConfirm={handleConfirmFilter}
      />

      <ExerciseDetail
        show={isShowExerciseDetail}
        exercise={selectedExercise}
        onClose={handleCloseExerciseDetail}
        onConfirm={handleConfirmExerciseDetail}
      />

      <SelectPlan
        show={isShowSelectPlan}
        onClose={handleCloseSelectPlan}
        onPrevious={handlePreviousSelectPlan}
        onNext={handleNextSelectPlan}
      />

      {selectedExercise && (
        <SetExercise
          show={isShowAddExercise}
          exercise={selectedExercise}
          type='add'
          onClose={handleCloseAddExercise}
        />
      )}
    </div>
  );
};

export default Plan;
