import { Meta, StoryObj } from '@storybook/react';

import HCLoading from '~/components/Loading';

export default {
  title: 'Components/Loading',
  component: HCLoading,
  argTypes: {
    show: {
      control: 'boolean',
      description: 'Whether the loading component is show or not.',
      defaultValue: { summary: false },
      table: {
        type: { summary: 'boolean' },
      },
    },
  },
} as Meta<typeof HCLoading>;

type Story = StoryObj<typeof HCLoading>;

export const Basic: Story = {
  args: {
    show: false,
  },
};
