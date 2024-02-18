import{r as c}from"./index.2e2f892a.js";import{S as o}from"./index.f759f60f.js";import{H as u}from"./Input.872d4fa4.js";import{j as t,a as v}from"./jsx-runtime.db436af5.js";import"./_commonjsHelpers.712cc82f.js";import"./index.0579b088.js";import"./index.881b564b.js";import"./nonIterableRest.a72c2085.js";import"./defineProperty.bb51ac4e.js";import"./slicedToArray.a85404c5.js";import"./extends.f25a7a22.js";import"./format-input.6ffc2f8a.js";import"./toArray.a9612acc.js";import"./assertThisInitialized.220b4aa7.js";import"./button.6b704470.js";import"./statistic.bfc8a639.js";import"./index.32e22ee9.js";import"./index.cb53d6bd.js";import"./ResizeObserver.es.bd9ff68d.js";const{useArgs:p}=__STORYBOOK_MODULE_STORE__,Y={title:"Components/Steps",component:o,argTypes:{items:{description:"Content of the step item.",table:{type:{summary:"StepItem[]"}}},dark:{control:"boolean",description:"Whether the step is dark mode or not.",defaultValue:{summary:!1},table:{type:{summary:"boolean"}}}},args:{items:[],dark:!1}},r=()=>{const[{dark:e}]=p();return t(o,{items:[{title:"i m title",description:"i m description"}],dark:e})},i=()=>{const[{dark:e}]=p();return t(o,{items:[{title:"i m title1",description:"i m description1"},{title:"i m title2",description:"i m description2"},{title:"i m title3",description:"i m description3"}],dark:e})},n=()=>{const[{dark:e}]=p(),[s,k]=c.exports.useState(""),[m,E]=c.exports.useState(""),R=[{title:v("div",{className:"flex pt-2 pr-4 pb-4 gap-x-2",children:[t(u,{value:s,onChange:a=>k(a.target.value),suffix:"reps"}),t(u,{value:m,onChange:a=>E(a.target.value),suffix:"kg"})]}),description:`\u76EE\u524D\u7684\u52A0\u4E58\u91CD\u91CF\u70BA ${+s*+m} kg`}];return t(o,{items:R,dark:e})};var d,l,g;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
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
}`,...(g=(l=r.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var h,_,C;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`() => {
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
}`,...(C=(_=i.parameters)==null?void 0:_.docs)==null?void 0:C.source}}};var x,S,f;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
  const [{
    dark
  }] = useArgs();
  const [reps, setReps] = useState('');
  const [weight, setWeight] = useState('');
  const handleChangeReps = (e: InputChangeEventType) => setReps(e.target.value);
  const handleChangeWeight = (e: InputChangeEventType) => setWeight(e.target.value);
  const items: StepItem[] = [{
    title: /*#__PURE__*/_jsxs("div", {
      className: "flex pt-2 pr-4 pb-4 gap-x-2",
      children: [/*#__PURE__*/_jsx(HCInput, {
        value: reps,
        onChange: handleChangeReps,
        suffix: "reps"
      }), /*#__PURE__*/_jsx(HCInput, {
        value: weight,
        onChange: handleChangeWeight,
        suffix: "kg"
      })]
    }),
    description: \`\u76EE\u524D\u7684\u52A0\u4E58\u91CD\u91CF\u70BA \${+reps * +weight} kg\`
  }];
  return /*#__PURE__*/_jsx(HCSteps, {
    items: items,
    dark: dark
  });
}`,...(f=(S=n.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};const q=["Basic","Multiple","WortoutForm"];export{r as Basic,i as Multiple,n as WortoutForm,q as __namedExportsOrder,Y as default};
//# sourceMappingURL=Steps.stories.fede019b.js.map
