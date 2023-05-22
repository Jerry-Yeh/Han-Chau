import { useState, useEffect, useContext } from 'react';
import { useAppSelector, useAppDispatch } from '~/store/hook';
import { useActor } from '@xstate/react';

import ExerciseService from '~/services/exercise';

import { GlobalStateContext } from '~/state/provider';

import type { WorkoutPlan } from '~/pages/WorkoutPlan/interface';

const usePlanList = () => {
  const dispatch = useAppDispatch();
  const globalServices = useContext(GlobalStateContext);
  const [_, send] = useActor(globalServices.service);

  const user = useAppSelector((state) => state.user.user);
  const [planList, setPlanList] = useState<WorkoutPlan[]>([]);

  useEffect(() => {
    const queryPlanList = async () => {
      if (user.id) {
        // dispatch({ type: 'loading/setShow', payload: true });
        const data = await ExerciseService.queryPlanList(user.id);

        setPlanList(data.map((item) => ExerciseService.transPlanFromRawData(item)));
        send('SUCCESS');
        // dispatch({ type: 'loading/setShow', payload: false });
      }
    };

    queryPlanList();
  }, [user.id, dispatch, send]);

  return [planList];
};

export default usePlanList;
