import{r as s}from"./index.2e2f892a.js";import{A as ue}from"./arrow-left.73fabcbf.js";import{j as t,a as l}from"./jsx-runtime.db436af5.js";import{H as d}from"./Button.47a27f7b.js";import{H as f}from"./Input.1ad126a7.js";import"./_commonjsHelpers.712cc82f.js";import"./index.0579b088.js";import"./index.881b564b.js";import"./nonIterableRest.a72c2085.js";import"./defineProperty.bb51ac4e.js";import"./slicedToArray.a85404c5.js";import"./extends.f25a7a22.js";import"./format-input.6ffc2f8a.js";import"./toArray.a9612acc.js";import"./assertThisInitialized.220b4aa7.js";import"./button.6b704470.js";import"./statistic.bfc8a639.js";import"./index.32e22ee9.js";import"./index.cb53d6bd.js";import"./ResizeObserver.es.bd9ff68d.js";const de=e=>t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:`w-5 h-5 ${e.className}`,children:t("path",{d:"M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"})});try{xmark.displayName="xmark",xmark.__docgenInfo={description:"",displayName:"xmark",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const ee=e=>{var j;const n=s.exports.useRef(null),a=s.exports.useRef(null),o=s.exports.useRef(null);s.exports.useEffect(()=>{let r=null;const i=u=>{u.stopPropagation()};return n.current&&(r=n.current,r.addEventListener("scroll",i),r.addEventListener("wheel",i)),()=>{r&&(r.removeEventListener("scroll",i),r.removeEventListener("wheel",i))}},[]);const[E,v]=s.exports.useState("h-0"),[N,w]=s.exports.useState(!1),[B,k]=s.exports.useState(0),[m,D]=s.exports.useState(!1),[te,x]=s.exports.useState("100%"),[se,F]=s.exports.useState(""),[re,S]=s.exports.useState(""),[oe,P]=s.exports.useState("invisible"),[ne,H]=s.exports.useState("opacity-0"),[ae,R]=s.exports.useState("100%"),le=s.exports.useCallback(r=>{w(!0),k(r.changedTouches[0].pageY)},[]),ie=s.exports.useCallback(r=>{w(!0),k(r.pageY)},[]);return s.exports.useEffect(()=>{const r=h=>{w(!1),h<B?D(!0):m&&D(!1)},i=h=>{r(h.changedTouches[0].pageY)},u=h=>{r(h.pageY)};return e.handle&&N&&(document.addEventListener("touchend",i),document.addEventListener("mouseup",u)),()=>{document.removeEventListener("touchend",i),document.removeEventListener("mouseup",u)}},[e.handle,N,B,m]),s.exports.useEffect(()=>{var i,u;let r;return e.show?(v("h-full"),H("opacity-100"),F("bottom-0"),R(`calc(100% - ${(i=o.current)==null?void 0:i.clientHeight}px)`),m?x("24px"):e.keyboard||e.handle?x("200px"):x(`calc(100% - ${(u=a.current)==null?void 0:u.clientHeight}px)`),r=setTimeout(()=>{S("drop-shadow-reversed"),P("visible")},0)):(x("100%"),v("h-0"),H("opacity-0"),R("100%"),r=setTimeout(()=>{F(""),S(""),P("invisible")},800)),()=>{r&&clearTimeout(r)}},[e.show,e.handle,e.keyboard,m]),l("div",{ref:n,className:`${e.className} ${E}
      w-full absolute left-0 top-0`,children:[t("div",{className:`
            ${oe} ${ne}
            w-screen h-screen bg-backdrop fixed left-0 top-0 transition-opacity duration-800 z-20`}),l("div",{ref:a,className:`
          ${re} ${se}
          w-full box-border rounded-t-3xl
          first-letter:w-full bg-primary
          fixed left-0 transition-all duration-500
          flex flex-col z-30`,style:{top:te},children:[e.title&&l("div",{onTouchStart:le,onMouseDown:ie,"aria-hidden":"true",children:[e.handle&&t("div",{className:"flex justify-center py-2",children:t("div",{className:"w-10 h-1 rounded bg-pressed"})}),l("div",{className:`
                ${!e.handle&&"pt-3"} pb-3
                flex justify-between border-b border-secondary`,children:[t("div",{className:`py-3.5 px-4 ${e.onPrefix?"cursor-pointer":""}`,onClick:e.onPrefix,"aria-hidden":"true",children:t("div",{className:"w-5",children:e.prefix&&t(ue,{})})}),l("div",{className:`flex justify-center items-center flex-col
                ${!e.description&&"py-2.5"}`,children:[t("span",{className:"text-body-bold-l",children:e.title}),t("span",{className:"text-body-s text-tertiary",children:e.description})]}),t("div",{className:`py-3.5 px-4 ${e.onClose?"cursor-pointer":""}`,onClick:e.onClose,"aria-hidden":"true",children:t("div",{className:"w-5",children:e.suffix&&t(de,{})})})]})]}),t("div",{className:"grow overflow-y-scroll",style:{paddingBottom:e.footer?`${(j=o.current)==null?void 0:j.clientHeight}px`:0},children:e.children}),e.footer&&t("div",{ref:o,className:"w-full fixed transition-all duration-500 border-t border-secondary bg-primary z-10 p-4",style:{top:ae},children:e.footer})]})]})};ee.defaultProps={show:!1,className:"",title:"",description:"",backdrop:!0,handle:!1,keyboard:!1,prefix:!1,suffix:!0};const c=ee;try{BottomSheet.displayName="BottomSheet",BottomSheet.__docgenInfo={description:"",displayName:"BottomSheet",props:{className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},show:{defaultValue:{value:"false"},description:"",name:"show",required:!1,type:{name:"boolean"}},title:{defaultValue:{value:""},description:"",name:"title",required:!1,type:{name:"string"}},description:{defaultValue:{value:""},description:"",name:"description",required:!1,type:{name:"string"}},backdrop:{defaultValue:{value:"true"},description:"",name:"backdrop",required:!1,type:{name:"boolean"}},handle:{defaultValue:{value:"false"},description:"",name:"handle",required:!1,type:{name:"boolean"}},keyboard:{defaultValue:{value:"false"},description:"",name:"keyboard",required:!1,type:{name:"boolean"}},prefix:{defaultValue:{value:"false"},description:"",name:"prefix",required:!1,type:{name:"boolean"}},suffix:{defaultValue:{value:"true"},description:"",name:"suffix",required:!1,type:{name:"boolean"}},footer:{defaultValue:null,description:"",name:"footer",required:!1,type:{name:"ReactNode"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void)"}},onPrefix:{defaultValue:null,description:"",name:"onPrefix",required:!1,type:{name:"(() => void)"}}}}}catch{}const{useArgs:p,useEffect:ce}=__STORYBOOK_MODULE_STORE__,Pe={title:"Components/BottomSheet",component:c,argTypes:{children:{control:!1,description:"Actions in the bottom sheet.",table:{type:{summary:"ReactNode"}}},show:{control:"boolean",description:"Whether the bottom sheet is visible or not.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},title:{control:"text",description:"The header title for the bottom sheet.",table:{type:{summary:"string"}}},description:{control:"text",description:"The header description for the bottom sheet.",table:{type:{summary:"string"}}},backdrop:{control:"boolean",description:"Whether the bottom sheet has backdrop or not.",table:{type:{summary:"boolean"},defaultValue:{summary:!0}}},handle:{control:!1,description:"Add an icon on the header that can drag to the top.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},keyboard:{control:!1,description:"Set default height for keyboard showing",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},prefix:{control:"boolean",description:"The prefix previous icon for the header.",table:{type:{summary:"boolean"}}},suffix:{control:"boolean",description:"The suffix close icon for the header.",table:{type:{summary:"boolean"}}},onClose:{control:!1,description:"Specify a function that will close the bottom sheet.",table:{type:{summary:"Function"}}},onPrefix:{control:!1,description:"Specify a function that will be called when a user clicks prefix icon.",table:{type:{summary:"Function"}}}},args:{show:!1,title:"\u6A19\u984C",description:"\u89E3\u8AAA",backdrop:!0,handle:!1,keyboard:!1,prefix:!1,suffix:!0,children:l(s.exports.Fragment,{children:[t(f,{placeholder:"\u8F38\u5165\u4F60\u7684\u8A13\u7DF4\u83DC\u55AE\u540D\u7A31",className:"mb-3"}),t(d,{color:"primary",disabled:!0,children:"\u5EFA\u7ACB\u83DC\u55AE"})]})}},_=({backdrop:e})=>{const[{show:n},a]=p();return t(c,{show:n,onClose:()=>{a({show:!1})},backdrop:e,children:l("div",{className:"px-4 pt-9",children:[t("h3",{className:"text-heading-xs text-secondary mb-2",children:"\u6B61\u8FCE\u4F86\u5230 HANCHAU\uFF01"}),t("h4",{className:"text-body-xs text-tertiary mb-3",children:"\u8DDF\u8457\u8001\u5E2B\u52D5\u6B21\u52D5\u6B21\u52D5"}),t(d,{color:"highlight",className:"mb-4",children:"\u99AC\u4E0A\u958B\u59CB"})]})})},b=e=>{const[{show:n},a]=p(),o=()=>{a({show:!1})};return t(c,{show:n,title:e.title,description:e.description,backdrop:e.backdrop,prefix:!1,suffix:!1,onClose:o,children:l("div",{className:"p-4",children:[t(f,{placeholder:"\u8F38\u5165\u4F60\u7684\u8A13\u7DF4\u83DC\u55AE\u540D\u7A31",className:"mb-3"}),t(d,{color:"primary",disabled:!0,children:"\u5EFA\u7ACB\u83DC\u55AE"})]})})},C=e=>{const[{show:n,prefix:a},o]=p();ce(()=>{o({prefix:!0})},[o]);const E=()=>{o({show:!1})};return t(c,{show:n,title:e.title,description:e.description,prefix:a,suffix:e.suffix,backdrop:e.backdrop,onClose:E,children:l("div",{className:"p-4",children:[t(f,{placeholder:"\u8F38\u5165\u4F60\u7684\u8A13\u7DF4\u83DC\u55AE\u540D\u7A31",className:"mb-3"}),t(d,{color:"primary",disabled:!0,children:"\u5EFA\u7ACB\u83DC\u55AE"})]})})},y=e=>{const[{show:n},a]=p(),o=()=>{a({show:!1})};return t(c,{show:n,title:e.title,description:e.description,backdrop:e.backdrop,keyboard:!0,prefix:e.prefix,suffix:e.suffix,onClose:o,children:l("div",{className:"px-4 pt-4",children:[t(f,{placeholder:"\u8F38\u5165\u4F60\u7684\u8A13\u7DF4\u83DC\u55AE\u540D\u7A31",className:"mb-3"}),t(d,{color:"primary",disabled:!0,children:"\u5EFA\u7ACB\u83DC\u55AE"})]})})},g=e=>{const[{show:n},a]=p(),o=()=>{a({show:!1})};return t(c,{show:n,title:e.title,description:e.description,backdrop:e.backdrop,handle:!0,prefix:e.prefix,suffix:e.suffix,onClose:o,children:l("div",{className:"px-4 pt-4",children:[t(f,{placeholder:"\u8F38\u5165\u4F60\u7684\u8A13\u7DF4\u83DC\u55AE\u540D\u7A31",className:"mb-3"}),t(d,{color:"primary",disabled:!0,children:"\u5EFA\u7ACB\u83DC\u55AE"})]})})},A=e=>{const[{show:n},a]=p(),o=()=>{a({show:!1})};return l("div",{children:[t("div",{className:"w-full",style:{height:"1000px"},children:"Content"}),t(c,{show:n,title:e.title,description:e.description,backdrop:e.backdrop,handle:!0,prefix:e.prefix,suffix:e.suffix,footer:t(d,{color:"highlight",children:"\u78BA\u8A8D"}),onClose:o,children:l("div",{className:"p-4 h-screen bg-secondary flex flex-col justify-between items-center text-heading-xs",children:[t("h3",{children:"Content start"}),t("h3",{children:"Content end"})]})})]})};var U,T,V;_.parameters={..._.parameters,docs:{...(U=_.parameters)==null?void 0:U.docs,source:{originalSource:`({
  backdrop
}: BottomSheetProps) => {
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
}`,...(V=(T=_.parameters)==null?void 0:T.docs)==null?void 0:V.source}}};var $,L,q;b.parameters={...b.parameters,docs:{...($=b.parameters)==null?void 0:$.docs,source:{originalSource:`(args: BottomSheetProps) => {
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
    title: args.title,
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
}`,...(q=(L=b.parameters)==null?void 0:L.docs)==null?void 0:q.source}}};var O,I,Y;C.parameters={...C.parameters,docs:{...(O=C.parameters)==null?void 0:O.docs,source:{originalSource:`(args: BottomSheetProps) => {
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
    title: args.title,
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
}`,...(Y=(I=C.parameters)==null?void 0:I.docs)==null?void 0:Y.source}}};var M,z,K;y.parameters={...y.parameters,docs:{...(M=y.parameters)==null?void 0:M.docs,source:{originalSource:`(args: BottomSheetProps) => {
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
    title: args.title,
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
}`,...(K=(z=y.parameters)==null?void 0:z.docs)==null?void 0:K.source}}};var W,X,G;g.parameters={...g.parameters,docs:{...(W=g.parameters)==null?void 0:W.docs,source:{originalSource:`(args: BottomSheetProps) => {
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
    title: args.title,
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
}`,...(G=(X=g.parameters)==null?void 0:X.docs)==null?void 0:G.source}}};var J,Q,Z;A.parameters={...A.parameters,docs:{...(J=A.parameters)==null?void 0:J.docs,source:{originalSource:`(args: BottomSheetProps) => {
  const [{
    show
  }, updateArgs] = useArgs();
  const handleClose = () => {
    updateArgs({
      show: false
    });
  };
  return /*#__PURE__*/_jsxs("div", {
    children: [/*#__PURE__*/_jsx("div", {
      className: "w-full",
      style: {
        height: '1000px'
      },
      children: "Content"
    }), /*#__PURE__*/_jsx(HCBottomSheet, {
      show: show,
      title: args.title,
      description: args.description,
      backdrop: args.backdrop,
      handle: true,
      prefix: args.prefix,
      suffix: args.suffix,
      footer: /*#__PURE__*/_jsx(HCButton, {
        color: "highlight",
        children: "\\u78BA\\u8A8D"
      }),
      onClose: handleClose,
      children: /*#__PURE__*/_jsxs("div", {
        className: "p-4 h-screen bg-secondary flex flex-col justify-between items-center text-heading-xs",
        children: [/*#__PURE__*/_jsx("h3", {
          children: "Content start"
        }), /*#__PURE__*/_jsx("h3", {
          children: "Content end"
        })]
      })
    })]
  });
}`,...(Z=(Q=A.parameters)==null?void 0:Q.docs)==null?void 0:Z.source}}};const He=["Basic","Header","HeaderPrefixAndSuffix","Keyboard","Handle","Footer"];export{_ as Basic,A as Footer,g as Handle,b as Header,C as HeaderPrefixAndSuffix,y as Keyboard,He as __namedExportsOrder,Pe as default};
//# sourceMappingURL=BottomSheet.stories.faba42fa.js.map
