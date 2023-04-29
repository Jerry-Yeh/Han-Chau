import{H as b,a as g}from"./index.a6375a11.js";import{C as a}from"./chest.9afc36a0.js";import{j as e}from"./jsx-runtime.db436af5.js";import"./index.2e2f892a.js";import"./_commonjsHelpers.712cc82f.js";const{useArgs:C}=__STORYBOOK_MODULE_STORE__,x={title:"Components/RadioGroup",component:b,parameters:{docs:{source:{type:"dynamic",excludeDecorators:!0}}},argTypes:{value:{control:!1,description:"Used for selected value.",table:{type:{summary:"Nullable<RadioValueType>"}}},disabled:{control:"boolean",description:"Disabled radio.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}}},args:{value:null,disabled:!1}},_=[{label:"\u6A19\u7C64",value:1},{label:"\u6A19\u7C64",value:2},{label:"\u6A19\u7C64",value:3}],s=({disabled:n})=>{const[{value:u},r]=C();return e(g,{value:u,onChange:l=>{r({value:l})},options:_,disabled:n})},A=[{label:"\u6A19\u7C64",value:1,image:e("img",{src:a,alt:"chest"})},{label:"\u6A19\u7C64",value:2,image:e("img",{src:a,alt:"chest"})},{label:"\u6A19\u7C64",value:3,image:e("img",{src:a,alt:"chest"})},{label:"\u6A19\u7C64",value:4,image:e("img",{src:a,alt:"chest"})},{label:"\u6A19\u7C64",value:5,image:e("img",{src:a,alt:"chest"})},{label:"\u6A19\u7C64",value:6,image:e("img",{src:a,alt:"chest"})}],o=({disabled:n})=>{const[{value:u},r]=C();return e(g,{value:u,options:A,disabled:n,image:!0,onChange:l=>r({value:l})})};var t,i,d;s.parameters={...s.parameters,docs:{...(t=s.parameters)==null?void 0:t.docs,source:{originalSource:`({
  disabled
}: GroupProps) => {
  const [{
    value
  }, updateArgs] = useArgs();
  const onChange = (newValue: RadioValueType) => {
    updateArgs({
      value: newValue
    });
  };
  return /*#__PURE__*/_jsx(HCRadioGroup, {
    value: value,
    onChange: onChange,
    options: dummyList,
    disabled: disabled
  });
}`,...(d=(i=s.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var m,c,p;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`({
  disabled
}: GroupProps) => {
  const [{
    value
  }, updateArgs] = useArgs();
  const onChange = (list: RadioValueType) => updateArgs({
    value: list
  });
  return /*#__PURE__*/_jsx(HCRadioGroup, {
    value: value,
    options: dummyImageList,
    disabled: disabled,
    image: true,
    onChange: onChange
  });
}`,...(p=(c=o.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const O=["Basic","Image"];export{s as Basic,o as Image,O as __namedExportsOrder,x as default};
//# sourceMappingURL=RadioGroup.stories.37efae5d.js.map
