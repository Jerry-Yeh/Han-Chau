import React, { useState, useEffect } from 'react';
import Icon from '@ant-design/icons';

import HCLogo from '~/components/Logo';

import { ReactComponent as SpinM } from '~/assets/img/spin-m.svg';

interface Props {
  children?: React.ReactNode;
  show: boolean;
}

const SpinIcon: React.FC = (props: any) => {
  return <SpinM {...props} />;
};

const Loading: React.FC<Props> = ({ show }: Props) => {
  const [displayClass, setDisplayClass] = useState('hidden');
  const [opacityClsas, setOpacityClass] = useState('opacity-0');

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    if (show) {
      setDisplayClass('block');
    } else {
      setOpacityClass('opacity-0');

      timer = setTimeout(() => {
        setDisplayClass('hidden');
      }, 500);
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [show]);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    if (displayClass === 'block') {
      timer = setTimeout(() => {
        setOpacityClass('opacity-100');
      }, 0);
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [displayClass]);

  return (
    <div
      className={`${displayClass} ${opacityClsas} transition-opacity duration-500 z-30 absolute left-0 top-0`}
    >
      <div className='w-screen h-screen bg-secondary flex flex-col justify-center items-center'>
        <HCLogo className='mb-18' />
        <Icon
          spin
          component={SpinIcon}
          style={{
            fontSize: '36px',
          }}
        />
      </div>
    </div>
  );
};

export default Loading;
