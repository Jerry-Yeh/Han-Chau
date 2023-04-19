import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '~/store/hook';

import Layout from '../Layout';
import { HCRadio, HCRadioGroup, RadioValueType } from '~/components/Radio';
import HCButton from '~/components/Button';
import { LEVEL } from '~/enums/user';
import { setUser } from '~/store/features/uesr';

import type { RadioOptionType } from '~/components/Radio';

interface Props {
  children?: React.ReactNode;
}

const Level: React.FC<Props> = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const user = useAppSelector((state) => state.user.user);

  const list: RadioOptionType[] = [
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

  const onChangeHandler = (newValue: RadioValueType) => {
    dispatch(setUser({ level: newValue as number }));
  };

  const toNext = () => {
    navigate('/onboarding/target');
  };

  return (
    <Layout heading={t('onboarding.amount.heading')} subheading={t('onboarding.amount.subheading')}>
      <HCRadioGroup className='mb-3' value={user.level} onChange={onChangeHandler}>
        {list.map((item) => (
          <HCRadio {...item} key={item.label} />
        ))}
      </HCRadioGroup>
      <HCButton color='highlight' onClick={toNext} disabled={!user.level} next>
        <span>{t('next-step')}</span>
      </HCButton>
    </Layout>
  );
};

export default Level;
