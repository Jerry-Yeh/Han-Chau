import{d as c,e as s,f as b}from"./nonIterableRest.3d34b57d.js";function p(e,l){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var i,u,a,n,o=[],r=!0,f=!1;try{if(a=(t=t.call(e)).next,l===0){if(Object(t)!==t)return;r=!1}else for(;!(r=(i=a.call(t)).done)&&(o.push(i.value),o.length!==l);r=!0);}catch(y){f=!0,u=y}finally{try{if(!r&&t.return!=null&&(n=t.return(),Object(n)!==n))return}finally{if(f)throw u}}return o}}function h(e,l){return c(e)||p(e,l)||s(e,l)||b()}export{h as _};
//# sourceMappingURL=slicedToArray.46bf6900.js.map