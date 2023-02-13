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

const Weight: React.FC<Props> = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const { user, setUser } = useUser();

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser((prevUser) => ({
      ...prevUser,
      weight: +e.target.value,
    }));
  };

  const toNext = () => {
    navigate('/onboarding/gender');
  };

  return (
    <Layout heading={t('onboarding.weight.heading')} subheading={t('onboarding.weight.subheading')}>
      <HCInput
        className='mb-3'
        value={user.weight}
        placeholder={t('weight')}
        suffix='kg'
        onChange={onChangeHandler}
      />
      <HCButton color='highlight' onClick={toNext} disabled={!user.weight} next>
        <span>{t('next-step')}</span>
      </HCButton>
    </Layout>
  );
};

export default Weight;
