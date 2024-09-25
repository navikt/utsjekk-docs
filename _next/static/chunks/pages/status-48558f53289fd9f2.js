(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[465],{9249:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/status",function(){return n(8878)}])},8878:function(e,t,n){"use strict";n.r(t),n.d(t,{__toc:function(){return o}});var s=n(5893),r=n(2673),i=n(7758),l=n(567);n(9128);var a=n(9530);let o=[{depth:2,value:"Med REST",id:"med-rest"},{depth:2,value:"Med Kafka",id:"med-kafka"}];function _createMdxContent(e){let t=Object.assign({h1:"h1",p:"p",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",h2:"h2",pre:"pre",code:"code",span:"span",a:"a"},(0,a.a)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{children:"Status p\xe5 utbetaling"}),"\n",(0,s.jsx)(t.p,{children:"Status p\xe5 utbetalinger er en av f\xf8lgende verdier:"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Status"}),(0,s.jsx)(t.th,{children:"Beskrivelse"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"IKKE_P\xc5BEGYNT"}),(0,s.jsx)(t.td,{children:"Ikke sendt til \xf8konomisystemet"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"SENDT_TIL_OPPDRAG"}),(0,s.jsx)(t.td,{children:"Sendt til \xf8konomisystemet, venter p\xe5 svar"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"FEILET_MOT_OPPDRAG"}),(0,s.jsx)(t.td,{children:"Feilkvittering fra \xf8konomisystemet. Kan v\xe6re enten teknisk eller funksjonell feil."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"OK"}),(0,s.jsx)(t.td,{children:"Kvittert OK fra \xf8konomisystemet og ferdigstilt."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"OK_UTEN_UTBETALING"}),(0,s.jsx)(t.td,{children:"Ferdigstilt uten \xe5 ha blitt sendt til \xf8konomisystemet pga. at det ikke er noe \xe5 utbetale"})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"med-rest",children:"Med REST"}),"\n",(0,s.jsx)(t.pre,{"data-language":"kotlin","data-theme":"default",children:(0,s.jsx)(t.code,{"data-language":"kotlin","data-theme":"default",children:(0,s.jsxs)(t.span,{className:"line",children:[(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"GET "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"/"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"{sakId}"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"/"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"{behandlingId}"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"/"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"status"})]})})}),"\n",(0,s.jsx)(t.pre,{"data-language":"kotlin","data-theme":"default",children:(0,s.jsx)(t.code,{"data-language":"kotlin","data-theme":"default",children:(0,s.jsxs)(t.span,{className:"line",children:[(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"GET "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"/"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"{sakId}"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"/"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"{behandlingId}"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"/"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"{iverksettingId}"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"/"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"status"})]})})}),"\n",(0,s.jsx)(t.p,{children:"Henter status p\xe5 utbetaling. Dette endepunktet kan brukes for \xe5 sjekke tilstanden til en utbetaling som er tatt i mot og\nvalidert av utsjekk. NAVs \xf8konomisystem har en asynkron integrasjon og er i tillegg et stormaskinsystem som har definerte\noppetider. \xd8konomisystemet er stengt i helger, helligdager og mellom kl 21 og kl 6 p\xe5 virkedager. Derfor kan det\nta lang tid f\xf8r en utbetaling blir kvittert ut fra \xf8konomisystemet avhengig av n\xe5r den er sendt inn."}),"\n",(0,s.jsxs)(t.p,{children:["Dersom utsjekk finner behandlingen, vil endepunktet svare med ",(0,s.jsx)(t.code,{children:"200 OK"})," og utbetalingsstatus."]}),"\n",(0,s.jsx)(t.h2,{id:"med-kafka",children:"Med Kafka"}),"\n",(0,s.jsxs)(t.p,{children:["Vi har satt opp en topic hvor vi tilbyr statusendringer p\xe5 utbetalinger: ",(0,s.jsx)(t.code,{children:"helved.iverksetting-status-v1"}),". Om dette\ner interessant for dere kan dere kontakte oss s\xe5 vi f\xe5r gitt appen deres tilgang til topicen. I tillegg m\xe5 f\xf8lgende finnes\ni nais-konfigen deres:"]}),"\n",(0,s.jsx)(t.pre,{"data-language":"yaml","data-theme":"default",children:(0,s.jsxs)(t.code,{"data-language":"yaml","data-theme":"default",children:[(0,s.jsxs)(t.span,{className:"line",children:[(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"spec"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:":"})]}),"\n",(0,s.jsxs)(t.span,{className:"line",children:[(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"kafka"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:":"})]}),"\n",(0,s.jsxs)(t.span,{className:"line",children:[(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"pool"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-string-expression)"},children:"nav-prod"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-comment)"},children:"# Eller nav-dev for dev-milj\xf8"})]})]})}),"\n",(0,s.jsx)(t.p,{children:"Meldinger som publiseres her bruker personident som n\xf8kkel og har f\xf8lgende format p\xe5 meldingen:"}),"\n",(0,s.jsx)(t.pre,{"data-language":"kotlin","data-theme":"default",children:(0,s.jsxs)(t.code,{"data-language":"kotlin","data-theme":"default",children:[(0,s.jsxs)(t.span,{className:"line",children:[(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"data"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"class"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:"StatusEndretMelding"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"("})]}),"\n",(0,s.jsxs)(t.span,{className:"line",children:[(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"val"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" sakId: "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:"String"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:","})]}),"\n",(0,s.jsxs)(t.span,{className:"line",children:[(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"val"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" behandlingId: "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:"String"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:","})]}),"\n",(0,s.jsxs)(t.span,{className:"line",children:[(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"val"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" iverksettingId: "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:"String"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"?,"})]}),"\n",(0,s.jsxs)(t.span,{className:"line",children:[(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"val"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" fagsystem: "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:"Fagsystem"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:","})]}),"\n",(0,s.jsxs)(t.span,{className:"line",children:[(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"val"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" status: "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:"IverksettStatus"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:","})]}),"\n",(0,s.jsx)(t.span,{className:"line",children:(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:")"})})]})}),"\n",(0,s.jsxs)(t.p,{children:["Dataklassen finner du i ",(0,s.jsx)(t.a,{href:"https://github.com/navikt/utsjekk-kontrakter",children:(0,s.jsx)(t.code,{children:"utsjekk-kontrakter"})})," om du \xf8nsker \xe5 bruke den direkte."]})]})}function MDXContent(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,a.a)(),e.components);return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(_createMdxContent,{...e})}):_createMdxContent(e)}let d={MDXContent,pageOpts:{filePath:"pages/status.mdx",route:"/status",frontMatter:{title:"Status p\xe5 utbetaling"},pageMap:[{kind:"Meta",data:{kom_i_gang:"Kom i gang",utbetaling:"Utbetaling",avstemming:"Avstemming",status:"Status",index:"Om tjenesten"}},{kind:"MdxPage",name:"avstemming",route:"/avstemming",frontMatter:{title:"Avstemming"}},{kind:"MdxPage",name:"index",route:"/",frontMatter:{title:"Om tjenesten"}},{kind:"MdxPage",name:"kom_i_gang",route:"/kom_i_gang",frontMatter:{title:"Kom i gang"}},{kind:"MdxPage",name:"status",route:"/status",frontMatter:{title:"Status p\xe5 utbetaling"}},{kind:"Folder",name:"utbetaling",route:"/utbetaling",children:[{kind:"MdxPage",name:"FAQ",route:"/utbetaling/FAQ",frontMatter:{title:"FAQ"}},{kind:"Meta",data:{iverksetting:"Iverksetting",simulering:"Simulering",data_inn:"Data inn",meldepliktsytelser:"Meldepliktsytelser",FAQ:"FAQ"}},{kind:"Folder",name:"data_inn",route:"/utbetaling/data_inn",children:[{kind:"Meta",data:{beskrivelse:"Beskrivelse av felter",eksempler:"Eksempeldata"}},{kind:"MdxPage",name:"beskrivelse",route:"/utbetaling/data_inn/beskrivelse",frontMatter:{title:"Beskrivelse av felter"}},{kind:"MdxPage",name:"eksempler",route:"/utbetaling/data_inn/eksempler",frontMatter:{title:"Eksempeldata"}}]},{kind:"MdxPage",name:"iverksetting",route:"/utbetaling/iverksetting",frontMatter:{title:"Iverksetting"}},{kind:"MdxPage",name:"meldepliktsytelser",route:"/utbetaling/meldepliktsytelser",frontMatter:{title:"Meldepliktsytelser"}},{kind:"MdxPage",name:"simulering",route:"/utbetaling/simulering",frontMatter:{title:"Simulering"}}]}],flexsearch:{codeblocks:!0},title:"Status p\xe5 utbetaling",headings:o},pageNextRoute:"/status",nextraLayout:i.ZP,themeConfig:l.Z};t.default=(0,r.j)(d)},567:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var s=n(5893);n(7294);var r=n(1664),i=n.n(r),l=n(3419),a=n(5675),o=n.n(a),d=n(714),c=n(428),h=n(967),k=n.n(h),x=n(8639),p=n.n(x),j=n(3511),g=n(4442),u=n.n(g),v=n(7758),m=n(1163);let getTitle=e=>"".concat(e.title," - utsjekk"),y={logo:(0,s.jsx)(()=>(0,s.jsxs)(d.U,{gap:"6",align:"center",children:[(0,s.jsx)(o(),{src:"/utsjekk-docs/_next/static/media/nav-logo-red.d4f54b6e.svg",alt:"",width:"64",height:"20"}),(0,s.jsx)("span",{className:k().headerDivider}),(0,s.jsx)(c.Z,{weight:"semibold",size:"large",children:"utsjekk"})]}),{}),project:{link:"https://github.com/navikt/utsjekk"},head:()=>{let{asPath:e,defaultLocale:t,locale:n}=(0,m.useRouter)(),{frontMatter:r}=(0,v.ZR)(),i="https://navikt.github.io/utsjekk"+(t===n?e:"/".concat(n).concat(e));return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("title",{children:getTitle(r)}),(0,s.jsx)("meta",{property:"og:url",content:i}),(0,s.jsx)("meta",{property:"og:title",content:"".concat(r.title," - utsjekk")}),(0,s.jsx)("meta",{property:"og:description",content:r.description})]})},docsRepositoryBase:"https://github.com/navikt/utsjekk",footer:{text:"\xa9 2023 NAV IT"},feedback:{content:(0,s.jsx)(e=>{let{children:t}=e;return(0,s.jsxs)(l.Z,{className:u().label,children:[t," ",(0,s.jsx)(j.Z,{})]})},{children:"Gi oss tilbakemelding"})},editLink:{text:(0,s.jsx)(l.Z,{children:"Rediger denne siden"}),component:e=>{let{className:t,children:n,filePath:r}=e;return(0,s.jsx)(i(),{className:t,href:"https://github.com/navikt/utsjekk/blob/docs/".concat(r),children:n})}},toc:{title:(0,s.jsx)("span",{style:{color:"var(--a-text-default"},children:"P\xe5 denne siden"})},search:{placeholder:"S\xf8k i dokumentasjonen",emptyResult:(0,s.jsx)(()=>(0,s.jsx)(d.U,{className:p().container,justify:"center",align:"center",children:(0,s.jsx)(l.Z,{children:"Ingen treff"})}),{})}};var f=y},4442:function(e){e.exports={label:"ExternalLabel_label__BifXB"}},8639:function(e){e.exports={container:"IngenTreff_container__FJnjf"}},967:function(e){e.exports={headerDivider:"Logo_headerDivider__2JJVQ"}}},function(e){e.O(0,[73,774,888,179],function(){return e(e.s=9249)}),_N_E=e.O()}]);