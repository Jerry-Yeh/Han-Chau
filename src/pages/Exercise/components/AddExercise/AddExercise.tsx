import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import HCHeader, { HCHeaderIconButton } from '~/components/Header';
import HCSearchBar, { SearchEventType } from '~/components/SearchBar';
import { Exercise } from '~/static/exercise/data';
import ExerciseDetail from '../ExerciseDetail';
import SetExercise from '../SetExercise';
import FilterExercise from '../ExerciseFilter';
import ExerciseList from '../ExerciseList';

import useFilterExercise from '~/hooks/exercise/useFilterExercise';

import type { FilterType } from '~/pages/Exercise/interface';

import XMark from '~/assets/img/heroicons/mini/x-mark';

interface Props {
  children?: React.ReactNode;
  show: boolean;
  onClose: () => void;
}

const AddExercise: React.FC<Props> = (props: Props) => {
  const { t } = useTranslation('translation', { keyPrefix: 'exercise.add' });

  const [searchText, setSearchText] = useState('');
  // const [result, setResult] = useState<Exercise[]>([]);

  const searchTextChangeHandler = (e: SearchEventType) => {
    setSearchText(e.target.value);
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

    if (exercise) {
      setSelectedExercise(exercise);
      setShowExerciseDetail(true);
    }
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
  };

  const handleConfirmExerciseDetail = () => {
    setShowExerciseDetail(false);
    setShowJoinPlan(true);
  };

  /** Join plan */
  const [isShowJoinPlan, setShowJoinPlan] = useState(false);

  const handleClose = () => {
    setShowJoinPlan(false);
  };

  const handleClickJoinPlan = () => {
    setShowJoinPlan(false);
    setShowExerciseDetail(true);
  };

  return (
    <div
      className={`
        w-screen h-screen z-20 absolute transition-bottom duration-400 flex flex-col
        ${props.show ? 'bottom-0' : '-bottom-full'}`}
    >
      <HCHeader
        title={t('header')}
        suffix={
          <HCHeaderIconButton onClick={props.onClose}>
            <XMark />
          </HCHeaderIconButton>
        }
        className='border-b border-secondary'
      >
        <div className='px-4 pt-3 pb-4'>
          <HCSearchBar
            value={searchText}
            filtering={
              filter.muscleGroup.length > 0 || filter.modalities.length > 0 || !!filter.level
            }
            onChange={searchTextChangeHandler}
            onFilter={handlerShowFilter}
          />
        </div>
      </HCHeader>

      <ExerciseList data={result} onClick={handleClickExercise} onControl={handleControlExercise} />

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
          onClose={handleClose}
          onPrevious={handleClickJoinPlan}
        />
      )}
    </div>
  );
};

export default AddExercise;
