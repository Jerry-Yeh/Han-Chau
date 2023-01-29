import { Fragment } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { ArrowSmallRightIcon } from '@heroicons/react/20/solid';

import HCButton from '~/components/Button';

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
        type: { summary: 'any' },
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
  },
} as Meta<typeof HCButton>;

type Story = StoryObj<typeof HCButton>;

export const Basic: Story = {};
Basic.args = {
  color: 'primary',
  children: 'Button',
  disabled: false,
};

export const Icon: Story = {
  // render: () => (
  //   <HCButton color='highlight'>
  //     <span className='mr-2'>Button</span>
  //     <ArrowSmallRightIcon className='h-6 w-6' />
  //   </HCButton>
  // ),
};
Icon.args = {
  color: 'highlight',
  disabled: false,
  children: (
    <Fragment>
      <span className='mr-2'>Button</span>
      <ArrowSmallRightIcon className='h-6 w-6' />
    </Fragment>
  ),
};

// export const Large = meta.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };

// export const Small = meta.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };
