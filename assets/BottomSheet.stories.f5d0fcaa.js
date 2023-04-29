import{r as a}from"./index.2e2f892a.js";import{A as Z}from"./arrow-left.73fabcbf.js";import{j as s,a as l}from"./jsx-runtime.db436af5.js";import{H as u}from"./Button.6f12edc9.js";import{H as d}from"./Input.ae2661ac.js";import"./_commonjsHelpers.712cc82f.js";import"./index.0579b088.js";import"./index.881b564b.js";import"./nonIterableRest.a72c2085.js";import"./defineProperty.bb51ac4e.js";import"./slicedToArray.a85404c5.js";import"./extends.f25a7a22.js";import"./format-input.6ffc2f8a.js";import"./toArray.a9612acc.js";import"./assertThisInitialized.220b4aa7.js";import"./button.6b704470.js";import"./statistic.bfc8a639.js";import"./index.32e22ee9.js";import"./index.cb53d6bd.js";import"./ResizeObserver.es.bd9ff68d.js";const ee=e=>s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:`w-5 h-5 ${e.className}`,children:s("path",{d:"M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"})});try{xmark.displayName="xmark",xmark.__docgenInfo={description:"",displayName:"xmark",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const K=e=>{var B;const t=a.exports.useRef(null),[o,n]=a.exports.useState(0),[h,y]=a.exports.useState(!1),[N,D]=a.exports.useState(0),[p,k]=a.exports.useState(!1),[W,m]=a.exports.useState("top-full"),[z,g]=a.exports.useState(""),X=r=>{y(!0),D(r.changedTouches[0].pageY)},G=r=>{y(!0),D(r.pageY)},f=a.exports.useCallback(r=>{y(!1),r<N?k(!0):p&&k(!1)},[N,p]),E=a.exports.useCallback(r=>{f(r.changedTouches[0].pageY)},[f]),w=a.exports.useCallback(r=>{f(r.pageY)},[f]);a.exports.useEffect(()=>{var r;t.current&&n((r=t.current)==null?void 0:r.clientHeight)},[(B=t.current)==null?void 0:B.children]),a.exports.useEffect(()=>(e.handle&&h&&(document.addEventListener("touchend",E),document.addEventListener("mouseup",w)),()=>{document.removeEventListener("touchstart",E),document.removeEventListener("mouseup",w)}),[e.handle,h,E,w]),a.exports.useEffect(()=>{let r;return e.show?p?(m("top-6"),g("bottom-0")):e.keyboard||e.handle?(m("top-50"),g("bottom-0")):m(""):(m("top-full"),r=setTimeout(()=>{g("")},800)),()=>{r&&clearTimeout(r)}},[e.show,e.handle,e.keyboard,p,o]);const[J,v]=a.exports.useState(""),[Q,F]=a.exports.useState("invisible");return a.exports.useEffect(()=>{let r;return e.show?r=setTimeout(()=>{v("drop-shadow-reversed"),F("visible")},0):r=setTimeout(()=>{v(""),F("invisible")},800),()=>{clearTimeout(r)}},[e.show]),l("div",{className:`${e.className}
      ${e.show?"h-full":"h-0"} w-full absolute left-0 top-0`,children:[e.backdrop&&s("div",{className:`
            ${Q}
            ${e.show?"opacity-100":"opacity-0"}
            w-screen h-screen bg-backdrop absolute left-0 top-0 transition-opacity duration-800`}),l("div",{ref:t,className:`
          ${J} ${W} ${z}
          w-full box-border rounded-t-3xl
          first-letter:w-full bg-primary
          fixed left-0 transition-top duration-500
          flex flex-col`,style:{top:e.show?`calc(100% - ${o}px)`:"100%"},children:[e.header&&l("div",{onTouchStart:X,onMouseDown:G,"aria-hidden":"true",children:[e.handle&&s("div",{className:"flex justify-center py-2",children:s("div",{className:"w-10 h-1 rounded bg-pressed"})}),l("div",{className:`
                ${!e.handle&&"pt-3"} pb-3
                flex justify-between border-b border-secondary`,children:[s("div",{className:`py-3.5 px-4 ${e.onPrefix?"cursor-pointer":""}`,onClick:e.onPrefix,"aria-hidden":"true",children:s("div",{className:"w-5",children:e.prefix&&s(Z,{})})}),l("div",{className:`flex justify-center items-center flex-col
                ${!e.description&&"py-2.5"}`,children:[s("span",{className:"text-body-bold-l",children:e.header}),s("span",{className:"text-body-s text-tertiary",children:e.description})]}),s("div",{className:`py-3.5 px-4 ${e.onClose?"cursor-pointer":""}`,onClick:e.onClose,"aria-hidden":"true",children:s("div",{className:"w-5",children:e.suffix&&s(ee,{})})})]})]}),s("div",{className:"overflow-y-scroll",children:e.children})]})]})};K.defaultProps={show:!1,className:"",header:"",description:"",backdrop:!0,handle:!1,keyboard:!1,prefix:!1,suffix:!0};const i=K;try{BottomSheet.displayName="BottomSheet",BottomSheet.__docgenInfo={description:"",displayName:"BottomSheet",props:{className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},show:{defaultValue:{value:"false"},description:"",name:"show",required:!1,type:{name:"boolean"}},header:{defaultValue:{value:""},description:"",name:"header",required:!1,type:{name:"string"}},description:{defaultValue:{value:""},description:"",name:"description",required:!1,type:{name:"string"}},backdrop:{defaultValue:{value:"true"},description:"",name:"backdrop",required:!1,type:{name:"boolean"}},handle:{defaultValue:{value:"false"},description:"",name:"handle",required:!1,type:{name:"boolean"}},keyboard:{defaultValue:{value:"false"},description:"",name:"keyboard",required:!1,type:{name:"boolean"}},prefix:{defaultValue:{value:"false"},description:"",name:"prefix",required:!1,type:{name:"boolean"}},suffix:{defaultValue:{value:"true"},description:"",name:"suffix",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void)"}},onPrefix:{defaultValue:null,description:"",name:"onPrefix",required:!1,type:{name:"(() => void)"}}}}}catch{}const{useArgs:c,useEffect:se}=__STORYBOOK_MODULE_STORE__,ge={title:"Components/BottomSheet",component:i,argTypes:{children:{control:!1,description:"Actions in the bottom sheet.",table:{type:{summary:"ReactNode"}}},show:{control:"boolean",description:"Whether the bottom sheet is visible or not.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},header:{control:"text",description:"The header title for the bottom sheet.",table:{type:{summary:"string"}}},description:{control:"text",description:"The header description for the bottom sheet.",table:{type:{summary:"string"}}},backdrop:{control:"boolean",description:"Whether the bottom sheet has backdrop or not.",table:{type:{summary:"boolean"},defaultValue:{summary:!0}}},handle:{control:!1,description:"Add an icon on the header that can drag to the top.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},keyboard:{control:!1,description:"Set default height for keyboard showing",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},prefix:{control:"boolean",description:"The prefix previous icon for the header.",table:{type:{summary:"boolean"}}},suffix:{control:"boolean",description:"The suffix close icon for the header.",table:{type:{summary:"boolean"}}},onClose:{control:!1,description:"Specify a function that will close the bottom sheet.",table:{type:{summary:"Function"}}},onPrefix:{control:!1,description:"Specify a function that will be called when a user clicks prefix icon.",table:{type:{summary:"Function"}}}},args:{show:!1,header:"\u6A19\u984C",description:"\u89E3\u8AAA",backdrop:!0,handle:!1,keyboard:!1,prefix:!1,suffix:!0,children:l(a.exports.Fragment,{children:[s(d,{placeholder:"\u8F38\u5165\u4F60\u7684\u8A13\u7DF4\u83DC\u55AE\u540D\u7A31",className:"mb-3"}),s(u,{color:"primary",disabled:!0,children:"\u5EFA\u7ACB\u83DC\u55AE"})]})}},x=({backdrop:e})=>{const[{show:t},o]=c();return s(i,{show:t,onClose:()=>{o({show:!1})},backdrop:e,children:l("div",{className:"px-4 pt-9",children:[s("h3",{className:"text-heading-xs text-secondary mb-2",children:"\u6B61\u8FCE\u4F86\u5230 HANCHAU\uFF01"}),s("h4",{className:"text-body-xs text-tertiary mb-3",children:"\u8DDF\u8457\u8001\u5E2B\u52D5\u6B21\u52D5\u6B21\u52D5"}),s(u,{color:"highlight",className:"mb-4",children:"\u99AC\u4E0A\u958B\u59CB"})]})})},_=e=>{const[{show:t},o]=c(),n=()=>{o({show:!1})};return s(i,{show:t,header:e.header,description:e.description,backdrop:e.backdrop,prefix:!1,suffix:!1,onClose:n,children:l("div",{className:"p-4",children:[s(d,{placeholder:"\u8F38\u5165\u4F60\u7684\u8A13\u7DF4\u83DC\u55AE\u540D\u7A31",className:"mb-3"}),s(u,{color:"primary",disabled:!0,children:"\u5EFA\u7ACB\u83DC\u55AE"})]})})},b=e=>{const[{show:t,prefix:o},n]=c();se(()=>{n({prefix:!0})},[n]);const h=()=>{n({show:!1})};return s(i,{show:t,header:e.header,description:e.description,prefix:o,suffix:e.suffix,backdrop:e.backdrop,onClose:h,children:l("div",{className:"p-4",children:[s(d,{placeholder:"\u8F38\u5165\u4F60\u7684\u8A13\u7DF4\u83DC\u55AE\u540D\u7A31",className:"mb-3"}),s(u,{color:"primary",disabled:!0,children:"\u5EFA\u7ACB\u83DC\u55AE"})]})})},C=e=>{const[{show:t},o]=c(),n=()=>{o({show:!1})};return s(i,{show:t,header:e.header,description:e.description,backdrop:e.backdrop,keyboard:!0,prefix:e.prefix,suffix:e.suffix,onClose:n,children:l("div",{className:"px-4 pt-4",children:[s(d,{placeholder:"\u8F38\u5165\u4F60\u7684\u8A13\u7DF4\u83DC\u55AE\u540D\u7A31",className:"mb-3"}),s(u,{color:"primary",disabled:!0,children:"\u5EFA\u7ACB\u83DC\u55AE"})]})})},A=e=>{const[{show:t},o]=c(),n=()=>{o({show:!1})};return s(i,{show:t,header:e.header,description:e.description,backdrop:e.backdrop,handle:!0,prefix:e.prefix,suffix:e.suffix,onClose:n,children:l("div",{className:"px-4 pt-4",children:[s(d,{placeholder:"\u8F38\u5165\u4F60\u7684\u8A13\u7DF4\u83DC\u55AE\u540D\u7A31",className:"mb-3"}),s(u,{color:"primary",disabled:!0,children:"\u5EFA\u7ACB\u83DC\u55AE"})]})})};var P,S,H;x.parameters={...x.parameters,docs:{...(P=x.parameters)==null?void 0:P.docs,source:{originalSource:`({
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
  return /*#__PURE__*/_jsx(HCBottomSheet, {
    show: show,
    onClose: handleClose,
    backdrop: backdrop,
    children: /*#__PURE__*/_jsxs("div", {
      className: "px-4 pt-9",
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
    })
  });
}`,...(H=(S=x.parameters)==null?void 0:S.docs)==null?void 0:H.source}}};var j,R,U;_.parameters={..._.parameters,docs:{...(j=_.parameters)==null?void 0:j.docs,source:{originalSource:`(args: Props) => {
  const [{
    show
  }, updateArgs] = useArgs();
  const handleClose = () => {
    updateArgs({
      show: false
    });
  };
  return /*#__PURE__*/_jsx(HCBottomSheet, {
    show: show,
    header: args.header,
    description: args.description,
    backdrop: args.backdrop,
    prefix: false,
    suffix: false,
    onClose: handleClose,
    children: /*#__PURE__*/_jsxs("div", {
      className: "p-4",
      children: [/*#__PURE__*/_jsx(HCInput, {
        placeholder: "\\u8F38\\u5165\\u4F60\\u7684\\u8A13\\u7DF4\\u83DC\\u55AE\\u540D\\u7A31",
        className: "mb-3"
      }), /*#__PURE__*/_jsx(HCButton, {
        color: "primary",
        disabled: true,
        children: "\\u5EFA\\u7ACB\\u83DC\\u55AE"
      })]
    })
  });
}`,...(U=(R=_.parameters)==null?void 0:R.docs)==null?void 0:U.source}}};var T,V,$;b.parameters={...b.parameters,docs:{...(T=b.parameters)==null?void 0:T.docs,source:{originalSource:`(args: Props) => {
  const [{
    show,
    prefix
  }, updateArgs] = useArgs();
  useEffect(() => {
    updateArgs({
      prefix: true
    });
  }, [updateArgs]);
  const handleClose = () => {
    updateArgs({
      show: false
    });
  };
  return /*#__PURE__*/_jsx(HCBottomSheet, {
    show: show,
    header: args.header,
    description: args.description,
    prefix: prefix,
    suffix: args.suffix,
    backdrop: args.backdrop,
    onClose: handleClose,
    children: /*#__PURE__*/_jsxs("div", {
      className: "p-4",
      children: [/*#__PURE__*/_jsx(HCInput, {
        placeholder: "\\u8F38\\u5165\\u4F60\\u7684\\u8A13\\u7DF4\\u83DC\\u55AE\\u540D\\u7A31",
        className: "mb-3"
      }), /*#__PURE__*/_jsx(HCButton, {
        color: "primary",
        disabled: true,
        children: "\\u5EFA\\u7ACB\\u83DC\\u55AE"
      })]
    })
  });
}`,...($=(V=b.parameters)==null?void 0:V.docs)==null?void 0:$.source}}};var q,L,I;C.parameters={...C.parameters,docs:{...(q=C.parameters)==null?void 0:q.docs,source:{originalSource:`(args: Props) => {
  const [{
    show
  }, updateArgs] = useArgs();
  const handleClose = () => {
    updateArgs({
      show: false
    });
  };
  return /*#__PURE__*/_jsx(HCBottomSheet, {
    show: show,
    header: args.header,
    description: args.description,
    backdrop: args.backdrop,
    keyboard: true,
    prefix: args.prefix,
    suffix: args.suffix,
    onClose: handleClose,
    children: /*#__PURE__*/_jsxs("div", {
      className: "px-4 pt-4",
      children: [/*#__PURE__*/_jsx(HCInput, {
        placeholder: "\\u8F38\\u5165\\u4F60\\u7684\\u8A13\\u7DF4\\u83DC\\u55AE\\u540D\\u7A31",
        className: "mb-3"
      }), /*#__PURE__*/_jsx(HCButton, {
        color: "primary",
        disabled: true,
        children: "\\u5EFA\\u7ACB\\u83DC\\u55AE"
      })]
    })
  });
}`,...(I=(L=C.parameters)==null?void 0:L.docs)==null?void 0:I.source}}};var Y,M,O;A.parameters={...A.parameters,docs:{...(Y=A.parameters)==null?void 0:Y.docs,source:{originalSource:`(args: Props) => {
  const [{
    show
  }, updateArgs] = useArgs();
  const handleClose = () => {
    updateArgs({
      show: false
    });
  };
  return /*#__PURE__*/_jsx(HCBottomSheet, {
    show: show,
    header: args.header,
    description: args.description,
    backdrop: args.backdrop,
    handle: true,
    prefix: args.prefix,
    suffix: args.suffix,
    onClose: handleClose,
    children: /*#__PURE__*/_jsxs("div", {
      className: "px-4 pt-4",
      children: [/*#__PURE__*/_jsx(HCInput, {
        placeholder: "\\u8F38\\u5165\\u4F60\\u7684\\u8A13\\u7DF4\\u83DC\\u55AE\\u540D\\u7A31",
        className: "mb-3"
      }), /*#__PURE__*/_jsx(HCButton, {
        color: "primary",
        disabled: true,
        children: "\\u5EFA\\u7ACB\\u83DC\\u55AE"
      })]
    })
  });
}`,...(O=(M=A.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};const Ee=["Basic","Header","HeaderPrefixAndSuffix","Keyboard","Handle"];export{x as Basic,A as Handle,_ as Header,b as HeaderPrefixAndSuffix,C as Keyboard,Ee as __namedExportsOrder,ge as default};
//# sourceMappingURL=BottomSheet.stories.f5d0fcaa.js.map
