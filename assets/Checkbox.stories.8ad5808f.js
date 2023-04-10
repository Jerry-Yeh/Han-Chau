import{H as l,C as _}from"./chest.2379b866.js";import{j as t}from"./jsx-runtime.db436af5.js";import"./index.2e2f892a.js";import"./_commonjsHelpers.712cc82f.js";const{useArgs:C}=__STORYBOOK_MODULE_STORE__,f={title:"Components/Checkbox",component:l,argTypes:{label:{control:"text",description:"A caption for checkbox.",table:{type:{summary:"string"}}},value:{control:!1,description:"According to value for comparison, to determine whether the selected",table:{type:{summary:"any"}}},disabled:{control:"boolean",description:"Disabled checkbox.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},description:{control:"text",description:"Description for checkbox.",table:{type:{summary:"string"}}},checked:{control:"boolean",description:"Specfies wheehter the checkbox is selected.",table:{type:{summary:"boolean"}}}},args:{checked:!1,label:"\u6A19\u7C64",description:"\u5167\u5BB9",disabled:!1}},c=({label:o,description:s,disabled:n})=>{const[{checked:e},r]=C();return t(l,{value:0,checked:e,disabled:n,label:o,description:s,onChange:m=>r({show:m.target.checked}),onClick:()=>r({checked:!e})})},a=({label:o,disabled:s})=>{const[{checked:n},e]=C();return t(l,{value:0,checked:n,disabled:s,label:o,image:t("img",{src:_,alt:"chest"}),onChange:d=>e({show:d.target.checked}),onClick:()=>e({checked:!n})})};var i,h,p;c.parameters={...c.parameters,docs:{...(i=c.parameters)==null?void 0:i.docs,source:{originalSource:`({
  label,
  description,
  disabled
}: CheckboxProps) => {
  const [{
    checked
  }, updateArgs] = useArgs();
  const onChangeHandler = (e: InputChangeEvent) => updateArgs({
    show: e.target.checked
  });
  const onClickHandler = () => updateArgs({
    checked: !checked
  });
  return /*#__PURE__*/_jsx(HCCheckbox, {
    value: 0,
    checked: checked,
    disabled: disabled,
    label: label,
    description: description,
    onChange: onChangeHandler,
    onClick: onClickHandler
  });
}`,...(p=(h=c.parameters)==null?void 0:h.docs)==null?void 0:p.source}}};var k,g,u;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`({
  label,
  disabled
}: CheckboxProps) => {
  const [{
    checked
  }, updateArgs] = useArgs();
  const onChangeHandler = (e: InputChangeEvent) => updateArgs({
    show: e.target.checked
  });
  const onClickHandler = () => updateArgs({
    checked: !checked
  });
  return /*#__PURE__*/_jsx(HCCheckbox, {
    value: 0,
    checked: checked,
    disabled: disabled,
    label: label,
    image: /*#__PURE__*/_jsx("img", {
      src: Chest,
      alt: "chest"
    }),
    onChange: onChangeHandler,
    onClick: onClickHandler
  });
}`,...(u=(g=a.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};const v=["Basic","Image"];export{c as Basic,a as Image,v as __namedExportsOrder,f as default};
//# sourceMappingURL=Checkbox.stories.8ad5808f.js.map
