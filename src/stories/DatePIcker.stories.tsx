import { Meta, StoryObj } from '@storybook/react';

import HCDatePicker from '~/components/DatePicker';
import AntdDecorator from '../../.storybook/decorators/AntdDecorator';

import type { DatePickerProps } from '~/components/DatePicker';

export default {
  title: 'Components/DatePicker',
  component: HCDatePicker,
  decorators: [AntdDecorator],
  argTypes: {},
} as Meta<typeof HCDatePicker>;

type Story = StoryObj<typeof HCDatePicker>;

export const Basic: Story = {
  render: () => {
    const onChange: DatePickerProps['onChange'] = (date, dateString) => {
      console.log(date, dateString);
    };

    return <HCDatePicker onChange={onChange} />;
  },
};
