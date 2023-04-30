import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '~/store/hook';

import Layout from '../Layout';
import HCInput from '~/components/Input';
import HCButton from '~/components/Button';
import { setUser } from '~/store/features/user';

interface Props {
  children?: React.ReactNode;
}

const Name: React.FC<Props> = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const user = useAppSelector((state) => state.user.user);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setUser({ name: e.target.value }));
  };

  const toNext = () => {
    navigate('/onboarding/login');
  };

  return (
    <Layout heading={t('onboarding.name.heading')} subheading={t('onboarding.name.subheading')}>
      <HCInput
        className='mb-3'
        value={user.name}
        placeholder={t('your-name')}
        onChange={onChangeHandler}
      />
      <HCButton color='highlight' onClick={toNext} disabled={!user.name} next>
        <span>{t('next-step')}</span>
      </HCButton>
    </Layout>
  );
};

export default Name;
