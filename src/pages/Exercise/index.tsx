import React from 'react';
import { Outlet } from 'react-router-dom';

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
