import{R as p,r as t}from"./index.2e2f892a.js";import{a as V}from"./chest.a7b4e687.js";import{j as i}from"./jsx-runtime.db436af5.js";const g=p.createContext(null),R=g.Provider,m=(e,f)=>{const a=t.exports.useContext(g),[l,u]=t.exports.useState(""),[b,d]=t.exports.useState(""),[C,o]=t.exports.useState(""),h=r=>{const c=r.target.value;if(a&&a.onChange){let s;switch(l){case"boolean":s=c==="true";break;case"number":s=+c;break;default:s=c;break}a.onChange(s)}e.onChange&&e.onChange(r)},v=r=>{e.onClick&&e.onClick(r)},n={...e,disabled:e.disabled||(a==null?void 0:a.disabled),value:`${e.value}`,checked:a?a.value===e.value:e.checked,onChange:h,onClick:v};return t.exports.useEffect(()=>{u(typeof e.value)},[l,e.value]),t.exports.useEffect(()=>{n.checked?n.disabled?(o("control-item-bg-disenabled"),d("control-item-border-disenabled")):(o("control-item-bg-selected"),d("control-item-border-selected")):n.disabled?(o("control-item-bg"),d("control-item-border-disabled")):(o("control-item-bg"),d("control-item-border"))},[n.checked,n.disabled]),i(V,{type:"radio",...n,controller:i("div",{className:`${b} w-4 h-4 flex items-center justify-center border rounded-full`,children:i("div",{className:`w-2.5 h-2.5 rounded-full ${C}`})})})},y=p.forwardRef(m);try{m.displayName="HCRadio",m.__docgenInfo={description:"",displayName:"HCRadio",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"RadioValueType"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},image:{defaultValue:null,description:"",name:"image",required:!1,type:{name:"ReactNode"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"checkbox"'},{value:'"radio"'}]}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((e: InputChangeEvent) => void)"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLElement>"}}}}}catch{}const q=e=>{const f=l=>{e.onChange&&e.onChange(l)},a=e.options&&e.options.length>0?e.options.map((l,u)=>i(y,{...l},u)):e.children;return i("div",{className:`${e.className} grid ${e.image?"grid-cols-3 gap-4":"gap-y-2"}`,children:i(R,{value:{value:e.value,disabled:e.disabled,onChange:f},children:a})})};try{Group.displayName="Group",Group.__docgenInfo={description:"",displayName:"Group",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"Nullable<RadioValueType>"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},options:{defaultValue:null,description:"",name:"options",required:!1,type:{name:"RadioOptionType[]"}},image:{defaultValue:null,description:"",name:"image",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((e: RadioValueType) => void)"}}}}}catch{}const x=y,H=q;export{x as H,H as a};
//# sourceMappingURL=index.613a4451.js.map