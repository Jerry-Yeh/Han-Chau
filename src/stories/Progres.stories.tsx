import { Meta, StoryObj } from '@storybook/react';

import HCProgress from '~/components/Progress';
import AntdDecorator from '../../.storybook/decorators/AntdDecorator';

export default {
  title: 'Components/Progress',
  component: HCProgress,
  // decorators: [AntdDecorator],
  // parameters: { docs: { source: { type: 'dynamic', excludeDecorators: true } } },
  argTypes: {
    rateClass: {
      control: 'text',
      description: 'Set progress rate by Tailwind CSS class.',
      table: {
        type: { summary: 'string' },
      },
    },
  },
} as Meta<typeof HCProgress>;

type Story = StoryObj<typeof HCProgress>;

export const Basic: Story = {};

export const InProgress: Story = {
  args: {
    rateClass: 'w-1/9',
  },
};

export const Full: Story = {
  args: {
    rateClass: 'w-full',
  },
};
