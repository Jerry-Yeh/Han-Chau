import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Layout from '../Layout';
import HCButton from '~/components/Button';
import { useUser } from '../..';
import google from '~/assets/img/google.svg';
import facebook from '~/assets/img/facebook.svg';

interface Props {
  children?: React.ReactNode;
}

const Login: React.FC<Props> = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const { user, setUser } = useUser();

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser((prevUser) => ({
      ...prevUser,
      name: e.target.value,
    }));
  };

  const toNext = () => {
    navigate('/onboarding/login');
  };

  return (
    <Layout heading={t('onboarding.login.heading')} subheading={t('onboarding.login.subheading')}>
      <HCButton
        color='secondary'
        onClick={toNext}
        className='mb-2'
        prefix={<img src={google} alt='icon' />}
      >
        <span>{t('onboarding.login.method.google')}</span>
      </HCButton>
      <HCButton
        className='mb-6'
        color='secondary'
        onClick={toNext}
        prefix={<img src={facebook} alt='icon' />}
      >
        <span>{t('onboarding.login.method.facebook')}</span>
      </HCButton>
      <h4 className='text-body-xs text-tertiary'>
        {t('onboarding.login.content.front')}
        <NavLink to='/onboarding/terms' className='text-highlight-light'>
          {t('onboarding.login.content.key')}
        </NavLink>
        {t('onboarding.login.content.end')}
      </h4>
    </Layout>
  );
};

export default Login;
