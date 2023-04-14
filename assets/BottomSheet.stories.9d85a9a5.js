import{r as t}from"./index.2e2f892a.js";import{a as l,j as r}from"./jsx-runtime.db436af5.js";import{H as u}from"./Button.580b16c7.js";import{H as i}from"./Input.d9cdd1fd.js";import{A as G}from"./arrow-left.73fabcbf.js";import"./_commonjsHelpers.712cc82f.js";import"./index.0579b088.js";import"./index.f32aad8f.js";import"./nonIterableRest.3d34b57d.js";import"./slicedToArray.46bf6900.js";import"./extends.f25a7a22.js";import"./toArray.f27e8e4d.js";import"./assertThisInitialized.220b4aa7.js";import"./index.c5b7136a.js";import"./statistic.472a1099.js";import"./index.32e22ee9.js";import"./ResizeObserver.es.bd9ff68d.js";const M=e=>{var D;const a=t.exports.useRef(null),[o,n]=t.exports.useState(0),[A,g]=t.exports.useState(!1),[w,O]=t.exports.useState(0),[h,E]=t.exports.useState(!1),[Y,p]=t.exports.useState("top-full"),[K,C]=t.exports.useState(""),W=s=>{g(!0),O(s.pageY)},y=t.exports.useCallback(s=>{g(!1),s.pageY<w?E(!0):h&&E(!1)},[w,h,e.onClose]);t.exports.useEffect(()=>{var s;a.current&&n((s=a.current)==null?void 0:s.clientHeight)},[(D=a.current)==null?void 0:D.children]),t.exports.useEffect(()=>(e.handle&&A&&document.addEventListener("mouseup",y),()=>{document.removeEventListener("mouseup",y)}),[e.handle,A,y]),t.exports.useEffect(()=>{let s;return e.show?h?(p("top-6"),C("bottom-0")):e.keyboard||e.handle?(p("top-50"),C("bottom-0")):p(""):(p("top-full"),s=setTimeout(()=>{C("")},800)),()=>{s&&clearTimeout(s)}},[e.show,e.handle,e.keyboard,h,o]);const[X,F]=t.exports.useState(""),[z,k]=t.exports.useState("invisible");return t.exports.useEffect(()=>{let s;return e.show?s=setTimeout(()=>{F("drop-shadow-reversed"),k("visible")},0):s=setTimeout(()=>{F(""),k("invisible")},800),()=>{clearTimeout(s)}},[e.show]),l("div",{className:`${e.className} w-full h-full`,children:[e.backdrop&&r("div",{className:`
            ${z}
            ${e.show?"opacity-100":"opacity-0"}
            w-full h-full bg-backdrop absolute left-0 top-0 transition-opacity duration-800`}),l("div",{ref:a,className:`
          ${X} ${Y} ${K}
          w-full
          pb-6 box-border rounded-t-3xl
          first-letter:w-full bg-primary
          fixed left-0 transition-top duration-800`,style:{top:e.show?`calc(100% - ${o}px)`:"100%"},children:[e.header&&l("div",{onMouseDown:W,"aria-hidden":"true",children:[e.handle&&r("div",{className:"flex justify-center py-2",children:r("div",{className:"w-10 h-1 rounded bg-pressed"})}),l("div",{className:`
                ${!e.handle&&"pt-3"} pb-3
                flex justify-between border-b border-secondary`,children:[r("div",{className:`py-3.5 px-4 ${e.onPrefix?"cursor-pointer":""}`,onClick:e.onPrefix,"aria-hidden":"true",children:r("div",{className:"w-5",children:e.prefix})}),l("div",{className:"flex justify-center items-center flex-col",children:[r("span",{className:"text-body-bold-l",children:e.header}),r("span",{className:"text-body-s text-tertiary",children:e.description})]}),r("div",{className:`py-3.5 px-4 ${e.onSuffix?"cursor-pointer":""}`,onClick:e.onSuffix,"aria-hidden":"true",children:r("div",{className:"w-5",children:e.suffix})})]})]}),r("div",{className:`px-4 ${e.header?"pt-4":"pt-9"}`,children:e.children})]})]})};M.defaultProps={show:!1,className:"",header:"",description:"",backdrop:!0,handle:!1,keyboard:!1};const d=M;try{BottomSheet.displayName="BottomSheet",BottomSheet.__docgenInfo={description:"",displayName:"BottomSheet",props:{className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},show:{defaultValue:{value:"false"},description:"",name:"show",required:!1,type:{name:"boolean"}},header:{defaultValue:{value:""},description:"",name:"header",required:!1,type:{name:"string"}},description:{defaultValue:{value:""},description:"",name:"description",required:!1,type:{name:"string"}},backdrop:{defaultValue:{value:"true"},description:"",name:"backdrop",required:!1,type:{name:"boolean"}},handle:{defaultValue:{value:"false"},description:"",name:"handle",required:!1,type:{name:"boolean"}},keyboard:{defaultValue:{value:"false"},description:"",name:"keyboard",required:!1,type:{name:"boolean"}},prefix:{defaultValue:null,description:"",name:"prefix",required:!1,type:{name:"ReactNode"}},suffix:{defaultValue:null,description:"",name:"suffix",required:!1,type:{name:"ReactNode"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void)"}},onPrefix:{defaultValue:null,description:"",name:"onPrefix",required:!1,type:{name:"(() => void)"}},onSuffix:{defaultValue:null,description:"",name:"onSuffix",required:!1,type:{name:"(() => void)"}}}}}catch{}const J=e=>r("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:`w-5 h-5 ${e.className}`,children:r("path",{d:"M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"})});try{xmark.displayName="xmark",xmark.__docgenInfo={description:"",displayName:"xmark",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const{useArgs:c}=__STORYBOOK_MODULE_STORE__,fe={title:"Components/BottomSheet",component:d,argTypes:{children:{control:!1,description:"Actions in the bottom sheet.",table:{type:{summary:"ReactNode"}}},show:{control:"boolean",description:"Whether the bottom sheet is visible or not.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},header:{control:"text",description:"The header title for the bottom sheet.",table:{type:{summary:"string"}}},description:{control:"text",description:"The header description for the bottom sheet.",table:{type:{summary:"string"}}},backdrop:{control:"boolean",description:"Whether the bottom sheet has backdrop or not.",table:{type:{summary:"boolean"},defaultValue:{summary:!0}}},handle:{control:!1,description:"Add an icon on the header that can drag to the top.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},keyboard:{control:!1,description:"Set default height for keyboard showing",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},prefix:{control:!1,description:"The prefix icon or text for the header.",table:{type:{summary:"ReactNode"}}},suffix:{control:!1,description:"The suffix icon or text for the header.",table:{type:{summary:"ReactNode"}}},onClose:{control:!1,description:"Specify a function that will close the bottom sheet.",table:{type:{summary:"Function"}}},onPrefix:{control:!1,description:"Specify a function that will be called when a user clicks prefix icon.",table:{type:{summary:"Function"}}},onSuffix:{control:!1,description:"Specify a function that will be called when a user clicks prefix icon.",table:{type:{summary:"Function"}}}},args:{show:!1,header:"\u6A19\u984C",description:"\u89E3\u8AAA",backdrop:!0,handle:!1,keyboard:!1,children:l(t.exports.Fragment,{children:[r(i,{placeholder:"\u8F38\u5165\u4F60\u7684\u8A13\u7DF4\u83DC\u55AE\u540D\u7A31",className:"mb-3"}),r(u,{color:"primary",disabled:!0,children:"\u5EFA\u7ACB\u83DC\u55AE"})]})}},m=({backdrop:e})=>{const[{show:a},o]=c();return l(d,{show:a,onClose:()=>{o({show:!1})},backdrop:e,children:[r("h3",{className:"text-heading-xs text-secondary mb-2",children:"\u6B61\u8FCE\u4F86\u5230 HANCHAU\uFF01"}),r("h4",{className:"text-body-xs text-tertiary mb-3",children:"\u8DDF\u8457\u8001\u5E2B\u52D5\u6B21\u52D5\u6B21\u52D5"}),r(u,{color:"highlight",className:"mb-4",children:"\u99AC\u4E0A\u958B\u59CB"})]})},f=e=>{const[{show:a},o]=c(),n=()=>{o({show:!1})};return l(d,{show:a,header:e.header,description:e.description,backdrop:e.backdrop,onClose:n,children:[r(i,{placeholder:"\u8F38\u5165\u4F60\u7684\u8A13\u7DF4\u83DC\u55AE\u540D\u7A31",className:"mb-3"}),r(u,{color:"primary",disabled:!0,children:"\u5EFA\u7ACB\u83DC\u55AE"})]})},b=e=>{const[{show:a},o]=c(),n=()=>{o({show:!1})};return l(d,{show:a,header:e.header,description:e.description,prefix:r(G,{}),suffix:r(J,{}),backdrop:e.backdrop,onSuffix:n,onClose:n,children:[r(i,{placeholder:"\u8F38\u5165\u4F60\u7684\u8A13\u7DF4\u83DC\u55AE\u540D\u7A31",className:"mb-3"}),r(u,{color:"primary",disabled:!0,children:"\u5EFA\u7ACB\u83DC\u55AE"})]})},_=e=>{const[{show:a},o]=c(),n=()=>{o({show:!1})};return l(d,{show:a,header:e.header,description:e.description,backdrop:e.backdrop,keyboard:!0,onClose:n,children:[r(i,{placeholder:"\u8F38\u5165\u4F60\u7684\u8A13\u7DF4\u83DC\u55AE\u540D\u7A31",className:"mb-3"}),r(u,{color:"primary",disabled:!0,children:"\u5EFA\u7ACB\u83DC\u55AE"})]})},x=e=>{const[{show:a},o]=c(),n=()=>{o({show:!1})};return l(d,{show:a,header:e.header,description:e.description,backdrop:e.backdrop,handle:!0,onClose:n,children:[r(i,{placeholder:"\u8F38\u5165\u4F60\u7684\u8A13\u7DF4\u83DC\u55AE\u540D\u7A31",className:"mb-3"}),r(u,{color:"primary",disabled:!0,children:"\u5EFA\u7ACB\u83DC\u55AE"})]})};var N,B,S;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`({
  backdrop
}: Props) => {
  const [{
    show
  }, updateArgs] = useArgs();
  const handleClose = () => {
    updateArgs({
      show: false
    });
  };
  return /*#__PURE__*/_jsxs(HCBottomSheet, {
    show: show,
    onClose: handleClose,
    backdrop: backdrop,
    children: [/*#__PURE__*/_jsx("h3", {
      className: "text-heading-xs text-secondary mb-2",
      children: "\\u6B61\\u8FCE\\u4F86\\u5230 HANCHAU\\uFF01"
    }), /*#__PURE__*/_jsx("h4", {
      className: "text-body-xs text-tertiary mb-3",
      children: "\\u8DDF\\u8457\\u8001\\u5E2B\\u52D5\\u6B21\\u52D5\\u6B21\\u52D5"
    }), /*#__PURE__*/_jsx(HCButton, {
      color: "highlight",
      className: "mb-4",
      children: "\\u99AC\\u4E0A\\u958B\\u59CB"
    })]
  });
}`,...(S=(B=m.parameters)==null?void 0:B.docs)==null?void 0:S.source}}};var v,P,H;f.parameters={...f.parameters,docs:{...(v=f.parameters)==null?void 0:v.docs,source:{originalSource:`(args: Props) => {
  const [{
    show
  }, updateArgs] = useArgs();
  const handleClose = () => {
    updateArgs({
      show: false
    });
  };
  return /*#__PURE__*/_jsxs(HCBottomSheet, {
    show: show,
    header: args.header,
    description: args.description,
    backdrop: args.backdrop,
    onClose: handleClose,
    children: [/*#__PURE__*/_jsx(HCInput, {
      placeholder: "\\u8F38\\u5165\\u4F60\\u7684\\u8A13\\u7DF4\\u83DC\\u55AE\\u540D\\u7A31",
      className: "mb-3"
    }), /*#__PURE__*/_jsx(HCButton, {
      color: "primary",
      disabled: true,
      children: "\\u5EFA\\u7ACB\\u83DC\\u55AE"
    })]
  });
}`,...(H=(P=f.parameters)==null?void 0:P.docs)==null?void 0:H.source}}};var R,j,U;b.parameters={...b.parameters,docs:{...(R=b.parameters)==null?void 0:R.docs,source:{originalSource:`(args: Props) => {
  const [{
    show
  }, updateArgs] = useArgs();
  const handleClose = () => {
    updateArgs({
      show: false
    });
  };
  return /*#__PURE__*/_jsxs(HCBottomSheet, {
    show: show,
    header: args.header,
    description: args.description,
    prefix: /*#__PURE__*/_jsx(ArrowLeft, {}),
    suffix: /*#__PURE__*/_jsx(XMark, {}),
    backdrop: args.backdrop,
    onSuffix: handleClose,
    onClose: handleClose,
    children: [/*#__PURE__*/_jsx(HCInput, {
      placeholder: "\\u8F38\\u5165\\u4F60\\u7684\\u8A13\\u7DF4\\u83DC\\u55AE\\u540D\\u7A31",
      className: "mb-3"
    }), /*#__PURE__*/_jsx(HCButton, {
      color: "primary",
      disabled: true,
      children: "\\u5EFA\\u7ACB\\u83DC\\u55AE"
    })]
  });
}`,...(U=(j=b.parameters)==null?void 0:j.docs)==null?void 0:U.source}}};var V,q,T;_.parameters={..._.parameters,docs:{...(V=_.parameters)==null?void 0:V.docs,source:{originalSource:`(args: Props) => {
  const [{
    show
  }, updateArgs] = useArgs();
  const handleClose = () => {
    updateArgs({
      show: false
    });
  };
  return /*#__PURE__*/_jsxs(HCBottomSheet, {
    show: show,
    header: args.header,
    description: args.description,
    backdrop: args.backdrop,
    keyboard: true,
    onClose: handleClose,
    children: [/*#__PURE__*/_jsx(HCInput, {
      placeholder: "\\u8F38\\u5165\\u4F60\\u7684\\u8A13\\u7DF4\\u83DC\\u55AE\\u540D\\u7A31",
      className: "mb-3"
    }), /*#__PURE__*/_jsx(HCButton, {
      color: "primary",
      disabled: true,
      children: "\\u5EFA\\u7ACB\\u83DC\\u55AE"
    })]
  });
}`,...(T=(q=_.parameters)==null?void 0:q.docs)==null?void 0:T.source}}};var $,L,I;x.parameters={...x.parameters,docs:{...($=x.parameters)==null?void 0:$.docs,source:{originalSource:`(args: Props) => {
  const [{
    show
  }, updateArgs] = useArgs();
  const handleClose = () => {
    updateArgs({
      show: false
    });
  };
  return /*#__PURE__*/_jsxs(HCBottomSheet, {
    show: show,
    header: args.header,
    description: args.description,
    backdrop: args.backdrop,
    handle: true,
    onClose: handleClose,
    children: [/*#__PURE__*/_jsx(HCInput, {
      placeholder: "\\u8F38\\u5165\\u4F60\\u7684\\u8A13\\u7DF4\\u83DC\\u55AE\\u540D\\u7A31",
      className: "mb-3"
    }), /*#__PURE__*/_jsx(HCButton, {
      color: "primary",
      disabled: true,
      children: "\\u5EFA\\u7ACB\\u83DC\\u55AE"
    })]
  });
}`,...(I=(L=x.parameters)==null?void 0:L.docs)==null?void 0:I.source}}};const be=["Basic","Header","HeaderPrefixAndSuffix","Keyboard","Handle"];export{m as Basic,x as Handle,f as Header,b as HeaderPrefixAndSuffix,_ as Keyboard,be as __namedExportsOrder,fe as default};
//# sourceMappingURL=BottomSheet.stories.9d85a9a5.js.map
