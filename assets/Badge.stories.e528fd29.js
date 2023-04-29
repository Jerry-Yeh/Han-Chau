import{B as a}from"./Badge.baf094ed.js";import{j as e}from"./jsx-runtime.db436af5.js";import"./index.2e2f892a.js";import"./_commonjsHelpers.712cc82f.js";import"./Rate.4f8acd74.js";const y={title:"Components/Badge",component:a,argTypes:{type:{control:"select",options:["rate","dot"],description:"Type of the badge.",table:{type:{summary:"string"}}},level:{control:"select",options:[0,1,2,3],description:"Level of the rate type badge.",table:{type:{summary:"number"}}},show:{control:"boolean",description:"Whether the badge is visiable or not.",table:{type:{summary:"boolean"},defaultValue:{summary:!0}}}},args:{show:!0}},r=()=>e(a,{type:"rate",children:e("div",{className:"w-16 h-16 bg-tertiary rounded"})}),t=()=>e("div",{className:"p-4",children:e(a,{type:"dot",children:e("div",{className:"w-5 h-5 bg-tertiary rounded"})})});var s,o,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
  return /*#__PURE__*/_jsx(HCBadge, {
    type: "rate",
    children: /*#__PURE__*/_jsx("div", {
      className: "w-16 h-16 bg-tertiary rounded"
    })
  });
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};var d,i,c;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
  return /*#__PURE__*/_jsx("div", {
    className: "p-4",
    children: /*#__PURE__*/_jsx(HCBadge, {
      type: "dot",
      children: /*#__PURE__*/_jsx("div", {
        className: "w-5 h-5 bg-tertiary rounded"
      })
    })
  });
}`,...(c=(i=t.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};const g=["Rate","Dot"];export{t as Dot,r as Rate,g as __namedExportsOrder,y as default};
//# sourceMappingURL=Badge.stories.e528fd29.js.map
