import React, { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowSmallRightIcon } from '@heroicons/react/20/solid';

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
    <Fragment>
      <Layout heading={t('weight-heading')} subheading={t('weight-subheading')}>
        <HCRadioGroup className='mb-3' value={user.gender} onChange={onChangeHandler}>
          <HCRadio label={t('male') as string} value='male' />
          <HCRadio label={t('female') as string} value='female' />
        </HCRadioGroup>
        <HCButton color='highlight' onClick={toNext} disabled={!user.gender}>
          <span className='mr-2'>Button</span>
          <ArrowSmallRightIcon className='h-6 w-6' />
        </HCButton>
      </Layout>
    </Fragment>
  );
};

export default Gender;
