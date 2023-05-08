import{H as d}from"./index.f8681291.js";import{C as _}from"./chest.1fb4681d.js";import{j as t}from"./jsx-runtime.db436af5.js";import"./index.2e2f892a.js";import"./_commonjsHelpers.712cc82f.js";const{useArgs:k}=__STORYBOOK_MODULE_STORE__,v={title:"Components/Radio",component:d,argTypes:{label:{control:"text",description:"A caption for radio.",table:{type:{summary:"string"}}},value:{control:!1,description:"According to value for comparison, to determine whether the selected",table:{type:{summary:"any"}}},disabled:{control:"boolean",description:"Disabled radio.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},description:{control:"text",description:"Description for radio.",table:{type:{summary:"string"}}},checked:{control:"boolean",description:"Specfies wheehter the radio is selected.",table:{type:{summary:"boolean"}}}},args:{checked:!1,label:"\u6A19\u7C64",description:"\u5167\u5BB9",disabled:!1}},a=({label:r,description:c,disabled:n})=>{const[{checked:e},s]=k();return t(d,{value:0,checked:e,disabled:n,label:r,description:c,onChange:b=>s({show:b.target.checked}),onClick:()=>{e||s({checked:!e})}})},o=({label:r,disabled:c})=>{const[{checked:n},e]=k();return t(d,{value:0,checked:n,disabled:c,label:r,image:t("img",{src:_,alt:"chest"}),onChange:l=>e({show:l.target.checked}),onClick:()=>{n||e({checked:!n})}})};var i,h,p;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`({
  label,
  description,
  disabled
}: RadioProps) => {
  const [{
    checked
  }, updateArgs] = useArgs();
  const onChangeHandler = (e: InputChangeEvent) => updateArgs({
    show: e.target.checked
  });
  const onClickHandler = () => {
    if (!checked) updateArgs({
      checked: !checked
    });
  };
  return /*#__PURE__*/_jsx(HCRadio, {
    value: 0,
    checked: checked,
    disabled: disabled,
    label: label,
    description: description,
    onChange: onChangeHandler,
    onClick: onClickHandler
  });
}`,...(p=(h=a.parameters)==null?void 0:h.docs)==null?void 0:p.source}}};var g,u,m;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`({
  label,
  disabled
}: RadioProps) => {
  const [{
    checked
  }, updateArgs] = useArgs();
  const onChangeHandler = (e: InputChangeEvent) => updateArgs({
    show: e.target.checked
  });
  const onClickHandler = () => {
    if (!checked) updateArgs({
      checked: !checked
    });
  };
  return /*#__PURE__*/_jsx(HCRadio, {
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
}`,...(m=(u=o.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};const x=["Basic","Image"];export{a as Basic,o as Image,x as __namedExportsOrder,v as default};
//# sourceMappingURL=Radio.stories.76899192.js.map
