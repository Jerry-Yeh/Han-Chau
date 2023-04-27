import{H as s}from"./Rate.b8279209.js";import{j as i}from"./jsx-runtime.db436af5.js";import"./index.2e2f892a.js";import"./_commonjsHelpers.712cc82f.js";const g={title:"Components/Rate",component:s,argTypes:{level:{control:"select",options:[0,1,2,3],description:"Level of the star level.",table:{type:{summary:"number"}}},size:{control:"select",options:["s","m","l"],description:"Size of the star level.",table:{type:{summary:"number"},defaultValue:{summary:"m"}}},onColor:{control:"boolean",description:"Whether the icons are on the color background or not.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}}},args:{size:"s",level:1}},e=({level:o,size:p})=>i(s,{level:o,size:p="m"}),r=o=>i(s,{className:"bg-highlight p-1",...o,onColor:!0});var t,a,n;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`({
  level,
  size
}: RateProps) => {
  return /*#__PURE__*/_jsx(HCRate, {
    level: level,
    size: size = 'm'
  });
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};var l,m,c;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`props => {
  return /*#__PURE__*/_jsx(HCRate, {
    className: "bg-highlight p-1",
    ...props,
    onColor: true
  });
}`,...(c=(m=r.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const b=["Basic","OnColor"];export{e as Basic,r as OnColor,b as __namedExportsOrder,g as default};
//# sourceMappingURL=Rate.stories.710d684f.js.map
