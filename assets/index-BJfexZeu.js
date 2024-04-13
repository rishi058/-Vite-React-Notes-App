function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/PolygonPathGenerator-DBoSdi3m.js","assets/index-CKF4anYh.js","assets/index-Cdb3OlsM.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as e}from"./index-CKF4anYh.js";const n="polygonPathGenerator";async function P(o,t=!0){const{PolygonPathGenerator:a}=await e(()=>import("./PolygonPathGenerator-DBoSdi3m.js"),__vite__mapDeps([0,1,2]));await o.addPathGenerator(n,new a,t)}export{P as loadPolygonPath,n as polygonPathName};
