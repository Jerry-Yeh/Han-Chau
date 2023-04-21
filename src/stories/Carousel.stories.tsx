import { Meta, StoryObj } from '@storybook/react';

import HCCarousel from '~/components/Carousel';

import welcomePage1 from '~/assets/img/welcome-page-1.svg';
import welcomePage2 from '~/assets/img/welcome-page-2.svg';
import welcomePage3 from '~/assets/img/welcome-page-3.svg';

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
    const imgList = [welcomePage1, welcomePage2, welcomePage3];

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
