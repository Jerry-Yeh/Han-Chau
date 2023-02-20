import React, { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

import { useUser } from '../..';
import Layout from '../Layout';
import { getTDEE } from '~/services/formula';
import HCDivider from '~/components/Divider';
import HCButton from '~/components/Button';

interface Props {
  children?: React.ReactNode;
}

const Results: React.FC<Props> = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'onboarding.results' });

  const { user } = useUser();

  return (
    <Fragment>
      <Layout heading={t('heading', { name: user.name })} subheading={t('subheading')} />
      <HCDivider />
      <div className='px-4 py-6'>
        <section className='p-6 mb-4'>
          <h4 className='text-body-s text-tertiary mb-1'>{t('section1.heading')}</h4>
          <div className='mb-6'>
            <span className='text-heading-xl'>
              {getTDEE(user) ? Math.round(getTDEE(user) as number) : 0}
            </span>
            <span className='text-body-bold-xs'>{t('section1.unit')}</span>
          </div>
          <img src='/src/assets/img/onboarding_final.svg' alt='img' />
        </section>
        <section className='p-6'>
          <h4 className='text-heading-s mb-2'>{t('section2.heading')}</h4>
          <h5 className='text-body-s text-tertiary mb-6'>{t('section2.subheading')}</h5>
          <div className='grid gap-y-4'>
            {(t('section2.items', { returnObjects: true }) as []).map((item, idx) => (
              <div key={idx} className='flex'>
                <CheckCircleIcon className='text-highlight w-6 h-6 mr-3' />
                <span className='text-body-bold-m text-tertiary'>{item}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
      <div className='px-4 pt-4 pb-6'>
        <HCButton color='highlight'>{t('action')}</HCButton>
      </div>
    </Fragment>
  );
};

export default Results;
