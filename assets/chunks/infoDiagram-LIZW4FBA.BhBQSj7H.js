import{p as n}from"./gitGraph-YCYPL57B-RWHQZFFZ.CEvaAZQV.js";import{_ as e,l as s,aS as i,m as p,aT as g}from"../app.IfluHUW8.js";import"./chunk-TZBO7MLI.C7OI2zVv.js";import"./framework.CtAXtxNA.js";import"./theme.BfhME1fr.js";var v={parse:e(async r=>{const a=await n("info",r);s.debug(a)},"parse")},d={version:g},m=e(()=>d.version,"getVersion"),c={getVersion:m},l=e((r,a,o)=>{s.debug(`rendering info diagram
`+r);const t=i(a);p(t,100,400,!0),t.append("g").append("text").attr("x",100).attr("y",40).attr("class","version").attr("font-size",32).style("text-anchor","middle").text(`v${o}`)},"draw"),f={draw:l},y={parser:v,db:c,renderer:f};export{y as diagram};
