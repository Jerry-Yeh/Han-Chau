import { Meta, StoryObj } from '@storybook/react';

import HCDivider from '~/components/Divider';

export default {
  title: 'Components/Divider',
  component: HCDivider,
  argTypes: {
    children: {
      control: false,
      description: 'Text in the divider.',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
  },
} as Meta<typeof HCDivider>;

type Story = StoryObj<typeof HCDivider>;

export const Basic: Story = {};

export const Text: Story = {
  args: {
    children: '如果已經有帳號',
  },
};
