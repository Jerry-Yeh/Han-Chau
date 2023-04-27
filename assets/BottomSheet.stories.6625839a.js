import{r}from"./index.2e2f892a.js";import{A as G}from"./arrow-left.73fabcbf.js";import{j as s,a as l}from"./jsx-runtime.db436af5.js";import{H as u}from"./Button.fbd0d096.js";import{H as d}from"./Input.15aa4551.js";import"./_commonjsHelpers.712cc82f.js";import"./index.0579b088.js";import"./index.6fd430a2.js";import"./nonIterableRest.3d34b57d.js";import"./slicedToArray.46bf6900.js";import"./extends.f25a7a22.js";import"./toArray.f27e8e4d.js";import"./assertThisInitialized.220b4aa7.js";import"./button.a40eba78.js";import"./statistic.eb58587a.js";import"./index.32e22ee9.js";import"./index.115149d2.js";import"./ResizeObserver.es.bd9ff68d.js";const J=e=>s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:`w-5 h-5 ${e.className}`,children:s("path",{d:"M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"})});try{xmark.displayName="xmark",xmark.__docgenInfo={description:"",displayName:"xmark",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const O=e=>{var k;const t=r.exports.useRef(null),[o,n]=r.exports.useState(0),[h,g]=r.exports.useState(!1),[w,M]=r.exports.useState(0),[p,E]=r.exports.useState(!1),[Y,f]=r.exports.useState("top-full"),[K,y]=r.exports.useState(""),W=a=>{g(!0),M(a.pageY)},A=r.exports.useCallback(a=>{g(!1),a.pageY<w?E(!0):p&&E(!1)},[w,p,e.onClose]);r.exports.useEffect(()=>{var a;t.current&&n((a=t.current)==null?void 0:a.clientHeight)},[(k=t.current)==null?void 0:k.children]),r.exports.useEffect(()=>(e.handle&&h&&document.addEventListener("mouseup",A),()=>{document.removeEventListener("mouseup",A)}),[e.handle,h,A]),r.exports.useEffect(()=>{let a;return e.show?p?(f("top-6"),y("bottom-0")):e.keyboard||e.handle?(f("top-50"),y("bottom-0")):f(""):(f("top-full"),a=setTimeout(()=>{y("")},800)),()=>{a&&clearTimeout(a)}},[e.show,e.handle,e.keyboard,p,o]);const[z,D]=r.exports.useState(""),[X,F]=r.exports.useState("invisible");return r.exports.useEffect(()=>{let a;return e.show?a=setTimeout(()=>{D("drop-shadow-reversed"),F("visible")},0):a=setTimeout(()=>{D(""),F("invisible")},800),()=>{clearTimeout(a)}},[e.show]),l("div",{className:`${e.className}
      ${e.show?"h-full":"h-0"} w-full absolute left-0 top-0`,children:[e.backdrop&&s("div",{className:`
            ${X}
            ${e.show?"opacity-100":"opacity-0"}
            w-screen h-screen bg-backdrop absolute left-0 top-0 transition-opacity duration-800`}),l("div",{ref:t,className:`
          ${z} ${Y} ${K}
          w-full box-border rounded-t-3xl
          first-letter:w-full bg-primary
          fixed left-0 transition-top duration-800`,style:{top:e.show?`calc(100% - ${o}px)`:"100%"},children:[e.header&&l("div",{onMouseDown:W,"aria-hidden":"true",children:[e.handle&&s("div",{className:"flex justify-center py-2",children:s("div",{className:"w-10 h-1 rounded bg-pressed"})}),l("div",{className:`
                ${!e.handle&&"pt-3"} pb-3
                flex justify-between border-b border-secondary`,children:[s("div",{className:`py-3.5 px-4 ${e.onPrefix?"cursor-pointer":""}`,onClick:e.onPrefix,"aria-hidden":"true",children:s("div",{className:"w-5",children:e.prefix&&s(G,{})})}),l("div",{className:`flex justify-center items-center flex-col
                ${!e.description&&"py-2.5"}`,children:[s("span",{className:"text-body-bold-l",children:e.header}),s("span",{className:"text-body-s text-tertiary",children:e.description})]}),s("div",{className:`py-3.5 px-4 ${e.onClose?"cursor-pointer":""}`,onClick:e.onClose,"aria-hidden":"true",children:s("div",{className:"w-5",children:e.suffix&&s(J,{})})})]})]}),s("div",{className:`${e.fullContent?"":`px-4 ${e.header?"pt-4":"pt-9"}`}`,children:e.children})]})]})};O.defaultProps={show:!1,className:"",header:"",description:"",backdrop:!0,handle:!1,keyboard:!1,suffix:!0,prefix:!1,fullContent:!1};const i=O;try{BottomSheet.displayName="BottomSheet",BottomSheet.__docgenInfo={description:"",displayName:"BottomSheet",props:{className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},show:{defaultValue:{value:"false"},description:"",name:"show",required:!1,type:{name:"boolean"}},header:{defaultValue:{value:""},description:"",name:"header",required:!1,type:{name:"string"}},description:{defaultValue:{value:""},description:"",name:"description",required:!1,type:{name:"string"}},backdrop:{defaultValue:{value:"true"},description:"",name:"backdrop",required:!1,type:{name:"boolean"}},handle:{defaultValue:{value:"false"},description:"",name:"handle",required:!1,type:{name:"boolean"}},keyboard:{defaultValue:{value:"false"},description:"",name:"keyboard",required:!1,type:{name:"boolean"}},prefix:{defaultValue:{value:"false"},description:"",name:"prefix",required:!1,type:{name:"boolean"}},suffix:{defaultValue:{value:"true"},description:"",name:"suffix",required:!1,type:{name:"boolean"}},fullContent:{defaultValue:{value:"false"},description:"",name:"fullContent",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void)"}},onPrefix:{defaultValue:null,description:"",name:"onPrefix",required:!1,type:{name:"(() => void)"}}}}}catch{}const{useArgs:c,useEffect:Q}=__STORYBOOK_MODULE_STORE__,xe={title:"Components/BottomSheet",component:i,argTypes:{children:{control:!1,description:"Actions in the bottom sheet.",table:{type:{summary:"ReactNode"}}},show:{control:"boolean",description:"Whether the bottom sheet is visible or not.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},header:{control:"text",description:"The header title for the bottom sheet.",table:{type:{summary:"string"}}},description:{control:"text",description:"The header description for the bottom sheet.",table:{type:{summary:"string"}}},backdrop:{control:"boolean",description:"Whether the bottom sheet has backdrop or not.",table:{type:{summary:"boolean"},defaultValue:{summary:!0}}},handle:{control:!1,description:"Add an icon on the header that can drag to the top.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},keyboard:{control:!1,description:"Set default height for keyboard showing",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},prefix:{control:"boolean",description:"The prefix previous icon for the header.",table:{type:{summary:"boolean"}}},suffix:{control:"boolean",description:"The suffix close icon for the header.",table:{type:{summary:"boolean"}}},fullContent:{control:"boolean",description:"Whether the content is full or not.",table:{type:{summary:"boolean"}}},onClose:{control:!1,description:"Specify a function that will close the bottom sheet.",table:{type:{summary:"Function"}}},onPrefix:{control:!1,description:"Specify a function that will be called when a user clicks prefix icon.",table:{type:{summary:"Function"}}}},args:{show:!1,header:"\u6A19\u984C",description:"\u89E3\u8AAA",backdrop:!0,handle:!1,keyboard:!1,prefix:!1,suffix:!0,fullContent:!1,children:l(r.exports.Fragment,{children:[s(d,{placeholder:"\u8F38\u5165\u4F60\u7684\u8A13\u7DF4\u83DC\u55AE\u540D\u7A31",className:"mb-3"}),s(u,{color:"primary",disabled:!0,children:"\u5EFA\u7ACB\u83DC\u55AE"})]})}},m=({backdrop:e})=>{const[{show:t},o]=c();return l(i,{show:t,onClose:()=>{o({show:!1})},backdrop:e,header:"",children:[s("h3",{className:"text-heading-xs text-secondary mb-2",children:"\u6B61\u8FCE\u4F86\u5230 HANCHAU\uFF01"}),s("h4",{className:"text-body-xs text-tertiary mb-3",children:"\u8DDF\u8457\u8001\u5E2B\u52D5\u6B21\u52D5\u6B21\u52D5"}),s(u,{color:"highlight",className:"mb-4",children:"\u99AC\u4E0A\u958B\u59CB"})]})},b=e=>{const[{show:t},o]=c(),n=()=>{o({show:!1})};return l(i,{show:t,header:e.header,description:e.description,backdrop:e.backdrop,prefix:!1,suffix:!1,onClose:n,children:[s(d,{placeholder:"\u8F38\u5165\u4F60\u7684\u8A13\u7DF4\u83DC\u55AE\u540D\u7A31",className:"mb-3"}),s(u,{color:"primary",disabled:!0,children:"\u5EFA\u7ACB\u83DC\u55AE"})]})},x=e=>{const[{show:t,prefix:o},n]=c();Q(()=>{n({prefix:!0})},[n]);const h=()=>{n({show:!1})};return l(i,{show:t,header:e.header,description:e.description,prefix:o,suffix:e.suffix,backdrop:e.backdrop,onClose:h,children:[s(d,{placeholder:"\u8F38\u5165\u4F60\u7684\u8A13\u7DF4\u83DC\u55AE\u540D\u7A31",className:"mb-3"}),s(u,{color:"primary",disabled:!0,children:"\u5EFA\u7ACB\u83DC\u55AE"})]})},C=e=>{const[{show:t},o]=c(),n=()=>{o({show:!1})};return l(i,{show:t,header:e.header,description:e.description,backdrop:e.backdrop,keyboard:!0,prefix:e.prefix,suffix:e.suffix,onClose:n,children:[s(d,{placeholder:"\u8F38\u5165\u4F60\u7684\u8A13\u7DF4\u83DC\u55AE\u540D\u7A31",className:"mb-3"}),s(u,{color:"primary",disabled:!0,children:"\u5EFA\u7ACB\u83DC\u55AE"})]})},_=e=>{const[{show:t},o]=c(),n=()=>{o({show:!1})};return l(i,{show:t,header:e.header,description:e.description,backdrop:e.backdrop,handle:!0,prefix:e.prefix,suffix:e.suffix,onClose:n,children:[s(d,{placeholder:"\u8F38\u5165\u4F60\u7684\u8A13\u7DF4\u83DC\u55AE\u540D\u7A31",className:"mb-3"}),s(u,{color:"primary",disabled:!0,children:"\u5EFA\u7ACB\u83DC\u55AE"})]})};var B,N,v;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`({
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
    header: "",
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
}`,...(v=(N=m.parameters)==null?void 0:N.docs)==null?void 0:v.source}}};var S,H,P;b.parameters={...b.parameters,docs:{...(S=b.parameters)==null?void 0:S.docs,source:{originalSource:`(args: Props) => {
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
    prefix: false,
    suffix: false,
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
}`,...(P=(H=b.parameters)==null?void 0:H.docs)==null?void 0:P.source}}};var j,R,U;x.parameters={...x.parameters,docs:{...(j=x.parameters)==null?void 0:j.docs,source:{originalSource:`(args: Props) => {
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
  return /*#__PURE__*/_jsxs(HCBottomSheet, {
    show: show,
    header: args.header,
    description: args.description,
    prefix: prefix,
    suffix: args.suffix,
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
}`,...(U=(R=x.parameters)==null?void 0:R.docs)==null?void 0:U.source}}};var V,$,q;C.parameters={...C.parameters,docs:{...(V=C.parameters)==null?void 0:V.docs,source:{originalSource:`(args: Props) => {
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
    prefix: args.prefix,
    suffix: args.suffix,
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
}`,...(q=($=C.parameters)==null?void 0:$.docs)==null?void 0:q.source}}};var T,L,I;_.parameters={..._.parameters,docs:{...(T=_.parameters)==null?void 0:T.docs,source:{originalSource:`(args: Props) => {
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
    prefix: args.prefix,
    suffix: args.suffix,
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
}`,...(I=(L=_.parameters)==null?void 0:L.docs)==null?void 0:I.source}}};const Ce=["Basic","Header","HeaderPrefixAndSuffix","Keyboard","Handle"];export{m as Basic,_ as Handle,b as Header,x as HeaderPrefixAndSuffix,C as Keyboard,Ce as __namedExportsOrder,xe as default};
//# sourceMappingURL=BottomSheet.stories.6625839a.js.map
