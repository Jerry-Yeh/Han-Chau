import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import logomark from '~/assets/img/logomark.svg';
import logo from '~/assets/img/logo.svg';
import HCProgress from '~/components/Progress';

interface Props {
  children?: React.ReactNode;
}

const Loading: React.FC<Props> = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [showSlogan, setShowSlogan] = useState(false);
  const [progressRate, setProgressRate] = useState('');

  useEffect(() => {
    const sloganDelayTimer = setTimeout(() => {
      setShowSlogan(true);
      setProgressRate('w-1/9');
    }, 800);

    const progressDelayTimer = setTimeout(() => {
      setProgressRate('w-full');
    }, 1600);

    const navigateDelayTimer = setTimeout(() => {
      navigate('/welcome/done');
    }, 2400);

    return () => {
      clearTimeout(sloganDelayTimer);
      clearTimeout(progressDelayTimer);
      clearTimeout(navigateDelayTimer);
    };
  }, [navigate]);

  return (
    <div className='bg-secondary h-screen pb-10 flex flex-col items-center justify-between'>
      <HCProgress rateClass={progressRate} />
      <div className='flex flex-col items-center'>
        <img src={logomark} alt='logomark' className='mb-6' />
        <span
          className={`
            text-body-m text-placeholder
            ease-in duration-1000 ${showSlogan ? 'visible opacity-100' : 'invisible opacity-0'}`}
        >
          {t('welcome.slogan')}
        </span>
      </div>
      <div>
        <img src={logo} alt='logo' />
      </div>
    </div>
  );
};

export default Loading;
