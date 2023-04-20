import{H as l}from"./index.4e79e434.js";import{C as _}from"./chest.8dc29a21.js";import{j as t}from"./jsx-runtime.db436af5.js";import"./index.2e2f892a.js";import"./_commonjsHelpers.712cc82f.js";const{useArgs:C}=__STORYBOOK_MODULE_STORE__,v={title:"Components/Checkbox",component:l,argTypes:{label:{control:"text",description:"A caption for checkbox.",table:{type:{summary:"string"}}},value:{control:!1,description:"According to value for comparison, to determine whether the selected",table:{type:{summary:"any"}}},disabled:{control:"boolean",description:"Disabled checkbox.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},description:{control:"text",description:"Description for checkbox.",table:{type:{summary:"string"}}},checked:{control:"boolean",description:"Specfies wheehter the checkbox is selected.",table:{type:{summary:"boolean"}}}},args:{checked:!1,label:"\u6A19\u7C64",description:"\u5167\u5BB9",disabled:!1}},c=({label:a,description:r,disabled:n})=>{const[{checked:e},s]=C();return t(l,{value:0,checked:e,disabled:n,label:a,description:r,onChange:b=>s({show:b.target.checked}),onClick:()=>s({checked:!e})})},o=({label:a,disabled:r})=>{const[{checked:n},e]=C();return t(l,{value:0,checked:n,disabled:r,label:a,image:t("img",{src:_,alt:"chest"}),onChange:d=>e({show:d.target.checked}),onClick:()=>e({checked:!n})})};var i,h,p;c.parameters={...c.parameters,docs:{...(i=c.parameters)==null?void 0:i.docs,source:{originalSource:`({
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
}`,...(p=(h=c.parameters)==null?void 0:h.docs)==null?void 0:p.source}}};var k,g,u;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`({
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
}`,...(u=(g=o.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};const E=["Basic","Image"];export{c as Basic,o as Image,E as __namedExportsOrder,v as default};
//# sourceMappingURL=Checkbox.stories.f30f9b02.js.map
