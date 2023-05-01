import { Meta, StoryFn } from '@storybook/react';
import { Fragment, useRef } from 'react';

import HCSnackBar, { HandleSnackBar, SnackBarProps } from '~/components/SnackBar';
import HCButton from '~/components/Button';

export default {
  title: 'Components/SnackBar',
  component: HCSnackBar,
  argTypes: {
    type: {
      control: 'select',
      options: ['success', 'error', 'warning'],
      description: 'Type of the snack bar.',
      table: {
        type: { summary: 'success | error | warning' },
      },
    },
    content: {
      control: 'text',
      description: 'Content of the snack bar.',
      table: {
        type: { summary: 'string' },
      },
    },
  },
} as Meta<typeof HCSnackBar>;

type Story = StoryFn<typeof HCSnackBar>;

export const Success: Story = ({
  type = 'success',
  content = '成功加入國際練胸日',
}: SnackBarProps) => {
  const snackBarRef = useRef<HandleSnackBar>(null);

  const handleOpenSnackBar = () => {
    snackBarRef.current?.open();
  };

  return (
    <Fragment>
      <div className='p-4'>
        <HCButton color='primary' onClick={handleOpenSnackBar}>
          Success
        </HCButton>
      </div>
      <HCSnackBar ref={snackBarRef} type={type} content={content} />
    </Fragment>
  );
};

export const Error: Story = ({
  type = 'error',
  content = '無法將動作加入至國際練胸日',
}: SnackBarProps) => {
  const snackBarRef = useRef<HandleSnackBar>(null);

  const handleOpenSnackBar = () => {
    snackBarRef.current?.open();
  };

  return (
    <Fragment>
      <div className='p-4'>
        <HCButton color='primary' onClick={handleOpenSnackBar}>
          Error
        </HCButton>
      </div>
      <HCSnackBar ref={snackBarRef} type={type} content={content} />
    </Fragment>
  );
};

export const Warning: Story = ({
  type = 'warning',
  content = '即將達到免費版上限',
}: SnackBarProps) => {
  const snackBarRef = useRef<HandleSnackBar>(null);

  const handleOpenSnackBar = () => {
    snackBarRef.current?.open();
  };

  return (
    <Fragment>
      <div className='p-4'>
        <HCButton color='primary' onClick={handleOpenSnackBar}>
          Warning
        </HCButton>
      </div>
      <HCSnackBar ref={snackBarRef} type={type} content={content} />
    </Fragment>
  );
};

export const LongMessage: Story = ({
  type = 'success',
  content = '這是一個超級長的訊息但應該來說不應該有這麼長這個是來確認說當今天訊息太長怎麼辦',
}: SnackBarProps) => {
  const snackBarRef = useRef<HandleSnackBar>(null);

  const handleOpenSnackBar = () => {
    snackBarRef.current?.open();
  };

  return (
    <Fragment>
      <div className='p-4'>
        <HCButton color='primary' onClick={handleOpenSnackBar}>
          Long Message
        </HCButton>
      </div>
      <HCSnackBar ref={snackBarRef} type={type} content={content} />
    </Fragment>
  );
};
