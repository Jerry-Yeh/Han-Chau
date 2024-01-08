import{r as m}from"./index.2e2f892a.js";import{j as s,a as b}from"./jsx-runtime.db436af5.js";import"./_commonjsHelpers.712cc82f.js";const p=({data:e,actived:t,onClick:n})=>b("button",{className:`flex flex-col items-center grow px-4 py-2 border-b transition duration-300 ${t?"border-active text-highlight":"border-transparent text-tertiary"}`,onClick:()=>{n(e.value)},children:[s("div",{className:"text-body-bold-m",children:e.label}),e.sublabel&&s("div",{className:"text-body-bold-xs",children:e.sublabel})]}),i=({items:e,activeKey:t,onChange:n})=>{const r=a=>{n(a)};return s("div",{className:"flex",children:e.map(a=>s(p,{data:a,actived:t===a.value,onClick:r},a.value))})},d=i;try{i.displayName="Tabs",i.__docgenInfo={description:"",displayName:"Tabs",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"TabsItem[]"}},activeKey:{defaultValue:null,description:"",name:"activeKey",required:!0,type:{name:"ActiveKey"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(value: ActiveKey) => void"}}}}}catch{}const C={title:"Components/Tabs",component:d,argTypes:{activeKey:{control:"text",description:"Current tabs's key.",table:{type:{summary:"ActiveKey"}}},items:{description:"Configure tabs content.",table:{type:{summary:"TabsItem[]"},defaultValue:{summary:"[]"}}},onChange:{control:!1,description:"Set the handler to handle click event.",table:{type:{summary:"(value: ActiveKey) => void"}}}}},l=()=>{const e=[{label:"0",sublabel:"\u6A19\u7C64",value:0},{label:"0",sublabel:"\u6A19\u7C64",value:1}],[t,n]=m.exports.useState(e[0].value);return s(d,{activeKey:t,items:e,onChange:a=>{n(a)}})};var c,o,u;l.parameters={...l.parameters,docs:{...(c=l.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
  const items: TabsItem[] = [{
    label: '0',
    sublabel: '\u6A19\u7C64',
    value: 0
  }, {
    label: '0',
    sublabel: '\u6A19\u7C64',
    value: 1
  }];
  const [activeKey, updateActiveKey] = useState<ActiveKey>(items[0].value);
  const handleChange = (value: ActiveKey) => {
    updateActiveKey(value);
  };
  return /*#__PURE__*/_jsx(HCTabs, {
    activeKey: activeKey,
    items: items,
    onChange: handleChange
  });
}`,...(u=(o=l.parameters)==null?void 0:o.docs)==null?void 0:u.source}}};const g=["Basic"];export{l as Basic,g as __namedExportsOrder,C as default};
//# sourceMappingURL=Tabs.stories.0301a144.js.map
