import { Meta, StoryObj } from '@storybook/react';

import HCProgress from '~/components/Progress';

export default {
  title: 'Components/Progress',
  component: HCProgress,
  argTypes: {
    percentage: {
      control: 'text',
      description: 'Set progress rate from 0 to 100.',
      table: {
        type: { summary: 'number' },
      },
    },
  },
} as Meta<typeof HCProgress>;

type Story = StoryObj<typeof HCProgress>;

export const Basic: Story = {};

export const InProgress: Story = {
  args: {
    percentage: 25,
  },
};

export const Full: Story = {
  args: {
    percentage: 100,
  },
};
