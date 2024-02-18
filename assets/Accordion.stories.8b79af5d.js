import{H as r}from"./Accordion.aba73771.js";import{j as n,a as x}from"./jsx-runtime.db436af5.js";import"./index.2e2f892a.js";import"./_commonjsHelpers.712cc82f.js";const A={title:"Components/Accordion",component:r,argTypes:{label:{control:"text",description:"Label of the panel.",defaultValue:{summary:"Button"},table:{type:{summary:"string"},defaultValue:{summary:""}}},children:{control:"text",description:"Content of collapse item.",table:{type:{summary:"ReactNode"},defaultValue:{summary:""}}},extra:{control:"text",description:"The extra element in the corner.",table:{type:{summary:"ReactNode"},defaultValue:{summary:""}}}},args:{label:"\u6A19\u984C",children:"\u6211\u662F\u5167\u5BB9"}},a=e=>n(r,{label:e.label,children:e.children}),l=e=>{const h=b=>{b.stopPropagation()};return n(r,{label:e.label,extra:n("button",{onClick:h,className:"text-highlight underline",children:"\u67E5\u770B\u7D00\u9304"}),children:e.children})},t=e=>x("div",{children:[n(r,{label:e.label,children:e.children}),n(r,{label:e.label,children:e.children})]});var o,c,s;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`(args: AccordionProps) => {
  return /*#__PURE__*/_jsx(HCAccordion, {
    label: args.label,
    children: args.children
  });
}`,...(s=(c=a.parameters)==null?void 0:c.docs)==null?void 0:s.source}}};var i,d,u;l.parameters={...l.parameters,docs:{...(i=l.parameters)==null?void 0:i.docs,source:{originalSource:`(args: AccordionProps) => {
  const onClick = (event: MouseEvent) => {
    event.stopPropagation();
  };
  return /*#__PURE__*/_jsx(HCAccordion, {
    label: args.label,
    extra: /*#__PURE__*/_jsx("button", {
      onClick: onClick,
      className: "text-highlight underline",
      children: "\\u67E5\\u770B\\u7D00\\u9304"
    }),
    children: args.children
  });
}`,...(u=(d=l.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var m,p,_;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`(args: AccordionProps) => {
  return /*#__PURE__*/_jsxs("div", {
    children: [/*#__PURE__*/_jsx(HCAccordion, {
      label: args.label,
      children: args.children
    }), /*#__PURE__*/_jsx(HCAccordion, {
      label: args.label,
      children: args.children
    })]
  });
}`,...(_=(p=t.parameters)==null?void 0:p.docs)==null?void 0:_.source}}};const P=["Basic","Extra","Multiple"];export{a as Basic,l as Extra,t as Multiple,P as __namedExportsOrder,A as default};
//# sourceMappingURL=Accordion.stories.8b79af5d.js.map
