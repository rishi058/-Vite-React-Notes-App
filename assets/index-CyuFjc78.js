function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/RoundedPolygonDrawer-BmlEigBa.js","assets/index-CKF4anYh.js","assets/index-Cdb3OlsM.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as d}from"./index-CKF4anYh.js";async function r(o,a=!0){const{RoundedPolygonDrawer:e}=await d(()=>import("./RoundedPolygonDrawer-BmlEigBa.js"),__vite__mapDeps([0,1,2]));await o.addShape("rounded-polygon",new e,a)}export{r as loadRoundedPolygonShape};
