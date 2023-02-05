import { Meta, StoryObj } from '@storybook/react';

import { HCRadio, HCRadioGroup } from '~/components/Radio';

export default {
  title: 'Components/RadioGroup',
  component: HCRadio,
  parameters: { docs: { source: { type: 'dynamic', excludeDecorators: true } } },
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

type Story = StoryObj<typeof HCRadioGroup>;

export const Basic: Story = {
  args: {
    value: '1',
  },
  render: () => (
    <HCRadioGroup>
      <HCRadio label='caption1' value='1' />
      <HCRadio label='caption2' value='2' />
    </HCRadioGroup>
  ),
};
