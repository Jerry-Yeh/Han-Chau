import{r as e}from"./index.2e2f892a.js";import{j as t,a as p}from"./jsx-runtime.db436af5.js";import{H as B}from"./Button.fbd0d096.js";import"./_commonjsHelpers.712cc82f.js";import"./index.0579b088.js";function P({title:r,titleId:n,...a},s){return e.exports.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:s,"aria-labelledby":n},a),r?e.exports.createElement("title",{id:n},r):null,e.exports.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",clipRule:"evenodd"}))}const N=e.exports.forwardRef(P),O=N;function U({title:r,titleId:n,...a},s){return e.exports.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:s,"aria-labelledby":n},a),r?e.exports.createElement("title",{id:n},r):null,e.exports.createElement("path",{fillRule:"evenodd",d:"M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"}))}const D=e.exports.forwardRef(U),$=D;function M({title:r,titleId:n,...a},s){return e.exports.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:s,"aria-labelledby":n},a),r?e.exports.createElement("title",{id:n},r):null,e.exports.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z",clipRule:"evenodd"}))}const z=e.exports.forwardRef(M),A=z,g=({className:r,type:n="success",content:a},s)=>{const[c,m]=e.exports.useState(),[b,_]=e.exports.useState(""),[F,f]=e.exports.useState(""),[x,j]=e.exports.useState(0),H=e.exports.useCallback(o=>{o&&o.getBoundingClientRect()&&(console.log(o.getBoundingClientRect()),j(o.getBoundingClientRect().height))},[]);return e.exports.useLayoutEffect(()=>{switch(n){case"success":m(t(O,{})),_("bg-success icon-onColor text-onColor");break;case"error":m(t(A,{})),_("bg-destructive icon-onColor text-onColor");break;case"warning":m(t($,{})),_("bg-warning icon-primary text-secondary");break}},[n]),e.exports.useImperativeHandle(s,()=>({open(){f("0"),setTimeout(()=>{f(`-${x}px`)},2e3)}})),e.exports.useLayoutEffect(()=>{f(`-${x}px`)},[x]),t("div",{ref:H,className:`${r} w-screen fixed flex justify-center p-4 transition-bottom duration-200`,style:{bottom:F},children:p("div",{className:`${b} rounded-lg flex shadow-lg px-4`,children:[t("div",{className:"shrink-0 w-6 h-6 py-3 mr-4",children:c}),t("p",{className:"text-body-s py-3.5",children:a})]})})},d=e.exports.forwardRef(g);try{g.displayName="HCSnackBar",g.__docgenInfo={description:"",displayName:"HCSnackBar",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},type:{defaultValue:{value:"success"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"warning"'},{value:'"error"'}]}},content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"ReactNode"}}}}}catch{}const V={title:"Components/SnackBar",component:d,argTypes:{type:{control:"select",options:["success","error","warning"],description:"Type of the snack bar.",table:{type:{summary:"success | error | warning"}}},content:{control:"text",description:"Content of the snack bar.",table:{type:{summary:"string"}}}}},l=({type:r="success",content:n="\u6210\u529F\u52A0\u5165\u570B\u969B\u7DF4\u80F8\u65E5"})=>{const a=e.exports.useRef(null),s=()=>{var c;(c=a.current)==null||c.open()};return p(e.exports.Fragment,{children:[t("div",{className:"p-4",children:t(B,{color:"primary",onClick:s,children:"Success"})}),t(d,{ref:a,type:r,content:n})]})},u=({type:r="error",content:n="\u7121\u6CD5\u5C07\u52D5\u4F5C\u52A0\u5165\u81F3\u570B\u969B\u7DF4\u80F8\u65E5"})=>{const a=e.exports.useRef(null),s=()=>{var c;(c=a.current)==null||c.open()};return p(e.exports.Fragment,{children:[t("div",{className:"p-4",children:t(B,{color:"primary",onClick:s,children:"Error"})}),t(d,{ref:a,type:r,content:n})]})},i=({type:r="warning",content:n="\u5373\u5C07\u9054\u5230\u514D\u8CBB\u7248\u4E0A\u9650"})=>{const a=e.exports.useRef(null),s=()=>{var c;(c=a.current)==null||c.open()};return p(e.exports.Fragment,{children:[t("div",{className:"p-4",children:t(B,{color:"primary",onClick:s,children:"Warning"})}),t(d,{ref:a,type:r,content:n})]})};var h,k,C;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`({
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
}`,...(C=(k=l.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};var R,y,E;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`({
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
}`,...(E=(y=u.parameters)==null?void 0:y.docs)==null?void 0:E.source}}};var S,v,w;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`({
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
}`,...(w=(v=i.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};const X=["Success","Error","Warning"];export{u as Error,l as Success,i as Warning,X as __namedExportsOrder,V as default};
//# sourceMappingURL=SnackBar.stories.cccc1e8a.js.map
