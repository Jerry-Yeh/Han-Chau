import { Meta, StoryObj } from '@storybook/react';

import { HCList, HCListItem } from '~/components/List';

import DefaultImage from '~/assets/img/defaultImage.svg';

export default {
  title: 'Components/List',
  component: HCList,
  argTypes: {
    data: {
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
    renderItem: {
      control: false,
      description: 'Customize list item.',
      table: {
        type: { summary: 'function' },
      },
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
    data: dummyData,
    renderItem: (item) => <HCListItem {...item}></HCListItem>,
  },
};

export const Bleed: Story = {
  args: {
    data: dummyData,
    bleed: true,
    renderItem: (item) => <HCListItem {...item}></HCListItem>,
  },
};
