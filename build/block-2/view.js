import*as t from"@wordpress/interactivity";var e={d:(t,o)=>{for(var n in o)e.o(o,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:o[n]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)};const o=(r={getContext:()=>t.getContext,store:()=>t.store},c={},e.d(c,r),c),{state:n}=(0,o.store)("counter-block",{state:{},actions:{increment:()=>{(0,o.getContext)().count++},decrement:()=>{(0,o.getContext)().count--}},callbacks:{logCount:()=>{const{count:t}=(0,o.getContext)();console.log(`Count: ${t}`)}}});var r,c;