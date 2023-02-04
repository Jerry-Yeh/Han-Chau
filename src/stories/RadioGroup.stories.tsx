import { Meta, StoryObj } from '@storybook/react';

import HCRadio from '~/components/Radio';

export default {
  title: 'Components/RadioGroup',
  component: HCRadio,
  argTypes: {
    value: {
      control: 'text',
      description: 'Used for selected value.',
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
  },
} as Meta<typeof HCRadio>;

type Story = StoryObj<typeof HCRadio.Group>;

export const Basic: Story = {
  args: {
    value: '1',
  },
  render: () => (
    <HCRadio.Group>
      <HCRadio label='caption1' value='1' />
      <HCRadio label='caption2' value='2' />
    </HCRadio.Group>
  ),
};
