(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[267],{1657:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/kom_i_gang",function(){return n(2245)}])},2245:function(e,t,n){"use strict";n.r(t),n.d(t,{__toc:function(){return o}});var s=n(5893),i=n(2673),r=n(7758),a=n(567);n(9128);var l=n(9530);let o=[{depth:2,value:"Oppsett",id:"oppsett"},{depth:2,value:"Autentisering",id:"autentisering"},{depth:2,value:"API-dokumentasjon og kontrakter for DTO-klasser",id:"api-dokumentasjon-og-kontrakter-for-dto-klasser"}];function _createMdxContent(e){let t=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",span:"span",a:"a"},(0,l.a)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{children:"Kom i gang: teknisk informasjon"}),"\n",(0,s.jsx)(t.h2,{id:"oppsett",children:"Oppsett"}),"\n",(0,s.jsx)(t.p,{children:"For \xe5 ta i bruk utsjekk m\xe5 klient-applikasjonen \xe5pne for trafikk til tjenesten. Legg inn f\xf8lgende kodesnutt i deres\nnais-konfig:"}),"\n",(0,s.jsx)(t.pre,{"data-language":"yaml","data-theme":"default",children:(0,s.jsxs)(t.code,{"data-language":"yaml","data-theme":"default",children:[(0,s.jsxs)(t.span,{className:"line",children:[(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"accessPolicy"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:":"})]}),"\n",(0,s.jsxs)(t.span,{className:"line",children:[(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"outbound"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:":"})]}),"\n",(0,s.jsxs)(t.span,{className:"line",children:[(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"rules"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:":"})]}),"\n",(0,s.jsxs)(t.span,{className:"line",children:[(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"      - "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"application"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-string-expression)"},children:"utsjekk"})]}),"\n",(0,s.jsxs)(t.span,{className:"line",children:[(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"namespace"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-string-expression)"},children:"helved"})]})]})}),"\n",(0,s.jsx)(t.p,{children:"Tilsvarende m\xe5 vi \xe5pne for trafikk fra deres klient-applikasjon i utsjekk. Opprett en pull request i utsjekk med f\xf8lgende kodesnutt i nais-konfig:"}),"\n",(0,s.jsx)(t.pre,{"data-language":"yaml","data-theme":"default",children:(0,s.jsxs)(t.code,{"data-language":"yaml","data-theme":"default",children:[(0,s.jsxs)(t.span,{className:"line",children:[(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"accessPolicy"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:":"})]}),"\n",(0,s.jsxs)(t.span,{className:"line",children:[(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"inbound"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:":"})]}),"\n",(0,s.jsxs)(t.span,{className:"line",children:[(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"rules"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:":"})]}),"\n",(0,s.jsxs)(t.span,{className:"line",children:[(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"      - "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"application"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" ["}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-string)"},children:"applikasjonsnavn"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"]"})]}),"\n",(0,s.jsxs)(t.span,{className:"line",children:[(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"namespace"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" ["}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-string)"},children:"namespace"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"]"})]})]})}),"\n",(0,s.jsx)(t.p,{children:"Merk at disse reglene legger opp til service-til-service-kommunikasjon innenfor samme kubernetes-cluster. Det vil si at\nklient-applikasjonen m\xe5 bruke utsjekk sin service discovery-url. Bruk en av f\xf8lgende URL-er:"}),"\n",(0,s.jsx)(t.pre,{"data-language":"text","data-theme":"default",children:(0,s.jsxs)(t.code,{"data-language":"text","data-theme":"default",children:[(0,s.jsx)(t.span,{className:"line",children:(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"http://utsjekk.helved"})}),"\n",(0,s.jsx)(t.span,{className:"line",children:(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"http://utsjekk.helved.svc.cluster.local"})})]})}),"\n",(0,s.jsx)(t.p,{children:"Ta kontakt med oss dersom deres klient-applikasjon m\xe5 bruke ingressen for \xe5 kommunisere med utsjekk."}),"\n",(0,s.jsx)(t.h2,{id:"autentisering",children:"Autentisering"}),"\n",(0,s.jsxs)(t.p,{children:["Tjenesten krever Azure token p\xe5 alle kall, dvs. enten et Client Credentials-token eller et On-Behalf-Of-token.\nLes mer om autentisering i ",(0,s.jsx)(t.a,{href:"https://docs.nais.io/security/auth/#authentication-and-authorization",children:"nais-dokumentasjonen"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"api-dokumentasjon-og-kontrakter-for-dto-klasser",children:"API-dokumentasjon og kontrakter for DTO-klasser"}),"\n",(0,s.jsxs)(t.p,{children:["utsjekk har swagger-dokumentasjon ",(0,s.jsx)(t.a,{href:"https://utsjekk.intern.nav.no/swagger-ui/index.html",children:"her"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["Vi har samlet alle DTO-ene som brukes av API-et i et bibliotek. Se ",(0,s.jsx)(t.a,{href:"https://github.com/navikt/utsjekk-kontrakter",children:"utsjekk-kontrakter p\xe5 github"}),"\nog bruk pakken ",(0,s.jsx)(t.a,{href:"https://github.com/navikt/utsjekk-kontrakter/packages/1868090",children:"iverksett"}),"."]})]})}function MDXContent(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,l.a)(),e.components);return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(_createMdxContent,{...e})}):_createMdxContent(e)}let d={MDXContent,pageOpts:{filePath:"pages/kom_i_gang.mdx",route:"/kom_i_gang",frontMatter:{title:"Kom i gang"},pageMap:[{kind:"Meta",data:{kom_i_gang:"Kom i gang",utbetaling:"Utbetaling",avstemming:"Avstemming",status:"Status",index:"Om tjenesten"}},{kind:"MdxPage",name:"avstemming",route:"/avstemming",frontMatter:{title:"Avstemming"}},{kind:"MdxPage",name:"index",route:"/",frontMatter:{title:"Om tjenesten"}},{kind:"MdxPage",name:"kom_i_gang",route:"/kom_i_gang",frontMatter:{title:"Kom i gang"}},{kind:"MdxPage",name:"status",route:"/status",frontMatter:{title:"Status p\xe5 utbetaling"}},{kind:"Folder",name:"utbetaling",route:"/utbetaling",children:[{kind:"MdxPage",name:"FAQ",route:"/utbetaling/FAQ",frontMatter:{title:"FAQ"}},{kind:"Meta",data:{iverksetting:"Iverksetting",simulering:"Simulering",data_inn:"Data inn",meldepliktsytelser:"Meldepliktsytelser",FAQ:"FAQ"}},{kind:"Folder",name:"data_inn",route:"/utbetaling/data_inn",children:[{kind:"Meta",data:{beskrivelse:"Beskrivelse av felter",eksempler:"Eksempeldata"}},{kind:"MdxPage",name:"beskrivelse",route:"/utbetaling/data_inn/beskrivelse",frontMatter:{title:"Beskrivelse av felter"}},{kind:"MdxPage",name:"eksempler",route:"/utbetaling/data_inn/eksempler",frontMatter:{title:"Eksempeldata"}}]},{kind:"MdxPage",name:"iverksetting",route:"/utbetaling/iverksetting",frontMatter:{title:"Iverksetting"}},{kind:"MdxPage",name:"meldepliktsytelser",route:"/utbetaling/meldepliktsytelser",frontMatter:{title:"Meldepliktsytelser"}},{kind:"MdxPage",name:"simulering",route:"/utbetaling/simulering",frontMatter:{title:"Simulering"}}]}],flexsearch:{codeblocks:!0},title:"Kom i gang",headings:o},pageNextRoute:"/kom_i_gang",nextraLayout:r.ZP,themeConfig:a.Z};t.default=(0,i.j)(d)},567:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var s=n(5893);n(7294);var i=n(1664),r=n.n(i),a=n(3419),l=n(5675),o=n.n(l),d=n(714),c=n(428),k=n(967),h=n.n(k),p=n(8639),x=n.n(p),u=n(3511),g=n(4442),j=n.n(g),m=n(7758),v=n(1163);let getTitle=e=>"".concat(e.title," - utsjekk"),y={logo:(0,s.jsx)(()=>(0,s.jsxs)(d.U,{gap:"6",align:"center",children:[(0,s.jsx)(o(),{src:"/utsjekk-docs/_next/static/media/nav-logo-red.d4f54b6e.svg",alt:"",width:"64",height:"20"}),(0,s.jsx)("span",{className:h().headerDivider}),(0,s.jsx)(c.Z,{weight:"semibold",size:"large",children:"utsjekk"})]}),{}),project:{link:"https://github.com/navikt/utsjekk"},head:()=>{let{asPath:e,defaultLocale:t,locale:n}=(0,v.useRouter)(),{frontMatter:i}=(0,m.ZR)(),r="https://navikt.github.io/utsjekk"+(t===n?e:"/".concat(n).concat(e));return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("title",{children:getTitle(i)}),(0,s.jsx)("meta",{property:"og:url",content:r}),(0,s.jsx)("meta",{property:"og:title",content:"".concat(i.title," - utsjekk")}),(0,s.jsx)("meta",{property:"og:description",content:i.description})]})},docsRepositoryBase:"https://github.com/navikt/utsjekk",footer:{text:"\xa9 2023 NAV IT"},feedback:{content:(0,s.jsx)(e=>{let{children:t}=e;return(0,s.jsxs)(a.Z,{className:j().label,children:[t," ",(0,s.jsx)(u.Z,{})]})},{children:"Gi oss tilbakemelding"})},editLink:{text:(0,s.jsx)(a.Z,{children:"Rediger denne siden"}),component:e=>{let{className:t,children:n,filePath:i}=e;return(0,s.jsx)(r(),{className:t,href:"https://github.com/navikt/utsjekk/blob/docs/".concat(i),children:n})}},toc:{title:(0,s.jsx)("span",{style:{color:"var(--a-text-default"},children:"P\xe5 denne siden"})},search:{placeholder:"S\xf8k i dokumentasjonen",emptyResult:(0,s.jsx)(()=>(0,s.jsx)(d.U,{className:x().container,justify:"center",align:"center",children:(0,s.jsx)(a.Z,{children:"Ingen treff"})}),{})}};var f=y},4442:function(e){e.exports={label:"ExternalLabel_label__BifXB"}},8639:function(e){e.exports={container:"IngenTreff_container__FJnjf"}},967:function(e){e.exports={headerDivider:"Logo_headerDivider__2JJVQ"}}},function(e){e.O(0,[73,774,888,179],function(){return e(e.s=1657)}),_N_E=e.O()}]);