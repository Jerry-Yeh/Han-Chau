import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Layout from '../Layout';
import { HCRadio, HCRadioGroup } from '~/components/Radio';
import HCButton from '~/components/Button';
import { useUser } from '../..';
import { AMOUNT } from '~/enums/user';

import type { RadioItem } from '~/components/Radio';

interface Props {
  children?: React.ReactNode;
}

const Amount: React.FC<Props> = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const { user, setUser } = useUser();
  const list: RadioItem[] = [
    {
      label: t('onboarding.amount.selection.bedridden.heading'),
      content: t('onboarding.amount.selection.bedridden.content'),
      value: AMOUNT.BEDRIDDEN,
    },
    {
      label: t('onboarding.amount.selection.sedentary.heading'),
      content: t('onboarding.amount.selection.sedentary.content'),
      value: AMOUNT.SEDENTARY,
    },
    {
      label: t('onboarding.amount.selection.light.heading'),
      content: t('onboarding.amount.selection.light.content'),
      value: AMOUNT.LIGHT,
    },
    {
      label: t('onboarding.amount.selection.moderate.heading'),
      content: t('onboarding.amount.selection.moderate.content'),
      value: AMOUNT.MODERATE,
    },
    {
      label: t('onboarding.amount.selection.heavy.heading'),
      content: t('onboarding.amount.selection.heavy.content'),
      value: AMOUNT.HEAVY,
    },
    {
      label: t('onboarding.amount.selection.athlete.heading'),
      content: t('onboarding.amount.selection.athlete.content'),
      value: AMOUNT.ATHLETE,
    },
  ];

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser((prevUser) => ({
      ...prevUser,
      amount: +e.target.value,
    }));
  };

  const toNext = () => {
    navigate('/onboarding/level');
  };

  return (
    <Layout heading={t('onboarding.amount.heading')} subheading={t('onboarding.amount.subheading')}>
      <HCRadioGroup className='mb-3' value={user.amount} onChange={onChangeHandler}>
        {list.map((item) => (
          <HCRadio {...item} key={item.value} />
        ))}
      </HCRadioGroup>
      <HCButton color='highlight' onClick={toNext} disabled={!user.amount} next>
        <span>{t('next-step')}</span>
      </HCButton>
    </Layout>
  );
};

export default Amount;
