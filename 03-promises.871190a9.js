function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var l=r("7Y9D8");const i=document.querySelector('[name="delay"]'),u=document.querySelector('[name="step"]'),a=document.querySelector('[name="amount"]'),d=document.querySelector('[type="submit"]');let s=1,c=Number(i.value),f="";d.addEventListener("click",(t=>{t.preventDefault(),c=Number(i.value),clearInterval(f),setTimeout((()=>{f=setInterval((()=>{(function(e,t){const n={position:e,delay:t};return new Promise(((o,r)=>{Math.random()>.3?o(({position:e,delay:t}=n)):r(({position:e,delay:t}=n)),s++,c+=Number(u.value),s==Number(a.value)+1&&(clearInterval(f),s=1)}))})(s,c).then((({position:t,delay:n})=>{e(l).Notify.success(`Fulfilled promise ${t} in ${n}ms`)})).catch((({position:t,delay:n})=>{e(l).Notify.failure(`Rejected promise ${t} in ${n}ms`)}))}),u.value)}),i.value)}));
//# sourceMappingURL=03-promises.871190a9.js.map
