import { Meta, StoryFn } from '@storybook/react';

import HCLogo from '~/components/Logo';

export default {
  title: 'Components/Logo',
  component: HCLogo,
  argTypes: {
    size: {
      control: 'select',
      options: ['s', 'm', 'l'],
      description: 'Size of the logo.',
      table: {
        type: { summary: 'LogoSize' },
      },
    },
  },
} as Meta<typeof HCLogo>;

type Story = StoryFn<typeof HCLogo>;

export const Basic: Story = () => {
  return (
    <div className='p-4'>
      <HCLogo />
    </div>
  );
};

export const Small: Story = () => {
  return (
    <div className='p-4'>
      <HCLogo size='s' />
    </div>
  );
};
