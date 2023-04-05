import { Meta, StoryObj } from '@storybook/react';

import HCTabBar from '~/components/TabBar';

export default {
  title: 'Components/TabBar',
  component: HCTabBar,
  argTypes: {},
} as Meta<typeof HCTabBar>;

type Story = StoryObj<typeof HCTabBar>;

export const Basic: Story = {};
