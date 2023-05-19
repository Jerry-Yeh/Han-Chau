import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';

import HCSearchBar, { HandleSearchBar } from '~/components/SearchBar';
import HCHeader, { HCHeaderRegion } from '~/components/Header';
import ExerciseList from '../components/ExerciseList';
import ExerciseFilter from '../components/ExerciseFilter';
import Layout from '../components/Layout';
import ExerciseDetail from '../components/ExerciseDetail';
import SelectPlan from '../components/SelectPlan';
import SetExercise from '../components/SetExercise';

import useFilterExercise from '~/hooks/exercise/useFilterExercise';
import useDisableBackgroundEvents from '~/hooks/utils/useDisableBackgroundEvent';

import type { FilterType } from '~/pages/Exercise/interface';
import type { Exercise } from '~/static/exercise/data';

const Exercises: React.FC = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'exercise' });
  const navigate = useNavigate();
  const { exerciseId } = useParams();

  /** Header */
  const [searchText, setSearchText] = useState('');
  const [filter, setFilter] = useState<FilterType>({
    muscleGroup: [],
    modalities: [],
    level: null,
  });
  const [isShowFilterIcon, setShowFilterIcon] = useState(false);
  const result = useFilterExercise(searchText, filter);
  const headerRef = useRef(null);
  const searchBarRef = useRef<HandleSearchBar>(null);

  useEffect(() => {
    searchBarRef.current?.focus();
  }, []);

  const handleClose = () => {
    navigate('..');
  };

  const handleFocusSearchBar = () => {
    // setShowExerciseList(true);
    setShowFilterIcon(true);
  };

  /** Filter */
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

  /** Content */
  const [selectedExercise, setSelectedExercise] = useState<Exercise>();

  const handleClickExercise = (id: number) => {
    navigate(`${id}`);
  };

  const handlerShowFilter = () => {
    // setShowExerciseList(true);
    setShowExerciseFilter(true);
  };

  const handleControlExercise = (id: number) => {
    const exercise = result.find((item) => item.id === id);

    if (exercise) {
      setSelectedExercise(exercise);
      setShowSelectPlan(true);
    }
  };

  useEffect(() => {
    if (exerciseId) {
      const exercise = result.find((item) => item.id === +exerciseId);

      if (exercise) {
        setSelectedExercise(exercise);
        setShowExerciseDetail(true);
      }
    } else {
      setShowExerciseDetail(false);
    }
  }, [exerciseId, result]);

  /** Detail */
  const [isShowExerciseDetail, setShowExerciseDetail] = useState(false);

  const handleCloseExerciseDetail = () => {
    navigate('/workout-plan/exercises');
  };

  const handleConfirmExerciseDetail = () => {
    setShowExerciseDetail(false);
    setShowSelectPlan(true);
  };

  /** Selected plan */
  const [isShowSelectPlan, setShowSelectPlan] = useState(false);

  const handleCloseSelectPlan = () => {
    setShowSelectPlan(false);
  };

  const handlePreviousSelectPlan = () => {
    setShowSelectPlan(false);
    if (selectedExercise) navigate(`/workout-plan/exercises/${selectedExercise.id}`);
  };

  const handleNextSelectPlan = () => {
    setShowSelectPlan(false);
    setShowAddExercise(true);
  };

  /** Add to plan */
  const [isShowAddExercise, setShowAddExercise] = useState(false);

  const handleCloseAddExercise = () => {
    setShowAddExercise(false);
    navigate('/workout-plan/exercises');
  };

  const handleClickJoinPlanPrevious = () => {
    setShowAddExercise(false);
    setShowSelectPlan(true);
  };

  const handleConfirmJoinPlan = () => {
    setShowAddExercise(false);
    navigate('/workout-plan/exercises');
  };

  /** Disable background events */
  useDisableBackgroundEvents([
    isShowExerciseFilter,
    isShowExerciseDetail,
    isShowSelectPlan,
    isShowAddExercise,
  ]);

  return (
    <Layout
      header={
        <HCHeader ref={headerRef} toolBar={false}>
          <HCHeaderRegion behavior='fixed' className='bg-primary'>
            <div className='px-4 pt-6 pb-3'>
              <HCSearchBar
                ref={searchBarRef}
                value={searchText}
                placeholder={t('search-exercise')}
                filter={isShowFilterIcon}
                filtering={
                  filter.muscleGroup.length > 0 || filter.modalities.length > 0 || !!filter.level
                }
                doneType='previous'
                onChange={(e) => setSearchText(e.target.value)}
                onPrefix={handleClose}
                onFocus={handleFocusSearchBar}
                onFilter={handlerShowFilter}
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

      {/* Add to plan */}
      {selectedExercise && (
        <SetExercise
          show={isShowAddExercise}
          exercise={selectedExercise}
          type='add'
          onClose={handleCloseAddExercise}
          onPrevious={handleClickJoinPlanPrevious}
          onConfirm={handleConfirmJoinPlan}
        />
      )}
    </Layout>
  );
};

export default Exercises;
