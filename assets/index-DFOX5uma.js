function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/SVGPathGenerator-C_as1sVy.js","assets/index-CKF4anYh.js","assets/index-Cdb3OlsM.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./index-CKF4anYh.js";const r="svgPathGenerator";async function _(t,a=!0){const{SVGPathGenerator:e}=await o(()=>import("./SVGPathGenerator-C_as1sVy.js"),__vite__mapDeps([0,1,2]));await t.addPathGenerator(r,new e,a)}export{_ as loadSVGPath,r as svgPathName};
