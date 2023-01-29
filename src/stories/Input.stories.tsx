import { Meta, StoryObj } from '@storybook/react';

import HCInput from '~/components/Input';
import AntdDecorator from '../../.storybook/decorators/AntdDecorator';

export default {
  title: 'Components/Input',
  component: HCInput,
  decorators: [AntdDecorator],
  argTypes: {
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
        // defaultValue: { summary: 'placeholder' },
      },
    },
    prefix: {
      control: 'text',
      description: 'The prefix icon or text for the input field.',
      table: {
        type: { summary: 'ReactNode | string' },
      },
    },
    suffix: {
      control: 'text',
      description: 'The suffix icon or text for the input field.',
      table: {
        type: { summary: 'ReactNode | string' },
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

export const Basic: Story = {};
Basic.args = {
  label: 'caption',
  disabled: false,
};
