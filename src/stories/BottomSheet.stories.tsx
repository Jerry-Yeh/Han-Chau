import { Meta, StoryObj } from '@storybook/react';

import HCBottomSheet from '~/components/BottomSheet';
import HCButton from '~/components/Button';

export default {
  title: 'Components/BottomSheet',
  component: HCBottomSheet,
  argTypes: {
    children: {
      control: false,
      description: 'Actions in the action stack.',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    show: {
      control: 'boolean',
      description: 'Whether the action stack is visible or not.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
  },
} as Meta<typeof HCBottomSheet>;

type Story = StoryObj<typeof HCBottomSheet>;

export const Basic: Story = {
  // render: () => (
  //   <div className='h-screen'>
  //     <HCBottomSheet show={true}>
  //       <HCButton color='highlight'>馬上前往測試</HCButton>
  //     </HCBottomSheet>
  //   </div>
  // ),
  args: {
    children: <HCButton color='highlight'>馬上前往測試</HCButton>,
    show: false,
  },
};
