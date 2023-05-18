import{r as t,R as ue}from"./index.2e2f892a.js";import{L as _e}from"./logo-mark.1a6f0609.js";import{a as u,j as e}from"./jsx-runtime.db436af5.js";import{A as fe}from"./AntdDecorator.e8a19c10.js";import{A as le}from"./arrow-left.73fabcbf.js";import"./_commonjsHelpers.712cc82f.js";import"./index.881b564b.js";import"./nonIterableRest.a72c2085.js";import"./defineProperty.bb51ac4e.js";import"./slicedToArray.a85404c5.js";import"./extends.f25a7a22.js";import"./format-input.6ffc2f8a.js";import"./toArray.a9612acc.js";import"./assertThisInitialized.220b4aa7.js";const ce=()=>{const[o,n]=t.exports.useState(!1),[s,_]=t.exports.useState(!0);return t.exports.useEffect(()=>{let i=window.pageYOffset;const c=a=>Math.abs(a-i)>10,x=a=>a>i,f=()=>{const a=window.pageYOffset;c(a)&&(n(x(a)),i=a>0?a:0),_(a===0)},d=a=>{a.stopPropagation(),window.requestAnimationFrame(f)};return window.addEventListener("scroll",d,!0),()=>{window.removeEventListener("scroll",d)}},[]),[o,s]},S=({children:r,className:o="",size:n,title:s=e("img",{className:"w-7",src:_e,alt:"LOGO"}),prefix:_,suffix:i,behavior:c,toolBar:x=!0},f)=>{const[d,a]=ce(),[j,p]=t.exports.useState(""),[pe,h]=t.exports.useState("opacity-0");return t.exports.useEffect(()=>{(()=>{switch(n){case"l":p("py-6");break;case"m":p("py-3.5");break;case"s":p("py-0");break}})()},[n]),t.exports.useEffect(()=>{switch(c){case"expanded":h(d?"opacity-100":"opacity-0");break;case"fully":h(a?"opacity-0":"opacity-100");break;default:h("opacity-100");break}},[c,s,d,a]),u(t.exports.Fragment,{children:[e("div",{ref:f,className:`${o} ${j} sticky top-0 left-0 w-full bg-primary z-20`,children:x&&u("div",{className:"h-11 flex text-secondary bg-primary z-10",children:[e("div",{className:"flex-1 hover:cursor-pointer flex justify-start items-center pl-1",children:_}),e("div",{className:`${pe} transition-opacity duration-300
            flex justify-center items-center text-heading-xs text-primary`,children:s}),e("div",{className:"flex-1 flex justify-end items-center hover:cursor-pointer pr-1",children:i})]})}),r]})},C=t.exports.forwardRef(S);try{S.displayName="HCHeader",S.__docgenInfo={description:"",displayName:"HCHeader",props:{className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},prefix:{defaultValue:null,description:"",name:"prefix",required:!1,type:{name:"ReactNode"}},title:{defaultValue:{value:"<img className='w-7' src={LogoMark} alt='LOGO' />"},description:"",name:"title",required:!1,type:{name:"ReactNode"}},suffix:{defaultValue:null,description:"",name:"suffix",required:!1,type:{name:"ReactNode"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"l"'},{value:'"m"'},{value:'"s"'}]}},toolBar:{defaultValue:{value:"true"},description:"",name:"toolBar",required:!1,type:{name:"boolean"}},behavior:{defaultValue:null,description:"",name:"behavior",required:!1,type:{name:"enum",value:[{value:'"fixed"'},{value:'"expanded"'},{value:'"fully"'}]}}}}}catch{}const me=r=>e("button",{className:"p-3",onClick:r.onClick,children:r.children});try{HeaderIconButton.displayName="HeaderIconButton",HeaderIconButton.__docgenInfo={description:"",displayName:"HeaderIconButton",props:{onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((e: MouseEvent<Element, MouseEvent>) => void)"}}}}}catch{}const U=({children:r,className:o="",behavior:n,top:s=0},_)=>{const[i,c]=ce(),[x,f]=t.exports.useState("relative"),[d,a]=t.exports.useState("max-h-full"),[j,p]=t.exports.useState({top:0});return t.exports.useEffect(()=>{switch(n){case"fixed":f("sticky z-10"),p({top:`${s}px`});break;case"expanded":f("sticky z-10"),p(i?{top:`-${s}px`}:{top:s});break;case"fully":a(c?"max-h-screen":"max-h-0");break}},[n,i,c,s]),e("div",{ref:_,className:`w-full ${x} ${d} transition-all duration-300`,style:j,children:e("div",{className:`${o}`,children:r})})},xe=ue.forwardRef(U);try{U.displayName="HeaderRegion",U.__docgenInfo={description:"",displayName:"HeaderRegion",props:{className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},region:{defaultValue:null,description:"",name:"region",required:!1,type:{name:"enum",value:[{value:'"toolBar"'},{value:'"tabBar"'},{value:'"flexibleSpace"'}]}},behavior:{defaultValue:null,description:"",name:"behavior",required:!0,type:{name:"enum",value:[{value:'"fixed"'},{value:'"expanded"'},{value:'"fully"'}]}},top:{defaultValue:{value:"0"},description:"",name:"top",required:!1,type:{name:"number"}}}}}catch{}const l=me,B=xe,he=r=>e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:`w-5 h-5 ${r.className}`,children:e("path",{d:"M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z"})});try{plus.displayName="plus",plus.__docgenInfo={description:"",displayName:"plus",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const de=r=>e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:`w-5 h-5 ${r.className}`,children:e("path",{d:"M10 3a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM10 8.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM11.5 15.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z"})});try{ellipsisvertical.displayName="ellipsisvertical",ellipsisvertical.__docgenInfo={description:"",displayName:"ellipsisvertical",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const P=r=>{const[o,n]=t.exports.useState(0);return t.exports.useEffect(()=>{if(!r.current)return;const s=new ResizeObserver(()=>{n(r.current.clientHeight)});return s.observe(r.current),()=>s.disconnect()},[r]),o};try{P.displayName="useHeight",P.__docgenInfo={description:"",displayName:"useHeight",props:{}}}catch{}const Be={title:"Components/Header",component:C,decorators:[fe],parameters:{docs:{source:{type:"dynamic",excludeDecorators:!0}}},argTypes:{title:{control:"text",description:"Title of the header.",table:{type:{summary:"ReactNode"}}},prefix:{control:!1,description:"Handle prefix action of header.",table:{type:{summary:"ReactNode"}}},suffix:{control:!1,description:"Handle suffix action of header.",table:{type:{summary:"ReactNode"}}},size:{control:"select",options:["l","m","s"],description:"Set the size of header.",defaultValue:{summary:"s"},table:{type:{summary:"string"}}},behavior:{control:"select",options:["fixed","expanded","fully"],description:"Scrolling behaviour of the header title.",table:{type:{summary:"fixed | expanded | fully"},defaultValue:{summary:"fixed"}}},toolBar:{control:"boolean",description:"Whether the header tool bar exists or not.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}}},args:{title:"\u6A19\u984C",size:"s",toolBar:!0}},y={},m=()=>e(l,{children:e(le,{})}),I=()=>u("div",{className:"flex",children:[e(l,{children:e(he,{})}),e(l,{children:e(de,{})})]}),g={args:{prefix:e(m,{})}},v={args:{prefix:e(m,{}),suffix:e("div",{className:"flex",children:e(l,{children:e(de,{})})})}},H={args:{prefix:e(m,{}),suffix:e(I,{})}},R={args:{prefix:e(l,{children:e(le,{})}),suffix:e(l,{children:"action"})}},b={args:{prefix:e(l,{children:"action"}),suffix:e(l,{children:"action"})}},L=()=>u("main",{className:"w-full px-4 pb-4 overflow-y-scroll",children:[e("h3",{children:"Content start"}),e("div",{style:{height:"800px"}}),e("h3",{children:"Content end"})]}),N=({title:r,toolBar:o})=>{const n=t.exports.useRef(null),s=P(n);return u("div",{children:[e(C,{ref:n,title:"",prefix:e(m,{}),suffix:e(I,{}),behavior:"expanded",toolBar:o,children:e(B,{behavior:"fixed",top:s,className:"bg-primary",children:e("div",{className:"text-heading-m text-primary pl-4 pb-3",children:r})})}),e(L,{})]})},E=({title:r,toolBar:o})=>{const n=t.exports.useRef(null),s=P(n);return u("div",{children:[e(C,{ref:n,title:r,prefix:e(m,{}),suffix:e(I,{}),behavior:"expanded",toolBar:o,children:e(B,{behavior:"expanded",top:s,className:"bg-primary",children:e("div",{className:"text-heading-m text-primary pl-4 pb-3",children:r})})}),e(L,{})]})},w=({title:r,toolBar:o})=>u("div",{className:"relative flex flex-col",children:[e(C,{title:r,prefix:e(m,{}),suffix:e(I,{}),behavior:"fully",toolBar:o,children:e(B,{behavior:"fully",className:"bg-primary",children:e("div",{className:"text-heading-m text-primary pl-4 pb-3",children:r})})}),e(L,{})]});var A,V,k;y.parameters={...y.parameters,docs:{...(A=y.parameters)==null?void 0:A.docs,source:{originalSource:"{}",...(k=(V=y.parameters)==null?void 0:V.docs)==null?void 0:k.source}}};var z,q,T;g.parameters={...g.parameters,docs:{...(z=g.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    prefix: /*#__PURE__*/_jsx(PrefixIcon, {})
  }
}`,...(T=(q=g.parameters)==null?void 0:q.docs)==null?void 0:T.source}}};var M,$,D;v.parameters={...v.parameters,docs:{...(M=v.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    prefix: /*#__PURE__*/_jsx(PrefixIcon, {}),
    suffix: /*#__PURE__*/_jsx("div", {
      className: "flex",
      children: /*#__PURE__*/_jsx(HCHeaderIconButton, {
        children: /*#__PURE__*/_jsx(EllipsisVertical, {})
      })
    })
  }
}`,...(D=($=v.parameters)==null?void 0:$.docs)==null?void 0:D.source}}};var F,O,G;H.parameters={...H.parameters,docs:{...(F=H.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    prefix: /*#__PURE__*/_jsx(PrefixIcon, {}),
    suffix: /*#__PURE__*/_jsx(SuffixTwoIcons, {})
  }
}`,...(G=(O=H.parameters)==null?void 0:O.docs)==null?void 0:G.source}}};var Y,W,J;R.parameters={...R.parameters,docs:{...(Y=R.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    prefix: /*#__PURE__*/_jsx(HCHeaderIconButton, {
      children: /*#__PURE__*/_jsx(ArrowLeft, {})
    }),
    suffix: /*#__PURE__*/_jsx(HCHeaderIconButton, {
      children: "action"
    })
  }
}`,...(J=(W=R.parameters)==null?void 0:W.docs)==null?void 0:J.source}}};var K,Q,X;b.parameters={...b.parameters,docs:{...(K=b.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    prefix: /*#__PURE__*/_jsx(HCHeaderIconButton, {
      children: "action"
    }),
    suffix: /*#__PURE__*/_jsx(HCHeaderIconButton, {
      children: "action"
    })
  }
}`,...(X=(Q=b.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Z,ee,re;N.parameters={...N.parameters,docs:{...(Z=N.parameters)==null?void 0:Z.docs,source:{originalSource:`({
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
}`,...(re=(ee=N.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var ae,te,se;E.parameters={...E.parameters,docs:{...(ae=E.parameters)==null?void 0:ae.docs,source:{originalSource:`({
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
}`,...(se=(te=E.parameters)==null?void 0:te.docs)==null?void 0:se.source}}};var ne,oe,ie;w.parameters={...w.parameters,docs:{...(ne=w.parameters)==null?void 0:ne.docs,source:{originalSource:`({
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
}`,...(ie=(oe=w.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};const Le=["Basic","LeftIcon","LeftIconAndSingleIcon","LeftIconAndTwoIcons","LeftIconAndAction","ActionAndAction","Fixed","Expanded","FullyExpanded"];export{b as ActionAndAction,y as Basic,E as Expanded,N as Fixed,w as FullyExpanded,g as LeftIcon,R as LeftIconAndAction,v as LeftIconAndSingleIcon,H as LeftIconAndTwoIcons,Le as __namedExportsOrder,Be as default};
//# sourceMappingURL=Header.stories.e1892784.js.map
