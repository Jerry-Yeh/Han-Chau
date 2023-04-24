import { Meta, StoryFn } from '@storybook/react';
import { useArgs } from '@storybook/store';

import HCModal, { ModalProps } from '~/components/Modal';

export default {
  title: 'Components/Modal',
  component: HCModal,
  argTypes: {
    open: {
      control: 'boolean',
      description: 'Whether the modal dialog is visible or not.',
      table: {
        type: { summary: 'boolean' },
      },
    },
    type: {
      control: 'select',
      options: ['warning', 'success', 'error'],
      description: 'Set type of the modal.',
      table: {
        type: { summary: 'string' },
      },
    },
    onCancel: {
      control: false,
      description:
        'Specify a function that will be called when a user click close or cancel button.',
      table: {
        type: { summary: 'function' },
      },
    },
  },
  args: {
    open: false,
  },
} as Meta<typeof HCModal>;

type Story = StoryFn<typeof HCModal>;

export const Warning: Story = ({
  type = 'warning',
  title = '警告',
  description = '不要看我的視頻',
  cancel = '取消',
  confirm = '繼續看',
}: ModalProps) => {
  const [{ open }, updateArgs] = useArgs();

  const cancelHandler = () => updateArgs({ open: false });

  const confirmHandler = () => updateArgs({ open: false });

  return (
    <HCModal
      open={open}
      type={type}
      title={title}
      description={description}
      cancel={cancel}
      confirm={confirm}
      onCancel={cancelHandler}
      onConfirm={confirmHandler}
    />
  );
};

export const Success: Story = ({
  type = 'success',
  title = '準備就緒',
  description = '我的開場不需要開場白，音樂前奏播出你就動起來。',
  cancel = '取消',
  confirm = '開始執行',
}: ModalProps) => {
  const [{ open }, updateArgs] = useArgs();

  const cancelHandler = () => updateArgs({ open: false });

  const confirmHandler = () => updateArgs({ open: false });

  return (
    <HCModal
      open={open}
      type={type}
      title={title}
      description={description}
      cancel={cancel}
      confirm={confirm}
      onCancel={cancelHandler}
      onConfirm={confirmHandler}
    />
  );
};

export const Error: Story = ({
  type = 'error',
  title = '連線/做人失敗',
  description = '目前無法執行動作，請確認你的網路連線真長，不然就是你做人太失敗惹。',
  cancel = '我就失敗',
  confirm = '重新執行',
}: ModalProps) => {
  const [{ open }, updateArgs] = useArgs();

  const cancelHandler = () => updateArgs({ open: false });

  const confirmHandler = () => updateArgs({ open: false });

  return (
    <HCModal
      open={open}
      type={type}
      title={title}
      description={description}
      cancel={cancel}
      confirm={confirm}
      onCancel={cancelHandler}
      onConfirm={confirmHandler}
    />
  );
};
