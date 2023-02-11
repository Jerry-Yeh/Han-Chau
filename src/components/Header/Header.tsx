import React, { Fragment } from 'react';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { useTranslation } from 'react-i18next';

import logomark from '~/assets/img/logomark.svg';

interface Props {
  toPrev?: () => void;
  toNext?: () => void;
  fractionClass?: string;
}

const HCHeader: React.FC<Props> = (props: Props) => {
  const { t } = useTranslation();

  return (
    <Fragment>
      <div className='h-12 px-4 py-2 grid grid-cols-3'>
        <div className='hover:cursor-pointer'>
          {props.toPrev && <ArrowLeftIcon className='w-8 h-8' onClick={props.toPrev} />}
        </div>
        <div className='flex justify-center'>
          <img className='w-7' src={logomark} alt='LOGO' />
        </div>
        <div className='flex justify-end items-center hover:cursor-pointer'>
          {props.toNext && (
            <button className='text-tertiary' onClick={props.toNext}>
              {t('skip')}
            </button>
          )}
        </div>
      </div>
      <div className='w-full bg-tertiary'>
        <div
          className={`
            h-1 ${props.fractionClass ? 'bg-highlight' : 'bg-transparent'}
            ${props.fractionClass} transition-all duration-300
          `}
        ></div>
      </div>
    </Fragment>
  );
};

export default HCHeader;
