import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import ExerciseService from '~/services/exercise';
import { mockExerciseList } from '../../static/exercise/data';

import type { Exercise } from '~/services/exercise';

interface Props {
  children?: React.ReactNode;
}

const Exercise: React.FC<Props> = (props: Props) => {
  const [exerciseList, setExerciseList] = useState<Exercise[]>([]);

  useEffect(() => {
    let ignore = false;

    const queryExerciseList = async () => {
      // static exercise data
      // const result = await ExerciseService.queryExerciseList();
      if (!ignore) {
        // setExerciseList(result);
        setExerciseList(mockExerciseList);
        console.log('exerciseList', mockExerciseList);
      }
    };
    queryExerciseList();

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default Exercise;
