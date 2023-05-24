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

const Height: React.FC<Props> = ({ toNext }) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const user = useAppSelector((state) => state.user.user);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setUser({ height: e.target.value }));
  };

  return (
    <Layout heading={t('onboarding.height.heading')} subheading={t('onboarding.height.subheading')}>
      <HCInput
        className='mb-3'
        value={user.height}
        type='number'
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
