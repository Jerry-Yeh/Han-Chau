import{r as s}from"./index.2e2f892a.js";import{a as n,j as t}from"./jsx-runtime.db436af5.js";import{H as u}from"./Button.580b16c7.js";import{H as d,X as G}from"./x-mark.dc31b258.js";import"./_commonjsHelpers.712cc82f.js";import"./index.0579b088.js";import"./index.f32aad8f.js";import"./nonIterableRest.3d34b57d.js";import"./slicedToArray.46bf6900.js";import"./extends.f25a7a22.js";import"./toArray.f27e8e4d.js";import"./assertThisInitialized.220b4aa7.js";import"./index.c5b7136a.js";import"./statistic.472a1099.js";import"./index.32e22ee9.js";import"./ResizeObserver.es.bd9ff68d.js";const M=e=>{var N;const r=s.exports.useRef(null),[o,l]=s.exports.useState(0),[A,g]=s.exports.useState(!1),[w,O]=s.exports.useState(0),[h,E]=s.exports.useState(!1),[Y,m]=s.exports.useState("top-full"),[K,C]=s.exports.useState(""),X=a=>{g(!0),O(a.pageY)},y=s.exports.useCallback(a=>{g(!1),a.pageY<w?E(!0):h&&E(!1)},[w,h,e.onClose]);s.exports.useEffect(()=>{var a;r.current&&l((a=r.current)==null?void 0:a.clientHeight)},[(N=r.current)==null?void 0:N.children]),s.exports.useEffect(()=>(e.handle&&A&&document.addEventListener("mouseup",y),()=>{document.removeEventListener("mouseup",y)}),[e.handle,A,y]),s.exports.useEffect(()=>{let a;return e.show?h?(m("top-6"),C("bottom-0")):e.keyboard||e.handle?(m("top-50"),C("bottom-0")):m(""):(m("top-full"),a=setTimeout(()=>{C("")},800)),()=>{a&&clearTimeout(a)}},[e.show,e.handle,e.keyboard,h,o]);const[W,F]=s.exports.useState(""),[z,D]=s.exports.useState("invisible");return s.exports.useEffect(()=>{let a;return e.show?a=setTimeout(()=>{F("drop-shadow-reversed"),D("visible")},0):a=setTimeout(()=>{F(""),D("invisible")},800),()=>{clearTimeout(a)}},[e.show]),n("div",{className:`${e.className} w-full h-full`,children:[e.backdrop&&t("div",{className:`
            ${z}
            ${e.show?"opacity-100":"opacity-0"}
            w-full h-full bg-backdrop absolute left-0 top-0 transition-opacity duration-800`}),n("div",{ref:r,className:`
          ${W} ${Y} ${K}
          w-full
          pb-6 box-border rounded-t-3xl
          first-letter:w-full bg-primary
          fixed left-0 transition-top duration-800`,style:{top:e.show?`calc(100% - ${o}px)`:"100%"},children:[e.header&&n("div",{onMouseDown:X,"aria-hidden":"true",children:[e.handle&&t("div",{className:"flex justify-center py-2",children:t("div",{className:"w-10 h-1 rounded bg-pressed"})}),n("div",{className:`
                ${!e.handle&&"pt-3"} pb-3
                flex justify-between border-b border-secondary`,children:[t("div",{className:`py-3.5 px-4 ${e.onPrefix?"cursor-pointer":""}`,onClick:e.onPrefix,"aria-hidden":"true",children:t("div",{className:"w-5",children:e.prefix})}),n("div",{className:"flex justify-center items-center flex-col",children:[t("span",{className:"text-body-bold-l",children:e.header}),t("span",{className:"text-body-s text-tertiary",children:e.description})]}),t("div",{className:`py-3.5 px-4 ${e.onSuffix?"cursor-pointer":""}`,onClick:e.onSuffix,"aria-hidden":"true",children:t("div",{className:"w-5",children:e.suffix})})]})]}),t("div",{className:`px-4 ${e.header?"pt-4":"pt-9"}`,children:e.children})]})]})};M.defaultProps={show:!1,className:"",header:"",description:"",backdrop:!0,handle:!1,keyboard:!1};const i=M;try{BottomSheet.displayName="BottomSheet",BottomSheet.__docgenInfo={description:"",displayName:"BottomSheet",props:{className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},show:{defaultValue:{value:"false"},description:"",name:"show",required:!1,type:{name:"boolean"}},header:{defaultValue:{value:""},description:"",name:"header",required:!1,type:{name:"string"}},description:{defaultValue:{value:""},description:"",name:"description",required:!1,type:{name:"string"}},backdrop:{defaultValue:{value:"true"},description:"",name:"backdrop",required:!1,type:{name:"boolean"}},handle:{defaultValue:{value:"false"},description:"",name:"handle",required:!1,type:{name:"boolean"}},keyboard:{defaultValue:{value:"false"},description:"",name:"keyboard",required:!1,type:{name:"boolean"}},prefix:{defaultValue:null,description:"",name:"prefix",required:!1,type:{name:"ReactNode"}},suffix:{defaultValue:null,description:"",name:"suffix",required:!1,type:{name:"ReactNode"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void)"}},onPrefix:{defaultValue:null,description:"",name:"onPrefix",required:!1,type:{name:"(() => void)"}},onSuffix:{defaultValue:null,description:"",name:"onSuffix",required:!1,type:{name:"(() => void)"}}}}}catch{}const J=e=>t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:`w-5 h-5 ${e.className}`,children:t("path",{fillRule:"evenodd",d:"M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z",clipRule:"evenodd"})});try{arrowleft.displayName="arrowleft",arrowleft.__docgenInfo={description:"",displayName:"arrowleft",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const{useArgs:c}=__STORYBOOK_MODULE_STORE__,pe={title:"Components/BottomSheet",component:i,argTypes:{children:{control:!1,description:"Actions in the bottom sheet.",table:{type:{summary:"ReactNode"}}},show:{control:"boolean",description:"Whether the bottom sheet is visible or not.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},header:{control:"text",description:"The header title for the bottom sheet.",table:{type:{summary:"string"}}},description:{control:"text",description:"The header description for the bottom sheet.",table:{type:{summary:"string"}}},backdrop:{control:"boolean",description:"Whether the bottom sheet has backdrop or not.",table:{type:{summary:"boolean"},defaultValue:{summary:!0}}},handle:{control:!1,description:"Add an icon on the header that can drag to the top.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},keyboard:{control:!1,description:"Set default height for keyboard showing",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},prefix:{control:!1,description:"The prefix icon or text for the header.",table:{type:{summary:"ReactNode"}}},suffix:{control:!1,description:"The suffix icon or text for the header.",table:{type:{summary:"ReactNode"}}},onClose:{control:!1,description:"Specify a function that will close the bottom sheet.",table:{type:{summary:"Function"}}},onPrefix:{control:!1,description:"Specify a function that will be called when a user clicks prefix icon.",table:{type:{summary:"Function"}}},onSuffix:{control:!1,description:"Specify a function that will be called when a user clicks prefix icon.",table:{type:{summary:"Function"}}}},args:{show:!1,header:"\u6A19\u984C",description:"\u89E3\u8AAA",backdrop:!0,handle:!1,keyboard:!1,children:n(s.exports.Fragment,{children:[t(d,{placeholder:"\u8F38\u5165\u4F60\u7684\u8A13\u7DF4\u83DC\u55AE\u540D\u7A31",className:"mb-3"}),t(u,{color:"primary",disabled:!0,children:"\u5EFA\u7ACB\u83DC\u55AE"})]})}},p=()=>{const[{show:e},r]=c();return n(i,{show:e,onClose:()=>{r({show:!1})},backdrop:!1,children:[t("h3",{className:"text-heading-xs text-secondary mb-2",children:"\u6B61\u8FCE\u4F86\u5230 HANCHAU\uFF01"}),t("h4",{className:"text-body-xs text-tertiary mb-3",children:"\u8DDF\u8457\u8001\u5E2B\u52D5\u6B21\u52D5\u6B21\u52D5"}),t(u,{color:"highlight",className:"mb-4",children:"\u99AC\u4E0A\u958B\u59CB"})]})},f=e=>{const[{show:r},o]=c(),l=()=>{o({show:!1})};return n(i,{show:r,header:e.header,description:e.description,onClose:l,children:[t(d,{placeholder:"\u8F38\u5165\u4F60\u7684\u8A13\u7DF4\u83DC\u55AE\u540D\u7A31",className:"mb-3"}),t(u,{color:"primary",disabled:!0,children:"\u5EFA\u7ACB\u83DC\u55AE"})]})},_=e=>{const[{show:r},o]=c(),l=()=>{o({show:!1})};return n(i,{show:r,header:e.header,description:e.description,prefix:t(J,{}),suffix:t(G,{}),onSuffix:l,onClose:l,children:[t(d,{placeholder:"\u8F38\u5165\u4F60\u7684\u8A13\u7DF4\u83DC\u55AE\u540D\u7A31",className:"mb-3"}),t(u,{color:"primary",disabled:!0,children:"\u5EFA\u7ACB\u83DC\u55AE"})]})},b=e=>{const[{show:r},o]=c(),l=()=>{o({show:!1})};return n(i,{show:r,header:e.header,description:e.description,backdrop:e.backdrop,keyboard:!0,onClose:l,children:[t(d,{placeholder:"\u8F38\u5165\u4F60\u7684\u8A13\u7DF4\u83DC\u55AE\u540D\u7A31",className:"mb-3"}),t(u,{color:"primary",disabled:!0,children:"\u5EFA\u7ACB\u83DC\u55AE"})]})},x=e=>{const[{show:r},o]=c(),l=()=>{o({show:!1})};return n(i,{show:r,header:e.header,description:e.description,onClose:l,handle:!0,children:[t(d,{placeholder:"\u8F38\u5165\u4F60\u7684\u8A13\u7DF4\u83DC\u55AE\u540D\u7A31",className:"mb-3"}),t(u,{color:"primary",disabled:!0,children:"\u5EFA\u7ACB\u83DC\u55AE"})]})};var B,S,v;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`() => {
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
    backdrop: false,
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
}`,...(v=(S=p.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};var H,k,P;f.parameters={...f.parameters,docs:{...(H=f.parameters)==null?void 0:H.docs,source:{originalSource:`(args: Props) => {
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
}`,...(P=(k=f.parameters)==null?void 0:k.docs)==null?void 0:P.source}}};var R,j,U;_.parameters={..._.parameters,docs:{...(R=_.parameters)==null?void 0:R.docs,source:{originalSource:`(args: Props) => {
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
}`,...(U=(j=_.parameters)==null?void 0:j.docs)==null?void 0:U.source}}};var V,q,T;b.parameters={...b.parameters,docs:{...(V=b.parameters)==null?void 0:V.docs,source:{originalSource:`(args: Props) => {
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
}`,...(T=(q=b.parameters)==null?void 0:q.docs)==null?void 0:T.source}}};var $,I,L;x.parameters={...x.parameters,docs:{...($=x.parameters)==null?void 0:$.docs,source:{originalSource:`(args: Props) => {
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
    onClose: handleClose,
    handle: true,
    children: [/*#__PURE__*/_jsx(HCInput, {
      placeholder: "\\u8F38\\u5165\\u4F60\\u7684\\u8A13\\u7DF4\\u83DC\\u55AE\\u540D\\u7A31",
      className: "mb-3"
    }), /*#__PURE__*/_jsx(HCButton, {
      color: "primary",
      disabled: true,
      children: "\\u5EFA\\u7ACB\\u83DC\\u55AE"
    })]
  });
}`,...(L=(I=x.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};const fe=["Basic","Header","HeaderPrefixAndSuffix","Keyboard","Handle"];export{p as Basic,x as Handle,f as Header,_ as HeaderPrefixAndSuffix,b as Keyboard,fe as __namedExportsOrder,pe as default};
//# sourceMappingURL=BottomSheet.stories.71f2bc01.js.map
