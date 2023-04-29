import React from 'react';
import Icon from '@ant-design/icons';

import Logomark from '~/assets/img/logomark.svg';
import { ReactComponent as SpinM } from '~/assets/img/spin-m.svg';

interface Props {
  children?: React.ReactNode;
  show: boolean;
  onClose: () => void;
}

const SpinIcon: React.FC = (props: any) => {
  return <SpinM {...props} />;
};

const Loading: React.FC<Props> = (props: Props) => {
  return (
    <div className='w-screen h-screen bg-secondary flex flex-col justify-center items-center'>
      <div className='w-27 h-27 bg-primary mb-18 flex justify-center items-center rounded-3xl'>
        <img src={Logomark} alt='logo' className='w-19.5' />
      </div>
      <Icon
        spin
        component={SpinIcon}
        style={{
          fontSize: '36px',
        }}
      />
    </div>
  );
};

export default Loading;
