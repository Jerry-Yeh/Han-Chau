import { Meta, StoryFn } from '@storybook/react';

import HCRate, { RateProps } from '~/components/Rate';

export default {
  title: 'Components/Rate',
  component: HCRate,
  argTypes: {
    level: {
      control: 'select',
      options: [0, 1, 2, 3],
      description: 'Level of the star level.',
      table: {
        type: { summary: 'number' },
      },
    },
    size: {
      control: 'select',
      options: ['s', 'm', 'l'],
      description: 'Size of the star level.',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 'm' },
      },
    },
    onColor: {
      control: 'boolean',
      description: 'Whether the icons are on the color background or not.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
  },
  args: {
    size: 's',
    level: 1,
  },
} as Meta<typeof HCRate>;

type Story = StoryFn<typeof HCRate>;

export const Basic: Story = ({ level, size = 'm' }: RateProps) => {
  return <HCRate level={level} size={size} />;
};

export const OnColor: Story = (props) => {
  return <HCRate className='bg-highlight p-1' {...props} onColor />;
};
