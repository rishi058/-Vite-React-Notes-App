function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/CanvasMaskPlugin-aSGkxENe.js","assets/index-B5p0OL-A.js","assets/index-Cdb3OlsM.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-B5p0OL-A.js";async function _(a,i=!0){const{CanvasMaskPlugin:n}=await t(()=>import("./CanvasMaskPlugin-aSGkxENe.js"),__vite__mapDeps([0,1,2]));await a.addPlugin(new n,i)}export{_ as loadCanvasMaskPlugin};
