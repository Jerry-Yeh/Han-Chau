import React from 'react';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '~/store/hook';

import Layout from '../Layout';
import { HCRadio, HCRadioGroup } from '~/components/Radio';
import HCButton from '~/components/Button';
import { AMOUNT } from '~/enums/user';
import { setUser } from '~/store/features/user';

import type { RadioOptionType, RadioValueType } from '~/components/Radio';

interface Props {
  children?: React.ReactNode;
  toNext: () => void;
}

const Amount: React.FC<Props> = ({ toNext }) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const user = useAppSelector((state) => state.user.user);
  const list: RadioOptionType[] = [
    {
      label: t('onboarding.amount.selection.bedridden.heading'),
      description: t('onboarding.amount.selection.bedridden.content'),
      value: AMOUNT.BEDRIDDEN,
    },
    {
      label: t('onboarding.amount.selection.sedentary.heading'),
      description: t('onboarding.amount.selection.sedentary.content'),
      value: AMOUNT.SEDENTARY,
    },
    {
      label: t('onboarding.amount.selection.light.heading'),
      description: t('onboarding.amount.selection.light.content'),
      value: AMOUNT.LIGHT,
    },
    {
      label: t('onboarding.amount.selection.moderate.heading'),
      description: t('onboarding.amount.selection.moderate.content'),
      value: AMOUNT.MODERATE,
    },
    {
      label: t('onboarding.amount.selection.heavy.heading'),
      description: t('onboarding.amount.selection.heavy.content'),
      value: AMOUNT.HEAVY,
    },
    {
      label: t('onboarding.amount.selection.athlete.heading'),
      description: t('onboarding.amount.selection.athlete.content'),
      value: AMOUNT.ATHLETE,
    },
  ];

  const onChangeHandler = (newValue: RadioValueType) => {
    dispatch(setUser({ amount: +newValue }));
  };

  return (
    <Layout heading={t('onboarding.amount.heading')} subheading={t('onboarding.amount.subheading')}>
      <HCRadioGroup className='mb-3' value={user.amount} onChange={onChangeHandler}>
        {list.map((item) => (
          <HCRadio {...item} key={item.label} />
        ))}
      </HCRadioGroup>
      <HCButton color='primary' onClick={toNext} disabled={!user.amount} next>
        <span>{t('next-step')}</span>
      </HCButton>
    </Layout>
  );
};

export default Amount;
