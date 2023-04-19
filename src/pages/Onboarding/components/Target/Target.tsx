import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '~/store/hook';

import Layout from '../Layout';
import HCInput from '~/components/Input';
import HCButton from '~/components/Button';
import { setUser } from '~/store/features/uesr';

interface Props {
  children?: React.ReactNode;
}

const Target: React.FC<Props> = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const user = useAppSelector((state) => state.user.user);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setUser({ targetWeight: +e.target.value }));
  };

  const toNext = () => {
    navigate('/onboarding/name');
  };

  return (
    <Layout heading={t('onboarding.target.heading')} subheading={t('onboarding.target.subheading')}>
      <HCInput
        className='mb-3'
        value={user.targetWeight}
        type='number'
        placeholder={t('target-weight') as string}
        suffix='kg'
        onChange={onChangeHandler}
      />
      <HCButton color='highlight' onClick={toNext} disabled={!user.targetWeight} next>
        <span>{t('next-step')}</span>
      </HCButton>
    </Layout>
  );
};

export default Target;
