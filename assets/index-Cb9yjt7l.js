function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/ZigZagPathGenerator-ZDQ0mMme.js","assets/index-CKF4anYh.js","assets/index-Cdb3OlsM.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./index-CKF4anYh.js";const r="zigZagPathGenerator";async function n(a,t=!0){const{ZigZagPathGenerator:e}=await o(()=>import("./ZigZagPathGenerator-ZDQ0mMme.js"),__vite__mapDeps([0,1,2]));await a.addPathGenerator(r,new e,t)}export{n as loadZigZagPath,r as zigZagPathName};
