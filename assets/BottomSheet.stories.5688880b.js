import{r as s}from"./index.2e2f892a.js";import{X as L,H as A}from"./Input.3ee36192.js";import{a as n,j as t}from"./jsx-runtime.db436af5.js";import{H as u}from"./Button.580b16c7.js";import"./_commonjsHelpers.712cc82f.js";import"./index.0579b088.js";import"./index.f32aad8f.js";import"./nonIterableRest.3d34b57d.js";import"./slicedToArray.46bf6900.js";import"./extends.f25a7a22.js";import"./toArray.f27e8e4d.js";import"./assertThisInitialized.220b4aa7.js";import"./index.c5b7136a.js";import"./statistic.472a1099.js";import"./index.32e22ee9.js";import"./ResizeObserver.es.bd9ff68d.js";const V=e=>{var D;const a=s.exports.useRef(null),[r,$]=s.exports.useState(0),[_,y]=s.exports.useState(!1),[g,q]=s.exports.useState(0),[d,x]=s.exports.useState(!1),[O,c]=s.exports.useState("top-full"),[I,b]=s.exports.useState(""),Y=o=>{y(!0),q(o.pageY)},C=s.exports.useCallback(o=>{y(!1),o.pageY<g?x(!0):d?x(!1):e.onClose&&e.onClose()},[g,d,e.onClose]);s.exports.useEffect(()=>{var o;a.current&&$((o=a.current)==null?void 0:o.clientHeight)},[(D=a.current)==null?void 0:D.children]),s.exports.useEffect(()=>(e.handle&&_&&document.addEventListener("mouseup",C),()=>{document.removeEventListener("mouseup",C)}),[e.handle,_,C]),s.exports.useEffect(()=>{let o;return e.show?d?(c("top-6"),b("bottom-0")):e.keyboard||e.handle?(c("top-50"),b("bottom-0")):c(""):(c("top-full"),o=setTimeout(()=>{b("")},800)),()=>{o&&clearTimeout(o)}},[e.show,e.handle,e.keyboard,d,r]);const[M,E]=s.exports.useState(""),[K,w]=s.exports.useState("invisible");return s.exports.useEffect(()=>{let o;return e.show?o=setTimeout(()=>{E("drop-shadow-reversed"),w("visible")},0):o=setTimeout(()=>{E(""),w("invisible")},800),()=>{clearTimeout(o)}},[e.show]),n("div",{className:`${e.className} w-full h-full`,children:[e.backdrop&&t("div",{className:`
            ${K}
            ${e.show?"opacity-100":"opacity-0"}
            w-full h-full bg-backdrop absolute left-0 top-0 transition-opacity duration-800`}),n("div",{ref:a,className:`
          ${M} ${O} ${I}
          w-full
          pb-6 box-border rounded-t-3xl
          first-letter:w-full bg-primary
          fixed left-0 transition-top duration-800`,style:{top:e.show?`calc(100% - ${r}px)`:"100%"},children:[e.header&&n("div",{onMouseDown:Y,"aria-hidden":"true",children:[e.handle&&t("div",{className:"flex justify-center py-2",children:t("div",{className:"w-10 h-1 rounded bg-pressed"})}),n("div",{className:`
                ${!e.handle&&"pt-3"}
                flex justify-between border-b border-secondary`,children:[t("div",{className:"py-3.5 px-4",children:t("div",{className:"w-5"})}),n("div",{className:"flex justify-center items-center flex-col pb-2",children:[t("span",{className:"text-body-bold-l",children:e.header}),t("span",{className:"text-body-s text-tertiary",children:e.content})]}),t("div",{className:"py-3.5 px-4 cursor-pointer",onClick:e.onClose,"aria-hidden":"true",children:t(L,{})})]})]}),t("div",{className:`px-4 ${e.header?"pt-4":"pt-9"}`,children:e.children})]})]})};V.defaultProps={show:!1,className:"",header:"",content:"",backdrop:!0,handle:!1,keyboard:!1};const l=V;try{BottomSheet.displayName="BottomSheet",BottomSheet.__docgenInfo={description:"",displayName:"BottomSheet",props:{className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},show:{defaultValue:{value:"false"},description:"",name:"show",required:!1,type:{name:"boolean"}},header:{defaultValue:{value:""},description:"",name:"header",required:!1,type:{name:"string"}},content:{defaultValue:{value:""},description:"",name:"content",required:!1,type:{name:"string"}},backdrop:{defaultValue:{value:"true"},description:"",name:"backdrop",required:!1,type:{name:"boolean"}},handle:{defaultValue:{value:"false"},description:"",name:"handle",required:!1,type:{name:"boolean"}},keyboard:{defaultValue:{value:"false"},description:"",name:"keyboard",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void)"}}}}}catch{}const{useArgs:f}=__STORYBOOK_MODULE_STORE__,de={title:"Components/BottomSheet",component:l,argTypes:{children:{control:!1,description:"Actions in the bottom sheet.",table:{type:{summary:"ReactNode"}}},show:{control:"boolean",description:"Whether the bottom sheet is visible or not.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},header:{control:"text",description:"The header title for the bottom sheet.",table:{type:{summary:"string"}}},content:{control:"text",description:"The header content for the bottom sheet.",table:{type:{summary:"string"}}},backdrop:{control:"boolean",description:"Whether the bottom sheet has backdrop or not.",table:{type:{summary:"boolean"},defaultValue:{summary:!0}}},handle:{control:"boolean",description:"Add an icon on the header that can drag to the top.",table:{type:{summary:"boolean"}}},keyboard:{control:"boolean",description:"Set default height for keyboard showing",table:{type:{summary:"boolean"}}}},args:{show:!1,header:"\u6A19\u984C",content:"\u89E3\u8AAA",backdrop:!0,handle:!1,keyboard:!1,children:n(s.exports.Fragment,{children:[t(A,{placeholder:"\u8F38\u5165\u4F60\u7684\u8A13\u7DF4\u83DC\u55AE\u540D\u7A31",className:"mb-3"}),t(u,{color:"primary",disabled:!0,children:"\u5EFA\u7ACB\u83DC\u55AE"})]})}},i=()=>{const[{show:e},a]=f();return n(l,{show:e,onClose:()=>{a({show:!1})},backdrop:!1,children:[t("h3",{className:"text-heading-xs text-secondary mb-2",children:"\u6B61\u8FCE\u4F86\u5230 HANCHAU\uFF01"}),t("h4",{className:"text-body-xs text-tertiary mb-3",children:"\u8DDF\u8457\u8001\u5E2B\u52D5\u6B21\u52D5\u6B21\u52D5"}),t(u,{color:"highlight",className:"mb-4",children:"\u99AC\u4E0A\u958B\u59CB"})]})},h=()=>{const[{show:e},a]=f();return n(l,{show:e,header:"\u6A19\u984C",content:"\u89E3\u8AAA",onClose:()=>{a({show:!1})},children:[t(A,{placeholder:"\u8F38\u5165\u4F60\u7684\u8A13\u7DF4\u83DC\u55AE\u540D\u7A31",className:"mb-3"}),t(u,{color:"primary",disabled:!0,children:"\u5EFA\u7ACB\u83DC\u55AE"})]})},m=()=>{const[{show:e},a]=f();return n(l,{show:e,header:"\u6A19\u984C",content:"\u89E3\u8AAA",onClose:()=>{a({show:!1})},keyboard:!0,children:[t(A,{placeholder:"\u8F38\u5165\u4F60\u7684\u8A13\u7DF4\u83DC\u55AE\u540D\u7A31",className:"mb-3"}),t(u,{color:"primary",disabled:!0,children:"\u5EFA\u7ACB\u83DC\u55AE"})]})},p=()=>{const[{show:e},a]=f();return n(l,{show:e,header:"\u6A19\u984C",content:"\u89E3\u8AAA",onClose:()=>{a({show:!1})},handle:!0,children:[t(A,{placeholder:"\u8F38\u5165\u4F60\u7684\u8A13\u7DF4\u83DC\u55AE\u540D\u7A31",className:"mb-3"}),t(u,{color:"primary",disabled:!0,children:"\u5EFA\u7ACB\u83DC\u55AE"})]})};var B,F,N;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`() => {
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
}`,...(N=(F=i.parameters)==null?void 0:F.docs)==null?void 0:N.source}}};var v,S,H;h.parameters={...h.parameters,docs:{...(v=h.parameters)==null?void 0:v.docs,source:{originalSource:`() => {
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
    header: "\\u6A19\\u984C",
    content: "\\u89E3\\u8AAA",
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
}`,...(H=(S=h.parameters)==null?void 0:S.docs)==null?void 0:H.source}}};var k,j,R;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
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
    header: "\\u6A19\\u984C",
    content: "\\u89E3\\u8AAA",
    onClose: handleClose,
    keyboard: true,
    children: [/*#__PURE__*/_jsx(HCInput, {
      placeholder: "\\u8F38\\u5165\\u4F60\\u7684\\u8A13\\u7DF4\\u83DC\\u55AE\\u540D\\u7A31",
      className: "mb-3"
    }), /*#__PURE__*/_jsx(HCButton, {
      color: "primary",
      disabled: true,
      children: "\\u5EFA\\u7ACB\\u83DC\\u55AE"
    })]
  });
}`,...(R=(j=m.parameters)==null?void 0:j.docs)==null?void 0:R.source}}};var U,P,T;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`() => {
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
    header: "\\u6A19\\u984C",
    content: "\\u89E3\\u8AAA",
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
}`,...(T=(P=p.parameters)==null?void 0:P.docs)==null?void 0:T.source}}};const ce=["Basic","Header","Keyboard","Handle"];export{i as Basic,p as Handle,h as Header,m as Keyboard,ce as __namedExportsOrder,de as default};
//# sourceMappingURL=BottomSheet.stories.5688880b.js.map
