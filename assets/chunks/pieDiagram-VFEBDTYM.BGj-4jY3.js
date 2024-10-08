import{p as B}from"./chunk-K2ZEYYM2.CtmjKpaR.js";import{p as U}from"./gitGraph-YCYPL57B-RWHQZFFZ.CEvaAZQV.js";import{aq as q,q as V,t as X,s as Z,g as j,d as H,c as J,_ as i,l as C,x as K,e as Q,ar as Y,aS as ee,aU as te,aV as z,aW as ae,m as re,aX as ie}from"../app.IfluHUW8.js";import"./chunk-TZBO7MLI.C7OI2zVv.js";import"./framework.CtAXtxNA.js";import"./theme.BfhME1fr.js";var W=q.pie,D={sections:new Map,showData:!1,config:W},h=D.sections,w=D.showData,se=structuredClone(W),oe=i(()=>structuredClone(se),"getConfig"),ne=i(()=>{h=new Map,w=D.showData,K()},"clear"),le=i(({label:e,value:a})=>{h.has(e)||(h.set(e,a),C.debug(`added new section: ${e}, with value: ${a}`))},"addSection"),ce=i(()=>h,"getSections"),de=i(e=>{w=e},"setShowData"),pe=i(()=>w,"getShowData"),F={getConfig:oe,clear:ne,setDiagramTitle:V,getDiagramTitle:X,setAccTitle:Z,getAccTitle:j,setAccDescription:H,getAccDescription:J,addSection:le,getSections:ce,setShowData:de,getShowData:pe},ge=i((e,a)=>{B(e,a),a.setShowData(e.showData),e.sections.map(a.addSection)},"populateDb"),ue={parse:i(async e=>{const a=await U("pie",e);C.debug(a),ge(a,F)},"parse")},fe=i(e=>`
  .pieCircle{
    stroke: ${e.pieStrokeColor};
    stroke-width : ${e.pieStrokeWidth};
    opacity : ${e.pieOpacity};
  }
  .pieOuterCircle{
    stroke: ${e.pieOuterStrokeColor};
    stroke-width: ${e.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${e.pieTitleTextSize};
    fill: ${e.pieTitleTextColor};
    font-family: ${e.fontFamily};
  }
  .slice {
    font-family: ${e.fontFamily};
    fill: ${e.pieSectionTextColor};
    font-size:${e.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${e.pieLegendTextColor};
    font-family: ${e.fontFamily};
    font-size: ${e.pieLegendTextSize};
  }
`,"getStyles"),he=fe,me=i(e=>{const a=[...e.entries()].map(s=>({label:s[0],value:s[1]})).sort((s,n)=>n.value-s.value);return ie().value(s=>s.value)(a)},"createPieArcs"),Se=i((e,a,G,s)=>{C.debug(`rendering pie chart
`+e);const n=s.db,y=Q(),T=Y(n.getConfig(),y.pie),$=40,o=18,p=4,l=450,m=l,S=ee(a),c=S.append("g");c.attr("transform","translate("+m/2+","+l/2+")");const{themeVariables:r}=y;let[A]=te(r.pieOuterStrokeWidth);A??(A=2);const _=T.textPosition,g=Math.min(m,l)/2-$,M=z().innerRadius(0).outerRadius(g),O=z().innerRadius(g*_).outerRadius(g*_);c.append("circle").attr("cx",0).attr("cy",0).attr("r",g+A/2).attr("class","pieOuterCircle");const E=n.getSections(),v=me(E),P=[r.pie1,r.pie2,r.pie3,r.pie4,r.pie5,r.pie6,r.pie7,r.pie8,r.pie9,r.pie10,r.pie11,r.pie12],d=ae(P);c.selectAll("mySlices").data(v).enter().append("path").attr("d",M).attr("fill",t=>d(t.data.label)).attr("class","pieCircle");let b=0;E.forEach(t=>{b+=t}),c.selectAll("mySlices").data(v).enter().append("text").text(t=>(t.data.value/b*100).toFixed(0)+"%").attr("transform",t=>"translate("+O.centroid(t)+")").style("text-anchor","middle").attr("class","slice"),c.append("text").text(n.getDiagramTitle()).attr("x",0).attr("y",-(l-50)/2).attr("class","pieTitleText");const x=c.selectAll(".legend").data(d.domain()).enter().append("g").attr("class","legend").attr("transform",(t,u)=>{const f=o+p,I=f*d.domain().length/2,L=12*o,N=u*f-I;return"translate("+L+","+N+")"});x.append("rect").attr("width",o).attr("height",o).style("fill",d).style("stroke",d),x.data(v).append("text").attr("x",o+p).attr("y",o-p).text(t=>{const{label:u,value:f}=t.data;return n.getShowData()?`${u} [${f}]`:u});const R=Math.max(...x.selectAll("text").nodes().map(t=>(t==null?void 0:t.getBoundingClientRect().width)??0)),k=m+$+o+p+R;S.attr("viewBox",`0 0 ${k} ${l}`),re(S,l,k,T.useMaxWidth)},"draw"),ve={draw:Se},$e={parser:ue,db:F,renderer:ve,styles:he};export{$e as diagram};
