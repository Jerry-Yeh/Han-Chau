import React from 'react';
import { DatePicker } from 'antd';
import { Dayjs } from 'dayjs';

import type { DatePickerProps } from 'antd';
import type { RangePickerProps } from 'antd/es/date-picker';
import type { Nullable } from '~/typings/utils';

interface Props {
  className?: string;
  value?: Nullable<Dayjs>;
  picker?: 'date' | 'week' | 'month' | 'quarter' | 'year';
  disabled?: boolean;
  label?: string;
  hint?: string;
  disabledDate?: RangePickerProps['disabledDate'];
  onChange?: DatePickerProps['onChange'];
}

const HCDatePicker: React.FC<Props> = (props: Props) => {
  const { label, ...restProps } = props;

  return (
    <div>
      {props.label && <p className='text-body-bold-s text-secondary mb-2'>{props.label}</p>}
      <DatePicker
        {...restProps}
        format='YYYY/MM/DD'
        placeholder='YYYY / MM / DD'
        disabledDate={props.disabledDate}
        onChange={props.onChange}
        showToday={false}
        popupClassName={`${window.innerWidth <= 390 ? 'left-1/2 -translate-x-1/2' : ''}`}
      />
      {props.hint && <p className='text-body-xs text-tertiary mt-2'>{props.hint}</p>}
    </div>
  );
};

HCDatePicker.displayName = 'HCDatePicker';

HCDatePicker.defaultProps = {
  picker: 'date',
  disabled: false,
};

export default HCDatePicker;
