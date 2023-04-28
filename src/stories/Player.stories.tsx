import { Meta, StoryFn } from '@storybook/react';

import HCPlayer, { PlayerProps } from '~/components/Player';

export default {
  title: 'Components/Player',
  component: HCPlayer,
  argTypes: {
    url: {
      control: 'text',
      description: 'Link to the YouTube video.',
      table: {
        type: { summary: 'URL string' },
      },
    },
    start: {
      control: 'text',
      description:
        'To begin playing the video at the given number of seconds from the start of the video.',
      table: {
        type: { summary: 'number' },
      },
    },
    end: {
      control: 'text',
      description: 'To stop the playing video at the given number of seconds.',
      table: {
        type: { summary: 'number' },
      },
    },
  },
} as Meta<typeof HCPlayer>;

type Story = StoryFn<typeof HCPlayer>;

export const Basic: Story = ({
  url = 'https://www.youtube.com/watch?v=kKBUgVHhWrA&ab_channel=%E5%A4%A7%E5%98%BB%E5%93%88%E6%99%82%E4%BB%A3TheRappers',
}: PlayerProps) => {
  return (
    <div className='p-4'>
      <HCPlayer url={url} />
    </div>
  );
};
