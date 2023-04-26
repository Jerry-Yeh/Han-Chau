import { Meta, StoryObj } from '@storybook/react';
import { PlusIcon } from '@heroicons/react/20/solid';

import HCFloatButton from '~/components/FloatButton';

export default {
  title: 'Components/FloatButton',
  component: HCFloatButton,
  argTypes: {
    children: {
      control: 'text',
      description: 'Content in float button.',
      defaultValue: { summary: 'Button' },
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    onClick: {
      control: false,
      description: 'Set the handler to handle click event.',
      table: {
        type: { summary: '(e: React.MouseEventHandler<HTMLButtonElement>) => void' },
      },
    },
  },
} as Meta<typeof HCFloatButton>;

type Story = StoryObj<typeof HCFloatButton>;

export const Basic: Story = {
  args: {
    children: <PlusIcon />,
  },
};
