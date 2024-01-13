import{r as a,R as xe}from"./index.2e2f892a.js";import{L as he}from"./logo-mark.1a6f0609.js";import{a as o,j as e}from"./jsx-runtime.db436af5.js";import{A as ye}from"./AntdDecorator.e8a19c10.js";import{A as pe}from"./arrow-left.73fabcbf.js";import{H as ve}from"./Progress.0abf5f33.js";import{H as ge}from"./Tabs.6114aab6.js";import"./_commonjsHelpers.712cc82f.js";import"./index.881b564b.js";import"./nonIterableRest.a72c2085.js";import"./defineProperty.bb51ac4e.js";import"./slicedToArray.a85404c5.js";import"./extends.f25a7a22.js";import"./format-input.6ffc2f8a.js";import"./toArray.a9612acc.js";import"./assertThisInitialized.220b4aa7.js";const _e=()=>{const[n,s]=a.exports.useState(!1),[t,d]=a.exports.useState(!0);return a.exports.useEffect(()=>{let l=window.pageYOffset;const c=i=>Math.abs(i-l)>10,_=i=>i>l,u=()=>{const i=window.pageYOffset;c(i)&&(s(_(i)),l=i>0?i:0),d(i===0)},m=()=>window.requestAnimationFrame(u);return window.addEventListener("scroll",m,!0),()=>{window.removeEventListener("scroll",m)}},[]),[n,t]},A=({children:r,className:n="",size:s,title:t=e("img",{className:"w-7",src:he,alt:"LOGO"}),prefix:d,suffix:l,behavior:c,toolBar:_=!0},u)=>{const[m,i]=_e(),[S,f]=a.exports.useState(""),[fe,y]=a.exports.useState("opacity-0");return a.exports.useEffect(()=>{(()=>{switch(s){case"l":f("py-6");break;case"m":f("py-3.5");break;case"s":f("py-0");break}})()},[s]),a.exports.useEffect(()=>{switch(c){case"expanded":y(m?"opacity-100":"opacity-0");break;case"fully":y(i?"opacity-0":"opacity-100");break;default:y("opacity-100");break}},[c,t,m,i]),o(a.exports.Fragment,{children:[e("div",{ref:u,className:`${n} ${S} sticky top-0 left-0 w-full bg-primary z-20`,children:_&&o("div",{className:"h-11 flex text-secondary z-10",children:[e("div",{className:"flex-1 hover:cursor-pointer flex justify-start items-center pl-1",children:d}),e("div",{className:`${fe} transition-opacity duration-300
            flex justify-center items-center text-heading-xs text-primary`,children:t}),e("div",{className:"flex-1 flex justify-end items-center hover:cursor-pointer pr-1",children:l})]})}),r]})},g=a.exports.forwardRef(A);try{A.displayName="HCHeader",A.__docgenInfo={description:"",displayName:"HCHeader",props:{className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},prefix:{defaultValue:null,description:"",name:"prefix",required:!1,type:{name:"ReactNode"}},title:{defaultValue:{value:"<img className='w-7' src={LogoMark} alt='LOGO' />"},description:"",name:"title",required:!1,type:{name:"ReactNode"}},suffix:{defaultValue:null,description:"",name:"suffix",required:!1,type:{name:"ReactNode"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"l"'},{value:'"m"'},{value:'"s"'}]}},toolBar:{defaultValue:{value:"true"},description:"",name:"toolBar",required:!1,type:{name:"boolean"}},behavior:{defaultValue:null,description:"",name:"behavior",required:!1,type:{name:"enum",value:[{value:'"fixed"'},{value:'"expanded"'},{value:'"fully"'}]}}}}}catch{}const be=r=>e("button",{className:"p-3",onClick:r.onClick,children:r.children});try{HeaderIconButton.displayName="HeaderIconButton",HeaderIconButton.__docgenInfo={description:"",displayName:"HeaderIconButton",props:{onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((e: MouseEvent<Element, MouseEvent>) => void)"}}}}}catch{}const L=({children:r,className:n="",behavior:s,top:t=0},d)=>{const[l,c]=_e(),[_,u]=a.exports.useState("relative"),[m,i]=a.exports.useState("max-h-full"),[S,f]=a.exports.useState({top:0});return a.exports.useEffect(()=>{switch(s){case"fixed":u("sticky z-10"),f({top:`${t}px`});break;case"expanded":u("sticky z-10"),f(l?{top:`-${t}px`}:{top:t});break;case"fully":i(c?"max-h-screen":"max-h-0");break}},[s,l,c,t]),e("div",{ref:d,className:`w-full ${_} ${m} transition-all duration-300`,style:S,children:e("div",{className:`${n}`,children:r})})},He=xe.forwardRef(L);try{L.displayName="HeaderRegion",L.__docgenInfo={description:"",displayName:"HeaderRegion",props:{className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},region:{defaultValue:null,description:"",name:"region",required:!1,type:{name:"enum",value:[{value:'"toolBar"'},{value:'"tabBar"'},{value:'"flexibleSpace"'}]}},behavior:{defaultValue:null,description:"",name:"behavior",required:!0,type:{name:"enum",value:[{value:'"fixed"'},{value:'"expanded"'},{value:'"fully"'}]}},top:{defaultValue:{value:"0"},description:"",name:"top",required:!1,type:{name:"number"}}}}}catch{}const p=be,h=He,Re=r=>e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:`w-5 h-5 ${r.className}`,children:e("path",{d:"M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z"})});try{plus.displayName="plus",plus.__docgenInfo={description:"",displayName:"plus",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const me=r=>e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:`w-5 h-5 ${r.className}`,children:e("path",{d:"M10 3a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM10 8.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM11.5 15.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z"})});try{ellipsisvertical.displayName="ellipsisvertical",ellipsisvertical.__docgenInfo={description:"",displayName:"ellipsisvertical",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const v=r=>{const[n,s]=a.exports.useState(0);return a.exports.useEffect(()=>{if(!r.current)return;const t=new ResizeObserver(()=>{s(r.current.clientHeight)});return t.observe(r.current),()=>t.disconnect()},[r]),n};try{v.displayName="useHeight",v.__docgenInfo={description:"",displayName:"useHeight",props:{}}}catch{}const ze={title:"Components/Header",component:g,decorators:[ye],parameters:{docs:{source:{type:"dynamic",excludeDecorators:!0}}},argTypes:{title:{control:"text",description:"Title of the header.",table:{type:{summary:"ReactNode"}}},prefix:{control:!1,description:"Handle prefix action of header.",table:{type:{summary:"ReactNode"}}},suffix:{control:!1,description:"Handle suffix action of header.",table:{type:{summary:"ReactNode"}}},size:{control:"select",options:["l","m","s"],description:"Set the size of header.",defaultValue:{summary:"s"},table:{type:{summary:"string"}}},behavior:{control:"select",options:["fixed","expanded","fully"],description:"Scrolling behaviour of the header title.",table:{type:{summary:"fixed | expanded | fully"},defaultValue:{summary:"fixed"}}},toolBar:{control:"boolean",description:"Whether the header tool bar exists or not.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}}},args:{title:"\u6A19\u984C",size:"s",toolBar:!0}},H={},x=()=>e(p,{children:e(pe,{})}),b=()=>o("div",{className:"flex",children:[e(p,{children:e(Re,{})}),e(p,{children:e(me,{})})]}),R={args:{prefix:e(x,{})}},E={args:{prefix:e(x,{}),suffix:e("div",{className:"flex",children:e(p,{children:e(me,{})})})}},N={args:{prefix:e(x,{}),suffix:e(b,{})}},P={args:{prefix:e(p,{children:e(pe,{})}),suffix:e(p,{children:"action"})}},C={args:{prefix:e(p,{children:"action"}),suffix:e(p,{children:"action"})}},U=()=>o("main",{className:"w-full px-4 pb-4 overflow-y-scroll",children:[e("h3",{children:"Content start"}),e("div",{style:{height:"800px"}}),e("h3",{children:"Content end"})]}),j=({title:r,toolBar:n})=>{const s=a.exports.useRef(null),t=v(s);return o("div",{children:[e(g,{ref:s,title:"",prefix:e(x,{}),suffix:e(b,{}),behavior:"expanded",toolBar:n,children:e(h,{behavior:"fixed",top:t,className:"bg-primary",children:e("div",{className:"text-heading-m text-primary pl-4 pb-3",children:r})})}),e(U,{})]})},w=({title:r,toolBar:n})=>{const s=a.exports.useRef(null),t=v(s);return o("div",{children:[e(g,{ref:s,title:r,prefix:e(x,{}),suffix:e(b,{}),behavior:"expanded",toolBar:n,children:e(h,{behavior:"expanded",top:t,className:"bg-primary",children:e("div",{className:"text-heading-m text-primary pl-4 pb-3",children:r})})}),e(U,{})]})},B=({title:r,toolBar:n})=>o("div",{className:"relative flex flex-col",children:[e(g,{title:r,prefix:e(x,{}),suffix:e(b,{}),behavior:"fully",toolBar:n,children:e(h,{behavior:"fully",className:"bg-primary",children:e("div",{className:"text-heading-m text-primary pl-4 pb-3",children:r})})}),e(U,{})]}),I=({toolBar:r})=>{const n="\u958B\u59CB\u7D00\u9304\u4F60\u7684\u8A13\u7DF4\uFF01",s=[{label:"4",sublabel:"\u672A\u5B8C\u6210",value:"INCOMPLETED"},{label:"0",sublabel:"\u5B8C\u6210",value:"COMPLETED"}],[t,d]=a.exports.useState(s[0].value),l=u=>{d(u)},c=a.exports.useRef(null),_=v(c);return o("div",{className:"relative flex flex-col",children:[o(g,{ref:c,title:n,prefix:e(x,{}),suffix:e(b,{}),behavior:"fully",toolBar:r,children:[e(h,{behavior:"fully",className:"bg-primary",children:e("div",{className:"text-heading-m text-primary pl-4 pb-3",children:n})}),o(h,{behavior:"fully",className:"bg-primary px-4",children:[e("div",{className:"text-body-s text-tertiary mb-4",children:"\u570B\u969B\u7DF4\u80F8\u65E5\xB7 2023/05/17 15:28"}),e(ve,{rateClass:"w-1/4",className:"mb-2"}),o("div",{className:"text-body-xs",children:[e("span",{className:"text-placeholder",children:"\u5B8C\u6210\u5EA6 "}),e("span",{className:"text-tertiary"})]})]}),e(h,{behavior:"fixed",top:_,className:"bg-primary",children:e(ge,{items:s,activeKey:t,onChange:l})})]}),e(U,{})]})};var T,D,F;H.parameters={...H.parameters,docs:{...(T=H.parameters)==null?void 0:T.docs,source:{originalSource:"{}",...(F=(D=H.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};var V,k,z;R.parameters={...R.parameters,docs:{...(V=R.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    prefix: /*#__PURE__*/_jsx(PrefixIcon, {})
  }
}`,...(z=(k=R.parameters)==null?void 0:k.docs)==null?void 0:z.source}}};var M,q,O;E.parameters={...E.parameters,docs:{...(M=E.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    prefix: /*#__PURE__*/_jsx(PrefixIcon, {}),
    suffix: /*#__PURE__*/_jsx("div", {
      className: "flex",
      children: /*#__PURE__*/_jsx(HCHeaderIconButton, {
        children: /*#__PURE__*/_jsx(EllipsisVertical, {})
      })
    })
  }
}`,...(O=(q=E.parameters)==null?void 0:q.docs)==null?void 0:O.source}}};var $,K,W;N.parameters={...N.parameters,docs:{...($=N.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    prefix: /*#__PURE__*/_jsx(PrefixIcon, {}),
    suffix: /*#__PURE__*/_jsx(SuffixTwoIcons, {})
  }
}`,...(W=(K=N.parameters)==null?void 0:K.docs)==null?void 0:W.source}}};var G,Y,J;P.parameters={...P.parameters,docs:{...(G=P.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    prefix: /*#__PURE__*/_jsx(HCHeaderIconButton, {
      children: /*#__PURE__*/_jsx(ArrowLeft, {})
    }),
    suffix: /*#__PURE__*/_jsx(HCHeaderIconButton, {
      children: "action"
    })
  }
}`,...(J=(Y=P.parameters)==null?void 0:Y.docs)==null?void 0:J.source}}};var Q,X,Z;C.parameters={...C.parameters,docs:{...(Q=C.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    prefix: /*#__PURE__*/_jsx(HCHeaderIconButton, {
      children: "action"
    }),
    suffix: /*#__PURE__*/_jsx(HCHeaderIconButton, {
      children: "action"
    })
  }
}`,...(Z=(X=C.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var ee,re,ae;j.parameters={...j.parameters,docs:{...(ee=j.parameters)==null?void 0:ee.docs,source:{originalSource:`({
  title,
  toolBar
}: HeaderProps) => {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerHeight = useHeight(headerRef);
  return /*#__PURE__*/_jsxs("div", {
    children: [/*#__PURE__*/_jsx(HCHeader, {
      ref: headerRef,
      title: "",
      prefix: /*#__PURE__*/_jsx(PrefixIcon, {}),
      suffix: /*#__PURE__*/_jsx(SuffixTwoIcons, {}),
      behavior: "expanded",
      toolBar: toolBar,
      children: /*#__PURE__*/_jsx(HCHeaderRegion, {
        behavior: "fixed",
        top: headerHeight,
        className: "bg-primary",
        children: /*#__PURE__*/_jsx("div", {
          className: "text-heading-m text-primary pl-4 pb-3",
          children: title
        })
      })
    }), /*#__PURE__*/_jsx(LongContent, {})]
  });
}`,...(ae=(re=j.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};var se,te,ne;w.parameters={...w.parameters,docs:{...(se=w.parameters)==null?void 0:se.docs,source:{originalSource:`({
  title,
  toolBar
}: HeaderProps) => {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerHeight = useHeight(headerRef);
  return /*#__PURE__*/_jsxs("div", {
    children: [/*#__PURE__*/_jsx(HCHeader, {
      ref: headerRef,
      title: title,
      prefix: /*#__PURE__*/_jsx(PrefixIcon, {}),
      suffix: /*#__PURE__*/_jsx(SuffixTwoIcons, {}),
      behavior: "expanded",
      toolBar: toolBar,
      children: /*#__PURE__*/_jsx(HCHeaderRegion, {
        behavior: "expanded",
        top: headerHeight,
        className: "bg-primary",
        children: /*#__PURE__*/_jsx("div", {
          className: "text-heading-m text-primary pl-4 pb-3",
          children: title
        })
      })
    }), /*#__PURE__*/_jsx(LongContent, {})]
  });
}`,...(ne=(te=w.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var ie,oe,le;B.parameters={...B.parameters,docs:{...(ie=B.parameters)==null?void 0:ie.docs,source:{originalSource:`({
  title,
  toolBar
}: HeaderProps) => {
  return /*#__PURE__*/_jsxs("div", {
    className: "relative flex flex-col",
    children: [/*#__PURE__*/_jsx(HCHeader, {
      title: title,
      prefix: /*#__PURE__*/_jsx(PrefixIcon, {}),
      suffix: /*#__PURE__*/_jsx(SuffixTwoIcons, {}),
      behavior: "fully",
      toolBar: toolBar,
      children: /*#__PURE__*/_jsx(HCHeaderRegion, {
        behavior: "fully",
        className: "bg-primary",
        children: /*#__PURE__*/_jsx("div", {
          className: "text-heading-m text-primary pl-4 pb-3",
          children: title
        })
      })
    }), /*#__PURE__*/_jsx(LongContent, {})]
  });
}`,...(le=(oe=B.parameters)==null?void 0:oe.docs)==null?void 0:le.source}}};var ce,de,ue;I.parameters={...I.parameters,docs:{...(ce=I.parameters)==null?void 0:ce.docs,source:{originalSource:`({
  toolBar
}: HeaderProps) => {
  const title = '\u958B\u59CB\u7D00\u9304\u4F60\u7684\u8A13\u7DF4\uFF01';
  const tabItems = [{
    label: '4',
    sublabel: '\u672A\u5B8C\u6210',
    value: 'INCOMPLETED'
  }, {
    label: '0',
    sublabel: '\u5B8C\u6210',
    value: 'COMPLETED'
  }];
  const [activeKey, updateActiveKey] = useState<ActiveKey>(tabItems[0].value);
  const changeTabHandler = (value: ActiveKey) => {
    updateActiveKey(value);
  };
  const headerRef = useRef<HTMLDivElement>(null);
  const headerHeight = useHeight(headerRef);
  return /*#__PURE__*/_jsxs("div", {
    className: "relative flex flex-col",
    children: [/*#__PURE__*/_jsxs(HCHeader, {
      ref: headerRef,
      title: title,
      prefix: /*#__PURE__*/_jsx(PrefixIcon, {}),
      suffix: /*#__PURE__*/_jsx(SuffixTwoIcons, {}),
      behavior: "fully",
      toolBar: toolBar,
      children: [/*#__PURE__*/_jsx(HCHeaderRegion, {
        behavior: "fully",
        className: "bg-primary",
        children: /*#__PURE__*/_jsx("div", {
          className: "text-heading-m text-primary pl-4 pb-3",
          children: title
        })
      }), /*#__PURE__*/_jsxs(HCHeaderRegion, {
        behavior: "fully",
        className: "bg-primary px-4",
        children: [/*#__PURE__*/_jsx("div", {
          className: "text-body-s text-tertiary mb-4",
          children: "\\u570B\\u969B\\u7DF4\\u80F8\\u65E5\\xB7 2023/05/17 15:28"
        }), /*#__PURE__*/_jsx(HCProgress, {
          rateClass: "w-1/4",
          className: "mb-2"
        }), /*#__PURE__*/_jsxs("div", {
          className: "text-body-xs",
          children: [/*#__PURE__*/_jsx("span", {
            className: "text-placeholder",
            children: "\\u5B8C\\u6210\\u5EA6 "
          }), /*#__PURE__*/_jsx("span", {
            className: "text-tertiary"
          })]
        })]
      }), /*#__PURE__*/_jsx(HCHeaderRegion, {
        behavior: "fixed",
        top: headerHeight,
        className: "bg-primary",
        children: /*#__PURE__*/_jsx(HCTabs, {
          items: tabItems,
          activeKey: activeKey,
          onChange: changeTabHandler
        })
      })]
    }), /*#__PURE__*/_jsx(LongContent, {})]
  });
}`,...(ue=(de=I.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};const Me=["Basic","LeftIcon","LeftIconAndSingleIcon","LeftIconAndTwoIcons","LeftIconAndAction","ActionAndAction","Fixed","Expanded","FullyExpanded","WorkoutRecord"];export{C as ActionAndAction,H as Basic,w as Expanded,j as Fixed,B as FullyExpanded,R as LeftIcon,P as LeftIconAndAction,E as LeftIconAndSingleIcon,N as LeftIconAndTwoIcons,I as WorkoutRecord,Me as __namedExportsOrder,ze as default};
//# sourceMappingURL=Header.stories.a79c80ca.js.map
