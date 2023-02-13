import React from 'react';
import { useTranslation } from 'react-i18next';

interface Props {
  children?: React.ReactNode;
}

const Terms: React.FC<Props> = () => {
  const { t } = useTranslation();

  return (
    <div className='h-[calc(100vh_-_theme(spacing.13))] flex justify-center items-center'>
      <span>{t('onboarding.terms.heading')}</span>
    </div>
  );
};

export default Terms;
