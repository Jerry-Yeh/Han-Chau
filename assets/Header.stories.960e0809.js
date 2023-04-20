import{r as _}from"./index.2e2f892a.js";import{a as p,j as e}from"./jsx-runtime.db436af5.js";import{A as L}from"./AntdDecorator.e9ea0b67.js";import{A as l}from"./arrow-left.73fabcbf.js";import"./_commonjsHelpers.712cc82f.js";import"./index.f32aad8f.js";import"./nonIterableRest.3d34b57d.js";import"./slicedToArray.46bf6900.js";import"./extends.f25a7a22.js";import"./toArray.f27e8e4d.js";import"./assertThisInitialized.220b4aa7.js";const b=""+new URL("logomark.752bc281.svg",import.meta.url).href,U=r=>{const[z,d]=_.exports.useState("");return _.exports.useEffect(()=>{(()=>{switch(r.size){case"l":d("py-6");break;case"m":d("py-3.5");break;case"s":d("py-0");break}})()},[r.size]),p("div",{className:`bg-secondary ${z}`,children:[p("div",{className:"h-11 flex text-secondary",children:[e("div",{className:"flex-1 hover:cursor-pointer flex justify-start items-center pl-1",children:r.prefix}),!r.expand&&e("div",{className:"flex justify-center items-center text-heading-xs text-primary",children:!r.expand&&r.title}),e("div",{className:"flex-1 flex justify-end items-center hover:cursor-pointer pr-1",children:r.suffix})]}),r.expand&&e("div",{className:"text-heading-m text-primary pl-4 pb-3",children:r.title})]})};U.defaultProps={title:e("img",{className:"w-7",src:b,alt:"LOGO"}),size:"s",expand:!1};const S=U;try{Header.displayName="Header",Header.__docgenInfo={description:"",displayName:"Header",props:{prefix:{defaultValue:null,description:"",name:"prefix",required:!1,type:{name:"ReactNode"}},title:{defaultValue:{value:"<img className='w-7' src={logomark} alt='LOGO' />"},description:"",name:"title",required:!1,type:{name:"ReactNode"}},suffix:{defaultValue:null,description:"",name:"suffix",required:!1,type:{name:"ReactNode"}},size:{defaultValue:{value:"s"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"l"'},{value:'"m"'},{value:'"s"'}]}},expand:{defaultValue:{value:"false"},description:"",name:"expand",required:!1,type:{name:"boolean"}}}}}catch{}const a=r=>e("button",{className:"p-3",onClick:r.onClick,children:r.children});try{HeaderIconButton.displayName="HeaderIconButton",HeaderIconButton.__docgenInfo={description:"",displayName:"HeaderIconButton",props:{onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((e: MouseEvent<Element, MouseEvent>) => void)"}}}}}catch{}const V=r=>e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:`w-5 h-5 ${r.className}`,children:e("path",{d:"M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z"})});try{plus.displayName="plus",plus.__docgenInfo={description:"",displayName:"plus",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const B=r=>e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:`w-5 h-5 ${r.className}`,children:e("path",{d:"M10 3a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM10 8.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM11.5 15.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z"})});try{ellipsisvertical.displayName="ellipsisvertical",ellipsisvertical.__docgenInfo={description:"",displayName:"ellipsisvertical",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const Q={title:"Components/Header",component:S,decorators:[L],parameters:{docs:{source:{type:"dynamic",excludeDecorators:!0}}},argTypes:{title:{control:"text",description:"Title of the header.",table:{type:{summary:"ReactNode"}}},prefix:{control:!1,description:"Handle prefix action of header.",table:{type:{summary:"ReactNode"}}},suffix:{control:!1,description:"Handle suffix action of header.",table:{type:{summary:"ReactNode"}}},size:{control:"select",options:["l","m","s"],description:"Set the size of header.",defaultValue:{summary:"s"},table:{type:{summary:"string"}}},expand:{control:"boolean",description:"Whether the header is expanded or not.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}}},args:{title:"\u6A19\u984C",expand:!1,size:"s"}},s={},t={args:{prefix:e(a,{children:e(l,{})})}},n={args:{prefix:e(a,{children:e(l,{})}),suffix:e("div",{className:"flex",children:e(a,{children:e(B,{})})})}},o={args:{prefix:e(a,{children:e(l,{})}),suffix:p("div",{className:"flex",children:[e(a,{children:e(V,{})}),e(a,{children:e(B,{})})]})}},i={args:{prefix:e(a,{children:e(l,{})}),suffix:e(a,{children:"action"})}},c={args:{prefix:e(a,{children:"action"}),suffix:e(a,{children:"action"})}};var u,m,f;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(f=(m=s.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};var x,h,y;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    prefix: /*#__PURE__*/_jsx(HCHeaderIconButton, {
      children: /*#__PURE__*/_jsx(ArrowLeft, {})
    })
  }
}`,...(y=(h=t.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var g,H,v;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    prefix: /*#__PURE__*/_jsx(HCHeaderIconButton, {
      children: /*#__PURE__*/_jsx(ArrowLeft, {})
    }),
    suffix: /*#__PURE__*/_jsx("div", {
      className: "flex",
      children: /*#__PURE__*/_jsx(HCHeaderIconButton, {
        children: /*#__PURE__*/_jsx(EllipsisVertical, {})
      })
    })
  }
}`,...(v=(H=n.parameters)==null?void 0:H.docs)==null?void 0:v.source}}};var N,I,E;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    prefix: /*#__PURE__*/_jsx(HCHeaderIconButton, {
      children: /*#__PURE__*/_jsx(ArrowLeft, {})
    }),
    suffix: /*#__PURE__*/_jsxs("div", {
      className: "flex",
      children: [/*#__PURE__*/_jsx(HCHeaderIconButton, {
        children: /*#__PURE__*/_jsx(Plus, {})
      }), /*#__PURE__*/_jsx(HCHeaderIconButton, {
        children: /*#__PURE__*/_jsx(EllipsisVertical, {})
      })]
    })
  }
}`,...(E=(I=o.parameters)==null?void 0:I.docs)==null?void 0:E.source}}};var R,j,C;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    prefix: /*#__PURE__*/_jsx(HCHeaderIconButton, {
      children: /*#__PURE__*/_jsx(ArrowLeft, {})
    }),
    suffix: /*#__PURE__*/_jsx(HCHeaderIconButton, {
      children: "action"
    })
  }
}`,...(C=(j=i.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};var w,A,P;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    prefix: /*#__PURE__*/_jsx(HCHeaderIconButton, {
      children: "action"
    }),
    suffix: /*#__PURE__*/_jsx(HCHeaderIconButton, {
      children: "action"
    })
  }
}`,...(P=(A=c.parameters)==null?void 0:A.docs)==null?void 0:P.source}}};const X=["Basic","LeftIcon","LeftIconAndSingleIcon","LeftIconAndTwoIcons","LeftIconAndAction","ActionAndAction"];export{c as ActionAndAction,s as Basic,t as LeftIcon,i as LeftIconAndAction,n as LeftIconAndSingleIcon,o as LeftIconAndTwoIcons,X as __namedExportsOrder,Q as default};
//# sourceMappingURL=Header.stories.960e0809.js.map
