(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[935],{1722:(e,t,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/kom_i_gang/utbetaling/simulering",function(){return n(1907)}])},1907:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>a,useTOC:()=>d});var r=n(4848),i=n(7849),l=n(800),s=n(1355);function d(e){return[{value:"Hva er simulering",id:"hva-er-simulering",depth:2},{value:"\xd8yeblikksbilde",id:"\xf8yeblikksbilde",depth:3},{value:"Hvorfor gj\xf8re simulering",id:"hvorfor-gj\xf8re-simulering",depth:2},{value:"Oppsett for Arena-ytelsene i \xd8konomisystemet",id:"oppsett-for-arena-ytelsene-i-\xf8konomisystemet",depth:2},{value:"Regler ved \xf8kning og reduksjon av bel\xf8p",id:"regler-ved-\xf8kning-og-reduksjon-av-bel\xf8p",depth:3},{value:"\xc5pningstid",id:"\xe5pningstid",depth:2},{value:"Respons fra Utsjekk",id:"respons-fra-utsjekk",depth:2},{value:"Tidligere utbetalt",id:"tidligere-utbetalt",depth:3},{value:"Nytt bel\xf8p",id:"nytt-bel\xf8p",depth:3},{value:"Etterbetaling",id:"etterbetaling",depth:3},{value:"Feilutbetaling",id:"feilutbetaling",depth:3},{value:"Eksempler",id:"eksempler",depth:2}]}let a=(0,i.e)(function(e){let{toc:t=d(e)}=e,n={a:"a",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{children:"Simulering"}),"\n",(0,r.jsx)(n.h2,{id:t[0].id,children:t[0].value}),"\n",(0,r.jsxs)(n.p,{children:["Simulering er en “dry run” mot Oppdragssytemet (OS) og viser hvordan resultatet av en iverksetting ville blitt.\nSimuleringen kan fortelle om iverksettingen vil v\xe6re en ny utbetaling, en feilutbetaling eller en etterbetaling. I tillegg vil man f\xe5 informasjon om\niverksatte utbetalinger fra andre fagomr\xe5der innenfor samme gruppe (Se ",(0,r.jsx)(n.a,{href:"#regler-for-arena-ytelsene",children:"avsnitt om oppsett"}),") – for Arena-ytelsene vil man\neksempelvis kunne se om brukeren har utbetalinger i samme tidsrom fra Arena. Man vil ogs\xe5 f\xe5 informasjon om ulike typer trekk for utbetalingen,\neksempelvis skattetrekk."]}),"\n",(0,r.jsx)(n.h3,{id:t[1].id,children:t[1].value}),"\n",(0,r.jsx)(n.p,{children:"Simuleringen er et \xf8yeblikksbilde som hensyntar tilstanden i OS i det tidspunktet man utf\xf8rer simuleringen. Dersom man iverksetter utbetalingen\nen stund etter simuleringen, kan tilstanden ha endret seg og resultatet vil derfor kunne bli annerledes."}),"\n",(0,r.jsx)(n.h2,{id:t[2].id,children:t[2].value}),"\n",(0,r.jsx)(n.p,{children:"Typisk gj\xf8res simulering i en saksbehandlingskontekst, ofte for revurderingsbehandlinger. Saksbehandler kan da sjekke om resultatet av behandlingen vil bli som forventet, og om brukeren har evt. andre utbetalinger som vil kunne p\xe5virke beregningen. I noen saksbehandlingsl\xf8sninger brukes ogs\xe5 simulering for \xe5 forutsi og\nevt. varsle bruker om at revurderingen vil trigge en tilbakekrevingsbehandling."}),"\n",(0,r.jsx)(n.h2,{id:t[3].id,children:t[3].value}),"\n",(0,r.jsxs)(n.p,{children:["OS er strukturert med ",(0,r.jsx)(n.em,{children:"fagomr\xe5der"})," og ",(0,r.jsx)(n.em,{children:"faggrupper"}),". Et fagomr\xe5de tilsvarer en ytelse, eller mer spesifikt \xe9n vedtaksl\xf8sning. I OS er\neksempelvis dagpenger i ny vedtaksl\xf8sning, dagpenger i Arena, og s\xe5kalte manuelle posteringer p\xe5 dagpenger tre ulike fagomr\xe5der. Dette gjelder alle Arena-ytelsene."]}),"\n",(0,r.jsxs)(n.p,{children:["Fagomr\xe5der som logisk eller faglig sett h\xf8rer sammen grupperes i samme ",(0,r.jsx)(n.em,{children:"faggruppe"}),". I OS er AAP, dagpenger, tiltakspenger og tilleggsst\xf8nader gruppert sammen i\nfaggruppen som heter ARBYT (for ",(0,r.jsx)(n.em,{children:"arbeidsytelser"}),"). Det er en del regler og konfigurasjon i OS som settes p\xe5 faggruppe-niv\xe5."]}),"\n",(0,r.jsxs)(n.p,{children:["I tillegg har OS et konsept som heter ",(0,r.jsx)(n.em,{children:"motregningsgruppe"}),". En motregningsgruppe er et subset av fagomr\xe5der i en faggruppe som kan motregnes mot hverandre.\nDet betyr at en reduksjon i utbetalingen p\xe5 et fagomr\xe5de kan “nulles ut” mot en \xf8kning i utbetalingen p\xe5 et annet fagomr\xe5de. Arena-ytelsene er satt opp til \xe5 motregnes\nmellom alle fagomr\xe5dene som tilsvarer den samme ytelsen. For f.eks. dagpenger er det alts\xe5 motregning mellom ny vedtaksl\xf8sning og Arena, men det er ingen motregning p\xe5 tvers av\nytelsene."]}),"\n",(0,r.jsx)(n.h3,{id:t[4].id,children:t[4].value}),"\n",(0,r.jsx)(n.p,{children:"I noen tilfeller vil en og samme revurdering \xf8ke bel\xf8pet i en periode, og redusere bel\xf8pet en annen periode. OS har regler for hvordan slike caser skal h\xe5ndteres avhengig av periodene.\nReglene er som f\xf8lger:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Reduksjon og \xf8kning innenfor samme m\xe5ned justeres mot hverandre."}),"\n",(0,r.jsxs)(n.li,{children:["Reduksjon en m\xe5ned og \xf8kning ",(0,r.jsx)(n.em,{children:"p\xe5f\xf8lgende"})," m\xe5ned justeres mot hverandre."]}),"\n",(0,r.jsx)(n.li,{children:"I alle andre tilfeller vil reduksjonen og \xf8kningen h\xe5ndteres hver for seg. Bruker vil b\xe5de f\xe5 et kravgrunnlag for reduksjonen og en etterbetaling for \xf8kningen."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Disse reglene gjelder p\xe5 faggruppeniv\xe5, alts\xe5 for b\xe5de AAP, dagpenger, tiltakspenger og tilleggsst\xf8nader."}),"\n",(0,r.jsx)(n.h2,{id:t[5].id,children:t[5].value}),"\n",(0,r.jsx)(n.p,{children:"OS opererer med \xe5pningstider fra 6 om morgenen til 21 om kvelden, mandag til fredag. OS er ogs\xe5 stengt p\xe5 helligdager.\nOm man pr\xf8ver \xe5 bruke simuleringstjenesten n\xe5r OS er stengt vil man f\xe5 en 503-respons fra Utsjekk."}),"\n",(0,r.jsx)(n.h2,{id:t[6].id,children:t[6].value}),"\n",(0,r.jsx)(n.p,{children:"Utsjekk deler opp responsen i to felter: Oppsummering og detaljer. Oppsummeringen best\xe5r av fire felter: tidligere utbetalt, nytt bel\xf8p, etterbetaling og feilutbetaling. Detaljene er en forenklet form av r\xe5dataen fra OS, og kan lagres\nsom en del av saksgrunnlaget i vedtaksl\xf8sningen. Feltene i oppsummeringen er basert p\xe5 det vi tror er nyttig \xe5 vite i en saksbehandlingskontekst. Dersom dere har behov for andre datapunkter, eksempelvis trekk, kan dere ta kontakt\nmed oss. Under f\xf8lger en funksjonell beskrivelse av de ulike feltene i oppsummeringen."}),"\n",(0,r.jsx)(n.h3,{id:t[7].id,children:t[7].value}),"\n",(0,r.jsx)(n.p,{children:"Dette feltet viser totalbel\xf8pet som er utbetalt til bruker p\xe5 saken tidligere, for perioden oppsummeringen gjelder for."}),"\n",(0,r.jsx)(n.h3,{id:t[8].id,children:t[8].value}),"\n",(0,r.jsxs)(n.p,{children:["Dette feltet viser det ",(0,r.jsx)(n.em,{children:"nye gjeldende totalbel\xf8pet"})," som skal utbetales til bruker for perioden. Dette er ikke n\xf8dvendigvis det som faktisk blir brutto utbetalt\n– hvis simuleringen gjelder en revurdering, m\xe5 det nye bel\xf8pet ses i sammenheng med det tidligere utbetalte bel\xf8pet. Er tidligere utbetalt 800 kr og nytt bel\xf8p 1000 kr,\nvil brukeren f\xe5 utbetalt 200 kr."]}),"\n",(0,r.jsx)(n.h3,{id:t[9].id,children:t[9].value}),"\n",(0,r.jsxs)(n.p,{children:["Simuleringen viser en etterbetaling dersom bruker f\xe5r en \xf8kning i utbetalingen for en periode ",(0,r.jsx)(n.em,{children:"tilbake i tid"}),". Det kan gjelde b\xe5de en helt ny utbetaling og en \xf8kning i allerede utbetalt bel\xf8p. Dersom perioden oppsummeringen gjelder for er\nfrem i tid, vil etterbetalingen alltid v\xe6re 0. Etterbetalingen kan aldri v\xe6re negativ – dersom en periode har en reduksjon i tidligere utbetalt bel\xf8p, vil etterbetalingen v\xe6re 0."]}),"\n",(0,r.jsx)(n.p,{children:"Selv om brukeren f\xe5r en ny utbetaling eller en \xf8kning i bel\xf8p, er det ikke alltid slik at etterbetalingen er differansen p\xe5 det nye bel\xf8pet og tidligere utbetalt. OS kan i noen tilfeller bruke en \xf8kning i en periode for \xe5 dekke opp for en reduksjon\ni en annen periode. Dette gjelder dersom \xf8kningen og reduksjonen skjer innenfor samme m\xe5ned, eller n\xe5r \xf8kningen skjer den p\xe5f\xf8lgende m\xe5neden etter reduksjonen."}),"\n",(0,r.jsx)(n.h3,{id:t[10].id,children:t[10].value}),"\n",(0,r.jsx)(n.p,{children:"Simuleringen vil ha en positiv feilutbetaling dersom Utsjekk mottar eksplisitte posteringer for feilutbetaling fra OS. Dette feltet er summen av disse posteringene.\nVedtaksl\xf8sningene kan anta at det vil komme et kravgrunnlag for tilbakekreving hvis simuleringen viser en positiv feilutbetaling. Feilutbetalingen vil alltid v\xe6re ikke-negativ."}),"\n",(0,r.jsx)(n.h2,{id:t[11].id,children:t[11].value}),"\n",(0,r.jsx)(n.p,{children:"Tabellen under viser tre behandlinger for perioden februar t.o.m. april"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Behandlinger"}),(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"Februar"}),(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"Mars"}),(0,r.jsx)(n.th,{style:{textAlign:"right"},children:"April"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"18/5"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"1000"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"1000"}),(0,r.jsx)(n.td,{style:{textAlign:"right"},children:"1000"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"22/5"}),(0,r.jsx)(n.td,{style:{textAlign:"center"}}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"800"}),(0,r.jsx)(n.td,{style:{textAlign:"right"}})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"23/5"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"1100"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"1100"}),(0,r.jsx)(n.td,{style:{textAlign:"right"},children:"1100"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"F\xf8rste behandling sendes inn 18/5 og er p\xe5 1000 kr pr m\xe5ned. Oppsummeringen fra simuleringstjenesten blir seendes slik ut:"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Oppsummering"}),(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"Februar"}),(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"Mars"}),(0,r.jsx)(n.th,{style:{textAlign:"right"},children:"April"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"tidligereUtbetalt"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"0"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"0"}),(0,r.jsx)(n.td,{style:{textAlign:"right"},children:"0"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"nyUtbetaling"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"1000"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"1000"}),(0,r.jsx)(n.td,{style:{textAlign:"right"},children:"1000"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"totalEtterbetaling"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"0"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"0"}),(0,r.jsx)(n.td,{style:{textAlign:"right"},children:"0"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"totalFeilutbetaling"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"0"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"0"}),(0,r.jsx)(n.td,{style:{textAlign:"right"},children:"0"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"Andre behandling sendes inn 22/5. Der revurderer man mars og sier at bruker skal f\xe5 utbetalt 800 kr, ikke 1000 kr som det opprinnelig var:"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Oppsummering"}),(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"Februar"}),(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"Mars"}),(0,r.jsx)(n.th,{style:{textAlign:"right"},children:"April"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"tidligereUtbetalt"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"1000"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"1000"}),(0,r.jsx)(n.td,{style:{textAlign:"right"},children:"1000"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"nyUtbetaling"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"0"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"800"}),(0,r.jsx)(n.td,{style:{textAlign:"right"},children:"0"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"totalEtterbetaling"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"0"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"0"}),(0,r.jsx)(n.td,{style:{textAlign:"right"},children:"0"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"totalFeilutbetaling"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"0"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"200"}),(0,r.jsx)(n.td,{style:{textAlign:"right"},children:"0"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"Andre behandling sendes inn 23/5. Der revurderer man alle periodene til 1100 kr pr. m\xe5ned:"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Oppsummering"}),(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"Februar"}),(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"Mars"}),(0,r.jsx)(n.th,{style:{textAlign:"right"},children:"April"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"tidligereUtbetalt"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"1000"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"800"}),(0,r.jsx)(n.td,{style:{textAlign:"right"},children:"1000"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"nyUtbetaling"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"1100"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"1100"}),(0,r.jsx)(n.td,{style:{textAlign:"right"},children:"1100"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"totalEtterbetaling"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"100"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"300"}),(0,r.jsx)(n.td,{style:{textAlign:"right"},children:"100"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"totalFeilutbetaling"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"0"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"0"}),(0,r.jsx)(n.td,{style:{textAlign:"right"},children:"0"})]})]})]})]})},"/kom_i_gang/utbetaling/simulering",{filePath:"pages/kom_i_gang/utbetaling/simulering.mdx",pageMap:l.O,frontMatter:{title:"Simulering"},title:"Simulering"},"undefined"==typeof RemoteContent?d:RemoteContent.useTOC)},1355:(e,t,n)=>{"use strict";n.d(t,{R:()=>a});var r=n(8453),i=n(9965),l=n.n(i),s=n(6540);let d={img:e=>(0,s.createElement)("object"==typeof e.src?l():"img",e)},a=e=>(0,r.R)({...d,...e})},7849:(e,t,n)=>{"use strict";n.d(t,{e:()=>g});var r=n(4848),i=n(3032),l=n(356);let s=(0,n(6540).createContext)({}),d=s.Provider;s.displayName="SSG";var a=n(1355);function g(e,t,n,r){let l=globalThis[i.VZ];return l.route=t,l.pageMap=n.pageMap,l.context[t]={Content:e,pageOpts:n,useTOC:r},o}function o({__nextra_pageMap:e=[],__nextra_dynamic_opts:t,...n}){let s=globalThis[i.VZ],{Layout:a,themeConfig:g}=s,{route:o,locale:m}=(0,l.r)(),u=s.context[o];if(!u)throw Error(`No content found for the "${o}" route. Please report it as a bug.`);let{pageOpts:x,useTOC:p,Content:c}=u;if(o.startsWith("/["))x.pageMap=e;else for(let{route:t,children:n}of e){let e=t.split("/").slice(m?2:1);(function e(t,[n,...r]){for(let i of t)if("children"in i&&n===i.name)return r.length?e(i.children,r):i})(x.pageMap,e).children=n}if(t){let{title:e,frontMatter:n}=t;x={...x,title:e,frontMatter:n}}return(0,r.jsx)(a,{themeConfig:g,pageOpts:x,pageProps:n,children:(0,r.jsx)(d,{value:n,children:(0,r.jsx)(h,{useTOC:p,children:(0,r.jsx)(c,{...n})})})})}function h({children:e,useTOC:t}){let{wrapper:n}=(0,a.R)();return(0,r.jsx)(m,{useTOC:t,wrapper:n,children:e})}function m({children:e,useTOC:t,wrapper:n,...i}){let l=t(i);return n?(0,r.jsx)(n,{toc:l,children:e}):e}},800:(e,t,n)=>{"use strict";n.d(t,{O:()=>r});let r=[{data:{index:{title:"Om tjenesten",type:"page"},kom_i_gang:{title:"Kom i gang",type:"page"},api_spesifikasjon:{title:"API-spesifikasjon",type:"page",theme:{layout:"full"}}}},{name:"api_spesifikasjon",route:"/api_spesifikasjon",frontMatter:{title:"API-spesifikasjon"}},{name:"index",route:"/",frontMatter:{title:"Om tjenesten"}},{name:"kom_i_gang",route:"/kom_i_gang",children:[{data:{index:"Kom i gang",utbetaling:"Utbetaling",avstemming:"Avstemming",status:"Status"}},{name:"avstemming",route:"/kom_i_gang/avstemming",frontMatter:{title:"Avstemming"}},{name:"index",route:"/kom_i_gang",frontMatter:{title:"Kom i gang"}},{name:"status",route:"/kom_i_gang/status",frontMatter:{title:"Status p\xe5 utbetaling"}},{name:"utbetaling",route:"/kom_i_gang/utbetaling",children:[{data:{iverksetting:"Iverksetting",simulering:"Simulering",data_inn:"Data inn",meldepliktsytelser:"Meldepliktsytelser",FAQ:"FAQ"}},{name:"data_inn",route:"/kom_i_gang/utbetaling/data_inn",children:[{data:{beskrivelse:"Beskrivelse av felter",eksempler:"Eksempeldata"}},{name:"beskrivelse",route:"/kom_i_gang/utbetaling/data_inn/beskrivelse",frontMatter:{title:"Beskrivelse av felter"}},{name:"eksempler",route:"/kom_i_gang/utbetaling/data_inn/eksempler",frontMatter:{title:"Eksempeldata"}}]},{name:"FAQ",route:"/kom_i_gang/utbetaling/FAQ",frontMatter:{title:"FAQ"}},{name:"iverksetting",route:"/kom_i_gang/utbetaling/iverksetting",frontMatter:{title:"Iverksetting"}},{name:"meldepliktsytelser",route:"/kom_i_gang/utbetaling/meldepliktsytelser",frontMatter:{title:"Meldepliktsytelser"}},{name:"simulering",route:"/kom_i_gang/utbetaling/simulering",frontMatter:{title:"Simulering"}}]}]}]}},e=>{var t=t=>e(e.s=t);e.O(0,[636,6593,8792],()=>t(1722)),_N_E=e.O()}]);