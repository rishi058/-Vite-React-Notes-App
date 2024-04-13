function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/ZigZagPathGenerator-Dngotp7F.js","assets/index-B5p0OL-A.js","assets/index-Cdb3OlsM.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./index-B5p0OL-A.js";const r="zigZagPathGenerator";async function n(a,t=!0){const{ZigZagPathGenerator:e}=await o(()=>import("./ZigZagPathGenerator-Dngotp7F.js"),__vite__mapDeps([0,1,2]));await a.addPathGenerator(r,new e,t)}export{n as loadZigZagPath,r as zigZagPathName};
