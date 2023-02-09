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
    left: {
      control: false,
      description: 'Left action of header.',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    right: {
      control: false,
      description: 'Left action of header.',
      table: {
        type: { summary: 'ReactNode' },
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

export const Left: Story = {
  args: {
    left: <ArrowLeftIcon className='w-8 h-8' />,
  },
};

export const Right: Story = {
  args: {
    left: <ArrowLeftIcon className='w-8 h-8' />,
    right: <span className='text-tertiary text-body-bold-s'>跳過</span>,
  },
};

export const Progress: Story = {
  args: {
    left: <ArrowLeftIcon className='w-8 h-8' />,
    right: <span className='text-tertiary text-body-bold-s'>跳過</span>,
    fractionClass: 'w-1/9',
  },
};
