import{r as a}from"./index.2e2f892a.js";import{a as c,j as r}from"./jsx-runtime.db436af5.js";import"./_commonjsHelpers.712cc82f.js";function g({title:e,titleId:t,...n},o){return a.exports.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:o,"aria-labelledby":t},n),e?a.exports.createElement("title",{id:t},e):null,a.exports.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"}))}const y=a.exports.forwardRef(g),w=y,i=({children:e,label:t,extra:n})=>{const[o,_]=a.exports.useState(!1);return c("div",{className:"p-4 relative",children:[c("div",{onClick:()=>{_(b=>!b)},"aria-hidden":"true",className:"w-full flex justify-between cursor-pointer",children:[c("div",{className:"flex items-center",children:[r("button",{className:"mr-4",children:r(w,{className:`w-6 h-6 ${o?"rotate-180":""} transition duration-500`})}),r("span",{children:t})]}),n]}),r("div",{className:`w-full overflow-hidden absolute top-14 ${o?"h-full":"h-0"} transition-height duration-500`,children:e})]})},d=i;try{i.displayName="Accordion",i.__docgenInfo={description:"",displayName:"Accordion",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},extra:{defaultValue:null,description:"",name:"extra",required:!1,type:{name:"ReactNode"}}}}}catch{}const A={title:"Components/Accordion",component:d,argTypes:{label:{control:"text",description:"Label of the panel.",defaultValue:{summary:"Button"},table:{type:{summary:"string"},defaultValue:{summary:""}}},children:{control:"text",description:"Content of collapse item.",table:{type:{summary:"ReactNode"},defaultValue:{summary:""}}},extra:{control:"text",description:"The extra element in the corner.",table:{type:{summary:"ReactNode"},defaultValue:{summary:""}}}},args:{label:"\u6A19\u984C",children:"\u6211\u662F\u5167\u5BB9"}},s=e=>r(d,{label:e.label,children:e.children}),l=e=>{const t=n=>{n.stopPropagation()};return r(d,{label:e.label,extra:r("button",{onClick:t,className:"text-highlight underline",children:"\u67E5\u770B\u7D00\u9304"}),children:e.children})};var u,p,m;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`(args: AccordionProps) => {
  return /*#__PURE__*/_jsx(HCAccordion, {
    label: args.label,
    children: args.children
  });
}`,...(m=(p=s.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var h,x,f;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`(args: AccordionProps) => {
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
}`,...(f=(x=l.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};const j=["Basic","Extra"];export{s as Basic,l as Extra,j as __namedExportsOrder,A as default};
//# sourceMappingURL=Accordion.stories.5277dc1b.js.map
