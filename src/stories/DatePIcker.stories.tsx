import { Meta, StoryObj } from '@storybook/react';

import HCDatePicker from '~/components/DatePicker';
import AntdDecorator from '../../.storybook/decorators/AntdDecorator';

import dayjs from 'dayjs';

export default {
  title: 'Components/DatePicker',
  component: HCDatePicker,
  decorators: [AntdDecorator],
  parameters: { docs: { source: { type: 'dynamic', excludeDecorators: true } } },
  argTypes: {
    value: {
      control: false,
      description: 'To set date.',
      table: {
        type: { summary: 'Dayjs' },
      },
    },
    // picker: {
    //   control: 'select',
    //   options: ['date', 'week', 'month', 'quarter', 'year'],
    //   description: 'Set picker type.',
    //   table: {
    //     type: { summary: 'string' },
    //     defaultValue: { summary: 'date' },
    //   },
    // },
    disabled: {
      control: 'boolean',
      description: 'Determine whether the DatePicker is disabled.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    disabledDate: {
      control: false,
      action: 'clicked',
      description: 'Specify the date that cannot be selected.',
      table: {
        type: { summary: '(currentDate: dayjs) => boolean' },
      },
    },
  },
} as Meta<typeof HCDatePicker>;

type Story = StoryObj<typeof HCDatePicker>;

export const Basic: Story = {
  args: {
    disabled: false,
  },
};

export const DisabledDate: Story = {
  args: {
    disabled: false,
    disabledDate: (current) => current && current < dayjs().endOf('day'),
  },
};

export const Word: Story = {
  args: {
    label: '標題',
    hint: '小提示',
  },
};
