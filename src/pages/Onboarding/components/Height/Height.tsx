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

const Height: React.FC<Props> = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const { user, setUser } = useUser();

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser((prevUser) => ({
      ...prevUser,
      height: +e.target.value,
    }));
  };

  const toNext = () => {
    navigate('/onboarding/weight');
  };

  return (
    <Layout heading={t('onboarding.height.heading')} subheading={t('onboarding.height.subheading')}>
      <HCInput
        className='mb-3'
        value={user.height}
        placeholder={t('height')}
        suffix='cm'
        onChange={onChangeHandler}
      />
      <HCButton color='highlight' onClick={toNext} disabled={!user.height} next>
        <span>{t('next-step')}</span>
      </HCButton>
    </Layout>
  );
};

export default Height;
