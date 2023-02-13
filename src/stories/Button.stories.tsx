import { Fragment } from 'react';
import { Meta, StoryObj } from '@storybook/react';

import HCButton from '~/components/Button';
import google from '~/assets/img/google.svg';

export default {
  title: 'Components/Button',
  component: HCButton,
  argTypes: {
    color: {
      control: 'select',
      options: [
        'primary',
        'secondary',
        'tertiary',
        'highlight',
        'highlight-light',
        'success',
        'success-light',
        'destructive',
        'destructive-light',
        'warning',
        'warning-light',
      ],
      description: 'Adjust background color.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'primary' },
      },
    },
    children: {
      control: 'text',
      description: 'Content in button.',
      defaultValue: { summary: 'Button' },
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state of button.',
      defaultValue: { summary: false },
      table: {
        type: { summary: 'boolean' },
      },
    },
    next: {
      control: 'boolean',
      description: 'Set the next icon of button.',
      defaultValue: { summary: false },
      table: {
        type: { summary: 'boolean' },
      },
    },
  },
} as Meta<typeof HCButton>;

type Story = StoryObj<typeof HCButton>;

export const Basic: Story = {
  args: {
    color: 'primary',
    children: 'Button',
    disabled: false,
    next: false,
  },
};

export const Next: Story = {
  args: {
    color: 'highlight',
    disabled: false,
    next: true,
    children: (
      <Fragment>
        <span>Button</span>
      </Fragment>
    ),
  },
};

export const Prefix: Story = {
  args: {
    color: 'primary',
    prefix: <img src={google} alt='icon' />,
    children: <span>繼續以 Google 登入</span>,
  },
};
