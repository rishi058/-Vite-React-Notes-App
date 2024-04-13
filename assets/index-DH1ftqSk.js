function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/CurlNoiseGenerator-5-gzdWRw.js","assets/SimplexNoise-BslOa3yb.js","assets/index-CKF4anYh.js","assets/index-Cdb3OlsM.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as e}from"./index-CKF4anYh.js";const r="curlNoise";async function n(o,t=!0){const{CurlNoiseGenerator:a}=await e(()=>import("./CurlNoiseGenerator-5-gzdWRw.js"),__vite__mapDeps([0,1,2,3]));await o.addPathGenerator(r,new a,t)}export{r as curlNoisePathName,n as loadCurlNoisePath};
