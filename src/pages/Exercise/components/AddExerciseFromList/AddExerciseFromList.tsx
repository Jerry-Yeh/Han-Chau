import React, { useState } from 'react';

import ExerciseList from '../ExerciseList';
import { Exercise } from '~/static/exercise/data';
import ExerciseDetail from '../ExerciseDetail';
import SelectPlan from '../SelectPlan';
import SetExercise from '../SetExercise/SetExercise';

import useFilterExercise from '~/hooks/Exercise/useFilterExercise';

import type { AddExerciseFromListProps } from '.';

const AddExerciseFromList: React.FC<AddExerciseFromListProps> = ({
  show,
  searchText,
  filter,
}: AddExerciseFromListProps) => {
  const result = useFilterExercise(searchText, filter);
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
    <div
      className={`absolute left-0 ${
        show ? 'top-21' : 'top-full'
      } bottom-0 transition-all duration-400 w-screen bg-primary`}
    >
      <ExerciseList data={result} onClick={handleClickExercise} onControl={handleControlExercise} />

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

export default AddExerciseFromList;
