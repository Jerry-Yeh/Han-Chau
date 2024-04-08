import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';

import HCHeader, { HCHeaderIconButton, HCHeaderRegion } from '~/components/Header';
import HCSearchBar, { SearchEventType } from '~/components/SearchBar';
import { Exercise } from '~/static/exercise/data';
import ExerciseDetail from '../components/ExerciseDetail';
import SetExercise, { SET_EXERCISE_ACTION } from '../components/SetExercise';
import FilterExercise from '../components/ExerciseFilter';
import ExerciseList from '../components/ExerciseList';
import Layout from '../components/Layout';

import useFilterExercise from '~/hooks/exercise/useFilterExercise';
import useHeight from '~/hooks/utils/useHeight';
import useDisableBackgroundEvents from '~/hooks/utils/useDisableBackgroundEvent';

import type { AddExerciseProps } from '.';
import type { FilterType } from '~/pages/WorkoutPlan/interface';

import XMark from '~/assets/img/heroicons/mini/x-mark';

const AddExercise: React.FC<AddExerciseProps> = (props: AddExerciseProps) => {
  const { t } = useTranslation('translation', { keyPrefix: 'exercise.add' });
  const navigate = useNavigate();
  const { planId, exerciseId } = useParams();

  /** Header */
  const headerRef = useRef<HTMLDivElement>(null);
  const headerHeight = useHeight(headerRef);
  const [searchText, setSearchText] = useState('');
  const [isShowFilterIcon, setShowFilterIcon] = useState(true);

  const searchTextChangeHandler = (e: SearchEventType) => {
    setSearchText(e.target.value);
  };

  const handleClose = () => {
    // navigate(`/workout-plan/${planId}`);
    props.onClose();
  };

  const handlerShowFilter = () => {
    setShowExerciseFilter(true);
  };

  const handleFocusSearchBar = () => {
    setShowFilterIcon(true);
  };

  /** Exercise filter */
  const [isShowExerciseFilter, setShowExerciseFilter] = useState(false);
  const [filter, setFilter] = useState<FilterType>({
    muscleGroup: [],
    modalities: [],
    level: null,
  });
  const result = useFilterExercise(searchText, filter);

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

  /** Exercise list */
  const [isShowExerciseDetail, setShowExerciseDetail] = useState(false);
  const [selectedExercise, setSelectedExercise] = useState<Exercise>();

  const handleClickExercise = (id: number) => {
    const exercise = result.find((item) => item.id === id);

    if (exercise) navigate(`${exercise.id}`);
  };

  const handleControlExercise = (id: number) => {
    const exercise = result.find((item) => item.id === id);

    if (exercise) {
      setSelectedExercise(exercise);
      setShowJoinPlan(true);
    }
  };

  const handleCloseExerciseDetail = () => {
    setShowExerciseDetail(false);
    navigate(`/workout-plan/${planId}/exercises`);
  };

  const handleConfirmExerciseDetail = () => {
    setShowExerciseDetail(false);
    setShowJoinPlan(true);
  };

  useEffect(() => {
    if (exerciseId) {
      const exercise = result.find((item) => item.id === +exerciseId);

      if (exercise) {
        setSelectedExercise(exercise);
        setShowExerciseDetail(true);
      }
    }
  }, [exerciseId, result]);

  /** Join plan */
  const [isShowJoinPlan, setShowJoinPlan] = useState(false);

  const handleCloseJoin = () => {
    setShowJoinPlan(false);
    navigate(`/workout-plan/${planId}/exercises`);
  };

  const handleConfirmJoin = () => {
    setShowJoinPlan(false);
    navigate(`/workout-plan/${planId}/exercises`);
  };

  const handleClickJoinPlanPrevious = () => {
    setShowJoinPlan(false);
    if (selectedExercise) navigate(`${selectedExercise.id}`);
  };

  /** Disable background events */
  useDisableBackgroundEvents([isShowExerciseFilter, isShowExerciseDetail, isShowJoinPlan]);

  return (
    <Layout
      className={`${props.isShow ? '' : 'hidden'} w-screen h-screen absolute left-0 top-0 z-20`}
      header={
        <HCHeader
          ref={headerRef}
          title={t('header')}
          suffix={
            <HCHeaderIconButton onClick={handleClose}>
              <XMark />
            </HCHeaderIconButton>
          }
        >
          <HCHeaderRegion behavior='expanded' top={headerHeight} className='bg-primary'>
            <div className='px-4 pt-3 pb-4'>
              <HCSearchBar
                value={searchText}
                filter={isShowFilterIcon}
                filtering={
                  filter.muscleGroup.length > 0 || filter.modalities.length > 0 || !!filter.level
                }
                onChange={searchTextChangeHandler}
                onFilter={handlerShowFilter}
                onPrefix={handleClose}
                onFocus={handleFocusSearchBar}
              />
            </div>
          </HCHeaderRegion>
        </HCHeader>
      }
    >
      <ExerciseList
        data={result}
        onClick={handleClickExercise}
        onControl={handleControlExercise}
      />

      <FilterExercise
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

      {/* Join plan */}
      {selectedExercise && (
        <SetExercise
          show={isShowJoinPlan}
          exercise={selectedExercise}
          action={SET_EXERCISE_ACTION.ADD}
          onClose={handleCloseJoin}
          onConfirm={handleConfirmJoin}
          onPrevious={handleClickJoinPlanPrevious}
        />
      )}
    </Layout>
  );
};

export default AddExercise;
