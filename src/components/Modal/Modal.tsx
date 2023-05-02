import React, { useState, useEffect, ReactNode } from 'react';
import { Modal } from 'antd';
import {
  ExclamationTriangleIcon,
  CheckCircleIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/24/outline';

import HCButton from '../Button';

import type { ModalProps } from '.';

interface Image {
  class: string;
  icon: ReactNode;
}

const HCModal: React.FC<ModalProps> = (props: ModalProps) => {
  const [img, setImg] = useState<Image>({
    class: 'bg-warning-light icon-warning',
    icon: <ExclamationTriangleIcon />,
  });

  useEffect(() => {
    switch (props.type) {
      case 'warning':
        setImg({
          class: 'bg-warning-light icon-warning',
          icon: <ExclamationTriangleIcon />,
        });
        break;
      case 'success':
        setImg({
          class: 'bg-success-light icon-success',
          icon: <CheckCircleIcon />,
        });
        break;
      case 'error':
        setImg({
          class: 'bg-destructive-light icon-destructive',
          icon: <ExclamationCircleIcon />,
        });
        break;
    }
  }, [props.type]);

  return (
    <Modal
      open={props.open}
      closable={false}
      centered
      style={{
        padding: 0,
      }}
      footer={
        <div className='p-6 flex gap-2 border-t border-secondary'>
          <HCButton color='tertiary' onClick={props.onCancel}>
            {props.cancel}
          </HCButton>
          <HCButton color='highlight' onClick={props.onConfirm}>
            {props.confirm}
          </HCButton>
        </div>
      }
      maskClosable={false}
      onCancel={props.onCancel}
    >
      <div className='p-6 flex flex-col items-center'>
        <div className={`w-14 h-14 p-4 mb-4 rounded-lg ${img.class}`}>{img.icon}</div>
        <h3 className='text-heading-s text-primary mb-4'>{props.title}</h3>
        <p className='text-body-m text-secondary text-center'>{props.description}</p>
      </div>
    </Modal>
  );
};

HCModal.defaultProps = {
  // type: 'warning',
};

export default HCModal;
