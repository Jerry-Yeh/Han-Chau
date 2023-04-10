import { Meta, StoryObj } from '@storybook/react';

import { HCRadio } from '~/components/Radio';

export default {
  title: 'Components/Radio',
  component: HCRadio,
  argTypes: {
    label: {
      control: 'text',
      description: 'A caption for radio.',
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
      description: 'Disabled radio.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    description: {
      control: 'text',
      description: 'Description for radio.',
      table: {
        type: { summary: 'string' },
      },
    },
  },
} as Meta<typeof HCRadio>;

type Story = StoryObj<typeof HCRadio>;

export const Basic: Story = {
  args: {
    label: '標籤',
    value: '0',
    disabled: false,
    description: '內容',
  },
};
