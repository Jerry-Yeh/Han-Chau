import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Layout from '../Layout';
import { HCRadio, HCRadioGroup } from '~/components/Radio';
import HCButton from '~/components/Button';
import { useUser } from '../..';

interface Props {
  children?: React.ReactNode;
}

const Gender: React.FC<Props> = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const { user, setUser } = useUser();

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser((prevUser) => ({
      ...prevUser,
      gender: e.target.value,
    }));
  };

  const toNext = () => {
    navigate('/onboarding/age');
  };

  return (
    <Layout heading={t('onboarding.gender.heading')} subheading={t('onboarding.gender.subheading')}>
      <HCRadioGroup className='mb-3' value={user.gender} onChange={onChangeHandler}>
        <HCRadio label={t('male') as string} value='male' />
        <HCRadio label={t('female') as string} value='female' />
      </HCRadioGroup>
      <HCButton color='highlight' onClick={toNext} disabled={!user.gender} next>
        <span>{t('next-step')}</span>
      </HCButton>
    </Layout>
  );
};

export default Gender;
