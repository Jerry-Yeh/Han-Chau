import React from 'react';
import Icon from '@ant-design/icons';

import HCLogo from '~/components/Logo';

import { ReactComponent as SpinM } from '~/assets/img/spin-m.svg';

interface Props {
  children?: React.ReactNode;
  show: boolean;
  onClose: () => void;
}

const SpinIcon: React.FC = (props: any) => {
  return <SpinM {...props} />;
};

const Loading: React.FC<Props> = ({ show }: Props) => {
  console.log(show);

  return (
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
  );
};

export default Loading;
