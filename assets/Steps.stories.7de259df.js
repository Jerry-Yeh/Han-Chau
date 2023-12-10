import{r as m}from"./index.2e2f892a.js";import{j as t,a as n}from"./jsx-runtime.db436af5.js";import{H as f}from"./Input.872d4fa4.js";import"./_commonjsHelpers.712cc82f.js";import"./index.0579b088.js";import"./index.881b564b.js";import"./nonIterableRest.a72c2085.js";import"./defineProperty.bb51ac4e.js";import"./slicedToArray.a85404c5.js";import"./extends.f25a7a22.js";import"./format-input.6ffc2f8a.js";import"./toArray.a9612acc.js";import"./assertThisInitialized.220b4aa7.js";import"./button.6b704470.js";import"./statistic.bfc8a639.js";import"./index.32e22ee9.js";import"./index.cb53d6bd.js";import"./ResizeObserver.es.bd9ff68d.js";const d=({type:e})=>{const[s,r]=m.exports.useState("");return m.exports.useEffect(()=>{switch(e){case o.BEFORE:r("step__tail--before");break;case o.AFTER:r("step__tail--after");break}},[e]),t("div",{className:`${s} w-px absolute bg-tertiary`})};try{d.displayName="Tail",d.__docgenInfo={description:"",displayName:"Tail",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},isShow:{defaultValue:null,description:"",name:"isShow",required:!0,type:{name:"boolean"}},type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:"0"},{value:"1"}]}}}}}catch{}const h=({className:e,items:s,dark:r=!1})=>t("div",{className:`${e} ${r?"bg-black":""} step`,children:s.map((a,i)=>n("div",{className:"step__container flex",children:[n("div",{className:"p-4 relative flex justify-center",children:[n("div",{className:"step__icon relative z-10 w-9 h-9 flex justify-center items-center rounded-full bg-secondary text-secondary",children:[i<9?0:"",i+1]}),i!==0&&t(d,{isShow:!0,type:o.BEFORE}),t(d,{isShow:!0,type:o.AFTER})]}),n("div",{className:`step__content grow ${r?"text-white":""}`,children:[t("div",{className:"step__content__title text-heading-s text-secondary",children:a.title}),t("div",{className:`${a.title?"step__content__description":"step__content__description--titleless"} text-secondary`,children:a.description})]})]},i))}),u=h;try{h.displayName="Steps",h.__docgenInfo={description:"",displayName:"Steps",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"StepItem[]"}},dark:{defaultValue:{value:"false"},description:"",name:"dark",required:!1,type:{name:"boolean"}}}}}catch{}var o=(e=>(e[e.BEFORE=0]="BEFORE",e[e.AFTER=1]="AFTER",e))(o||{});const{useArgs:g}=__STORYBOOK_MODULE_STORE__,G={title:"Components/Steps",component:u,argTypes:{items:{description:"Content of the step item.",table:{type:{summary:"StepItem[]"}}},dark:{control:"boolean",description:"Whether the step is dark mode or not.",defaultValue:{summary:!1},table:{type:{summary:"boolean"}}}},args:{items:[],dark:!1}},p=()=>{const[{dark:e}]=g();return t(u,{items:[{title:"i m title",description:"i m description"}],dark:e})},c=()=>{const[{dark:e}]=g();return t(u,{items:[{title:"i m title1",description:"i m description1"},{title:"i m title2",description:"i m description2"},{title:"i m title3",description:"i m description3"}],dark:e})},l=()=>{const[{dark:e}]=g(),[s,r]=m.exports.useState(""),[a,i]=m.exports.useState(""),b=[{title:n("div",{className:"flex pt-2 pr-4 pb-4 gap-x-2",children:[t(f,{value:s,onChange:_=>r(_.target.value),suffix:"reps"}),t(f,{value:a,onChange:_=>i(_.target.value),suffix:"kg"})]}),description:`\u76EE\u524D\u7684\u52A0\u4E58\u91CD\u91CF\u70BA ${+s*+a} kg`}];return t(u,{items:b,dark:e})};var S,y,E;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
  const [{
    dark
  }] = useArgs();
  const items: StepItem[] = [{
    title: 'i m title',
    description: 'i m description'
  }];
  return /*#__PURE__*/_jsx(HCSteps, {
    items: items,
    dark: dark
  });
}`,...(E=(y=p.parameters)==null?void 0:y.docs)==null?void 0:E.source}}};var x,C,v;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
  const [{
    dark
  }] = useArgs();
  const items: StepItem[] = [{
    title: 'i m title1',
    description: 'i m description1'
  }, {
    title: 'i m title2',
    description: 'i m description2'
  }, {
    title: 'i m title3',
    description: 'i m description3'
  }];
  return /*#__PURE__*/_jsx(HCSteps, {
    items: items,
    dark: dark
  });
}`,...(v=(C=c.parameters)==null?void 0:C.docs)==null?void 0:v.source}}};var k,R,N;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
  const [{
    dark
  }] = useArgs();
  const [reps, setReps] = useState('');
  const [sets, setSets] = useState('');
  const handleChangeReps = (e: InputChangeEventType) => setReps(e.target.value);
  const handleChangeSets = (e: InputChangeEventType) => setSets(e.target.value);
  const items: StepItem[] = [{
    title: /*#__PURE__*/_jsxs("div", {
      className: "flex pt-2 pr-4 pb-4 gap-x-2",
      children: [/*#__PURE__*/_jsx(HCInput, {
        value: reps,
        onChange: handleChangeReps,
        suffix: "reps"
      }), /*#__PURE__*/_jsx(HCInput, {
        value: sets,
        onChange: handleChangeSets,
        suffix: "kg"
      })]
    }),
    description: \`\u76EE\u524D\u7684\u52A0\u4E58\u91CD\u91CF\u70BA \${+reps * +sets} kg\`
  }];
  return /*#__PURE__*/_jsx(HCSteps, {
    items: items,
    dark: dark
  });
}`,...(N=(R=l.parameters)==null?void 0:R.docs)==null?void 0:N.source}}};const J=["Basic","Multiple","WortoutForm"];export{p as Basic,c as Multiple,l as WortoutForm,J as __namedExportsOrder,G as default};
//# sourceMappingURL=Steps.stories.7de259df.js.map
