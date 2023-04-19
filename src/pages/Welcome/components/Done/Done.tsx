import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import HCHeader from '~/components/Header';
import HCCarousel from '~/components/Carousel';
import HCButton from '~/components/Button';
import HCBottomSheet from '~/components/BottomSheet';
import HCDivider from '~/components/Divider';

import logo from '~/assets/img/logo.svg';
import google from '~/assets/img/google.svg';
import facebook from '~/assets/img/facebook.svg';
import logoV from '~/assets/img/logo-v.svg';

interface Props {
  children?: React.ReactNode;
}

interface CarouselItem {
  heading: string;
  subheading: string;
}

const Done: React.FC<Props> = (props: Props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();

  const [showActions, setShowActions] = useState(false);

  const carouselWordingList: CarouselItem[] = t('welcome.landing.carousel', {
    returnObjects: true,
  });

  const showActionsHandler = () => {
    setShowActions(true);
  };

  const toRegister = () => {
    navigate('/onboarding');
  };

  useEffect(() => {
    if (location.state && location.state.from === '/onboarding') {
      setShowActions(true);
    }
  }, [location.state]);

  return (
    <div className='bg-secondary h-screen flex flex-col relative'>
      <div className={`${!showActions ? 'opacity-100' : 'opacity-0'} duration-800`}>
        <HCHeader size='l' title={<img src={logo} alt='logo' />} />
        <HCCarousel className='mb-auto'>
          {carouselWordingList.map((item, idx) => (
            <div className='pt-6 pb-18 flex flex-col items-center' key={idx}>
              <img
                src={`/src/assets/img/welcome-page-${idx + 1}.svg`}
                alt='img'
                className='mb-12'
              />
              <h2 className='text-heading-m text-tertiary mb-2'>{item.heading}</h2>
              <h3 className='text-body-m text-tertiary'>{item.subheading}</h3>
            </div>
          ))}
        </HCCarousel>
      </div>
      <div
        className={`${showActions ? 'opacity-100' : 'opacity-0'} duration-800
          w-full absolute top-0 flex flex-col items-center pt-16`}
      >
        <div className='mb-4'>
          <img src={logoV} alt='logo' />
        </div>
        <span className='text-body-m text-placeholder'>{t('welcome.slogan')}</span>
      </div>
      <HCBottomSheet show={showActions} backdrop={false}>
        <h3 className='text-heading-xs text-secondary mb-2'>{t('welcome.landing.heading')}</h3>
        <h4 className='text-body-xs text-tertiary mb-3'>{t('welcome.landing.subheading')}</h4>
        <HCButton color='highlight' className='mb-4' onClick={toRegister}>
          {t('welcome.landing.register')}
        </HCButton>
        <HCDivider className='text-body-bold-s mb-4'>{t('welcome.landing.divider')}</HCDivider>
        <HCButton color='secondary' prefix={<img src={google} alt='icon' />} className='mb-2'>
          {t('welcome.landing.actions.google')}
        </HCButton>
        <HCButton color='secondary' prefix={<img src={facebook} alt='icon' />}>
          {t('welcome.landing.actions.facebook')}
        </HCButton>
      </HCBottomSheet>
      <div className='pt-4 pb-6 px-4 mt-auto'>
        <HCButton color='highlight' onClick={showActionsHandler}>
          {t('welcome.landing.start')}
        </HCButton>
      </div>
    </div>
  );
};

export default Done;
