import{r as s}from"./index.2e2f892a.js";import{A as ie}from"./arrow-left.73fabcbf.js";import{j as t,a}from"./jsx-runtime.db436af5.js";import{H as i}from"./Button.05c33eea.js";import{H as m}from"./Input.872d4fa4.js";import"./_commonjsHelpers.712cc82f.js";import"./index.0579b088.js";import"./index.881b564b.js";import"./nonIterableRest.a72c2085.js";import"./defineProperty.bb51ac4e.js";import"./slicedToArray.a85404c5.js";import"./extends.f25a7a22.js";import"./format-input.6ffc2f8a.js";import"./toArray.a9612acc.js";import"./assertThisInitialized.220b4aa7.js";import"./button.6b704470.js";import"./statistic.bfc8a639.js";import"./index.32e22ee9.js";import"./index.cb53d6bd.js";import"./ResizeObserver.es.bd9ff68d.js";const ue=e=>t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:`w-5 h-5 ${e.className}`,children:t("path",{d:"M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"})});try{xmark.displayName="xmark",xmark.__docgenInfo={description:"",displayName:"xmark",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const Z=e=>{var j;const o=s.exports.useRef(null),r=s.exports.useRef(null),[n,f]=s.exports.useState("h-0"),[B,E]=s.exports.useState(!1),[N,k]=s.exports.useState(0),[x,D]=s.exports.useState(!1),[ee,_]=s.exports.useState("100%"),[te,v]=s.exports.useState(""),[se,F]=s.exports.useState(""),[re,S]=s.exports.useState("invisible"),[oe,P]=s.exports.useState("opacity-0"),[ne,H]=s.exports.useState("100%"),ae=s.exports.useCallback(l=>{E(!0),k(l.changedTouches[0].pageY)},[]),le=s.exports.useCallback(l=>{E(!0),k(l.pageY)},[]);return s.exports.useEffect(()=>{const l=h=>{E(!1),h<N?D(!0):x&&D(!1)},c=h=>{l(h.changedTouches[0].pageY)},p=h=>{l(h.pageY)};return e.handle&&B&&(document.addEventListener("touchend",c),document.addEventListener("mouseup",p)),()=>{document.removeEventListener("touchend",c),document.removeEventListener("mouseup",p)}},[e.handle,B,N,x]),s.exports.useEffect(()=>{var c,p;let l;return e.show?(f("h-full"),P("opacity-100"),v("bottom-0"),H(`calc(100% - ${(c=r.current)==null?void 0:c.clientHeight}px)`),x?_("24px"):e.keyboard||e.handle?_("200px"):_(`calc(100% - ${(p=o.current)==null?void 0:p.clientHeight}px)`),l=setTimeout(()=>{F("drop-shadow-reversed"),S("visible")},0)):(_("100%"),f("h-0"),P("opacity-0"),H("100%"),l=setTimeout(()=>{v(""),F(""),S("invisible")},800)),()=>{l&&clearTimeout(l)}},[e.show,e.handle,e.keyboard,x]),a("div",{className:`${e.className} ${n}
      w-full absolute left-0 top-0`,children:[e.backdrop&&t("div",{className:`
          ${re} ${oe}
          w-screen h-screen bg-backdrop fixed left-0 top-0 transition-opacity duration-800 z-20`}),a("div",{ref:o,className:`
          ${se} ${te}
          w-full box-border rounded-t-3xl
          first-letter:w-full bg-primary
          fixed left-0 transition-all duration-500
          flex flex-col z-30`,style:{top:ee},children:[e.title&&a("div",{onTouchStart:ae,onMouseDown:le,"aria-hidden":"true",children:[e.handle&&t("div",{className:"flex justify-center py-2",children:t("div",{className:"w-10 h-1 rounded bg-pressed"})}),a("div",{className:`
                ${!e.handle&&"pt-3"} pb-3
                flex justify-between border-b border-secondary`,children:[t("div",{className:`py-3.5 px-4 ${e.onPrefix?"cursor-pointer":""}`,onClick:e.onPrefix,"aria-hidden":"true",children:t("div",{className:"w-5",children:e.prefix&&t(ie,{})})}),a("div",{className:`flex justify-center items-center flex-col
                ${!e.description&&"py-2.5"}`,children:[t("span",{className:"text-body-bold-l",children:e.title}),t("span",{className:"text-body-s text-tertiary",children:e.description})]}),t("div",{className:`py-3.5 px-4 ${e.onClose?"cursor-pointer":""}`,onClick:e.onClose,"aria-hidden":"true",children:t("div",{className:"w-5",children:e.suffix&&t(ue,{})})})]})]}),t("div",{className:"grow overflow-y-scroll",style:{paddingBottom:e.footer?`${(j=r.current)==null?void 0:j.clientHeight}px`:0},children:e.children}),e.footer&&t("div",{ref:r,className:"w-full fixed transition-all duration-500 border-t border-secondary bg-primary z-10 p-4",style:{top:ne},children:e.footer})]})]})};Z.defaultProps={show:!1,className:"",title:"",description:"",backdrop:!0,handle:!1,keyboard:!1,prefix:!1,suffix:!0};const u=Z;try{BottomSheet.displayName="BottomSheet",BottomSheet.__docgenInfo={description:"",displayName:"BottomSheet",props:{className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},show:{defaultValue:{value:"false"},description:"",name:"show",required:!1,type:{name:"boolean"}},title:{defaultValue:{value:""},description:"",name:"title",required:!1,type:{name:"string"}},description:{defaultValue:{value:""},description:"",name:"description",required:!1,type:{name:"string"}},backdrop:{defaultValue:{value:"true"},description:"",name:"backdrop",required:!1,type:{name:"boolean"}},handle:{defaultValue:{value:"false"},description:"",name:"handle",required:!1,type:{name:"boolean"}},keyboard:{defaultValue:{value:"false"},description:"",name:"keyboard",required:!1,type:{name:"boolean"}},prefix:{defaultValue:{value:"false"},description:"",name:"prefix",required:!1,type:{name:"boolean"}},suffix:{defaultValue:{value:"true"},description:"",name:"suffix",required:!1,type:{name:"boolean"}},footer:{defaultValue:null,description:"",name:"footer",required:!1,type:{name:"ReactNode"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void)"}},onPrefix:{defaultValue:null,description:"",name:"onPrefix",required:!1,type:{name:"(() => void)"}}}}}catch{}const{useArgs:d,useEffect:de}=__STORYBOOK_MODULE_STORE__,Se={title:"Components/BottomSheet",component:u,argTypes:{children:{control:!1,description:"Actions in the bottom sheet.",table:{type:{summary:"ReactNode"}}},show:{control:"boolean",description:"Whether the bottom sheet is visible or not.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},title:{control:"text",description:"The header title for the bottom sheet.",table:{type:{summary:"string"}}},description:{control:"text",description:"The header description for the bottom sheet.",table:{type:{summary:"string"}}},backdrop:{control:"boolean",description:"Whether the bottom sheet has backdrop or not.",table:{type:{summary:"boolean"},defaultValue:{summary:!0}}},handle:{control:!1,description:"Add an icon on the header that can drag to the top.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},keyboard:{control:!1,description:"Set default height for keyboard showing",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},prefix:{control:"boolean",description:"The prefix previous icon for the header.",table:{type:{summary:"boolean"}}},suffix:{control:"boolean",description:"The suffix close icon for the header.",table:{type:{summary:"boolean"}}},onClose:{control:!1,description:"Specify a function that will close the bottom sheet.",table:{type:{summary:"Function"}}},onPrefix:{control:!1,description:"Specify a function that will be called when a user clicks prefix icon.",table:{type:{summary:"Function"}}}},args:{show:!1,title:"\u6A19\u984C",description:"\u89E3\u8AAA",backdrop:!0,handle:!1,keyboard:!1,prefix:!1,suffix:!0,children:a(s.exports.Fragment,{children:[t(m,{placeholder:"\u8F38\u5165\u4F60\u7684\u8A13\u7DF4\u83DC\u55AE\u540D\u7A31",className:"mb-3"}),t(i,{color:"primary",disabled:!0,children:"\u5EFA\u7ACB\u83DC\u55AE"})]})}},b=({backdrop:e})=>{const[{show:o},r]=d();return t(u,{show:o,onClose:()=>{r({show:!1})},backdrop:e,children:a("div",{className:"px-4 pt-9",children:[t("h3",{className:"text-heading-xs text-secondary mb-2",children:"\u6B61\u8FCE\u4F86\u5230 HANCHAU\uFF01"}),t("h4",{className:"text-body-xs text-tertiary mb-3",children:"\u8DDF\u8457\u8001\u5E2B\u52D5\u6B21\u52D5\u6B21\u52D5"}),t(i,{color:"primary",className:"mb-4",children:"\u99AC\u4E0A\u958B\u59CB"})]})})},y=e=>{const[{show:o},r]=d(),n=()=>{r({show:!1})};return t(u,{show:o,title:e.title,description:e.description,backdrop:e.backdrop,prefix:!1,suffix:!1,onClose:n,children:a("div",{className:"p-4",children:[t(m,{placeholder:"\u8F38\u5165\u4F60\u7684\u8A13\u7DF4\u83DC\u55AE\u540D\u7A31",className:"mb-3"}),t(i,{color:"primary",disabled:!0,children:"\u5EFA\u7ACB\u83DC\u55AE"})]})})},C=e=>{const[{show:o,prefix:r},n]=d();de(()=>{n({prefix:!0})},[n]);const f=()=>{n({show:!1})};return t(u,{show:o,title:e.title,description:e.description,prefix:r,suffix:e.suffix,backdrop:e.backdrop,onClose:f,children:a("div",{className:"p-4",children:[t(m,{placeholder:"\u8F38\u5165\u4F60\u7684\u8A13\u7DF4\u83DC\u55AE\u540D\u7A31",className:"mb-3"}),t(i,{color:"primary",disabled:!0,children:"\u5EFA\u7ACB\u83DC\u55AE"})]})})},A=e=>{const[{show:o},r]=d(),n=()=>{r({show:!1})};return t(u,{show:o,title:e.title,description:e.description,backdrop:e.backdrop,keyboard:!0,prefix:e.prefix,suffix:e.suffix,onClose:n,children:a("div",{className:"px-4 pt-4",children:[t(m,{placeholder:"\u8F38\u5165\u4F60\u7684\u8A13\u7DF4\u83DC\u55AE\u540D\u7A31",className:"mb-3"}),t(i,{color:"primary",disabled:!0,children:"\u5EFA\u7ACB\u83DC\u55AE"})]})})},g=e=>{const[{show:o},r]=d(),n=()=>{r({show:!1})};return t(u,{show:o,title:e.title,description:e.description,backdrop:e.backdrop,handle:!0,prefix:e.prefix,suffix:e.suffix,onClose:n,children:a("div",{className:"px-4 pt-4",children:[t(m,{placeholder:"\u8F38\u5165\u4F60\u7684\u8A13\u7DF4\u83DC\u55AE\u540D\u7A31",className:"mb-3"}),t(i,{color:"primary",disabled:!0,children:"\u5EFA\u7ACB\u83DC\u55AE"})]})})},w=e=>{const[{show:o},r]=d(),n=()=>{r({show:!1})};return t(u,{show:o,title:e.title,description:e.description,backdrop:e.backdrop,handle:!0,prefix:e.prefix,suffix:e.suffix,footer:t(i,{color:"primary",children:"\u78BA\u8A8D"}),onClose:n,children:a("div",{className:"p-4 h-screen bg-secondary flex flex-col justify-between items-center text-heading-xs",children:[t("h3",{children:"Content start"}),t("h3",{children:"Content end"})]})})};var R,U,T;b.parameters={...b.parameters,docs:{...(R=b.parameters)==null?void 0:R.docs,source:{originalSource:`({
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
        color: "primary",
        className: "mb-4",
        children: "\\u99AC\\u4E0A\\u958B\\u59CB"
      })]
    })
  });
}`,...(T=(U=b.parameters)==null?void 0:U.docs)==null?void 0:T.source}}};var V,$,q;y.parameters={...y.parameters,docs:{...(V=y.parameters)==null?void 0:V.docs,source:{originalSource:`(args: BottomSheetProps) => {
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
}`,...(q=($=y.parameters)==null?void 0:$.docs)==null?void 0:q.source}}};var L,O,I;C.parameters={...C.parameters,docs:{...(L=C.parameters)==null?void 0:L.docs,source:{originalSource:`(args: BottomSheetProps) => {
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
}`,...(I=(O=C.parameters)==null?void 0:O.docs)==null?void 0:I.source}}};var Y,M,z;A.parameters={...A.parameters,docs:{...(Y=A.parameters)==null?void 0:Y.docs,source:{originalSource:`(args: BottomSheetProps) => {
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
}`,...(z=(M=A.parameters)==null?void 0:M.docs)==null?void 0:z.source}}};var K,W,X;g.parameters={...g.parameters,docs:{...(K=g.parameters)==null?void 0:K.docs,source:{originalSource:`(args: BottomSheetProps) => {
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
}`,...(X=(W=g.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var G,J,Q;w.parameters={...w.parameters,docs:{...(G=w.parameters)==null?void 0:G.docs,source:{originalSource:`(args: BottomSheetProps) => {
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
    footer: /*#__PURE__*/_jsx(HCButton, {
      color: "primary",
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
  });
}`,...(Q=(J=w.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};const Pe=["Basic","Header","HeaderPrefixAndSuffix","Keyboard","Handle","Footer"];export{b as Basic,w as Footer,g as Handle,y as Header,C as HeaderPrefixAndSuffix,A as Keyboard,Pe as __namedExportsOrder,Se as default};
//# sourceMappingURL=BottomSheet.stories.72375fea.js.map
