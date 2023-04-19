import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Layout from '../Layout';
import { HCRadio, HCRadioGroup, RadioValueType } from '~/components/Radio';
import HCButton from '~/components/Button';
import { useUser } from '../..';
import { GENDER } from '~/enums/user';

interface Props {
  children?: React.ReactNode;
}

const Gender: React.FC<Props> = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const { user, setUser } = useUser();

  const onChangeHandler = (newValue: RadioValueType) => {
    setUser((prevUser) => ({
      ...prevUser,
      gender: newValue as number,
    }));
  };

  const toNext = () => {
    navigate('/onboarding/birth');
  };

  return (
    <Layout heading={t('onboarding.gender.heading')} subheading={t('onboarding.gender.subheading')}>
      <HCRadioGroup className='mb-3' value={user.gender} onChange={onChangeHandler}>
        <HCRadio label={t('male') as string} value={GENDER.MALE} />
        <HCRadio label={t('female') as string} value={GENDER.FEMALE} />
      </HCRadioGroup>
      <HCButton color='highlight' onClick={toNext} disabled={!user.gender} next>
        <span>{t('next-step')}</span>
      </HCButton>
    </Layout>
  );
};

export default Gender;
