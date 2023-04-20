import{r as d}from"./index.2e2f892a.js";import{j as t}from"./jsx-runtime.db436af5.js";import"./_commonjsHelpers.712cc82f.js";const n=e=>t("div",{className:"flex gap-x-2 overflow-auto scrollbar-hide",children:e.list.map((l,r)=>t("button",{className:"py-1 cursor-pointer",onClick:()=>e.onChange(l.value),children:t("div",{className:`
                px-4 py-2 rounded text-body-s whitespace-nowrap transition-all delay-800
                ${e.activeKey===l.value?"bg-highlight-light text-highlight":"bg-secondary text-secondary"}`,children:l.label})},r))}),o=n;try{n.displayName="Pill",n.__docgenInfo={description:"",displayName:"Pill",props:{activeKey:{defaultValue:null,description:"",name:"activeKey",required:!0,type:{name:"Nullable<PillValue>"}},list:{defaultValue:null,description:"",name:"list",required:!0,type:{name:"PillItem[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(value: PillValue) => void"}}}}}catch{}const h={title:"Components/Pill",component:o,argTypes:{list:{control:!1,description:"Data array for pill.",table:{type:{summary:"array"},defaultValue:{summary:"[]"}}},activeKey:{control:!1,description:"Current active key.",table:{type:{summary:"Nullable<string | number>"},defaultValue:{summary:"null"}}},onChange:{control:!1,description:"Callback executed when pill is clicked.",table:{type:{summary:"Function"}}}}},m=[{label:"\u6A19\u7C64",value:1},{label:"\u6A19\u7C64",value:2},{label:"\u6A19\u7C64",value:3},{label:"\u6A19\u7C64",value:4},{label:"\u6A19\u7C64",value:5},{label:"\u6A19\u7C64",value:6}],a=()=>{const[e,l]=d.exports.useState(null);return t(o,{activeKey:e,list:m,onChange:c=>l(c)})};var u,i,s;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<Nullable<PillValue>>(null);
  const onChangeHandler = (value: PillValue) => setValue(value);
  return /*#__PURE__*/_jsx(HCPill, {
    activeKey: value,
    list: dummyList,
    onChange: onChangeHandler
  });
}`,...(s=(i=a.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};const g=["Basic"];export{a as Basic,g as __namedExportsOrder,h as default};
//# sourceMappingURL=Pill.stories.dd21ba18.js.map
