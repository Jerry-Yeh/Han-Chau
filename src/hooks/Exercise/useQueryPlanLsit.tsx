import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '~/store/hook';

import ExerciseService from '~/services/exercise';

const useQueryPlanList = (isQuery: boolean) => {
  const dispatch = useAppDispatch();

  const user = useAppSelector((state) => state.user.user);

  useEffect(() => {
    const resetCurrentPlan = () => {
      dispatch({
        type: 'exercise/setSelectedPlan',
        payload: {
          id: '',
          userId: user.id as string,
          name: '',
          challenge: 1,
          upperLowerCoreList: [],
          modalityList: [],
          exerciseList: [],
        },
      });
    };

    const queryPlanList = async () => {
      if (user.id && isQuery) {
        dispatch({ type: 'loading/setShow', payload: true });
        const data = await ExerciseService.queryPlanList(user.id);

        dispatch({
          type: 'exercise/setPlanList',
          payload: data.map((item) => ExerciseService.transPlanFromRawData(item)),
        });
        // resetCurrentPlan();
        dispatch({ type: 'loading/setShow', payload: false });
      }
    };

    queryPlanList();
  }, [user.id, isQuery, dispatch]);
};

export default useQueryPlanList;
