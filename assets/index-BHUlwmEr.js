function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/HsvColorManager-0IoMKhTz.js","assets/index-B5p0OL-A.js","assets/index-Cdb3OlsM.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as a,a as r}from"./index-B5p0OL-A.js";async function t(){const{HsvColorManager:o}=await a(()=>import("./HsvColorManager-0IoMKhTz.js"),__vite__mapDeps([0,1,2]));r(new o)}export{t as loadHsvColorPlugin};
