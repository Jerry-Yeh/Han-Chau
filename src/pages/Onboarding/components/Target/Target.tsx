import React from 'react';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '~/store/hook';

import Layout from '../Layout';
import HCInput from '~/components/Input';
import HCButton from '~/components/Button';
import { setUser } from '~/store/features/user';

interface Props {
  children?: React.ReactNode;
  toNext: () => void;
}

const Target: React.FC<Props> = ({ toNext }) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const user = useAppSelector((state) => state.user.user);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setUser({ targetWeight: +e.target.value }));
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
      <HCButton color='primary' onClick={toNext} disabled={!user.targetWeight} next>
        <span>{t('next-step')}</span>
      </HCButton>
    </Layout>
  );
};

export default Target;
