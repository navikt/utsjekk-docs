(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[138],{1466:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/utbetaling/simulering",function(){return t(7939)}])},7939:function(e,n,t){"use strict";t.r(n),t.d(n,{__toc:function(){return d}});var i=t(5893),r=t(2673),l=t(4087),s=t(6053);t(9488);var a=t(9530);let d=[{depth:2,value:"Hva er simulering",id:"hva-er-simulering"},{depth:3,value:"\xd8yeblikksbilde",id:"\xf8yeblikksbilde"},{depth:2,value:"Hvorfor gj\xf8re simulering",id:"hvorfor-gj\xf8re-simulering"},{depth:2,value:"Oppsett for Arena-ytelsene",id:"oppsett-for-arena-ytelsene"},{depth:2,value:"\xc5pningstid",id:"\xe5pningstid"},{depth:2,value:"Eksempler",id:"eksempler"}];function g(e){let n=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",h3:"h3",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,a.a)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{children:"Simulering"}),"\n",(0,i.jsx)(n.h2,{id:"hva-er-simulering",children:"Hva er simulering"}),"\n",(0,i.jsxs)(n.p,{children:['Simulering er en "dry run" mot Oppdragssytemet og viser hvordan resultatet av en iverksetting ville blitt.\nSimuleringen kan fortelle om iverksettingen vil v\xe6re en ny utbetaling, en feilutbetaling eller en etterbetaling. I tillegg vil man f\xe5 informasjon om\niverksatte utbetalinger fra andre fagomr\xe5der innenfor samme gruppe (Se ',(0,i.jsx)(n.a,{href:"#regler-for-arena-ytelsene",children:"avsnitt om oppsett"}),") – for Arena-ytelsene vil man\neksempelvis kunne se om brukeren har utbetalinger i samme tidsrom fra Arena. Man vil ogs\xe5 f\xe5 informasjon om ulike typer trekk for utbetalingen,\neksempelvis skattetrekk."]}),"\n",(0,i.jsx)(n.h3,{id:"\xf8yeblikksbilde",children:"\xd8yeblikksbilde"}),"\n",(0,i.jsx)(n.p,{children:"Simuleringen er et \xf8yeblikksbilde som hensyntar tilstanden i Oppdragssystemet i det tidspunktet man utf\xf8rer simuleringen. Dersom man iverksetter utbetalingen\nen stund etter simuleringen, kan tilstanden ha endret seg og resultatet vil derfor kunne bli annerledes."}),"\n",(0,i.jsx)(n.h2,{id:"hvorfor-gj\xf8re-simulering",children:"Hvorfor gj\xf8re simulering"}),"\n",(0,i.jsx)(n.p,{children:"Typisk gj\xf8res simulering i en saksbehandlingskontekst, ofte for revurderingsbehandlinger. Saksbehandler kan da sjekke om resultatet av iverksettingen vil bli slik\nhen forventer, og om brukeren har evt. andre utbetalinger som vil kunne p\xe5virke beregningen. I noen saksbehandlingsl\xf8sninger brukes ogs\xe5 simulering for \xe5 forutsi og\nevt. varsle bruker om at revurderingen vil trigge en tilbakekrevingsbehandling."}),"\n",(0,i.jsx)(n.h2,{id:"oppsett-for-arena-ytelsene",children:"Oppsett for Arena-ytelsene"}),"\n",(0,i.jsx)(n.p,{children:"Motregningsgruppe er et subset av ytelser i en faggruppe, men som kan motregnes mot hverandre. N\xe5r man simulerer inneholder responsen informasjon om ytelser i samme faggruppe. Eksempel p\xe5 faggruppe er arbeidsytelser (ARBYT) a.k.a Arena-ytelser."}),"\n",(0,i.jsx)(n.h2,{id:"\xe5pningstid",children:"\xc5pningstid"}),"\n",(0,i.jsx)(n.p,{children:"Oppdragssystemet (OS) opererer med \xe5pningstider fra 6 om morgenen til 21 om kvelden, mandag til fredag. OS er ogs\xe5 stengt p\xe5 helligdager.\nOm man pr\xf8ver \xe5 bruke simuleringstjenesten n\xe5r OS er stengt vil man f\xe5 en 503-respons."}),"\n",(0,i.jsx)(n.h2,{id:"eksempler",children:"Eksempler"}),"\n",(0,i.jsx)(n.p,{children:"Tabellen under viser tre behandlinger for perioden februar t.o.m. april"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{align:"left",children:"Behandlinger"}),(0,i.jsx)(n.th,{align:"center",children:"Februar"}),(0,i.jsx)(n.th,{align:"center",children:"Mars"}),(0,i.jsx)(n.th,{align:"right",children:"April"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{align:"left",children:"18/5"}),(0,i.jsx)(n.td,{align:"center",children:"1000"}),(0,i.jsx)(n.td,{align:"center",children:"1000"}),(0,i.jsx)(n.td,{align:"right",children:"1000"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{align:"left",children:"22/5"}),(0,i.jsx)(n.td,{align:"center"}),(0,i.jsx)(n.td,{align:"center",children:"800"}),(0,i.jsx)(n.td,{align:"right"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{align:"left",children:"23/5"}),(0,i.jsx)(n.td,{align:"center",children:"1100"}),(0,i.jsx)(n.td,{align:"center",children:"1100"}),(0,i.jsx)(n.td,{align:"right",children:"1100"})]})]})]}),"\n",(0,i.jsx)(n.p,{children:"F\xf8rste behandling sendes inn 18/5 og er p\xe5 1000 kr pr m\xe5ned. Oppsummeringen fra simuleringstjenesten blir seendes slik ut:"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{align:"left",children:"Oppsummering"}),(0,i.jsx)(n.th,{align:"center",children:"Februar"}),(0,i.jsx)(n.th,{align:"center",children:"Mars"}),(0,i.jsx)(n.th,{align:"right",children:"April"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{align:"left",children:"tidligereUtbetalt"}),(0,i.jsx)(n.td,{align:"center",children:"0"}),(0,i.jsx)(n.td,{align:"center",children:"0"}),(0,i.jsx)(n.td,{align:"right",children:"0"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{align:"left",children:"nyUtbetaling"}),(0,i.jsx)(n.td,{align:"center",children:"1000"}),(0,i.jsx)(n.td,{align:"center",children:"1000"}),(0,i.jsx)(n.td,{align:"right",children:"1000"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{align:"left",children:"totalEtterbetaling"}),(0,i.jsx)(n.td,{align:"center",children:"0"}),(0,i.jsx)(n.td,{align:"center",children:"0"}),(0,i.jsx)(n.td,{align:"right",children:"0"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{align:"left",children:"totalFeilutbetaling"}),(0,i.jsx)(n.td,{align:"center",children:"0"}),(0,i.jsx)(n.td,{align:"center",children:"0"}),(0,i.jsx)(n.td,{align:"right",children:"0"})]})]})]}),"\n",(0,i.jsx)(n.p,{children:"Andre behandling sendes inn 22/5. Der revurderer man mars og sier at bruker skal f\xe5 utbetalt 800 kr, ikke 1000 kr som det opprinnelig var:"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{align:"left",children:"Oppsummering"}),(0,i.jsx)(n.th,{align:"center",children:"Februar"}),(0,i.jsx)(n.th,{align:"center",children:"Mars"}),(0,i.jsx)(n.th,{align:"right",children:"April"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{align:"left",children:"tidligereUtbetalt"}),(0,i.jsx)(n.td,{align:"center",children:"1000"}),(0,i.jsx)(n.td,{align:"center",children:"1000"}),(0,i.jsx)(n.td,{align:"right",children:"1000"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{align:"left",children:"nyUtbetaling"}),(0,i.jsx)(n.td,{align:"center",children:"0"}),(0,i.jsx)(n.td,{align:"center",children:"800"}),(0,i.jsx)(n.td,{align:"right",children:"0"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{align:"left",children:"totalEtterbetaling"}),(0,i.jsx)(n.td,{align:"center",children:"0"}),(0,i.jsx)(n.td,{align:"center",children:"0"}),(0,i.jsx)(n.td,{align:"right",children:"0"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{align:"left",children:"totalFeilutbetaling"}),(0,i.jsx)(n.td,{align:"center",children:"0"}),(0,i.jsx)(n.td,{align:"center",children:"200"}),(0,i.jsx)(n.td,{align:"right",children:"0"})]})]})]}),"\n",(0,i.jsx)(n.p,{children:"Andre behandling sendes inn 23/5. Der revurderer man alle periodene til 1100 kr pr. m\xe5ned:"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{align:"left",children:"Oppsummering"}),(0,i.jsx)(n.th,{align:"center",children:"Februar"}),(0,i.jsx)(n.th,{align:"center",children:"Mars"}),(0,i.jsx)(n.th,{align:"right",children:"April"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{align:"left",children:"tidligereUtbetalt"}),(0,i.jsx)(n.td,{align:"center",children:"1000"}),(0,i.jsx)(n.td,{align:"center",children:"800"}),(0,i.jsx)(n.td,{align:"right",children:"1000"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{align:"left",children:"nyUtbetaling"}),(0,i.jsx)(n.td,{align:"center",children:"1100"}),(0,i.jsx)(n.td,{align:"center",children:"1100"}),(0,i.jsx)(n.td,{align:"right",children:"1100"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{align:"left",children:"totalEtterbetaling"}),(0,i.jsx)(n.td,{align:"center",children:"100"}),(0,i.jsx)(n.td,{align:"center",children:"300"}),(0,i.jsx)(n.td,{align:"right",children:"100"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{align:"left",children:"totalFeilutbetaling"}),(0,i.jsx)(n.td,{align:"center",children:"0"}),(0,i.jsx)(n.td,{align:"center",children:"0"}),(0,i.jsx)(n.td,{align:"right",children:"0"})]})]})]})]})}let h={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,a.a)(),e.components);return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(g,{...e})}):g(e)},pageOpts:{filePath:"pages/utbetaling/simulering.mdx",route:"/utbetaling/simulering",frontMatter:{title:"Simulering"},pageMap:[{kind:"Meta",data:{kom_i_gang:"Kom i gang",utbetaling:"Utbetaling",avstemming:"Avstemming",status:"Status",index:"Om tjenesten"}},{kind:"MdxPage",name:"avstemming",route:"/avstemming",frontMatter:{title:"Avstemming"}},{kind:"MdxPage",name:"index",route:"/",frontMatter:{title:"Om tjenesten"}},{kind:"MdxPage",name:"kom_i_gang",route:"/kom_i_gang",frontMatter:{title:"Kom i gang"}},{kind:"MdxPage",name:"status",route:"/status",frontMatter:{title:"Status p\xe5 utbetaling"}},{kind:"Folder",name:"utbetaling",route:"/utbetaling",children:[{kind:"MdxPage",name:"FAQ",route:"/utbetaling/FAQ",frontMatter:{title:"FAQ"}},{kind:"Meta",data:{iverksetting:"Iverksetting",simulering:"Simulering",data_inn:"Data inn",meldepliktsytelser:"Meldepliktsytelser",FAQ:"FAQ"}},{kind:"Folder",name:"data_inn",route:"/utbetaling/data_inn",children:[{kind:"Meta",data:{beskrivelse:"Beskrivelse av felter",eksempler:"Eksempeldata"}},{kind:"MdxPage",name:"beskrivelse",route:"/utbetaling/data_inn/beskrivelse",frontMatter:{title:"Beskrivelse av felter"}},{kind:"MdxPage",name:"eksempler",route:"/utbetaling/data_inn/eksempler",frontMatter:{title:"Eksempeldata"}}]},{kind:"MdxPage",name:"iverksetting",route:"/utbetaling/iverksetting",frontMatter:{title:"Iverksetting"}},{kind:"MdxPage",name:"meldepliktsytelser",route:"/utbetaling/meldepliktsytelser",frontMatter:{title:"Meldepliktsytelser"}},{kind:"MdxPage",name:"simulering",route:"/utbetaling/simulering",frontMatter:{title:"Simulering"}}]}],flexsearch:{codeblocks:!0},title:"Simulering",headings:d},pageNextRoute:"/utbetaling/simulering",nextraLayout:l.ZP,themeConfig:s.Z};n.default=(0,r.j)(h)},6053:function(e,n,t){"use strict";t.d(n,{Z:function(){return v}});var i=t(5893);t(7294);var r=t(1664),l=t.n(r),s=t(3419),a=t(5675),d=t.n(a),g=t(714),h=t(428),c=t(449),o=t.n(c),j=t(1609),x=t.n(j),u=t(3511),m=t(6222),k=t.n(m),p=t(4087),b=t(1163);let f=e=>"".concat(e.title," - utsjekk");var v={logo:(0,i.jsx)(()=>(0,i.jsxs)(g.U,{gap:"6",align:"center",children:[(0,i.jsx)(d(),{src:"/utsjekk-docs/_next/static/media/nav-logo-red.d4f54b6e.svg",alt:"",width:"64",height:"20"}),(0,i.jsx)("span",{className:o().headerDivider}),(0,i.jsx)(h.Z,{weight:"semibold",size:"large",children:"utsjekk"})]}),{}),project:{link:"https://github.com/navikt/utsjekk"},head:()=>{let{asPath:e,defaultLocale:n,locale:t}=(0,b.useRouter)(),{frontMatter:r}=(0,p.ZR)(),l="https://navikt.github.io/utsjekk"+(n===t?e:"/".concat(t).concat(e));return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("title",{children:f(r)}),(0,i.jsx)("meta",{property:"og:url",content:l}),(0,i.jsx)("meta",{property:"og:title",content:"".concat(r.title," - utsjekk")}),(0,i.jsx)("meta",{property:"og:description",content:r.description})]})},docsRepositoryBase:"https://github.com/navikt/utsjekk",footer:{text:"\xa9 2023 NAV IT"},feedback:{content:(0,i.jsx)(e=>{let{children:n}=e;return(0,i.jsxs)(s.Z,{className:k().label,children:[n," ",(0,i.jsx)(u.Z,{})]})},{children:"Gi oss tilbakemelding"})},editLink:{text:(0,i.jsx)(s.Z,{children:"Rediger denne siden"}),component:e=>{let{className:n,children:t,filePath:r}=e;return(0,i.jsx)(l(),{className:n,href:"https://github.com/navikt/utsjekk/blob/docs/".concat(r),children:t})}},toc:{title:(0,i.jsx)("span",{style:{color:"var(--a-text-default"},children:"P\xe5 denne siden"})},search:{placeholder:"S\xf8k i dokumentasjonen",emptyResult:(0,i.jsx)(()=>(0,i.jsx)(g.U,{className:x().container,justify:"center",align:"center",children:(0,i.jsx)(s.Z,{children:"Ingen treff"})}),{})}}},6222:function(e){e.exports={label:"ExternalLabel_label__BifXB"}},1609:function(e){e.exports={container:"IngenTreff_container__FJnjf"}},449:function(e){e.exports={headerDivider:"Logo_headerDivider__2JJVQ"}}},function(e){e.O(0,[416,888,774,179],function(){return e(e.s=1466)}),_N_E=e.O()}]);