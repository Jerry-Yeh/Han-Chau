import { Meta, StoryFn } from '@storybook/react';

import HCTags from '~/components/Tags';

export default {
  title: 'Components/Tags',
  component: HCTags,
  argTypes: {
    data: {
      control: false,
      description: 'Data list of the tags.',
      table: {
        type: { summary: 'Array<TagType | string>' },
      },
    },
  },
} as Meta<typeof HCTags>;

type Story = StoryFn<typeof HCTags>;

export const Basic: Story = () => {
  return <HCTags data={['標籤1', '標籤2', '標籤3']} className='p-2' />;
};
