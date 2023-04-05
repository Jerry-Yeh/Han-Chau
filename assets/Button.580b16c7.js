import{c as n}from"./index.0579b088.js";import{j as a,a as o}from"./jsx-runtime.db436af5.js";import{r as i}from"./index.2e2f892a.js";function u({title:e,titleId:r,...l},s){return i.exports.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:s,"aria-labelledby":r},l),e?i.exports.createElement("title",{id:r},e):null,i.exports.createElement("path",{fillRule:"evenodd",d:"M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z",clipRule:"evenodd"}))}const h=i.exports.forwardRef(u),b=h,d=e=>{const r=(g,t=!1)=>({primary:t?"bg-highlight-disabled text-disabled":"bg-primary hover:bg-hover active:bg-pressed text-primary",secondary:t?"bg-disabled text-disabled":"bg-primary hover:bg-hover active:bg-pressed text-secondary",tertiary:t?"bg-disabled text-disabled":"bg-tertiary hover:bg-hover active:bg-pressed text-tertiary",highlight:t?"bg-highlight-disabled text-disabled":"bg-highlight hover:bg-highlight-hover active:bg-highlight-pressed text-onColor","highlight-light":t?"bg-highlight-disabled text-disabled":"bg-highlight-light hover:bg-highlight-light-hover active:bg-highlight-light-pressed",success:t?"bg-success-disabled text-disabled":"bg-success hover:bg-success-hover active:bg-success-pressed text-onColor","success-light":t?"bg-success-disabled text-disabled":"bg-success-light hover:bg-success-light-hover active:bg-success-light-pressed",destructive:t?"bg-destructive-disabled text-disabled":"bg-destructive hover:bg-destructive-hover active:bg-destructive-pressed text-onColor","destructive-light":t?"bg-destructive-disabled text-disabled":"bg-destructive-light hover:bg-destructive-light-hover active:bg-destructive-light-pressed",warning:t?"bg-warning-disabled text-disabled":"bg-warning hover:bg-warning-hover active:bg-warning-pressed text-onColor","warning-light":t?"bg-warning-disabled text-disabled":"bg-warning-light hover:bg-warning-light-hover active:bg-warning-light-pressed"})[g],l=n(e.disabled?"cursor-not-allowed":"cursor-pointer"),c=n(["primary","secondary","tertiary"].includes(e.color)?"border border-secondary":"");return a("button",{className:`
        ${e.className}
        ${r(e.color,e.disabled)}
        ${l}
        ${c}
        ${e.block&&"w-full"}
        h-12
        transition-colors
        rounded-lg
        px-4`,disabled:e.disabled,onClick:e.onClick,children:o("div",{className:"flex justify-between items-center",children:[a("div",{children:e.prefix}),o("div",{className:"flex justify-center ",children:[e.children,e.next&&a(b,{className:"h-6 w-6 ml-2"})]}),a("div",{children:e.suffix})]})})};d.defaultProps={className:"",color:"primary",disabled:!1,block:!0,next:!1};const p=d;try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},color:{defaultValue:{value:"primary"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"highlight"'},{value:'"highlight-light"'},{value:'"success"'},{value:'"success-light"'},{value:'"destructive"'},{value:'"destructive-light"'},{value:'"warning"'},{value:'"warning-light"'}]}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},block:{defaultValue:{value:"true"},description:"",name:"block",required:!1,type:{name:"boolean"}},textColor:{defaultValue:null,description:"",name:"textColor",required:!1,type:{name:"string"}},next:{defaultValue:{value:"false"},description:"",name:"next",required:!1,type:{name:"boolean"}},prefix:{defaultValue:null,description:"",name:"prefix",required:!1,type:{name:"ReactNode"}},suffix:{defaultValue:null,description:"",name:"suffix",required:!1,type:{name:"ReactNode"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLButtonElement>"}}}}}catch{}export{p as H};
//# sourceMappingURL=Button.580b16c7.js.map
