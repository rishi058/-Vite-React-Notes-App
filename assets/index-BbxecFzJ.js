function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/ArrowDrawer-Bk3B3mMI.js","assets/index-B5p0OL-A.js","assets/index-Cdb3OlsM.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-B5p0OL-A.js";async function _(r,a=!0){const{ArrowDrawer:o}=await t(()=>import("./ArrowDrawer-Bk3B3mMI.js"),__vite__mapDeps([0,1,2]));await r.addShape("arrow",new o,a)}export{_ as loadArrowShape};
