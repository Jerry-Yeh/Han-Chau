import React, { useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '~/store/hook';

import Layout from '../Layout';
import HCButton from '~/components/Button';
import AuthService from '~/services/auth';
import { setUser } from '~/store/features/user';

import google from '~/assets/img/google.svg';
import facebook from '~/assets/img/facebook.svg';

interface Props {
  children?: React.ReactNode;
}

const Login: React.FC<Props> = () => {
  const navigate = useNavigate();
  const { t } = useTranslation('translation', { keyPrefix: 'onboarding.login' });
  const dispatch = useAppDispatch();

  const user = useAppSelector((state) => state.user.user);

  useEffect(() => {
    const setUserId = async () => {
      const result = await AuthService.redirectResult();

      if (result) {
        const id = result.user.uid;

        dispatch(setUser({ id }));
        localStorage.setItem('id', id);
        await AuthService.saveUser({ ...user, id });
        navigate('/onboarding/results');
      }
    };
    setUserId();
  }, [user, setUser, navigate]);

  return (
    <Layout heading={t('heading')} subheading={t('subheading')}>
      <HCButton
        color='secondary'
        onClick={AuthService.signInWithGoogle}
        className='mb-2'
        prefix={<img src={google} alt='icon' />}
      >
        <span>{t('actions.google')}</span>
      </HCButton>
      <HCButton
        className='mb-6'
        color='secondary'
        onClick={AuthService.signInWithFacebook}
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
