import { Meta, StoryObj } from '@storybook/react';

import HCActionStack from '~/components/ActionStack';
import HCButton from '~/components/Button';

export default {
  title: 'Components/ActionStack',
  component: HCActionStack,
  argTypes: {
    children: {
      control: false,
      description: 'Actions in action stack.',
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
} as Meta<typeof HCActionStack>;

type Story = StoryObj<typeof HCActionStack>;

export const Basic: Story = {
  // render: () => (
  //   <div className='h-screen'>
  //     <HCActionStack show={true}>
  //       <HCButton color='highlight'>馬上前往測試</HCButton>
  //     </HCActionStack>
  //   </div>
  // ),
  args: {
    children: <HCButton color='highlight'>馬上前往測試</HCButton>,
    show: false,
  },
};
