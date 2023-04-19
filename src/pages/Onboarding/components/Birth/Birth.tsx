import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import dayjs from 'dayjs';
import { useAppDispatch, useAppSelector } from '~/store/hook';

import Layout from '../Layout';
import DatePicker, { DatePickerProps } from '~/components/DatePicker';
import HCButton from '~/components/Button';
import { setUser } from '~/store/features/uesr';

interface Props {
  children?: React.ReactNode;
}

const Birth: React.FC<Props> = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const user = useAppSelector((state) => state.user.user);

  const onChangeHandler: DatePickerProps['onChange'] = (date) => {
    dispatch(setUser({ birth: dayjs(date).valueOf() }));
  };

  const toNext = () => {
    navigate('/onboarding/amount');
  };

  return (
    <Layout heading={t('onboarding.birth.heading')} subheading={t('onboarding.birth.subheading')}>
      <DatePicker
        value={user.birth ? dayjs(user.birth) : null}
        className='mb-3'
        onChange={onChangeHandler}
      />
      <HCButton color='highlight' onClick={toNext} disabled={!user.birth} next>
        <span>{t('next-step')}</span>
      </HCButton>
    </Layout>
  );
};

export default Birth;
