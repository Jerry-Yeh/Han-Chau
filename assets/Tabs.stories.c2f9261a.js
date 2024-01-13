import{r as c}from"./index.2e2f892a.js";import{H as o}from"./Tabs.6114aab6.js";import{j as i}from"./jsx-runtime.db436af5.js";import"./_commonjsHelpers.712cc82f.js";const d={title:"Components/Tabs",component:o,argTypes:{activeKey:{control:"text",description:"Current tabs's key.",table:{type:{summary:"ActiveKey"}}},items:{description:"Configure tabs content.",table:{type:{summary:"TabsItem[]"},defaultValue:{summary:"[]"}}},onChange:{control:!1,description:"Set the handler to handle click event.",table:{type:{summary:"(value: ActiveKey) => void"}}}}},e=()=>{const t=[{label:"0",sublabel:"\u6A19\u7C64",value:0},{label:"0",sublabel:"\u6A19\u7C64",value:1}],[r,l]=c.exports.useState(t[0].value);return i(o,{activeKey:r,items:t,onChange:u=>{l(u)}})};var a,n,s;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
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
}`,...(s=(n=e.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const C=["Basic"];export{e as Basic,C as __namedExportsOrder,d as default};
//# sourceMappingURL=Tabs.stories.c2f9261a.js.map
