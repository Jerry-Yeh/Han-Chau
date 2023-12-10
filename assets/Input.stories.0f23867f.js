import{r as p}from"./index.2e2f892a.js";import{H as a}from"./Input.872d4fa4.js";import{A as l}from"./AntdDecorator.e8a19c10.js";import{j as m}from"./jsx-runtime.db436af5.js";import"./_commonjsHelpers.712cc82f.js";import"./index.0579b088.js";import"./index.881b564b.js";import"./nonIterableRest.a72c2085.js";import"./defineProperty.bb51ac4e.js";import"./slicedToArray.a85404c5.js";import"./extends.f25a7a22.js";import"./format-input.6ffc2f8a.js";import"./toArray.a9612acc.js";import"./assertThisInitialized.220b4aa7.js";import"./button.6b704470.js";import"./statistic.bfc8a639.js";import"./index.32e22ee9.js";import"./index.cb53d6bd.js";import"./ResizeObserver.es.bd9ff68d.js";const H={title:"Components/Input",component:a,decorators:[l],parameters:{docs:{source:{type:"dynamic",excludeDecorators:!0}}},argTypes:{value:{control:"text",description:"The input content value.",table:{type:{summary:"string"}}},label:{control:"text",description:"A caption for input field.",table:{type:{summary:"string"}}},placeholder:{control:"text",description:"A short hint that describes the expected value of an input field.",table:{type:{summary:"string"}}},prefix:{control:!1,description:"The prefix icon or text for the input field.",table:{type:{summary:"ReactNode"}}},suffix:{control:!1,description:"The suffix icon or text for the input field.",table:{type:{summary:"ReactNode"}}},type:{control:"text",description:"The type of input field. See MDN for more.",table:{type:{summary:"string"},defaultValue:{summary:"text"}}},disabled:{control:"boolean",description:"Whether the input is disabled",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}}}},e=()=>{const[n,s]=p.exports.useState("");return m(a,{label:"caption",value:n,onChange:i=>{s(i.target.value)}})};var t,r,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`() => {
  const [value, setValue] = useState('');
  const handleChange = (e: InputChangeEventType) => {
    setValue(e.target.value);
  };
  return /*#__PURE__*/_jsx(HCInput, {
    label: "caption",
    value: value,
    onChange: handleChange
  });
}`,...(o=(r=e.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};const N=["Basic"];export{e as Basic,N as __namedExportsOrder,H as default};
//# sourceMappingURL=Input.stories.0f23867f.js.map
