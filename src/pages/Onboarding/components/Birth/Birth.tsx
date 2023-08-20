import React from 'react';
import { useTranslation } from 'react-i18next';
import dayjs from 'dayjs';
import { useAppDispatch, useAppSelector } from '~/store/hook';

import Layout from '../Layout';
import DatePicker, { DatePickerProps } from '~/components/DatePicker';
import HCButton from '~/components/Button';
import { setUser } from '~/store/features/user';

interface Props {
  children?: React.ReactNode;
  toNext: () => void;
}

const Birth: React.FC<Props> = ({ toNext }) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const user = useAppSelector((state) => state.user.user);

  const onChangeHandler: DatePickerProps['onChange'] = (date) => {
    dispatch(setUser({ birth: dayjs(date).valueOf() }));
  };

  return (
    <Layout heading={t('onboarding.birth.heading')} subheading={t('onboarding.birth.subheading')}>
      <DatePicker
        value={user.birth ? dayjs(user.birth) : null}
        className='mb-3'
        onChange={onChangeHandler}
      />
      <HCButton color='primary' onClick={toNext} disabled={!user.birth} next>
        <span>{t('next-step')}</span>
      </HCButton>
    </Layout>
  );
};

export default Birth;
