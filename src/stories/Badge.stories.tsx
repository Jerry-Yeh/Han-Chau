import { Meta, StoryFn } from '@storybook/react';

import HCBadge, { BadgeProps } from '~/components/Badge';

export default {
  title: 'Components/Badge',
  component: HCBadge,
  argTypes: {
    type: {
      control: 'select',
      options: ['rate', 'dot'],
      description: 'Type of the badge.',
      table: {
        type: { summary: 'string' },
      },
    },
    level: {
      control: 'select',
      options: [0, 1, 2, 3],
      description: 'Level of the rate type badge.',
      table: {
        type: { summary: 'number' },
      },
    },
    show: {
      control: 'boolean',
      description: 'Whether the badge is visiable or not.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: true },
      },
    },
  },
  args: {
    show: true,
  },
} as Meta<typeof HCBadge>;

type Story = StoryFn<typeof HCBadge>;

export const Rate: Story = () => {
  return (
    <div className='p-4'>
      <HCBadge type='rate'>
        <div className='w-16 h-16 bg-tertiary rounded'></div>
      </HCBadge>
    </div>
  );
};

export const Dot: Story = ({ show }: BadgeProps) => {
  return (
    <div className='p-4'>
      <HCBadge type='dot' show={show}>
        <div className='w-5 h-5 bg-tertiary rounded'></div>
      </HCBadge>
    </div>
  );
};
