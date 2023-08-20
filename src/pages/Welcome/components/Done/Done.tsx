import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from '~/store/hook';

import HCHeader from '~/components/Header';
import HCCarousel from '~/components/Carousel';
import HCButton from '~/components/Button';
import HCBottomSheet from '~/components/BottomSheet';
import HCDivider from '~/components/Divider';
import UtilsService from '~/services/utils';
import AuthService from '~/services/auth';
import { setUser } from '~/store/features/user';

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

const Done: React.FC<Props> = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const [showActions, setShowActions] = useState(false);
  const [displayClass, setDisplayClass] = useState('hidden');

  const carouselWordingList: CarouselItem[] = t('welcome.landing.carousel', {
    returnObjects: true,
  });

  const handleToRegister = () => {
    navigate('/onboarding');
  };

  const handleShowActions = () => {
    setDisplayClass('block');
    setTimeout(() => setShowActions(true));
  };

  useEffect(() => {
    if (location.state && location.state.from === '/onboarding') {
      handleShowActions();
    }
  }, [location.state]);

  useEffect(() => {
    const setUserId = async () => {
      const result = await AuthService.redirectResult();

      if (result) {
        const id = result.user.uid;

        const user = await AuthService.queryUser(id);
        dispatch(setUser(user));
      }
    };
    setUserId();
  }, [dispatch]);

  return (
    <div className='bg-secondary h-screen flex flex-col relative'>
      <div
        className={`${!showActions ? 'opacity-100' : 'opacity-0'} transition-opacity duration-800`}
      >
        <HCHeader size='m' title={<img src={logo} alt='logo' />} className='bg-secondary' />
        <HCCarousel className='mb-auto'>
          {carouselWordingList.map((item, idx) => (
            <div className='pt-6 pb-18 flex flex-col items-center' key={idx}>
              <img
                src={UtilsService.getImageUrl(`welcome-page-${idx + 1}.svg`)}
                alt='img'
                className='mb-12'
              />
              <h2 className='text-heading-m text-tertiary mb-2'>{item.heading}</h2>
              <h3 className='text-body-m text-tertiary'>{item.subheading}</h3>
            </div>
          ))}
        </HCCarousel>
      </div>

      <div className={displayClass}>
        <div
          className={`${showActions ? 'opacity-100' : 'opacity-0'} duration-800
          w-full absolute top-0 flex flex-col items-center pt-16`}
        >
          <div className='mb-4'>
            <img src={logoV} alt='logo' />
          </div>
          <span className='text-body-m text-placeholder'>{t('welcome.slogan')}</span>
        </div>
      </div>

      <HCBottomSheet show={showActions} backdrop={false}>
        <div className='px-4 pt-9 pb-6'>
          <h3 className='text-heading-xs text-secondary mb-2'>{t('welcome.landing.heading')}</h3>
          <h4 className='text-body-xs text-tertiary mb-3'>{t('welcome.landing.subheading')}</h4>
          <HCButton color='primary' className='mb-4' onClick={handleToRegister}>
            {t('welcome.landing.register')}
          </HCButton>
          <HCDivider className='text-body-bold-s mb-4'>{t('welcome.landing.divider')}</HCDivider>
          <HCButton
            color='secondary'
            prefix={<img src={google} alt='icon' />}
            onClick={AuthService.signInWithGoogle}
            className='mb-2'
          >
            {t('welcome.landing.actions.google')}
          </HCButton>
          <HCButton
            color='secondary'
            prefix={<img src={facebook} alt='icon' />}
            onClick={AuthService.signInWithFacebook}
          >
            {t('welcome.landing.actions.facebook')}
          </HCButton>
        </div>
      </HCBottomSheet>
      <div className='pt-4 pb-6 px-4 mt-auto'>
        <HCButton color='primary' onClick={handleShowActions}>
          {t('welcome.landing.start')}
        </HCButton>
      </div>
    </div>
  );
};

export default Done;
