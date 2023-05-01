import{r as a}from"./index.2e2f892a.js";import{A as se}from"./arrow-left.73fabcbf.js";import{j as s,a as l}from"./jsx-runtime.db436af5.js";import{H as u}from"./Button.fbd0d096.js";import{H as d}from"./Input.ae2661ac.js";import"./_commonjsHelpers.712cc82f.js";import"./index.0579b088.js";import"./index.881b564b.js";import"./nonIterableRest.a72c2085.js";import"./defineProperty.bb51ac4e.js";import"./slicedToArray.a85404c5.js";import"./extends.f25a7a22.js";import"./format-input.6ffc2f8a.js";import"./toArray.a9612acc.js";import"./assertThisInitialized.220b4aa7.js";import"./button.6b704470.js";import"./statistic.bfc8a639.js";import"./index.32e22ee9.js";import"./index.cb53d6bd.js";import"./ResizeObserver.es.bd9ff68d.js";const ae=e=>s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:`w-5 h-5 ${e.className}`,children:s("path",{d:"M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"})});try{xmark.displayName="xmark",xmark.__docgenInfo={description:"",displayName:"xmark",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const W=e=>{const o=a.exports.useRef(null),[n,t]=a.exports.useState("h-0"),[p,A]=a.exports.useState(!1),[w,N]=a.exports.useState(0),[h,k]=a.exports.useState(!1),[z,m]=a.exports.useState("100%"),[X,D]=a.exports.useState(""),[G,v]=a.exports.useState(""),[J,F]=a.exports.useState("invisible"),[Q,B]=a.exports.useState("opacity-0"),Z=r=>{A(!0),N(r.changedTouches[0].pageY)},ee=r=>{A(!0),N(r.pageY)},f=a.exports.useCallback(r=>{A(!1),r<w?k(!0):h&&k(!1)},[w,h]),g=a.exports.useCallback(r=>{f(r.changedTouches[0].pageY)},[f]),E=a.exports.useCallback(r=>{f(r.pageY)},[f]);return a.exports.useEffect(()=>(e.handle&&p&&(document.addEventListener("touchend",g),document.addEventListener("mouseup",E)),()=>{document.removeEventListener("touchstart",g),document.removeEventListener("mouseup",E)}),[e.handle,p,g,E]),a.exports.useEffect(()=>{var S;let r;return e.show?(t("h-full"),B("opacity-100"),D("bottom-0"),h?m("24px"):e.keyboard||e.handle?m("200px"):m(`calc(100% - ${(S=o.current)==null?void 0:S.clientHeight}px)`),r=setTimeout(()=>{v("drop-shadow-reversed"),F("visible")},0)):(m("100%"),t("h-0"),B("opacity-0"),r=setTimeout(()=>{D(""),v(""),F("invisible")},800)),()=>{r&&clearTimeout(r)}},[e.show,e.handle,e.keyboard,h]),l("div",{className:`${e.className} ${n}
      w-full absolute left-0 top-0`,children:[e.backdrop&&s("div",{className:`
            ${J} ${Q}
            w-screen h-screen bg-backdrop absolute left-0 top-0 transition-opacity duration-800`}),l("div",{ref:o,className:`
          ${G} ${X}
          w-full box-border rounded-t-3xl
          first-letter:w-full bg-primary
          fixed left-0 transition-all duration-500
          flex flex-col`,style:{top:z},children:[e.header&&l("div",{onTouchStart:Z,onMouseDown:ee,"aria-hidden":"true",children:[e.handle&&s("div",{className:"flex justify-center py-2",children:s("div",{className:"w-10 h-1 rounded bg-pressed"})}),l("div",{className:`
                ${!e.handle&&"pt-3"} pb-3
                flex justify-between border-b border-secondary`,children:[s("div",{className:`py-3.5 px-4 ${e.onPrefix?"cursor-pointer":""}`,onClick:e.onPrefix,"aria-hidden":"true",children:s("div",{className:"w-5",children:e.prefix&&s(se,{})})}),l("div",{className:`flex justify-center items-center flex-col
                ${!e.description&&"py-2.5"}`,children:[s("span",{className:"text-body-bold-l",children:e.header}),s("span",{className:"text-body-s text-tertiary",children:e.description})]}),s("div",{className:`py-3.5 px-4 ${e.onClose?"cursor-pointer":""}`,onClick:e.onClose,"aria-hidden":"true",children:s("div",{className:"w-5",children:e.suffix&&s(ae,{})})})]})]}),s("div",{className:"grow overflow-y-scroll",children:e.children})]})]})};W.defaultProps={show:!1,className:"",header:"",description:"",backdrop:!0,handle:!1,keyboard:!1,prefix:!1,suffix:!0};const i=W;try{BottomSheet.displayName="BottomSheet",BottomSheet.__docgenInfo={description:"",displayName:"BottomSheet",props:{className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},show:{defaultValue:{value:"false"},description:"",name:"show",required:!1,type:{name:"boolean"}},header:{defaultValue:{value:""},description:"",name:"header",required:!1,type:{name:"string"}},description:{defaultValue:{value:""},description:"",name:"description",required:!1,type:{name:"string"}},backdrop:{defaultValue:{value:"true"},description:"",name:"backdrop",required:!1,type:{name:"boolean"}},handle:{defaultValue:{value:"false"},description:"",name:"handle",required:!1,type:{name:"boolean"}},keyboard:{defaultValue:{value:"false"},description:"",name:"keyboard",required:!1,type:{name:"boolean"}},prefix:{defaultValue:{value:"false"},description:"",name:"prefix",required:!1,type:{name:"boolean"}},suffix:{defaultValue:{value:"true"},description:"",name:"suffix",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void)"}},onPrefix:{defaultValue:null,description:"",name:"onPrefix",required:!1,type:{name:"(() => void)"}}}}}catch{}const{useArgs:c,useEffect:re}=__STORYBOOK_MODULE_STORE__,we={title:"Components/BottomSheet",component:i,argTypes:{children:{control:!1,description:"Actions in the bottom sheet.",table:{type:{summary:"ReactNode"}}},show:{control:"boolean",description:"Whether the bottom sheet is visible or not.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},header:{control:"text",description:"The header title for the bottom sheet.",table:{type:{summary:"string"}}},description:{control:"text",description:"The header description for the bottom sheet.",table:{type:{summary:"string"}}},backdrop:{control:"boolean",description:"Whether the bottom sheet has backdrop or not.",table:{type:{summary:"boolean"},defaultValue:{summary:!0}}},handle:{control:!1,description:"Add an icon on the header that can drag to the top.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},keyboard:{control:!1,description:"Set default height for keyboard showing",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},prefix:{control:"boolean",description:"The prefix previous icon for the header.",table:{type:{summary:"boolean"}}},suffix:{control:"boolean",description:"The suffix close icon for the header.",table:{type:{summary:"boolean"}}},onClose:{control:!1,description:"Specify a function that will close the bottom sheet.",table:{type:{summary:"Function"}}},onPrefix:{control:!1,description:"Specify a function that will be called when a user clicks prefix icon.",table:{type:{summary:"Function"}}}},args:{show:!1,header:"\u6A19\u984C",description:"\u89E3\u8AAA",backdrop:!0,handle:!1,keyboard:!1,prefix:!1,suffix:!0,children:l(a.exports.Fragment,{children:[s(d,{placeholder:"\u8F38\u5165\u4F60\u7684\u8A13\u7DF4\u83DC\u55AE\u540D\u7A31",className:"mb-3"}),s(u,{color:"primary",disabled:!0,children:"\u5EFA\u7ACB\u83DC\u55AE"})]})}},x=({backdrop:e})=>{const[{show:o},n]=c();return s(i,{show:o,onClose:()=>{n({show:!1})},backdrop:e,children:l("div",{className:"px-4 pt-9",children:[s("h3",{className:"text-heading-xs text-secondary mb-2",children:"\u6B61\u8FCE\u4F86\u5230 HANCHAU\uFF01"}),s("h4",{className:"text-body-xs text-tertiary mb-3",children:"\u8DDF\u8457\u8001\u5E2B\u52D5\u6B21\u52D5\u6B21\u52D5"}),s(u,{color:"highlight",className:"mb-4",children:"\u99AC\u4E0A\u958B\u59CB"})]})})},_=e=>{const[{show:o},n]=c(),t=()=>{n({show:!1})};return s(i,{show:o,header:e.header,description:e.description,backdrop:e.backdrop,prefix:!1,suffix:!1,onClose:t,children:l("div",{className:"p-4",children:[s(d,{placeholder:"\u8F38\u5165\u4F60\u7684\u8A13\u7DF4\u83DC\u55AE\u540D\u7A31",className:"mb-3"}),s(u,{color:"primary",disabled:!0,children:"\u5EFA\u7ACB\u83DC\u55AE"})]})})},b=e=>{const[{show:o,prefix:n},t]=c();re(()=>{t({prefix:!0})},[t]);const p=()=>{t({show:!1})};return s(i,{show:o,header:e.header,description:e.description,prefix:n,suffix:e.suffix,backdrop:e.backdrop,onClose:p,children:l("div",{className:"p-4",children:[s(d,{placeholder:"\u8F38\u5165\u4F60\u7684\u8A13\u7DF4\u83DC\u55AE\u540D\u7A31",className:"mb-3"}),s(u,{color:"primary",disabled:!0,children:"\u5EFA\u7ACB\u83DC\u55AE"})]})})},C=e=>{const[{show:o},n]=c(),t=()=>{n({show:!1})};return s(i,{show:o,header:e.header,description:e.description,backdrop:e.backdrop,keyboard:!0,prefix:e.prefix,suffix:e.suffix,onClose:t,children:l("div",{className:"px-4 pt-4",children:[s(d,{placeholder:"\u8F38\u5165\u4F60\u7684\u8A13\u7DF4\u83DC\u55AE\u540D\u7A31",className:"mb-3"}),s(u,{color:"primary",disabled:!0,children:"\u5EFA\u7ACB\u83DC\u55AE"})]})})},y=e=>{const[{show:o},n]=c(),t=()=>{n({show:!1})};return s(i,{show:o,header:e.header,description:e.description,backdrop:e.backdrop,handle:!0,prefix:e.prefix,suffix:e.suffix,onClose:t,children:l("div",{className:"px-4 pt-4",children:[s(d,{placeholder:"\u8F38\u5165\u4F60\u7684\u8A13\u7DF4\u83DC\u55AE\u540D\u7A31",className:"mb-3"}),s(u,{color:"primary",disabled:!0,children:"\u5EFA\u7ACB\u83DC\u55AE"})]})})};var P,H,j;x.parameters={...x.parameters,docs:{...(P=x.parameters)==null?void 0:P.docs,source:{originalSource:`({
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
}`,...(j=(H=x.parameters)==null?void 0:H.docs)==null?void 0:j.source}}};var R,U,T;_.parameters={..._.parameters,docs:{...(R=_.parameters)==null?void 0:R.docs,source:{originalSource:`(args: Props) => {
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
}`,...(T=(U=_.parameters)==null?void 0:U.docs)==null?void 0:T.source}}};var V,$,q;b.parameters={...b.parameters,docs:{...(V=b.parameters)==null?void 0:V.docs,source:{originalSource:`(args: Props) => {
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
}`,...(q=($=b.parameters)==null?void 0:$.docs)==null?void 0:q.source}}};var L,O,I;C.parameters={...C.parameters,docs:{...(L=C.parameters)==null?void 0:L.docs,source:{originalSource:`(args: Props) => {
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
}`,...(I=(O=C.parameters)==null?void 0:O.docs)==null?void 0:I.source}}};var Y,M,K;y.parameters={...y.parameters,docs:{...(Y=y.parameters)==null?void 0:Y.docs,source:{originalSource:`(args: Props) => {
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
}`,...(K=(M=y.parameters)==null?void 0:M.docs)==null?void 0:K.source}}};const Ne=["Basic","Header","HeaderPrefixAndSuffix","Keyboard","Handle"];export{x as Basic,y as Handle,_ as Header,b as HeaderPrefixAndSuffix,C as Keyboard,Ne as __namedExportsOrder,we as default};
//# sourceMappingURL=BottomSheet.stories.7481a277.js.map
