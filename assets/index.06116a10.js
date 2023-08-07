import{d as t,c as e,a as i,w as n,o,b as r,e as s,p as a,f as c,r as l,t as u,g as f,h as g,S as d,n as p,i as N}from"./vendor.9ee153d1.js";!function(t=".",e="__import__"){try{self[e]=new Function("u","return import(u)")}catch(i){const n=new URL(t,location),o=t=>{URL.revokeObjectURL(t.src),t.remove()};self[e]=t=>new Promise(((i,r)=>{const s=new URL(t,n);if(self[e].moduleMap[s])return i(self[e].moduleMap[s]);const a=new Blob([`import * as m from '${s}';`,`${e}.moduleMap['${s}']=m;`],{type:"text/javascript"}),c=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(a),onerror(){r(new Error(`Failed to import: ${t}`)),o(c)},onload(){i(self[e].moduleMap[s]),o(c)}});document.head.appendChild(c)})),self[e].moduleMap={}}}("assets/");const k=t({props:{note:{type:String,required:!0},firstNote:{type:String,required:!0}},emits:["strike"],setup:(t,i)=>({color:e((()=>t.note.includes("#")?"black":"white")),isFirstNote:e((()=>t.note===t.firstNote)),strike:()=>{i.emit("strike",t.note)}})}),v=n()(((t,e,n,r,s,a)=>(o(),i("div",{class:["key",[t.color,{isFirstNote:t.isFirstNote}]],onClick:e[1]||(e[1]=(...e)=>t.strike&&t.strike(...e))},null,2))));k.render=v,k.__scopeId="data-v-110b8e47";const S=t({components:{KeyNote:k},props:{octaveNumber:{type:Number,required:!0},hasHigherC:{type:Boolean,default:!1},firstNote:{type:String,required:!0}},emits:["strike"],setup:(t,e)=>({strike:t=>{e.emit("strike",t)}})}),h=n();a("data-v-2e4d2d90");const m={class:"octave"},y={class:"keyUnit"},b={class:"keyUnit"},C={class:"keyUnit"},R={class:"keyUnit"},T={class:"keyUnit"},A={class:"keyUnit"},w={class:"keyUnit"},H={key:0,class:"keyUnit"};c();const I=h(((t,e,n,a,c,u)=>{const f=l("KeyNote");return o(),i("div",m,[r("div",y,[r(f,{note:"C"+t.octaveNumber,firstNote:t.firstNote,onStrike:t.strike},null,8,["note","firstNote","onStrike"]),r(f,{class:"keyBlackOuter",note:"C#"+t.octaveNumber,firstNote:t.firstNote,onStrike:t.strike},null,8,["note","firstNote","onStrike"])]),r("div",b,[r(f,{note:"D"+t.octaveNumber,firstNote:t.firstNote,onStrike:t.strike},null,8,["note","firstNote","onStrike"]),r(f,{class:"keyBlackOuter",note:"D#"+t.octaveNumber,firstNote:t.firstNote,onStrike:t.strike},null,8,["note","firstNote","onStrike"])]),r("div",C,[r(f,{note:"E"+t.octaveNumber,firstNote:t.firstNote,onStrike:t.strike},null,8,["note","firstNote","onStrike"])]),r("div",R,[r(f,{note:"F"+t.octaveNumber,firstNote:t.firstNote,onStrike:t.strike},null,8,["note","firstNote","onStrike"]),r(f,{class:"keyBlackOuter",note:"F#"+t.octaveNumber,firstNote:t.firstNote,onStrike:t.strike},null,8,["note","firstNote","onStrike"])]),r("div",T,[r(f,{note:"G"+t.octaveNumber,firstNote:t.firstNote,onStrike:t.strike},null,8,["note","firstNote","onStrike"]),r(f,{class:"keyBlackOuter",note:"G#"+t.octaveNumber,firstNote:t.firstNote,onStrike:t.strike},null,8,["note","firstNote","onStrike"])]),r("div",A,[r(f,{note:"A"+t.octaveNumber,firstNote:t.firstNote,onStrike:t.strike},null,8,["note","firstNote","onStrike"]),r(f,{class:"keyBlackOuter",note:"A#"+t.octaveNumber,firstNote:t.firstNote,onStrike:t.strike},null,8,["note","firstNote","onStrike"])]),r("div",w,[r(f,{note:"B"+t.octaveNumber,firstNote:t.firstNote,onStrike:t.strike},null,8,["note","firstNote","onStrike"])]),t.hasHigherC?(o(),i("div",H,[r(f,{note:"C"+(t.octaveNumber+1),firstNote:t.firstNote,onStrike:t.strike},null,8,["note","firstNote","onStrike"])])):s("",!0)])}));S.render=I,S.__scopeId="data-v-2e4d2d90";const O=t({components:{Octave:S},props:{firstNote:{type:String,required:!0}},emits:["strike"],setup:(t,e)=>({strike:t=>{e.emit("strike",t)}})}),_=n();a("data-v-129cf14f");const U={class:"keyboard"};c();const q=_(((t,e,n,s,a,c)=>{const u=l("Octave");return o(),i("div",U,[r(u,{octaveNumber:4,hasHigherC:!1,firstNote:t.firstNote,onStrike:t.strike},null,8,["firstNote","onStrike"]),r(u,{octaveNumber:5,hasHigherC:!0,firstNote:t.firstNote,onStrike:t.strike},null,8,["firstNote","onStrike"])])}));O.render=q,O.__scopeId="data-v-129cf14f";const B=t({props:{isTraining:{type:Boolean,required:!0},firstNote:{type:String,required:!0},testNote:{type:String,required:!0},testCount:{type:Number,required:!0},correctAnswerCount:{type:Number,required:!0},testResult:{type:String,required:!0}},setup:t=>({testNoteDisplay:e((()=>t.isTraining?"?":t.testNote))})}),D=n();a("data-v-746caeff");const G={class:"statusPanel"},F={key:0},L={key:1};c();const M=D(((t,e,n,a,c,l)=>(o(),i("div",G,[r("div",null,u(t.firstNote)+" → "+u(t.testNoteDisplay),1),"OK"==t.testResult?(o(),i("div",F,"Great")):s("",!0),"NG"==t.testResult?(o(),i("div",L,"Wrong")):s("",!0),r("div",null,"正解数 "+u(t.correctAnswerCount)+" / "+u(t.testCount),1)]))));B.render=M,B.__scopeId="data-v-746caeff";const P=t({components:{},props:{transitionSpecification:{type:String,required:!0},intervalRangeHigher:{type:String,required:!0}},emits:["startTraining","listenAgain","changeTransitionSpecification","changeIntervalRangeHigher"],setup:(t,e)=>({startTraining:()=>{e.emit("startTraining")},listenAgain:()=>{e.emit("listenAgain")},changeTransitionSpecification:t=>{e.emit("changeTransitionSpecification",t.target.value)},changeIntervalRangeHigher:t=>{e.emit("changeIntervalRangeHigher",t.target.value)}})}),j=n();a("data-v-51fd805a");const E={class:"controlPanel"},K={class:"row"},$=r("div",null,"推移指定",-1),x=r("label",{for:"0"},"指定なし",-1),W=r("label",{for:"1"},"上昇のみ",-1),z=r("label",{for:"2"},"下降のみ",-1),J={class:"row"},Q=r("div",null,"範囲指定",-1),V=f('<option value="8" data-v-51fd805a>8度（1オクターブ）</option><option value="7" data-v-51fd805a>7度</option><option value="6" data-v-51fd805a>6度</option><option value="5" data-v-51fd805a>5度</option><option value="4" data-v-51fd805a>4度</option><option value="3" data-v-51fd805a>3度</option>',6),X={class:"row buttonGroup"};c();const Y=j(((t,e,n,s,a,c)=>(o(),i("div",E,[r("div",K,[$,r("div",null,[r("input",{type:"radio",id:"0",name:"transitionSpecification",value:"unspecified",checked:"unspecified"===t.transitionSpecification,onClick:e[1]||(e[1]=(...e)=>t.changeTransitionSpecification&&t.changeTransitionSpecification(...e))},null,8,["checked"]),x,r("input",{type:"radio",id:"1",name:"transitionSpecification",value:"ascent",checked:"ascent"===t.transitionSpecification,onClick:e[2]||(e[2]=(...e)=>t.changeTransitionSpecification&&t.changeTransitionSpecification(...e))},null,8,["checked"]),W,r("input",{type:"radio",id:"2",name:"transitionSpecification",value:"descent",checked:"descent"===t.transitionSpecification,onClick:e[3]||(e[3]=(...e)=>t.changeTransitionSpecification&&t.changeTransitionSpecification(...e))},null,8,["checked"]),z])]),r("div",J,[Q,r("select",{class:"select",name:"intervalRangeHigher",value:t.intervalRangeHigher,onChange:e[4]||(e[4]=(...e)=>t.changeIntervalRangeHigher&&t.changeIntervalRangeHigher(...e))},[V],40,["value"])]),r("div",X,[r("button",{class:"button",type:"button",onClick:e[5]||(e[5]=(...e)=>t.startTraining&&t.startTraining(...e))},"START"),r("button",{class:"button",type:"button",onClick:e[6]||(e[6]=(...e)=>t.listenAgain&&t.listenAgain(...e))}," LISTEN AGAIN ")])]))));P.render=Y,P.__scopeId="data-v-51fd805a";const Z=t({components:{Keyboard:O,StatusPanel:B,ControlPanel:P},setup(t){const e=g({isTraining:!1,firstNote:"",testNote:"",transitionSpecification:"unspecified",intervalRangeHigher:"8",testCount:0,correctAnswerCount:0,testResult:""}),i=["C4","D4","E4","F4","G4","A4","B4","C5","D5","E5","F5","G5","A5","B5","C6"],n=(new d).toDestination(),o=()=>{const t=parseInt(e.intervalRangeHigher,10),i=a(t);if("ascent"===e.transitionSpecification)r(i);else if("descent"===e.transitionSpecification)s(i);else{1===Math.floor(2*Math.random())?r(i):s(i)}console.log("testNotesObj",i),console.log("state.firstNote",e.firstNote),console.log("state.testNote",e.testNote)},r=t=>{e.firstNote=t.lowerNote,e.testNote=t.higherNote},s=t=>{e.firstNote=t.higherNote,e.testNote=t.lowerNote},a=t=>{const e=[...Array(t).keys()].map((t=>++t)).slice(1),n=c(e),o=-(n-1),r=i.slice(0,o),s=c(r),a=i.indexOf(s);return{lowerNote:s,higherNote:i[a+(n-1)],selectedDigree:n}},c=t=>t[Math.floor(Math.random()*t.length)],l=(t,e)=>{const i=p();n.triggerAttackRelease(t,"8n",i),n.triggerAttackRelease(e,"8n",i+1)},u=t=>{console.log("checkNote"),e.testCount++,t===e.testNote?(console.log("GOOD"),e.correctAnswerCount++,e.testResult="OK"):(console.log("BAD"),e.testResult="NG"),e.isTraining=!1},f=()=>{e.testCount=0,e.correctAnswerCount=0};return{state:e,startTraining:()=>{console.log("startTraining"),e.isTraining=!0,e.testResult="",o(),l(e.firstNote,e.testNote)},listenAgain:()=>{e.isTraining&&l(e.firstNote,e.testNote)},changeTransitionSpecification:t=>{e.transitionSpecification=t,f()},changeIntervalRangeHigher:t=>{e.intervalRangeHigher=t,f()},strike:t=>{console.log("note",t),n.triggerAttackRelease(t,"8n"),!0===e.isTraining&&u(t)}}}}),tt=n();a("data-v-068f1093");const et={class:"container"};c();const it=tt(((t,e,n,s,a,c)=>{const u=l("StatusPanel"),f=l("Keyboard"),g=l("ControlPanel");return o(),i("div",et,[r(u,{isTraining:t.state.isTraining,firstNote:t.state.firstNote,testNote:t.state.testNote,testCount:t.state.testCount,correctAnswerCount:t.state.correctAnswerCount,testResult:t.state.testResult},null,8,["isTraining","firstNote","testNote","testCount","correctAnswerCount","testResult"]),r(f,{firstNote:t.state.firstNote,onStrike:t.strike},null,8,["firstNote","onStrike"]),r(g,{transitionSpecification:t.state.transitionSpecification,intervalRangeHigher:t.state.intervalRangeHigher,onStartTraining:t.startTraining,onListenAgain:t.listenAgain,onChangeTransitionSpecification:t.changeTransitionSpecification,onChangeIntervalRangeHigher:t.changeIntervalRangeHigher},null,8,["transitionSpecification","intervalRangeHigher","onStartTraining","onListenAgain","onChangeTransitionSpecification","onChangeIntervalRangeHigher"])])}));Z.render=it,Z.__scopeId="data-v-068f1093";var nt=t({components:{Page:Z}});nt.render=function(t,e,n,r,s,a){const c=l("Page");return o(),i(c)},N(nt).mount("#app");
