import { RadioGroupContextProvider } from './context';
import HCRadio from './Radio';

import type { GroupProps, RadioValueType } from './interface';

const HCRadioGroup: React.FC<GroupProps> = (props: GroupProps) => {
  const onRadioChange = (newValue: RadioValueType) => {
    if (props.onChange) {
      props.onChange(newValue);
    }
  };

  const children =
    props.options && props.options.length > 0
      ? props.options.map((item, index) => <HCRadio key={index} {...item} />)
      : props.children;

  return (
    <div className={`${props.className} grid ${props.image ? 'grid-cols-3 gap-4' : 'gap-y-2'}`}>
      <RadioGroupContextProvider
        value={{
          value: props.value,
          disabled: props.disabled,
          onChange: onRadioChange,
        }}
      >
        {children}
      </RadioGroupContextProvider>
    </div>
  );
};

export default HCRadioGroup;
