import { useState } from 'react';

import { RadioGroupContextProvider } from './context';

import type { GroupProps, InputChangeEvent } from './interface';

const HCRadioGroup: React.FC<GroupProps> = (props: GroupProps) => {
  const [value, setValue] = useState<any>();

  const onRadioChange = (e: InputChangeEvent) => {
    setValue(e.target.value);
  };

  return (
    <div className='radio-group'>
      <RadioGroupContextProvider
        value={{
          onChange: onRadioChange,
          value,
        }}
      >
        {props.children}
      </RadioGroupContextProvider>
    </div>
  );
};

export default HCRadioGroup;
