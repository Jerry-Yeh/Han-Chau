import { Fragment } from 'react';
import { Meta, StoryObj } from '@storybook/react';

import HCButton from '~/components/Button';
import google from '~/assets/img/google.svg';
import EllipsisVertical from '~/assets/img/heroicons/mini/ellipsis-vertical';

export default {
  title: 'Components/Button',
  component: HCButton,
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'success', 'destructive'],
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
    onClick: {
      control: false,
      description: 'Set the handler to handle click event.',
      table: {
        type: { summary: '(e: React.MouseEventHandler<HTMLButtonElement>) => void' },
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
    color: 'primary',
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

export const Icon: Story = {
  args: {
    block: false,
    color: 'secondary',
    prefix: <EllipsisVertical />,
  }
};

