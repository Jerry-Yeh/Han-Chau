import React, { useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Layout from '../Layout';
import HCButton from '~/components/Button';
import { useUser } from '../..';
import { signInWithGoogle, redirectResult } from '~/services/authentication';

import google from '~/assets/img/google.svg';
import facebook from '~/assets/img/facebook.svg';

interface Props {
  children?: React.ReactNode;
}

const Login: React.FC<Props> = () => {
  const navigate = useNavigate();
  const { t } = useTranslation('translation', { keyPrefix: 'onborading.login' });

  const { user, setUser } = useUser();

  const signUp = () => {
    console.log('signUp', user);
  };

  useEffect(() => {
    const setUserId = async () => {
      const result = await redirectResult();
      console.log('result', result);

      if (result) {
        const id = result.user.uid;

        setUser((prevUser) => ({
          ...prevUser,
          id,
        }));
        localStorage.setItem('id', id);
        navigate('/onboarding/results');
      }
    };

    setUserId();
  }, [setUser, navigate]);

  return (
    <Layout heading={t('heading')} subheading={t('subheading')}>
      <HCButton
        color='secondary'
        onClick={signInWithGoogle}
        className='mb-2'
        prefix={<img src={google} alt='icon' />}
      >
        <span>{t('actions.google')}</span>
      </HCButton>
      <HCButton
        className='mb-6'
        color='secondary'
        onClick={signUp}
        prefix={<img src={facebook} alt='icon' />}
      >
        <span>{t('actions.facebook')}</span>
      </HCButton>
      <h4 className='text-body-xs text-tertiary'>
        {t('content.front')}
        <NavLink to='/onboarding/terms' className='text-highlight-light'>
          {t('content.key')}
        </NavLink>
        {t('content.end')}
      </h4>
    </Layout>
  );
};

export default Login;
