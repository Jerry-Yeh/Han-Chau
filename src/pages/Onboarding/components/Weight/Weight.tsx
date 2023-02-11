import React, { Fragment, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowSmallRightIcon } from '@heroicons/react/20/solid';

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
      weight: e.target.value,
    }));
  };

  const toNext = () => {
    navigate('/onboarding/gender');
  };

  return (
    <Fragment>
      <Layout heading={t('weight-heading')} subheading={t('weight-subheading')}>
        <HCInput
          className='mb-3'
          value={user.weight}
          placeholder={t('weight') as string}
          suffix='kg'
          onChange={onChangeHandler}
        />
        <HCButton color='highlight' onClick={toNext} disabled={!user.weight}>
          <span className='mr-2'>Button</span>
          <ArrowSmallRightIcon className='h-6 w-6' />
        </HCButton>
      </Layout>
    </Fragment>
  );
};

export default Weight;
