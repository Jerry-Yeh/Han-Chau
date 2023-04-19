import { Meta, StoryObj } from '@storybook/react';

import HCList from '~/components/List';

import DefaultImage from '~/assets/img/defaultImage.svg';

export default {
  title: 'Components/List',
  component: HCList,
  argTypes: {
    list: {
      control: false,
      description: 'Data array for list.',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    bleed: {
      control: 'boolean',
      description: 'Whether the List bleeds or not.',
    },
  },
} as Meta<typeof HCList>;

type Story = StoryObj<typeof HCList>;

const dummyData = [
  { img: <img src={DefaultImage} alt='img' />, title: '標題', description: '描述' },
  { img: <img src={DefaultImage} alt='img' />, title: '標題', description: '描述', type: 'add' },
  { img: <img src={DefaultImage} alt='img' />, title: '標題', description: '描述', type: 'next' },
  { img: <img src={DefaultImage} alt='img' />, title: '標題' },
  { img: <img src={DefaultImage} alt='img' />, title: '標題', type: 'add' },
  { img: <img src={DefaultImage} alt='img' />, title: '標題', type: 'next' },
];

export const Basic: Story = {
  args: {
    className: 'bg-tertiary',
    list: dummyData,
  },
};

export const Bleed: Story = {
  args: {
    list: dummyData,
    bleed: true,
  },
};
