function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/TrailDrawer-ChHYHHYE.js","assets/index-CKF4anYh.js","assets/index-Cdb3OlsM.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-CKF4anYh.js";async function o(a,t=!0){const{TrailDrawer:r}=await i(()=>import("./TrailDrawer-ChHYHHYE.js"),__vite__mapDeps([0,1,2]));await a.addEffect("trail",new r,t)}export{o as loadTrailEffect};
