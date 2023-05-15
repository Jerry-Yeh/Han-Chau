import React from 'react';
import { Outlet } from 'react-router-dom';

import usePlanList from '~/hooks/exercise/usePlanList';

interface Props {
  children?: React.ReactNode;
}

const Exercise: React.FC<Props> = () => {
  usePlanList();

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default Exercise;
