import { Fragment } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { useArgs } from '@storybook/store';

import HCBottomSheet from '~/components/BottomSheet';
import HCButton from '~/components/Button';
import HCInput from '~/components/Input';

export default {
  title: 'Components/BottomSheet',
  component: HCBottomSheet,
  argTypes: {
    children: {
      control: false,
      description: 'Actions in the bottom sheet.',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    show: {
      control: 'boolean',
      description: 'Whether the bottom sheet is visible or not.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    header: {
      control: 'text',
      description: 'The header title for the bottom sheet.',
      table: {
        type: { summary: 'string' },
      },
    },
    content: {
      control: 'text',
      description: 'The header content for the bottom sheet.',
      table: {
        type: { summary: 'string' },
      },
    },
    backdrop: {
      control: 'boolean',
      description: 'Whether the bottom sheet has backdrop or not.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: true },
      },
    },
    handle: {
      control: 'boolean',
      description: 'Add an icon on the header that can drag to the top.',
      table: {
        type: { summary: 'boolean' },
      },
    },
    keyboard: {
      control: 'boolean',
      description: 'Set default height for keyboard showing',
      table: {
        type: { summary: 'boolean' },
      },
    },
  },
  args: {
    show: false,
    header: '標題',
    content: '解說',
    backdrop: true,
    handle: false,
    keyboard: false,
    children: (
      <Fragment>
        <HCInput placeholder='輸入你的訓練菜單名稱' className='mb-3' />
        <HCButton color='primary' disabled>
          建立菜單
        </HCButton>
      </Fragment>
    ),
  },
} as Meta<typeof HCBottomSheet>;

type Story = StoryFn<typeof HCBottomSheet>;

export const Basic: Story = () => {
  const [{ show }, updateArgs] = useArgs();

  const handleClose = () => {
    updateArgs({ show: false });
  };

  return (
    <HCBottomSheet show={show} onClose={handleClose} backdrop={false}>
      <h3 className='text-heading-xs text-secondary mb-2'>歡迎來到 HANCHAU！</h3>
      <h4 className='text-body-xs text-tertiary mb-3'>跟著老師動次動次動</h4>
      <HCButton color='highlight' className='mb-4'>
        馬上開始
      </HCButton>
    </HCBottomSheet>
  );
};

export const Header: Story = () => {
  const [{ show }, updateArgs] = useArgs();

  const handleClose = () => {
    updateArgs({ show: false });
  };

  return (
    <HCBottomSheet show={show} header='標題' content='解說' onClose={handleClose}>
      <HCInput placeholder='輸入你的訓練菜單名稱' className='mb-3' />
      <HCButton color='primary' disabled>
        建立菜單
      </HCButton>
    </HCBottomSheet>
  );
};

export const Keyboard: Story = () => {
  const [{ show }, updateArgs] = useArgs();

  const handleClose = () => {
    updateArgs({ show: false });
  };

  return (
    <HCBottomSheet show={show} header='標題' content='解說' onClose={handleClose} keyboard>
      <HCInput placeholder='輸入你的訓練菜單名稱' className='mb-3' />
      <HCButton color='primary' disabled>
        建立菜單
      </HCButton>
    </HCBottomSheet>
  );
};

export const Handle: Story = () => {
  const [{ show }, updateArgs] = useArgs();

  const handleClose = () => {
    updateArgs({ show: false });
  };

  return (
    <HCBottomSheet show={show} header='標題' content='解說' onClose={handleClose} handle>
      <HCInput placeholder='輸入你的訓練菜單名稱' className='mb-3' />
      <HCButton color='primary' disabled>
        建立菜單
      </HCButton>
    </HCBottomSheet>
  );
};
