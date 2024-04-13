function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/ArrowDrawer-DpKIIZse.js","assets/index-CKF4anYh.js","assets/index-Cdb3OlsM.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-CKF4anYh.js";async function _(r,a=!0){const{ArrowDrawer:o}=await t(()=>import("./ArrowDrawer-DpKIIZse.js"),__vite__mapDeps([0,1,2]));await r.addShape("arrow",new o,a)}export{_ as loadArrowShape};
