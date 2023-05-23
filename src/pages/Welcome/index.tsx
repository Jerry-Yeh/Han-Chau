import React, { useState, Fragment } from 'react';
// import { Outlet } from 'react-router-dom';

import Loading from './components/Loading';
import Done from './components/Done';

interface Props {
  children?: React.ReactNode;
}

const Welcome: React.FC<Props> = () => {
  const [isLoading, setLoading] = useState(true);

  const handleDone = () => {
    setLoading(false);
  };

  return <Fragment>{isLoading ? <Loading onDone={handleDone} /> : <Done />}</Fragment>;
};

export default Welcome;
