function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/CurvesPathGenerator-CkPBY2JN.js","assets/index-CKF4anYh.js","assets/index-Cdb3OlsM.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as r}from"./index-CKF4anYh.js";const o="curvesPathGenerator";async function s(t,a=!0){const{CurvesPathGenerator:e}=await r(()=>import("./CurvesPathGenerator-CkPBY2JN.js"),__vite__mapDeps([0,1,2]));await t.addPathGenerator(o,new e,a)}export{o as curvesPathName,s as loadCurvesPath};
