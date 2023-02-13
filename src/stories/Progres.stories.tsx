import { Meta, StoryObj } from '@storybook/react';

import HCProgress from '~/components/Progress';
import AntdDecorator from '../../.storybook/decorators/AntdDecorator';

export default {
  title: 'Components/Progress',
  component: HCProgress,
  // decorators: [AntdDecorator],
  // parameters: { docs: { source: { type: 'dynamic', excludeDecorators: true } } },
  argTypes: {
    widthClass: {
      control: 'text',
      description: 'Set progress width by Tailwind CSS class.',
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
    widthClass: 'w-1/9',
  },
};

export const Full: Story = {
  args: {
    widthClass: 'w-full',
  },
};
