import React, { useState, Fragment } from 'react';
import { useAppSelector } from '~/store/hook';
import { useNavigate } from 'react-router-dom';

import Loading from './components/Loading';
import Done from './components/Done';

interface Props {
  children?: React.ReactNode;
}

const Welcome: React.FC<Props> = () => {
  const navigate = useNavigate();

  const user = useAppSelector((state) => state.user.user);

  const [isLoading, setLoading] = useState(true);

  const handleDone = () => {
    setLoading(false);

    if (user.id) {
      navigate('/workout-plan');
    }
  };

  return <Fragment>{isLoading ? <Loading onDone={handleDone} /> : <Done />}</Fragment>;
};

export default Welcome;
