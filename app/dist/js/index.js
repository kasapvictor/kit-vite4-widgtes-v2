(function(){var ze=document.createElement("style");ze.textContent=`@import"https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap";:root{--color-black: #000000;--color-white: #ffffff;--color-dark: #0f172a;--color-light: #fefefe;--color-red: #dc2626;--color-orange: #fb923c;--color-yellow: #facc15;--color-green: #84cc16;--color-blue: #38bdf8;--color-blue-dark: #3b82f6;--color-purple: #c084fc;--color-gray: #94a3b8;--color-gray-light: #cbd5e1;--color-primary: var(--color-dark);--color-secondary: var(--color-white);--color-error: var(--color-red);--color-success: var(--color-green);--color-warning: var(--color-yellow);--color-info: var(--color-blue);--color-button: var(--color-dark);--screen-xs: 36em;--screen-sm: 48em;--screen-md: 62em;--screen-lg: 75em;--screen-xl: 88em;--space-4: .25rem;--space-8: .5rem;--space-10: .625rem;--space-12: .75rem;--space-16: 1rem;--space-20: 1.25rem;--space-24: 1.5rem;--space-32: 2rem;--radii-4: .25rem;--radii-8: .5rem;--radii-10: .625rem;--radii-12: .75rem;--radii-16: 1rem;--radii-20: 1.25rem;--radii-24: 1.5rem;--radii-32: 2rem;--fz-xs: .75rem;--fz-sm: .875rem;--fz-md: 1rem;--fz-lg: 1.125rem;--fz-xl: 1.5rem;--fz-h1: 2.125rem;--fz-h2: 1.625rem;--fz-h3: 1.375;--fz-h4: 1.125rem;--fz-h5: 1rem;--fz-h6: .875rem}#calculator{margin-top:4rem}#calculator *{font-family:Poppins,sans-serif}#calculator p{margin:0;padding:0}#calculator input{width:100%}#calculator input[type=number]{-moz-appearance:textfield}#calculator input[type=number]::-webkit-inner-spin-button,#calculator input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}#calculator .calculator__inner{display:-webkit-box;display:-ms-flexbox;display:flex;width:var(--screen-md);margin:0 auto;border:1px solid var(--color-gray);border-radius:var(--radii-8);overflow:hidden;-webkit-box-shadow:0 0 60px -10px var(--color-gray-light);box-shadow:0 0 60px -10px var(--color-gray-light)}#calculator .calculator__box{-webkit-box-flex:1;-ms-flex:1;flex:1;padding:var(--space-24)}#calculator .calculator__calc-box{background:var(--color-gray-light)}#calculator .calculator__form{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:var(--space-16)}#calculator .form__label{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:var(--space-4)}#calculator .label__title{font-size:var(--fz-xs);font-weight:500}#calculator .label__input{height:2.875rem;padding:var(--space-8);border:1px solid var(--color-dark);border-radius:var(--radii-8)}#calculator .form__calc-row{display:-webkit-box;display:-ms-flexbox;display:flex}#calculator .form__calc-row>div{-webkit-box-flex:1;-ms-flex:1;flex:1}#calculator .form__calc-col{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end}#calculator .form__calc-col:first-of-type{padding-right:var(--space-8)}#calculator .form__calc-col:last-of-type{padding-left:var(--space-8)}#calculator .form__submit{display:block;width:100%;height:2.875rem;border:1px solid var(--color-dark);border-radius:var(--radii-8);background-color:var(--color-button);color:var(--color-white);-webkit-transition:background-color .2s ease,-webkit-transform .1s ease-in-out;transition:background-color .2s ease,-webkit-transform .1s ease-in-out;transition:transform .1s ease-in-out,background-color .2s ease;transition:transform .1s ease-in-out,background-color .2s ease,-webkit-transform .1s ease-in-out;cursor:pointer}#calculator .form__submit:hover{background-color:var(--color-black)}#calculator .form__submit:active{-webkit-transform:translateY(2%);-ms-transform:translateY(2%);transform:translateY(2%)}#calculator .calculator__result{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}#calculator .result__top{text-align:center}#calculator .result__title{font-size:var(--fz-md);font-weight:500}#calculator .result__amount{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding-top:var(--space-16);padding-bottom:var(--space-16);font-weight:600}#calculator .result__currency{font-size:var(--fz-xl);padding-right:var(--space-4);line-height:1.2}#calculator .result__number{font-size:3rem;line-height:1}#calculator .result__subtotal{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;padding-top:var(--space-8);padding-bottom:var(--space-8);border-bottom:1px solid var(--color-gray-light);font-size:var(--fz-sm)}#calculator .result__subtotal:last-of-type{border-bottom:none}
`,document.head.appendChild(ze);const Mt="";function Se(e,t){for(let r in e)t(e[r],r)}function z(e,t){e.forEach(t)}function E(e,t){if(!e)throw Error(t)}function T({node:e=[],from:t,source:r,parent:a=t||r,to:n,target:l,child:o=n||l,scope:d={},meta:h={},family:u={type:"regular"},regional:p}={}){let f=ae(a),m=ae(u.links),i=ae(u.owners),c=[];z(e,v=>v&&$(c,v));let s={id:pt(),seq:c,next:ae(o),meta:h,scope:d,family:{type:u.type||"crosslink",links:m,owners:i}};return z(m,v=>$(X(v),s)),z(i,v=>$(Z(v),s)),z(f,v=>$(v.next,s)),p&&q&&je(U(q),[s]),s}function Pe(e,t,r){let a,n=S,l=null,o=b;if(e.target&&(t=e.params,r=e.defer,a=e.meta,n="page"in e?e.page:n,e.stack&&(l=e.stack),o=re(e)||o,e=e.target),o&&b&&o!==b&&(b=null),Array.isArray(e))for(let c=0;c<e.length;c++)R("pure",n,P(e[c]),l,t[c],o,a);else R("pure",n,P(e),l,t,o,a);if(r&&!oe)return;let d,h,u,p,f,m,i={isRoot:oe,currentPage:S,scope:b,isWatch:ye,isPure:ne};oe=0;e:for(;p=kt();){let{idx:c,stack:s,type:v}=p;u=s.node,S=f=s.page,b=re(s),f?m=f.reg:b&&(m=b.reg);let le=!!f,A=!!b,Q={fail:0,scope:u.scope};d=h=0;for(let _=c;_<u.seq.length&&!d;_++){let x=u.seq[_];if(x.order){let{priority:k,barrierID:g}=x.order,y=g?f?`${f.fullID}_${g}`:g:0;if(_!==c||v!==k){g?he.has(y)||(he.add(y),be(_,s,k,g)):be(_,s,k);continue e}g&&he.delete(y)}switch(x.type){case"mov":{let g,y=x.data;switch(y.from){case H:g=U(s);break;case"a":case"b":g=s[y.from];break;case"value":g=y.store;break;case"store":if(m&&!m[y.store.id])if(le){let _e=Be(f,y.store.id);s.page=f=_e,_e?m=_e.reg:A?(O(b,y.store,0,1,y.softRead),m=b.reg):m=void 0}else A&&O(b,y.store,0,1,y.softRead);g=Te(m&&m[y.store.id]||y.store)}switch(y.to){case H:s.value=g;break;case"a":case"b":s[y.to]=g;break;case"store":wt(f,b,u,y.target).current=g}break}case"compute":let k=x.data;if(k.fn){ye=w(u,"op")==="watch",ne=k.pure;let g=k.safe?(0,k.fn)(U(s),Q.scope,s):zt(Q,k.fn,s);k.filter?h=!g:s.value=g,ye=i.isWatch,ne=i.isPure}}d=Q.fail||h}if(!d){let _=U(s),x=re(s);if(z(u.next,k=>{R("child",f,k,s,_,x)}),x){w(u,"needFxCounter")&&R("child",f,x.fxCount,s,_,x),w(u,"storeChange")&&R("child",f,x.storeChange,s,_,x),w(u,"warnSerialize")&&R("child",f,x.warnSerializeNode,s,_,x);let k=x.additionalLinks[u.id];k&&z(k,g=>{R("child",f,g,s,_,x)})}}}oe=i.isRoot,S=i.currentPage,b=re(i)}function st(e,t){let r,a,n=e;if(t){let l=dt(t);e.length===0?(r=l.path,a=l.fullName):(r=l.path.concat([e]),a=l.fullName.length===0?e:l.fullName+"/"+e)}else r=e.length===0?[]:[e],a=e;return{shortName:n,fullName:a,path:r}}function $e(e,t){let r=t?e:e[0];qe(r);let a=r.or,n=r.and;if(n){let l=t?n:n[0];if(M(l)&&"and"in l){let o=$e(n,t);e=o[0],a={...a,...o[1]}}else e=n}return[e,a]}function W(e,...t){let r=Ee();if(r){let a=r.handlers[e];if(a)return a(r,...t)}}function Y(e,t){let r=J({or:t,and:typeof e=="string"?{name:e}:e}),a=(o,...d)=>(G(!w(a,"derived"),"call of derived event","createEvent"),G(!ne,"unit call from pure function","operators like sample"),S?((h,u,p,f)=>{let m=S,i=null;if(u)for(i=S;i&&i.template!==u;)i=I(i);Ye(i);let c=h.create(p,f);return Ye(m),c})(a,n,o,d):a.create(o,d)),n=Ee(),l=Object.assign(a,{graphite:T({meta:Je(r.actualOp||"event",a,r),regional:1}),create:o=>(Pe({target:a,params:o,scope:b}),o),watch:o=>Ve(a,o),map:o=>ke(a,B,o,[F()]),filter:o=>ke(a,"filter",o.fn?o:o.fn,[F(ce,1)]),filterMap:o=>ke(a,"filterMap",o,[F(),ue(d=>!L(d),1)]),prepend(o){let d=Y("* → "+a.shortName,{parent:I(a)});return W("eventPrepend",P(d)),ve(d,a,[F()],"prepend",o),Ge(a,d),d}});return r!=null&&r.domain&&r.domain.hooks.event(l),V(l,"id",l.graphite.id),Ae(l.graphite),l}function Ne(e,t,r,a){return bt(r,t,"first argument"),E(C(a),"second argument should be a function"),G(!w(e,"derived"),`${t} in derived store`,`${t} in store created via createStore`),z(Array.isArray(r)?r:[r],n=>{e.off(n),te(e).set(n,Ue(Ke(n,e,"on",gt,a)))}),e}function N(e,t){let r=J(t),a=xt(e),n=Y({named:"updates",derived:1});W("storeBase",a);let l=a.id,o={subscribers:new Map,updates:n,defaultState:e,stateRef:a,getState(){let i,c=a;if(S){let s=S;for(;s&&!s.reg[l];)s=I(s);s&&(i=s)}return!i&&b&&(O(b,a,1),i=b),i&&(c=i.reg[l]),Te(c)},setState:i=>Pe({target:o,params:i,defer:1,scope:b}),reset:(...i)=>(z(i,c=>Ne(o,".reset",c,()=>o.defaultState)),o),on:(i,c)=>Ne(o,".on",i,c),off(i){let c=te(o).get(i);return c&&(c(),te(o).delete(i)),o},map(i,c){let s,v;M(i)&&(s=i,i=i.fn),G(L(c),"second argument of store.map","updateFilter");let le=o.getState();L(le)||(v=i(le,c));let A=N(v,{name:`${o.shortName} → *`,derived:1,and:s}),Q=Ke(o,A,B,Fe,i);return vt(ee(A),{type:B,fn:i,from:a}),ee(A).noInit=1,W("storeMap",a,Q),A},watch(i,c){if(!c||!Ie(i)){let s=Ve(o,i);return W("storeWatch",a,i)||i(o.getState()),s}return E(C(c),"second argument should be a function"),i.watch(s=>c(o.getState(),s))}},d=Je("store",o,r),h=o.defaultConfig.updateFilter;o.graphite=T({scope:{state:a,fn:h},node:[ue((i,c,s)=>(s.scope&&!s.scope.reg[a.id]&&(s.b=1),i)),yt(a),ue((i,c,{a:s,b:v})=>!L(i)&&(i!==s||v),1),h&&F(Fe,1),de({from:H,target:a})],child:n,meta:{...d,defaultState:e},regional:1}),V(o,"id",o.graphite.id),V(o,"rootStateRefId",l);let u=w(o,"serialize"),p=w(o,"derived"),f=u==="ignore",m=w(o,"sid");return m&&(V(o,"storeChange",1),a.sid=m),m||f||p||V(o,"warnSerialize",1),E(p||!L(e),"current state can't be undefined, use null instead"),je(o,[n]),r!=null&&r.domain&&r.domain.hooks.store(o),p||(o.reinit=Y({named:"reinit"}),o.reset(o.reinit)),a.meta=o.graphite.meta,Ae(o.graphite),o}function j(...e){let[[t,r],a]=$e(e),n={};return Se(r,(l,o)=>{let d=n[o]=Y(o,{parent:I(t),config:a});t.on(d,l),Ge(t,d)}),n}let ct=typeof Symbol<"u"&&Symbol.observable||"@@observable",B="map",H="stack",P=e=>e.graphite||e,X=e=>e.family.owners,Z=e=>e.family.links,ee=e=>e.stateRef,U=e=>e.value,te=e=>e.subscribers,I=e=>e.parent,re=e=>e.scope,w=(e,t)=>P(e).meta[t],V=(e,t,r)=>P(e).meta[t]=r,dt=e=>e.compositeName,Ie=e=>(C(e)||M(e))&&"kind"in e;const Me=e=>t=>Ie(t)&&t.kind===e;let Ce=Me("store"),ft=Me("domain"),ie=(e,t)=>{let r=e.indexOf(t);r!==-1&&e.splice(r,1)},$=(e,t)=>e.push(t),G=(e,t,r)=>!e&&console.error(`${t} is deprecated${r?`, use ${r} instead`:""}`);const se=()=>{let e=0;return()=>""+ ++e};let ut=se(),Re=se(),pt=se(),q=null,Ae=e=>{},Ee=()=>q,mt=e=>(e&&q&&q.sidRoot&&(e=`${q.sidRoot}|${e}`),e),je=(e,t)=>{let r=P(e);z(t,a=>{let n=P(a);r.family.type!=="domain"&&(n.family.type="crosslink"),$(X(n),r),$(Z(r),n)})},ae=(e=[])=>(Array.isArray(e)?e:[e]).flat().map(P),M=e=>typeof e=="object"&&e!==null,C=e=>typeof e=="function",L=e=>e===void 0,qe=e=>E(M(e)||C(e),"expect first argument be an object");const Le=(e,t,r,a)=>E(!(!M(e)&&!C(e)||!("family"in e)&&!("graphite"in e)),`${t}: expect ${r} to be a unit (store, event or effect)${a}`);let bt=(e,t,r)=>{Array.isArray(e)?z(e,(a,n)=>Le(a,t,`${n} item of ${r}`,"")):Le(e,t,r," or array of units")},Fe=(e,{fn:t},{a:r})=>t(e,r),gt=(e,{fn:t},{a:r})=>t(r,e),ce=(e,{fn:t})=>t(e);const De=(e,t,r,a)=>{let n={id:Re(),type:e,data:t};return r&&(n.order={priority:r},a&&(n.order.barrierID=++ht)),n};let ht=0,de=({from:e="store",store:t,target:r,to:a=r?"store":H,batch:n,priority:l})=>De("mov",{from:e,store:t,to:a,target:r},l,n),fe=({fn:e,batch:t,priority:r,safe:a=0,filter:n=0,pure:l=0})=>De("compute",{fn:e,safe:a,filter:n,pure:l},r,t),Oe=({fn:e})=>fe({fn:e,priority:"effect"}),ue=(e,t,r)=>fe({fn:e,safe:1,filter:t,priority:r&&"effect"}),yt=(e,t,r)=>de({store:e,to:t?H:"a",priority:r&&"sampler",batch:1}),F=(e=ce,t)=>fe({fn:e,pure:1,filter:t}),xt=e=>({id:Re(),current:e}),Te=({current:e})=>e,vt=(e,t)=>{e.before||(e.before=[]),$(e.before,t)},D=null;const pe=(e,t)=>{if(!e)return t;if(!t)return e;let r;return(e.v.type===t.v.type&&e.v.id>t.v.id||ge(e.v.type)>ge(t.v.type))&&(r=e,e=t,t=r),r=pe(e.r,t),e.r=e.l,e.l=r,e},me=[];let We=0;for(;We<6;)$(me,{first:null,last:null,size:0}),We+=1;const kt=()=>{for(let e=0;e<6;e++){let t=me[e];if(t.size>0){if(e===3||e===4){t.size-=1;let a=D.v;return D=pe(D.l,D.r),a}t.size===1&&(t.last=null);let r=t.first;return t.first=r.r,t.size-=1,r.v}}},R=(e,t,r,a,n,l,o)=>be(0,{a:null,b:null,node:r,parent:a,value:n,page:t,scope:l,meta:o},e),be=(e,t,r,a=0)=>{let n=ge(r),l=me[n],o={v:{idx:e,stack:t,type:r,id:a},l:null,r:null};n===3||n===4?D=pe(D,o):(l.size===0?l.first=o:l.last.r=o,l.last=o),l.size+=1},ge=e=>{switch(e){case"child":return 0;case"pure":return 1;case"read":return 2;case"barrier":return 3;case"sampler":return 4;case"effect":return 5;default:return-1}},he=new Set;let b,oe=1,ye=0,ne=0,S=null,Ye=e=>{S=e};const Be=(e,t)=>{if(e){for(;e&&!e.reg[t];)e=I(e);if(e)return e}return null};let wt=(e,t,r,a,n)=>{let l=Be(e,a.id);return l?l.reg[a.id]:t?(O(t,a,n),t.reg[a.id]):a};const _t=e=>e;let O=(e,t,r,a,n)=>{var l;let o=e.reg,d=t.sid,h=t==null||(l=t.meta)===null||l===void 0?void 0:l.serialize,u=e.fromSerialize&&h!=="ignore"&&(h==null?void 0:h.read)||_t;if(o[t.id])return;let p={id:t.id,current:t.current,meta:t.meta};if(p.id in e.values.idMap)p.current=e.values.idMap[p.id];else if(d&&d in e.values.sidMap&&!(d in e.sidIdMap))p.current=u(e.values.sidMap[d]);else if(t.before&&!n){let f=0,m=r||!t.noInit||a;z(t.before,i=>{switch(i.type){case B:{let c=i.from;if(c||i.fn){c&&O(e,c,r,a);let s=c&&o[c.id].current;m&&(p.current=i.fn?i.fn(s):s)}break}case"field":f||(f=1,p.current=Array.isArray(p.current)?[...p.current]:{...p.current}),O(e,i.from,r,a),m&&(p.current[i.field]=o[o[i.from.id].id].current)}})}d&&(e.sidIdMap[d]=t.id),o[t.id]=p};const zt=(e,t,r)=>{try{return t(U(r),e.scope,r)}catch(a){console.error(a),e.fail=1,e.failReason=a}};let J=(e,t={})=>(M(e)&&(J(e.or,t),Se(e,(r,a)=>{L(r)||a==="or"||a==="and"||(t[a]=r)}),J(e.and,t)),t);const He=(e,t)=>{ie(e.next,t),ie(X(e),t),ie(Z(e),t)},xe=(e,t,r)=>{let a;e.next.length=0,e.seq.length=0,e.scope=null;let n=Z(e);for(;a=n.pop();)He(a,e),(t||r&&w(e,"op")!=="sample"||a.family.type==="crosslink")&&xe(a,t,w(a,"op")!=="on"&&r);for(n=X(e);a=n.pop();)He(a,e),r&&a.family.type==="crosslink"&&xe(a,t,w(a,"op")!=="on"&&r)},K=e=>e.clear();let St=(e,{deep:t}={})=>{let r=0;if(e.ownerSet&&e.ownerSet.delete(e),Ce(e))K(te(e));else if(ft(e)){r=1;let a=e.history;K(a.events),K(a.effects),K(a.stores),K(a.domains)}xe(P(e),!!t,r)},Ue=e=>{let t=()=>St(e);return t.unsubscribe=t,t},ve=(e,t,r,a,n)=>T({node:r,parent:e,child:t,scope:{fn:n},meta:{op:a},family:{owners:[e,t],links:t},regional:1}),Ve=(e,t)=>(E(C(t),".watch argument should be a function"),Ue(T({scope:{fn:t},node:[Oe({fn:ce})],parent:e,meta:{op:"watch"},family:{owners:e},regional:1}))),Ge=(e,t,r="event")=>{I(e)&&I(e).hooks[r](t)},Je=(e,t,r)=>{let a=J(r),n=e==="domain",l=ut(),{sid:o=null,named:d=null,domain:h=null,parent:u=h}=a,p=d||a.name||(n?"":l),f=st(p,u),m={op:t.kind=e,name:t.shortName=p,sid:t.sid=mt(o),named:d,unitId:t.id=l,serialize:a.serialize,derived:a.derived,config:a};return t.parent=u,t.compositeName=f,t.defaultConfig=a,t.thru=i=>(G(0,"thru","js pipe"),i(t)),t.getType=()=>f.fullName,!n&&(t.subscribe=i=>(qe(i),t.watch(C(i)?i:c=>i.next&&i.next(c))),t[ct]=()=>t),m};const ke=(e,t,r,a)=>{let n;M(r)&&(n=r,r=r.fn);let l=Y({name:`${e.shortName} → *`,derived:1,and:n});return ve(e,l,a,t,r),l},Ke=(e,t,r,a,n)=>{let l=ee(t),o=de({store:l,to:"a",priority:"read"});r===B&&(o.data.softRead=1);let d=[o,F(a)];return W("storeOnMap",l,d,Ce(e)&&ee(e)),ve(e,t,d,r,n)};T({node:[Oe({fn:({fn:e,value:t})=>e(t)})],meta:{op:"fx",fx:"sidechain"}});const Qe=N(0),we=N(0),Xe=N(0),Ze=N(0),et=N(0),tt=N(0),{setLoanAmount:rt}=j(Qe,{setLoanAmount:(e,t)=>t}),{setLoanTermMonth:at}=j(we,{setLoanTermMonth:(e,t)=>t}),{setInterestRate:ot}=j(Xe,{setInterestRate:(e,t)=>t}),{setMonthlyPayments:nt}=j(Ze,{setMonthlyPayments:(e,t)=>t}),{setPrincipalPaid:lt}=j(et,{setPrincipalPaid:(e,t)=>t}),{setInterestPaid:it}=j(tt,{setInterestPaid:(e,t)=>t}),Pt=(e,t,r,a)=>{we.watch(n=>{e["loan-term-month"].value=n}),Ze.watch(n=>{t.textContent=`${n.toFixed(2)}`}),et.watch(n=>{const l=n<1e3?n*1e3:n;r.textContent=`${l.toLocaleString("en-US")}`}),tt.watch(n=>{a.textContent=`${n}`})},$t=e=>{e.addEventListener("input",t=>{const r=t.target;switch(r.name){case"loan-amount":rt(Number(r.value));break;case"loan-term-month":at(Number(r.value));break;case"interest-rate":ot(Number(r.value));break;default:return!1}})},Nt=e=>{e.addEventListener("submit",t=>{t.preventDefault();const r=Qe.getState(),n=Xe.getState()/100/12,l=we.getState(),o=r*(n*Math.pow(1+n,l))/(Math.pow(1+n,l)-1),d=r,h=o*l-r;nt(Number(o.toFixed(2))),lt(Number(d.toFixed(3))),it(Number(h.toFixed(2)))})},It=(e,t,r,a)=>{const n=new FormData(e);for(const[l,o]of n)switch(!0){case l==="loan-amount":rt(Number(o));break;case l==="loan-term-month":at(Number(o));break;case l==="interest-rate":ot(Number(o));break;default:return!1}nt(Number(t.textContent||0)),lt(Number(r.textContent||0)),it(Number(a.textContent||0))};(()=>{const e=document.getElementById("calculator"),t=e==null?void 0:e.querySelector('[data-calc="form"]'),r=e==null?void 0:e.querySelector('[data-calc="result"]');if(!e||!t||!r)return!1;const a=r.querySelector('[data-calc="monthly-payments"]'),n=r.querySelector('[data-calc="principal-paid"]'),l=r.querySelector('[data-calc="interest-paid"]');return!a||!n||!l?!1:($t(t),Nt(t),It(t,a,n,l),Pt(t,a,n,l),!0)})()})();
