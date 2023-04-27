import{r as e}from"./index.2e2f892a.js";import{j as s,a as o}from"./jsx-runtime.db436af5.js";import{H as _}from"./Button.fbd0d096.js";import"./_commonjsHelpers.712cc82f.js";import"./index.0579b088.js";function O({title:r,titleId:n,...a},t){return e.exports.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:t,"aria-labelledby":n},a),r?e.exports.createElement("title",{id:n},r):null,e.exports.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",clipRule:"evenodd"}))}const U=e.exports.forwardRef(O),M=U;function L({title:r,titleId:n,...a},t){return e.exports.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:t,"aria-labelledby":n},a),r?e.exports.createElement("title",{id:n},r):null,e.exports.createElement("path",{fillRule:"evenodd",d:"M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"}))}const $=e.exports.forwardRef(L),z=$;function I({title:r,titleId:n,...a},t){return e.exports.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:t,"aria-labelledby":n},a),r?e.exports.createElement("title",{id:n},r):null,e.exports.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z",clipRule:"evenodd"}))}const T=e.exports.forwardRef(I),W=T,h=({className:r,type:n="success",content:a},t)=>{const[c,f]=e.exports.useState(),[P,B]=e.exports.useState(""),[H,g]=e.exports.useState(""),[x,D]=e.exports.useState(0),N=e.exports.useCallback(l=>{l&&l.getBoundingClientRect()&&(console.log(l.getBoundingClientRect()),D(l.getBoundingClientRect().height))},[]);return e.exports.useLayoutEffect(()=>{switch(n){case"success":f(s(M,{})),B("bg-success icon-onColor text-onColor");break;case"error":f(s(W,{})),B("bg-destructive icon-onColor text-onColor");break;case"warning":f(s(z,{})),B("bg-warning icon-primary text-secondary");break}},[n]),e.exports.useImperativeHandle(t,()=>({open(){g("0"),setTimeout(()=>{g(`-${x}px`)},2e3)}})),e.exports.useLayoutEffect(()=>{g(`-${x}px`)},[x]),s("div",{ref:N,className:`${r} w-screen fixed flex justify-center p-4 transition-bottom duration-200`,style:{bottom:H},children:o("div",{className:`${P} rounded-lg flex shadow-lg px-4`,children:[s("div",{className:"shrink-0 w-6 h-6 py-3 mr-4",children:c}),s("p",{className:"text-body-s py-3.5",children:a})]})})},u=e.exports.forwardRef(h);try{h.displayName="HCSnackBar",h.__docgenInfo={description:"",displayName:"HCSnackBar",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},type:{defaultValue:{value:"success"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"warning"'},{value:'"error"'}]}},content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"ReactNode"}}}}}catch{}const K={title:"Components/SnackBar",component:u,argTypes:{type:{control:"select",options:["success","error","warning"],description:"Type of the snack bar.",table:{type:{summary:"success | error | warning"}}},content:{control:"text",description:"Content of the snack bar.",table:{type:{summary:"string"}}}}},i=({type:r="success",content:n="\u6210\u529F\u52A0\u5165\u570B\u969B\u7DF4\u80F8\u65E5"})=>{const a=e.exports.useRef(null),t=()=>{var c;(c=a.current)==null||c.open()};return o(e.exports.Fragment,{children:[s("div",{className:"p-4",children:s(_,{color:"primary",onClick:t,children:"Success"})}),s(u,{ref:a,type:r,content:n})]})},p=({type:r="error",content:n="\u7121\u6CD5\u5C07\u52D5\u4F5C\u52A0\u5165\u81F3\u570B\u969B\u7DF4\u80F8\u65E5"})=>{const a=e.exports.useRef(null),t=()=>{var c;(c=a.current)==null||c.open()};return o(e.exports.Fragment,{children:[s("div",{className:"p-4",children:s(_,{color:"primary",onClick:t,children:"Error"})}),s(u,{ref:a,type:r,content:n})]})},d=({type:r="warning",content:n="\u5373\u5C07\u9054\u5230\u514D\u8CBB\u7248\u4E0A\u9650"})=>{const a=e.exports.useRef(null),t=()=>{var c;(c=a.current)==null||c.open()};return o(e.exports.Fragment,{children:[s("div",{className:"p-4",children:s(_,{color:"primary",onClick:t,children:"Warning"})}),s(u,{ref:a,type:r,content:n})]})},m=({type:r="success",content:n="\u9019\u662F\u4E00\u500B\u8D85\u7D1A\u9577\u7684\u8A0A\u606F\u4F46\u61C9\u8A72\u4F86\u8AAA\u4E0D\u61C9\u8A72\u6709\u9019\u9EBC\u9577\u9019\u500B\u662F\u4F86\u78BA\u8A8D\u8AAA\u7576\u4ECA\u5929\u8A0A\u606F\u592A\u9577\u600E\u9EBC\u8FA6"})=>{const a=e.exports.useRef(null),t=()=>{var c;(c=a.current)==null||c.open()};return o(e.exports.Fragment,{children:[s("div",{className:"p-4",children:s(_,{color:"primary",onClick:t,children:"Long Message"})}),s(u,{ref:a,type:r,content:n})]})};var C,k,R;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`({
  type = 'success',
  content = '\u6210\u529F\u52A0\u5165\u570B\u969B\u7DF4\u80F8\u65E5'
}: SnackBarProps) => {
  const snackBarRef = useRef<HandleMessage>(null);
  const handleOpenSnackBar = () => {
    snackBarRef.current?.open();
  };
  return /*#__PURE__*/_jsxs(Fragment, {
    children: [/*#__PURE__*/_jsx("div", {
      className: "p-4",
      children: /*#__PURE__*/_jsx(HCButton, {
        color: "primary",
        onClick: handleOpenSnackBar,
        children: "Success"
      })
    }), /*#__PURE__*/_jsx(HCSnackBar, {
      ref: snackBarRef,
      type: type,
      content: content
    })]
  });
}`,...(R=(k=i.parameters)==null?void 0:k.docs)==null?void 0:R.source}}};var E,y,A;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`({
  type = 'error',
  content = '\u7121\u6CD5\u5C07\u52D5\u4F5C\u52A0\u5165\u81F3\u570B\u969B\u7DF4\u80F8\u65E5'
}: SnackBarProps) => {
  const snackBarRef = useRef<HandleMessage>(null);
  const handleOpenSnackBar = () => {
    snackBarRef.current?.open();
  };
  return /*#__PURE__*/_jsxs(Fragment, {
    children: [/*#__PURE__*/_jsx("div", {
      className: "p-4",
      children: /*#__PURE__*/_jsx(HCButton, {
        color: "primary",
        onClick: handleOpenSnackBar,
        children: "Error"
      })
    }), /*#__PURE__*/_jsx(HCSnackBar, {
      ref: snackBarRef,
      type: type,
      content: content
    })]
  });
}`,...(A=(y=p.parameters)==null?void 0:y.docs)==null?void 0:A.source}}};var F,S,v;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`({
  type = 'warning',
  content = '\u5373\u5C07\u9054\u5230\u514D\u8CBB\u7248\u4E0A\u9650'
}: SnackBarProps) => {
  const snackBarRef = useRef<HandleMessage>(null);
  const handleOpenSnackBar = () => {
    snackBarRef.current?.open();
  };
  return /*#__PURE__*/_jsxs(Fragment, {
    children: [/*#__PURE__*/_jsx("div", {
      className: "p-4",
      children: /*#__PURE__*/_jsx(HCButton, {
        color: "primary",
        onClick: handleOpenSnackBar,
        children: "Warning"
      })
    }), /*#__PURE__*/_jsx(HCSnackBar, {
      ref: snackBarRef,
      type: type,
      content: content
    })]
  });
}`,...(v=(S=d.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};var w,b,j;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`({
  type = 'success',
  content = '\u9019\u662F\u4E00\u500B\u8D85\u7D1A\u9577\u7684\u8A0A\u606F\u4F46\u61C9\u8A72\u4F86\u8AAA\u4E0D\u61C9\u8A72\u6709\u9019\u9EBC\u9577\u9019\u500B\u662F\u4F86\u78BA\u8A8D\u8AAA\u7576\u4ECA\u5929\u8A0A\u606F\u592A\u9577\u600E\u9EBC\u8FA6'
}: SnackBarProps) => {
  const snackBarRef = useRef<HandleMessage>(null);
  const handleOpenSnackBar = () => {
    snackBarRef.current?.open();
  };
  return /*#__PURE__*/_jsxs(Fragment, {
    children: [/*#__PURE__*/_jsx("div", {
      className: "p-4",
      children: /*#__PURE__*/_jsx(HCButton, {
        color: "primary",
        onClick: handleOpenSnackBar,
        children: "Long Message"
      })
    }), /*#__PURE__*/_jsx(HCSnackBar, {
      ref: snackBarRef,
      type: type,
      content: content
    })]
  });
}`,...(j=(b=m.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};const Q=["Success","Error","Warning","LongMessage"];export{p as Error,m as LongMessage,i as Success,d as Warning,Q as __namedExportsOrder,K as default};
//# sourceMappingURL=SnackBar.stories.e85b23dc.js.map
