import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Layout from '../Layout';
import { HCRadio, HCRadioGroup } from '~/components/Radio';
import HCButton from '~/components/Button';
import { useUser } from '../..';
import { LEVEL } from '~/enums/user';

import type { RadioItem } from '~/components/Radio';

interface Props {
  children?: React.ReactNode;
}

const Level: React.FC<Props> = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const { user, setUser } = useUser();

  const list: RadioItem[] = [
    {
      label: t('onboarding.level.selection.beginner'),
      value: LEVEL.BEGINNER,
    },
    {
      label: t('onboarding.level.selection.intermediate'),
      value: LEVEL.INTERMEDIATE,
    },
    {
      label: t('onboarding.level.selection.advanced'),
      value: LEVEL.ADVANCED,
    },
  ];

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser((prevUser) => ({
      ...prevUser,
      level: +e.target.value,
    }));
  };

  const toNext = () => {
    navigate('/onboarding/target');
  };

  return (
    <Layout heading={t('onboarding.amount.heading')} subheading={t('onboarding.amount.subheading')}>
      <HCRadioGroup className='mb-3' value={user.gender} onChange={onChangeHandler}>
        {list.map((item) => (
          <HCRadio {...item} key={item.value} />
        ))}
      </HCRadioGroup>
      <HCButton color='highlight' onClick={toNext} disabled={!user.level} next>
        <span>{t('next-step')}</span>
      </HCButton>
    </Layout>
  );
};

export default Level;
