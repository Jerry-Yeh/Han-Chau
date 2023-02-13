import React from 'react';
import { DatePicker } from 'antd';
import dayjs, { Dayjs } from 'dayjs';

import type { DatePickerProps } from 'antd';
import type { RangePickerProps } from 'antd/es/date-picker';
import type { Nullable } from '~/typings/utils';

interface Props {
  className?: string;
  value?: Nullable<Dayjs>;
  picker?: 'date' | 'week' | 'month' | 'quarter' | 'year';
  disabled?: boolean;
  disabledDate?: RangePickerProps['disabledDate'];
  onChange?: DatePickerProps['onChange'];
}

const HCDatePicker: React.FC<Props> = (props: Props) => {
  // const disabledDate: RangePickerProps['disabledDate'] = (current) => {
  //   // Can not select days before today and today
  //   return current && current < dayjs().endOf('day');
  // };

  return (
    <DatePicker
      {...props}
      format='YYYY/MM/DD'
      placeholder='YYYY / MM / DD'
      disabledDate={props.disabledDate}
      onChange={props.onChange}
      showToday={false}
    />
  );
};

HCDatePicker.displayName = 'HCDatePicker';

HCDatePicker.defaultProps = {
  picker: 'date',
  disabled: false,
};

export default HCDatePicker;
