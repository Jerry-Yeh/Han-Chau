import{r as l}from"./index.2e2f892a.js";import{H as h,X as _}from"./Input.3ee36192.js";import{A as g}from"./AntdDecorator.e9ea0b67.js";import{j as e}from"./jsx-runtime.db436af5.js";import"./_commonjsHelpers.712cc82f.js";import"./index.0579b088.js";import"./index.f32aad8f.js";import"./nonIterableRest.3d34b57d.js";import"./slicedToArray.46bf6900.js";import"./extends.f25a7a22.js";import"./toArray.f27e8e4d.js";import"./assertThisInitialized.220b4aa7.js";import"./index.c5b7136a.js";import"./statistic.472a1099.js";import"./index.32e22ee9.js";import"./ResizeObserver.es.bd9ff68d.js";const y=a=>e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:`w-5 h-5 ${a.className}`,children:e("path",{fillRule:"evenodd",d:"M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z",clipRule:"evenodd"})});try{magnifyingglass.displayName="magnifyingglass",magnifyingglass.__docgenInfo={description:"",displayName:"magnifyingglass",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const x=a=>e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:`w-5 h-5 ${a.className}`,children:e("path",{d:"M10 3.75a2 2 0 10-4 0 2 2 0 004 0zM17.25 4.5a.75.75 0 000-1.5h-5.5a.75.75 0 000 1.5h5.5zM5 3.75a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5a.75.75 0 01.75.75zM4.25 17a.75.75 0 000-1.5h-1.5a.75.75 0 000 1.5h1.5zM17.25 17a.75.75 0 000-1.5h-5.5a.75.75 0 000 1.5h5.5zM9 10a.75.75 0 01-.75.75h-5.5a.75.75 0 010-1.5h5.5A.75.75 0 019 10zM17.25 10.75a.75.75 0 000-1.5h-1.5a.75.75 0 000 1.5h1.5zM14 10a2 2 0 10-4 0 2 2 0 004 0zM10 16.25a2 2 0 10-4 0 2 2 0 004 0z"})});try{adjustmentshorizontal.displayName="adjustmentshorizontal",adjustmentshorizontal.__docgenInfo={description:"",displayName:"adjustmentshorizontal",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const k={title:"Components/Input",component:h,decorators:[g],parameters:{docs:{source:{type:"dynamic",excludeDecorators:!0}}},argTypes:{label:{control:"text",description:"A caption for input field.",table:{type:{summary:"string"}}},placeholder:{control:"text",description:"A short hint that describes the expected value of an input field.",table:{type:{summary:"string"}}},prefix:{control:!1,description:"The prefix icon or text for the input field.",table:{type:{summary:"ReactNode"}}},suffix:{control:!1,description:"The suffix icon or text for the input field.",table:{type:{summary:"ReactNode"}}},type:{control:"text",description:"The type of input field. See MDN for more.",table:{type:{summary:"string"},defaultValue:{summary:"text"}}},disabled:{control:"boolean",description:"Whether the input is disabled",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}}}},t={args:{label:"caption",disabled:!1}},s=()=>{const[a,r]=l.exports.useState(!1),[o,n]=l.exports.useState("");return e(h,{value:o,prefix:e(y,{className:"icon-secondary"}),suffix:a?e("button",{onClick:()=>n(""),children:e(_,{className:`${o?"icon-tertiary":"icon-disabled"}`})}):e(x,{className:"icon-secondary"}),onFocus:()=>r(!0),onBlur:()=>r(!1),onChange:f=>n(f.target.value)})};var c,i,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: 'caption',
    disabled: false
  }
}`,...(d=(i=t.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var u,p,m;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  const [focus, setFocus] = useState(false);
  const [searchText, setSearchText] = useState('');
  const onFocusHandler = () => setFocus(true);
  const onBlurHandler = () => setFocus(false);
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => setSearchText(e.target.value);
  const onClearHandler = () => setSearchText('');
  return /*#__PURE__*/_jsx(HCInput, {
    value: searchText,
    prefix: /*#__PURE__*/_jsx(MagnifyingGlass, {
      className: "icon-secondary"
    }),
    suffix: focus ? /*#__PURE__*/_jsx("button", {
      onClick: onClearHandler,
      children: /*#__PURE__*/_jsx(XMark, {
        className: \`\${searchText ? 'icon-tertiary' : 'icon-disabled'}\`
      })
    }) : /*#__PURE__*/_jsx(AdjustmentsHorizontal, {
      className: "icon-secondary"
    }),
    onFocus: onFocusHandler,
    onBlur: onBlurHandler,
    onChange: onChangeHandler
  });
}`,...(m=(p=s.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const V=["Basic","SearchBar"];export{t as Basic,s as SearchBar,V as __namedExportsOrder,k as default};
//# sourceMappingURL=Input.stories.413e6212.js.map
