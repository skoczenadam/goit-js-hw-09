!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){o[e]=n},n.parcelRequired7c6=r);var i=r("6JpON"),a=document.querySelector('[name="delay"]'),u=document.querySelector('[name="step"]'),l=document.querySelector('[name="amount"]'),c=document.querySelector('[type="submit"]'),d=1,f=Number(a.value),s="";c.addEventListener("click",(function(n){n.preventDefault(),f=Number(a.value),clearInterval(s),setTimeout((function(){s=setInterval((function(){var n,t,o;(n=d,t=f,o={position:n,delay:t},new Promise((function(e,r){var i,a;Math.random()>.3?e((n=(i=o).position,t=i.delay,i)):r((n=(a=o).position,t=a.delay,a)),d++,f+=Number(u.value),d==Number(l.value)+1&&(clearInterval(s),d=1)}))).then((function(n){var t=n.position,o=n.delay;e(i).Notify.success("Fulfilled promise ".concat(t," in ").concat(o,"ms"))})).catch((function(n){var t=n.position,o=n.delay;e(i).Notify.failure("Rejected promise ".concat(t," in ").concat(o,"ms"))}))}),u.value)}),a.value)}))}();
//# sourceMappingURL=03-promises.49d620bd.js.map