import React, { useState, useRef, useEffect, Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppSelector, useAppDispatch } from '~/store/hook';
import { PlusIcon } from '@heroicons/react/20/solid';
import { useNavigate } from 'react-router-dom';

import HCSearchBar from '~/components/SearchBar';
import HCPill, { PillItem, PillValue } from '~/components/Pill';
import HCTabBar from '~/components/TabBar';
import HCButton from '~/components/Button';
import ExerciseService from '~/services/exercise';
import { WORKOUTPLANFILTER } from '~/enums/exercise';
import HCFloatButton from '~/components/FloatButton';
import PlanList from '~/pages/Exercise/components/PlanList';
import MakePlan from '../components/MakePlan';
import Layout from '../components/Layout';
import HCHeader, { HCHeaderRegion } from '~/components/Header';

import usePlanList from '~/hooks/exercise/usePlanList';
import useHeight from '~/hooks/utils/useHeight';

import type { ListItemType } from '~/components/List';
import type { WorkoutPlan } from '~/pages/Exercise/interface';

import EmptyFitnessPlan from '~/assets/img/empty-fitnessplan.svg';

const Plan: React.FC = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'exercise' });
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const user = useAppSelector((state) => state.user.user);
  const [planList] = usePlanList();
  const selectedPlan = useAppSelector((state) => state.exercise.selectedPlan);

  const headerRef = useRef<HTMLDivElement>(null);
  // const [headerHeight, setHeaderHeight] = useState(0);
  const headerHeight = useHeight(headerRef);
  const footerRef = useRef<HTMLElement>(null);
  const [footerHeight, setFooterHeight] = useState(0);
  // const footerHeight = useHeight(footerRef);

  // useEffect(() => {
  //   if (headerRef.current) setHeaderHeight(headerRef.current.clientHeight);
  //   if (footerRef.current) setFooterHeight(footerRef.current.clientHeight);
  // }, [headerRef, footerRef]);

  const handleClickItem = (item: ListItemType) => {
    const clickedPlan = planList.find((plan) => plan.id === item.key);

    if (clickedPlan) {
      dispatch({
        type: 'exercise/setSelectedPlan',
        payload: clickedPlan,
      });
      // setShowDetailPage(true);
      navigate(`${clickedPlan.id}`);
    }
  };

  /** Search bar */
  const handleFocusSearchBar = () => {
    navigate('exercises');
  };

  /** Filter plan */
  const pillList: PillItem[] = [
    { label: t('all-workout-plan'), value: WORKOUTPLANFILTER.ALL },
    { label: t('upper-workout-plan'), value: WORKOUTPLANFILTER.UPPER },
    { label: t('lower-workout-plan'), value: WORKOUTPLANFILTER.LOWER },
    { label: t('core-workout-plan'), value: WORKOUTPLANFILTER.CORE },
  ];
  const [activePillKey, setActivePillKey] = useState<PillValue>(WORKOUTPLANFILTER.ALL);
  const [filteredPlanList, setFilteredPlanList] = useState<WorkoutPlan[]>([]);

  useEffect(() => {
    setFilteredPlanList(
      activePillKey === WORKOUTPLANFILTER.ALL
        ? planList
        : planList.filter((plan) =>
            plan.exerciseList.some((exercise) => exercise.upperLowerCore === activePillKey),
          ),
    );
  }, [activePillKey, planList]);

  /** Make plan */
  const [isShowMakePlan, setShowMakePlan] = useState(false);

  const handleCloseMakePlan = () => {
    setShowMakePlan(false);
    dispatch({
      type: 'exercise/setSelectedPlan',
      payload: {
        ...selectedPlan,
        name: '',
      },
    });
  };

  const handleMakePlan = async () => {
    if (user.id) {
      const { id: _id, ...rest } = ExerciseService.transPlanToRawData(selectedPlan);
      const id = await ExerciseService.addPlan({ ...rest, userId: user.id });

      dispatch({
        type: 'exercise/setSelectedPlan',
        payload: {
          ...selectedPlan,
          id,
        },
      });

      setShowMakePlan(false);
      navigate(`${id}`);
    }
  };

  return (
    <div className='relative'>
      <Layout
        className='bg-tertiary'
        header={
          <HCHeader ref={headerRef} toolBar={false}>
            <HCHeaderRegion behavior='expanded'>
              <div className='px-4 pt-6'>
                <HCSearchBar
                  value={''}
                  placeholder={t('search-exercise')}
                  filter={false}
                  onFocus={handleFocusSearchBar}
                />
              </div>
            </HCHeaderRegion>

            <HCHeaderRegion behavior='fixed' className='bg-primary z-20'>
              <div className='px-4 py-3'>
                <HCPill
                  activeKey={activePillKey}
                  list={pillList}
                  onChange={(nV) => setActivePillKey(nV)}
                />
              </div>
            </HCHeaderRegion>
          </HCHeader>
        }
        content={
          planList.length === 0 ? (
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
                className={`relative flex flex-col gap-y-4 px-4 ${
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
                <HCFloatButton bottomClass='bottom-22' onClick={() => setShowMakePlan(true)}>
                  <PlusIcon />
                </HCFloatButton>
              </div>
            </Fragment>
          )
        }
        footer={
          <footer ref={footerRef} className='sticky left-0 bottom-0 w-full z-10'>
            <HCTabBar />
          </footer>
        }
      >
        <MakePlan show={isShowMakePlan} onClose={handleCloseMakePlan} onConfirm={handleMakePlan} />
      </Layout>
    </div>
  );
};

export default Plan;
