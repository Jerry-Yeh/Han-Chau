import React from 'react';
import { Outlet } from 'react-router-dom';
interface Props {
  children?: React.ReactNode;
}

const Welcome: React.FC<Props> = () => {
  return <Outlet />;
};

export default Welcome;
