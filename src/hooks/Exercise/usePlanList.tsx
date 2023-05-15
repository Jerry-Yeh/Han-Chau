import { useState, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '~/store/hook';

import ExerciseService from '~/services/exercise';

import type { WorkoutPlanData } from '~/services/exercise';

const usePlanList = () => {
  const dispatch = useAppDispatch();

  const user = useAppSelector((state) => state.user.user);
  const [planList, setPlanList] = useState<WorkoutPlanData[]>([]);

  useEffect(() => {
    const queryPlanList = async () => {
      console.log('query plan list');
      if (user.id) {
        dispatch({ type: 'loading/setShow', payload: true });
        const data = await ExerciseService.queryPlanList(user.id);

        setPlanList(data);

        dispatch({
          type: 'exercise/setPlanList',
          payload: data.map((item) => ExerciseService.transPlanFromRawData(item)),
        });
        dispatch({ type: 'loading/setShow', payload: false });
      }
    };

    queryPlanList();
  }, [user.id, dispatch]);

  return [planList];
};

export default usePlanList;
