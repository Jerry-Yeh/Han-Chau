import React, { Fragment, useState } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowSmallRightIcon } from '@heroicons/react/20/solid';

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
    // setValue(e.target.value);
    setUser((prevUser) => ({
      ...prevUser,
      height: e.target.value,
    }));
  };

  const toNext = () => {
    navigate('/onboarding/weight');
  };

  return (
    <Fragment>
      <Layout heading={t('height-heading')} subheading={t('height-subheading')}>
        <HCInput
          className='mb-3'
          value={`${user.height}`}
          placeholder={t('height') as string}
          suffix='cm'
          onChange={onChangeHandler}
        />
        <HCButton color='highlight' onClick={toNext} disabled={!user.height}>
          <span className='mr-2'>Button</span>
          <ArrowSmallRightIcon className='h-6 w-6' />
        </HCButton>
      </Layout>
    </Fragment>
  );
};

export default Height;
