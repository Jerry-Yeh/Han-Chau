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
      description: 'Handle left action of header.',
      table: {
        type: { summary: 'function' },
      },
    },
    right: {
      control: false,
      description: 'Handle right action of header.',
      table: {
        type: { summary: 'function' },
      },
    },
    size: {
      control: 'select',
      options: ['l', 'm', 's'],
      description: 'Set the size of header.',
      defaultValue: { summary: 'm' },
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
    left: <ArrowLeftIcon className='w-8 h-8' onClick={() => ({})} />,
  },
};

export const Next: Story = {
  args: {
    left: <ArrowLeftIcon className='w-8 h-8' onClick={() => ({})} />,
    right: <button className='text-tertiary'>跳過</button>,
  },
};
