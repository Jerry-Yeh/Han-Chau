import{r as t}from"./index.2e2f892a.js";import{j as r,a as N}from"./jsx-runtime.db436af5.js";import{A as v}from"./AntdDecorator.e9ea0b67.js";import"./_commonjsHelpers.712cc82f.js";import"./index.f32aad8f.js";import"./nonIterableRest.3d34b57d.js";import"./slicedToArray.46bf6900.js";import"./extends.f25a7a22.js";import"./toArray.f27e8e4d.js";import"./assertThisInitialized.220b4aa7.js";function w({title:e,titleId:s,...a},i){return t.exports.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:i,"aria-labelledby":s},a),e?t.exports.createElement("title",{id:s},e):null,t.exports.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"}))}const k=t.exports.forwardRef(w),_=k,b=""+new URL("logomark.752bc281.svg",import.meta.url).href,x=e=>{const[s,a]=t.exports.useState("");return t.exports.useEffect(()=>{(()=>{switch(e.size){case"l":a("py-6");break;case"m":a("py-3.5");break;case"s":a("py-0");break}})()}),r("div",{className:`bg-secondary ${s}`,children:N("div",{className:"h-12 grid grid-cols-3",children:[r("div",{className:"hover:cursor-pointer flex justify-start items-center pl-4",children:e.left}),r("div",{className:"flex justify-center",children:e.center}),r("div",{className:"flex justify-end items-center hover:cursor-pointer pr-4",children:e.right})]})})};x.defaultProps={center:r("img",{className:"w-7",src:b,alt:"LOGO"}),size:"m"};const C=x;try{Header.displayName="Header",Header.__docgenInfo={description:"",displayName:"Header",props:{left:{defaultValue:null,description:"",name:"left",required:!1,type:{name:"ReactNode"}},center:{defaultValue:{value:"<img className='w-7' src={logomark} alt='LOGO' />"},description:"",name:"center",required:!1,type:{name:"ReactNode"}},right:{defaultValue:null,description:"",name:"right",required:!1,type:{name:"ReactNode"}},size:{defaultValue:{value:"m"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"l"'},{value:'"m"'},{value:'"s"'}]}}}}}catch{}const V={title:"Components/Header",component:C,decorators:[v],parameters:{docs:{source:{type:"dynamic",excludeDecorators:!0}}},argTypes:{left:{control:!1,description:"Handle left action of header.",table:{type:{summary:"function"}}},right:{control:!1,description:"Handle right action of header.",table:{type:{summary:"function"}}},size:{control:"select",options:["l","m","s"],description:"Set the size of header.",defaultValue:{summary:"m"},table:{type:{summary:"string"}}}}},o={},n={args:{left:r(_,{className:"w-8 h-8",onClick:()=>({})})}},c={args:{left:r(_,{className:"w-8 h-8",onClick:()=>({})}),right:r("button",{className:"text-tertiary",children:"\u8DF3\u904E"})}};var l,m,d;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(d=(m=o.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var u,p,f;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    left: /*#__PURE__*/_jsx(ArrowLeftIcon, {
      className: "w-8 h-8",
      onClick: () => ({})
    })
  }
}`,...(f=(p=n.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};var h,g,y;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    left: /*#__PURE__*/_jsx(ArrowLeftIcon, {
      className: "w-8 h-8",
      onClick: () => ({})
    }),
    right: /*#__PURE__*/_jsx("button", {
      className: "text-tertiary",
      children: "\\u8DF3\\u904E"
    })
  }
}`,...(y=(g=c.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};const q=["Basic","Previous","Next"];export{o as Basic,c as Next,n as Previous,q as __namedExportsOrder,V as default};
//# sourceMappingURL=Header.stories.d61c0f22.js.map
