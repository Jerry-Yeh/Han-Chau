import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';

import HCHeader, { HCHeaderIconButton, HCHeaderRegion } from '~/components/Header';
import HCSearchBar, { SearchEventType } from '~/components/SearchBar';
import { Exercise } from '~/static/exercise/data';
import ExerciseDetail from '../components/ExerciseDetail';
import SetExercise from '../components/SetExercise';
import FilterExercise from '../components/ExerciseFilter';
import ExerciseList from '../components/ExerciseList';
import Layout from '../components/Layout';

import useFilterExercise from '~/hooks/exercise/useFilterExercise';
import useHeight from '~/hooks/utils/useHeight';

import type { FilterType } from '~/pages/Exercise/interface';

import XMark from '~/assets/img/heroicons/mini/x-mark';

const AddExercise: React.FC = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'exercise.add' });
  const navigate = useNavigate();
  const { planId, exerciseId } = useParams();

  /** Header */
  const headerRef = useRef<HTMLDivElement>(null);
  const headerHeight = useHeight(headerRef);
  const [searchText, setSearchText] = useState('');

  const searchTextChangeHandler = (e: SearchEventType) => {
    setSearchText(e.target.value);
  };

  const handleClose = () => {
    navigate(`/workout-plan/${planId}`);
  };

  /** Exercise filter */
  const [isShowExerciseFilter, setShowExerciseFilter] = useState(false);
  const [filter, setFilter] = useState<FilterType>({
    muscleGroup: [],
    modalities: [],
    level: null,
  });
  const result = useFilterExercise(searchText, filter);

  const handlerShowFilter = () => {
    setShowExerciseFilter(true);
  };

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

  const handleCloseJoinPlan = () => {
    setShowJoinPlan(false);
    navigate(`/workout-plan/${planId}/exercises`);
    // navigate(`.`);
  };

  const handleConfirmJoinPlan = () => {
    setShowJoinPlan(false);
    navigate(`/workout-plan/${planId}/exercises`);
  };

  const handleClickJoinPlanPrevious = () => {
    setShowJoinPlan(false);
    console.log('preview', selectedExercise);
    if (selectedExercise) navigate(`${selectedExercise.id}`);
  };

  return (
    <Layout
      header={
        <HCHeader
          ref={headerRef}
          title={t('header')}
          suffix={
            <HCHeaderIconButton onClick={handleClose}>
              <XMark />
            </HCHeaderIconButton>
          }
          className='border-b border-secondary'
        >
          <HCHeaderRegion behavior='fixed' top={headerHeight} className='bg-primary'>
            <div className='px-4 pt-3 pb-4'>
              <HCSearchBar
                value={searchText}
                filtering={
                  filter.muscleGroup.length > 0 || filter.modalities.length > 0 || !!filter.level
                }
                onChange={searchTextChangeHandler}
                onFilter={handlerShowFilter}
                onPrefix={handleClose}
              />
            </div>
          </HCHeaderRegion>
        </HCHeader>
      }
      content={
        <ExerciseList
          data={result}
          onClick={handleClickExercise}
          onControl={handleControlExercise}
        />
      }
    >
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
          type='add'
          onClose={handleCloseJoinPlan}
          onConfirm={handleConfirmJoinPlan}
          onPrevious={handleClickJoinPlanPrevious}
        />
      )}
    </Layout>
  );
};

export default AddExercise;
