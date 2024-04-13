function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/SimplexNoiseGenerator-CNIEZ1_d.js","assets/SimplexNoise-BslOa3yb.js","assets/index-B5p0OL-A.js","assets/index-Cdb3OlsM.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as a}from"./index-B5p0OL-A.js";const i="simplexNoise";async function s(e,o=!0){const{SimplexNoiseGenerator:t}=await a(()=>import("./SimplexNoiseGenerator-CNIEZ1_d.js"),__vite__mapDeps([0,1,2,3]));await e.addPathGenerator(i,new t,o)}export{s as loadSimplexNoisePath,i as simplexNoisePathName};
