import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation, Outlet, useOutletContext } from 'react-router-dom';

import HCHeader from '~/components/Header';

import type { ContextType } from './interface';

interface Props {
  children?: React.ReactNode;
}

export const useUser = () => {
  return useOutletContext<ContextType>();
};

const Onboarding: React.FC<Props> = () => {
  const navigate = useNavigate();
  const location = useLocation();

  /** Data */
  const [user, setUser] = useState({
    height: '',
    weight: '',
    gender: '',
  });

  /** Path & Style */
  const [prevPath, setPrevPath] = useState('');
  const [headerFractionClass, setHeaderFractionClass] = useState('');

  useEffect(() => {
    switch (location.pathname) {
      case '/onboarding/height':
        setHeaderFractionClass('w-1/9');
        break;
      case '/onboarding/weight':
        setPrevPath('/onboarding/height');
        setHeaderFractionClass('w-2/9');
        break;
      case '/onboarding/gender':
        setPrevPath('/onboarding/weight');
        setHeaderFractionClass('w-3/9');
        break;
      default:
        break;
    }
  }, [location]);

  const toPrev = () => {
    navigate(prevPath);
  };

  return (
    <div className='bg-secondary h-full'>
      <HCHeader toPrev={toPrev} fractionClass={headerFractionClass} />
      <Outlet context={{ user, setUser }} />
    </div>
  );
};

export default Onboarding;
