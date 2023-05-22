import { Fragment, useContext } from 'react';
import { Outlet } from 'react-router-dom';
// import { useAppSelector } from '~/store/hook';
import { useActor } from '@xstate/react';

import HCLoading from '~/components/Loading';

import { GlobalStateContext } from '~/state/provider';

const App = () => {
  // const showLoading = useAppSelector((state) => state.loading.show);
  const globalServices = useContext(GlobalStateContext);
  const [state] = useActor(globalServices.service);
  // const isLoading = useSelector(globalServices.service, (state) => state.context.isLoading);

  return (
    <Fragment>
      <Outlet />
      <HCLoading show={state.context.isLoading} />
    </Fragment>
  );
};

export default App;
