if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return r[e]||(s=new Promise((async s=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},s=(s,r)=>{Promise.all(s.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(s)};self.define=(s,i,c)=>{r[s]||(r[s]=Promise.resolve().then((()=>{let r={};const n={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return r;case"module":return n;default:return e(s)}}))).then((e=>{const s=c(...e);return r.default||(r.default=s),r}))})))}}define("./sw.js",["./workbox-3b5792f5"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/all_pages.f1cf400a.js",revision:"4bcab4a463ed42195003bfc13d11feea"},{url:"assets/index.c21f8199.css",revision:"3ee3a303e67a7d09b027b547d63c5035"},{url:"assets/index.fa142b2f.js",revision:"15c931c3f144c9802ae8bb9c390ac8b6"},{url:"assets/workbox-window.prod.es5.73a2a4cf.js",revision:"786692479fa3c4f791eb2ba6ec2b3f74"},{url:"icon-152.png",revision:"50e945560c4081853352f0c5aac18167"},{url:"icon-192.png",revision:"b573747086f77d0d50a00129ccb002da"},{url:"icon-512.png",revision:"a816ab0a11cb6e077d43da25d0e0690e"},{url:"index.html",revision:"b9f70b22e6097f00138e1694f6c78191"},{url:"manifest.webmanifest",revision:"edc8bf47ffdcbdbaf74a17a3d5807ada"},{url:"VERSION.txt",revision:"4310a97b19c9ca0f88e032de5cd23ee4"}],{})}));
//# sourceMappingURL=sw.js.map
