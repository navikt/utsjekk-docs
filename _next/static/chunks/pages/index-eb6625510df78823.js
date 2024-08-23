(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{1464:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(9213)}])},9213:function(e,t,n){"use strict";n.r(t),n.d(t,{__toc:function(){return d}});var r=n(5893),i=n(2673),a=n(7758),s=n(567);n(9128);var o=n(9530),k=n(8757);let d=[{depth:2,value:"Kontakt",id:"kontakt"},{depth:2,value:"Intern arkitektur",id:"intern-arkitektur"}];function _createMdxContent(e){let t=Object.assign({h1:"h1",p:"p",a:"a",code:"code",h2:"h2"},(0,o.a)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{children:"Om tjenesten"}),"\n",(0,r.jsx)(t.p,{children:"Utsjekk tilbyr tjenester innenfor utbetalingsdomenet for arbeidsytelser. Mer spesifikt kan den sende og korrigere utbetalinger, avstemme utbetalinger og gi oppdatert status p\xe5 tilstanden til en utbetaling.\nSe individuelle sider for dokumentasjon av hver tjeneste."}),"\n",(0,r.jsxs)(t.p,{children:["Hensikten med denne siden er \xe5 dokumentere konsepter og funksjonelle aspekter ved Utsjekk sine tjenester som ikke kommer tydelig frem i API-dokumentasjonen. Er du ute etter tekniske detaljer rundt endepunktene, se Swagger-dokumentasjonen\n",(0,r.jsx)(t.a,{href:"https://utsjekk.intern.dev.nav.no/swagger-ui/index.html",children:"her"})," (krever naisdevice). Videre finnes det kontrakter for alle DTO-er som Utsjekk bruker i sitt API ",(0,r.jsx)(t.a,{href:"https://github.com/navikt/utsjekk-kontrakter",children:"her"}),".\nDe aktuelle kontraktene for iverksetting ligger i artifaktet ",(0,r.jsx)(t.code,{children:"iverksett"}),". Vi oppfordrer alle konsumenter til \xe5 ta i bruk kontraktene."]}),"\n",(0,r.jsx)(t.h2,{id:"kontakt",children:"Kontakt"}),"\n",(0,r.jsxs)(t.p,{children:["Utsjekk eies av Team Hel Ved. Vi kan kontaktes p\xe5 Slack i kanalen ",(0,r.jsx)(t.a,{href:"https://nav-it.slack.com/archives/C06SJTR2X3L",children:"#team-hel-ved"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"intern-arkitektur",children:"Intern arkitektur"}),"\n",(0,r.jsx)(k.G,{chart:'graph LR\n    subgraph utsjekk\n      iverksett["utsjekk"]\n      iverksettDB[(DB)]\n\n      iverksett --- iverksettDB\n    end\n\n    subgraph utsjekk-oppdrag\n      oppdrag["utsjekk-oppdrag"]\n      oppdragDB[(DB)]\n\n      oppdrag --- oppdragDB\n    end\n\n    vedtak["Vedtaksl\xf8sning"]\n    osur["OS/UR"]\n\n\n    subgraph kafka\n        topic{{helved.iverksetting-status-v1}}\n    end\n\n    vedtak -->|REST| utsjekk\n    utsjekk -->|REST| utsjekk-oppdrag\n    utsjekk --> topic\n    utsjekk-oppdrag ====>|Send-k\xf8| osur\n    osur ====>|Kvittering-k\xf8| utsjekk-oppdrag\n    utsjekk-oppdrag ====>|Avstemming-k\xf8| osur'})]})}function MDXContent(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,o.a)(),e.components);return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(_createMdxContent,{...e})}):_createMdxContent(e)}let l={MDXContent,pageOpts:{filePath:"pages/index.mdx",route:"/",frontMatter:{title:"Om tjenesten"},pageMap:[{kind:"Meta",data:{index:"Om tjenesten",for_konsumenter:"For konsumenter",utvikling:"Utvikling"}},{kind:"Folder",name:"for_konsumenter",route:"/for_konsumenter",children:[{kind:"Meta",data:{utbetaling:"Utbetaling",avstemming:"Avstemming",status:"Status p\xe5 utbetaling"}},{kind:"MdxPage",name:"avstemming",route:"/for_konsumenter/avstemming",frontMatter:{title:"Avstemming"}},{kind:"MdxPage",name:"status",route:"/for_konsumenter/status",frontMatter:{title:"Status p\xe5 utbetaling"}},{kind:"Folder",name:"utbetaling",route:"/for_konsumenter/utbetaling",children:[{kind:"MdxPage",name:"FAQ",route:"/for_konsumenter/utbetaling/FAQ",frontMatter:{title:"FAQ"}},{kind:"Meta",data:{iverksetting:"Iverksetting",simulering:"Simulering",data_inn:"Data inn",FAQ:"FAQ"}},{kind:"Folder",name:"data_inn",route:"/for_konsumenter/utbetaling/data_inn",children:[{kind:"Meta",data:{beskrivelse:"Beskrivelse av felter",eksempler:"Eksempeldata"}},{kind:"MdxPage",name:"beskrivelse",route:"/for_konsumenter/utbetaling/data_inn/beskrivelse",frontMatter:{title:"Beskrivelse av felter"}},{kind:"MdxPage",name:"eksempler",route:"/for_konsumenter/utbetaling/data_inn/eksempler",frontMatter:{title:"Eksempeldata"}}]},{kind:"MdxPage",name:"iverksetting",route:"/for_konsumenter/utbetaling/iverksetting",frontMatter:{title:"Iverksetting"}},{kind:"MdxPage",name:"simulering",route:"/for_konsumenter/utbetaling/simulering"}]}]},{kind:"MdxPage",name:"for_konsumenter",route:"/for_konsumenter",frontMatter:{title:"For konsumenter"}},{kind:"MdxPage",name:"index",route:"/",frontMatter:{title:"Om tjenesten"}},{kind:"Folder",name:"utvikling",route:"/utvikling",children:[{kind:"MdxPage",name:"feature_toggles",route:"/utvikling/feature_toggles",frontMatter:{title:"Feature Toggles"}},{kind:"Meta",data:{feature_toggles:"Feature Toggles"}}]}],flexsearch:{codeblocks:!0},title:"Om tjenesten",headings:d},pageNextRoute:"/",nextraLayout:a.ZP,themeConfig:s.Z};t.default=(0,i.j)(l)},567:function(e,t,n){"use strict";n.d(t,{Z:function(){return _}});var r=n(5893);n(7294);var i=n(1664),a=n.n(i),s=n(3419),o=n(5675),k=n.n(o),d=n(714),l=n(428),u=n(967),g=n.n(u),c=n(8639),m=n.n(c),p=n(3511),h=n(4442),f=n.n(h),j=n(7758),x=n(1163);let getTitle=e=>"".concat(e.title," - utsjekk"),v={logo:(0,r.jsx)(()=>(0,r.jsxs)(d.U,{gap:"6",align:"center",children:[(0,r.jsx)(k(),{src:"/utsjekk-docs/_next/static/media/nav-logo-red.d4f54b6e.svg",alt:"",width:"64",height:"20"}),(0,r.jsx)("span",{className:g().headerDivider}),(0,r.jsx)(l.Z,{weight:"semibold",size:"large",children:"utsjekk"})]}),{}),project:{link:"https://github.com/navikt/utsjekk"},head:()=>{let{asPath:e,defaultLocale:t,locale:n}=(0,x.useRouter)(),{frontMatter:i}=(0,j.ZR)(),a="https://navikt.github.io/utsjekk"+(t===n?e:"/".concat(n).concat(e));return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("title",{children:getTitle(i)}),(0,r.jsx)("meta",{property:"og:url",content:a}),(0,r.jsx)("meta",{property:"og:title",content:"".concat(i.title," - utsjekk")}),(0,r.jsx)("meta",{property:"og:description",content:i.description})]})},docsRepositoryBase:"https://github.com/navikt/utsjekk",footer:{text:"\xa9 2023 NAV IT"},feedback:{content:(0,r.jsx)(e=>{let{children:t}=e;return(0,r.jsxs)(s.Z,{className:f().label,children:[t," ",(0,r.jsx)(p.Z,{})]})},{children:"Gi oss tilbakemelding"})},editLink:{text:(0,r.jsx)(s.Z,{children:"Rediger denne siden"}),component:e=>{let{className:t,children:n,filePath:i}=e;return(0,r.jsx)(a(),{className:t,href:"https://github.com/navikt/utsjekk/blob/docs/".concat(i),children:n})}},toc:{title:(0,r.jsx)("span",{style:{color:"var(--a-text-default"},children:"P\xe5 denne siden"})},search:{placeholder:"S\xf8k i dokumentasjonen",emptyResult:(0,r.jsx)(()=>(0,r.jsx)(d.U,{className:m().container,justify:"center",align:"center",children:(0,r.jsx)(s.Z,{children:"Ingen treff"})}),{})}};var _=v},4442:function(e){e.exports={label:"ExternalLabel_label__BifXB"}},8639:function(e){e.exports={container:"IngenTreff_container__FJnjf"}},967:function(e){e.exports={headerDivider:"Logo_headerDivider__2JJVQ"}}},function(e){e.O(0,[241,73,202,774,888,179],function(){return e(e.s=1464)}),_N_E=e.O()}]);