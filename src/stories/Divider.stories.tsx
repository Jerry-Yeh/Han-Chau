import { Meta, StoryObj } from '@storybook/react';

import HCDivider from '~/components/Divider';

export default {
  title: 'Components/Divider',
  component: HCDivider,
  argTypes: {},
} as Meta<typeof HCDivider>;

type Story = StoryObj<typeof HCDivider>;

export const Basic: Story = {};
