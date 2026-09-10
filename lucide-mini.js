(()=>{var u={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var T=([e,a,t])=>{let r=document.createElementNS("http://www.w3.org/2000/svg",e);return Object.keys(a).forEach(o=>{r.setAttribute(o,String(a[o]))}),t?.length&&t.forEach(o=>{let s=T(o);r.appendChild(s)}),r},q=(e,a={})=>{let r={...u,...a};return T(["svg",r,e])};var b=(...e)=>e.filter((a,t,r)=>!!a&&a.trim()!==""&&r.indexOf(a)===t).join(" ").trim();var U=e=>{for(let a in e)if(a.startsWith("aria-")||a==="role"||a==="title")return!0;return!1};var v=e=>{let a="",t=!1;for(let r of e){if(r==="-"||r==="_"||r<=" "){t=a.length>0;continue}a.length===0?a+=r.toLowerCase():a+=t?r.toUpperCase():r,t=!1}return a};var O=e=>{let a=v(e);return a.charAt(0).toUpperCase()+a.slice(1)};var z=e=>Array.from(e.attributes).reduce((a,t)=>(a[t.name]=t.value,a),{}),H=e=>typeof e=="string"?e:!e||!e.class?"":e.class&&typeof e.class=="string"?e.class.split(" "):e.class&&Array.isArray(e.class)?e.class:"",c=(e,{nameAttr:a,icons:t,attrs:r})=>{let o=e.getAttribute(a);if(o==null)return;let s=O(o),f=t[s];if(!f)return console.warn(`${e.outerHTML} icon name was not found in the provided icons object.`);let l=z(e),E=U(l)?{}:{"aria-hidden":"true"},y={...u,"data-lucide":o,...E,...r,...l},V=H(l),W=H(r),R=b("lucide",`lucide-${o}`,...V,...W);R&&Object.assign(y,{class:R});let I=q(f,y);return e.parentNode?.replaceChild(I,e)};var C=[["path",{d:"m12 19-7-7 7-7"}],["path",{d:"M19 12H5"}]];var h=[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"}],["path",{d:"m3.3 7 8.7 5 8.7-5"}],["path",{d:"M12 22V12"}]];var d=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m16 9-5.5 5.5L8 12"}]];var p=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M8 12h8"}],["path",{d:"M12 8v8"}]];var S=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5"}],["path",{d:"M3 12A9 3 0 0 0 21 12"}]];var g=[["path",{d:"M12 15V3"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}],["path",{d:"m7 10 5 5 5-5"}]];var m=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"}]];var w=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1"}]];var k=[["path",{d:"M12 22v-9"}],["path",{d:"M15.17 2.21a1.67 1.67 0 0 1 1.63 0L21 4.57a1.93 1.93 0 0 1 0 3.36L8.82 14.79a1.655 1.655 0 0 1-1.64 0L3 12.43a1.93 1.93 0 0 1 0-3.36z"}],["path",{d:"M20 13v3.87a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13"}],["path",{d:"M21 12.43a1.93 1.93 0 0 0 0-3.36L8.83 2.2a1.64 1.64 0 0 0-1.63 0L3 4.57a1.93 1.93 0 0 0 0 3.36l12.18 6.86a1.636 1.636 0 0 0 1.63 0z"}]];var P=[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]];var x=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}],["path",{d:"M3 3v5h5"}],["path",{d:"M12 7v5l4 2"}]];var A=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7"}]];var M=[["path",{d:"m21 21-4.34-4.34"}],["circle",{cx:"11",cy:"11",r:"8"}]];var B=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"}],["circle",{cx:"12",cy:"12",r:"3"}]];var i=[["path",{d:"M10 11v6"}],["path",{d:"M14 11v6"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"}],["path",{d:"M3 6h18"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}]];var n=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}],["path",{d:"M12 9v4"}],["path",{d:"M12 17h.01"}]];var D=[["path",{d:"M12 3v12"}],["path",{d:"m17 8-5-5-5 5"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}]];var F=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];var L=({icons:e={},nameAttr:a="data-lucide",attrs:t={},root:r=document,inTemplates:o}={})=>{if(!Object.values(e).length)throw new Error(`Please provide an icons object.
If you want to use all the icons you can import it like:
 \`import { createIcons, icons } from 'lucide';
lucide.createIcons({icons});\``);if(typeof r>"u")throw new Error("`createIcons()` only works in a browser environment.");if(Array.from(r.querySelectorAll(`[${a}]`)).forEach(f=>c(f,{nameAttr:a,icons:e,attrs:t})),o&&Array.from(r.querySelectorAll("template")).forEach(l=>L({icons:e,nameAttr:a,attrs:t,root:l.content,inTemplates:o})),a==="data-lucide"){let f=r.querySelectorAll("[icon-name]");f.length>0&&(console.warn("[Lucide] Some icons were found with the now deprecated icon-name attribute. These will still be replaced for backwards compatibility, but will no longer be supported in v1.0 and you should switch to data-lucide"),Array.from(f).forEach(l=>c(l,{nameAttr:"icon-name",icons:e,attrs:t})))}};var G={AlertTriangle:n,ArrowLeft:C,Box:h,CheckCircle2:d,Database:S,Download:g,History:x,Layers:m,LayoutGrid:w,PackageOpen:k,Plus:P,PlusCircle:p,Save:A,Search:M,Settings:B,Trash2:i,Upload:D,X:F};window.lucide={icons:G,createIcons:(e={})=>L({icons:G,...e})};})();
/*! Bundled license information:

lucide/dist/esm/defaultAttributes.mjs:
lucide/dist/esm/createElement.mjs:
lucide/dist/esm/shared/src/utils/mergeClasses.mjs:
lucide/dist/esm/shared/src/utils/hasA11yProp.mjs:
lucide/dist/esm/shared/src/utils/toCamelCase.mjs:
lucide/dist/esm/shared/src/utils/toPascalCase.mjs:
lucide/dist/esm/replaceElement.mjs:
lucide/dist/esm/icons/arrow-left.mjs:
lucide/dist/esm/icons/box.mjs:
lucide/dist/esm/icons/circle-check.mjs:
lucide/dist/esm/icons/circle-plus.mjs:
lucide/dist/esm/icons/database.mjs:
lucide/dist/esm/icons/download.mjs:
lucide/dist/esm/icons/layers.mjs:
lucide/dist/esm/icons/layout-grid.mjs:
lucide/dist/esm/icons/package-open.mjs:
lucide/dist/esm/icons/plus.mjs:
lucide/dist/esm/icons/rotate-ccw-clock.mjs:
lucide/dist/esm/icons/save.mjs:
lucide/dist/esm/icons/search.mjs:
lucide/dist/esm/icons/settings.mjs:
lucide/dist/esm/icons/trash.mjs:
lucide/dist/esm/icons/triangle-alert.mjs:
lucide/dist/esm/icons/upload.mjs:
lucide/dist/esm/icons/x.mjs:
lucide/dist/esm/lucide.mjs:
  (**
   * @license lucide v1.44.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)
*/
