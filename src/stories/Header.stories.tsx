import { Meta, StoryObj } from '@storybook/react';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

import HCHeader from '~/components/Header';
import AntdDecorator from '../../.storybook/decorators/AntdDecorator';

export default {
  title: 'Components/Header',
  component: HCHeader,
  decorators: [AntdDecorator],
  parameters: { docs: { source: { type: 'dynamic', excludeDecorators: true } } },
  argTypes: {
    toPrev: {
      control: false,
      description: 'Handle previous action of header.',
      table: {
        type: { summary: 'function' },
      },
    },
    toNext: {
      control: false,
      description: 'Handle next action of header.',
      table: {
        type: { summary: 'function' },
      },
    },
    fractionClass: {
      description: 'Set progress width by Tailwind CSS class.',
      table: {
        type: { summary: 'string' },
      },
    },
  },
} as Meta<typeof HCHeader>;

type Story = StoryObj<typeof HCHeader>;

export const Basic: Story = {};

export const Previous: Story = {
  args: {
    toPrev: () => ({}),
  },
};

export const Next: Story = {
  args: {
    toPrev: () => ({}),
    toNext: () => ({}),
  },
};

export const Progress: Story = {
  args: {
    toPrev: () => ({}),
    toNext: () => ({}),
    fractionClass: 'w-1/9',
  },
};
