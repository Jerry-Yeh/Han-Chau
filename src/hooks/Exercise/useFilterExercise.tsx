import { useEffect, useState } from 'react';
import { useAppSelector } from '~/store/hook';

import { MODALITY, MUSCLEGROUP, MUSCLES, LEVEL } from '~/enums/exercise';
import { FilterType } from '~/pages/Exercise/interface';
import { exerciseList, Exercise } from '~/static/exercise/data';

const useFilterExercise = (searchText: string, filter: FilterType): Exercise[] => {
  const capitalizeLanguage = useAppSelector((state) => state.language.capitalizeLanguage);

  const [result, setResult] = useState<Exercise[]>([]);

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

  return result;
};

export default useFilterExercise;
