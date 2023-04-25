import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import type { Exercise } from '~/services/exercise';

interface Props {
  children?: React.ReactNode;
}

const Exercise: React.FC<Props> = (props: Props) => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default Exercise;
