import*as e from"@wordpress/interactivity";var t={d:(e,o)=>{for(var r in o)t.o(o,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:o[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};const o=(a={getElement:()=>e.getElement,store:()=>e.store},l={},t.d(l,a),l),{state:r}=(0,o.store)("form-block",{state:{},actions:{submit:()=>{alert(`Hello ${r.name}!`)}},callbacks:{setName:()=>{const{ref:e}=(0,o.getElement)();r.name=e.value,console.log(e.value)},logForm:()=>{const{name:e}=r;console.log(`Name: ${e}`)}}});var a,l;