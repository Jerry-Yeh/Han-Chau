import{R as u,r as s}from"./index.2e2f892a.js";import{a as m,j as l}from"./jsx-runtime.db436af5.js";const c=u.createContext(null),t=c.Provider;try{t.displayName="RadioGroupContextProvider",t.__docgenInfo={description:"",displayName:"RadioGroupContextProvider",props:{}}}catch{}const d=(e,o)=>{const a=s.exports.useContext(c),r=p=>{var i;(i=a==null?void 0:a.onChange)==null||i.call(a,p)},n={disabled:e.disabled};return a&&(n.onChange=r,n.checked=String(e.value)===String(a==null?void 0:a.value),n.disabled=n.disabled||a.disabled),m("div",{className:" radio w-full text-secondary rounded-lg border border-solid border-secondary transition-all duration-300 pl-4 py-3.5 flex bg-primary relative hover:border-hover hover:bg-hover",children:[l("input",{...n,type:"radio",id:`${e.value}`,value:e.value,className:"appearance-none"}),l("div",{className:"input w-4 h-4 mr-4 flex items-center justify-center border border-primary rounded-full hover:border-hover",children:l("div",{className:"core w-2.5 h-2.5 rounded-full"})}),l("label",{htmlFor:`${e.value}`,className:"absolute inset-0 w-full h-full pl-12 py-3.5 text-body-s flex hover:cursor-pointer",children:e.label}),e.content&&l("p",{className:"text-tertiary text-body-xs mt-6",children:e.content})]})},f=u.forwardRef(d);try{d.displayName="HCRadio",d.__docgenInfo={description:"",displayName:"HCRadio",props:{optionType:{defaultValue:{value:"'default'"},description:`Control the appearance for Radio to display as button or not
@internal`,name:"optionType",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"button"'}]}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},content:{defaultValue:null,description:"",name:"content",required:!1,type:{name:"string"}},prefixCls:{defaultValue:null,description:"",name:"prefixCls",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},defaultChecked:{defaultValue:null,description:"",name:"defaultChecked",required:!1,type:{name:"boolean"}},checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((e: InputChangeEvent) => void)"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLElement>"}},onMouseEnter:{defaultValue:null,description:"",name:"onMouseEnter",required:!1,type:{name:"MouseEventHandler<HTMLElement>"}},onMouseLeave:{defaultValue:null,description:"",name:"onMouseLeave",required:!1,type:{name:"MouseEventHandler<HTMLElement>"}},onKeyPress:{defaultValue:null,description:"",name:"onKeyPress",required:!1,type:{name:"KeyboardEventHandler<HTMLElement>"}},onKeyDown:{defaultValue:null,description:"",name:"onKeyDown",required:!1,type:{name:"KeyboardEventHandler<HTMLElement>"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"any"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},autoFocus:{defaultValue:null,description:"",name:"autoFocus",required:!1,type:{name:"boolean"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"string"}},skipGroup:{defaultValue:null,description:"",name:"skipGroup",required:!1,type:{name:"boolean"}}}}}catch{}const y=e=>{const[o,a]=s.exports.useState(e.value),r=n=>{a(n.target.value),e.onChange&&e.onChange(n)};return l("div",{className:`${e.className} flex flex-col gap-y-2`,children:l(t,{value:{onChange:r,value:o},children:e.children})})};try{Group.displayName="Group",Group.__docgenInfo={description:"",displayName:"Group",props:{onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((e: InputChangeEvent) => void)"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"any"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const b=f,g=y;export{b as H,g as a};
//# sourceMappingURL=index.5f90ca5b.js.map
