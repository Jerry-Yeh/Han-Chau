import { Meta, StoryObj } from '@storybook/react';

import HCInput from '~/components/Input';
import AntdDecorator from '../../.storybook/decorators/AntdDecorator';

export default {
  title: 'Components/Input',
  component: HCInput,
  decorators: [AntdDecorator],
  parameters: { docs: { source: { type: 'dynamic', excludeDecorators: true } } },
  argTypes: {
    value: {
      control: 'text',
      description: 'The input content value.',
      table: {
        type: { summary: 'string' },
      },
    },
    label: {
      control: 'text',
      description: 'A caption for input field.',
      table: {
        type: { summary: 'string' },
      },
    },
    placeholder: {
      control: 'text',
      description: 'A short hint that describes the expected value of an input field.',
      table: {
        type: { summary: 'string' },
      },
    },
    prefix: {
      control: false,
      description: 'The prefix icon or text for the input field.',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    suffix: {
      control: false,
      description: 'The suffix icon or text for the input field.',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    type: {
      control: 'text',
      description: 'The type of input field. See MDN for more.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'text' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the input is disabled',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
  },
} as Meta<typeof HCInput>;

type Story = StoryObj<typeof HCInput>;

export const Basic: Story = {
  args: {
    label: 'caption',
    disabled: false,
  },
};
