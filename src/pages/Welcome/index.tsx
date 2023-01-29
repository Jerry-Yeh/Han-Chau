import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
// import { ArrowSmallRightIcon } from '@heroicons/react/20/solid';

// import HCButton from '~/components/Button';
import HCInput, { InputType } from '~/components/Input';

interface Props {
  children?: React.ReactNode;
}

const Welcome: React.FC<Props> = () => {
  // const { t } = useTranslation();
  const inputRef = useRef<InputType>(null);

  return (
    <div>
      {/* <HCButton className='text-body-bold-s' color='highlight' disabled>
        <span className='mr-2'>{t('tag')}</span>
        <ArrowSmallRightIcon className='h-6 w-6' />
      </HCButton>
      <HCButton className='text-body-bold-s' color='success'>
        <span className='mr-2'>{t('tag')}</span>
        <ArrowSmallRightIcon className='h-6 w-6' />
      </HCButton> */}
      <HCInput label='caption' value={inputRef} prefix='$' suffix='CM' />
    </div>
  );
};

export default Welcome;
