import { Meta, StoryObj } from '@storybook/react';

import { HCCheckbox } from '~/components/Checkbox';

export default {
  title: 'Components/Checkbox',
  component: HCCheckbox,
  argTypes: {
    label: {
      control: 'text',
      description: 'A caption for checkbox.',
      table: {
        type: { summary: 'string' },
      },
    },
    value: {
      control: false,
      description: 'According to value for comparison, to determine whether the selected',
      table: {
        type: { summary: 'any' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled checkbox.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    description: {
      control: 'text',
      description: 'Description for checkbox.',
      table: {
        type: { summary: 'string' },
      },
    },
  },
} as Meta<typeof HCCheckbox>;

type Story = StoryObj<typeof HCCheckbox>;

export const Basic: Story = {
  args: {
    label: '標籤',
    value: '0',
    disabled: false,
    description: '內容',
  },
};
