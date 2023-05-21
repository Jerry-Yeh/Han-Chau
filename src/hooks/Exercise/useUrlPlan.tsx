import { useState, useEffect, useCallback } from 'react';
import { useAppSelector } from '~/store/hook';
import { useParams } from 'react-router-dom';

import ExerciseService from '~/services/exercise';

import type { WorkoutPlan } from '~/pages/WorkoutPlan/interface';

const usePlan = () => {
  const { planId } = useParams();

  const user = useAppSelector((state) => state.user.user);

  const [plan, setPlan] = useState<WorkoutPlan>({
    id: '',
    userId: user.id as string,
    name: '',
    challenge: 0,
    upperLowerCoreList: [],
    modalityList: [],
    exerciseList: [],
  });

  const updatePlan = useCallback(async () => {
    if (planId) {
      const planData = await ExerciseService.queryPlan(planId);

      setPlan(ExerciseService.transPlanFromRawData(planData));
    }
  }, [planId]);

  useEffect(() => {
    updatePlan();
  }, [updatePlan]);

  return [plan, updatePlan] as const;
};

export default usePlan;
