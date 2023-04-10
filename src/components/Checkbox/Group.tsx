import { CheckboxGroupContextProvider } from './context';
import HCCheckbox from './Checkbox';

import type { GroupProps, CheckboxValueType } from './interface';

const HCCheckboxGroup: React.FC<GroupProps> = (props: GroupProps) => {
  const onCheckboxChange = (value: CheckboxValueType) => {
    if (props.onChange) {
      const index = props.value.findIndex((item) => item === value);

      if (index !== -1) {
        props.onChange(props.value.filter((item) => item !== value));
      } else {
        const newList = props.value.map((item) => item);
        newList.push(value);
        props.onChange(newList);
      }
    }
  };

  const children =
    props.options && props.options.length > 0
      ? props.options.map((item, index) => <HCCheckbox key={index} {...item} />)
      : props.children;

  return (
    <div className={`${props.className} flex flex-col gap-y-2`}>
      <CheckboxGroupContextProvider
        value={{
          onChange: onCheckboxChange,
          value: props.value,
        }}
      >
        {children}
      </CheckboxGroupContextProvider>
    </div>
  );
};

export default HCCheckboxGroup;
