import{r}from"./index.2e2f892a.js";import{a as u,j as t}from"./jsx-runtime.db436af5.js";import{H as l}from"./Button.580b16c7.js";import{H as i,X as G}from"./x-mark.dc31b258.js";import{A as J}from"./arrow-left.73fabcbf.js";import"./_commonjsHelpers.712cc82f.js";import"./index.0579b088.js";import"./index.f32aad8f.js";import"./nonIterableRest.3d34b57d.js";import"./slicedToArray.46bf6900.js";import"./extends.f25a7a22.js";import"./toArray.f27e8e4d.js";import"./assertThisInitialized.220b4aa7.js";import"./index.c5b7136a.js";import"./statistic.472a1099.js";import"./index.32e22ee9.js";import"./ResizeObserver.es.bd9ff68d.js";const L=e=>{var k;const s=r.exports.useRef(null),[o,n]=r.exports.useState(0),[y,g]=r.exports.useState(!1),[w,M]=r.exports.useState(0),[h,E]=r.exports.useState(!1),[Y,p]=r.exports.useState("top-full"),[K,C]=r.exports.useState(""),X=a=>{g(!0),M(a.pageY)},A=r.exports.useCallback(a=>{g(!1),a.pageY<w?E(!0):h&&E(!1)},[w,h,e.onClose]);r.exports.useEffect(()=>{var a;s.current&&n((a=s.current)==null?void 0:a.clientHeight)},[(k=s.current)==null?void 0:k.children]),r.exports.useEffect(()=>(e.handle&&y&&document.addEventListener("mouseup",A),()=>{document.removeEventListener("mouseup",A)}),[e.handle,y,A]),r.exports.useEffect(()=>{let a;return e.show?h?(p("top-6"),C("bottom-0")):e.keyboard||e.handle?(p("top-50"),C("bottom-0")):p(""):(p("top-full"),a=setTimeout(()=>{C("")},800)),()=>{a&&clearTimeout(a)}},[e.show,e.handle,e.keyboard,h,o]);const[W,F]=r.exports.useState(""),[z,D]=r.exports.useState("invisible");return r.exports.useEffect(()=>{let a;return e.show?a=setTimeout(()=>{F("drop-shadow-reversed"),D("visible")},0):a=setTimeout(()=>{F(""),D("invisible")},800),()=>{clearTimeout(a)}},[e.show]),u("div",{className:`${e.className} w-full h-full`,children:[e.backdrop&&t("div",{className:`
            ${z}
            ${e.show?"opacity-100":"opacity-0"}
            w-full h-full bg-backdrop absolute left-0 top-0 transition-opacity duration-800`}),u("div",{ref:s,className:`
          ${W} ${Y} ${K}
          w-full
          pb-6 box-border rounded-t-3xl
          first-letter:w-full bg-primary
          fixed left-0 transition-top duration-800`,style:{top:e.show?`calc(100% - ${o}px)`:"100%"},children:[e.header&&u("div",{onMouseDown:X,"aria-hidden":"true",children:[e.handle&&t("div",{className:"flex justify-center py-2",children:t("div",{className:"w-10 h-1 rounded bg-pressed"})}),u("div",{className:`
                ${!e.handle&&"pt-3"} pb-3
                flex justify-between border-b border-secondary`,children:[t("div",{className:`py-3.5 px-4 ${e.onPrefix?"cursor-pointer":""}`,onClick:e.onPrefix,"aria-hidden":"true",children:t("div",{className:"w-5",children:e.prefix})}),u("div",{className:"flex justify-center items-center flex-col",children:[t("span",{className:"text-body-bold-l",children:e.header}),t("span",{className:"text-body-s text-tertiary",children:e.description})]}),t("div",{className:`py-3.5 px-4 ${e.onSuffix?"cursor-pointer":""}`,onClick:e.onSuffix,"aria-hidden":"true",children:t("div",{className:"w-5",children:e.suffix})})]})]}),t("div",{className:`px-4 ${e.header?"pt-4":"pt-9"}`,children:e.children})]})]})};L.defaultProps={show:!1,className:"",header:"",description:"",backdrop:!0,handle:!1,keyboard:!1};const d=L;try{BottomSheet.displayName="BottomSheet",BottomSheet.__docgenInfo={description:"",displayName:"BottomSheet",props:{className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},show:{defaultValue:{value:"false"},description:"",name:"show",required:!1,type:{name:"boolean"}},header:{defaultValue:{value:""},description:"",name:"header",required:!1,type:{name:"string"}},description:{defaultValue:{value:""},description:"",name:"description",required:!1,type:{name:"string"}},backdrop:{defaultValue:{value:"true"},description:"",name:"backdrop",required:!1,type:{name:"boolean"}},handle:{defaultValue:{value:"false"},description:"",name:"handle",required:!1,type:{name:"boolean"}},keyboard:{defaultValue:{value:"false"},description:"",name:"keyboard",required:!1,type:{name:"boolean"}},prefix:{defaultValue:null,description:"",name:"prefix",required:!1,type:{name:"ReactNode"}},suffix:{defaultValue:null,description:"",name:"suffix",required:!1,type:{name:"ReactNode"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void)"}},onPrefix:{defaultValue:null,description:"",name:"onPrefix",required:!1,type:{name:"(() => void)"}},onSuffix:{defaultValue:null,description:"",name:"onSuffix",required:!1,type:{name:"(() => void)"}}}}}catch{}const{useArgs:c}=__STORYBOOK_MODULE_STORE__,fe={title:"Components/BottomSheet",component:d,argTypes:{children:{control:!1,description:"Actions in the bottom sheet.",table:{type:{summary:"ReactNode"}}},show:{control:"boolean",description:"Whether the bottom sheet is visible or not.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},header:{control:"text",description:"The header title for the bottom sheet.",table:{type:{summary:"string"}}},description:{control:"text",description:"The header description for the bottom sheet.",table:{type:{summary:"string"}}},backdrop:{control:"boolean",description:"Whether the bottom sheet has backdrop or not.",table:{type:{summary:"boolean"},defaultValue:{summary:!0}}},handle:{control:!1,description:"Add an icon on the header that can drag to the top.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},keyboard:{control:!1,description:"Set default height for keyboard showing",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},prefix:{control:!1,description:"The prefix icon or text for the header.",table:{type:{summary:"ReactNode"}}},suffix:{control:!1,description:"The suffix icon or text for the header.",table:{type:{summary:"ReactNode"}}},onClose:{control:!1,description:"Specify a function that will close the bottom sheet.",table:{type:{summary:"Function"}}},onPrefix:{control:!1,description:"Specify a function that will be called when a user clicks prefix icon.",table:{type:{summary:"Function"}}},onSuffix:{control:!1,description:"Specify a function that will be called when a user clicks prefix icon.",table:{type:{summary:"Function"}}}},args:{show:!1,header:"\u6A19\u984C",description:"\u89E3\u8AAA",backdrop:!0,handle:!1,keyboard:!1,children:u(r.exports.Fragment,{children:[t(i,{placeholder:"\u8F38\u5165\u4F60\u7684\u8A13\u7DF4\u83DC\u55AE\u540D\u7A31",className:"mb-3"}),t(l,{color:"primary",disabled:!0,children:"\u5EFA\u7ACB\u83DC\u55AE"})]})}},m=({backdrop:e})=>{const[{show:s},o]=c();return u(d,{show:s,onClose:()=>{o({show:!1})},backdrop:e,children:[t("h3",{className:"text-heading-xs text-secondary mb-2",children:"\u6B61\u8FCE\u4F86\u5230 HANCHAU\uFF01"}),t("h4",{className:"text-body-xs text-tertiary mb-3",children:"\u8DDF\u8457\u8001\u5E2B\u52D5\u6B21\u52D5\u6B21\u52D5"}),t(l,{color:"highlight",className:"mb-4",children:"\u99AC\u4E0A\u958B\u59CB"})]})},f=e=>{const[{show:s},o]=c(),n=()=>{o({show:!1})};return u(d,{show:s,header:e.header,description:e.description,backdrop:e.backdrop,onClose:n,children:[t(i,{placeholder:"\u8F38\u5165\u4F60\u7684\u8A13\u7DF4\u83DC\u55AE\u540D\u7A31",className:"mb-3"}),t(l,{color:"primary",disabled:!0,children:"\u5EFA\u7ACB\u83DC\u55AE"})]})},b=e=>{const[{show:s},o]=c(),n=()=>{o({show:!1})};return u(d,{show:s,header:e.header,description:e.description,prefix:t(J,{}),suffix:t(G,{}),backdrop:e.backdrop,onSuffix:n,onClose:n,children:[t(i,{placeholder:"\u8F38\u5165\u4F60\u7684\u8A13\u7DF4\u83DC\u55AE\u540D\u7A31",className:"mb-3"}),t(l,{color:"primary",disabled:!0,children:"\u5EFA\u7ACB\u83DC\u55AE"})]})},_=e=>{const[{show:s},o]=c(),n=()=>{o({show:!1})};return u(d,{show:s,header:e.header,description:e.description,backdrop:e.backdrop,keyboard:!0,onClose:n,children:[t(i,{placeholder:"\u8F38\u5165\u4F60\u7684\u8A13\u7DF4\u83DC\u55AE\u540D\u7A31",className:"mb-3"}),t(l,{color:"primary",disabled:!0,children:"\u5EFA\u7ACB\u83DC\u55AE"})]})},x=e=>{const[{show:s},o]=c(),n=()=>{o({show:!1})};return u(d,{show:s,header:e.header,description:e.description,backdrop:e.backdrop,handle:!0,onClose:n,children:[t(i,{placeholder:"\u8F38\u5165\u4F60\u7684\u8A13\u7DF4\u83DC\u55AE\u540D\u7A31",className:"mb-3"}),t(l,{color:"primary",disabled:!0,children:"\u5EFA\u7ACB\u83DC\u55AE"})]})};var B,N,S;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`({
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
}`,...(S=(N=m.parameters)==null?void 0:N.docs)==null?void 0:S.source}}};var P,H,v;f.parameters={...f.parameters,docs:{...(P=f.parameters)==null?void 0:P.docs,source:{originalSource:`(args: Props) => {
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
}`,...(v=(H=f.parameters)==null?void 0:H.docs)==null?void 0:v.source}}};var R,j,U;b.parameters={...b.parameters,docs:{...(R=b.parameters)==null?void 0:R.docs,source:{originalSource:`(args: Props) => {
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
}`,...(U=(j=b.parameters)==null?void 0:j.docs)==null?void 0:U.source}}};var V,T,q;_.parameters={..._.parameters,docs:{...(V=_.parameters)==null?void 0:V.docs,source:{originalSource:`(args: Props) => {
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
}`,...(q=(T=_.parameters)==null?void 0:T.docs)==null?void 0:q.source}}};var $,I,O;x.parameters={...x.parameters,docs:{...($=x.parameters)==null?void 0:$.docs,source:{originalSource:`(args: Props) => {
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
}`,...(O=(I=x.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};const be=["Basic","Header","HeaderPrefixAndSuffix","Keyboard","Handle"];export{m as Basic,x as Handle,f as Header,b as HeaderPrefixAndSuffix,_ as Keyboard,be as __namedExportsOrder,fe as default};
//# sourceMappingURL=BottomSheet.stories.baaa17b4.js.map
