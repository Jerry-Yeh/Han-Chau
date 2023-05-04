import{r as e}from"./index.2e2f892a.js";import{j as a,a as l}from"./jsx-runtime.db436af5.js";import{H as B}from"./Button.47a27f7b.js";import"./_commonjsHelpers.712cc82f.js";import"./index.0579b088.js";function U({title:r,titleId:s,...n},t){return e.exports.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:t,"aria-labelledby":s},n),r?e.exports.createElement("title",{id:s},r):null,e.exports.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",clipRule:"evenodd"}))}const L=e.exports.forwardRef(U),M=L;function $({title:r,titleId:s,...n},t){return e.exports.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:t,"aria-labelledby":s},n),r?e.exports.createElement("title",{id:s},r):null,e.exports.createElement("path",{fillRule:"evenodd",d:"M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"}))}const z=e.exports.forwardRef($),I=z;function T({title:r,titleId:s,...n},t){return e.exports.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:t,"aria-labelledby":s},n),r?e.exports.createElement("title",{id:s},r):null,e.exports.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z",clipRule:"evenodd"}))}const W=e.exports.forwardRef(T),V=W,C=({className:r},s)=>{const n=e.exports.useRef(null),[t,x]=e.exports.useState(),[D,h]=e.exports.useState(""),[O,g]=e.exports.useState("-100%"),[c,P]=e.exports.useState(0),[o,N]=e.exports.useState({type:"success",content:""});return e.exports.useEffect(()=>{const{current:u}=n;if(!u)return;const p=new ResizeObserver(()=>{P(u.getBoundingClientRect().height)});return p.observe(u),()=>{p.disconnect()}},[]),e.exports.useEffect(()=>{c&&g(`-${c}px`)},[c]),e.exports.useImperativeHandle(s,()=>({open(u){N(p=>({...p,...u}))}})),e.exports.useEffect(()=>{switch(o.type){case"success":x(a(M,{})),h("bg-success icon-onColor text-onColor");break;case"error":x(a(V,{})),h("bg-destructive icon-onColor text-onColor");break;case"warning":x(a(I,{})),h("bg-warning icon-primary text-secondary");break}},[o.type]),e.exports.useEffect(()=>{o.content&&(g("0"),setTimeout(()=>{g(`-${c}px`)},2e3))},[o,c]),a("div",{ref:n,className:`${r} w-screen fixed left-0 flex justify-center p-4 transition-bottom duration-200`,style:{bottom:O},children:l("div",{className:`${D} rounded-lg flex shadow-pop-over px-4`,children:[a("div",{className:"shrink-0 w-6 h-6 py-3 mr-4",children:t}),a("p",{className:"text-body-s py-3.5",children:o.content})]})})},i=e.exports.forwardRef(C);try{C.displayName="HCSnackBar",C.__docgenInfo={description:"",displayName:"HCSnackBar",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const Q={title:"Components/SnackBar",component:i,argTypes:{type:{control:"select",options:["success","error","warning"],description:"Type of the snack bar.",table:{type:{summary:"success | error | warning"}}},content:{control:"text",description:"Content of the snack bar.",table:{type:{summary:"string"}}}}},d=()=>{const r=e.exports.useRef(null),s=()=>{var n;(n=r.current)==null||n.open({type:"success",content:"\u6210\u529F\u52A0\u5165\u570B\u969B\u7DF4\u80F8\u65E5"})};return l(e.exports.Fragment,{children:[a("div",{className:"p-4",children:a(B,{color:"primary",onClick:s,children:"Success"})}),a(i,{ref:r})]})},_=()=>{const r=e.exports.useRef(null),s=()=>{var n;(n=r.current)==null||n.open({type:"error",content:"\u7121\u6CD5\u5C07\u52D5\u4F5C\u52A0\u5165\u81F3\u570B\u969B\u7DF4\u80F8\u65E5"})};return l(e.exports.Fragment,{children:[a("div",{className:"p-4",children:a(B,{color:"primary",onClick:s,children:"Error"})}),a(i,{ref:r})]})},m=()=>{const r=e.exports.useRef(null),s=()=>{var n;(n=r.current)==null||n.open({type:"warning",content:"\u5373\u5C07\u9054\u5230\u514D\u8CBB\u7248\u4E0A\u9650"})};return l(e.exports.Fragment,{children:[a("div",{className:"p-4",children:a(B,{color:"primary",onClick:s,children:"Warning"})}),a(i,{ref:r})]})},f=()=>{const r=e.exports.useRef(null),s=()=>{var n;(n=r.current)==null||n.open({type:"success",content:"\u9019\u662F\u4E00\u500B\u8D85\u7D1A\u9577\u7684\u8A0A\u606F\u4F46\u61C9\u8A72\u4F86\u8AAA\u4E0D\u61C9\u8A72\u6709\u9019\u9EBC\u9577\u9019\u500B\u662F\u4F86\u78BA\u8A8D\u8AAA\u7576\u4ECA\u5929\u8A0A\u606F\u592A\u9577\u600E\u9EBC\u8FA6"})};return l(e.exports.Fragment,{children:[a("div",{className:"p-4",children:a(B,{color:"primary",onClick:s,children:"Long Message"})}),a(i,{ref:r})]})};var k,R,E;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
  const snackBarRef = useRef<HandleSnackBar>(null);
  const handleOpenSnackBar = () => {
    snackBarRef.current?.open({
      type: 'success',
      content: '\u6210\u529F\u52A0\u5165\u570B\u969B\u7DF4\u80F8\u65E5'
    });
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
      ref: snackBarRef
    })]
  });
}`,...(E=(R=d.parameters)==null?void 0:R.docs)==null?void 0:E.source}}};var y,A,F;_.parameters={..._.parameters,docs:{...(y=_.parameters)==null?void 0:y.docs,source:{originalSource:`() => {
  const snackBarRef = useRef<HandleSnackBar>(null);
  const handleOpenSnackBar = () => {
    snackBarRef.current?.open({
      type: 'error',
      content: '\u7121\u6CD5\u5C07\u52D5\u4F5C\u52A0\u5165\u81F3\u570B\u969B\u7DF4\u80F8\u65E5'
    });
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
      ref: snackBarRef
    })]
  });
}`,...(F=(A=_.parameters)==null?void 0:A.docs)==null?void 0:F.source}}};var S,v,w;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
  const snackBarRef = useRef<HandleSnackBar>(null);
  const handleOpenSnackBar = () => {
    snackBarRef.current?.open({
      type: 'warning',
      content: '\u5373\u5C07\u9054\u5230\u514D\u8CBB\u7248\u4E0A\u9650'
    });
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
      ref: snackBarRef
    })]
  });
}`,...(w=(v=m.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var b,j,H;f.parameters={...f.parameters,docs:{...(b=f.parameters)==null?void 0:b.docs,source:{originalSource:`() => {
  const snackBarRef = useRef<HandleSnackBar>(null);
  const handleOpenSnackBar = () => {
    snackBarRef.current?.open({
      type: 'success',
      content: '\u9019\u662F\u4E00\u500B\u8D85\u7D1A\u9577\u7684\u8A0A\u606F\u4F46\u61C9\u8A72\u4F86\u8AAA\u4E0D\u61C9\u8A72\u6709\u9019\u9EBC\u9577\u9019\u500B\u662F\u4F86\u78BA\u8A8D\u8AAA\u7576\u4ECA\u5929\u8A0A\u606F\u592A\u9577\u600E\u9EBC\u8FA6'
    });
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
      ref: snackBarRef
    })]
  });
}`,...(H=(j=f.parameters)==null?void 0:j.docs)==null?void 0:H.source}}};const Y=["Success","Error","Warning","LongMessage"];export{_ as Error,f as LongMessage,d as Success,m as Warning,Y as __namedExportsOrder,Q as default};
//# sourceMappingURL=SnackBar.stories.b4efd60d.js.map
