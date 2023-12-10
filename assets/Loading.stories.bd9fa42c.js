import{r as i}from"./index.2e2f892a.js";import{L as te}from"./Logo.626438e5.js";import{j as y,a as re}from"./jsx-runtime.db436af5.js";import{i as f,r as ae,d as oe,a as ie,_ as d}from"./format-input.6ffc2f8a.js";import{a as se}from"./defineProperty.bb51ac4e.js";import{c as I}from"./index.0579b088.js";import"./_commonjsHelpers.712cc82f.js";import"./logo-mark.1a6f0609.js";var ce=i.exports.createContext({});const q=ce;var h=2,F=.16,le=.05,ue=.05,de=.15,z=5,Z=4,fe=[{index:7,opacity:.15},{index:6,opacity:.25},{index:5,opacity:.3},{index:5,opacity:.45},{index:5,opacity:.65},{index:5,opacity:.85},{index:4,opacity:.9},{index:3,opacity:.95},{index:2,opacity:.97},{index:1,opacity:.98}];function L(e){var n=e.r,t=e.g,r=e.b,a=ae(n,t,r);return{h:a.h*360,s:a.s,v:a.v}}function x(e){var n=e.r,t=e.g,r=e.b;return"#".concat(oe(n,t,r,!1))}function pe(e,n,t){var r=t/100,a={r:(n.r-e.r)*r+e.r,g:(n.g-e.g)*r+e.g,b:(n.b-e.b)*r+e.b};return a}function R(e,n,t){var r;return Math.round(e.h)>=60&&Math.round(e.h)<=240?r=t?Math.round(e.h)-h*n:Math.round(e.h)+h*n:r=t?Math.round(e.h)+h*n:Math.round(e.h)-h*n,r<0?r+=360:r>=360&&(r-=360),r}function P(e,n,t){if(e.h===0&&e.s===0)return e.s;var r;return t?r=e.s-F*n:n===Z?r=e.s+F:r=e.s+le*n,r>1&&(r=1),t&&n===z&&r>.1&&(r=.1),r<.06&&(r=.06),Number(r.toFixed(2))}function D(e,n,t){var r;return t?r=e.v+ue*n:r=e.v-de*n,r>1&&(r=1),Number(r.toFixed(2))}function H(e){for(var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=[],r=f(e),a=z;a>0;a-=1){var o=L(r),c=x(f({h:R(o,a,!0),s:P(o,a,!0),v:D(o,a,!0)}));t.push(c)}t.push(x(r));for(var s=1;s<=Z;s+=1){var l=L(r),u=x(f({h:R(l,s),s:P(l,s),v:D(l,s)}));t.push(u)}return n.theme==="dark"?fe.map(function(p){var m=p.index,g=p.opacity,v=x(pe(f(n.backgroundColor||"#141414"),f(t[m]),g*100));return v}):t}var E={red:"#F5222D",volcano:"#FA541C",orange:"#FA8C16",gold:"#FAAD14",yellow:"#FADB14",lime:"#A0D911",green:"#52C41A",cyan:"#13C2C2",blue:"#1677FF",geekblue:"#2F54EB",purple:"#722ED1",magenta:"#EB2F96",grey:"#666666"},N={},k={};Object.keys(E).forEach(function(e){N[e]=H(E[e]),N[e].primary=N[e][5],k[e]=H(E[e],{theme:"dark",backgroundColor:"#141414"}),k[e].primary=k[e][5]});var M={},me=function(n){};function ge(e,n){}function ve(e,n){}function he(){M={}}function K(e,n,t){!n&&!M[t]&&(e(!1,t),M[t]=!0)}function b(e,n){K(ge,e,n)}function xe(e,n){K(ve,e,n)}b.preMessage=me;b.resetWarned=he;b.noteOnce=xe;function Ce(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function ye(e,n){if(!e)return!1;if(e.contains)return e.contains(n);for(var t=n;t;){if(t===e)return!0;t=t.parentNode}return!1}var _="data-rc-order",be="rc-util-key",B=new Map;function Q(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.mark;return n?n.startsWith("data-")?n:"data-".concat(n):be}function T(e){if(e.attachTo)return e.attachTo;var n=document.querySelector("head");return n||document.body}function we(e){return e==="queue"?"prependQueue":e?"prepend":"append"}function Y(e){return Array.from((B.get(e)||e).children).filter(function(n){return n.tagName==="STYLE"})}function G(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!Ce())return null;var t=n.csp,r=n.prepend,a=document.createElement("style");a.setAttribute(_,we(r)),t!=null&&t.nonce&&(a.nonce=t==null?void 0:t.nonce),a.innerHTML=e;var o=T(n),c=o.firstChild;if(r){if(r==="queue"){var s=Y(o).filter(function(l){return["prepend","prependQueue"].includes(l.getAttribute(_))});if(s.length)return o.insertBefore(a,s[s.length-1].nextSibling),a}o.insertBefore(a,c)}else o.appendChild(a);return a}function Se(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=T(n);return Y(t).find(function(r){return r.getAttribute(Q(n))===e})}function Ee(e,n){var t=B.get(e);if(!t||!ye(document,t)){var r=G("",n),a=r.parentNode;B.set(e,a),e.removeChild(r)}}function Ne(e,n){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=T(t);Ee(r,t);var a=Se(n,t);if(a){var o,c;if((o=t.csp)!==null&&o!==void 0&&o.nonce&&a.nonce!==((c=t.csp)===null||c===void 0?void 0:c.nonce)){var s;a.nonce=(s=t.csp)===null||s===void 0?void 0:s.nonce}return a.innerHTML!==e&&(a.innerHTML=e),a}var l=G(e,t);return l.setAttribute(Q(t),n),l}function j(e,n){b(e,"[@ant-design/icons] ".concat(n))}var ke={width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true",focusable:"false"},Me=`
.anticon {
  display: inline-block;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`,Be=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Me,t=i.exports.useContext(q),r=t.csp,a=t.prefixCls,o=n;a&&(o=o.replace(/anticon/g,a)),i.exports.useEffect(function(){Ne(o,"@ant-design-icons",{prepend:!0,csp:r})},[])},Ae=["className","component","viewBox","spin","rotate","tabIndex","onClick","children"],U=i.exports.forwardRef(function(e,n){var t=e.className,r=e.component,a=e.viewBox,o=e.spin,c=e.rotate,s=e.tabIndex,l=e.onClick,u=e.children,p=ie(e,Ae);j(Boolean(r||u),"Should have `component` prop or `children`."),Be();var m=i.exports.useContext(q),g=m.prefixCls,v=g===void 0?"anticon":g,$=m.rootClassName,J=I($,v,t),X=I(se({},"".concat(v,"-spin"),!!o)),ee=c?{msTransform:"rotate(".concat(c,"deg)"),transform:"rotate(".concat(c,"deg)")}:void 0,w=d(d({},ke),{},{className:X,style:ee,viewBox:a});a||delete w.viewBox;var ne=function(){return r?i.exports.createElement(r,d({},w),u):u?(j(Boolean(a)||i.exports.Children.count(u)===1&&i.exports.isValidElement(u)&&i.exports.Children.only(u).type==="use","Make sure that you provide correct `viewBox` prop (default `0 0 1024 1024`) to the icon."),i.exports.createElement("svg",d(d({},w),{},{viewBox:a}),u)):null},S=s;return S===void 0&&l&&(S=-1),i.exports.createElement("span",d(d({role:"img"},p),{},{ref:n,tabIndex:S,onClick:l,className:J}),ne())});U.displayName="AntdIcon";const Te=U,Ie=e=>i.exports.createElement("svg",{width:36,height:36,viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},i.exports.createElement("g",{clipPath:"url(#clip0_2508_65655)"},i.exports.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M18 32C25.732 32 32 25.732 32 18C32 10.268 25.732 4 18 4C10.268 4 4 10.268 4 18C4 25.732 10.268 32 18 32ZM18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36Z",fill:"#F3F4F6"}),i.exports.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M18 3.99186C19.8396 3.99186 21.6611 4.35419 23.3607 5.05817C25.0602 5.76214 26.6045 6.79397 27.9053 8.09475C29.206 9.39552 30.2379 10.9398 30.9418 12.6393C31.6458 14.3389 32.0081 16.1604 32.0081 18H36C36 15.9538 35.6511 13.9249 34.9706 12C34.865 11.7013 34.7514 11.4051 34.6298 11.1117C33.7252 8.92784 32.3994 6.94353 30.7279 5.27208C29.0565 3.60062 27.0722 2.27475 24.8883 1.37017C24.5949 1.24865 24.2987 1.13505 24 1.02944C22.0751 0.348893 20.0462 0 18 0V3.99186Z",fill:"#14B8A6"})),i.exports.createElement("defs",null,i.exports.createElement("clipPath",{id:"clip0_2508_65655"},i.exports.createElement("rect",{width:36,height:36,rx:18,fill:"white"})))),Fe=e=>y(Ie,{...e}),A=({show:e})=>{const[n,t]=i.exports.useState("hidden"),[r,a]=i.exports.useState("opacity-0");return i.exports.useEffect(()=>{let o;return e?t("block"):(a("opacity-0"),o=setTimeout(()=>{t("hidden")},500)),()=>{o&&clearTimeout(o)}},[e]),i.exports.useEffect(()=>{let o;return n==="block"&&(o=setTimeout(()=>{a("opacity-100")},0)),()=>{o&&clearTimeout(o)}},[n]),y("div",{className:`${n} ${r} transition-opacity duration-500 z-30 absolute left-0 top-0`,children:re("div",{className:"w-screen h-screen bg-secondary flex flex-col justify-center items-center",children:[y(te,{className:"mb-18"}),y(Te,{spin:!0,component:Fe,style:{fontSize:"36px"}})]})})},Le=A;try{A.displayName="Loading",A.__docgenInfo={description:"",displayName:"Loading",props:{show:{defaultValue:null,description:"",name:"show",required:!0,type:{name:"boolean"}}}}}catch{}const qe={title:"Components/Loading",component:Le,argTypes:{show:{control:"boolean",description:"Whether the loading component is show or not.",defaultValue:{summary:!1},table:{type:{summary:"boolean"}}}}},C={args:{show:!1}};var O,V,W;C.parameters={...C.parameters,docs:{...(O=C.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    show: false
  }
}`,...(W=(V=C.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};const ze=["Basic"];export{C as Basic,ze as __namedExportsOrder,qe as default};
//# sourceMappingURL=Loading.stories.bd9fa42c.js.map
