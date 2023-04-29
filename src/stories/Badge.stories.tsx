import { Meta, StoryFn } from '@storybook/react';

import HCBadge from '~/components/Badge';

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
  },
} as Meta<typeof HCBadge>;

type Story = StoryFn<typeof HCBadge>;

export const Rate: Story = () => {
  return (
    <HCBadge type='rate'>
      <div className='w-16 h-16 bg-tertiary rounded'></div>
    </HCBadge>
  );
};

export const Dot: Story = () => {
  return (
    <div className='p-4'>
      <HCBadge type='dot'>
        <div className='w-5 h-5 bg-tertiary rounded'></div>
      </HCBadge>
    </div>
  );
};
