(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[340],{1016:(e,t,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/api_spesifikasjon",function(){return n(1990)}])},1990:(e,t,n)=>{"use strict";n.r(t),n.d(t,{__N_SSG:()=>e9,default:()=>te,useTOC:()=>e7});var r=n(4848),i=n(7849),s=n(800),a=n(7204),o=n(4476);let l=o.z.object({name:o.z.string().optional(),url:o.z.string().url().optional(),email:o.z.string().email().optional()}),p=o.z.object({name:o.z.string(),identifier:o.z.string().optional(),url:o.z.string().url().optional()}),d=o.z.object({title:o.z.string(),summary:o.z.string().optional(),description:o.z.string().optional(),termsOfService:o.z.string().url().optional(),contact:l.optional(),license:p.optional(),version:o.z.string()}),c=o.z.object({enum:o.z.array(o.z.string()).nonempty().optional(),default:o.z.string(),description:o.z.string().optional()}),m=o.z.object({url:o.z.string().url(),description:o.z.string().optional(),variables:o.z.record(o.z.string(),c).optional()}),g=o.z.object({description:o.z.string().optional(),url:o.z.string().url()}),u=o.z.enum(["path","query","header","cookie"]),_=o.z.object({type:o.z.literal("boolean"),enum:o.z.array(o.z.any()).nonempty().optional(),const:o.z.any().optional()}),h=o.z.object({type:o.z.literal("null"),enum:o.z.array(o.z.any()).nonempty().optional(),const:o.z.any().optional()}),y=o.z.object({type:o.z.literal("number"),multipleOf:o.z.number().positive().optional(),maximum:o.z.number().optional(),exclusiveMaximum:o.z.boolean().optional(),minimum:o.z.number().optional(),exclusiveMinimum:o.z.boolean().optional(),enum:o.z.array(o.z.any()).nonempty().optional(),const:o.z.any().optional()}),k=o.z.object({type:o.z.literal("string"),maxLength:o.z.number().nonnegative().optional(),minLength:o.z.number().nonnegative().optional(),pattern:o.z.string().optional(),format:o.z.enum(["date-time","date","time","duration","email","hostname","ipv4","ipv6","uri","uri-reference","uuid","regex"]).optional(),enum:o.z.array(o.z.any()).nonempty().optional(),const:o.z.any().optional()}),b=o.z.object({type:o.z.literal("array"),items:o.z.array(o.z.any()).optional(),maxItems:o.z.number().nonnegative().optional(),minItems:o.z.number().nonnegative().optional(),uniqueItems:o.z.boolean().optional(),maxContains:o.z.number().nonnegative().optional(),minContains:o.z.number().nonnegative().optional(),enum:o.z.array(o.z.any()).nonempty().optional(),const:o.z.any().optional()}),E=o.z.object({type:o.z.literal("object"),properties:o.z.record(o.z.string(),o.z.any()).optional(),maxProperties:o.z.number().nonnegative().optional(),minProperties:o.z.number().nonnegative().optional(),required:o.z.array(o.z.string()).optional(),dependentRequired:o.z.record(o.z.string(),o.z.array(o.z.string())).optional(),enum:o.z.array(o.z.any()).nonempty().optional(),const:o.z.any().optional(),oneOf:o.z.array(o.z.any()).optional(),allOf:o.z.array(o.z.any()).optional()}),v=o.z.discriminatedUnion("type",[y,k,b,E,_,h]),j=o.z.object({summary:o.z.string().optional(),description:o.z.string().optional(),value:o.z.any().optional(),externalValue:o.z.string().url().optional()}),z=o.z.object({$ref:o.z.string(),summary:o.z.string().optional(),description:o.z.string().optional()}),I=o.z.object({name:o.z.string(),in:u,description:o.z.string().optional(),required:o.z.boolean().optional().default(!1),deprecated:o.z.boolean().optional().default(!1)}),f=I.merge(o.z.object({style:o.z.string().optional(),explode:o.z.boolean().optional(),allowReserved:o.z.boolean().optional(),schema:v,example:o.z.any().optional(),examples:o.z.record(o.z.string(),j.or(z)).optional()})),x=I.omit({name:!0,in:!0}).merge(o.z.object({content:o.z.record(o.z.string(),o.z.any()).optional(),schema:v.optional()})),N=o.z.object({contentType:o.z.string().optional(),headers:o.z.record(o.z.string(),x.or(z)).optional()}),R=o.z.object({schema:v.or(z).optional(),example:o.z.any().optional(),examples:o.z.record(o.z.string(),j.or(z)).optional(),encoding:o.z.record(o.z.string(),N).optional()}),T=I.merge(o.z.object({content:o.z.record(o.z.string(),R)})),S=o.z.union([f,T]),A=o.z.object({description:o.z.string().optional(),content:o.z.record(o.z.string(),R),required:o.z.boolean().optional().default(!1)}),L=o.z.object({operationRef:o.z.string().url().optional(),operationId:o.z.string().optional(),parameters:o.z.record(o.z.string(),o.z.any()).optional(),requestBody:o.z.any().optional(),description:o.z.string().optional(),server:m.optional()}),O=o.z.object({description:o.z.string(),headers:o.z.record(o.z.string(),x.or(z)).optional(),content:o.z.record(o.z.string(),R).optional(),links:o.z.record(o.z.string(),L.or(z)).optional()}),G=o.z.record(o.z.union([o.z.literal("default"),o.z.string()]),O.or(z)),P=o.z.record(o.z.string(),o.z.any()),D=o.z.record(o.z.string(),o.z.array(o.z.string())),V=o.z.object({tags:o.z.array(o.z.string()).optional(),summary:o.z.string().optional(),description:o.z.string().optional(),externalDocs:g.optional(),operationId:o.z.string().optional(),parameters:o.z.array(S.or(z)).optional(),requestBody:A.or(z).optional(),responses:G.optional(),callbacks:o.z.record(o.z.string(),P.or(z)).optional(),deprecated:o.z.boolean().optional().default(!1),security:o.z.array(D).optional(),servers:o.z.array(m).optional()}),B=o.z.object({$ref:o.z.string().url().optional(),summary:o.z.string().optional(),description:o.z.string().optional(),get:V.optional(),put:V.optional(),post:V.optional(),delete:V.optional(),options:V.optional(),head:V.optional(),patch:V.optional(),trace:V.optional(),servers:o.z.array(m).optional(),parameters:o.z.array(S.or(z)).optional()}),w=o.z.record(o.z.string(),B),q=o.z.object({schemas:o.z.record(o.z.string(),v).optional(),responses:o.z.record(o.z.string(),O.or(z)).optional(),parameters:o.z.record(o.z.string(),S.or(z)).optional(),examples:o.z.record(o.z.string(),j.or(z)).optional(),requestBodies:o.z.record(o.z.string(),A.or(z)).optional(),headers:o.z.record(o.z.string(),x.or(z)).optional(),securitySchemes:o.z.record(o.z.string(),o.z.any().or(z)).optional(),links:o.z.record(o.z.string(),L.or(z)).optional(),callbacks:o.z.record(o.z.string(),P.or(z)).optional(),pathItems:o.z.record(o.z.string(),B).optional()}),U=o.z.object({name:o.z.string(),description:o.z.string().optional(),externalDocs:g.optional()}),K=o.z.object({openapi:o.z.literal("3.1.1"),info:d,servers:o.z.array(m).optional(),paths:w.optional(),webhooks:o.z.record(o.z.string(),B).optional(),components:q.optional(),security:o.z.array(D).optional(),tags:o.z.array(U).optional(),externalDocs:g.optional()});var F=n(6540),M=n(4926),$=n.n(M);let C=()=>(0,F.useMemo)(()=>K.parse($()),[$()]),Y=e=>Object.hasOwn(e,"$ref"),H=e=>!Y(e),Z=(e,t)=>e.split("/").slice(1).reduce((e,t)=>e[t],t),J=e=>e.split("/").slice(-1).pop();var Q=n(4164),X=n(7457),W=n.n(X);let ee=e=>{let{className:t,...n}=e;return(0,r.jsx)(a.kZ,{className:(0,Q.A)(t,W().required),...n,children:"P\xe5krevd"})};var et=n(5846),en=n.n(et),er=n(2637),ei=n.n(er);let es=e=>{let{schema:t}=e;return t.example?(0,r.jsxs)("pre",{className:ei().container,children:["Eksempel: ",(0,r.jsx)("code",{className:ei().example,children:t.example})]}):null};var ea=n(1084),eo=n.n(ea);let el=e=>{let{children:t,required:n}=e;return(0,r.jsxs)("div",{children:[(0,r.jsx)("pre",{className:eo().key,children:t}),n&&(0,r.jsx)(ee,{})]})};var ep=n(2616),ed=n.n(ep);let ec=e=>{let{values:t}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.hC,{children:"En av:"}),(0,r.jsx)("ul",{className:ed().enumList,children:t.map(e=>(0,r.jsx)("li",{className:ed().enumValue,children:(0,r.jsx)("pre",{className:ed().pre,children:e})},e))})]})};var em=n(4808),eg=n.n(em);let eu=e=>{let{minLength:t,maxLength:n}=e;return t||n?t===n?"".concat(t," tegn"):t&&!n?">= ".concat(t," tegn"):!t&&n?"".concat(n," >= tegn"):"[".concat(t," ... ").concat(n,"] tegn"):null},e_=e=>{let{minimum:t,exclusiveMinimum:n,maximum:r,exclusiveMaximum:i}=e;return t||r?t&&!r?">".concat(n?"":"="," ").concat(t):!t&&r?"".concat(r," >").concat(i?"":"="):"[".concat(t+(n?1:0)," ... ").concat(r-(i?1:0),"]"):null},eh=e=>{switch(e.type){case"integer":return e_(e);case"string":return eu(e)}},ey=e=>{let{name:t,schema:n,required:i}=e;return(0,r.jsxs)("li",{className:eg().listItem,children:[(0,r.jsx)(el,{required:i,children:t}),(0,r.jsxs)("div",{className:eg().value,children:[(0,r.jsxs)("pre",{className:eg().pre,children:[n.type,!!n.format&&" (".concat(n.format,")")," ",eh(n)&&(0,r.jsx)("code",{className:eg().example,children:eh(n)})]}),(0,r.jsx)(es,{schema:n}),n.description&&(0,r.jsx)(a.hC,{children:n.description}),n.enum&&(0,r.jsx)(ec,{values:n.enum}),(0,r.jsx)("hr",{className:eg().separator})]})]})};var ek=n(2009),eb=n(1588),eE=n.n(eb);let ev=e=>{let{expanded:t,expand:n,onClick:i,children:s,...a}=e;return(0,r.jsxs)("button",{className:(0,Q.A)(eE().expandButton),onClick:e=>{n(),null==i||i(e)},...a,children:[s,(0,r.jsx)(ek.vKP,{fontSize:20,className:(0,Q.A)(eE().expandIcon,t&&eE().expanded),fontWeight:"700"})]})},ej=e=>{let{keyName:t,typeName:n,schema:i,required:s,doc:o}=e,[l,p]=(0,F.useState)(!1);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("li",{className:eg().listItem,children:[(0,r.jsx)(el,{required:s,children:(0,r.jsx)(ev,{expanded:l,expand:()=>{p(e=>!e)},children:t})}),(0,r.jsxs)("div",{className:eg().value,children:[(0,r.jsxs)("pre",{className:eg().pre,children:[i.type," ",n&&"(".concat(n,")")]}),i.description&&(0,r.jsx)(a.Pq,{children:i.description}),!l&&(0,r.jsx)("hr",{className:eg().separator})]})]}),l&&(0,r.jsx)("div",{className:eg().expandedContent,children:(0,r.jsx)(eT,{properties:i.properties,required:i.required,doc:o})})]})},ez=e=>{var t;let{name:n,schema:i,required:s,doc:o}=e,[l,p]=(0,F.useState)(!1),d=Y(i)?Z(i.$ref,o):Y(i.items)?Z(i.items.$ref,o):i.items,c=!Y(i)&&Y(i.items)?J(i.items.$ref):null,m=null!==(t=i.description)&&void 0!==t?t:d.description;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("li",{className:eg().listItem,children:[(0,r.jsx)(el,{required:s,children:(0,r.jsx)(ev,{expanded:l,expand:()=>{p(e=>!e)},children:n})}),(0,r.jsxs)("div",{className:eg().value,children:[(0,r.jsxs)("pre",{className:eg().pre,children:["array ",c&&"[".concat(c,"]")]}),m&&(0,r.jsx)(a.Pq,{children:m}),!l&&(0,r.jsx)("hr",{className:eg().separator})]})]}),l&&(0,r.jsx)("div",{className:eg().expandedContent,children:(0,r.jsx)(eT,{properties:d.properties,required:d.required,doc:o})})]})};var eI=n(8272);let ef=e=>{let{name:t,properties:n,required:i,doc:s}=e,o=n.map(e=>({...Y(e)?Z(e.$ref,s):e,name:Y(e)?J(e.$ref):""}));return(0,r.jsxs)("li",{className:eg().listItem,children:[(0,r.jsx)(el,{required:i,children:t}),(0,r.jsx)("div",{className:eg().value,children:(0,r.jsxs)("div",{className:eg().oneOfTabs,children:[(0,r.jsx)(a.hC,{children:"En av:"}),(0,r.jsx)(eI.t,{tabClassName:eg().tab,items:o.map(e=>e.name),children:o.map(e=>{var t;return(0,r.jsx)(eI.t.Tab,{children:(0,r.jsx)(eT,{properties:null!==(t=e.properties)&&void 0!==t?t:{},required:e.required,doc:s,allOf:e.allOf})},e.name)})})]})})]})};var ex=n(98),eN=n.n(ex);let eR=(e,t)=>t.reduce((e,t)=>({...e,...t.properties}),e),eT=e=>{let{required:t,properties:n,doc:i,allOf:s}=e;if(!n)return null;let a=s?eR(null!=n?n:{},null!=s?s:[]):n;return(0,r.jsx)("ul",{className:eN().objectView,children:Object.entries(a).map(e=>{var n,s,a,o;let[l,p]=e,d=Y(p)?Z(p.$ref,i):p;switch(d.type){case"object":return(0,r.jsx)(ej,{keyName:l,typeName:Y(p)?J(p.$ref):void 0,schema:d,required:null!==(n=null==t?void 0:t.includes(l))&&void 0!==n&&n,doc:i},l);case"array":return(0,r.jsx)(ez,{name:l,schema:d,required:null!==(s=null==t?void 0:t.includes(l))&&void 0!==s&&s,doc:i},l)}return d.oneOf?(0,r.jsx)(ef,{name:l,properties:d.oneOf,required:null!==(a=null==t?void 0:t.includes(l))&&void 0!==a&&a,doc:i},l):(0,r.jsx)(ey,{name:l,schema:d,required:null!==(o=null==t?void 0:t.includes(l))&&void 0!==o&&o},l)})})};var eS=n(7458),eA=n.n(eS);let eL=e=>{var t;let{schema:n,doc:i}=e,s=Y(n)?Z(n.$ref,i):n,o=null!==(t=n.description)&&void 0!==t?t:s.description;return(0,r.jsxs)("div",{className:eA().value,children:[o&&(0,r.jsx)(a.Pq,{children:o}),s.enum&&(0,r.jsx)(ec,{values:s.enum})]})},eO=e=>{let{schema:t,doc:n}=e;switch(t.type){case"null":case"number":case"boolean":case"array":case"string":case"integer":return(0,r.jsx)(eL,{schema:t,doc:n});case"object":return(0,r.jsx)(eT,{required:t.required,properties:t.properties,doc:n})}},eG=e=>{let{requestBody:t,doc:n}=e,i=Y(t)?Z(t.$ref,n):t.content,s=Y(t)?i.required:t.required;return(0,r.jsx)(r.Fragment,{children:Object.entries(i).map(e=>{let[t,i]=e,o=Y(i.schema)?Z(i.schema.$ref,n):i.schema;return(0,r.jsxs)("div",{className:en().requestBody,children:[(0,r.jsxs)("div",{className:en().heading,children:[(0,r.jsxs)("div",{children:[(0,r.jsx)(a.DZ,{level:"3",size:"small",children:"Request body:"}),(0,r.jsx)("pre",{className:en().mediaType,children:t})]}),s&&(0,r.jsx)(ee,{})]}),o&&(0,r.jsx)(eO,{schema:o,doc:n})]},t)})})};var eP=n(6269),eD=n.n(eP);let eV=e=>{let{parameters:t,doc:n}=e,i=t.filter(H).filter(H);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.DZ,{className:eD().title,level:"3",size:"small",children:"Path-parametre"}),i.map(e=>{var t;let i=e.schema&&Y(e.schema)?Z(e.schema.$ref,n):e.schema;return(0,r.jsx)(ey,{name:e.name,schema:i,required:null!==(t=e.required)&&void 0!==t&&t},e.name)})]})};var eB=n(4454),ew=n.n(eB);let eq=e=>{switch(e[0]){case"4":return"error";case"5":return"neutral";default:return"success"}},eU=e=>{let{httpStatusCode:t,response:n,doc:i}=e,s=n.content,[o,l]=(0,F.useState)(!1);return(0,r.jsxs)("div",{className:(0,Q.A)(ew().response,ew()[eq(t)]),children:[(0,r.jsxs)("button",{className:(0,Q.A)(ew().header,ew().expandButton,o&&ew().expanded),onClick:()=>{l(e=>!e)},children:[t,": ",n.description,(0,r.jsx)(ek.vKP,{className:ew().icon,fontSize:20,fontWeight:"700"})]}),o&&(0,r.jsx)("div",{className:ew().content,children:Object.entries(s).map(e=>{let[t,n]=e,s=Y(n.schema)?Z(n.schema.$ref,i):n.schema;return(0,r.jsxs)("div",{children:[(0,r.jsx)(a.kZ,{className:ew().mediaType,children:t}),(0,r.jsx)(eO,{schema:s,doc:i})]},t)})})]})},eK=e=>{let{httpStatusCode:t,response:n,doc:i}=e;return n.content?(0,r.jsx)(eU,{httpStatusCode:t,response:n,doc:i}):(0,r.jsx)("div",{className:(0,Q.A)(ew().response,ew()[eq(t)]),children:(0,r.jsxs)("span",{className:ew().header,children:[t,": ",n.description]})})};var eF=n(8387),eM=n.n(eF);let e$=e=>{let{responses:t,doc:n}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.DZ,{className:eM().title,level:"3",size:"small",children:"Respons"}),(0,r.jsx)("div",{className:eM().responses,children:Object.entries(t).map(e=>{let[t,i]=e,s=Y(i)?Z(i.$ref,n):i;return(0,r.jsx)(eK,{httpStatusCode:t,response:s,doc:n},t)})})]})};var eC=n(8941),eY=n(4969),eH=n.n(eY);let eZ=e=>{let{className:t,children:n,size:i="small",...s}=e;return(0,r.jsx)("span",{className:(0,Q.A)(eH().tag,eH()[i],t),children:(0,r.jsx)(eC.P,{...s,children:n})})};var eJ=n(2843),eQ=n.n(eJ),eX=function(e){return e.Get="get",e.Post="post",e.Put="put",e.Patch="patch",e.Delete="delete",e.Head="head",e.Options="options",e.Trace="trace",e}(eX||{});let eW=e=>{switch(e){case"trace":case"options":case"head":case"get":return"info";case"patch":case"put":case"post":return"warning";case"delete":return"error"}},e0=e=>Object.entries(e).filter(e=>{let[t,n]=e;return!!n}).flatMap(e=>{let[t,n]=e;return Object.values(eX).filter(e=>Object.hasOwn(n,e)).map(e=>({method:e,path:t,operationId:n[e].operationId,summary:n[e].summary}))}),e2=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:100,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"active";(0,F.useEffect)(()=>{let i=i=>{var s;let a=i.currentTarget,o=a.scrollY+n,l=a.scrollY+a.innerHeight===document.documentElement.offsetHeight?e.slice(-1).pop():null!==(s=e.findLast(e=>e.offsetTop<o))&&void 0!==s?s:e[0];for(let n of e)n.id!==l.id&&t[n.id].classList.remove(r);t[l.id].classList.add(r)};return window.addEventListener("scroll",i),()=>{window.removeEventListener("scroll",i)}},[e,t,n,r])},e1=e=>{var t;let{doc:n}=e,i=null!==(t=(0,F.useMemo)(()=>n.paths&&e0(n.paths),[n]))&&void 0!==t?t:[],s=(0,F.useRef)({}),[a,o]=(0,F.useState)([]);(0,F.useEffect)(()=>{o(i.map(e=>document.getElementById(e.operationId)).filter(e=>null!==e))},[i]),e2(a,s.current);let l=(0,F.useCallback)(e=>t=>t&&(s.current[e.operationId]=t),[s]);return(0,r.jsx)("div",{children:(0,r.jsx)("nav",{className:eQ().nav,children:i.map(e=>(0,r.jsxs)("a",{className:eQ().link,href:"#".concat(e.operationId),ref:l(e),children:[(0,r.jsx)(eZ,{size:"small",type:eW(e.method),children:e.method}),e.summary]},"".concat(e.method,"-").concat(e.operationId)))})})};var e4=n(2223),e3=n.n(e4),e8=function(e){return e.Get="get",e.Post="post",e.Put="put",e.Patch="patch",e.Delete="delete",e.Head="head",e.Options="options",e.Trace="trace",e}(e8||{});let e6=e=>{switch(e){case"trace":case"options":case"head":case"get":return"info";case"patch":case"put":case"post":return"warning";case"delete":return"error"}},e5=()=>{let e=C();return(0,r.jsxs)("div",{className:e3().container,children:[(0,r.jsx)(e1,{doc:e}),(0,r.jsxs)("div",{children:[(0,r.jsx)(a.DZ,{className:e3().title,level:"1",size:"large",children:e.info.title}),e.paths&&Object.entries(e.paths).map(t=>{let[n,i]=t;return i?(0,r.jsx)("div",{children:Object.values(e8).filter(e=>Object.hasOwn(i,e)).map(t=>{let s=i[t];return(0,r.jsxs)("div",{className:e3().operation,children:[(0,r.jsxs)(a.DZ,{className:e3().subTitle,level:"2",size:"medium",children:[s.summary,(0,r.jsx)("a",{id:s.operationId,className:e3().scrollAnchor})]}),(0,r.jsxs)("div",{className:e3().path,children:[(0,r.jsx)(eZ,{className:e3().method,type:e6(t),emoji:!0,children:t}),(0,r.jsx)("pre",{children:n}),(0,r.jsx)("a",{className:e3().operationAnchor,href:"#".concat(s.operationId)})]}),(0,r.jsx)(a.Pq,{className:e3().description,children:s.description}),s.parameters&&(0,r.jsx)(eV,{parameters:s.parameters,doc:e}),s.requestBody&&(0,r.jsx)(eG,{requestBody:s.requestBody,doc:e}),s.responses&&(0,r.jsx)(e$,{responses:s.responses,doc:e})]},t)})},n):null})]})]})};var e9=!0;function e7(e){return[]}let te=(0,i.e)(function(e){return(0,r.jsx)(e5,{})},"/api_spesifikasjon",{filePath:"pages/api_spesifikasjon.mdx",pageMap:s.O,frontMatter:{title:"API-spesifikasjon"},title:"API-spesifikasjon"},"undefined"==typeof RemoteContent?e7:RemoteContent.useTOC)},4969:e=>{e.exports={tag:"Tag_tag__GpZWP",small:"Tag_small__1kyuC",medium:"Tag_medium__F9DYz"}},2616:e=>{e.exports={enumList:"EnumView_enumList__j1g_y",enumValue:"EnumView_enumValue__M2Sg_",pre:"EnumView_pre__y2NmM"}},2637:e=>{e.exports={example:"ExampleView_example__u5i0_",container:"ExampleView_container__e2VZh"}},1588:e=>{e.exports={expandButton:"ExpandButton_expandButton__HH6sh",expandIcon:"ExpandButton_expandIcon__8uNAb",expanded:"ExpandButton_expanded__rRsc8"}},1084:e=>{e.exports={key:"KeyView_key__de3fI"}},2843:e=>{e.exports={nav:"Nav_nav__k8XE8",link:"Nav_link__taMQA"}},98:e=>{e.exports={objectView:"ObjectView_objectView__nHfLZ"}},2223:e=>{e.exports={container:"OpenApiView_container__R7mZH",title:"OpenApiView_title__B2Xtw",operation:"OpenApiView_operation__c2rEq",subTitle:"OpenApiView_subTitle__rGJSw",path:"OpenApiView_path__zIael",method:"OpenApiView_method__Gtp_G",description:"OpenApiView_description__Mmnp_",operationAnchor:"OpenApiView_operationAnchor__UTM3y",scrollAnchor:"OpenApiView_scrollAnchor__729uU"}},6269:e=>{e.exports={title:"ParametersView_title__apPIp"}},4808:e=>{e.exports={listItem:"PropertyView_listItem__ee4Bj",pre:"PropertyView_pre__BO0ef",value:"PropertyView_value__M8kQ1",oneOfTabs:"PropertyView_oneOfTabs__CvkqE",separator:"PropertyView_separator__z8AZY",example:"PropertyView_example__3qZK2",expandedContent:"PropertyView_expandedContent__KPTZG",tab:"PropertyView_tab__a20dT"}},5846:e=>{e.exports={requestBody:"RequestBodyView_requestBody__1djT_",heading:"RequestBodyView_heading__cFrG1",mediaType:"RequestBodyView_mediaType__Svy5X"}},7457:e=>{e.exports={required:"Required_required__4NkJh"}},4454:e=>{e.exports={response:"ResponseView_response__CwhNU",success:"ResponseView_success__LL_Hf",error:"ResponseView_error__Oi7tp",neutral:"ResponseView_neutral__nY0wp",header:"ResponseView_header__R0eaR",expandButton:"ResponseView_expandButton__ntUZu",icon:"ResponseView_icon__lFhtw",expanded:"ResponseView_expanded__9wFFm",mediaType:"ResponseView_mediaType__oRly5"}},8387:e=>{e.exports={title:"ResponsesView_title__FsWPV",responses:"ResponsesView_responses__rI_Lg"}},7458:e=>{e.exports={value:"ValueView_value__iA6rg",pre:"ValueView_pre__cq6xE",enumList:"ValueView_enumList__OsKdD",enumValue:"ValueView_enumValue__jTun8"}},4926:e=>{e.exports={openapi:"3.1.1",info:{version:"1",title:"API for iverksetting av vedtak"},servers:[{url:"https://utsjekk.intern.nav.no",description:"Generated server url"}],security:[{Bearer:["read","write"]}],paths:{"/api/simulering/v2":{post:{tags:["Simulering"],summary:"Simuler utbetaling",description:'Utf\xf8rer en "dry run", eller en simulering, av en utbetaling mot Oppdragssystemet. Simuleringen kan fortelle om iverksettingen vil v\xe6re en ny utbetaling, en feilutbetaling eller en etterbetaling.',operationId:"hentSimulering",requestBody:{content:{"application/json":{schema:{$ref:"#/components/schemas/SimuleringRequestV2Dto"}}},required:!0},responses:{200:{description:"Simulering utf\xf8rt OK",content:{"application/json":{schema:{$ref:"#/components/schemas/SimuleringRespons"}}}},204:{description:"Ingen endring i utbetaling p\xe5 saken, simulering utf\xf8res ikke"},400:{description:"Ugyldig format p\xe5 simulering"},409:{description:"Simuleringen er i konflikt med tidligere utbetalinger"},503:{description:"OS/UR er midlertidig stengt"}}}},"/api/iverksetting/v2":{post:{tags:["Iverksetting"],summary:"Send utbetaling",description:"Iverksetter utbetalingen mot Oppdragssystemet.",operationId:"iverksett",requestBody:{content:{"application/json":{schema:{$ref:"#/components/schemas/IverksettV2Dto"}}},required:!0},responses:{202:{description:"Utbetalingen er mottatt"},400:{description:"Ugyldig format p\xe5 utbetalingen"},403:{description:"Ikke autorisert til \xe5 iverksette utbetaling"},409:{description:"Utbetalingen er i konflikt med tidligere utbetaling"}}}},"/api/iverksetting/{sakId}/{behandlingId}/{iverksettingId}/status":{get:{tags:["Iverksetting"],summary:"Sjekk status p\xe5 utbetaling",description:"Sjekk status p\xe5 utbetaling med gitt behandlingId og iverksettingId",operationId:"hentStatus",parameters:[{name:"sakId",in:"path",required:!0,schema:{type:"string",maxLength:25,minLength:1,description:"P\xe5 grunn av tekniske begrensninger hos OS/UR er det en lengdebegrensning p\xe5 25 tegn for sakId"}},{name:"behandlingId",in:"path",required:!0,schema:{type:"string",maxLength:30,minLength:1,description:"P\xe5 grunn av tekniske begrensninger hos OS/UR er det en lengdebegrensning p\xe5 30 tegn for behandlingId"}},{name:"iverksettingId",in:"path",required:!0,schema:{type:"string",format:"uuid",description:"Id p\xe5 iverksettingen. Brukes kun n\xe5r vedtaksl\xf8sningen m\xe5 iverksette flere ganger for samme behandling/vedtak."}}],responses:{200:{description:"Sjekket status OK",content:{"application/json":{schema:{type:"string",enum:["SENDT_TIL_OPPDRAG","FEILET_MOT_OPPDRAG","OK","IKKE_P\xc5BEGYNT","OK_UTEN_UTBETALING"]}}}},404:{description:"Kunne ikke finne utbetaling"}}}},"/api/iverksetting/{sakId}/{behandlingId}/status":{get:{tags:["Iverksetting"],summary:"Sjekk status p\xe5 utbetaling",description:"Sjekk status paa iverksetting med gitt behandlingId",operationId:"hentStatus_1",parameters:[{name:"sakId",in:"path",required:!0,schema:{type:"string",maxLength:25,minLength:1,description:"P\xe5 grunn av tekniske begrensninger hos OS/UR er det en lengdebegrensning p\xe5 25 tegn for sakId"}},{name:"behandlingId",in:"path",required:!0,schema:{type:"string",maxLength:30,minLength:1,description:"P\xe5 grunn av tekniske begrensninger hos OS/UR er det en lengdebegrensning p\xe5 30 tegn for behandlingId"}}],responses:{200:{description:"Sjekket status OK",content:{"application/json":{schema:{type:"string",enum:["SENDT_TIL_OPPDRAG","FEILET_MOT_OPPDRAG","OK","IKKE_P\xc5BEGYNT","OK_UTEN_UTBETALING"]}}}},404:{description:"Kunne ikke finne utbetaling"}}}}},components:{schemas:{ForrigeIverksettingV2Dto:{required:["behandlingId"],type:"object",properties:{behandlingId:{maxLength:30,minLength:1,type:"string",description:"Id p\xe5 behandlingen i vedtaksl\xf8sningen. Brukes for \xe5 spore utbetalingen tilbake til den konkrete hendelsen som trigget den. Kan ogs\xe5 v\xe6re id p\xe5 vedtak, meldekort etc. DVH bruker denne n\xe5r de sammenstiller st\xf8nadsstatistikk."},iverksettingId:{type:"string",format:"uuid",description:"Id p\xe5 iverksettingen. Brukes kun n\xe5r vedtaksl\xf8sningen m\xe5 iverksette flere ganger for samme behandling/vedtak."}}},JsonNode:{type:"object"},SimuleringRequestV2Dto:{required:["behandlingId","personident","sakId","saksbehandlerId","utbetalinger"],type:"object",properties:{sakId:{type:"string",maxLength:25,minLength:1,description:"P\xe5 grunn av tekniske begrensninger hos OS/UR er det en lengdebegrensning p\xe5 25 tegn for sakId"},behandlingId:{type:"string",maxLength:30,minLength:1,description:"P\xe5 grunn av tekniske begrensninger hos OS/UR er det en lengdebegrensning p\xe5 30 tegn for behandlingId"},personident:{type:"string",maxLength:11,minLength:11,description:"F\xf8dselsnummer eller D-nummer",example:"15507600333"},saksbehandlerId:{type:"string",description:"NAV-ident til saksbehandler, eller servicebruker til applikasjon dersom vedtaket er fattet fullautomatisk",example:"A12345"},utbetalinger:{type:"array",items:{$ref:"#/components/schemas/UtbetalingV2Dto"}},forrigeIverksetting:{$ref:"#/components/schemas/ForrigeIverksettingV2Dto"}}},SimuleringRespons:{required:["oppsummeringer","detaljer"],type:"object",properties:{oppsummeringer:{type:"array",items:{$ref:"#/components/schemas/OppsummeringForPeriode"}},detaljer:{$ref:"#/components/schemas/SimuleringDetaljer"}}},SimuleringDetaljer:{required:["gjelderId","datoBeregnet","totalBel\xf8p","perioder"],type:"object",properties:{gjelderId:{type:"string"},datoBeregnet:{type:"string",format:"date"},totalBeløp:{type:"integer"},perioder:{type:"array",items:{$ref:"#/components/schemas/Periode"}}}},Periode:{required:["fom","tom","posteringer"],type:"object",properties:{fom:{type:"string",format:"date"},tom:{type:"string",format:"date"},posteringer:{type:"array",items:{$ref:"#/components/schemas/Postering"}}}},Postering:{required:["fagomr\xe5de","sakId","fom","tom","bel\xf8p","type","klassekode"],type:"object",properties:{fagområde:{type:"string",enum:["TILLEGGSST\xd8NADER","TILLEGGSST\xd8NADER_ARENA","TILLEGGSST\xd8NADER_ARENA_MANUELL_POSTERING","DAGPENGER","DAGPENGER_MANUELL_POSTERING","DAGPENGER_ARENA","DAGPENGER_ARENA_MANUELL_POSTERING","TILTAKSPENGER","TILTAKSPENGER_ARENA","TILTAKSPENGER_ARENA_MANUELL_POSTERING"]},sakId:{type:"string"},fom:{type:"string",format:"date"},tom:{type:"string",format:"date"},beløp:{type:"integer"},type:{type:"string",enum:["YTELSE","FEILUTBETALING","FORSKUDSSKATT","JUSTERING","TREKK","MOTPOSTERING"]},klassekode:{type:"string"}}},OppsummeringForPeriode:{required:["fom","tom","tidligereUtbetalt","nyUtbetaling","totalEtterbetaling","totalFeilutbetaling"],type:"object",properties:{fom:{type:"string",format:"date"},tom:{type:"string",format:"date"},tidligereUtbetalt:{type:"integer"},nyUtbetaling:{type:"integer"},totalEtterbetaling:{type:"integer"},totalFeilutbetaling:{type:"integer"}}},StønadType:{type:"object",properties:{json:{type:"string",writeOnly:!0}}},StønadTypeDagpenger:{type:"string",allOf:[{$ref:"#/components/schemas/St\xf8nadType"}],enum:["DAGPENGER_ARBEIDSS\xd8KER_ORDIN\xc6R","DAGPENGER_PERMITTERING_ORDIN\xc6R","DAGPENGER_PERMITTERING_FISKEINDUSTRI","DAGPENGER_E\xd8S"]},StønadTypeTilleggsStønader:{type:"string",allOf:[{$ref:"#/components/schemas/St\xf8nadType"}],enum:["TILSYN_BARN_ENSLIG_FORS\xd8RGER","TILSYN_BARN_AAP","TILSYN_BARN_ETTERLATTE","L\xc6REMIDLER_ENSLIG_FORS\xd8RGER","L\xc6REMIDLER_AAP","L\xc6REMIDLER_ETTERLATTE"]},StønadTypeTiltakspenger:{type:"string",allOf:[{$ref:"#/components/schemas/St\xf8nadType"}],enum:["ARBEIDSFORBEREDENDE_TRENING","ARBEIDSRETTET_REHABILITERING","ARBEIDSTRENING","AVKLARING","DIGITAL_JOBBKLUBB","ENKELTPLASS_AMO","ENKELTPLASS_VGS_OG_H\xd8YERE_YRKESFAG","FORS\xd8K_OPPL\xc6RING_LENGRE_VARIGHET","GRUPPE_AMO","GRUPPE_VGS_OG_H\xd8YERE_YRKESFAG","H\xd8YERE_UTDANNING","INDIVIDUELL_JOBBST\xd8TTE","INDIVIDUELL_KARRIEREST\xd8TTE_UNG","JOBBKLUBB","OPPF\xd8LGING","UTVIDET_OPPF\xd8LGING_I_NAV","UTVIDET_OPPF\xd8LGING_I_OPPL\xc6RING"]},StønadsdataDagpengerDto:{required:["meldekortId","st\xf8nadstype"],type:"object",allOf:[{$ref:"#/components/schemas/St\xf8nadsdataDto"},{type:"object",properties:{Stønadstype:{type:"string",enum:["DAGPENGER_ARBEIDSS\xd8KER_ORDIN\xc6R","DAGPENGER_PERMITTERING_ORDIN\xc6R","DAGPENGER_PERMITTERING_FISKEINDUSTRI","DAGPENGER_E\xd8S"]},ferietillegg:{type:"string",enum:["ORDIN\xc6R","AVD\xd8D"]},meldekortId:{type:"string"}}}]},StønadsdataDto:{required:["St\xf8nadstype"],type:"object",properties:{json:{$ref:"#/components/schemas/JsonNode"},Stønadstype:{oneOf:[{$ref:"#/components/schemas/St\xf8nadTypeDagpenger"},{$ref:"#/components/schemas/St\xf8nadTypeTilleggsSt\xf8nader"},{$ref:"#/components/schemas/St\xf8nadTypeTiltakspenger"}]}}},StønadsdataTilleggsstønaderDto:{required:["St\xf8nadstype"],type:"object",allOf:[{$ref:"#/components/schemas/St\xf8nadsdataDto"},{type:"object",properties:{Stønadstype:{type:"string",enum:["TILSYN_BARN_ENSLIG_FORSoRGER","TILSYN_BARN_AAP","TILSYN_BARN_ETTERLATTE","LaeREMIDLER_ENSLIG_FORSoRGER","LaeREMIDLER_AAP","LaeREMIDLER_ETTERLATTE"]},brukersNavKontor:{type:"string",minLength:4,maxLength:4,description:"Enhetsnummeret p\xe5 NAV-kontoret som brukeren tilh\xf8rer."}}}]},StønadsdataTiltakspengerV2Dto:{required:["barnetillegg","brukersNavKontor","meldekortId","St\xf8nadstype"],type:"object",allOf:[{$ref:"#/components/schemas/St\xf8nadsdataDto"},{type:"object",properties:{Stønadstype:{type:"string",enum:["ARBEIDSFORBEREDENDE_TRENING","ARBEIDSRETTET_REHABILITERING","ARBEIDSTRENING","AVKLARING","DIGITAL_JOBBKLUBB","ENKELTPLASS_AMO","ENKELTPLASS_VGS_OG_HoYERE_YRKESFAG","FORSoK_OPPLaeRING_LENGRE_VARIGHET","GRUPPE_AMO","GRUPPE_VGS_OG_HoYERE_YRKESFAG","HoYERE_UTDANNING","INDIVIDUELL_JOBBSToTTE","INDIVIDUELL_KARRIERESToTTE_UNG","JOBBKLUBB","OPPFoLGING","UTVIDET_OPPFoLGING_I_NAV","UTVIDET_OPPFoLGING_I_OPPLaeRING"]},barnetillegg:{type:"boolean"},brukersNavKontor:{type:"string",minLength:4,maxLength:4,description:"Enhetsnummeret p\xe5 NAV-kontoret som brukeren tilh\xf8rer."},meldekortId:{type:"string"}}}]},UtbetalingV2Dto:{required:["bel\xf8p","fraOgMedDato","satstype","st\xf8nadsdata","tilOgMedDato"],type:"object",properties:{beløp:{type:"integer",format:"int32",description:"Brutto bel\xf8p i hele kroner iht. satstypen. For dagsats og m\xe5nedssats blir verdien multiplisert iht. satstypen og perioden for \xe5 finne totalbel\xf8pet for utbetalingen. For engangssats er verdien per definisjon totalbel\xf8pet som utbetales."},satstype:{type:"string",enum:["DAGLIG","M\xc5NEDLIG","ENGANGS"],description:"Avgj\xf8r totalbel\xf8pet for utbetalingsperioden."},fraOgMedDato:{type:"string",format:"date",description:"F\xf8rste dato for utbetalingsperioden. For m\xe5nedssats m\xe5 denne alltid v\xe6re f\xf8rste dag i m\xe5neden."},tilOgMedDato:{type:"string",format:"date",description:"Siste dato for utbetalingsperioden. For m\xe5nedssats m\xe5 denne alltid v\xe6re siste dag i m\xe5neden."},stønadsdata:{oneOf:[{$ref:"#/components/schemas/St\xf8nadsdataDagpengerDto"},{$ref:"#/components/schemas/St\xf8nadsdataTilleggsst\xf8naderDto"},{$ref:"#/components/schemas/St\xf8nadsdataTiltakspengerV2Dto"}],description:"Et sett med ytelsesspesifikke felter for utbetalingen."}}},IverksettV2Dto:{required:["behandlingId","personident","sakId","vedtak"],type:"object",properties:{sakId:{maxLength:25,minLength:1,type:"string",description:"Id p\xe5 saken i vedtaksl\xf8sningen."},behandlingId:{maxLength:30,minLength:1,type:"string",description:"Id p\xe5 behandlingen i vedtaksl\xf8sningen. Brukes for \xe5 spore utbetalingen tilbake til den konkrete hendelsen som trigget den. Kan ogs\xe5 v\xe6re id p\xe5 vedtak, meldekort etc. DVH bruker denne n\xe5r de sammenstiller st\xf8nadsstatistikk."},iverksettingId:{type:"string",format:"uuid",description:"Id p\xe5 iverksettingen. Brukes kun n\xe5r vedtaksl\xf8sningen m\xe5 iverksette flere ganger for samme behandling/vedtak."},personident:{type:"string",description:"Naturlig ident (f\xf8dselsnummer eller D-nummer) p\xe5 personen som skal f\xe5 utbetalingen. Utsjekk validerer at identen har gyldig format.",example:"15507600333"},vedtak:{$ref:"#/components/schemas/VedtaksdetaljerV2Dto"},forrigeIverksetting:{$ref:"#/components/schemas/ForrigeIverksettingV2Dto",description:"Identifikasjon p\xe5 forrige iverksetting. Settes kun n\xe5r det finnes tidligere iverksettinger p\xe5 saken."}}},VedtaksdetaljerV2Dto:{required:["beslutterId","saksbehandlerId","utbetalinger","vedtakstidspunkt"],type:"object",properties:{vedtakstidspunkt:{type:"string",format:"date-time",description:"Tidspunktet vedtaket ble fattet."},saksbehandlerId:{pattern:"^[A-Z]\\d{6}$",type:"string",description:"Enten NAV-ident p\xe5 saksbehandler n\xe5r behandlingen er gjort manuelt, eller navn p\xe5 system/applikasjon/servicebruker dersom behandlingen er gjort automatisk. Utsjekk gj\xf8r ingen validering av dette feltet.",example:"Z123456"},beslutterId:{pattern:"^[A-Z]\\d{6}$",type:"string",description:"Enten NAV-ident p\xe5 beslutter n\xe5r behandlingen er gjort manuelt, eller navn p\xe5 system/applikasjon/servicebruker dersom behandlingen er gjort automatisk. Utsjekk gj\xf8r ingen validering av dette feltet.",example:"Z123456"},utbetalinger:{type:"array",items:{$ref:"#/components/schemas/UtbetalingV2Dto"}}},description:"Maa vaere satt for utbetalingsvedtak"}},securitySchemes:{Bearer:{type:"apiKey",name:"Authorization",in:"header"}}}}},800:(e,t,n)=>{"use strict";n.d(t,{O:()=>r});let r=[{data:{index:{title:"Om tjenesten",type:"page"},kom_i_gang:{title:"Kom i gang",type:"page"},api_spesifikasjon:{title:"API-spesifikasjon",type:"page",theme:{layout:"full"}}}},{name:"api_spesifikasjon",route:"/api_spesifikasjon",frontMatter:{title:"API-spesifikasjon"}},{name:"index",route:"/",frontMatter:{title:"Om tjenesten"}},{name:"kom_i_gang",route:"/kom_i_gang",children:[{data:{index:"Kom i gang",utbetaling:"Utbetaling",avstemming:"Avstemming",status:"Status"}},{name:"avstemming",route:"/kom_i_gang/avstemming",frontMatter:{title:"Avstemming"}},{name:"index",route:"/kom_i_gang",frontMatter:{title:"Kom i gang"}},{name:"status",route:"/kom_i_gang/status",frontMatter:{title:"Status p\xe5 utbetaling"}},{name:"utbetaling",route:"/kom_i_gang/utbetaling",children:[{data:{iverksetting:"Iverksetting",simulering:"Simulering",data_inn:"Data inn",meldepliktsytelser:"Meldepliktsytelser",FAQ:"FAQ"}},{name:"data_inn",route:"/kom_i_gang/utbetaling/data_inn",children:[{data:{beskrivelse:"Beskrivelse av felter",eksempler:"Eksempeldata"}},{name:"beskrivelse",route:"/kom_i_gang/utbetaling/data_inn/beskrivelse",frontMatter:{title:"Beskrivelse av felter"}},{name:"eksempler",route:"/kom_i_gang/utbetaling/data_inn/eksempler",frontMatter:{title:"Eksempeldata"}}]},{name:"FAQ",route:"/kom_i_gang/utbetaling/FAQ",frontMatter:{title:"FAQ"}},{name:"iverksetting",route:"/kom_i_gang/utbetaling/iverksetting",frontMatter:{title:"Iverksetting"}},{name:"meldepliktsytelser",route:"/kom_i_gang/utbetaling/meldepliktsytelser",frontMatter:{title:"Meldepliktsytelser"}},{name:"simulering",route:"/kom_i_gang/utbetaling/simulering",frontMatter:{title:"Simulering"}}]}]}]}},e=>{var t=t=>e(e.s=t);e.O(0,[1627,636,6593,8792],()=>t(1016)),_N_E=e.O()}]);