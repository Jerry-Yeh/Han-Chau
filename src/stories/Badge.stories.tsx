import { Meta, StoryObj } from '@storybook/react';

import HCBadge from '~/components/Badge';

export default {
  title: 'Components/Badge',
  component: HCBadge,
  argTypes: {
    type: {
      control: 'select',
      options: ['star'],
      description: 'Type of the badge.',
      table: {
        type: { summary: 'string' },
      },
    },
    level: {
      control: 'select',
      options: [1, 2, 3],
      description: 'Level of the star type badge.',
      table: {
        type: { summary: 'number' },
      },
    },
  },
} as Meta<typeof HCBadge>;

type Story = StoryObj<typeof HCBadge>;

export const Basic: Story = {
  args: {
    type: 'star',
  },
};
