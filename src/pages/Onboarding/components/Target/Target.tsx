import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Layout from '../Layout';
import HCInput from '~/components/Input';
import HCButton from '~/components/Button';
import { useUser } from '../..';

interface Props {
  children?: React.ReactNode;
}

const Target: React.FC<Props> = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const { user, setUser } = useUser();

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser((prevUser) => ({
      ...prevUser,
      target: +e.target.value,
    }));
  };

  const toNext = () => {
    navigate('/onboarding/name');
  };

  return (
    <Layout heading={t('onboarding.target.heading')} subheading={t('onboarding.target.subheading')}>
      <HCInput
        className='mb-3'
        value={user.target}
        placeholder={t('target-weight') as string}
        suffix='kg'
        onChange={onChangeHandler}
      />
      <HCButton color='highlight' onClick={toNext} disabled={!user.target} next>
        <span>{t('next-step')}</span>
      </HCButton>
    </Layout>
  );
};

export default Target;
