function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/SpiralDrawer-B2stMoLX.js","assets/index-CKF4anYh.js","assets/index-Cdb3OlsM.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-CKF4anYh.js";async function o(a,r=!0){const{SpiralDrawer:i}=await t(()=>import("./SpiralDrawer-B2stMoLX.js"),__vite__mapDeps([0,1,2]));await a.addShape("spiral",new i,r)}export{o as loadSpiralShape};
