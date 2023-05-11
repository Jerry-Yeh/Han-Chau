import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '~/store/hook';

import ExerciseService from '~/services/exercise';

const useQueryPlanList = (isQuery: boolean) => {
  const dispatch = useAppDispatch();

  const user = useAppSelector((state) => state.user.user);

  useEffect(() => {
    const queryPlanList = async () => {
      if (user.id && isQuery) {
        dispatch({ type: 'loading/setShow', payload: true });
        const data = await ExerciseService.queryPlanList(user.id);

        dispatch({
          type: 'exercise/setPlanList',
          payload: data.map((item) => ExerciseService.transPlanFromRawData(item)),
        });
        dispatch({ type: 'loading/setShow', payload: false });
      }
    };

    queryPlanList();
  }, [user.id, isQuery, dispatch]);
};

export default useQueryPlanList;
