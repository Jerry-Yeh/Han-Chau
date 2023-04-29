import { Meta, StoryObj } from '@storybook/react';

import HCLoading from '~/components/Loading';

export default {
  title: 'Components/Loading',
  component: HCLoading,
  argTypes: {},
} as Meta<typeof HCLoading>;

type Story = StoryObj<typeof HCLoading>;

export const Basic: Story = {};
