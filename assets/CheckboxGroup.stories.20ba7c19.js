import{a as l}from"./index.8cfeddcd.js";import{C as a}from"./chest.1fb4681d.js";import{j as e}from"./jsx-runtime.db436af5.js";import"./index.2e2f892a.js";import"./_commonjsHelpers.712cc82f.js";const{useArgs:b}=__STORYBOOK_MODULE_STORE__,k={title:"Components/CheckboxGroup",component:l,parameters:{docs:{source:{type:"dynamic",excludeDecorators:!0}}},argTypes:{value:{control:!1,description:"Used for selected value.",table:{type:{summary:"Array<string | number | boolean>"}}},disabled:{control:"boolean",description:"Disabled checkbox.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},options:{control:!1,description:"",table:{type:{summary:"Array<CheckboxOptionType>"}}}},args:{value:[],disabled:!1}},h=[{label:"\u6A19\u7C64",value:1},{label:"\u6A19\u7C64",value:2},{label:"\u6A19\u7C64",value:3}],s=({disabled:r})=>{const[{value:n},t]=b();return e(l,{value:n,onChange:u=>t({value:u}),options:h,disabled:r})},v=[{label:"\u6A19\u7C64",value:1,image:e("img",{src:a,alt:"chest"})},{label:"\u6A19\u7C64",value:2,image:e("img",{src:a,alt:"chest"})},{label:"\u6A19\u7C64",value:3,image:e("img",{src:a,alt:"chest"})},{label:"\u6A19\u7C64",value:4,image:e("img",{src:a,alt:"chest"})},{label:"\u6A19\u7C64",value:5,image:e("img",{src:a,alt:"chest"})},{label:"\u6A19\u7C64",value:6,image:e("img",{src:a,alt:"chest"})}],o=({disabled:r})=>{const[{value:n},t]=b();return e(l,{value:n,options:v,disabled:r,image:!0,onChange:u=>t({value:u})})};var c,i,m;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`({
  disabled
}: GroupProps) => {
  const [{
    value
  }, updateArgs] = useArgs();
  const onChange = (list: CheckboxValueType[]) => updateArgs({
    value: list
  });
  return /*#__PURE__*/_jsx(HCCheckboxGroup, {
    value: value,
    onChange: onChange,
    options: dummyList,
    disabled: disabled
  });
}`,...(m=(i=s.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var p,d,g;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`({
  disabled
}: GroupProps) => {
  const [{
    value
  }, updateArgs] = useArgs();
  const onChange = (list: CheckboxValueType[]) => updateArgs({
    value: list
  });
  return /*#__PURE__*/_jsx(HCCheckboxGroup, {
    value: value,
    options: dummyImageList,
    disabled: disabled,
    image: true,
    onChange: onChange
  });
}`,...(g=(d=o.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};const G=["Basic","Image"];export{s as Basic,o as Image,G as __namedExportsOrder,k as default};
//# sourceMappingURL=CheckboxGroup.stories.20ba7c19.js.map
