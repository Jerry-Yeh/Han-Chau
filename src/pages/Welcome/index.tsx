import React, { Fragment, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import logomark from '~/assets/img/logomark.svg';
import logo from '~/assets/img/logo.svg';
import HCProgress from '~/components/Progress';
interface Props {
  children?: React.ReactNode;
}

const Welcome: React.FC<Props> = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [showSlogan, setShowSlogan] = useState(false);

  useEffect(() => {
    const delayTimer = setTimeout(() => {
      setShowSlogan(true);
    }, 800);

    return () => clearTimeout(delayTimer);
  }, [navigate]);

  return (
    <div className='bg-secondary h-screen pb-10 flex flex-col items-center justify-between'>
      <HCProgress widthClass='w-1/9' />
      <div className='flex flex-col items-center'>
        <img src={logomark} alt='logomark' className='mb-6' />
        <span
          className={`
            text-body-m text-placeholder
            ease-in duration-1000 ${showSlogan ? 'visible opacity-100' : 'invisible opacity-0'}`}
        >
          {t('slogan')}
        </span>
      </div>
      <div className=''>
        <img src={logo} alt='logo' />
      </div>
    </div>
  );
};

export default Welcome;
