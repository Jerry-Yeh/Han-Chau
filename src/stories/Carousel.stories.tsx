import { Meta, StoryObj } from '@storybook/react';
import { Fragment } from 'react';

import HCCarousel from '~/components/Carousel';

import welcome1 from '~/assets/img/welcome1.svg';
import welcome2 from '~/assets/img/welcome2.svg';
import welcome3 from '~/assets/img/welcome3.svg';

export default {
  title: 'Components/Carousel',
  component: HCCarousel,
  argTypes: {
    children: {
      control: false,
      description: 'Actions in action stack.',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
  },
} as Meta<typeof HCCarousel>;

type Story = StoryObj<typeof HCCarousel>;

export const Basic: Story = {
  render: () => {
    const array = [1, 2, 3];

    return (
      <HCCarousel>
        {array.map((item) => (
          <div className='h-20 flex justify-center items-center' key={item}>
            {item}
          </div>
        ))}
      </HCCarousel>
    );
  },
};

export const Picture: Story = {
  render: () => {
    const imgList = [welcome1, welcome2, welcome3];

    return (
      <HCCarousel>
        {imgList.map((img, idx) => (
          <div className='bg-secondary flex justify-center' key={idx}>
            <div className='pt-6 pb-18'>
              <img src={img} alt='img' />
            </div>
          </div>
        ))}
      </HCCarousel>
    );
  },
};
