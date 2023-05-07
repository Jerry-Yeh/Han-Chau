import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from '~/store/hook';

import HCHeader, { HCHeaderIconButton } from '~/components/Header';
import HCSearchBar, { SearchEventType } from '~/components/SearchBar';
import { exerciseList, Exercise } from '~/static/exercise/data';
import { LEVEL } from '~/enums/user';
import { MODALITY, MUSCLEGROUP, MUSCLES } from '~/enums/exercise';

import ExerciseDetail from '../ExerciseDetail';
import SetExercise from '../SetExercise';
import FilterExercise, { FilterType } from '../FilterExercise';
import ExerciseList from '../ExerciseList';

import XMark from '~/assets/img/heroicons/mini/x-mark';

interface Props {
  children?: React.ReactNode;
  show: boolean;
  onClose: () => void;
}

const AddExercise: React.FC<Props> = (props: Props) => {
  const { t } = useTranslation('translation', { keyPrefix: 'exercise.add' });

  const capitalizeLanguage = useAppSelector((state) => state.language.capitalizeLanguage);

  const [searchText, setSearchText] = useState('');
  const [result, setResult] = useState<Exercise[]>([]);

  const searchTextChangeHandler = (e: SearchEventType) => {
    setSearchText(e.target.value);
  };

  /** Exercises filter */
  const [isShowFilterExercises, setShowFilterExercises] = useState(false);
  const [filter, setFilter] = useState<FilterType>({
    muscleGroup: [],
    modalities: [],
    level: null,
  });

  const handlerShowFilter = () => {
    setShowFilterExercises(true);
  };

  const handleCloseFilter = () => {
    setShowFilterExercises(false);
  };

  const handleClearFilter = () => {
    setFilter({ muscleGroup: [], modalities: [], level: null });
    handleCloseFilter();
  };

  const handleConfirmFilter = (value: FilterType) => {
    setFilter(value);
    setShowFilterExercises(false);
  };

  useEffect(() => {
    const isCorrectName = (name: string): boolean => name.includes(searchText);
    const isCorrectMuscle = (muscles: Array<MUSCLES | MUSCLEGROUP>): boolean =>
      filter.muscleGroup.length === 0 ||
      muscles.some((muscle) => filter.muscleGroup.includes(muscle));
    const isCorrectModality = (modality: MODALITY): boolean =>
      filter.modalities.length === 0 || filter.modalities.includes(modality);
    const isCorrectLevel = (level: LEVEL): boolean => !filter.level || filter.level === level;

    const searchResult = exerciseList.filter(
      (item) =>
        isCorrectName(item[`name${capitalizeLanguage}`]) &&
        isCorrectMuscle(item.muscles) &&
        isCorrectModality(item.modality) &&
        isCorrectLevel(item.level),
    );

    setResult(searchResult);
  }, [searchText, capitalizeLanguage, filter]);

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
        show={isShowFilterExercises}
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
