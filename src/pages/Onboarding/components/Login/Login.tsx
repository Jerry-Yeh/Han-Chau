import React from 'react';
import { useTranslation } from 'react-i18next';

import Layout from '../Layout';
import HCButton from '~/components/Button';
import AuthService from '~/services/auth';

import google from '~/assets/img/google.svg';
import facebook from '~/assets/img/facebook.svg';

interface Props {
  children?: React.ReactNode;
}

const Login: React.FC<Props> = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'onboarding.login' });

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
        <button className='text-highlight-light'>{t('content.key')}</button>
        {t('content.end')}
      </h4>
    </Layout>
  );
};

export default Login;
