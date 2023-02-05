import React from 'react';
import { DatePicker } from 'antd';
import dayjs from 'dayjs';

import type { DatePickerProps } from 'antd';
import type { RangePickerProps } from 'antd/es/date-picker';

interface Props {
  children?: React.ReactNode;
  picker?: 'date' | 'week' | 'month' | 'quarter' | 'year';
  onChange: DatePickerProps['onChange'];
}

const HCDatePicker: React.FC<Props> = (props: Props) => {
  const disabledDate: RangePickerProps['disabledDate'] = (current) => {
    // Can not select days before today and today
    return current && current < dayjs().endOf('day');
  };

  return (
    <DatePicker
      format='YYYY/MM/DD'
      picker={props.picker}
      onChange={props.onChange}
      placeholder='YYYY / MM / DD'
      disabledDate={disabledDate}
    />
  );
};

export default HCDatePicker;
