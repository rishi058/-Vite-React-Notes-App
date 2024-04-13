function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/PerlinNoiseGenerator-SalVXdnI.js","assets/index-B5p0OL-A.js","assets/index-Cdb3OlsM.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as a}from"./index-B5p0OL-A.js";const i="perlinNoise";async function n(e,o=!0){const{PerlinNoiseGenerator:t}=await a(()=>import("./PerlinNoiseGenerator-SalVXdnI.js"),__vite__mapDeps([0,1,2]));await e.addPathGenerator(i,new t,o)}export{n as loadPerlinNoisePath,i as perlinNoisePathName};
