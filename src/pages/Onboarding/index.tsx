import React, { useEffect, useState, Fragment } from 'react';
import { useNavigate, useLocation, Outlet, useOutletContext } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { useTranslation } from 'react-i18next';

import HCHeader from '~/components/Header';

import type { ContextType, User } from './interface';
import HCProgress from '~/components/Progress';

interface Props {
  children?: React.ReactNode;
}

export const useUser = () => {
  return useOutletContext<ContextType>();
};

const Onboarding: React.FC<Props> = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();

  /** Data */
  const [user, setUser] = useState<User>({});

  /** Path & Style */
  const [prevPath, setPrevPath] = useState('');
  const [nextPath, setNextPath] = useState('');
  const [progressClass, setProgressClass] = useState('');

  useEffect(() => {
    setNextPath('');

    switch (location.pathname) {
      case '/onboarding':
      case '/onboarding/height':
        setPrevPath('/welcome/landing');
        setProgressClass('w-1/9');
        break;
      case '/onboarding/weight':
        setPrevPath('/onboarding/height');
        setProgressClass('w-2/9');
        break;
      case '/onboarding/gender':
        setPrevPath('/onboarding/weight');
        setProgressClass('w-3/9');
        break;
      case '/onboarding/birth':
        setPrevPath('/onboarding/gender');
        setNextPath('/onboarding/amount');
        setProgressClass('w-4/9');
        break;
      case '/onboarding/amount':
        setPrevPath('/onboarding/birth');
        setProgressClass('w-5/9');
        break;
      case '/onboarding/level':
        setPrevPath('/onboarding/amount');
        setProgressClass('w-6/9');
        break;
      case '/onboarding/target':
        setPrevPath('/onboarding/level');
        setProgressClass('w-7/9');
        break;
      case '/onboarding/name':
        setPrevPath('/onboarding/target');
        setProgressClass('w-8/9');
        break;
      case '/onboarding/login':
        setPrevPath('/onboarding/name');
        setProgressClass('w-full');
        break;
      case '/onboarding/terms':
        setPrevPath('/onboarding/login');
        setProgressClass('w-0');
        break;
      default:
        break;
    }
  }, [location]);

  const toPrev = () => {
    navigate(prevPath, { state: { from: location.pathname } });
  };

  const toNext = () => {
    navigate(nextPath);
  };

  return (
    <div className='bg-secondary h-full'>
      {location.pathname !== '/onboarding/results' && (
        <Fragment>
          <HCHeader
            size='s'
            left={<ArrowLeftIcon className='w-8 h-8' onClick={toPrev} />}
            right={nextPath && <button onClick={toNext}>{t('skip')}</button>}
          />
          <HCProgress rateClass={progressClass} />
        </Fragment>
      )}
      <Outlet context={{ user, setUser }} />
    </div>
  );
};

export default Onboarding;
